"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors } from "react-hook-form";
import { StepNav } from "./StepNav";
import { SignupFormData } from "./Signup";

interface Props {
  formData: SignupFormData;
  updateFormData: (fields: Partial<SignupFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  errors: FieldErrors<any>;
}

export function StepEmailVerification({
  formData,
  updateFormData,
  onNext,
  onBack,
  errors,
}: Props) {
  const otpLength = 6;
  const otpArray = formData.emailOtp?.split("").slice(0, otpLength) || [];

  const handleOtpChange = (value: string, index: number) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;
    
    const newOtp = formData.emailOtp?.split("") || Array(otpLength).fill("");
    newOtp[index] = value.slice(-1); // Only take the last character
    const finalOtp = newOtp.join("");
    updateFormData({ emailOtp: finalOtp });

    // Auto-focus next input
    if (value && index < otpLength - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div>
      <h1 className="text-[38px] leading-[1.04] md:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
        Verify Your Email
      </h1>
      <p className="text-[17px] md:text-sm text-gray-500 mb-6 leading-snug max-w-md">
        Enter the 6-digit code sent to your email to verify your account.
      </p>

      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
        <div className="space-y-4">
          <Label className="text-[15px] font-bold text-gray-800 block text-center">
            Enter 6-digit OTP
          </Label>
          
          <div className="flex justify-between gap-2 sm:gap-4 max-w-sm mx-auto">
            {Array.from({ length: otpLength }).map((_, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={otpArray[i] || ""}
                onChange={(e) => handleOtpChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                autoFocus={i === 0 && !formData.emailOtp}
                className={`w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-xl border-2 transition-all outline-hidden
                  ${errors.emailOtp ? "border-red-200 bg-red-50" : "border-gray-100 bg-gray-50/50"}
                  focus:border-[#3d6b60] focus:bg-white focus:ring-4 focus:ring-[#3d6b60]/5
                `}
              />
            ))}
          </div>

          {errors.emailOtp?.message ? (
            <p className="text-sm text-red-500 font-medium text-center pt-2">
              {String(errors.emailOtp.message)}
            </p>
          ) : null}
        </div>

        <div className="pt-4 border-t border-gray-100 text-center">
          <button 
            type="button"
            className="text-[13px] font-bold text-[#3d6b60] hover:underline"
          >
            Didn&apos;t get the code? Resend OTP
          </button>
        </div>
      </div>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}