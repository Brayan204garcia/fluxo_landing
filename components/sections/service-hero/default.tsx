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

  return (
    <Section
      className={cn(
        "overflow-hidden pt-4 sm:pt-8 md:pt-12 pb-8 sm:pb-14",
        className
      )}
    >
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 text-center sm:gap-10">
        <div className="animate-appear inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand backdrop-blur-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
          </span>
          {badge}
        </div>

        <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-[1.15] font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-[1.1] md:text-7xl md:leading-[1.05]">
          {title}
        </h1>

        <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[680px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
          {description}
        </p>

        <div className="animate-appear relative z-10 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 opacity-0 delay-300 px-4 sm:px-0">
          <LinkButton
            href={waUrl}
            variant="default"
            size="lg"
            className="w-full sm:w-auto justify-center text-center font-semibold text-base py-3 sm:py-2.5 px-6"
          >
            Quiero este servicio
          </LinkButton>
          <LinkButton
            href="#contacto"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto justify-center text-center font-semibold text-base py-3 sm:py-2.5 px-6"
          >
            Ver mas informacion
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
