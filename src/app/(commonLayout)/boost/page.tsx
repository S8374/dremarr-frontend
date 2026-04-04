import BoostPaymentForm from "@/components/modules/Profile/BoostPaymentForm";

export default function BoostPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#fcfdfe] dark:bg-background">
      <div className="mx-auto w-full max-w-full px-4 py-10 sm:px-6 md:py-16 lg:max-w-[1440px] lg:px-8 xl:px-12">
        <BoostPaymentForm />
      </div>
    </div>
  );
}
