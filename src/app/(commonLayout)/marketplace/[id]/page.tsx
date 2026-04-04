"use client";

import { use } from "react";
import { useLanguage } from "@/components/shared/language-provider";
import { serviceDetails } from "@/components/modules/Marketplace/ServiceDetail/service-detail-data";
import ServiceHeader from "@/components/modules/Marketplace/ServiceDetail/ServiceHeader";
import ServiceGallery from "@/components/modules/Marketplace/ServiceDetail/ServiceGallery";
import ServiceInfoCards from "@/components/modules/Marketplace/ServiceDetail/ServiceInfoCards";
import ServiceDescription from "@/components/modules/Marketplace/ServiceDetail/ServiceDescription";
import ServiceSidebar from "@/components/modules/Marketplace/ServiceDetail/ServiceSidebar";
import ServicePortfolio from "@/components/modules/Marketplace/ServiceDetail/ServicePortfolio";
import ServiceReviews from "@/components/modules/Marketplace/ServiceDetail/ServiceReviews";
import ServiceReviewForm from "@/components/modules/Marketplace/ServiceDetail/ServiceReviewForm";
import MarketplaceCard from "@/components/modules/Marketplace/MarketplaceCard";
import data from "@/components/modules/Marketplace/data.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const { language } = useLanguage();
  const isSpanish = language === "es";

  // Find the service detail (mock)
  const serviceDetail = serviceDetails.find((s) => s.id === parseInt(id)) || serviceDetails[0];

  // Logic for recommended services (same category, different id)
  const recommendedServices = data.services
    .filter((s) => s.category === serviceDetail.category && s.id !== serviceDetail.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 max-w-[1380px]">
        <ServiceHeader title={isSpanish ? serviceDetail.title_es : serviceDetail.title_en} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <ServiceGallery 
              images={serviceDetail.images} 
              alt={isSpanish ? serviceDetail.title_es : serviceDetail.title_en} 
            />
            
            <ServiceInfoCards 
              need={isSpanish ? serviceDetail.need_es : serviceDetail.need_en}
              duration={isSpanish ? serviceDetail.duration_es : serviceDetail.duration_en}
              location={serviceDetail.location}
            />

            <ServiceDescription 
              description={isSpanish ? serviceDetail.fullDescription_es : serviceDetail.fullDescription_en} 
            />

            {/* Recommended for you */}
            <div className="mb-12">
               <h2 className="text-2xl font-extrabold text-foreground mb-8">
                {isSpanish ? "Recomendado para ti" : "Recommended for you"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {recommendedServices.map((service) => (
                  <MarketplaceCard key={service.id} service={service} />
                ))}
              </div>
            </div>

            <ServicePortfolio images={serviceDetail.portfolio} />
            <ServiceReviews reviews={serviceDetail.reviews} />
            <ServiceReviewForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 animate-in fade-in slide-in-from-right-4 duration-700">
            <ServiceSidebar 
              user={{
                ...serviceDetail.user,
                bio: isSpanish ? serviceDetail.user.bio_es : serviceDetail.user.bio_en,
                memberSince: isSpanish ? serviceDetail.user.memberSince_es : serviceDetail.user.memberSince_en,
                location: serviceDetail.location
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
