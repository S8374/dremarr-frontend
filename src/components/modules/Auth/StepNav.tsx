"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StepNavProps {
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
  showBackNote?: boolean;
  disableNext?: boolean;
  hideBackButton?: boolean;
}

export function StepNav({
  onBack,
  onNext,
  nextLabel = "Continue",
  showBackNote = false,
  disableNext = false,
  hideBackButton = false,
}: StepNavProps) {
  return (
    <div className="mt-5 md:mt-8 px-1 md:px-0">
      <div className={`flex items-center ${hideBackButton ? "justify-end" : "justify-between md:justify-end"} gap-3`}>
        {!hideBackButton && (
          <Button
            variant="outline"
            onClick={onBack}
            className="h-11 min-w-[106px] rounded-full px-5 gap-1 border-[#87a09a] text-[#6e8f88] hover:bg-gray-50"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
        )}

        <Button
          onClick={onNext}
          disabled={disableNext}
          className="h-11 min-w-[126px] rounded-full px-6 gap-1 bg-[#6f8f89] hover:bg-[#5f7d76] text-white"
        >
          {nextLabel}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {showBackNote && (
        <p className="text-center md:text-right text-xs text-gray-500/80 mt-3 italic">
          You're just a few steps away from your first trade.
        </p>
      )}
    </div>
  );
}