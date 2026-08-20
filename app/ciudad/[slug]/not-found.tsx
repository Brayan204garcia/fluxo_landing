import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LinkButton } from "@/components/ui/link-button";
import { LayoutLines } from "@/components/ui/layout-lines";
import { cities } from "@/config/cities";

export default function CityNotFound() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-x-hidden">
      <LayoutLines />
      <Navbar />

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
          <MapPin className="size-8" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Ciudad no encontrada
        </h1>

        <p className="text-muted-foreground mt-4 max-w-md text-base sm:text-lg">
          La ciudad que buscas no está registrada o no se encuentra disponible actualmente en nuestro catálogo local.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/" variant="default" size="lg">
            <ArrowLeft className="mr-2 size-4" />
            Volver al inicio
          </LinkButton>
        </div>

        <div className="mt-12 w-full max-w-xl rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Ciudades disponibles con cobertura activa:
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/ciudad/${c.slug}`}
                className="rounded-lg border border-border/80 bg-background px-3.5 py-1.5 text-sm font-medium transition hover:border-brand hover:text-brand"
              >
                {c.name} ({c.department})
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
