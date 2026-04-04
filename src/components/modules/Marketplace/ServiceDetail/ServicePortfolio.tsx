"use client";

import Image from "next/image";
import { useLanguage } from "@/components/shared/language-provider";

interface ServicePortfolioProps {
  images: string[];
}

export default function ServicePortfolio({ images }: ServicePortfolioProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-extrabold text-foreground mb-6">
        {isSpanish ? "Portafolio" : "Portfolio"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-border/40 group cursor-zoom-in">
            <Image 
              src={img} 
              alt={`Portfolio ${i + 1}`} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            {i === images.length - 1 && images.length > 3 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-bold">
                +03
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}
