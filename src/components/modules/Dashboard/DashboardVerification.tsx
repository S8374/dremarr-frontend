import { verifications } from "./dashboard-data";
import { CheckCircle2, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  check: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  star: <Star className="h-5 w-5 text-amber-400" />,
};

const bgMap: Record<string, string> = {
  check: "bg-green-50 dark:bg-green-500/10",
  star: "bg-amber-50 dark:bg-amber-500/10",
};

export default function DashboardVerification() {
  return (
    <div className="rounded-2xl border border-slate-100 dark:border-border/60 bg-white dark:bg-card p-6 shadow-sm">
      <h2 className="text-[16px] font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
        Verification
      </h2>
      <div className="flex flex-col gap-3">
        {verifications.map((v) => (
          <div
            key={v.id}
            className={`flex items-center gap-4 rounded-xl px-5 py-4 ${bgMap[v.icon]}`}
          >
            {iconMap[v.icon]}
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-slate-900 dark:text-white">
                {v.label}
              </span>
              <span className="text-[12px] font-semibold text-slate-400 dark:text-slate-500">
                {v.sublabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
