"use client";

import { useState, useEffect, FormEvent } from "react";
import {
  CheckCircle2Icon,
  AlertCircleIcon,
  Loader2Icon,
  MailIcon,
  MessageCircleIcon,
  SendIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { pricingColumnVariants } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface ContactProps {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    mensaje: "",
    website_url: "", // Honeypot trap field (must remain empty)
  });

  const [formTimestamp, setFormTimestamp] = useState<number>(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    // Record timestamp when the user loads the form to prevent instant bot submissions
    setFormTimestamp(Date.now());
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          form_timestamp: formTimestamp,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setStatusMessage(
          data.error || "No se pudo enviar el mensaje. Intenta nuevamente."
        );
        return;
      }

      setStatus("success");
      setStatusMessage(
        data.message || "¡Gracias! Tu consulta ha sido enviada con éxito."
      );

      // Reset form after successful submission
      setFormData({
        nombre: "",
        email: "",
        empresa: "",
        mensaje: "",
        website_url: "",
      });
      setFormTimestamp(Date.now());
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus("error");
      setStatusMessage("Ocurrió un error de conexión. Por favor reintenta más tarde.");
    }
  };

  return (
    <Section id="contacto" className={className}>
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
        <div className="flex flex-col gap-5 text-left">
          <div className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/25">
            <MessageCircleIcon className="size-5" />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Hablemos de lo que quieres automatizar
            </h2>
            <p className="max-w-xl text-base font-medium leading-relaxed text-muted-foreground">
              Cuéntame qué proceso quieres mejorar y te responderé con una ruta
              clara para diseñar agentes, integraciones o sistemas internos para
              tu empresa.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="mailto:contacto@bryan.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              <MailIcon className="size-4" />
              contacto@bryan.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={cn(
            pricingColumnVariants({
              variant: "glow-brand",
              className: "w-full gap-5 p-5 text-left sm:p-8",
            }),
          )}
        >
          <hr className="via-brand absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent" />

          <header className="flex flex-col gap-2">
            <h3 className="flex items-center gap-2 font-bold text-foreground">
              <MailIcon className="text-muted-foreground size-4" />
              Solicita una propuesta
            </h3>
            <p className="text-muted-foreground max-w-[360px] text-sm">
              Completa estos datos y te contacto para revisar el mejor flujo de
              automatización para tu empresa.
            </p>
          </header>

          {/* INVISIBLE HONEYPOT FIELD (Anti-Bot Trap) */}
          <div
            aria-hidden="true"
            className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
          >
            <label htmlFor="website_url">No llenar este campo (Honeypot Trap)</label>
            <input
              id="website_url"
              name="website_url"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_url}
              onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
            />
          </div>

          {/* Status Alert Banners */}
          {status === "success" && (
            <div className="flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-emerald-500" />
              <p className="font-medium">{statusMessage}</p>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
              <AlertCircleIcon className="mt-0.5 size-5 shrink-0" />
              <p className="font-medium">{statusMessage}</p>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-foreground">
              Nombre
              <input
                name="nombre"
                type="text"
                required
                disabled={status === "submitting"}
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="Tu nombre"
                className="h-11 rounded-md border border-input bg-background/70 px-3 text-sm font-medium outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand disabled:opacity-50"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-foreground">
              Email
              <input
                name="email"
                type="email"
                required
                disabled={status === "submitting"}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="correo@empresa.com"
                className="h-11 rounded-md border border-input bg-background/70 px-3 text-sm font-medium outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand disabled:opacity-50"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-foreground">
            Empresa
            <input
              name="empresa"
              type="text"
              disabled={status === "submitting"}
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              placeholder="Nombre de tu empresa"
              className="h-11 rounded-md border border-input bg-background/70 px-3 text-sm font-medium outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand disabled:opacity-50"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-foreground">
            ¿Qué necesitas automatizar?
            <textarea
              name="mensaje"
              required
              rows={5}
              disabled={status === "submitting"}
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              placeholder="Ej: atención por WhatsApp, reportes, ventas, soporte, inventario..."
              className="min-h-32 resize-none rounded-md border border-input bg-background/70 px-3 py-3 text-sm font-medium leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand disabled:opacity-50"
            />
          </label>

          <hr className="border-input" />

          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="w-full font-semibold transition-all"
          >
            {status === "submitting" ? (
              <>
                <Loader2Icon className="size-4 animate-spin" />
                Enviando consulta...
              </>
            ) : (
              <>
                Enviar consulta
                <SendIcon className="size-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </Section>
  );
}
