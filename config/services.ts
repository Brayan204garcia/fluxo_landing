import {
  ArrowLeftRight,
  Bot,
  Code2,
  Globe,
  ShieldCheck,
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
    description: 'Diseño y desarrollo de páginas web, landing pages y tiendas online con catálogo, carrito y pagos PSE, Nequi y Wompi. Posicionamiento en Google y 100% adaptadas a celulares.',
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
  },
  {
    slug: 'eliminacion-virus',
    name: 'Eliminación de Virus & Mantenimiento',
    tagline: 'Tu computador limpio, protegido y optimizado como nuevo',
    description: 'Eliminamos virus, malware y ransomware de tus equipos. Mantenimiento preventivo, correctivo y optimización de computadores en Barrancabermeja y remoto.',
    longDescription: 'Diagnóstico profundo, desinfección total de amenazas digitales, limpieza de archivos basura y optimización de hardware/software para computadores y portátiles.',
    iconName: 'ShieldCheck',
    color: 'green',
    badge: 'Seguridad & Mantenimiento',
    features: [
      { title: 'Análisis y desinfección profunda', description: 'Eliminación de virus, troyanos, ransomware, spyware, adware y secuestradores de navegador.' },
      { title: 'Mantenimiento y optimización', description: 'Limpieza de temporales, registro, aceleración de arranque y optimización del sistema operativo.' },
      { title: 'Instalación y configuración de antivirus', description: 'Protección confiable en tiempo real para evitar que tu equipo vuelva a infectarse.' },
      { title: 'Recuperación y respaldo de archivos', description: 'Rescate de información importante, fotos y documentos en casos de fallos o virus.' },
      { title: 'Mantenimiento preventivo y correctivo', description: 'Revisión de rendimiento, actualización de controladores y chequeo de salud de disco/RAM.' },
      { title: 'Atención a domicilio o remota', description: 'Servicio en tu negocio/hogar en Barrancabermeja o conexión remota inmediata.' }
    ],
    benefits: [
      { title: 'Rendimiento y velocidad recuperada', description: 'Tu computador arranca rápido, abre programas al instante y deja de congelarse.' },
      { title: 'Archivos y datos 100% seguros', description: 'Tus contraseñas, cuentas bancarias e información personal quedan blindadas.' },
      { title: 'Solución el mismo día con garantía', description: 'La mayoría de los servicios se completan el mismo día con garantía de satisfacción.' }
    ],
    faq: [
      { question: '¿El servicio es a domicilio en Barrancabermeja?', answer: 'Sí, realizamos visitas a domicilio en Barrancabermeja y también soporte remoto seguro si el equipo tiene internet.' },
      { question: '¿Mis archivos y fotos se borran durante la limpieza?', answer: 'No. Cuidamos y respaldamos tu información antes de cualquier procedimiento para garantizar su seguridad.' },
      { question: '¿Cuánto tiempo tarda la revisión y mantenimiento?', answer: 'Normalmente entre 1 y 3 horas según el estado y la cantidad de archivos del equipo.' },
      { question: '¿Ofrecen garantía por el servicio?', answer: 'Sí, garantizamos que el equipo quede libre de amenazas y optimizado. Si tienes dudas posteriores, te asistimos sin costo.' }
    ],
    cta: { title: '¿Tu computador está lento, bloqueado o con virus?', whatsappMessage: '¡Hola! Necesito servicio de eliminación de virus y mantenimiento para mi computador en Barrancabermeja.' },
    seo: {
      title: 'Eliminación de Virus y Mantenimiento de Computadores en Barrancabermeja | Fluxo AI',
      description: 'Eliminación de virus, malware y mantenimiento de computadores en Barrancabermeja. Servicio a domicilio y remoto. Equipos rápidos y limpios.',
      keywords: ['eliminacion virus Barrancabermeja', 'mantenimiento computadores Barrancabermeja', 'tecnico computadores Barrancabermeja', 'reparacion computadores Santander']
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
