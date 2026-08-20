export interface CityService {
  tag: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: "Bot" | "ArrowLeftRight" | "Code2" | "GlobeIcon" | "Code" | "Globe" | "Zap" | "Database";
  whatsappMessage: string;
  href?: string;
  variant?: "glow-brand" | "default";
}

export interface CityUseCase {
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityConfig {
  slug: string;
  name: string;
  shortName: string;
  department: string;
  region: string;
  postalCode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    highlightedText: string;
    description: string;
    ctaWhatsappMessage: string;
  };
  industryFocus: {
    badge: string;
    title: string;
    description: string;
  };
  services: CityService[];
  useCases: CityUseCase[];
  faqs: CityFAQ[];
}

export const cities: CityConfig[] = [
  {
    slug: "barrancabermeja",
    name: "Barrancabermeja",
    shortName: "Barrancabermeja",
    department: "Santander",
    region: "Magdalena Medio",
    postalCode: "687031",
    coordinates: {
      latitude: "7.0653",
      longitude: "-73.8547",
    },
    seo: {
      title: "Desarrollador de Software y Programador en Barrancabermeja | Páginas Web & IA",
      description:
        "¿Buscas un programador o desarrollador de software en Barrancabermeja? Creamos páginas web, software a medida, agentes de IA y automatización para empresas y contratistas.",
      keywords: [
        "desarrollador de software barrancabermeja",
        "programador en barrancabermeja",
        "programador barrancabermeja",
        "diseño de paginas web barrancabermeja",
        "creacion de paginas web barrancabermeja",
        "desarrollo web barrancabermeja",
        "software a la medida barrancabermeja",
        "automatizacion de procesos barrancabermeja",
        "empresa de software santander",
        "agentes ia whatsapp barrancabermeja",
      ],
    },
    hero: {
      badge: "Desarrollo de Software & SEO en Barrancabermeja",
      title: "Programador & Desarrollador de Software en",
      highlightedText: "Barrancabermeja",
      description:
        "Impulsamos a empresas, contratistas del sector industrial, comercios y emprendimientos de Barrancabermeja con software a la medida, páginas web de alto rendimiento y automatización de procesos con Inteligencia Artificial.",
      ctaWhatsappMessage:
        "¡Hola! Me encuentro en Barrancabermeja y me gustaría cotizar un desarrollo de software / página web para mi negocio.",
    },
    industryFocus: {
      badge: "Soluciones Industriales & Comerciales",
      title: "Servicios Digitales y Desarrollo para Empresas en Barrancabermeja",
      description:
        "Tecnología diseñada para contratistas, talleres industriales, empresas de logística y comercios en el Magdalena Medio.",
    },
    services: [
      {
        tag: "IA & Atención 24/7",
        title: "Integraciones con IA",
        description:
          "Asistentes inteligentes en WhatsApp que atienden clientes corporativos, responden cotizaciones técnicas y consultan inventarios usando los datos reales de tu empresa.",
        highlights: [
          "Respuestas instantáneas con catálogos y tarifas",
          "Calificación de clientes y captación de leads",
          "Conexión directa con tu base de datos o WhatsApp",
        ],
        iconName: "Bot",
        whatsappMessage: "¡Hola! Me interesa integrar un Agente de IA para mi empresa en Barrancabermeja.",
        variant: "glow-brand",
      },
      {
        tag: "Cero Tareas Manuales",
        title: "Automatización de Procesos",
        description:
          "Flujos que conectan tus herramientas (planillas, reportes de campo, correos y mensajería) para que los datos fluyan sin necesidad de digitación manual.",
        highlights: [
          "Eliminación de duplicación de datos en Excel",
          "Notificaciones automáticas de órdenes y compras",
          "Generación instantánea de reportes operativos",
        ],
        iconName: "ArrowLeftRight",
        whatsappMessage: "¡Hola! Quisiera automatizar los flujos operativos de mi negocio en Barrancabermeja.",
        variant: "default",
      },
      {
        tag: "Sistemas a la Medida",
        title: "Software a Medida",
        description:
          "Plataformas internas para control de cuadrillas, horas hombre, gestión de inventarios, reportes de mantenimiento y sistemas POS adaptados a tu operación.",
        highlights: [
          "Control de cuadrillas y órdenes de trabajo",
          "Inventarios y despachos en tiempo real",
          "Acceso seguro desde computador y celular",
        ],
        iconName: "Code2",
        whatsappMessage: "¡Hola! Deseo cotizar un software a la medida para mi empresa en Barrancabermeja.",
        variant: "default",
      },
      {
        tag: "Posicionamiento Local",
        title: "Páginas Web & E-commerce",
        description:
          "Sitios corporativos y tiendas virtuales con pasarelas de pago colombianas (PSE, Nequi, Wompi) y posicionamiento SEO para dominar búsquedas en Barrancabermeja.",
        highlights: [
          "Carga ultra rápida optimizada para celulares",
          "SEO para aparecer en los primeros lugares de Google",
          "Botones directos de WhatsApp y formularios B2B",
        ],
        iconName: "GlobeIcon",
        whatsappMessage: "¡Hola! Me gustaría cotizar una página web profesional para mi negocio en Barrancabermeja.",
        variant: "default",
      },
    ],
    useCases: [],
    faqs: [
      {
        question: "¿Por qué contratar un desarrollador de software en Barrancabermeja?",
        answer:
          "Contratar un desarrollador con presencia regional te garantiza atención directa, comprensión profunda del mercado local (contratistas, proveedores y comercio) y respuesta oportuna para tus proyectos.",
      },
      {
        question: "¿Cuánto tiempo toma desarrollar una página web o software a medida?",
        answer:
          "Una página web profesional o landing page toma entre 5 y 10 días hábiles. Un software a la medida o sistema administrativo empresarial suele tomar entre 3 y 6 semanas dependiendo de la complejidad.",
      },
      {
        question: "¿El sitio web quedará posicionado en Google para búsquedas en Barrancabermeja?",
        answer:
          "Sí. Implementamos una estrategia completa de SEO Local, Schema.org estructurado, arquitectura semántica y optimización de velocidad de carga para que tu negocio aparezca en los primeros resultados de búsqueda.",
      },
      {
        question: "¿Brindan soporte y mantenimiento continuo?",
        answer:
          "Absolutamente. Ofrecemos planes de soporte continuo, monitoreo, respaldos y actualizaciones para que tu sistema o sitio web funcione siempre al 100%.",
      },
    ],
  },
  {
    slug: "bucaramanga",
    name: "Bucaramanga",
    shortName: "Bucaramanga",
    department: "Santander",
    region: "Área Metropolitana",
    postalCode: "680001",
    coordinates: {
      latitude: "7.1254",
      longitude: "-73.1198",
    },
    seo: {
      title: "Automatización de Procesos con IA y Software en Bucaramanga | Agentes de IA",
      description:
        "Automatiza las operaciones de tu empresa en Bucaramanga, Floridablanca y Santander con Inteligencia Artificial, agentes de WhatsApp y software a medida. Reduce costos operativos y elimina tareas manuales.",
      keywords: [
        "automatizacion de procesos bucaramanga",
        "inteligencia artificial bucaramanga",
        "agentes de ia bucaramanga",
        "chatbots con inteligencia artificial bucaramanga",
        "software a medida bucaramanga",
        "automatizacion empresarial santander",
        "agentes de whatsapp bucaramanga",
        "desarrollo de software santander",
        "integracion de sistemas bucaramanga",
        "inteligencia artificial empresas santander",
      ],
    },
    hero: {
      badge: "Automatización con IA & Software en Bucaramanga",
      title: "Automatización de Procesos & Agentes de IA en",
      highlightedText: "Bucaramanga",
      description:
        "Eliminamos tareas manuales, cuellos de botella y costos operativos en tu empresa con Inteligencia Artificial, agentes inteligentes de WhatsApp y software a medida en Bucaramanga y Santander.",
      ctaWhatsappMessage:
        "¡Hola! Me encuentro en Bucaramanga y deseo cotizar automatización de procesos / agentes de IA para mi empresa.",
    },
    industryFocus: {
      badge: "Hub Corporativo & Salud",
      title: "Automatización Inteligente para Empresas en Bucaramanga",
      description:
        "Soluciones para clínicas, firmas de servicios, distribuidoras y empresas de Santander que necesitan escalar reduciendo costos operativos.",
    },
    services: [
      {
        tag: "Atención Autónoma 24/7",
        title: "Integraciones con IA",
        description:
          "Agentes de IA conectados a WhatsApp que agendan citas, atienden pacientes o clientes, envían recordatorios y responden consultas complejas con lenguaje natural.",
        highlights: [
          "Agendamiento automático de citas médicas y comerciales",
          "Atención en lenguaje natural y audios de WhatsApp",
          "Sincronización con calendarios y CRM en tiempo real",
        ],
        iconName: "Bot",
        whatsappMessage: "¡Hola! Deseo cotizar un Agente de IA para mi empresa en Bucaramanga.",
        variant: "glow-brand",
      },
      {
        tag: "Eficiencia Operativa",
        title: "Automatización de Procesos",
        description:
          "Extracción inteligente de datos de facturas, procesamiento de pedidos masivos y conexión entre tus sistemas contables (Siigo, SAP, Zoho) y plataformas internas.",
        highlights: [
          "Extracción automática de datos de PDFs y contratos",
          "Sincronización con Siigo, ERPs y bases de datos",
          "Reducción de hasta un 70% en trabajo administrativo",
        ],
        iconName: "ArrowLeftRight",
        whatsappMessage: "¡Hola! Me interesa automatizar procesos administrativos en Bucaramanga.",
        variant: "default",
      },
      {
        tag: "Plataformas Robustas",
        title: "Software a Medida",
        description:
          "Desarrollo de portales web corporativos, software SaaS, paneles de control y sistemas de gestión interna diseñados para el flujo exacto de tu equipo de trabajo.",
        highlights: [
          "Arquitectura moderna en la nube y alta seguridad",
          "Dashboards analíticos con métricas en tiempo real",
          "Código 100% de propiedad de tu empresa",
        ],
        iconName: "Code2",
        whatsappMessage: "¡Hola! Quiero cotizar un software a la medida para mi empresa en Bucaramanga.",
        variant: "default",
      },
      {
        tag: "Presencia Corporativa",
        title: "Páginas Web & E-commerce",
        description:
          "Sitios corporativos de alto impacto visual y tiendas e-commerce de alto rendimiento con pagos integrados y SEO para captar clientes en Bucaramanga y Colombia.",
        highlights: [
          "Diseño moderno enfocado en conversión y ventas",
          "Pasarelas seguras (Wompi, Bold, PSE, Nequi)",
          "Posicionamiento SEO en Google para Santander",
        ],
        iconName: "GlobeIcon",
        whatsappMessage: "¡Hola! Deseo cotizar una página web corporativa para Bucaramanga.",
        variant: "default",
      },
    ],
    useCases: [],
    faqs: [
      {
        question: "¿Qué tipo de procesos se pueden automatizar con IA en una empresa?",
        answer:
          "Analizamos tareas repetitivas: atención al cliente y ventas por WhatsApp, procesamiento de facturas y pedidos, agendamiento de citas, reportes automáticos y sincronización de datos entre sistemas.",
      },
      {
        question: "¿La IA se puede integrar con los sistemas que ya usamos (como CRM, ERP o WhatsApp)?",
        answer:
          "Sí. Desarrollamos integraciones seguras con herramientas existentes como WhatsApp Business API, Siigo, HubSpot, bases de datos SQL y cualquier software con API disponible.",
      },
      {
        question: "¿Qué ventaja tiene un agente de IA frente a un chatbot tradicional?",
        answer:
          "A diferencia de los chatbots antiguos basados en menús rígidos con botones, los agentes con IA comprenden lenguaje natural y audios, recuerdan el contexto, toman decisiones y ejecutan acciones reales en tu sistema.",
      },
      {
        question: "¿Trabajan con empresas en Floridablanca, Girón y Piedecuesta?",
        answer:
          "Sí, implementamos soluciones para todo el Área Metropolitana de Bucaramanga y Santander con soporte continuo, capacitación a tu equipo y monitoreo constante.",
      },
    ],
  },
  {
    slug: "mompox-bolivar",
    name: "Santa Cruz de Mompox",
    shortName: "Mompox",
    department: "Bolívar",
    region: "Depresión Momposina",
    postalCode: "132510",
    coordinates: {
      latitude: "9.2431",
      longitude: "-74.4258",
    },
    seo: {
      title: "Automatización con IA y Software en Mompox Bolívar | Agentes de WhatsApp & Reservas",
      description:
        "Automatiza las reservas de tu hotel, ventas de artesanías/filigrana y atención al cliente en Santa Cruz de Mompox con Inteligencia Artificial y agentes de WhatsApp 24/7.",
      keywords: [
        "automatizacion con ia mompox",
        "agentes de whatsapp mompox",
        "reservas automaticas hoteles mompox",
        "inteligencia artificial mompox bolivar",
        "software para hoteles mompox",
        "automatizacion para restaurantes mompox",
        "ventas de filigrana por whatsapp mompox",
        "software a medida mompox bolivar",
      ],
    },
    hero: {
      badge: "Inteligencia Artificial & Automatización en Mompox",
      title: "Automatización de Negocios & Agentes de IA en",
      highlightedText: "Mompox, Bolívar",
      description:
        "Ayudamos a hoteles, operadores turísticos, talleres de filigrana y restaurantes de Mompox a atender turistas 24/7, gestionar reservas directas en WhatsApp y automatizar ventas con Inteligencia Artificial.",
      ctaWhatsappMessage:
        "¡Hola! Tengo un negocio en Mompox y me gustaría conocer cómo la Inteligencia Artificial y los agentes de WhatsApp pueden automatizar mis reservas y ventas.",
    },
    industryFocus: {
      badge: "Turismo, Hotelería & Comercio Momposino",
      title: "Innovación y Automatización para Negocios en Mompox",
      description:
        "Soluciones prácticas para hoteles, joyerías de filigrana, operadores turísticos y restaurantes: atención 24/7 sin comisiones a terceros y control total.",
    },
    services: [
      {
        tag: "Turismo & Reservas 24/7",
        title: "Integraciones con IA",
        description:
          "Asistentes de IA en WhatsApp que atienden turistas nacionales y extranjeros en cualquier idioma. Envían fotos de habitaciones, cotizan temporadas (Semana Santa, Jazz) y cierran reservas directas.",
        highlights: [
          "Atención en español, inglés y otros idiomas",
          "Cotización y fotos de habitaciones al instante",
          "0% de comisiones a plataformas como Booking o Airbnb",
        ],
        iconName: "Bot",
        whatsappMessage: "¡Hola! Me interesa un Agente de IA para reservas y atención turística en Mompox.",
        variant: "glow-brand",
      },
      {
        tag: "Cobros & Despachos",
        title: "Automatización de Procesos",
        description:
          "Flujos automáticos que conectan tu WhatsApp con tus cuentas y pasarelas: validación de transferencias (Nequi, Daviplata, PSE), confirmaciones instantáneas y logística de envíos nacionales.",
        highlights: [
          "Validación automática de comprobantes de pago",
          "Emisión de confirmaciones y vouchers digitales",
          "Coordinación de despachos de filigrana y artesanías",
        ],
        iconName: "ArrowLeftRight",
        whatsappMessage: "¡Hola! Quiero automatizar la recepción de pagos y reservas en Mompox.",
        variant: "default",
      },
      {
        tag: "Gestión Local",
        title: "Software a Medida",
        description:
          "Sistemas administrativos, comandas digitales para restaurantes, control de inventario de piezas de filigrana y reportes de caja pensados para operar con fluidez en la región.",
        highlights: [
          "Control de inventario, piezas y pedidos en tiempo real",
          "Comandas y mesas para restaurantes coloniales",
          "Respaldos automáticos en la nube y funcionamiento ágil",
        ],
        iconName: "Code2",
        whatsappMessage: "¡Hola! Deseo cotizar un software a la medida para mi negocio en Mompox.",
        variant: "default",
      },
      {
        tag: "Vitrina Global",
        title: "Páginas Web & E-commerce",
        description:
          "Páginas web corporativas para hoteles y tiendas virtuales para joyerías momposinas con pasarelas de pago y posicionamiento SEO para vender todo el año a nivel nacional.",
        highlights: [
          "Venta de filigrana a Bogotá, Medellín y el exterior",
          "Motor de reservas directas sin intermediarios",
          "SEO en Google para captar turistas antes de su viaje",
        ],
        iconName: "GlobeIcon",
        whatsappMessage: "¡Hola! Quiero cotizar una página web / tienda online para mi negocio en Mompox.",
        variant: "default",
      },
    ],
    useCases: [],
    faqs: [
      {
        question: "¿Cómo beneficia un agente de IA a un hotel o negocio turístico en Mompox?",
        answer:
          "Atiende de inmediato a turistas nacionales y extranjeros las 24 horas, cotiza según la temporada y concreta la reserva sin que tengas que estar pegado al teléfono de madrugada.",
      },
      {
        question: "¿El agente de IA puede atender en otros idiomas a turistas extranjeros?",
        answer:
          "Sí, los agentes comprenden y responden fluidamente en inglés, francés, portugués o cualquier idioma de forma nativa.",
      },
      {
        question: "¿Qué pasa si en Mompox se presentan cortes de luz o fallas de internet?",
        answer:
          "El agente de WhatsApp y la IA operan 100% en la nube; aunque tu teléfono esté apagado o sin señal en Mompox, el asistente sigue atendiendo a los clientes y registrando las reservas en el sistema.",
      },
      {
        question: "¿Es difícil de usar para el personal o los administradores del negocio?",
        answer:
          "En absoluto. Toda la interacción con tus clientes ocurre por el WhatsApp de tu negocio y recibes notificaciones limpias con el resumen de cada cliente o reserva confirmada.",
      },
    ],
  },
  {
    slug: "aguachica",
    name: "Aguachica",
    shortName: "Aguachica",
    department: "Cesar",
    region: "Sur del Cesar",
    postalCode: "205010",
    coordinates: {
      latitude: "8.3078",
      longitude: "-73.6192",
    },
    seo: {
      title: "Desarrollador de Software y Páginas Web en Aguachica Cesar | Programador",
      description:
        "Programación a medida, páginas web y sistemas de facturación/inventario para empresas, comercio y agroindustria en Aguachica y Sur del Cesar.",
      keywords: [
        "desarrollador de software aguachica",
        "programador en aguachica cesar",
        "diseño de paginas web aguachica",
        "creacion de paginas web aguachica",
        "sistemas de facturacion aguachica",
        "software a medida sur del cesar",
        "programador web aguachica",
        "tiendas virtuales aguachica",
      ],
    },
    hero: {
      badge: "Comercio, Agroindustria & Servicios en Aguachica",
      title: "Software a Medida & Páginas Web en",
      highlightedText: "Aguachica, Cesar",
      description:
        "Impulsamos a distribuidores, ferreterías, empresas agroindustriales, transporte y comercio de Aguachica y el Sur del Cesar con software que organiza y automatiza tu operación.",
      ctaWhatsappMessage:
        "¡Hola! Me encuentro en Aguachica, Cesar y deseo cotizar un software a medida / página web para mi negocio.",
    },
    industryFocus: {
      badge: "Agroindustria & Comercio Regional",
      title: "Tecnología y Software para Empresas en Aguachica",
      description:
        "Soluciones para puntos de venta, inventarios comerciales, agroindustria, transporte y distribución en el Sur del Cesar.",
    },
    services: [
      {
        tag: "Ventas & Pedidos por Chat",
        title: "Integraciones con IA",
        description:
          "Asistentes de IA en WhatsApp que toman pedidos de clientes mayoristas y minoristas, consultan precios al instante y agilizan cotizaciones para tu equipo de ventas.",
        highlights: [
          "Recepción de pedidos por chat y notas de voz",
          "Consulta rápida de precios e inventario disponible",
          "Atención continua para clientes del Cesar y Santander",
        ],
        iconName: "Bot",
        whatsappMessage: "¡Hola! Quiero integrar un Agente de IA para atención y pedidos en Aguachica.",
        variant: "glow-brand",
      },
      {
        tag: "Agilidad Comercial",
        title: "Automatización de Procesos",
        description:
          "Conexión de pedidos de WhatsApp directamente con tu sistema de inventario y facturación, evitando errores de digitación y demoras en el despacho.",
        highlights: [
          "Generación automática de órdenes de despacho",
          "Sincronización de inventario entre bodegas",
          "Notificaciones de estado de pedidos a clientes",
        ],
        iconName: "ArrowLeftRight",
        whatsappMessage: "¡Hola! Deseo automatizar los procesos de pedidos y facturación en Aguachica.",
        variant: "default",
      },
      {
        tag: "POS & Control de Stock",
        title: "Software a Medida",
        description:
          "Sistemas de facturación, arqueos de caja, puntos de venta (POS) y control de bodegas para ferreterías, distribuidores de insumos agropecuarios y empresas de transporte.",
        highlights: [
          "Facturación rápida con lector de código de barras",
          "Control multi-bodega y alertas de bajo inventario",
          "Módulos para fletes, pesaje y despacho agrícola",
        ],
        iconName: "Code2",
        whatsappMessage: "¡Hola! Me interesa cotizar un software POS / inventarios en Aguachica.",
        variant: "default",
      },
      {
        tag: "Expansión Regional",
        title: "Páginas Web & E-commerce",
        description:
          "Catálogos digitales y sitios web comerciales optimizados en Google para captar clientes en Ocaña, Gamarra, San Alberto, Pelaya y toda la región.",
        highlights: [
          "Catálogo digital para clientes mayoristas",
          "Posicionamiento en Google para el Sur del Cesar",
          "Integración de pagos en línea (PSE, Nequi)",
        ],
        iconName: "GlobeIcon",
        whatsappMessage: "¡Hola! Quiero cotizar una página web / catálogo digital en Aguachica.",
        variant: "default",
      },
    ],
    useCases: [],
    faqs: [
      {
        question: "¿El software funciona en computadores, tablets y celulares?",
        answer:
          "Sí. Todos nuestros desarrollos son 100% basados en web o compatibles con dispositivos móviles, lo que te permite supervisar tu negocio desde cualquier lugar con conexión a internet.",
      },
      {
        question: "¿Cómo se realiza la capacitación y el soporte en Aguachica?",
        answer:
          "Realizamos sesiones de capacitación guiadas con grabaciones de respaldo y te brindamos soporte prioritario por WhatsApp y videollamada para resolver cualquier inquietud de inmediato.",
      },
      {
        question: "¿El software se puede adaptar a las necesidades específicas de mi empresa?",
        answer:
          "Totalmente. No vendemos programas genéricos cerrados; desarrollamos y ajustamos las funciones según el flujo exacto de trabajo de tu negocio.",
      },
      {
        question: "¿Cuánto cuesta desarrollar un software o sitio web?",
        answer:
          "Los presupuestos se adaptan al alcance requerido. Ofrecemos cotizaciones transparentes y planes de pago por hitos para que inviertas con total seguridad.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityConfig | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getAllCities(): CityConfig[] {
  return cities;
}
