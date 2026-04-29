import CurrentOrder from "@/components/modules/Orders/CurrentOrder";

export default function OrdersPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-background">
      <div className="container py-8 md:py-12">
        <CurrentOrder />
      </div>
    </div>
  );
}
