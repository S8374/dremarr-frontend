"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { verifications } from "./dashboard-data";
import { CheckCircle2, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  check: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  star: <Star className="h-5 w-5 text-amber-500" />,
};

const bgMap: Record<string, string> = {
  check: "bg-green-50/50 dark:bg-green-500/10",
  star: "bg-amber-50/50 dark:bg-amber-500/10",
};

export default function DashboardVerification() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const getLabel = (label: string) => {
    if (isSpanish) {
      switch (label) {
        case "Verified License": return "Licencia Verificada";
        case "Top Rated": return "Mejor Valorado";
        case "Verified": return "Verificado";
        default: return label;
      }
    }
    return label;
  };

  return (
    <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
      <h2 className="text-[20px] font-bold text-foreground mb-6">
        {isSpanish ? "Verificación" : "Verification"}
      </h2>
      <div className="flex flex-col gap-3">
        {verifications.map((v) => (
          <div
            key={v.id}
            className={`flex items-center gap-4 rounded-xl px-5 py-4 border border-border/50 ${bgMap[v.icon]}`}
          >
            <div className="shrink-0">
               {iconMap[v.icon]}
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-foreground">
                {getLabel(v.label)}
              </span>
              <span className="text-[11px] font-bold text-muted-foreground/60">
                {getLabel(v.sublabel)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
