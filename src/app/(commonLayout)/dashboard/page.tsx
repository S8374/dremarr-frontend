import Dashboard from "@/components/modules/Dashboard/Dashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f8f9fb] dark:bg-background">
      <div className="container py-8 md:py-12">
        <Dashboard />
      </div>
    </div>
  );
}
