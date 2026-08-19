import {
  Globe,
  ShoppingCart,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconName: string;
  color: string;
  badge: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  faq: ServiceFAQ[];
  cta: {
    title: string;
    whatsappMessage: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const services: Service[] = [
  {
    slug: 'paginas-web',
    name: 'Páginas Web & Tiendas Online (E-commerce)',
    tagline: 'Páginas web profesionales y tiendas online listas para vender',
    description: 'Sitios corporativos, landing pages de alta conversión y tiendas virtuales con catálogo y pagos PSE, Nequi y Wompi. Posicionamiento SEO en Google y diseño adaptado a celulares.',
    longDescription: 'Construimos la presencia digital de tu negocio desde cero: sitios corporativos para generar clientes y tiendas virtuales para vender productos con pasarelas de pago colombianas sin pagar comisiones por venta.',
    iconName: 'Globe',
    color: 'purple',
    badge: 'Desarrollo Web & E-commerce',
    features: [
      { title: 'Diseño web personalizado', description: 'Sitios y tiendas a la medida de tu marca, sin plantillas genéricas.' },
      { title: 'Catálogo de productos y carrito de compras', description: 'Tienda virtual autogestionable para subir productos, variantes y controlar stock.' },
      { title: 'Pagos en línea (PSE, Nequi, Wompi, Tarjetas)', description: 'Integración de pasarelas de pago colombianas seguras y cobros contra entrega.' },
      { title: 'Optimizado para Google (SEO Local)', description: 'Estrategia SEO para que aparezcas cuando busquen tus productos o servicios en Barrancabermeja.' },
      { title: 'WhatsApp y formularios integrados', description: 'Notificaciones instantáneas de compras y cotizaciones directo a tu teléfono.' },
      { title: 'Velocidad ultra rápida y responsive', description: 'Carga en menos de 2 segundos optimizada para compradores desde el celular.' }
    ],
    benefits: [
      { title: 'Ventas y clientes 24/7', description: 'Tu negocio y catálogo están disponibles a cualquier hora, sin intermediarios ni comisiones.' },
      { title: 'Mayor credibilidad y posicionamiento', description: 'Un sitio profesional genera confianza inmediata y posiciona tu marca en Google.' },
      { title: 'Control total de tu negocio', description: 'Panel fácil para administrar productos, precios, pedidos y clientes sin saber programar.' }
    ],
    faq: [
      { question: '¿Puedo tener una página web corporativa o una tienda online?', answer: 'Sí, adaptamos el proyecto a tu necesidad: desde landing pages y sitios corporativos hasta tiendas e-commerce completas con pagos en línea.' },
      { question: '¿Cuánto tiempo tarda el desarrollo?', answer: 'Una landing page toma de 5 a 7 días hábiles. Una tienda online o sitio corporativo completo entre 2 y 3 semanas.' },
      { question: '¿Cobran comisiones por ventas en la tienda?', answer: 'No. El 100% de tus ventas es tuyo. No cobramos comisiones ni tarifas por transacción.' },
      { question: '¿Puedo editar los contenidos y productos yo mismo?', answer: 'Sí, te entregamos un panel autogestionable y te capacitamos para que subas productos y edites textos fácilmente.' }
    ],
    cta: { title: '¿Quieres tu página web o tienda online?', whatsappMessage: '¡Hola! Me interesa cotizar una página web / tienda online para mi negocio en Barrancabermeja.' },
    seo: {
      title: 'Páginas Web y Tiendas Online E-commerce en Barrancabermeja | Fluxo AI',
      description: 'Diseño de páginas web profesionales y tiendas online e-commerce en Barrancabermeja. Pagos PSE, Nequi, SEO en Google y diseño a medida. Cotiza gratis.',
      keywords: ['páginas web Barrancabermeja', 'tiendas online Barrancabermeja', 'ecommerce Barrancabermeja', 'diseño web Santander', 'crear tienda virtual Colombia']
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
