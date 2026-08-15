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
    template: `%s - ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
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
      name: siteConfig.name,
    },
  ],
  creator: siteConfig.shortName,
  other: {
    "geo.region": "CO-S",
    "geo.placename": `${siteConfig.location.city}, ${siteConfig.location.state}`,
    "geo.position": `${siteConfig.location.geo.latitude};${siteConfig.location.geo.longitude}`,
    ICBM: `${siteConfig.location.geo.latitude}, ${siteConfig.location.geo.longitude}`,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
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
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
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
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        alternateName: "Software & Automatización IA Barrancabermeja",
        description: siteConfig.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/favicon.svg`,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        telephone: `+${siteConfig.whatsapp.phoneNumber}`,
        email: siteConfig.links.email.replace("mailto:", ""),
        sameAs: [siteConfig.links.whatsapp],
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.state,
          addressCountry: siteConfig.location.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.geo.latitude,
          longitude: siteConfig.location.geo.longitude,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Barrancabermeja",
          },
          {
            "@type": "AdministrativeArea",
            name: "Santander",
          },
          {
            "@type": "Country",
            name: "Colombia",
          },
        ],
        priceRange: "$$",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Software e Inteligencia Artificial",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desarrollo de Software a Medida",
                description:
                  "Construcción de aplicaciones web, sistemas internos y plataformas a medida para empresas en Barrancabermeja.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Automatización con Inteligencia Artificial y Agentes IA",
                description:
                  "Diseño e integración de agentes de IA, flujos automatizados de atención al cliente y optimización operativa.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Integración de Sistemas e Infraestructura Digital",
                description:
                  "Conexión de APIs, desarrollo de backend y soluciones digitales avanzadas para empresas en Barrancabermeja.",
              },
            },
          ],
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

