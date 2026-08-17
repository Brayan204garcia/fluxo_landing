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
      title: "Páginas Web Profesionales",
      href: "/servicios/paginas-web",
      description:
        "Sitios corporativos y landing pages de alta conversión optimizadas para Google.",
    },
    {
      title: "Tiendas Online & E-commerce",
      href: "/servicios/ecommerce",
      description:
        "Tienda virtual completa con catálogo, carrito y pagos PSE, Nequi y Wompi.",
    },
    {
      title: "Eliminación de Virus & Mantenimiento",
      href: "/servicios/eliminacion-virus",
      description:
        "Limpieza profunda de virus/malware, formateo, aceleración y mantenimiento de computadores.",
    },
  ],
  logo = <FluxoAILogo className="h-6 w-auto text-foreground" />,
  logoTitle = "",
  logoDescription = "Desarrollo de páginas web, tiendas online y soporte técnico profesional.",
  logoHref = "/#servicios",
  introItems = [
    {
      title: "Páginas Web",
      href: "/servicios/paginas-web",
      description:
        "Sitios web y landing pages a medida optimizados para posicionar en Google.",
    },
    {
      title: "Tiendas Online (E-commerce)",
      href: "/servicios/ecommerce",
      description:
        "Tu tienda virtual con catálogo, carrito y pagos directos por PSE y Nequi.",
    },
    {
      title: "Eliminación de Virus & Mantenimiento",
      href: "/servicios/eliminacion-virus",
      description:
        "Desinfección de malware, optimización y mantenimiento técnico a domicilio o remoto.",
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
