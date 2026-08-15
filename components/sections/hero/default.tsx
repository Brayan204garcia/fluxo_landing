import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { LinkButton, type LinkButtonProps } from "../../ui/link-button";
import { AIChatMockup } from "../../ui/ai-chat-mockup";
import { Section } from "../../ui/section";

interface HeroButtonProps extends Omit<LinkButtonProps, "children"> {
  text: string;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
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

const DEFAULT_HERO_MOCKUP = <AIChatMockup />;

const DEFAULT_HERO_BADGE = (
  <div className="animate-appear inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand backdrop-blur-xs">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
    </span>
    Software & Agentes de IA en Barrancabermeja
  </div>
);

export default function Hero({
  title = "Todo lo que tu negocio necesita para dejar de operar a mano",
  description = "Desarrollo de software a medida, automatización con Inteligencia Artificial e integraciones para empresas en Barrancabermeja y Santander.",
  mockup = DEFAULT_HERO_MOCKUP,
  badge = DEFAULT_HERO_BADGE,
  buttons = DEFAULT_HERO_BUTTONS,
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "overflow-hidden pt-4 sm:pt-8 md:pt-10 pb-6 sm:pb-12",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-2 sm:pt-4 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-[1.15] font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-[1.1] md:text-8xl md:leading-[1.05]">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 opacity-0 delay-300 px-4 sm:px-0">
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
          {mockup !== false && (
            <div className="relative w-full pt-6 sm:pt-8">
              {mockup}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
