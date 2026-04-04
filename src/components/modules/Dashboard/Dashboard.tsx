import DashboardListings from "./DashboardListings";
import DashboardNotifications from "./DashboardNotifications";
import DashboardOrders from "./DashboardOrders";
import DashboardQuickActions from "./DashboardQuickActions";
import DashboardStats from "./DashboardStats";
import DashboardVerification from "./DashboardVerification";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[30px] font-bold text-slate-900 dark:text-white tracking-tight">
          Dashboard
        </h1>
        <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400">
          Here&apos;s what&apos;s happening with your listings today...
        </p>
      </div>

      {/* Stats Row */}
      <DashboardStats />

      {/* Main Grid: Left (7/12) + Right (5/12) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <DashboardListings />
          <DashboardOrders />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <DashboardQuickActions />
          <DashboardNotifications />
          <DashboardVerification />
        </div>
      </div>
    </div>
  );
}
