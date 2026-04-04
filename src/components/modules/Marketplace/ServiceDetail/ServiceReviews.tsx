"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useLanguage } from "@/components/shared/language-provider";
import { Button } from "@/components/ui/button";

interface Review {
  id: number;
  user: string;
  avatar: string;
  rating: number;
  date_en: string;
  date_es: string;
  comment_en: string;
  comment_es: string;
}

interface ServiceReviewsProps {
  reviews: Review[];
}

export default function ServiceReviews({ reviews }: ServiceReviewsProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-extrabold text-foreground mb-8">
        {isSpanish ? "Reseñas" : "Reviews"}
      </h2>

      <div className="flex flex-col gap-6">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="p-6 rounded-3xl bg-muted/30 border border-border/40 hover:bg-muted/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-background shadow-sm">
                  <Image src={review.avatar} alt={review.user} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">{review.user}</span>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/60">
                    {isSpanish ? review.date_es : review.date_en}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={i < review.rating ? "h-3.5 w-3.5 fill-amber-400 text-amber-400" : "h-3.5 w-3.5 text-muted-foreground/30 fill-muted-foreground/30"} 
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              {isSpanish ? review.comment_es : review.comment_en}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button variant="outline" className="h-12 px-12 rounded-full border-[#6f8f84] text-[#6f8f84] font-bold text-sm bg-transparent hover:bg-[#6f8f84] hover:text-white transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 duration-300">
           {isSpanish ? "Mostrar más reseñas" : "Show more reviews"}
        </Button>
      </div>
    </div>
  );
}
