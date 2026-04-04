"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck, Star, Zap } from "lucide-react";

interface ProfileHeaderProps {
  data: any;
}

export default function ProfileHeader({ data }: ProfileHeaderProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="flex flex-col gap-6">
      {/* Header Info */}
      <div className="flex items-center gap-4">
        <Avatar className="h-[72px] w-[72px] border-2 border-background shadow-sm">
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback>{data.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">{data.name}</h1>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-[15px] font-semibold text-slate-400">{data.rating.toFixed(1)}</span>
            </div>
          </div>
          <span className="text-[15px] font-medium text-slate-500 tracking-tight">
             {isSpanish ? data.title_es : data.title_en}
          </span>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {data.isVerified && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#728e85] text-white">
            <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />
            <span className="text-[11px] font-bold">{isSpanish ? "Verificado" : "Verified"}</span>
          </div>
        )}
        {data.isGold && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#cfaa6a] text-white">
            <span className="text-[11px] font-bold">{isSpanish ? "Membresía Oro" : "Gold Membership"}</span>
          </div>
        )}
        {data.isPro && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f0502e] text-white">
             <Zap className="h-3.5 w-3.5 stroke-[2.5] fill-white" />
            <span className="text-[11px] font-bold uppercase">Pro</span>
          </div>
        )}
      </div>

      {/* About */}
      <div className="flex flex-col gap-3 mt-2">
        <h3 className="text-[17px] font-bold text-slate-900 dark:text-white tracking-tight">
          {isSpanish ? "Acerca de" : "About"}
        </h3>
        <p className="text-[14px] font-medium leading-[1.6] text-slate-500 tracking-tight">
          {isSpanish ? data.about_es : data.about_en}
        </p>
      </div>

      {/* Location & Member Since */}
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="flex flex-col gap-0.5">
            <span className="text-[12px] font-bold text-slate-400 tracking-tight">{isSpanish ? "Ubicación" : "Location"}</span>
            <span className="text-[15px] font-bold text-slate-800 dark:text-white">{data.location}</span>
        </div>
        <div className="flex flex-col gap-0.5">
            <span className="text-[12px] font-bold text-slate-400 tracking-tight">{isSpanish ? "Miembro Desde" : "Member Since"}</span>
            <span className="text-[15px] font-bold text-slate-800 dark:text-white">{isSpanish ? data.memberSince_es : data.memberSince_en}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-4 mt-6">
         <h3 className="text-[17px] font-bold text-slate-900 dark:text-white tracking-tight">
          {isSpanish ? "Habilidades" : "Skills"}
        </h3>
        <div className="flex flex-wrap gap-2">
           {(isSpanish ? data.skills_es : data.skills_en).map((skill: string, index: number) => (
             <div key={index} className="px-4 py-2 rounded-lg border border-border text-[12px] font-medium text-slate-600 dark:text-slate-300">
               {skill}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
