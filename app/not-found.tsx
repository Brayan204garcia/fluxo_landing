import { Home, MessageCircle } from "lucide-react";

import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LinkButton } from "@/components/ui/link-button";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-x-hidden">
      <LayoutLines />
      <Navbar />

      <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-20 sm:py-32 text-center">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-72 bg-linear-to-r from-brand/20 via-purple-600/15 to-blue-600/15 opacity-70 blur-3xl pointer-events-none" />

        {/* Large Gradient 404 */}
        <h1 className="relative z-10 text-7xl sm:text-9xl font-extrabold tracking-tight bg-linear-to-b from-foreground via-foreground/80 to-foreground/20 bg-clip-text text-transparent drop-shadow-2xl">
          404
        </h1>

        <h2 className="relative z-10 text-2xl sm:text-4xl font-bold tracking-tight text-foreground mt-2">
          Esta página no existe o fue reubicada
        </h2>

        <p className="relative z-10 text-muted-foreground mt-3 max-w-md text-sm sm:text-base leading-relaxed">
          Es posible que la dirección haya cambiado o que hayas ingresado una URL incorrecta. Puedes volver al inicio o escribirnos por WhatsApp.
        </p>

        {/* Primary Action Buttons */}
        <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <LinkButton href="/" variant="default" size="lg" className="w-full sm:w-auto font-semibold text-sm sm:text-base px-6">
            <Home className="mr-2 size-4" />
            Volver al Inicio
          </LinkButton>
          <LinkButton
            href={siteConfig.links.whatsapp}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto font-semibold text-sm sm:text-base px-6"
          >
            <MessageCircle className="mr-2 size-4" />
            Contactar por WhatsApp
          </LinkButton>
        </div>
      </div>

      <Footer />
    </main>
  );
}
