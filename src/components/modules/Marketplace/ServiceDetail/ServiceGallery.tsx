"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceGalleryProps {
  images: string[];
  alt: string;
}

export default function ServiceGallery({ images, alt }: ServiceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full aspect-[16/10] mb-8 group overflow-hidden rounded-[20px] shadow-sm border border-slate-100">
      <Image
        src={images[activeIndex]}
        alt={alt}
        fill
        className="object-cover"
        priority
      />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white text-slate-800 shadow-lg transition-all active:scale-90"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white text-slate-800 shadow-lg transition-all active:scale-90"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === activeIndex 
                ? "w-8 bg-[#6f8f84]" 
                : "w-2 bg-white/50 backdrop-blur-sm"
            )}
          />
        ))}
      </div>
    </div>
  );
}
