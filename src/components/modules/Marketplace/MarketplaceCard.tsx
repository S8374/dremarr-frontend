"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Clock, Crown, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/shared/language-provider";

interface MarketplaceCardProps {
  service: {
    id: number;
    title_en: string;
    title_es: string;
    need_en: string;
    need_es: string;
    duration_en: string;
    duration_es: string;
    image: string;
    location: string;
    user: {
      name: string;
      avatar: string;
      rating: number;
      isVerified: boolean;
      isPro: boolean;
    };
  };
}

export default function MarketplaceCard({ service }: MarketplaceCardProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  // Hydration safety - Fixed 500 Internal Server Error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-80 w-full bg-muted/10 animate-pulse rounded-2xl border border-border/50 shadow-sm" />;

  const title = isSpanish ? service.title_es : service.title_en;
  const need = isSpanish ? service.need_es : service.need_en;
  const duration = isSpanish ? service.duration_es : service.duration_en;

  return (
    <Link 
      href={`/marketplace/${service.id}`}
      className="group flex flex-col bg-background rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl hover:shadow-[#6f8f8410] transition-all duration-300 hover:-translate-y-1"
    >
      {/* Service Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 gap-4">
        {/* User Info & Badges */}
        <div className="flex items-center border-b border-border pb-4 mb-2 justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border-2 border-background shadow-sm">
              <Image src={service.user.avatar} alt={service.user.name} fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground truncate max-w-[100px]">
                {service.user.name}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-[11px] font-medium text-muted-foreground">{service.user.rating}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {service.user.isVerified && (
              <Badge variant="secondary" className="h-6 gap-1 bg-[#738C88] text-white border-none px-2 rounded-full text-[10px] font-medium shadow-sm hover:bg-[#738C88]">
                <BadgeCheck className="h-3.5 w-3.5 fill-white text-[#738C88]" />
                {isSpanish ? "Verificado" : "Verified"}
              </Badge>
            )}
            {service.user.isPro && (
              <Badge variant="default" className="h-6 bg-linear-to-r from-[#f28b5a] to-[#f0502e] hover:from-[#f28b5a] hover:to-[#f0502e] text-white border-none px-2.5 rounded-full text-[10px] font-bold shadow-sm gap-1">
                <Crown className="h-3.5 w-3.5 fill-none text-white stroke-[2.5px]" />
                PRO
              </Badge>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 text-base font-bold text-foreground leading-tight min-h-10">
          {title}
        </h3>

        {/* Need Pill */}
        <div className="flex items-center gap-2 bg-muted/30 dark:bg-muted/10 rounded-full p-1 py-1 pr-4 border border-border/40 w-fit max-w-full">
          <Badge className="bg-[#1a1c20] dark:bg-foreground text-background text-[10px] px-3 py-1 font-bold uppercase tracking-wide h-7 rounded-full border-none">
            {isSpanish ? "NECESITO" : "NEED"}
          </Badge>
          <span className="text-[11px] sm:text-xs font-medium text-muted-foreground truncate flex-1 leading-none pt-0.5">
            {need}
          </span>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-2 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span className="text-xs font-medium">{service.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-xs font-medium">{duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
