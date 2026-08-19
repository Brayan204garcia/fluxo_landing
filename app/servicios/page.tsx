import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Globe, ShieldCheck, ShoppingCart } from "lucide-react";

import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FAQ from "@/components/sections/faq/default";
import CTA from "@/components/sections/cta/default";
import { LinkButton } from "@/components/ui/link-button";
import { Section } from "@/components/ui/section";
import { LayoutLines } from "@/components/ui/layout-lines";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Automatización de Procesos con IA & Software en Barrancabermeja | Fluxo AI",
  description:
    "Soluciones de automatización de procesos empresariales con Inteligencia Artificial, agentes de WhatsApp y desarrollo de software a medida en Barrancabermeja.",
  keywords: [
    "automatizacion de procesos barrancabermeja",
    "inteligencia artificial barrancabermeja",
    "agentes de whatsapp barrancabermeja",
    "desarrollo software barrancabermeja",
    "software a medida barrancabermeja",
    "automatizacion ia santander",
  ],
  alternates: {
    canonical: `${siteConfig.url}/servicios`,
  },
  openGraph: {
    title: "Automatización de Procesos con IA & Software en Barrancabermeja | Fluxo AI",
    description:
      "Soluciones de automatización de procesos empresariales con Inteligencia Artificial, agentes de WhatsApp y desarrollo de software a medida en Barrancabermeja.",
    url: `${siteConfig.url}/servicios`,
    siteName: siteConfig.shortName,
    locale: "es_CO",
    type: "website",
  },
};

const serviceIcons: Record<string, any> = {
  "paginas-web": Globe,
};

export default function ServiciosPage() {
  const allFaqs = services.flatMap((s) => s.faq).slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Servicios",
            item: `${siteConfig.url}/servicios`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/servicios/#collection`,
        name: "Servicios Digitales y Desarrollo de Software en Barrancabermeja",
        url: `${siteConfig.url}/servicios`,
        description:
          "Catálogo de servicios de diseño web, comercio electrónico y automatización de procesos en Barrancabermeja.",
      },
    ],
  };

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LayoutLines />
      <Navbar />

      {/* Header Hero */}
      <Section className="overflow-hidden pt-6 sm:pt-10 pb-8 sm:pb-12">
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
          <div className="animate-appear inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
            </span>
            Servicios Fluxo AI
          </div>

          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-[1.15] font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-[1.1] md:text-7xl">
            Soluciones Web, E-commerce y Soporte Técnico
          </h1>

          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[700px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            Impulsa tu presencia digital y mantén tus equipos protegidos con servicios profesionales en Barrancabermeja y Santander.
          </p>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground/10 hover:border-brand/40 transition-colors"
              >
                {service.name}
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* 3 Grouped Services Detailed Sections */}
      <div className="flex flex-col gap-16 sm:gap-24 py-8">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.slug] || Globe;
          const isReversed = index % 2 === 1;
          const waUrl = `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(service.cta.whatsappMessage)}`;

          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 px-4 sm:px-6"
            >
              <div className="max-w-container mx-auto rounded-3xl border border-foreground/10 bg-foreground/3 p-6 sm:p-10 lg:p-14 shadow-2xl">
                <div className={cn("flex flex-col gap-10 lg:gap-14", isReversed ? "lg:flex-row-reverse" : "lg:flex-row")}>
                  {/* Left Column: Title & Description */}
                  <div className="flex flex-1 flex-col justify-between gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 text-brand">
                          <Icon className="size-6" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                          {service.badge}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                        {service.name}
                      </h2>

                      <p className="text-base sm:text-lg font-medium text-foreground/80">
                        {service.tagline}
                      </p>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Benefits pills */}
                    <div className="flex flex-col gap-2.5 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Beneficios destacados:
                      </p>
                      {service.benefits.map((b) => (
                        <div key={b.title} className="flex items-start gap-2.5">
                          <span className="mt-1 flex size-1.5 rounded-full bg-brand shrink-0" />
                          <span className="text-xs sm:text-sm text-foreground/90 font-medium">
                            <strong className="font-semibold text-foreground">{b.title}:</strong>{" "}
                            {b.description}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <LinkButton
                        href={waUrl}
                        variant="default"
                        size="default"
                        className="font-semibold text-sm justify-center py-2.5 px-5"
                      >
                        Cotizar {service.name}
                      </LinkButton>
                      <LinkButton
                        href={`/servicios/${service.slug}`}
                        variant="outline"
                        size="default"
                        className="font-semibold text-sm justify-center py-2.5 px-5"
                      >
                        Ver página completa →
                      </LinkButton>
                    </div>
                  </div>

                  {/* Right Column: Features Checklist Grid */}
                  <div className="flex flex-1 flex-col gap-4 justify-center">
                    <div className="rounded-2xl border border-foreground/10 bg-background/60 p-6 shadow-inner backdrop-blur-xs">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                        ¿Qué incluye este servicio?
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <div key={feature.title} className="flex items-start gap-3">
                            <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                            <div className="flex flex-col">
                              <span className="text-xs sm:text-sm font-semibold text-foreground">
                                {feature.title}
                              </span>
                              <span className="text-xs text-muted-foreground leading-relaxed">
                                {feature.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* FAQ Section */}
      <FAQ
        title="Preguntas frecuentes sobre nuestros servicios"
        items={allFaqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />

      {/* Final CTA */}
      <CTA
        title="¿Listo para comenzar tu próximo proyecto?"
        buttons={[
          {
            text: "Escríbenos por WhatsApp",
            href: `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent("¡Hola! Quisiera cotizar un servicio con Fluxo AI.")}`,
            variant: "default",
          },
          {
            text: "Ir al formulario de contacto",
            href: "/#contacto",
            variant: "outline",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
