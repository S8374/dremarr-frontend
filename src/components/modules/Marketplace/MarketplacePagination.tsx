"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/shared/language-provider";
import { cn } from "@/lib/utils";

export default function MarketplacePagination() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  // Mock state for demonstration
  const totalPages = 5;
  const currentPage = 2; // 0-indexed for the indicator dots

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-6 pb-10">

          {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
   
      </div>

      {/* Pagination Dots/Indicators */}
      <div className="flex items-center gap-2.5">
        {[...Array(totalPages)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-2.5 transition-all duration-300 rounded-full",
              i === currentPage 
                ? "w-10 bg-[#6f8f84] shadow-sm shadow-[#6f8f84/20]" 
                : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50 cursor-pointer"
            )}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="h-12 px-8 rounded-full border-muted-foreground/30 text-foreground font-bold hover:bg-muted transition-all active:scale-95 flex items-center gap-2 group"
        >
          <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
          {isSpanish ? "Anterior" : "Previous"}
        </Button>
        <Button
          className="h-12 px-10 rounded-full bg-[#6f8f84] hover:bg-[#5f7e75] text-white font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 group"
        >
          {isSpanish ? "Siguiente" : "Next"}
          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </div>
  );
}
