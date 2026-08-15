"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import FluxoAILogo from "../logos/fluxo-ai";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Servicios",
      content: "default",
    },
    {
      title: "Proyectos",
      content: "components",
    },
    {
      title: "Contacto",
      isLink: true,
      href: "#contacto",
    },
  ],
  components = [
    {
      title: "Agentes de IA",
      href: "#servicios",
      description:
        "Bots conversacionales y asistentes inteligentes integrados con WhatsApp y modelos de lenguaje.",
    },
    {
      title: "Desarrollo Web",
      href: "#servicios",
      description:
        "Creación de aplicaciones web modernas, rápidas y totalmente adaptables.",
    },
    {
      title: "Sistemas Cloud",
      href: "#servicios",
      description:
        "Infraestructura escalable y almacenamiento seguro para empresas.",
    },
    {
      title: "Integraciones API",
      href: "#servicios",
      description:
        "Conexión de sistemas empresariales, pasarelas de pago y servicios de mensajería.",
    },
    {
      title: "Apps Móviles",
      href: "#servicios",
      description:
        "Soluciones móviles multiplataforma orientadas a alta productividad.",
    },
    {
      title: "Soporte y Mantenimiento",
      href: "#contacto",
      description:
        "Asistencia técnica continua, monitoreo de disponibilidad y optimización.",
    },
  ],
  logo = <FluxoAILogo className="h-6 w-auto text-foreground" />,
  logoTitle = "",
  logoDescription = "Soluciones de ingeniería de software a medida y agentes de Inteligencia Artificial para tu empresa.",
  logoHref = "#servicios",
  introItems = [
    {
      title: "Desarrollo web",
      href: "#servicios",
      description:
        "Sitios, landing pages y paneles a medida construidos desde cero para las necesidades reales de tu negocio.",
    },
    {
      title: "Integraciones con IA",
      href: "#servicios",
      description:
        "Asistentes conectados a WhatsApp o Telegram con respuestas sobre la información real de tu negocio.",
    },
    {
      title: "Automatización de procesos",
      href: "#servicios",
      description:
        "Flujos que conectan tus herramientas (Drive, formularios, BD) para mover información sin trabajo manual.",
    },
    {
      title: "Software a medida",
      href: "#servicios",
      description:
        "Aplicaciones internas, puntos de venta y portales de gestión diseñados a la medida de tu equipo.",
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.isLink ? (
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={item.href || ""}>{item.title}</Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[450px] lg:w-[600px] lg:grid-cols-[.85fr_1fr]">
                      <li className="row-span-4">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href={logoHref}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {logoDescription}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro) => (
                        <ListItem
                          key={intro.title}
                          href={intro.href}
                          title={intro.title}
                        >
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
