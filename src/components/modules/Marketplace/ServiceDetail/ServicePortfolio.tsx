'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/shared/language-provider';

interface ServicePortfolioProps {
  images: string[];
}

export default function ServicePortfolio({ images }: ServicePortfolioProps) {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-foreground mb-6">
        {isSpanish ? 'Portafolio' : 'Portfolio'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left image */}
        <div className="relative aspect-3/2 rounded-[14px] overflow-hidden">
          <Image
            src={images[0]}
            alt="Portfolio 1"
            fill
            className="object-cover"
          />
        </div>

        {/* Right image with +X */}
        <div className="relative aspect-3/2 rounded-[14px] overflow-hidden group cursor-pointer">
          <Image
            src={images[1] || images[0]}
            alt="Portfolio 2"
            fill
            className="object-cover"
          />
          {images.length > 2 && (
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <span className="text-white text-[56px] font-bold tracking-tighter">
                +{images.length - 1 < 10 ? `0${images.length - 1}` : images.length - 1}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
