"use client";

import { Clock, MapPin, Search } from "lucide-react";
import { useLanguage } from "@/components/shared/language-provider";

interface ServiceInfoCardsProps {
  need: string;
  duration: string;
  location: string;
}

export default function ServiceInfoCards({ need, duration, location }: ServiceInfoCardsProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const items = [
    {
      icon: <Search className="h-5 w-5 text-[#6f8f84]" />,
      label: isSpanish ? "Lo que necesito" : "What I need",
      value: need
    },
    {
      icon: <Clock className="h-5 w-5 text-[#6f8f84]" />,
      label: isSpanish ? "Tiempo" : "Duration",
      value: duration
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#6f8f84]" />,
      label: isSpanish ? "Ubicación" : "Location",
      value: location
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
      {items.map((item, i) => (
        <div 
          key={i} 
          className="flex items-center gap-4 p-5 rounded-2xl bg-muted/40 border border-border/60 hover:shadow-md transition-all group"
        >
          <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-background group-hover:bg-[#6f8f84/10] transition-colors">
            {item.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/50">
              {item.label}
            </span>
            <span className="text-sm font-bold text-foreground">
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
