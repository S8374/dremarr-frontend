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
    <div className="flex flex-col gap-6 mb-8 pt-8">
      <button
        onClick={() => router.back()}
        className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm active:scale-90"
      >
        <ChevronLeft className="h-5 w-5 text-slate-800" />
      </button>

      <h1 className="text-3xl md:text-[36px] font-bold tracking-tight text-slate-900 leading-tight heading">
        {title}
      </h1>
    </div>
  );
}
