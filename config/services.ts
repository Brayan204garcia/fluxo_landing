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
    slug: 'ecommerce',
    name: 'Tiendas Online & E-commerce',
    tagline: 'Tu tienda online lista para vender desde el primer dia',
    description: 'Vende tus productos en internet sin depender de intermediarios. Tiendas con carrito, pagos en linea y panel de administracion que tu controlas.',
    longDescription: 'Construimos tu tienda en linea desde cero con todo lo que necesitas para vender: catalogo de productos, carrito de compras, pasarela de pagos colombiana (Wompi, PSE, Nequi) y un panel donde administras todo sin saber de tecnologia.',
    iconName: 'ShoppingCart',
    color: 'blue',
    badge: 'E-commerce',
    features: [
      { title: 'Catalogo de productos', description: 'Sube y organiza tus productos con fotos, precios, variantes (tallas, colores) y stock en tiempo real.' },
      { title: 'Carrito de compras', description: 'Flujo de compra fluido y optimizado para que tus clientes finalicen el pedido sin fricciones.' },
      { title: 'Pagos en linea (Wompi / PSE / Nequi)', description: 'Integracion con pasarelas de pago colombianas para aceptar tarjetas, transferencias y billeteras digitales.' },
      { title: 'Panel de administracion', description: 'Gestiona pedidos, productos, clientes e inventario desde un solo lugar, sin necesitar ayuda tecnica.' },
      { title: 'Integracion con WhatsApp', description: 'Notificaciones automaticas de pedido al cliente y al administrador via WhatsApp.' },
      { title: 'Diseno responsive', description: 'Tu tienda se ve perfecta en celular, tablet y computador.' }
    ],
    benefits: [
      { title: 'Ventas 24/7 sin intermediarios', description: 'Tu tienda trabaja mientras duermes. Sin comisiones de plataformas terceras.' },
      { title: 'Control total del negocio', description: 'Tu decides los precios, las promociones y los descuentos sin depender de algoritmos externos.' },
      { title: 'Clientes en toda Colombia', description: 'Con pagos en linea y envios configurados, puedes vender mas alla de Barrancabermeja.' }
    ],
    faq: [
      { question: 'Cuanto tiempo tarda en estar lista la tienda?', answer: 'En promedio entre 2 y 4 semanas segun la cantidad de productos y funcionalidades requeridas.' },
      { question: 'Necesito saber de tecnologia para administrarla?', answer: 'No. El panel de administracion esta disenado para que cualquier persona pueda subir productos y gestionar pedidos sin conocimientos tecnicos.' },
      { question: 'Que pasarelas de pago manejan?', answer: 'Integramos Wompi (Bancolombia), PSE, tarjetas credito/debito y Nequi.' },
      { question: 'Hay costos mensuales?', answer: 'Solo el hosting y dominio (aproximadamente 50.000-100.000 COP/mes). No cobramos licencias ni comisiones por ventas.' }
    ],
    cta: { title: 'Listo para vender en linea?', whatsappMessage: 'Hola! Me interesa una tienda online para mi negocio en Barrancabermeja.' },
    seo: {
      title: 'Tiendas Online y E-commerce en Barrancabermeja | Fluxo AI',
      description: 'Creamos tu tienda online con carrito de compras, pagos PSE/Nequi/Wompi y panel de administracion. Vende en internet desde Barrancabermeja, Santander.',
      keywords: ['tienda online Barrancabermeja', 'ecommerce Barrancabermeja', 'crear tienda virtual Colombia', 'pagos PSE Nequi Colombia']
    }
  },
  {
    slug: 'paginas-web',
    name: 'Paginas Web Profesionales',
    tagline: 'Tu presencia en internet que genera confianza y clientes',
    description: 'Sitios web profesionales que posicionan tu negocio en Google y convierten visitantes en clientes. Diseno moderno, rapido y hecho a tu medida.',
    longDescription: 'Disenamos y desarrollamos sitios web que representan tu negocio exactamente como quieres: landing pages de alto impacto, sitios corporativos, portafolios y blogs optimizados para Google.',
    iconName: 'Globe',
    color: 'purple',
    badge: 'Web',
    features: [
      { title: 'Diseno personalizado', description: 'Cada sitio es unico. No usamos plantillas genericas.' },
      { title: 'Optimizado para Google (SEO)', description: 'Implementamos las mejores practicas de SEO para que aparezcas en los primeros resultados.' },
      { title: 'Formulario de contacto', description: 'Recibe consultas directo a tu email o WhatsApp desde el sitio web.' },
      { title: 'Mapa de ubicacion', description: 'Integracion con Google Maps para que tus clientes te encuentren.' },
      { title: 'Velocidad de carga rapida', description: 'Sitios optimizados para cargar en menos de 2 segundos en celulares.' },
      { title: 'Dominio y hosting', description: 'Te ayudamos a configurar tu dominio y el servidor donde vivira tu sitio.' }
    ],
    benefits: [
      { title: 'Clientes las 24 horas', description: 'Tu pagina trabaja para ti mientras tu atiendes el negocio.' },
      { title: 'Mas confianza, mas ventas', description: 'Un sitio profesional proyecta credibilidad. Los clientes confian mas en empresas con presencia web.' },
      { title: 'Visible en Google', description: 'Con SEO bien aplicado, apareces cuando alguien en Barrancabermeja busca lo que ofreces.' }
    ],
    faq: [
      { question: 'Cuanto dura el desarrollo?', answer: 'Una landing page basica tarda 5-7 dias. Un sitio corporativo completo entre 2 y 3 semanas.' },
      { question: 'Incluye dominio y hosting?', answer: 'Te asesoramos en la compra del dominio y configuramos el hosting. El costo del hosting va separado.' },
      { question: 'Puedo actualizar el contenido yo mismo?', answer: 'Si. Si lo necesitas, integramos un CMS para editar textos e imagenes sin codigo.' },
      { question: 'Hacen mantenimiento despues de entregada?', answer: 'Ofrecemos planes de mantenimiento mensual opcionales.' }
    ],
    cta: { title: 'Quieres tu pagina web profesional?', whatsappMessage: 'Hola! Me interesa crear una pagina web para mi negocio.' },
    seo: {
      title: 'Paginas Web Profesionales en Barrancabermeja | Fluxo AI',
      description: 'Diseno y desarrollo de paginas web profesionales en Barrancabermeja. Sitios rapidos, optimizados para Google y adaptados a celular.',
      keywords: ['paginas web Barrancabermeja', 'diseno web Barrancabermeja', 'crear pagina web Santander', 'sitio web profesional Colombia']
    }
  },
  {
    slug: 'eliminacion-virus',
    name: 'Eliminacion de Virus y Seguridad',
    tagline: 'Tu computador limpio, rapido y protegido',
    description: 'Eliminamos virus, malware y ransomware de tu equipo. Servicio presencial en Barrancabermeja y atencion remota. Tu computador como nuevo.',
    longDescription: 'Analizamos, limpiamos y protegemos tu equipo contra todo tipo de amenazas digitales. Servicio a domicilio en Barrancabermeja y atencion remota.',
    iconName: 'ShieldCheck',
    color: 'green',
    badge: 'Seguridad',
    features: [
      { title: 'Analisis completo del sistema', description: 'Revision profunda de todos los archivos, procesos y conexiones de red.' },
      { title: 'Eliminacion de malware y virus', description: 'Remocion completa de virus, troyanos, ransomware, spyware y adware.' },
      { title: 'Limpieza y optimizacion', description: 'Eliminamos archivos basura y programas que ralentizan el equipo.' },
      { title: 'Instalacion de antivirus', description: 'Configuramos una solucion de seguridad confiable.' },
      { title: 'Recuperacion de datos', description: 'En casos de ransomware, intentamos recuperar tu informacion importante.' },
      { title: 'Atencion remota y a domicilio', description: 'Podemos conectarnos remotamente o ir a tu negocio en Barrancabermeja.' }
    ],
    benefits: [
      { title: 'Equipo rapido como nuevo', description: 'Tu computador arranca mas rapido y funciona sin cuelgues ni lentitud.' },
      { title: 'Datos seguros', description: 'Protegemos tu informacion personal durante todo el proceso.' },
      { title: 'Mismo dia', description: 'La mayoria de los casos se resuelven el mismo dia.' }
    ],
    faq: [
      { question: 'Van a domicilio en Barrancabermeja?', answer: 'Si, atendemos a domicilio en toda Barrancabermeja. Tambien podemos hacerlo de forma remota.' },
      { question: 'Que pasa si mis archivos estan bloqueados por ransomware?', answer: 'Evaluamos el caso especifico. En muchos casos podemos recuperar los archivos.' },
      { question: 'Cuanto tarda el servicio?', answer: 'Entre 1 y 3 horas dependiendo del nivel de infeccion.' },
      { question: 'El servicio tiene garantia?', answer: 'Si, garantizamos que el equipo quede libre de amenazas. Si el problema regresa en 15 dias, revisamos sin costo.' }
    ],
    cta: { title: 'Tu computador esta lento o infectado?', whatsappMessage: 'Hola! Necesito ayuda con un computador que tiene virus. Atienden en Barrancabermeja?' },
    seo: {
      title: 'Eliminacion de Virus en Barrancabermeja | Fluxo AI',
      description: 'Eliminacion de virus, malware y ransomware en Barrancabermeja. Servicio a domicilio y remoto. Computadores limpios el mismo dia.',
      keywords: ['eliminacion virus Barrancabermeja', 'tecnico computadores Barrancabermeja', 'malware ransomware Colombia', 'reparacion computadores Santander']
    }
  },
  {
    slug: 'software-a-medida',
    name: 'Software a Medida',
    tagline: 'El software que necesitas, no el que te venden',
    description: 'Aplicaciones internas disenadas para como tu negocio trabaja de verdad: puntos de venta, control de asistencia, paneles administrativos y mas.',
    longDescription: 'Desarrollamos software personalizado que se adapta exactamente a tus procesos. Sin licencias mensuales, sin funciones que no necesitas.',
    iconName: 'Code2',
    color: 'orange',
    badge: 'Software',
    features: [
      { title: 'Punto de venta (POS)', description: 'Sistema de facturacion y ventas adaptado a tu negocio.' },
      { title: 'Control de asistencia', description: 'Registro de entrada/salida de empleados con reportes automaticos para nomina.' },
      { title: 'Panel administrativo', description: 'Dashboard con las metricas que importan: ventas, inventario, clientes, reportes.' },
      { title: 'Gestion de inventario', description: 'Control de stock en tiempo real con alertas de productos bajos.' },
      { title: 'Reportes y exportacion', description: 'Genera reportes en PDF o Excel con los datos que necesitas.' },
      { title: 'Sin limite de usuarios', description: 'Todos los empleados pueden usarlo sin costo adicional por usuario.' }
    ],
    benefits: [
      { title: 'Sin costos mensuales de licencia', description: 'Pagas una sola vez por el desarrollo. El software es tuyo.' },
      { title: 'Disenado para tu proceso real', description: 'El software se adapta a ti, no al reves.' },
      { title: 'Soporte continuo', description: 'Ofrecemos mantenimiento y actualizaciones para que el software crezca con tu negocio.' }
    ],
    faq: [
      { question: 'Cuanto tiempo tarda el desarrollo?', answer: 'Un POS basico puede estar listo en 3-4 semanas. Proyectos mas complejos entre 2 y 4 meses.' },
      { question: 'Funciona sin internet?', answer: 'Si, podemos desarrollar versiones que funcionen offline y se sincronicen cuando hay conexion.' },
      { question: 'En que dispositivos funciona?', answer: 'Segun tu necesidad: web, escritorio (Windows/Mac) o movil (Android/iOS).' },
      { question: 'Que pasa si necesito cambios despues?', answer: 'El codigo es tuyo. Podemos hacer mejoras segun las necesidades que vayan surgiendo.' }
    ],
    cta: { title: 'Necesitas un software hecho para tu negocio?', whatsappMessage: 'Hola! Me interesa un software a medida para mi negocio.' },
    seo: {
      title: 'Software a Medida en Barrancabermeja | Fluxo AI',
      description: 'Desarrollo de software personalizado en Barrancabermeja: puntos de venta, control de asistencia, paneles administrativos. Sin licencias mensuales.',
      keywords: ['software a medida Barrancabermeja', 'desarrollo software Colombia', 'punto de venta Barrancabermeja', 'aplicaciones empresariales Colombia']
    }
  },
  {
    slug: 'automatizacion-ia',
    name: 'Automatizacion con IA',
    tagline: 'Deja que la IA haga el trabajo repetitivo por ti',
    description: 'Chatbots inteligentes en WhatsApp y Telegram que responden con la informacion real de tu negocio. Atencion 24/7 sin contratar personal adicional.',
    longDescription: 'Implementamos agentes de inteligencia artificial conectados a tus herramientas de negocio. Responden preguntas, califican leads y agendan citas automaticamente.',
    iconName: 'Bot',
    color: 'brand',
    badge: 'Inteligencia Artificial',
    features: [
      { title: 'Chatbot en WhatsApp', description: 'Asistente virtual que responde mensajes en tu WhatsApp Business.' },
      { title: 'Chatbot en Telegram', description: 'Bot en Telegram para atencion al cliente y consultas frecuentes.' },
      { title: 'Respuestas con tu catalogo', description: 'El agente accede a tu catalogo actualizado para responder preguntas de precios y disponibilidad.' },
      { title: 'Calificacion de leads', description: 'Filtra y califica prospectos automaticamente antes de pasarlos a tu equipo.' },
      { title: 'Agendamiento automatico', description: 'El asistente puede agendar citas directo en tu Google Calendar.' },
      { title: 'Escalamiento a humano', description: 'Cuando el cliente necesita una persona, el bot transfiere la conversacion a tu equipo.' }
    ],
    benefits: [
      { title: 'Atencion 24/7 sin costo de personal', description: 'Tu negocio responde a las 3 AM si es necesario. Sin pagar turnos nocturnos.' },
      { title: 'Respuestas precisas, no genericas', description: 'Nuestros agentes usan tu informacion real para responder con exactitud.' },
      { title: 'Mas ventas, menos esfuerzo', description: 'El bot califica prospectos para que tu equipo hable con los que estan listos para comprar.' }
    ],
    faq: [
      { question: 'El chatbot reemplaza a mis empleados?', answer: 'No, los complementa. Se encarga de preguntas frecuentes para que tu equipo se enfoque en lo importante.' },
      { question: 'Como sabe el bot sobre mis productos?', answer: 'Lo conectamos a tu catalogo en PDF, Google Sheets o cualquier fuente donde tengas tu informacion.' },
      { question: 'Funciona con WhatsApp Business?', answer: 'Si. Usamos la API oficial de WhatsApp Business.' },
      { question: 'Puedo ver las conversaciones del bot?', answer: 'Si, tienes acceso completo a todas las conversaciones y puedes intervenir en cualquier momento.' }
    ],
    cta: { title: 'Quieres atender clientes de forma automatica?', whatsappMessage: 'Hola! Me interesa implementar un chatbot con IA para mi negocio.' },
    seo: {
      title: 'Automatizacion con IA y Chatbots en Barrancabermeja | Fluxo AI',
      description: 'Chatbots inteligentes en WhatsApp y Telegram para tu negocio. Atencion 24/7 con IA que conoce tus productos. Barrancabermeja, Santander.',
      keywords: ['chatbot WhatsApp Barrancabermeja', 'automatizacion IA Colombia', 'agentes inteligencia artificial Santander', 'chatbot negocio Colombia']
    }
  },
  {
    slug: 'integraciones',
    name: 'Integraciones y Conectividad',
    tagline: 'Conecta todas tus herramientas en un solo flujo automatico',
    description: 'Flujos que conectan tus herramientas digitales para que la informacion se mueva sola. Google Sheets, WhatsApp, formularios, bases de datos y mas.',
    longDescription: 'Automatizamos la transferencia de informacion entre tus sistemas. Que un formulario llene una hoja de calculo, que una venta dispare un mensaje en WhatsApp — todo sin copiar datos a mano.',
    iconName: 'ArrowLeftRight',
    color: 'teal',
    badge: 'Integraciones',
    features: [
      { title: 'Google Sheets con WhatsApp', description: 'Cuando se agrega una fila en tu hoja de calculo, se envia un mensaje automatico por WhatsApp.' },
      { title: 'Formularios a base de datos', description: 'Captura de leads desde formularios web directo a tu CRM o hoja de calculo.' },
      { title: 'Notificaciones automaticas', description: 'Alertas a WhatsApp, email o Telegram cuando ocurre algo importante.' },
      { title: 'Integracion con CRM', description: 'Conectamos con HubSpot, Zoho, Notion o cualquier CRM que uses.' },
      { title: 'Facturacion electronica DIAN', description: 'Automatizacion del proceso de facturacion electronica obligatoria en Colombia.' },
      { title: 'APIs personalizadas', description: 'Creamos puentes entre sistemas que no tienen integracion nativa.' }
    ],
    benefits: [
      { title: 'Cero digitacion manual', description: 'Elimina el copiar y pegar informacion entre sistemas. Los datos fluyen solos.' },
      { title: 'Menos errores humanos', description: 'Al automatizar la transferencia de datos, eliminas los errores de digitacion.' },
      { title: 'Mas tiempo para lo que importa', description: 'Tu equipo deja de hacer tareas repetitivas y se enfoca en actividades que generan valor.' }
    ],
    faq: [
      { question: 'Que herramientas pueden integrar?', answer: 'Practicamente cualquiera con API: Google Workspace, WhatsApp Business, Notion, Slack, HubSpot y mas.' },
      { question: 'Que pasa si una herramienta no tiene API?', answer: 'Usamos automatizacion web (RPA) para conectar sistemas sin API oficial.' },
      { question: 'Las integraciones funcionan en tiempo real?', answer: 'Si, la mayoria operan en tiempo real usando webhooks y eventos.' },
      { question: 'Que tan dificil es mantenerlas?', answer: 'Una vez configuradas funcionan solas. Ofrecemos monitoreo para que no fallen.' }
    ],
    cta: { title: 'Quieres conectar tus herramientas de trabajo?', whatsappMessage: 'Hola! Me interesa automatizar e integrar las herramientas de mi negocio.' },
    seo: {
      title: 'Integraciones y Automatizacion de Procesos en Barrancabermeja | Fluxo AI',
      description: 'Conectamos tus herramientas digitales en flujos automaticos: Google Sheets, WhatsApp, CRM, formularios y mas. Barrancabermeja, Santander.',
      keywords: ['automatizacion procesos Barrancabermeja', 'integraciones digitales Colombia', 'Google Sheets WhatsApp', 'conectar herramientas empresariales Colombia']
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
