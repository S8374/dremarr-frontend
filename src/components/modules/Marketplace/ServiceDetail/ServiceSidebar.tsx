"use client";

import Image from "next/image";
import { BadgeCheck, MapPin, Calendar, Star, MessageSquare, Crown } from "lucide-react";
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
    <div className="lg:sticky lg:top-24 flex flex-col gap-8 bg-card border border-border rounded-[24px] p-6 shadow-sm">
      <div>
        <h3 className="text-[13px] font-bold text-foreground mb-6">
          {isSpanish ? "Publicado por" : "Posted By"}
        </h3>

        <div className="flex items-start gap-4 mb-6">
          <div className="relative h-[70px] w-[70px] rounded-full overflow-hidden border border-border shadow-sm shrink-0">
            <Image src={user.avatar} alt={user.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-1 pt-1">
            <div className="flex items-center justify-between gap-12">
               <span className="text-[18px] font-bold text-foreground leading-tight block truncate max-w-[140px]">{user.name.toLowerCase()}</span>
               <div className="flex items-center gap-1 shrink-0">
                 <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                 <span className="text-[13px] font-bold text-foreground">{user.rating}</span>
               </div>
            </div>
            
            {/* Badges Row */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {user.isVerified && (
                <Badge variant="secondary" className="h-5 gap-1 bg-[#738C88] text-white border-none px-2 rounded-full text-[9px] font-bold shadow-sm hover:bg-[#738C88]">
                  <BadgeCheck className="h-3 w-3 fill-white text-[#738C88]" />
                  Verified
                </Badge>
              )}
              {user.isPro && (
                <Badge variant="default" className="h-5 bg-gradient-to-r from-[#f28b5a] to-[#f0502e] hover:from-[#f28b5a] hover:to-[#f0502e] text-white border-none px-2 rounded-full text-[9px] font-bold shadow-sm gap-1">
                  <Crown className="h-3 w-3 fill-none text-white stroke-[2.5px]" />
                  PRO
                </Badge>
              )}
              {user.isRecommended && (
                <Badge variant="outline" className="h-5 bg-[#fff0ed] dark:bg-[#fff0ed]/10 text-[#f2654a] border-none px-2 rounded-full text-[9px] font-bold shadow-sm">
                   Trusted User
                </Badge>
              )}
            </div>
          </div>
        </div>

        <p className="text-[13px] text-muted-foreground leading-relaxed font-medium mb-8">
          {user.bio}
        </p>

        <div className="grid grid-cols-2 gap-4 pb-10">
          <div className="flex flex-col gap-1">
             <span className="text-[11px] font-bold text-muted-foreground uppercase">{isSpanish ? "Ubicación" : "Location"}</span>
             <span className="text-[14px] font-bold text-foreground">{user.location}</span>
          </div>
          <div className="flex flex-col gap-1">
             <span className="text-[11px] font-bold text-muted-foreground uppercase">{isSpanish ? "Miembro desde" : "Member since"}</span>
             <span className="text-[14px] font-bold text-foreground">{user.memberSince}</span>
          </div>
        </div>

        <Button className="h-[52px] w-full rounded-xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[15px] shadow-sm transition-all border-0">
          {isSpanish ? "Enviar mensaje" : "Send message"}
        </Button>
      </div>
    </div>
  );
}
