"use client";

import { useLanguage } from "@/components/shared/language-provider";

interface ServiceDescriptionProps {
  description: string;
}

export default function ServiceDescription({ description }: ServiceDescriptionProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-extrabold text-foreground mb-6">
        {isSpanish ? "Descripción" : "Description"}
      </h2>
      <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed font-medium">
        {description.split('\n').map((para, i) => (
          <p key={i} className="mb-4">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
