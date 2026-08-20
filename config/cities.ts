export interface CityService {
  title: string;
  description: string;
  iconName: "Code" | "Globe" | "Bot" | "Cpu" | "Database" | "ShieldCheck" | "Zap" | "Smartphone";
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
      badge: "Ecosistema Industrial & Comercial",
      title: "Soluciones Digitales para la Industria y Empresas de Barrancabermeja",
      description:
        "Entendemos la dinámica empresarial del Magdalena Medio: requerimientos de contratistas petroleros, logística de suministros, talleres industriales y comercios locales que necesitan operar sin fricción.",
    },
    services: [
      {
        title: "Software a Medida & Plataformas B2B",
        description:
          "Sistemas administrativos, control de cuadrillas, gestión de inventarios, reportes de mantenimiento y portales de clientes diseñados exactamente según tu flujo de trabajo.",
        iconName: "Code",
      },
      {
        title: "Páginas Web Corporativas & E-commerce",
        description:
          "Sitios web ultra veloces optimizados para posicionarse en los primeros lugares de Google cuando busquen tus servicios en Barrancabermeja y Colombia.",
        iconName: "Globe",
      },
      {
        title: "Automatización & Agentes con Inteligencia Artificial",
        description:
          "Agentes de WhatsApp que atienden clientes 24/7, responden cotizaciones, agendan citas y sincronizan pedidos con tu base de datos automáticamente.",
        iconName: "Bot",
      },
      {
        title: "Sistemas en la Nube & Dashboards",
        description:
          "Accede a las métricas clave de tu operación en tiempo real desde cualquier dispositivo, con alta seguridad y respaldos automáticos.",
        iconName: "Database",
      },
    ],
    useCases: [
      {
        industry: "Contratistas y Servicios Industriales",
        challenge: "Control manual y disperso en Excel de horas hombre, órdenes de trabajo y reporte de campo.",
        solution: "Plataforma web accesible desde móvil con validación de tareas en terreno y exportación de informes para auditorías.",
        result: "Ahorro de más de 15 horas semanales en papeleo y 0% de pérdida de registros.",
      },
      {
        industry: "Comercios y Distribuidores Locales",
        challenge: "Pérdida de ventas por demoras en responder cotizaciones y mensajes repetitivos en WhatsApp.",
        solution: "Implementación de un catálogo web sincronizado con un asistente virtual de IA para atención 24/7.",
        result: "Aumento del 40% en velocidad de cotización y captación de clientes fuera de horario comercial.",
      },
      {
        industry: "Empresas de Logística y Transporte Fluvial/Terrestre",
        challenge: "Falta de visibilidad sobre despachos, guías y trazabilidad de carga en el Magdalena Medio.",
        solution: "Software a medida con consulta de guías en tiempo real para clientes y panel administrativo unificado.",
        result: "Reducción del 60% en llamadas de soporte y mayor satisfacción de los clientes corporativos.",
      },
    ],
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
      badge: "Hub Empresarial & Productivo de Santander",
      title: "Automatización Inteligente para Empresas Corporativas, Salud y Servicios en Bucaramanga",
      description:
        "Bucaramanga cuenta con un sector empresarial de alto ritmo: clínicas, firmas de consultoría, distribuidoras y corporativos que pierden cientos de horas en tareas repetitivas. Convertimos procesos manuales en flujos autónomos con IA.",
    },
    services: [
      {
        title: "Agentes Autónomos de IA & WhatsApp 24/7",
        description:
          "Asistentes inteligentes que atienden consultas, cotizan productos, agendan citas y califican prospectos en tiempo real sincronizados con tu CRM o base de datos.",
        iconName: "Bot",
      },
      {
        title: "Automatización de Flujos de Trabajo & Operaciones",
        description:
          "Eliminación de digitación manual, extracción inteligente de datos de facturas/documentos y conexión de datos entre tus plataformas empresariales.",
        iconName: "Zap",
      },
      {
        title: "Software Empresarial & Plataformas a la Medida",
        description:
          "Sistemas administrativos, portales internos de gestión, dashboards analíticos y herramientas personalizadas para el flujo exacto de tu equipo.",
        iconName: "Code",
      },
      {
        title: "Integraciones con APIs, ERPs & Bases de Datos",
        description:
          "Conexión de tus herramientas actuales (Siigo, SAP, HubSpot, Zoho, SQL) con modelos de IA y pipelines de automatización seguros.",
        iconName: "Database",
      },
    ],
    useCases: [
      {
        industry: "Centros Médicos, Clínicas y Odontología",
        challenge: "Colapso en líneas de WhatsApp y horas del personal dedicadas únicamente a responder mensajes y reprogramar citas.",
        solution: "Agente de IA autónomo para agendamiento, confirmación automática por WhatsApp y sincronización con el calendario médico.",
        result: "Reducción del 70% en carga operativa de recepción y 0% de citas perdidas por falta de respuesta.",
      },
      {
        industry: "Distribuidoras, Mayoristas y Comercio B2B",
        challenge: "Demoras en procesar pedidos manuales por chat, consultar stock en bodega y enviar cotizaciones a clientes.",
        solution: "Asistente inteligente que interpreta pedidos en lenguaje natural o audios, valida inventario y genera la orden en el sistema.",
        result: "Procesamiento de cotizaciones en 30 segundos y aumento del 45% en volumen de ventas atendidas.",
      },
      {
        industry: "Firmas de Consultoría, Abogados y Servicios Financieros",
        challenge: "Horas de trabajo manual en lectura de documentos, extracción de datos y elaboración de informes repetitivos.",
        solution: "Pipeline de IA para clasificación y extracción estructurada de información desde contratos y facturas en segundos.",
        result: "Ahorro de más de 20 horas semanales por analista y eliminación total de errores de digitación.",
      },
    ],
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
      badge: "Transformación Digital para Negocios Momposinos",
      title: "Inteligencia Artificial Aplicada al Turismo, Hotelería y Comercio en Mompox",
      description:
        "Los turistas buscan inmediatez, reservan a deshoras y en diferentes idiomas. Implementamos agentes inteligentes que atienden y venden mientras descansas, eliminando tareas manuales y comisiones a intermediarios.",
    },
    services: [
      {
        title: "Agentes de WhatsApp con IA para Hoteles & Hostales",
        description:
          "Responde preguntas de huéspedes, envía fotos de habitaciones, cotiza temporadas (Semana Santa, Jazz Festival) y agenda reservas directas 24/7.",
        iconName: "Bot",
      },
      {
        title: "Automatización de Ventas para Filigrana & Artesanías",
        description:
          "Asistente virtual que muestra catálogo de piezas, toma pedidos, calcula envíos nacionales y verifica transferencias bancarias automáticamente.",
        iconName: "Zap",
      },
      {
        title: "Menús Inteligentes & Pedidos Automáticos para Restaurantes",
        description:
          "Recepción de pedidos sin esperas, reservas de mesas y recomendaciones gastronómicas con IA para visitantes y turistas.",
        iconName: "Database",
      },
      {
        title: "Software de Gestión & Trazabilidad Local",
        description:
          "Sistemas administrativos y de inventarios adaptados a tu negocio para controlar caja, proveedores y stock sin depender de procesos en papel.",
        iconName: "Code",
      },
    ],
    useCases: [
      {
        industry: "Hoteles Patrimoniales y Alojamientos Turísticos",
        challenge: "Consultas nocturnas y de madrugada de turistas que se quedaban sin respuesta, perdiendo reservas ante plataformas de terceros.",
        solution: "Agente de IA autónomo en WhatsApp que atiende en español e inglés, envía fotos, cotiza tarifas y cierra la reserva con enlace de pago.",
        result: "Aumento del 40% en reservas directas y cero clientes perdidos por falta de respuesta oportuna.",
      },
      {
        industry: "Talleres de Orfebrería y Filigrana Momposina",
        challenge: "Ventas estancadas únicamente a temporadas altas cuando llegan turistas a la tienda física.",
        solution: "Asistente de IA en WhatsApp que reactiva compradores de otras ciudades, envía catálogos y procesa pagos para despachos nacionales.",
        result: "Ventas constantes durante todo el año, incluso en los meses de baja afluencia turística.",
      },
      {
        industry: "Operadores Turísticos y Paseos en Lancha por el Río",
        challenge: "Desorden tomando reservas manuales en papel y llamadas perdidas durante los recorridos turísticos.",
        solution: "Asistente automatizado que agenda salidas, verifica cupos disponibles y envía confirmación con ubicación del muelle.",
        result: "Llenado organizado de lanchas y 80% de ahorro de tiempo en gestión de llamadas.",
      },
    ],
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
      badge: "Centro Comercial del Sur del Cesar",
      title: "Tecnología para Negocios Comerciales, Agropecuarios y de Transporte",
      description:
        "Aguachica es el corazón comercial y logístico del Sur del Cesar. Te ayudamos a modernizar tus puntos de venta, inventarios, despachos y presencia digital para liderar en la región.",
    },
    services: [
      {
        title: "Sistemas de Facturación, Inventarios & POS",
        description:
          "Software adaptado a la normatividad colombiana (DIAN) con control de stock en múltiples bodegas y arqueos de caja rápidos.",
        iconName: "Database",
      },
      {
        title: "Páginas Web Comerciales & Catálogos Virtuales",
        description:
          "Sitios web enfocados en captar clientes mayoristas y minoristas en el Cesar, Santander y Bolívar.",
        iconName: "Globe",
      },
      {
        title: "Automatización de Pedidos y Cotizaciones",
        description:
          "Conexión de tu catálogo con WhatsApp para que tus asesores coticen y cierren pedidos en tiempo récord.",
        iconName: "Bot",
      },
      {
        title: "Software a Medida para Agro & Transporte",
        description:
          "Sistemas personalizados para control de fletes, pesaje, acopio de cosecha y gestión de clientes.",
        iconName: "Code",
      },
    ],
    useCases: [
      {
        industry: "Distribuidoras de Insumos Agropecuarios y Ferreterías",
        challenge: "Descuadres continuos de inventario y dificultad para consultar precios al instante ante el cliente.",
        solution: "Software web de inventario en tiempo real con lector de código de barras y cotizador móvil para asesores.",
        result: "Cero descuadres en bodega y agilidad del 70% en atención al mostrador.",
      },
      {
        industry: "Empresas de Transporte de Carga y Pasajeros",
        challenge: "Control manual en planillas de viajes, encomiendas y liquidación a conductores.",
        solution: "Plataforma administrativa centralizada para emisión de guías de carga, seguimiento y reportes de caja.",
        result: "Liquidación automática de viajes y trazabilidad total de paquetes.",
      },
      {
        industry: "Comercios Minoristas y Mayoristas",
        challenge: "Falta de visibilidad fuera de Aguachica y limitación de ventas solo a transeúntes locales.",
        solution: "Catálogo digital optimizado en Google que capta clientes de Ocaña, Gamarra, San Alberto y La Gloria.",
        result: "Apertura de nuevos canales de venta en municipios vecinos.",
      },
    ],
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
