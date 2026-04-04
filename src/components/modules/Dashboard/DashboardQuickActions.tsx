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
    <div className="rounded-2xl border border-slate-100 dark:border-border/60 bg-white dark:bg-card p-6 shadow-sm">
      <h2 className="text-[16px] font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
        Quick Actions
      </h2>
      <div className="flex flex-col divide-y divide-slate-100 dark:divide-border/60">
        {quickActions.map((action) => (
          <Link
            key={action.id}
            href={action.href}
            className="flex items-center justify-between py-3.5 hover:pl-2 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              {iconMap[action.icon]}
              <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-200 group-hover:text-[#728e85] transition-colors">
                {action.label}
              </span>
            </div>
            {action.badge !== null && (
              <span className="h-5 w-5 rounded-full bg-red-500 text-white text-[10px] font-extrabold flex items-center justify-center">
                {action.badge}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
