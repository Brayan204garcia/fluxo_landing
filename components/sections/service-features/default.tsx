import { CheckCircle2 } from "lucide-react";
import { Section } from "../../ui/section";

interface Feature {
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
  className?: string;
}

export default function ServiceFeatures({ features, className }: ServiceFeaturesProps) {
  return (
    <Section className={className} id="caracteristicas">
      <div className="max-w-container mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Que incluye este servicio
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Todo lo que necesitas para empezar, sin extras ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 rounded-2xl border border-foreground/8 bg-foreground/3 p-5 transition-colors hover:bg-foreground/6"
            >
              <div className="shrink-0 mt-0.5">
                <CheckCircle2 className="size-5 text-brand" strokeWidth={1.8} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
