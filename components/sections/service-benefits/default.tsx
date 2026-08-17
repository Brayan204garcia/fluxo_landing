import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";

interface Benefit {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
  className?: string;
}

export default function ServiceBenefits({ benefits, className }: ServiceBenefitsProps) {
  return (
    <Section className={cn("bg-foreground/2", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Por que elegir este servicio
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "relative flex flex-col gap-4 overflow-hidden rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-1",
                index === 1
                  ? "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 dark:after:bg-brand/70 after:blur-[72px]"
                  : "glass-2 to-transparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/20 after:blur-[72px]"
              )}
            >
              <hr
                className={cn(
                  "absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent z-10",
                  index === 1 ? "via-brand" : "via-foreground/60"
                )}
              />
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 text-brand font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
