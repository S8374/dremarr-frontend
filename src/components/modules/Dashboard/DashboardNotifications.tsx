import { notifications } from "./dashboard-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";

export default function DashboardNotifications() {
  return (
    <div className="rounded-2xl border border-slate-100 dark:border-border/60 bg-white dark:bg-card p-6 shadow-sm">
      <h2 className="text-[16px] font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
        Notifications
      </h2>
      <div className="flex flex-col gap-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex gap-3 rounded-xl border border-slate-100 dark:border-border/60 bg-[#fafbfc] dark:bg-muted/10 p-4 relative"
          >
            {/* Dismiss */}
            <button className="absolute top-3 right-3 text-red-400 hover:text-red-500 transition-colors">
              <X className="h-4 w-4" />
            </button>

            <Avatar className="h-9 w-9 shrink-0">
              <AvatarImage src={notif.avatar} alt={notif.user} />
              <AvatarFallback>{notif.user[0]}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1.5 pr-4">
              <p className="text-[13px] font-bold text-slate-800 dark:text-white">
                {notif.user}
              </p>
              <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                {notif.message}
              </p>
              <div className="flex items-center gap-3 flex-wrap mt-1">
                {notif.actions.map((action, i) => (
                  <button
                    key={i}
                    className={`text-[11px] font-bold transition-colors ${
                      action === "Decline"
                        ? "text-red-500 hover:text-red-600"
                        : "text-[#728e85] hover:text-[#5f7e75]"
                    }`}
                  >
                    {action}
                  </button>
                ))}
                <span className="ml-auto text-[11px] font-medium text-slate-400">
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
