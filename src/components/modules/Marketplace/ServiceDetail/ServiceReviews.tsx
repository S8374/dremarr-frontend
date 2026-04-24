'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useLanguage } from '@/components/shared/language-provider';
import { Button } from '@/components/ui/button';

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
  const isSpanish = language === 'es';

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-[20px] font-bold text-foreground mb-8">
        {isSpanish ? 'Reseñas' : 'Reviews'}
      </h2>

      <div className="flex flex-col gap-10">
        {reviews.map((review) => (
          <div key={review.id} className="transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col gap-3">
                <span className="text-[14px] font-bold text-muted-foreground">
                  {isSpanish ? review.date_es : review.date_en}
                </span>

                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border shadow-sm">
                    <Image
                      src={review.avatar}
                      alt={review.user}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold text-foreground">
                      {review.user}
                    </span>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < review.rating
                              ? 'h-3.5 w-3.5 fill-orange-400 text-orange-400'
                              : 'h-3.5 w-3.5 text-muted fill-muted/20'
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[15px] text-muted-foreground leading-relaxed ">
              {isSpanish ? review.comment_es : review.comment_en}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" className="btn-pill-outline h-12 px-10">
          {isSpanish ? 'Mostrar más reseñas' : 'Show more reviews'}
        </Button>
      </div>
    </div>
  );
}
