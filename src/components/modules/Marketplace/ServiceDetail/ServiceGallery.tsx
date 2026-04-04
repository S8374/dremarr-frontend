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
    <div className="relative w-full aspect-[16/9] mb-8 group overflow-hidden rounded-3xl shadow-lg border border-border/50">
      <Image
        src={images[activeIndex]}
        alt={alt}
        fill
        className="object-cover transition-all duration-500 hover:scale-105"
        priority
      />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md text-foreground opacity-0 group-hover:opacity-100 transition-all hover:bg-background shadow-xl"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md text-foreground opacity-0 group-hover:opacity-100 transition-all hover:bg-background shadow-xl"
          >
            <ChevronRight className="h-6 w-6" />
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
