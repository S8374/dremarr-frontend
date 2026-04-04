"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/components/shared/language-provider";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ServiceReviewForm() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="p-8 rounded-3xl bg-background border border-border/50 shadow-sm mb-20 animate-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-extrabold text-foreground mb-8">
        {isSpanish ? "Dar una reseña" : "Give a review"}
      </h2>

      <div className="space-y-8">
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-[#f0502e] mb-4 block">
            {isSpanish ? "Tu calificación *" : "Your Rating *"}
          </label>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => {
              const index = i + 1;
              return (
                <button
                  key={index}
                  type="button"
                  className="transition-all transform hover:scale-125 focus:scale-110 active:scale-95"
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(0)}
                >
                  <Star
                    className={`h-8 w-8 transition-colors ${
                      index <= (hover || rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground/30 fill-muted-foreground/10"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div>
           <label className="text-xs font-bold uppercase tracking-widest text-[#f0502e] mb-4 block">
            {isSpanish ? "¿Cuál es tu reseña? *" : "What is Your Review? *"}
          </label>
          <Textarea 
            placeholder={isSpanish ? "Escribe tus comentarios aquí..." : "Write your comments here..."}
            className="min-h-[160px] rounded-2xl border-border bg-muted/20 focus-visible:ring-[#6f8f84] text-base p-6 font-medium placeholder:text-muted-foreground/40 transition-all focus:bg-background"
          />
        </div>

        <Button className="h-14 px-12 rounded-full bg-[#6f8f84] hover:bg-[#5f7e75] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 duration-300">
          {isSpanish ? "Enviar" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
