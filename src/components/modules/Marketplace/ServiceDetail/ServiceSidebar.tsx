"use client";

import Image from "next/image";
import { CheckCircle, MapPin, Calendar, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/shared/language-provider";

interface ServiceSidebarProps {
  user: {
    name: string;
    avatar: string;
    rating: number;
    isVerified: boolean;
    isPro: boolean;
    isRecommended?: boolean;
    bio: string;
    location: string;
    memberSince: string;
  };
}

export default function ServiceSidebar({ user }: ServiceSidebarProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="lg:sticky lg:top-24 flex flex-col gap-8 bg-background border border-border/50 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/50 mb-6">
          {isSpanish ? "Publicado por" : "Posted by"}
        </h3>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-background ring-2 ring-[#6f8f84/10] shadow-md">
            <Image src={user.avatar} alt={user.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">{user.name}</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-bold text-foreground">{user.rating}</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {user.isVerified && (
            <Badge className="bg-[#6f8f84/10] text-[#6f8f84] border-none px-3 py-1 flex items-center gap-1.5 text-[10px] font-bold uppercase shadow-none">
              <CheckCircle className="h-3.5 w-3.5" />
              {isSpanish ? "VERIFICADO" : "VERIFIED"}
            </Badge>
          )}
          {user.isRecommended && (
            <Badge className="bg-[#f0502e/10] text-[#f0502e] border-none px-3 py-1 flex items-center gap-1.5 text-[10px] font-bold uppercase shadow-none">
              <Star className="h-3.5 w-3.5" />
              {isSpanish ? "RECOMENDADO" : "RECOMMENDED"}
            </Badge>
          )}
          {user.isPro && (
            <Badge className="bg-[#1a1c20] text-white border-none px-3 py-1 text-[10px] font-bold uppercase shadow-none">
              PRO
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-6">
          {user.bio}
        </p>

        <div className="space-y-4 pt-6 border-t border-border/40">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <MapPin className="h-4 w-4" />
              {isSpanish ? "Ubicación" : "Location"}
            </div>
            <span className="font-bold text-foreground">{user.location}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <Calendar className="h-4 w-4" />
              {isSpanish ? "Miembro desde" : "Member since"}
            </div>
            <span className="font-bold text-foreground">{user.memberSince}</span>
          </div>
        </div>
      </div>

      <Button className="h-14 w-full rounded-full bg-[#6f8f84] hover:bg-[#5f7e75] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-3">
        <MessageSquare className="h-5 w-5" />
        {isSpanish ? "Enviar mensaje" : "Send message"}
      </Button>
    </div>
  );
}
