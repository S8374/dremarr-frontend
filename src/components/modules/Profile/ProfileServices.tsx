"use client";

import { useLanguage } from "@/components/shared/language-provider";
import Image from "next/image";

interface ProfileServicesProps {
  data: any;
}

export default function ProfileServices({ data }: ProfileServicesProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="flex flex-col gap-10 mt-10">
      
      {/* What I Provide */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          {isSpanish ? "Lo que ofrezco" : "What I Provide"}
        </h3>
        
        <div className="flex flex-col gap-4">
          {data.providedServices.map((service: any) => (
            <div key={service.id} className="relative w-full max-w-[400px] rounded-3xl border border-slate-100 dark:border-border/40 bg-white dark:bg-card p-3 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src={service.image}
                    alt={isSpanish ? service.title_es : service.title_en}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center px-1 pb-2">
                  <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-slate-800 dark:text-white">
                    {isSpanish ? service.title_es : service.title_en}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What I Need */}
      <div className="flex flex-col gap-4">
         <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          {isSpanish ? "Lo que necesito" : "What I Need"}
        </h3>
        <div className="flex flex-wrap gap-2">
           {(isSpanish ? data.needs_es : data.needs_en).map((need: string, index: number) => (
             <div key={index} className="px-4 py-2 rounded-lg border border-border text-[12px] font-medium text-muted-foreground dark:text-slate-300">
               {need}
             </div>
           ))}
        </div>
      </div>

    </div>
  );
}
