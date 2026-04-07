"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

export function StepFirstTrade({ onBack, onNext }: Props) {
  return (
    <div className="flex-1 flex items-start">
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center text-center w-full">
        {/* Green check */}
        <CheckCircle2 className="w-16 h-16 md:w-20 md:h-20 text-green-500 mb-5 md:mb-6" strokeWidth={1.5} />

        <h2 className="text-[34px] leading-[1.08] md:text-2xl font-bold text-gray-900 mb-3 tracking-tight max-w-[320px]">
          You're Ready for Your First Trade
        </h2>

        <p className="text-[17px] md:text-sm text-gray-500 mb-1 max-w-xs leading-snug">
          Your profile is ready. Let's put your skills to work and create your first trade.
        </p>
        <p className="text-[14px] md:text-xs text-gray-400 mb-8">
          You're just a few steps away from your first trade.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            onClick={onBack}
            className="rounded-full px-5 gap-1 border-gray-300 text-gray-700 hover:bg-gray-50 text-[15px]"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>

          <Button
            onClick={onNext}
            className="rounded-full px-6 gap-1 bg-[#3d6b60] hover:bg-[#2f5549] text-white text-[15px]"
          >
            Create Your First Trade
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}