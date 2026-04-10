import { notifications } from "./dashboard-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";

export default function DashboardNotifications() {
  return (
    <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-[18px] font-bold text-slate-800 mb-6 heading">
        Notifications
      </h2>
      <div className="flex flex-col gap-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex gap-4 rounded-[20px] border border-slate-50 bg-[#fafbfc] p-5 relative group"
          >
            {/* Dismiss */}
            <button className="absolute top-4 right-4 text-rose-300 hover:text-rose-500 transition-colors">
              <X className="h-4 w-4" />
            </button>

            <Avatar className="h-10 w-10 shrink-0 border border-slate-100 p-0.5 bg-white shadow-sm">
              <AvatarImage src={notif.avatar} alt={notif.user} className="rounded-full" />
              <AvatarFallback>{notif.user[0]}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1 min-w-0 pr-4">
              <p className="text-[14px] font-bold text-slate-800">
                {notif.user}
              </p>
              <p className="text-[12px] font-bold text-slate-400 leading-relaxed mb-2">
                {notif.message}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  {notif.actions.map((action, i) => (
                    <button
                      key={i}
                      className={`text-[12px] font-bold transition-colors ${
                        action === "Decline"
                          ? "text-rose-500 hover:text-rose-600"
                          : "text-[#728e85] hover:text-[#526d63]"
                      }`}
                    >
                      {action === "Accept" ? "Accept" : (action === "Decline" ? "Decline" : "Give a review")}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] font-bold text-slate-300">
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
