import { z } from "zod";

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo")
    .trim(),
  email: z
    .string()
    .email("Ingresa un correo electrónico válido")
    .max(150, "El email es demasiado largo")
    .toLowerCase()
    .trim(),
  empresa: z
    .string()
    .max(100, "El nombre de la empresa es demasiado largo")
    .optional()
    .transform((val) => val?.trim() || ""),
  mensaje: z
    .string()
    .min(10, "El mensaje debe contener al menos 10 caracteres")
    .max(2000, "El mensaje no puede exceder 2000 caracteres")
    .trim(),
  // Anti-bot security fields
  website_url: z.string().optional(), // Honeypot field (MUST be empty)
  form_timestamp: z.number().optional(), // Time trap (Timestamp when form was rendered)
  turnstile_token: z.string().optional(), // Cloudflare Turnstile token
});

export type ContactFormData = z.infer<typeof contactSchema>;
