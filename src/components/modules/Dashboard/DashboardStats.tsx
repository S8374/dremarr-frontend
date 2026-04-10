import { dashboardStats } from "./dashboard-data";
import { Eye, MessageCircle, ShoppingBag, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  eye: <Eye className="h-5 w-5 text-blue-500" />,
  message: <MessageCircle className="h-5 w-5 text-green-500" />,
  star: <Star className="h-5 w-5 text-amber-500" />,
  list: <ShoppingBag className="h-5 w-5 text-purple-500" />,
};

const bgMap: Record<string, string> = {
  eye: "bg-blue-50 dark:bg-blue-500/10",
  message: "bg-green-50 dark:bg-green-500/10",
  star: "bg-amber-50 dark:bg-amber-500/10",
  list: "bg-purple-50 dark:bg-purple-500/10",
};

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {dashboardStats.map((stat) => (
        <div
          key={stat.id}
          className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-6 py-6 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-bold text-slate-400 capitalize">
              {stat.label}
            </span>
            <span className="text-[28px] font-bold text-slate-800 tracking-tight heading">
              {stat.value}
            </span>
          </div>
          <div className={`h-11 w-11 flex items-center justify-center rounded-full shadow-sm ${bgMap[stat.icon]}`}>
            {iconMap[stat.icon]}
          </div>
        </div>
      ))}
    </div>
  );
}
