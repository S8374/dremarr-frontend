"use client";

import { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const resetPasswordSchema = z.object({
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Please confirm your password" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPassword() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log("Reset Password submitted:", data);
    // Simulate API call and redirect to login
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col relative w-full">
      {/* Top back arrow */}
      <div className="absolute top-8 left-8">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#f1f3f4] hover:bg-[#e4e6e7] text-gray-700 w-11 h-11 border border-transparent shadow-sm"
          onClick={() => router.back()}
          type="button"
        >
          <ChevronLeft className="w-[18px] h-[18px]" strokeWidth={2.5} />
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 w-full">
        <div className="w-full max-w-[440px] mx-auto flex flex-col items-center mt-[-60px]">
          {/* Header */}
          <h1 className="text-[34px] font-extrabold text-[#1a1c21] mb-2 heading text-center tracking-tight">
            Reset Password
          </h1>
          <p className="text-[#6b7280] text-center mb-10 text-[15px] leading-relaxed max-w-[340px]">
            Please enter your new password to complete the reset process.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col space-y-4">
            
            {/* New Password Field */}
            <div className="w-full relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                {...register("password")}
                className={`w-full h-[54px] bg-[#e6e8eb] rounded-full pl-6 pr-14 text-[15px] font-medium text-gray-800 placeholder:text-[#8f96a3] outline-none focus:ring-2 focus:ring-[#768e86] focus:bg-white transition-all border ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#768e86]'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8f96a3] hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <Eye className="w-[18px] h-[18px]" strokeWidth={2.5} />
                ) : (
                  <EyeOff className="w-[18px] h-[18px]" strokeWidth={2.5} />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-6 absolute -bottom-5">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="w-full relative mt-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className={`w-full h-[54px] bg-[#e6e8eb] rounded-full pl-6 pr-14 text-[15px] font-medium text-gray-800 placeholder:text-[#8f96a3] outline-none focus:ring-2 focus:ring-[#768e86] focus:bg-white transition-all border ${errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#768e86]'}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8f96a3] hover:text-gray-700 focus:outline-none"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <Eye className="w-[18px] h-[18px]" strokeWidth={2.5} />
                ) : (
                  <EyeOff className="w-[18px] h-[18px]" strokeWidth={2.5} />
                )}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1 ml-6 absolute -bottom-5">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[54px] flex items-center justify-center bg-[#768e86] hover:bg-[#667d76] active:bg-[#596e67] text-white rounded-full font-bold text-[16px] transition-colors duration-200 mt-6"
            >
              Reset Password
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
