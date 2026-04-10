import { quickActions } from "./dashboard-data";
import { ListPlus, Mail, ShoppingBag, UserPen } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  "list-plus": <ListPlus className="h-4 w-4 text-slate-500 dark:text-slate-400" />,
  mail: <Mail className="h-4 w-4 text-slate-500 dark:text-slate-400" />,
  "shopping-bag": <ShoppingBag className="h-4 w-4 text-slate-500 dark:text-slate-400" />,
  "user-pen": <UserPen className="h-4 w-4 text-slate-500 dark:text-slate-400" />,
};

export default function DashboardQuickActions() {
  return (
    <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-[18px] font-bold text-slate-800 mb-6 heading">
        Quick Actions
      </h2>
      <div className="flex flex-col gap-3">
        {quickActions.map((action) => (
          <Link
            key={action.id}
            href={action.href}
            className="flex items-center justify-between px-6 h-[46px] rounded-xl border border-slate-100 hover:bg-slate-50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-4">
                {iconMap[action.icon]}
              </div>
              <span className="text-[14px] font-bold text-slate-500 group-hover:text-slate-800 transition-colors">
                {action.label}
              </span>
            </div>
            {action.badge !== null && (
              <span className="h-5 w-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                {action.badge}
              </span>
            )}
          </Link>
        ))}
        {/* Manage Membership (Mock if not in data) */}
        {!quickActions.find(a => a.label === "Manage Membership") && (
            <Link
                href="/membership/plan"
                className="flex items-center gap-4 px-6 h-[46px] rounded-xl border border-slate-100 hover:bg-slate-50 transition-all group"
            >
                <div className="shrink-0 w-4">
                    <UserPen className="h-4 w-4 text-slate-500" />
                </div>
                <span className="text-[14px] font-bold text-slate-500 group-hover:text-slate-800 transition-colors">
                    Manage Membership
                </span>
            </Link>
        )}
      </div>
    </div>
  );
}
