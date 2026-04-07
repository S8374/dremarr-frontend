"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { StepNav } from "./StepNav";
import { SignupFormData } from "./Signup";

interface Props {
  formData: SignupFormData;
  updateFormData: (fields: Partial<SignupFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function StepAccountSetup({ onNext, onBack, register, errors }: Props) {
  return (
    <div>
      {/* Heading */}
      <h1 className="text-[38px] leading-[1.04] md:text-2xl font-bold text-gray-900 mb-2 tracking-tight">Create Your Account</h1>
      <p className="text-[17px] md:text-sm text-gray-500 mb-4 md:mb-6 leading-snug max-w-md">
        Set up your account to start trading skills and connecting with others.
      </p>

      {/* Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-6 space-y-4">
        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email" className="text-[16px] font-medium text-gray-700">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
          />
          {errors.email?.message ? (
            <p className="text-xs text-red-500 pt-1">{String(errors.email.message)}</p>
          ) : null}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-[16px] font-medium text-gray-700">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register("phone")}
            className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
          />
          {errors.phone?.message ? (
            <p className="text-xs text-red-500 pt-1">{String(errors.phone.message)}</p>
          ) : null}
        </div>

        {/* Password */}
        <div className="space-y-1">
          <Label htmlFor="password" className="text-[16px] font-medium text-gray-700">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
          />
          {errors.password?.message ? (
            <p className="text-xs text-red-500 pt-1">{String(errors.password.message)}</p>
          ) : null}
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <Label htmlFor="confirmPassword" className="text-[16px] font-medium text-gray-700">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            {...register("confirmPassword")}
            className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
          />
          {errors.confirmPassword?.message ? (
            <p className="text-xs text-red-500 pt-1">{String(errors.confirmPassword.message)}</p>
          ) : null}
          <p className="text-xs text-gray-400 italic pt-1">
            Your information is secure and will never be shared.
          </p>
        </div>
      </div>

      <StepNav onBack={onBack} onNext={onNext} showBackNote hideBackButton />
    </div>
  );
}