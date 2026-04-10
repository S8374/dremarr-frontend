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
      icon: <Search className="h-5 w-5 text-slate-500" />,
      label: isSpanish ? "Intercambio Preferido" : "Preferred exchange",
      value: need,
      fullWidth: true
    },
    {
      icon: <Clock className="h-5 w-5 text-slate-500" />,
      label: isSpanish ? "Plazo" : "Timeline",
      value: duration,
      fullWidth: false
    },
    {
      icon: <MapPin className="h-5 w-5 text-slate-500" />,
      label: isSpanish ? "Ubicación" : "Location",
      value: location,
      fullWidth: false
    }
  ];

  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div 
            key={i} 
            className={`flex items-center gap-4 p-4 rounded-xl bg-[#f8f9fa] border border-slate-100 hover:bg-[#f2f4f5] transition-colors ${item.fullWidth ? 'md:col-span-2' : ''}`}
          >
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-slate-400">
                {item.label}
              </span>
              <span className="text-[14px] font-bold text-slate-700">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
