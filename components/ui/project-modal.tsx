"use client";

import * as React from "react";
import Script from "next/script";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./dialog";

interface ProjectModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ProjectModalContext = React.createContext<ProjectModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function useProjectModal() {
  return React.useContext(ProjectModalContext);
}

export function ProjectModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = React.useCallback(() => setIsOpen(true), []);
  const closeModal = React.useCallback(() => setIsOpen(false), []);

  // Escuchar clics globales en enlaces con href="#hablemos" o con texto "Hablemos de tu proyecto"
  React.useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href");
      const text = target.textContent?.trim().toLowerCase() || "";

      if (
        href === "#hablemos" ||
        href === "#hablemos-modal" ||
        text.includes("hablemos de tu proyecto")
      ) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, []);

  return (
    <ProjectModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl sm:max-w-3xl w-[94vw] p-0 bg-transparent border-0 outline-none shadow-none overflow-hidden">
          <DialogTitle className="sr-only">Calificador de leads</DialogTitle>
          <iframe
            data-dapta-forms
            src="https://forms.dapta.ai/ve9que/alternative/calificador-de-leads?embed=1"
            title="Calificador de leads"
            loading="lazy"
            style={{ width: "100%", border: 0, minHeight: "500px" }}
          />
        </DialogContent>
      </Dialog>
      <Script src="https://forms.dapta.ai/embed.js" strategy="afterInteractive" />
    </ProjectModalContext.Provider>
  );
}
