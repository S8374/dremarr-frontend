"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { dashboardStats } from "./dashboard-data";
import { Eye, MessageCircle, ShoppingBag, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  eye: <Eye className="h-5 w-5 text-blue-500" />,
  message: <MessageCircle className="h-5 w-5 text-green-500" />,
  star: <Star className="h-5 w-5 text-amber-500" />,
  list: <ShoppingBag className="h-5 w-5 text-purple-500" />,
};

const bgMap: Record<string, string> = {
  eye: "bg-blue-50 dark:bg-blue-500/10",
  message: "bg-green-50 dark:bg-green-500/10",
  star: "bg-amber-50 dark:bg-amber-500/10",
  list: "bg-purple-50 dark:bg-purple-500/10",
};

export default function DashboardStats() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const getStatLabel = (label: string) => {
    if (isSpanish) {
      switch (label) {
        case "Total Views": return "Vistas Totales";
        case "Responses": return "Respuestas";
        case "Rating": return "Calificación";
        case "Active Listings": return "Anuncios Activos";
        default: return label;
      }
    }
    return label;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {dashboardStats.map((stat) => (
        <div
          key={stat.id}
          className="flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-7 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-bold text-muted-foreground uppercase tracking-wider">
              {getStatLabel(stat.label)}
            </span>
            <span className="text-[28px] font-bold text-foreground tracking-tight">
              {stat.value}
            </span>
          </div>
          <div className={`h-12 w-12 flex items-center justify-center rounded-full shadow-sm ${bgMap[stat.icon]}`}>
            {iconMap[stat.icon]}
          </div>
        </div>
      ))}
    </div>
  );
}
