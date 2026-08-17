import { CheckCircle2, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { LinkButton } from "../../ui/link-button";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
  slug: string;
  whatsappMessage: string;
  className?: string;
}

export default function ServiceHero({
  badge,
  title,
  description,
  slug,
  whatsappMessage,
  className,
}: ServiceHeroProps) {
  const waUrl = `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const isWebOrEcommerce = slug === "paginas-web" || slug === "ecommerce";

  return (
    <Section
      className={cn(
        "overflow-hidden pt-4 sm:pt-8 md:pt-12 pb-10 sm:pb-16",
        className
      )}
    >
      <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Badge, Title, Description, Bullet Highlights & Buttons (ALL LEFT-ALIGNED) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left gap-6">
          <div className="animate-appear inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
            </span>
            {badge}
          </div>

          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-transparent drop-shadow-2xl text-left leading-[1.12]">
            {title}
          </h1>

          <p className="text-md sm:text-lg lg:text-xl animate-appear text-muted-foreground relative z-10 font-medium leading-relaxed text-left max-w-[560px] opacity-0 delay-100">
            {description}
          </p>

          {/* Quick Check Highlights */}
          <div className="animate-appear grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-1 opacity-0 delay-200">
            {isWebOrEcommerce ? (
              <>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand shrink-0" />
                  Diseño 100% a tu medida
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand shrink-0" />
                  Pagos PSE, Nequi y Wompi
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand shrink-0" />
                  Optimizado para Google (SEO)
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand shrink-0" />
                  Notificaciones por WhatsApp
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand shrink-0" />
                  Desinfección de malware y virus
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand shrink-0" />
                  Optimización y velocidad
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand shrink-0" />
                  A domicilio en Barrancabermeja
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/90">
                  <CheckCircle2 className="size-4 text-brand shrink-0" />
                  Garantía de satisfacción
                </div>
              </>
            )}
          </div>

          {/* Left-Aligned Buttons */}
          <div className="animate-appear relative z-10 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 opacity-0 delay-300 pt-2">
            <LinkButton
              href={waUrl}
              variant="default"
              size="lg"
              className="w-full sm:w-auto justify-center text-center font-semibold text-base py-3 sm:py-2.5 px-6"
            >
              Cotizar por WhatsApp
            </LinkButton>
            <LinkButton
              href="#caracteristicas"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto justify-center text-center font-semibold text-base py-3 sm:py-2.5 px-6"
            >
              Ver qué incluye
            </LinkButton>
          </div>
        </div>

        {/* Right Column: Photo / Mockup showcase */}
        <div className="lg:col-span-6 xl:col-span-6 relative w-full flex justify-center items-center pt-4 lg:pt-0">
          <div className="relative w-full max-w-[560px]">
            {/* Glow Accent */}
            <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-brand/35 via-purple-600/30 to-blue-600/30 opacity-70 blur-2xl dark:opacity-50 pointer-events-none" />

            {/* Browser Mockup Frame */}
            <MockupFrame size="small" className="rounded-2xl border border-foreground/15 bg-card/90 shadow-2xl backdrop-blur-md overflow-hidden relative z-10">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between border-b border-foreground/10 bg-muted/40 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-background/80 px-3 py-1 text-xs text-muted-foreground border border-foreground/5 font-mono">
                  <span className="text-emerald-500 text-xs">🔒</span>
                  <span>{isWebOrEcommerce ? "https://tu-tienda.com" : "https://soporte-tecnico.local"}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-500">
                  <Sparkles className="size-3.5" />
                  <span>En línea</span>
                </div>
              </div>

              {/* Mockup Screenshot Photo */}
              <Mockup type="responsive" className="border-0 shadow-none">
                <Screenshot
                  srcLight="/dashboard-light.png"
                  srcDark="/dashboard-dark.png"
                  alt={isWebOrEcommerce ? "Páginas Web y Tiendas Online Profesionales" : "Mantenimiento y Seguridad de Computadores"}
                  width={1200}
                  height={750}
                  className="w-full h-auto object-cover"
                />
              </Mockup>
            </MockupFrame>

            {/* Floating Info Badges */}
            {isWebOrEcommerce ? (
              <>
                <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 rounded-2xl border border-foreground/15 bg-background/95 p-3 sm:p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3 z-20">
                  <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted-foreground font-medium">Pasarelas en Colombia</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground">PSE, Nequi & Wompi</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-2xl border border-foreground/15 bg-background/95 p-3 sm:p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3 z-20">
                  <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-brand/10 text-brand shrink-0">
                    <Globe className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted-foreground font-medium">Google SEO Local</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground">Posicionamiento #1</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 rounded-2xl border border-foreground/15 bg-background/95 p-3 sm:p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3 z-20">
                  <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted-foreground font-medium">Estado del Sistema</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground">100% Protegido & Limpio</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-2xl border border-foreground/15 bg-background/95 p-3 sm:p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3 z-20">
                  <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-brand/10 text-brand shrink-0">
                    <Sparkles className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted-foreground font-medium">Atención el mismo día</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground">Barrancabermeja & Remoto</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
