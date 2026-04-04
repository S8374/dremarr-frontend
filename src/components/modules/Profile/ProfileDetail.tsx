"use client";

import ProfileHeader from "./ProfileHeader";
import ProfileServices from "./ProfileServices";
import ProfileSidebar from "./ProfileSidebar";
import ServicePortfolio from "@/components/modules/Marketplace/ServiceDetail/ServicePortfolio";
import ServiceReviews from "@/components/modules/Marketplace/ServiceDetail/ServiceReviews";
import ServiceReviewForm from "@/components/modules/Marketplace/ServiceDetail/ServiceReviewForm";

interface ProfileDetailProps {
  data: any;
}

export default function ProfileDetail({ data }: ProfileDetailProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-8 flex flex-col">
          <ProfileHeader data={data} />
          
          <ProfileServices data={data} />

          <div className="mt-14">
             <ServicePortfolio images={data.portfolio} />
          </div>

          <div className="mt-14">
            <ServiceReviews reviews={data.reviews} />
          </div>

          <div className="mt-8">
             <ServiceReviewForm />
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-4">
          <ProfileSidebar data={data} />
        </div>
      </div>
    </div>
  );
}
