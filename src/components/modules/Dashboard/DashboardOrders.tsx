import { orderHistory } from "./dashboard-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function DashboardOrders() {
  return (
    <div className="rounded-2xl border border-slate-100 dark:border-border/60 bg-white dark:bg-card p-6 shadow-sm">
      <h2 className="text-[18px] font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
        Order History
      </h2>
      <div className="flex flex-col gap-4">
        {orderHistory.map((order) => (
          <div
            key={order.id}
            className="flex items-center gap-4 rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-muted/20 transition-colors"
          >
            {/* Thumbnail */}
            <div className="relative h-[72px] w-[90px] shrink-0 rounded-xl overflow-hidden">
              <Image
                src={order.image}
                alt={order.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-2 min-w-0">
              {order.date && (
                <span className="text-[11px] font-semibold text-slate-400">
                  {order.date}
                </span>
              )}
              <p className="text-[13px] font-bold text-slate-700 dark:text-slate-200 leading-snug line-clamp-2">
                {order.title}
              </p>
              <span
                className={cn(
                  "self-start px-3 py-1 rounded-full text-[11px] font-bold",
                  order.status === "On-going"
                    ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300"
                    : "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300"
                )}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
