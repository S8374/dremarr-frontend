"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log("Forgot Password submitted:", data);
    // Simulate API call and push to OTP page
    setTimeout(() => {
      router.push("/verify-otp");
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
            Forgot Password
          </h1>
          <p className="text-[#6b7280] text-center mb-10 text-[15px] leading-relaxed max-w-[340px]">
            Enter your email address and we&apos;ll send you an OTP to reset your password.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col space-y-4">
            {/* Email Field */}
            <div className="w-full relative mb-4">
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={`w-full h-[54px] bg-[#e6e8eb] rounded-full px-6 text-[15px] font-medium text-gray-800 placeholder:text-[#8f96a3] outline-none focus:ring-2 focus:ring-[#768e86] focus:bg-white transition-all border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#768e86]'}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-6 absolute -bottom-5">{errors.email.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[54px] flex items-center justify-center bg-[#768e86] hover:bg-[#667d76] active:bg-[#596e67] text-white rounded-full font-bold text-[16px] transition-colors duration-200 mt-4"
            >
              Send OTP
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
