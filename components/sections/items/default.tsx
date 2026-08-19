import {
  ArrowLeftRight,
  Bot,
  Code2,
  GlobeIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Section } from "../../ui/section";
import { cn } from "@/lib/utils";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  variant?: "default" | "glow-brand";
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

const DEFAULT_ITEMS: ItemProps[] = [
  {
    title: "Integraciones con IA",
    description:
      "Asistentes conectados a WhatsApp o Telegram que responden con la información real de tu negocio como catálogos, inventario o procedimientos, usando búsqueda semántica en vez de respuestas genéricas.",
    icon: <Bot className="size-5 stroke-[1.5]" />,
    href: "#contacto",
    variant: "glow-brand",
  },
  {
    title: "Automatización de procesos",
    description:
      "Flujos que conectan tus herramientas como Drive, formularios, bases de datos y mensajería, para que la información se mueva sola entre sistemas sin que nadie tenga que copiarla a mano.",
    icon: <ArrowLeftRight className="size-5 stroke-[1.5]" />,
    href: "#contacto",
    variant: "default",
  },
  {
    title: "Software a medida",
    description:
      "Aplicaciones internas como puntos de venta, control de asistencia y paneles administrativos, diseñadas para cómo tu equipo trabaja de verdad, no ajustadas a la fuerza a una plantilla genérica.",
    icon: <Code2 className="size-5 stroke-[1.5]" />,
    href: "#contacto",
    variant: "default",
  },
  {
    title: "Páginas Web & E-commerce",
    description:
      "Sitios corporativos, landing pages de alta conversión y tiendas virtuales con catálogo y pagos PSE, Nequi y Wompi. Posicionamiento SEO en Google y diseño adaptado a celulares.",
    icon: <GlobeIcon className="size-5 stroke-[1.5]" />,
    href: "/servicios/paginas-web",
    variant: "default",
  },
];

export default function Items({
  title = "Servicios digitales y desarrollo para tu negocio",
  items = DEFAULT_ITEMS,
  className,
}: ItemsProps) {
  return (
    <Section className={className} id="servicios">
      <div className="max-w-container mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <h2 className="max-w-[760px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {items.map((item) => {
              const isGlowBrand = item.variant === "glow-brand";
              return (
                <div
                  key={item.title}
                  className={cn(
                    "relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl p-6 lg:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1",
                    isGlowBrand
                      ? "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 dark:after:bg-brand/70 after:blur-[72px]"
                      : "glass-2 to-transparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/20 after:blur-[72px]"
                  )}
                >
                  <hr
                    className={cn(
                      "absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent z-10",
                      isGlowBrand ? "via-brand" : "via-foreground/60"
                    )}
                  />
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-foreground/5 border border-foreground/10 text-foreground shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative z-10 pt-2 mt-auto">
                    <a
                      href={item.href || "#servicios"}
                      className="flex w-full items-center justify-center rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold cursor-pointer shadow-md transition-colors h-10 px-4 text-xs sm:text-sm"
                    >
                      Más información
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
