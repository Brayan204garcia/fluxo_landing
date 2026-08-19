import Image from "next/image";
import { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { LinkButton, type LinkButtonProps } from "../../ui/link-button";
import { Section } from "../../ui/section";

interface HeroButtonProps extends Omit<LinkButtonProps, "children"> {
  text: string;
}

interface HeroProps {
  title?: string;
  description?: string;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

const DEFAULT_HERO_BUTTONS: HeroButtonProps[] = [
  {
    href: "#contacto",
    text: "Hablemos de tu proyecto",
    variant: "default",
  },
  {
    href: siteConfig.links.whatsapp,
    text: "Contactar por WhatsApp",
    variant: "outline",
  },
];

const DEFAULT_HERO_BADGE = (
  <div className="animate-appear inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand backdrop-blur-xs">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
    </span>
    Software a Medida, Automatización IA & Páginas Web en Barrancabermeja
  </div>
);

export default function Hero({
  title = "Todo lo que tu negocio necesita para dejar de operar a mano",
  description = "Desarrollo de software a medida, automatización con Inteligencia Artificial e integraciones para empresas en Barrancabermeja y Santander.",
  badge = DEFAULT_HERO_BADGE,
  buttons = DEFAULT_HERO_BUTTONS,
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "overflow-hidden pt-4 sm:pt-8 md:pt-12 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Badge, Title, Description & Buttons (50% Aligned to Left) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left gap-6 pl-0 sm:pl-2 lg:pl-4">
          {badge !== false && badge}

          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-transparent drop-shadow-2xl text-left leading-[1.12]">
            {title}
          </h1>

          <p className="text-md sm:text-lg lg:text-xl animate-appear text-muted-foreground relative z-10 font-medium leading-relaxed text-left max-w-[560px] opacity-0 delay-100">
            {description}
          </p>

          {/* Left-Aligned Buttons */}
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 opacity-0 delay-200 pt-2">
              {buttons.map((button) => (
                <LinkButton
                  key={`${button.href}-${button.text}`}
                  variant={button.variant || "default"}
                  size="lg"
                  href={button.href}
                  icon={button.icon}
                  iconRight={button.iconRight}
                  className="w-full sm:w-auto justify-center text-center font-semibold text-base py-3 sm:py-2.5 px-6 shrink-0"
                >
                  {button.text}
                </LinkButton>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Photo / Dashboard Showcase (50%) with soft gradient fade */}
        <div className="lg:col-span-6 xl:col-span-6 relative w-full flex justify-center items-center pt-4 lg:pt-0">
          <div className="relative w-full max-w-[520px]">
            {/* Subtle Glow background */}
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-brand/25 via-purple-600/20 to-blue-600/20 opacity-60 blur-3xl dark:opacity-40 pointer-events-none" />

            {/* Container with smooth gradient mask */}
            <div className="relative overflow-hidden rounded-2xl [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
              <Image
                src="/hero_inicio.png"
                alt="Fluxo AI - Desarrollo de Software, Automatización y Páginas Web en Barrancabermeja"
                width={1200}
                height={800}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
              {/* Soft bottom dissolve fade */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge (Top Center) */}
            <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 rounded-xl border border-foreground/15 bg-background/95 py-1.5 px-3 sm:py-2 sm:px-3.5 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20 whitespace-nowrap">
              <div className="flex size-7 sm:size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                <CheckCircle2 className="size-4 sm:size-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground font-medium leading-none">Fluxo AI</span>
                <span className="text-xs font-bold text-foreground mt-0.5 leading-tight">Soluciones a Medida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
