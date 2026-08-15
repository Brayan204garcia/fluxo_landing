import { User, Users } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

const DEFAULT_PRICING_PLANS: PricingColumnProps[] = [
  {
    name: "Básico",
    description: "Para pequeños negocios que buscan digitalizar su control de procesos.",
    price: 0,
    priceNote: "Asesoría inicial y demostración gratuita.",
    cta: {
      variant: "glow",
      label: "Solicitar Asesoría",
      href: "#contacto",
    },
    features: [
      "Demostración en vivo de sistemas",
      "Cotización personalizada",
      "Soporte por correo y WhatsApp",
    ],
    variant: "default",
    className: "hidden lg:flex",
  },
  {
    name: "Agentes de IA & Automatización",
    icon: <User className="size-4" />,
    description: "Integración de agentes IA para WhatsApp, atención al cliente y optimización operativa.",
    price: 99,
    priceNote: "Implementación rápida y mensualidad según uso.",
    cta: {
      variant: "default",
      label: "Cotizar Agente IA",
      href: siteConfig.links.whatsapp,
    },
    features: [
      "Bot de atención conversacional 24/7",
      "Integración directa con WhatsApp Business",
      "Entrenamiento con la información de tu empresa",
      "Soporte técnico y actualización continua",
    ],
    variant: "glow-brand",
  },
  {
    name: "Desarrollo A Medida",
    icon: <Users className="size-4" />,
    description: "Sistemas web y móviles avanzados adaptados a tu empresa.",
    price: 499,
    priceNote: "Proyecto a medida según requerimientos específicos.",
    cta: {
      variant: "default",
      label: "Hablar con un Especialista",
      href: "#contacto",
    },
    features: [
      "Desarrollo completo de software a medida",
      "Integraciones con APIs y sistemas existentes",
      "Despliegue e infraestructura propia",
    ],
    variant: "glow",
  },
];

export default function Pricing({
  title = "Planes y Soluciones a Tu Medida",
  description = "Elige la solución que mejor se adapte a tus necesidades operativas o contáctanos para una propuesta personalizada.",
  plans = DEFAULT_PRICING_PLANS,
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                originalPrice={plan.originalPrice}
                promotionText={plan.promotionText}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
