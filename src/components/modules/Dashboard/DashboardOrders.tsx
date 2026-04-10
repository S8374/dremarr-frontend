import { orderHistory } from "./dashboard-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function DashboardOrders() {
  return (
    <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-[20px] font-bold text-slate-800 mb-6 heading">
        Order History
      </h2>
      <div className="flex flex-col gap-4">
        {orderHistory.map((order) => (
          <div
            key={order.id}
            className="flex items-center gap-6 rounded-[20px] p-4 border border-slate-100 hover:bg-slate-50 transition-all group"
          >
            {/* Thumbnail */}
            <div className="relative h-[80px] w-[100px] shrink-0 rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src={order.image}
                alt={order.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-2 min-w-0">
              {order.date && (
                <span className="text-[11px] font-bold text-slate-300">
                  {order.date}
                </span>
              )}
              <p className="text-[15px] font-bold text-slate-700 leading-tight">
                {order.title}
              </p>
            </div>

            <div className="shrink-0 pt-6">
                <span
                    className={cn(
                    "px-4 py-2 rounded-xl text-[12px] font-bold shadow-sm",
                    order.status === "On-going"
                        ? "bg-[#e2ebe8] text-[#728e85]"
                        : "bg-[#f2e7d0] text-[#cfaa6a]"
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
