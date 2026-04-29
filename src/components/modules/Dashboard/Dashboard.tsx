"use client";

import { useLanguage } from "@/components/shared/language-provider";
import DashboardListings from "./DashboardListings";
import DashboardNotifications from "./DashboardNotifications";
import DashboardOrders from "./DashboardOrders";
import DashboardQuickActions from "./DashboardQuickActions";
import DashboardStats from "./DashboardStats";
import DashboardVerification from "./DashboardVerification";

export default function Dashboard() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[30px] font-bold text-foreground tracking-tight">
          {isSpanish ? "Panel de Control" : "Dashboard"}
        </h1>
        <p className="text-[15px] font-medium text-muted-foreground">
          {isSpanish 
            ? "Esto es lo que está pasando con tus anuncios hoy" 
            : "Here's what's happening with your listings today"}
        </p>
      </div>

      {/* Stats Row */}
      <DashboardStats />

      {/* Main Grid: Left (7/12) + Right (5/12) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <DashboardListings />
          <DashboardOrders />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <DashboardQuickActions />
          <DashboardNotifications />
          <DashboardVerification />
        </div>
      </div>
    </div>
  );
}
