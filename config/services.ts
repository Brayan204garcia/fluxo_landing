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
    name: 'Páginas Web Profesionales',
    tagline: 'Tu presencia en internet que genera confianza y clientes',
    description: 'Sitios web profesionales que posicionan tu negocio en Google y convierten visitantes en clientes. Diseño moderno, ultra rápido y adaptado a celulares.',
    longDescription: 'Diseñamos y desarrollamos sitios web profesionales que representan tu negocio exactamente como quieres: landing pages de alto impacto, sitios corporativos y portafolios optimizados para Google.',
    iconName: 'Globe',
    color: 'purple',
    badge: 'Desarrollo Web',
    features: [
      { title: 'Diseño personalizado', description: 'Cada sitio es único y a la medida de tu marca, sin plantillas genéricas.' },
      { title: 'Optimizado para Google (SEO)', description: 'Implementamos las mejores prácticas de SEO local para aparecer en los primeros resultados.' },
      { title: 'Formulario y WhatsApp directo', description: 'Recibe solicitudes de cotización directo a tu WhatsApp y correo electrónico.' },
      { title: 'Mapa de ubicación interactivo', description: 'Integración con Google Maps para que tus clientes te encuentren con facilidad.' },
      { title: 'Velocidad de carga ultra rápida', description: 'Sitios optimizados para cargar en menos de 2 segundos en cualquier celular.' },
      { title: 'Dominio y hosting configurados', description: 'Te asesoramos y dejamos todo configurado para que tu sitio esté en línea sin complicaciones.' }
    ],
    benefits: [
      { title: 'Clientes las 24 horas', description: 'Tu página web trabaja para ti mientras tú atiendes el negocio.' },
      { title: 'Mayor credibilidad y ventas', description: 'Un sitio profesional proyecta confianza y hace que los clientes te elijan sobre la competencia.' },
      { title: 'Posicionamiento en Google', description: 'Aparece cuando personas en Barrancabermeja y Colombia busquen tus servicios.' }
    ],
    faq: [
      { question: '¿Cuánto dura el desarrollo de una página web?', answer: 'Una landing page toma entre 5 y 7 días hábiles. Un sitio corporativo completo entre 2 y 3 semanas.' },
      { question: '¿La página se adapta a celulares y computadores?', answer: 'Sí, el 100% de nuestros diseños son responsive y están optimizados principalmente para móviles.' },
      { question: '¿Puedo actualizar los contenidos de mi página?', answer: 'Sí, podemos entregarte paneles autogestionables para que cambies textos e imágenes fácilmente.' },
      { question: '¿Incluye soporte y mantenimiento?', answer: 'Ofrecemos soporte continuo y planes de mantenimiento preventivo y de seguridad.' }
    ],
    cta: { title: '¿Quieres tu página web profesional?', whatsappMessage: '¡Hola! Me interesa crear una página web profesional para mi negocio en Barrancabermeja.' },
    seo: {
      title: 'Páginas Web Profesionales en Barrancabermeja | Fluxo AI',
      description: 'Diseño y desarrollo de páginas web profesionales en Barrancabermeja. Sitios rápidos, optimizados para Google y adaptados a celular. Cotiza gratis.',
      keywords: ['páginas web Barrancabermeja', 'diseño web Barrancabermeja', 'crear página web Santander', 'sitio web profesional Colombia']
    }
  },
  {
    slug: 'ecommerce',
    name: 'Tiendas Online & E-commerce',
    tagline: 'Tu tienda virtual lista para vender desde el primer día',
    description: 'Vende tus productos en internet sin pagar comisiones por venta. Tiendas completas con catálogo, carrito de compras y pasarelas de pago colombianas.',
    longDescription: 'Construimos tu tienda online con catálogo administrable, carrito de compras, pagos en línea por PSE, Nequi, Wompi y tarjetas, además de panel de control de inventario.',
    iconName: 'ShoppingCart',
    color: 'blue',
    badge: 'E-commerce',
    features: [
      { title: 'Catálogo de productos autogestionable', description: 'Sube productos, fotos, precios, variantes (tallas, colores) y controla tu stock en tiempo real.' },
      { title: 'Carrito de compras y Checkout fluido', description: 'Proceso de compra optimizado para que tus clientes completen pedidos sin fricciones.' },
      { title: 'Pagos en línea (PSE, Nequi, Wompi, Tarjetas)', description: 'Integración oficial con pasarelas de pago seguras y opciones de pago contra entrega.' },
      { title: 'Panel de administración fácil', description: 'Gestiona pedidos, clientes e inventario desde tu computador o celular sin saber programar.' },
      { title: 'Notificaciones automáticas por WhatsApp', description: 'Alertas automáticas de pedidos nuevos para ti y confirmación instantánea a tu cliente.' },
      { title: '100% Adaptada a celulares', description: 'Diseño ultra rápido para compras ágiles desde cualquier teléfono móvil.' }
    ],
    benefits: [
      { title: 'Ventas 24/7 sin intermediarios', description: 'Tu tienda recibe pedidos a cualquier hora sin pagar comisiones a plataformas externas.' },
      { title: 'Control total de tus ganancias', description: 'Tú administras tus promociones, precios y clientes sin intermediarios.' },
      { title: 'Envíos a todo el país', description: 'Configura tarifas de envío locales o nacionales y vende más allá de Barrancabermeja.' }
    ],
    faq: [
      { question: '¿Cuánto tiempo tarda en estar lista la tienda?', answer: 'Entre 2 y 4 semanas según la cantidad de productos y pasarelas a configurar.' },
      { question: '¿Necesito conocimientos técnicos para operarla?', answer: 'No. Te capacitamos para que administres productos, precios y pedidos fácilmente.' },
      { question: '¿Qué pasarelas de pago se pueden conectar?', answer: 'Wompi (Bancolombia), PSE, Nequi, tarjetas de crédito/débito y pagos contra entrega.' },
      { question: '¿Cobran comisiones sobre mis ventas?', answer: 'No, no cobramos comisiones. El 100% de tus ventas es tuyo.' }
    ],
    cta: { title: '¿Listo para vender tus productos por internet?', whatsappMessage: '¡Hola! Me interesa crear una tienda online / e-commerce para mi negocio.' },
    seo: {
      title: 'Tiendas Online y E-commerce en Barrancabermeja | Fluxo AI',
      description: 'Creamos tu tienda online con carrito de compras, pagos PSE/Nequi/Wompi y panel de administración. Vende en internet desde Barrancabermeja, Santander.',
      keywords: ['tienda online Barrancabermeja', 'ecommerce Barrancabermeja', 'crear tienda virtual Colombia', 'pagos PSE Nequi Colombia']
    }
  },
  {
    slug: 'eliminacion-virus',
    name: 'Eliminación de Virus & Mantenimiento',
    tagline: 'Tu computador limpio, protegido y como nuevo',
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
