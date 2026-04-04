"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/components/shared/language-provider";
import data from "./data.json";

interface MarketplaceFiltersProps {
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onBadgeChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  search: string;
}

export default function MarketplaceFilters({
  onSearchChange,
  onCategoryChange,
  onBadgeChange,
  onLocationChange,
  search,
}: MarketplaceFiltersProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  // Hydration safety - Fixed 500 Internal Server Error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-20 mb-10 w-full bg-muted/10 animate-pulse rounded-xl" />;

  return (
    <div className="flex flex-col gap-4 mb-10 lg:flex-row lg:items-center lg:justify-between sm:flex-wrap animate-in fade-in duration-500">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[320px]">
        <Input
          placeholder={isSpanish ? "Busca cualquier servicio" : "Search for any service"}
          className="h-14 py-8 pr-16 rounded-xl border-border bg-background focus-visible:ring-[#6f8f84] focus-visible:border-[#6f8f84] text-base placeholder:text-muted-foreground/50 transition-all font-medium"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Button size="icon" className="h-10 w-10 min-w-10 rounded-lg bg-[#6f8f84] hover:bg-[#5f7e75] text-white shadow-none transition-all active:scale-95">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Select Filters */}
      <div className="flex gap-3 w-full lg:w-auto overflow-x-auto pb-1 no-scrollbar sm:overflow-visible sm:pb-0">
        <Select onValueChange={onCategoryChange} defaultValue="all">
          <SelectTrigger className="h-14 w-full lg:w-[180px] py-8 rounded-xl border-border bg-background focus:ring-[#6f8f84] text-sm font-medium transition-all hover:bg-muted/30">
            <SelectValue placeholder={isSpanish ? "Categoría" : "Category"} />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-border animate-in fade-in zoom-in-95">
            {data.categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {isSpanish ? cat.label_es : cat.label_en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={onBadgeChange}  defaultValue="all">
          <SelectTrigger className="h-14 w-full lg:w-[180px] py-8   rounded-xl border-border bg-background focus:ring-[#6f8f84] text-sm font-medium transition-all hover:bg-muted/30">
            <SelectValue placeholder={isSpanish ? "Insignias" : "Badges"} />
          </SelectTrigger>
          <SelectContent className="rounded-xl  border-border animate-in fade-in zoom-in-95">
            {data.badges.map((badge) => (
              <SelectItem key={badge.id} value={badge.id}>
                {isSpanish ? badge.label_es : badge.label_en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={onLocationChange} defaultValue="all">
          <SelectTrigger className="h-14 w-full py-8 lg:w-[160px] rounded-xl border-border bg-background focus:ring-[#6f8f84] text-sm font-medium transition-all hover:bg-muted/30">
            <SelectValue placeholder={isSpanish ? "Ubicación" : "Location"} />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-border animate-in fade-in zoom-in-95">
            {data.locations.map((loc) => (
              <SelectItem key={loc.id} value={loc.id}>
                {isSpanish ? loc.label_es : loc.label_en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
