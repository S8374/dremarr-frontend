"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/shared/language-provider";

interface ServiceHeaderProps {
  title: string;
}

export default function ServiceHeader({ title }: ServiceHeaderProps) {
  const router = useRouter();
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="flex flex-col gap-4 mb-8 pt-6">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit group"
      >
        <div className="h-10 w-10 flex items-center justify-center rounded-full border border-border group-hover:bg-muted transition-all">
          <ChevronLeft className="h-5 w-5" />
        </div>
        <span className="text-sm font-semibold">{isSpanish ? "Volver" : "Back"}</span>
      </button>

      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
        <span>{isSpanish ? "MERCADO" : "MARKETPLACE"}</span>
        <span>/</span>
        <span className="text-[#6f8f84]">{title}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
        {title}
      </h1>
    </div>
  );
}
