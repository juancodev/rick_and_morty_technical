import Link from "next/link";
import { Button } from "app/a/components/ui/button";

export default function NotFound() {
  return (
    <>
      <main className="h-screen grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            404 Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lo siento, esa página que buscas no existe.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link href="/">Ir al inicio</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
