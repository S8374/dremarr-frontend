"use client";

import { cn } from "@/lib/utils";

const STEPS = [
  { id: 1, label: "Account setup" },
  { id: 2, label: "Personal info" },
  { id: 3, label: "Professional info" },
  { id: 4, label: "Account Security" },
  { id: 5, label: "Create your first trade" },
];

interface OnboardingSidebarProps {
  currentStep: number;
}

export function OnboardingSidebar({ currentStep }: OnboardingSidebarProps) {
  return (
    <aside className="w-80 shrink-0 px-6 py-8">
      <p className="text-sm font-semibold text-gray-700 mb-6">Onboarding Flow</p>

      <ul className="space-y-6">
        {STEPS.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <li key={step.id} className="relative">
              <div
                className={cn(
                  "flex items-center gap-4 pl-3 pr-4 py-2 rounded-lg transition-all",
                  isActive && "bg-gray-100 border-r-4 border-r-[#3d6b60]"
                )}
              >
                {/* Circle */}
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 shrink-0 transition-all",
                    isActive
                      ? "bg-[#3d6b60] text-white border-[#3d6b60] shadow-sm"
                      : isCompleted
                        ? "bg-white border-[#3d6b60] text-[#3d6b60]"
                        : "bg-white border-gray-300 text-gray-400"
                  )}
                >
                  {isCompleted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>

                {/* Label */}
                <span
                  className={cn(
                    "text-[15px] leading-tight transition-colors",
                    isActive
                      ? "font-semibold text-gray-900"
                      : isCompleted
                        ? "font-medium text-[#3d6b60]"
                        : "text-gray-500"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Vertical connector line */}
              {index < STEPS.length - 1 && (
                <div
                  className={cn(
                    "absolute left-[15px] top-10 w-px h-6 -translate-x-1/2 z-[-1]",
                    isCompleted ? "bg-[#3d6b60]" : "bg-gray-200"
                  )}
                />
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}