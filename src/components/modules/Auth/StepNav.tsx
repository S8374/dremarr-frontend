"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StepNavProps {
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
  showBackNote?: boolean;
  disableNext?: boolean;
}

export function StepNav({
  onBack,
  onNext,
  nextLabel = "Continue",
  showBackNote = false,
  disableNext = false,
}: StepNavProps) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-end gap-3">
        <Button
          variant="outline"
          onClick={onBack}
          className="rounded-full px-5 gap-1 border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>

        <Button
          onClick={onNext}
          disabled={disableNext}
          className="rounded-full px-6 gap-1 bg-[#3d6b60] hover:bg-[#2f5549] text-white"
        >
          {nextLabel}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {showBackNote && (
        <p className="text-right text-xs text-gray-400 mt-2">
          You're just a few steps away from your first trade.
        </p>
      )}
    </div>
  );
}