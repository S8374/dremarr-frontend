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
    <div className="p-8 rounded-[20px] bg-muted/30 border border-border shadow-sm mb-20">
      <h2 className="text-xl font-bold text-foreground mb-8">
        {isSpanish ? "Dar una reseña" : "Give a review"}
      </h2>

      <div className="space-y-8">
        <div>
          <label className="text-lg  text-muted-foreground mb-4 block">
            {isSpanish ? "Tu calificación *" : "Add Your Rating *"}
          </label>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => {
              const index = i + 1;
              return (
                <button
                  key={index}
                  type="button"
                  className="transition-all transform active:scale-95 "
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(0)}
                >
                  <Star
                    className={`h-8 w-8 transition-all ${
                      index <= (hover || rating)
                        ? "fill-amber-400 text-amber-400 scale-110"
                        : "text-slate-200 fill-slate-100/50"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div>
           <label className="text-[13px] font-bold text-muted-foreground mb-4 block">
            {isSpanish ? "¿Cuál es tu reseña? *" : "What is Your Review? *"}
          </label>
          <Textarea 
            placeholder={isSpanish ? "Escribe tus comentarios aquí..." : "Write your comments here..."}
            className="min-h-[140px] rounded-xl border-border bg-card focus-visible:ring-primary/20 focus-visible:border-primary text-[15px] p-5 placeholder:text-muted-foreground transition-all resize-none shadow-sm"
          />
        </div>

        <Button className="h-[52px] px-14 rounded-xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[15px] shadow-md transition-all border-0">
          {isSpanish ? "Enviar" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
