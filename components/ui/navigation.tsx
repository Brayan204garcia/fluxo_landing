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
      title: "Tiendas Online",
      href: "/servicios/ecommerce",
      description:
        "E-commerce completo con pagos en línea PSE, Nequi y panel administrativo.",
    },
    {
      title: "Páginas Web",
      href: "/servicios/paginas-web",
      description:
        "Sitios corporativos y landing pages de alta conversión optimizadas para SEO.",
    },
    {
      title: "Eliminación de Virus",
      href: "/servicios/eliminacion-virus",
      description:
        "Servicio técnico y limpieza profunda de computadores en Barrancabermeja y remoto.",
    },
    {
      title: "Software a Medida",
      href: "/servicios/software-a-medida",
      description:
        "Sistemas internos, puntos de venta y control administrativo sin licencias mensuales.",
    },
    {
      title: "Automatización con IA",
      href: "/servicios/automatizacion-ia",
      description:
        "Chatbots inteligentes en WhatsApp y flujos de IA con tu catálogo de productos.",
    },
    {
      title: "Integraciones API",
      href: "/servicios/integraciones",
      description:
        "Conexión de Google Sheets, formularios, bases de datos y mensajería.",
    },
  ],
  logo = <FluxoAILogo className="h-6 w-auto text-foreground" />,
  logoTitle = "",
  logoDescription = "Soluciones de ingeniería de software a medida y agentes de Inteligencia Artificial para tu empresa.",
  logoHref = "#servicios",
  introItems = [
    {
      title: "Páginas Web",
      href: "/servicios/paginas-web",
      description:
        "Sitios, landing pages y portales a medida optimizados para posicionar en Google.",
    },
    {
      title: "Tiendas Online (E-commerce)",
      href: "/servicios/ecommerce",
      description:
        "Tu tienda virtual con catálogo, carrito y pagos PSE, Nequi y tarjetas.",
    },
    {
      title: "Eliminación de Virus & Seguridad",
      href: "/servicios/eliminacion-virus",
      description:
        "Limpieza profunda de malware, ransomware y optimización de computadores.",
    },
    {
      title: "Automatización con IA",
      href: "/servicios/automatizacion-ia",
      description:
        "Asistentes inteligentes y chatbots conectados a WhatsApp con datos de tu negocio.",
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
