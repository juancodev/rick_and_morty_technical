import React, { Suspense } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { GetCookies } from "app/utils/auth/getCookie";
import { Header } from "app/components/Header";
import { Banner } from "app/components/Banner";
import { LoaderCircle } from "lucide-react";

export default function HomeLayout({ children }: ChildrenProps) {
  return (
    <>
      <NextUIProvider>
        <GetCookies>
          <Suspense
            fallback={
              <main className="h-screen w-full flex flex-col justify-center items-center gap-3">
                <h2 className="text-sm px-4 text-center text-white md:text-3xl font-bold italic animate-pulse">
                  A veces la ciencia es mucho más arte que ciencia, Morty. Mucha
                  gente no entiende eso .
                </h2>
                <div>
                  <LoaderCircle className="animate-spin w-8 h-8 text-white md:w-10 md:h-10" />
                </div>
              </main>
            }
          >
            <Header />
            <Banner />
            {children}
          </Suspense>
        </GetCookies>
      </NextUIProvider>
    </>
  );
}
