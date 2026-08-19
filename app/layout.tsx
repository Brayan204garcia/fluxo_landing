import "@/app/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { inter } from "@/lib/fonts";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ProjectModalProvider } from "@/components/ui/project-modal";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  category: "technology",
  classification: "Desarrollo de Software, Páginas Web y Automatización IA",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "es-CO": siteConfig.url,
      es: siteConfig.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: siteConfig.shortName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.shortName,
  publisher: siteConfig.shortName,
  other: {
    "geo.region": "CO-SAN",
    "geo.placename": `${siteConfig.location.city}, ${siteConfig.location.state}, ${siteConfig.location.country}`,
    "geo.position": `${siteConfig.location.geo.latitude};${siteConfig.location.geo.longitude}`,
    ICBM: `${siteConfig.location.geo.latitude}, ${siteConfig.location.geo.longitude}`,
    "DC.title": siteConfig.name,
    "DC.creator": siteConfig.shortName,
    "DC.description": siteConfig.description,
    "DC.coverage": `${siteConfig.location.city}, ${siteConfig.location.state}, ${siteConfig.location.country}`,
    "DC.language": "es",
    "revisit-after": "3 days",
    rating: "general",
    distribution: "global",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-icon-precomposed.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        alternateName: ["Fluxo AI", "Desarrollo Web Barrancabermeja", "Software & IA Barrancabermeja"],
        description: siteConfig.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logos/fluxoai_logo.svg`,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        telephone: `+${siteConfig.whatsapp.phoneNumber}`,
        email: siteConfig.links.email.replace("mailto:", ""),
        priceRange: "$$",
        currenciesAccepted: "COP, USD",
        paymentAccepted: "Transferencia bancaria, PSE, Nequi, Daviplata, Wompi, Tarjeta de Crédito, Efectivo",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "19:00",
          },
        ],
        sameAs: [siteConfig.links.whatsapp],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Barrancabermeja",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.state,
          postalCode: siteConfig.location.postalCode,
          addressCountry: siteConfig.location.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.geo.latitude,
          longitude: siteConfig.location.geo.longitude,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Barrancabermeja",
          },
          {
            "@type": "AdministrativeArea",
            name: "Santander",
          },
          {
            "@type": "City",
            name: "Bucaramanga",
          },
          {
            "@type": "Country",
            name: "Colombia",
          },
        ],
        knowsAbout: [
          "Diseño de Páginas Web en Barrancabermeja",
          "Tiendas Online y E-commerce en Colombia",
          "Desarrollo de Software a Medida",
          "Automatización de Procesos con Inteligencia Artificial",
          "Agentes de WhatsApp con IA",
          "Pasarelas de Pago Colombia (PSE, Nequi, Wompi)",
          "Posicionamiento SEO Local en Google",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Digitales y Software en Barrancabermeja",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Páginas Web y Tiendas Online (E-commerce) en Barrancabermeja",
                description:
                  "Diseño y desarrollo de sitios web profesionales, landing pages de alta conversión y tiendas virtuales con catálogo y pasarelas de pago PSE, Nequi y Wompi.",
                provider: {
                  "@type": "LocalBusiness",
                  name: siteConfig.shortName,
                },
                areaServed: "Barrancabermeja, Santander, Colombia",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Automatización de Procesos e Inteligencia Artificial",
                description:
                  "Asistentes inteligentes para WhatsApp y Telegram, sincronización de bases de datos y flujos de trabajo automáticos para empresas.",
                provider: {
                  "@type": "LocalBusiness",
                  name: siteConfig.shortName,
                },
                areaServed: "Barrancabermeja, Santander, Colombia",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desarrollo de Software a Medida",
                description:
                  "Construcción de aplicaciones web, sistemas internos, puntos de venta y paneles administrativos a medida.",
                provider: {
                  "@type": "LocalBusiness",
                  name: siteConfig.shortName,
                },
                areaServed: "Barrancabermeja, Santander, Colombia",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "es-CO",
        publisher: {
          "@id": `${siteConfig.url}/#localbusiness`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué tipo de procesos puedes automatizar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Analizo tareas repetitivas, procesos manuales y flujos de información que consumen tiempo en tu negocio. A partir de eso, puedo desarrollar automatizaciones, sistemas internos o integraciones que reduzcan trabajo operativo y errores.",
            },
          },
          {
            "@type": "Question",
            name: "¿Desarrollas soluciones a medida?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. No trabajo con un producto cerrado. Cada solución se desarrolla de acuerdo con el proceso, las herramientas y las necesidades específicas de tu negocio.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedes integrar IA con sistemas que ya utilizamos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Puedo integrar IA con aplicaciones, bases de datos, APIs y herramientas que ya formen parte de tu operación, siempre que técnicamente sea posible.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué pasa si no sé exactamente qué necesito?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No necesitas llegar con una solución definida. Puedes explicarme qué proceso realizas actualmente, qué problema tienes y qué quieres mejorar. A partir de ahí podemos identificar qué tiene sentido automatizar o desarrollar.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto cuesta desarrollar una solución?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depende del alcance, las integraciones y la complejidad del proyecto. Después de entender el proceso y los requerimientos, puedo definir contigo el alcance y darte una propuesta.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto tarda un proyecto?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depende de su alcance. Los proyectos pequeños pueden resolverse rápidamente, mientras que sistemas o integraciones más complejas requieren más tiempo. Antes de comenzar definimos claramente qué se va a desarrollar y los tiempos estimados.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="es"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ProjectModalProvider>
            {children}
            <WhatsAppButton />
          </ProjectModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

