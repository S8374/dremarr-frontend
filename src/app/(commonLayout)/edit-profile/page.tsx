import EditProfileForm from "@/components/modules/Profile/EditProfileForm";
import { profileData } from "@/components/modules/Profile/profile-data";

export default function EditProfilePage() {
  // Normally we would fetch the user profile dynamically
  // Here we use the mockup data to match the design
  const data = profileData;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#fcfdfe] dark:bg-background">
      <div className="container py-8 md:py-16">
        <EditProfileForm data={data} />
      </div>
    </div>
  );
}
