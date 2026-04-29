"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { quickActions } from "./dashboard-data";
import { ListPlus, Mail, ShoppingBag, UserPen, Settings } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  "list-plus": <ListPlus className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
  "shopping-bag": <ShoppingBag className="h-4 w-4" />,
  "user-pen": <UserPen className="h-4 w-4" />,
};

export default function DashboardQuickActions() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const getActionLabel = (label: string) => {
    if (isSpanish) {
      switch (label) {
        case "Create new listing": return "Crear nuevo anuncio";
        case "View messages": return "Ver mensajes";
        case "Check Orders": return "Revisar pedidos";
        case "Edit Profile": return "Editar perfil";
        case "Manage Membership": return "Gestionar membresía";
        default: return label;
      }
    }
    return label;
  };

  return (
    <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
      <h2 className="text-[20px] font-bold text-foreground mb-6">
        {isSpanish ? "Acciones Rápidas" : "Quick Actions"}
      </h2>
      <div className="flex flex-col gap-3">
        {quickActions.map((action) => (
          <Link
            key={action.id}
            href={action.href}
            className="flex items-center justify-between px-6 h-[50px] rounded-xl border border-border hover:bg-muted/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-4 text-muted-foreground group-hover:text-foreground transition-colors">
                {iconMap[action.icon]}
              </div>
              <span className="text-[14px] font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                {getActionLabel(action.label)}
              </span>
            </div>
            {action.badge !== null && (
              <span className="h-5 w-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                {action.badge}
              </span>
            )}
          </Link>
        ))}
        {/* Manage Membership */}
        <Link
          href="/membership/plan"
          className="flex items-center gap-4 px-6 h-[50px] rounded-xl border border-border hover:bg-muted/50 transition-all group"
        >
          <div className="shrink-0 w-4 text-muted-foreground group-hover:text-foreground transition-colors">
            <Settings className="h-4 w-4" />
          </div>
          <span className="text-[14px] font-bold text-muted-foreground group-hover:text-foreground transition-colors">
            {isSpanish ? "Gestionar membresía" : "Manage Membership"}
          </span>
        </Link>
      </div>
    </div>
  );
}
