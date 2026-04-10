import CreateListingForm from "@/components/modules/Profile/CreateListingForm";

export default function CreateListingPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#fcfdfe] dark:bg-background">
      <div className="container py-8 md:py-16">
         <CreateListingForm />
      </div>
    </div>
  );
}
