import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import FluxoAILogo from "../../logos/fluxo-ai";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <FluxoAILogo className="h-7 w-auto text-foreground" />,
  name = "",
  columns = [
    {
      title: "Soluciones",
      links: [
        { text: "Agentes de IA", href: "#servicios" },
        { text: "Desarrollo Web", href: "#servicios" },
      ],
    },
    {
      title: "Navegación",
      links: [
        { text: "Servicios", href: "#servicios" },
        { text: "Proyectos", href: "#proyectos" },
        { text: "Contacto", href: "#contacto" },
      ],
    },
    {
      title: "Ciudades",
      links: [
        { text: "Barrancabermeja", href: "/ciudad/barrancabermeja" },
        { text: "Bucaramanga", href: "/ciudad/bucaramanga" },
        { text: "Mompox (Bolívar)", href: "/ciudad/mompox-bolivar" },
        { text: "Aguachica (Cesar)", href: "/ciudad/aguachica" },
      ],
    },
    {
      title: "Contacto Directo",
      links: [
        { text: "WhatsApp", href: siteConfig.links.whatsapp },
        { text: "Correo Electrónico", href: siteConfig.links.email },
      ],
    },
  ],
  copyright = "© 2026 Fluxo AI. Todos los derechos reservados.",
  policies = [
    { text: "Política de Privacidad", href: "#" },
    { text: "Términos del Servicio", href: "#" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column) => (
              <FooterColumn key={column.title}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link) => (
                  <a
                    key={`${link.href}-${link.text}`}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy) => (
                <a key={`${policy.href}-${policy.text}`} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
