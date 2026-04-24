'use client';

import { useLanguage } from '@/components/shared/language-provider';

interface ServiceDescriptionProps {
  description: string;
}

export default function ServiceDescription({
  description,
}: ServiceDescriptionProps) {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-foreground mb-6">
        {isSpanish ? 'Descripción' : 'Description'}
      </h2>
      <div className="bg-muted/30 border border-border rounded-[20px] p-8">
        <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
          {description.split('\n').map((para, i) => (
            <p key={i} className="mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
