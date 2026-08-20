import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftRight,
  Bot,
  Code2,
  GlobeIcon,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { ReactNode } from "react";

import { getCityBySlug, getAllCitySlugs, type CityConfig } from "@/config/cities";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FAQ from "@/components/sections/faq/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { LinkButton } from "@/components/ui/link-button";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return { title: "Ciudad no encontrada | Fluxo AI" };
  }

  const canonicalUrl = `${siteConfig.url}/ciudad/${slug}`;

  return {
    title: city.seo.title,
    description: city.seo.description,
    keywords: city.seo.keywords,
    alternates: { canonical: canonicalUrl },
    other: {
      "geo.region": `CO-${city.department.substring(0, 3).toUpperCase()}`,
      "geo.placename": `${city.name}, ${city.department}, Colombia`,
      "geo.position": `${city.coordinates.latitude};${city.coordinates.longitude}`,
      ICBM: `${city.coordinates.latitude}, ${city.coordinates.longitude}`,
    },
    openGraph: {
      title: city.seo.title,
      description: city.seo.description,
      url: canonicalUrl,
      siteName: siteConfig.shortName,
      locale: "es_CO",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${city.name} - ${siteConfig.shortName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: city.seo.title,
      description: city.seo.description,
      images: [siteConfig.ogImage],
    },
  };
}

const ICON_MAP: Record<string, ReactNode> = {
  Bot: <Bot className="size-5 stroke-[1.5]" />,
  ArrowLeftRight: <ArrowLeftRight className="size-5 stroke-[1.5]" />,
  Code2: <Code2 className="size-5 stroke-[1.5]" />,
  GlobeIcon: <GlobeIcon className="size-5 stroke-[1.5]" />,
  Code: <Code2 className="size-5 stroke-[1.5]" />,
  Globe: <GlobeIcon className="size-5 stroke-[1.5]" />,
  Zap: <ArrowLeftRight className="size-5 stroke-[1.5]" />,
  Database: <Code2 className="size-5 stroke-[1.5]" />,
};

export default async function CityLandingPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const waUrl = `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(city.hero.ctaWhatsappMessage)}`;
  const pageUrl = `${siteConfig.url}/ciudad/${city.slug}`;

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
            name: "Ciudades",
            item: `${siteConfig.url}/#ciudades`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}/#localbusiness`,
        name: `${siteConfig.shortName} - ${city.name}`,
        description: city.seo.description,
        url: pageUrl,
        telephone: `+${siteConfig.whatsapp.phoneNumber}`,
        priceRange: "$$",
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: city.department,
          postalCode: city.postalCode,
          addressCountry: "CO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: city.coordinates.latitude,
          longitude: city.coordinates.longitude,
        },
        areaServed: [
          city.name,
          city.department,
          city.region,
          "Colombia",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Servicios de Software y Páginas Web en ${city.name}`,
          itemListElement: city.services.map((svc, i) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              position: i + 1,
              name: svc.title,
              description: svc.description,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: city.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LayoutLines />
      <Navbar />

      {/* 1. HERO SECTION (2-Column Layout matching Index Page) */}
      <Section className="overflow-hidden pt-4 sm:pt-8 md:pt-12 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Breadcrumb, Badge, H1, Description, Buttons & Value props (Left-aligned) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left gap-6 pl-0 sm:pl-2 lg:pl-4">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Link href="/" className="transition hover:text-foreground">Inicio</Link>
              <span>/</span>
              <span>Ciudades</span>
              <span>/</span>
              <span className="font-semibold text-foreground">{city.name}</span>
            </nav>

            {/* Badge */}
            <div className="animate-appear inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
              </span>
              <MapPin className="size-3.5" />
              {city.hero.badge}
            </div>

            {/* H1 Heading */}
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-transparent drop-shadow-2xl text-left leading-[1.12]">
              {city.hero.title}{" "}
              <span className="bg-linear-to-r from-brand via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {city.hero.highlightedText}
              </span>
            </h1>

            {/* Description */}
            <p className="text-md sm:text-lg lg:text-xl animate-appear text-muted-foreground relative z-10 font-medium leading-relaxed text-left max-w-[560px] opacity-0 delay-100">
              {city.hero.description}
            </p>

            {/* Left-Aligned Buttons */}
            <div className="animate-appear relative z-10 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 opacity-0 delay-200 pt-2">
              <LinkButton
                href={waUrl}
                variant="default"
                size="lg"
                className="w-full sm:w-auto justify-center text-center font-semibold text-base py-3 sm:py-2.5 px-6 shadow-lg shadow-brand/20"
              >
                <MessageCircle className="mr-2 size-5" />
                Cotizar en {city.shortName}
              </LinkButton>
              <LinkButton
                href="#servicios-locales"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center text-center font-semibold text-base py-3 sm:py-2.5 px-6"
              >
                Ver Soluciones
              </LinkButton>
            </div>

            {/* Value Props Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-500" />
                <span>Atención Directa & Cercana</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-500" />
                <span>100% Soluciones a la Medida</span>
              </div>
            </div>
          </div>

          {/* Right Column: Showcase Image with glow and soft fade (Matching Index Page) */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex justify-center items-center pt-4 lg:pt-0">
            <div className="relative w-full max-w-[520px]">
              {/* Subtle Glow background */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-brand/25 via-purple-600/20 to-blue-600/20 opacity-60 blur-3xl dark:opacity-40 pointer-events-none" />

              {/* Container with smooth gradient mask */}
              <div className="relative overflow-hidden rounded-2xl [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
                <Image
                  src={city.slug === "mompox-bolivar" ? "/hero_paginas_web.png" : "/hero_inicio.png"}
                  alt={`${city.hero.title} ${city.name}`}
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
                  <span className="text-xs font-bold text-foreground mt-0.5 leading-tight">Soluciones en {city.shortName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. SERVICES SECTION (Matching Index Page Glassmorphism Style) */}
      <Section id="servicios-locales" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40">
        <div className="max-w-container mx-auto flex flex-col items-center gap-12 sm:gap-16">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              {city.industryFocus.badge}
            </span>
            <h2 className="max-w-[760px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              {city.industryFocus.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {city.industryFocus.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {city.services.map((item) => {
              const isGlowBrand = item.variant === "glow-brand";
              const iconElement = ICON_MAP[item.iconName as keyof typeof ICON_MAP] || <Bot className="size-5 stroke-[1.5]" />;
              const serviceWaUrl = `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(item.whatsappMessage)}`;
              const targetUrl = item.href ? item.href : serviceWaUrl;

              return (
                <div
                  key={item.title}
                  className={cn(
                    "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl p-6 lg:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5",
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
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-foreground/5 border border-foreground/10 text-foreground shrink-0 group-hover:scale-105 transition-transform">
                        {iconElement}
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs sm:text-[13px] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Micro-Checklist of Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="flex flex-col gap-2 pt-2 border-t border-border/40">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-foreground/85">
                            <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Button */}
                  <div className="relative z-10 pt-2 mt-auto">
                    <a
                      href={targetUrl}
                      className="group/btn flex w-full items-center justify-center gap-1.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold cursor-pointer shadow-md transition-all duration-200 h-10 px-4 text-xs sm:text-sm"
                    >
                      <span>Cotizar en {city.shortName}</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. CALL TO ACTION SECTION (Encima de FAQ) */}
      <Section className="group relative overflow-hidden py-16 sm:py-24 px-4 border-t border-border/40">
        <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand">
            <MapPin className="size-3.5" /> Cobertura activa en {city.name}, {city.department}
          </div>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            ¿Listo para digitalizar o crear el software de tu empresa en {city.shortName}?
          </h2>

          <p className="max-w-xl text-sm sm:text-base text-muted-foreground">
            Conversemos directamente sobre los objetivos de tu proyecto. Te brindamos asesoría técnica clara y una propuesta transparente sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center gap-4 pt-2">
            <LinkButton
              href={waUrl}
              variant="default"
              size="lg"
              className="font-semibold text-base py-3 px-8 shadow-xl shadow-brand/25"
            >
              <MessageCircle className="mr-2 size-5" />
              Hablar por WhatsApp
            </LinkButton>
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
          <Glow variant="bottom" />
        </div>
      </Section>

      {/* 4. LOCAL FAQ SECTION */}
      <FAQ
        title={`Preguntas Frecuentes en ${city.name}`}
        items={city.faqs.map((f) => ({
          question: f.question,
          answer: <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{f.answer}</p>,
        }))}
      />

      <Footer />
    </main>
  );
}
