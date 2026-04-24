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
    <div className="flex flex-col gap-6 mb-8 pt-8 font-sans">
      <button
        onClick={() => router.back()}
        className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-card hover:bg-muted transition-all shadow-sm active:scale-90"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>

      <h1 className="text-3xl md:text-[36px] font-bold tracking-tight text-foreground leading-tight">
        {title}
      </h1>
    </div>
  );
}
