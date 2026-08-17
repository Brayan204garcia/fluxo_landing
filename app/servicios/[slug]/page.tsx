import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getServiceBySlug, getAllServiceSlugs } from "@/config/services";
import { siteConfig } from "@/config/site";

import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import ServiceHero from "@/components/sections/service-hero/default";
import ServiceFeatures from "@/components/sections/service-features/default";
import ServiceBenefits from "@/components/sections/service-benefits/default";
import FAQ from "@/components/sections/faq/default";
import CTA from "@/components/sections/cta/default";
import { LayoutLines } from "@/components/ui/layout-lines";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Servicio no encontrado | Fluxo AI" };
  }

  const canonicalUrl = `${siteConfig.url}/servicios/${slug}`;

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: canonicalUrl,
      siteName: siteConfig.shortName,
      locale: "es_CO",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const faqItems = service!.faq.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const waUrl = `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(service!.cta.whatsappMessage)}`;

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <ServiceHero
        badge={service!.badge}
        title={service!.tagline}
        description={service!.description}
        slug={service!.slug}
        whatsappMessage={service!.cta.whatsappMessage}
      />
      <ServiceFeatures features={service!.features} />
      <ServiceBenefits benefits={service!.benefits} />
      <FAQ
        title={`Preguntas frecuentes sobre ${service!.name}`}
        items={faqItems}
      />
      <CTA
        title={service!.cta.title}
        buttons={[
          { text: "Quiero este servicio", href: waUrl, variant: "default" },
          { text: "Volver al inicio", href: "/", variant: "outline" },
        ]}
      />
      <Footer />
    </main>
  );
}