import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { detectBot } from "@/lib/security/bot-detection";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { contactSchema } from "@/lib/validations/contact";

export const runtime = 'edge';

// Standard security headers for API responses
const SECURITY_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

export async function POST(req: NextRequest) {
  try {
    // 1. Origin & Host Verification (Prevent CSRF & Foreign Site Submissions)
    const origin = req.headers.get("origin");
    const host = req.headers.get("host");
    
    if (origin && host) {
      const originHost = new URL(origin).host;
      if (originHost !== host && !originHost.startsWith("localhost")) {
        console.warn(`[Security Alert] CSRF or foreign origin attempt blocked: ${origin} vs ${host}`);
        return NextResponse.json(
          { success: false, error: "Solicitud rechazada por origen no autorizado." },
          { status: 403, headers: SECURITY_HEADERS }
        );
      }
    }

    // 2. Extract & Validate Client IP
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 3. Rate Limiting Check (Max 3 submissions per IP per 15 minutes)
    const rateLimit = checkRateLimit(clientIp, { limit: 3, windowMs: 15 * 60 * 1000 });
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: `Has superado el límite de envíos. Por favor reintenta en ${Math.ceil(
            rateLimit.resetInSeconds / 60
          )} minutos.`,
        },
        { status: 429, headers: SECURITY_HEADERS }
      );
    }

    // 4. Content-Length Limit Check (Max 10KB payload to prevent memory flooding)
    const contentLength = parseInt(req.headers.get("content-length") || "0", 10);
    if (contentLength > 10 * 1024) {
      return NextResponse.json(
        { success: false, error: "El tamaño del envío excede el límite permitido." },
        { status: 413, headers: SECURITY_HEADERS }
      );
    }

    // 5. Body JSON Parse & Zod Validation
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Cuerpo de solicitud inválido." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const firstError =
        validationResult.error.issues[0]?.message || "Datos ingresados no válidos.";
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    const data = validationResult.data;

    // 6. Anti-Bot Multi-layer Defense Check
    const botCheck = await detectBot({
      websiteUrl: data.website_url,
      formTimestamp: data.form_timestamp,
      turnstileToken: data.turnstile_token,
      mensaje: data.mensaje,
      clientIp,
    });

    if (botCheck.isBot) {
      console.warn(`[Anti-Bot Triggered] IP: ${clientIp} | Motivo: ${botCheck.reason}`);
      if (botCheck.silentResponse) {
        // Return 200 OK without sending email to trap & confuse automated spammers
        return NextResponse.json(
          {
            success: true,
            message: "¡Gracias! Tu mensaje ha sido enviado correctamente.",
          },
          { status: 200, headers: SECURITY_HEADERS }
        );
      }
      return NextResponse.json(
        { success: false, error: "Solicitud rechazada por verificación de seguridad." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    // 7. Send Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL_TO || "contacto@bryan.com";
    const senderEmail =
      process.env.CONTACT_EMAIL_FROM || "Formulario Web <onboarding@resend.dev>";

    if (!resendApiKey) {
      console.warn(
        "⚠️ [CONTACT FORM] RESEND_API_KEY no está configurada en .env.local. Modo demostración activo."
      );
      console.log("📨 [MENSAJE RECIBIDO DEMO]:", {
        nombre: data.nombre,
        email: data.email,
        empresa: data.empresa || "(No especificada)",
        mensaje: data.mensaje,
        clientIp,
      });

      return NextResponse.json(
        {
          success: true,
          message:
            "¡Gracias! Tu mensaje fue procesado correctamente (Modo demostración local activado).",
        },
        { status: 200, headers: SECURITY_HEADERS }
      );
    }

    const resend = new Resend(resendApiKey);

    // Sanitize values against CR/LF Header Injection in Email Subject
    const safeNombre = sanitizeHeaderValue(data.nombre);
    const safeEmpresa = sanitizeHeaderValue(data.empresa || "Empresa");

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
        <h2 style="color: #111827; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0;">
          📥 Nuevo Mensaje de Contacto Web
        </h2>
        
        <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; width: 120px; color: #4b5563; border-bottom: 1px solid #f3f4f6;">Nombre:</td>
            <td style="padding: 10px; color: #111827; border-bottom: 1px solid #f3f4f6;">${escapeHtml(data.nombre)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #4b5563; border-bottom: 1px solid #f3f4f6;">Email:</td>
            <td style="padding: 10px; color: #111827; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb;">${escapeHtml(data.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #4b5563; border-bottom: 1px solid #f3f4f6;">Empresa:</td>
            <td style="padding: 10px; color: #111827; border-bottom: 1px solid #f3f4f6;">${escapeHtml(data.empresa || "No especificada")}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-left: 4px solid #3b82f6; border-radius: 4px;">
          <h3 style="margin-top: 0; color: #374151; font-size: 13px; text-transform: uppercase; tracking: 0.05em;">Consulta / Necesidad:</h3>
          <p style="color: #1f2937; white-space: pre-wrap; margin-bottom: 0; font-size: 15px; line-height: 1.6;">${escapeHtml(data.mensaje)}</p>
        </div>

        <hr style="margin-top: 25px; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size: 12px; color: #9ca3af; text-align: center; margin-bottom: 0;">
          Enviado desde el Formulario Web | IP: ${clientIp} | Fecha: ${new Date().toLocaleString("es-ES")}
        </p>
      </div>
    `;

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: data.email,
      subject: `📥 Consulta de ${safeNombre} (${safeEmpresa})`,
      html: emailHtml,
    });

    if (resendError) {
      console.error("Error al enviar email con Resend:", resendError);
      return NextResponse.json(
        {
          success: false,
          error: `Error de envío (Resend): ${resendError.message || "Ocurrió un inconveniente al enviar el correo."}`,
        },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "¡Gracias! Tu consulta ha sido enviada con éxito. Te responderé pronto.",
        emailId: resendData?.id,
      },
      { status: 200, headers: SECURITY_HEADERS }
    );
  } catch (error) {
    console.error("Error en /api/contact:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}

// Prevents HTML Injection / Reflected XSS in Email Clients
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Prevents CR/LF Mail Header Injection
function sanitizeHeaderValue(str: string): string {
  return str.replace(/[\r\n]+/g, " ").trim();
}
