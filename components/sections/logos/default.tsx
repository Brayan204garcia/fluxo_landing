import Image from "next/image";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Empresas con las que he trabajado",
  badge = false,
  logos = [
    <div key="liceo" className="flex items-center justify-center p-1 transition-all opacity-85 hover:opacity-100">
      <Image
        src="/logos/logo_liceo.svg"
        alt="Liceo Jesús de Nazareth"
        width={240}
        height={80}
        className="h-14 w-auto object-contain sm:h-16"
      />
    </div>,
    <div key="maria-torres" className="flex items-center justify-center p-1 transition-all opacity-90 hover:opacity-100">
      <Image
        src="/logos/maria_torres_contadora_logo.svg"
        alt="María Torres"
        width={240}
        height={80}
        className="h-14 w-auto object-contain sm:h-16"
      />
    </div>,
    <div key="alkana" className="flex items-center justify-center p-1 transition-all opacity-90 hover:opacity-100">
      <Image
        src="/logos/alkana_logo.svg"
        alt="Alkana"
        width={240}
        height={80}
        className="h-14 w-auto object-contain sm:h-16"
      />
    </div>,
    <div key="radiologos" className="flex items-center justify-center p-1 transition-all opacity-90 hover:opacity-100">
      <Image
        src="/logos/radiologos_entrada.png"
        alt="Radiologos"
        width={240}
        height={80}
        className="h-14 w-auto object-contain sm:h-16"
      />
    </div>,
    <div key="fundacion" className="flex items-center justify-center p-1 transition-all opacity-90 hover:opacity-100">
      <Image
        src="/logos/fundacion_logo.svg"
        alt="Fundacion"
        width={240}
        height={80}
        className="h-14 w-auto object-contain sm:h-16"
      />
    </div>,
    <div key="cevicheria" className="flex items-center justify-center p-1 transition-all opacity-90 hover:opacity-100">
      <Image
        src="/logos/logo_cevicheria.svg"
        alt="Cevicheria"
        width={240}
        height={80}
        className="h-14 w-auto object-contain sm:h-16"
      />
    </div>,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={cn("py-6 sm:py-8 md:py-10", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-4 sm:gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          {badge !== false && badge}
          <h2 className="text-base font-semibold sm:text-xl text-muted-foreground">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
