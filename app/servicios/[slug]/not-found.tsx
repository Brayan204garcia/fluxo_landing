import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function ServiceNotFound() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
        <h1 className="text-6xl font-bold text-brand">404</h1>
        <h2 className="text-2xl font-semibold">Servicio no encontrado</h2>
        <p className="text-muted-foreground max-w-md">
          El servicio que buscas no existe. Explora todos nuestros servicios disponibles.
        </p>
        <Link
          href="/#servicios"
          className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
        >
          Ver todos los servicios
        </Link>
      </div>
      <Footer />
    </main>
  );
}