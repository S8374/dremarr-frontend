import EditProfileForm from "@/components/modules/Profile/EditProfileForm";
import { profileData } from "@/components/modules/Profile/profile-data";

export default function EditProfilePage() {
  // Normally we would fetch the user profile dynamically
  // Here we use the mockup data to match the design
  const data = profileData;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#fcfdfe] dark:bg-background">
      <div className="mx-auto w-full max-w-full px-4 py-8 sm:px-6 md:py-16 lg:max-w-[1440px] lg:px-8 xl:px-12">
        <EditProfileForm data={data} />
      </div>
    </div>
  );
}
