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
    <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-[18px] font-bold text-slate-800 mb-6 heading">
        Verification
      </h2>
      <div className="flex flex-col gap-3">
        {verifications.map((v) => (
          <div
            key={v.id}
            className={`flex items-center gap-4 rounded-xl px-5 py-3 ${bgMap[v.icon]}`}
          >
            <div className="shrink-0">
               {iconMap[v.icon]}
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-slate-700">
                {v.label}
              </span>
              <span className="text-[11px] font-bold text-slate-300">
                {v.sublabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
