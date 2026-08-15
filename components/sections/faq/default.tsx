import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Preguntas frecuentes",
  items = [
    {
      question: "¿Qué tipo de procesos puedes automatizar?",
      answer: (
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Analizo tareas repetitivas, procesos manuales y flujos de información que consumen tiempo en tu negocio. A partir de eso, puedo desarrollar automatizaciones, sistemas internos o integraciones que reduzcan trabajo operativo y errores.
        </p>
      ),
    },
    {
      question: "¿Desarrollas soluciones a medida?",
      answer: (
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Sí. No trabajo con un producto cerrado. Cada solución se desarrolla de acuerdo con el proceso, las herramientas y las necesidades específicas de tu negocio.
        </p>
      ),
    },
    {
      question: "¿Puedes integrar IA con sistemas que ya utilizamos?",
      answer: (
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Sí. Puedo integrar IA con aplicaciones, bases de datos, APIs y herramientas que ya formen parte de tu operación, siempre que técnicamente sea posible.
        </p>
      ),
    },
    {
      question: "¿Qué pasa si no sé exactamente qué necesito?",
      answer: (
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          No necesitas llegar con una solución definida. Puedes explicarme qué proceso realizas actualmente, qué problema tienes y qué quieres mejorar. A partir de ahí podemos identificar qué tiene sentido automatizar o desarrollar.
        </p>
      ),
    },
    {
      question: "¿Cuánto cuesta desarrollar una solución?",
      answer: (
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Depende del alcance, las integraciones y la complejidad del proyecto. Después de entender el proceso y los requerimientos, puedo definir contigo el alcance y darte una propuesta.
        </p>
      ),
    },
    {
      question: "¿Cuánto tarda un proyecto?",
      answer: (
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Depende de su alcance. Los proyectos pequeños pueden resolverse rápidamente, mientras que sistemas o integraciones más complejas requieren más tiempo. Antes de comenzar definimos claramente qué se va a desarrollar y los tiempos estimados.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>

        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[760px] divide-y divide-border/20 dark:divide-border/10">
            {items.map((item, index) => (
              <AccordionItem
                key={item.value ?? item.question}
                value={item.value || `item-${index + 1}`}
                className="border-b-0 bg-transparent py-1 shadow-none border-0"
              >
                <AccordionTrigger className="text-base sm:text-lg font-medium text-foreground/90 hover:text-foreground py-4 hover:no-underline text-left border-b border-border/20 dark:border-border/10">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-muted-foreground/80 font-normal">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
