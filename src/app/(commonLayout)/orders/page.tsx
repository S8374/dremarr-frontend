import CurrentOrder from "@/components/modules/Orders/CurrentOrder";

export default function OrdersPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f8f9fb] dark:bg-background">
      <div className="mx-auto w-full max-w-full px-4 py-8 sm:px-6 md:py-12 lg:max-w-[1440px] lg:px-8 xl:px-12">
        <CurrentOrder />
      </div>
    </div>
  );
}
