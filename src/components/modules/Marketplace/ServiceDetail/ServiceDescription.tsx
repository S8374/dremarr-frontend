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
      <h2 className="text-[20px] font-bold text-slate-900 mb-6 heading">
        {isSpanish ? 'Descripción' : 'Description'}
      </h2>
      <div className="bg-[#f8f9fa] border border-slate-100 rounded-[20px] p-8">
        <div className="prose prose-sm dark:prose-invert max-w-none text-slate-600 leading-relaxed font-semibold">
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
