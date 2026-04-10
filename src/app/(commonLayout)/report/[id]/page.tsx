import { profileData } from "@/components/modules/Profile/profile-data";
import ReportUserForm from "@/components/modules/Report/ReportUserForm";

export default function ReportPage({ params }: { params: { id: string } }) {
  // Normally we would fetch the user details using the ID from params
  // Here we use the existing mock profile data
  const data = profileData;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f8f9fb] dark:bg-background">
      <div className="container py-8 md:py-16">
        <ReportUserForm data={data} />
      </div>
    </div>
  );
}
