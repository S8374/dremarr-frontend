"use client";

import { useState, useMemo, useEffect } from "react";
import MarketplaceHeader from "./MarketplaceHeader";
import MarketplaceFilters from "./MarketplaceFilters";
import MarketplaceCard from "./MarketplaceCard";
import MarketplacePagination from "./MarketplacePagination";
import data from "./data.json";
import { useLanguage } from "@/components/shared/language-provider";

export default function Marketplace() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  // Hydration safety - Fixed 500 Internal Server Error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // State for filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [badge, setBadge] = useState("all");
  const [location, setLocation] = useState("all");

  // Filtering Logic
  const filteredServices = useMemo(() => {
    return data.services.filter((service) => {
      // Search matching (Title or User Name)
      const searchTerm = search.toLowerCase();
      const matchesSearch =
        service.title_en.toLowerCase().includes(searchTerm) ||
        service.title_es.toLowerCase().includes(searchTerm) ||
        service.user.name.toLowerCase().includes(searchTerm);

      // Category matching
      const matchesCategory = category === "all" || service.category === category;

      // Badge matching
      const matchesBadge = badge === "all" ||
        (badge === "verified" && service.user.isVerified) ||
        (badge === "pro" && service.user.isPro);

      // Location matching
      const matchesLocation = location === "all" || service.location === location;

      return matchesSearch && matchesCategory && matchesBadge && matchesLocation;
    });
  }, [search, category, badge, location]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-8 animate-pulse">
          <div className="h-48 bg-muted/10 rounded-3xl mb-10" />
          <div className="h-16 bg-muted/10 rounded-xl mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => <div key={i} className="h-80 bg-muted/10 rounded-2xl" />)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 mb-20 animate-in fade-in duration-700">
        <MarketplaceHeader />

        <MarketplaceFilters
          search={search}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onBadgeChange={setBadge}
          onLocationChange={setLocation}
        />

        {filteredServices.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service) => (
                <MarketplaceCard key={service.id} service={service} />
              ))}
            </div>
            <MarketplacePagination />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-bold mb-2 text-foreground">
              {isSpanish ? "No se encontraron resultados" : "No results found"}
            </h2>
            <p className="text-muted-foreground">
              {isSpanish
                ? "Prueba a ajustar tus filtros para encontrar lo que buscas."
                : "Try adjusting your filters to find what you are looking for."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}