import CreateListingForm from "@/components/modules/Profile/CreateListingForm";

export default function CreateListingPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#fcfdfe] dark:bg-background">
      <div className="mx-auto w-full max-w-full px-4 py-8 sm:px-6 md:py-16 lg:max-w-[1440px] lg:px-8 xl:px-12">
         <CreateListingForm />
      </div>
    </div>
  );
}
