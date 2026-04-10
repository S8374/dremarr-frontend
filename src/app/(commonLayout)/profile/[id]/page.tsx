import { profileData } from "@/components/modules/Profile/profile-data";
import ProfileDetail from "@/components/modules/Profile/ProfileDetail";

export default function ProfilePage({ params }: { params: { id: string } }) {
  // Normally we would fetch the profile using the ID from params
  // Here we use the mock data
  const data = profileData;

  return (
    <div className="min-h-screen bg-[#f8f9fb] dark:bg-background">
      <div className="container py-8 md:py-12">
        <ProfileDetail data={data} />
      </div>
    </div>
  );
}
