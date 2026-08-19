"use client";

import {
  ArrowUpIcon,
  BotIcon,
  BrainCircuitIcon,
  CheckIcon,
  ChevronDownIcon,
  HourglassIcon,
  PlusIcon,
  SlidersHorizontalIcon,
  ZapIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const MODELS = [
  { id: "GPT-5", label: "GPT-5", icon: BotIcon, description: "OpenAI Next-Gen" },
  { id: "Claude 3.5", label: "Claude 3.5", icon: BrainCircuitIcon, description: "Anthropic Sonnet" },
  { id: "Gemini 2.0", label: "Gemini 2.0", icon: ZapIcon, description: "Google AI" },
];

const PLACEHOLDER_PROMPT =
  "Quiero implementar agentes de IA para atender clientes, ventas y soporte en mi empresa...";

export function AIChatMockup({ className }: { className?: string }) {
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT-5");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentModel = MODELS.find((m) => m.id === selectedModel) || MODELS[0];
  const CurrentIcon = currentModel.icon;

  useEffect(() => {
    let index = 0;

    const interval = window.setInterval(() => {
      index = index >= PLACEHOLDER_PROMPT.length ? 0 : index + 1;
      setPlaceholder(PLACEHOLDER_PROMPT.slice(0, index));
    }, 55);

    return () => window.clearInterval(interval);
  }, []);

  const handleSubmit = (textOverride?: string) => {
    const queryText = (textOverride || input || placeholder).trim();
    if (!queryText) return;

    const phoneNumber = siteConfig.whatsapp?.phoneNumber || "573134284953";
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
    const fullMessage = `¡Hola! Tengo la siguiente consulta desde el Agente de IA:\n\n"${queryText}"`;
    const targetUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(fullMessage)}`;

    // Abrir WhatsApp directamente al hacer clic en enviar
    if (typeof window !== "undefined") {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }

    setInput("");
  };

  return (
    <div className={cn("relative w-full max-w-[860px] mx-auto flex flex-col items-center gap-6", className)}>
      {/* Outer Brand Radial Glow Aura behind the input pill */}
      <div className="absolute -inset-4 sm:-inset-8 rounded-full bg-brand/20 dark:bg-brand/25 blur-3xl pointer-events-none transition-all" />

      {/* Floating Onyx-Style AI Input Card */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="relative z-20 w-full rounded-[28px] border border-border/50 dark:border-border/20 bg-card/70 dark:bg-card/70 p-4 shadow-xl backdrop-blur-2xl transition-all duration-300 focus-within:border-brand/50"
      >
        {/* Main Text Input Line */}
        <div className="w-full px-2 pt-1 pb-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-base sm:text-lg text-foreground outline-none font-medium placeholder:text-muted-foreground/60"
          />
        </div>

        {/* Toolbar Footer inside Card */}
        <div className="flex items-center justify-between border-t border-border/30 dark:border-border/15 pt-3 px-1 gap-2">
          {/* Left Tools Group */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-full border border-border/40 dark:border-border/20 bg-background/40 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
              title="Adjuntar archivo"
            >
              <PlusIcon className="size-4" />
            </button>
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-full border border-border/40 dark:border-border/20 bg-background/40 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
              title="Ajustes"
            >
              <SlidersHorizontalIcon className="size-4" />
            </button>
            <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-brand">
              <HourglassIcon className="size-3.5 animate-pulse" />
              <span className="hidden sm:inline">Deep Research</span>
            </div>
          </div>

          {/* Right Model Dropdown & Send Button Group */}
          <div className="flex items-center gap-2.5">
            {/* Dropdown Menu Container */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 rounded-full border border-border/40 bg-background/50 px-3.5 py-1.5 text-xs font-semibold text-foreground hover:bg-foreground/5 hover:border-brand/30 transition-all cursor-pointer shadow-xs"
              >
                <CurrentIcon className="size-3.5 text-brand" />
                <span>{currentModel.label}</span>
                <ChevronDownIcon className={cn("size-3.5 text-muted-foreground transition-transform duration-200", isDropdownOpen && "rotate-180")} />
              </button>

              {isDropdownOpen && (
                <>
                  {/* Backdrop overlay to dismiss on outside click */}
                  <div className="fixed inset-0 z-30" onClick={() => setIsDropdownOpen(false)} />
                  
                  {/* Dropdown Menu Floating Box */}
                  <div className="absolute right-0 bottom-full mb-2 z-40 w-52 rounded-xl border border-border/60 bg-card/95 p-1.5 shadow-2xl backdrop-blur-xl animate-appear">
                    <div className="px-2.5 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Modelo de IA
                    </div>
                    {MODELS.map((model) => {
                      const Icon = model.icon;
                      const isSelected = selectedModel === model.id;
                      return (
                        <button
                          key={model.id}
                          type="button"
                          onClick={() => {
                            setSelectedModel(model.id);
                            setIsDropdownOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer text-left my-0.5",
                            isSelected
                              ? "bg-brand/10 text-brand font-semibold"
                              : "text-foreground hover:bg-foreground/5"
                          )}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className={cn("size-4", isSelected ? "text-brand" : "text-muted-foreground")} />
                            <div>
                              <div className="text-xs font-semibold">{model.label}</div>
                              <div className="text-[10px] text-muted-foreground">{model.description}</div>
                            </div>
                          </div>
                          {isSelected && <CheckIcon className="size-3.5 text-brand stroke-[2.5]" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            <button
              type="submit"
              disabled={!input.trim() && !placeholder}
              className={cn(
                "flex size-9 items-center justify-center rounded-full transition-all cursor-pointer shadow-sm shrink-0",
                input.trim() || placeholder
                  ? "bg-foreground text-background font-bold hover:opacity-90 active:scale-95"
                  : "bg-muted text-muted-foreground opacity-50 cursor-not-allowed"
              )}
              title="Enviar consulta por WhatsApp"
            >
              <ArrowUpIcon className="size-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}


