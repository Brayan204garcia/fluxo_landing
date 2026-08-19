import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { LinkButton } from "../../ui/link-button";
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
        "overflow-hidden pt-4 sm:pt-8 md:pt-12 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Badge, Title, Description & Buttons (ALL LEFT-ALIGNED) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left gap-6 pl-0 sm:pl-2 lg:pl-4">
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

          {/* Left-Aligned Buttons */}
          <div className="animate-appear relative z-10 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 opacity-0 delay-200 pt-2">
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

        {/* Right Column: Imagen con tamaño equilibrado, degradado más suelto y badge flotante */}
        <div className="lg:col-span-6 xl:col-span-6 relative w-full flex justify-center items-center pt-4 lg:pt-0">
          <div className="relative w-full max-w-[520px]">
            {/* Glow sutil de fondo */}
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-brand/25 via-purple-600/20 to-blue-600/20 opacity-60 blur-3xl dark:opacity-40 pointer-events-none" />

            {/* Contenedor de la imagen con máscara de degradado más suave y suelta */}
            <div className="relative overflow-hidden rounded-2xl [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
              <Image
                src={isWebOrEcommerce ? "/hero_paginas_web.png" : "/dashboard-light.png"}
                alt={title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
              {/* Fade inferior muy sutil para difuminar la base */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge: Pasarelas en Colombia */}
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 rounded-2xl border border-foreground/15 bg-background/95 p-3 sm:p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3 z-20">
              <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                <CheckCircle2 className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-muted-foreground font-medium">Pasarelas en Colombia</span>
                <span className="text-xs sm:text-sm font-bold text-foreground">PSE, Nequi & Wompi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
