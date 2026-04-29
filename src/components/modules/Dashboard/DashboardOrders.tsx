"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { orderHistory } from "./dashboard-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function DashboardOrders() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
      <h2 className="text-[22px] font-bold text-foreground mb-6">
        {isSpanish ? "Historial de Pedidos" : "Order History"}
      </h2>
      <div className="flex flex-col gap-4">
        {orderHistory.map((order) => (
          <div
            key={order.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-[20px] p-4 border border-border hover:bg-muted/30 transition-all group"
          >
            {/* Thumbnail */}
            <div className="relative h-[80px] w-full sm:w-[100px] shrink-0 rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src={order.image}
                alt={order.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-1 min-w-0">
              {order.date && (
                <span className="text-[11px] font-bold text-muted-foreground/50 self-end sm:self-auto">
                  {order.date}
                </span>
              )}
              <p className="text-[15px] font-bold text-foreground leading-tight">
                {order.title}
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
                <span
                    className={cn(
                    "inline-flex w-full sm:w-auto justify-center px-5 py-2 rounded-xl text-[12px] font-bold shadow-sm",
                    order.status === "On-going"
                        ? "bg-[#738C88] text-background dark:text-white"
                        : "bg-[#D0AB6E] text-white  dark:bg-[#cfaa6a]"
                    )}
                >
                    {isSpanish 
                      ? (order.status === "On-going" ? "En curso" : "Completado") 
                      : order.status}
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
