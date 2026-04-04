"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/shared/language-provider";

export default function MarketplaceHeader() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-10 mt-6 sm:mt-10 animate-in slide-in-from-top-4 duration-500">
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-4 bg-clip-text">
          {isSpanish ? "Mercado" : "Marketplace"}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg lg:text-xl font-medium max-w-xl mx-auto lg:mx-0">
          {isSpanish 
            ? "Descubre habilidades y servicios para el trueque: encuentra tu intercambio perfecto."
            : "Discover skills and services to barter - find your perfect exchange."}
        </p>
      </div>
      <div className="flex justify-center lg:justify-end">
        <Button className="h-14 rounded-full bg-[#6f8f84] hover:bg-[#5f7e75] px-10 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 duration-300">
          {isSpanish ? "Crear nuevo listado" : "Create new listing"}
        </Button>
      </div>
    </div>
  );
}
