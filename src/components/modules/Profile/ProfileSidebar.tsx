"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

interface ProfileSidebarProps {
  data: any;
}

export default function ProfileSidebar({ data }: ProfileSidebarProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="sticky top-24 w-full">
      <div className="rounded-3xl border border-slate-100 dark:border-border/40 bg-white dark:bg-card p-6 shadow-sm">

        <div className="flex items-center gap-4 mb-8">
          <Avatar className="h-14 w-14 border-2 border-background shadow-sm">
            <AvatarImage src={data.avatar} alt={data.name} />
            <AvatarFallback>{data.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white tracking-tight">{data.name}</h2>
            <span className="text-[13px] font-medium text-slate-500 tracking-tight">
              {isSpanish ? data.title_es : data.title_en}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/messages" className="w-full">
            <Button className="h-12 w-full rounded-2xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold transition-all duration-300 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              {isSpanish ? "Enviar mensaje" : "Send message"}
            </Button>
          </Link>
          <Link href="/create-listing" className="w-full">
            <Button className="h-12 w-full rounded-2xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold transition-all duration-300 flex items-center justify-center gap-2">
              {isSpanish ? "Crear Anuncio" : "Create Listing"}
            </Button>
          </Link>
          {/* <Link href="/edit-profile" className="w-full">
            <Button className="h-12 w-full rounded-2xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold transition-all duration-300 flex items-center justify-center gap-2">
              {isSpanish ? "Editar Perfil" : "Edit Profile"}
            </Button>
          </Link>
          <Link href="/report/1" className="w-full">
            <button className="text-[13px] font-bold text-red-500 hover:text-red-600 transition-colors pt-2 uppercase tracking-wide cursor-pointer w-full text-center">
              {isSpanish ? "Reportar a esta persona" : "Report This Person"}
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
