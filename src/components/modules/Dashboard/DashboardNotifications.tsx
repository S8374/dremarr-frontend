"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { notifications } from "./dashboard-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";

export default function DashboardNotifications() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
      <h2 className="text-[20px] font-bold text-foreground mb-6">
        {isSpanish ? "Notificaciones" : "Notifications"}
      </h2>
      <div className="flex flex-col gap-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex gap-4 rounded-[20px] border border-border bg-muted/30 p-5 relative group"
          >
            {/* Dismiss */}
            <button className="absolute top-4 right-4 text-rose-300 hover:text-rose-500 transition-colors">
              <X className="h-4 w-4" />
            </button>

            <Avatar className="h-10 w-10 shrink-0 border border-border p-0.5 bg-background shadow-sm">
              <AvatarImage src={notif.avatar} alt={notif.user} className="rounded-full" />
              <AvatarFallback>{notif.user[0]}</AvatarFallback>
            </Avatar>

            <div className="flex flex-1 flex-col gap-1 min-w-0 pr-4">
              <p className="text-[14px] font-bold text-foreground">
                {notif.user}
              </p>
              <p className="text-[12px] font-bold text-muted-foreground leading-relaxed mb-2">
                {notif.message}
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-4">
                  {notif.actions.map((action, i) => (
                    <button
                      key={i}
                      className={`text-[12px] font-bold transition-colors ${
                        action === "Decline"
                          ? "text-rose-500 hover:text-rose-600"
                          : "text-[#6a9084] hover:text-[#5a7c72]"
                      }`}
                    >
                      {isSpanish ? (
                        action === "Accept" ? "Aceptar" : 
                        action === "Decline" ? "Rechazar" : 
                        "Escribir reseña"
                      ) : action}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] font-bold text-muted-foreground/40">
                  {notif.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
