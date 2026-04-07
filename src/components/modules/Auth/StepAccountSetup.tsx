"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepNav } from "./StepNav";import { SignupFormData } from "./Signup";

interface Props {
  formData: SignupFormData;
  updateFormData: (fields: Partial<SignupFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepAccountSetup({ formData, updateFormData, onNext, onBack }: Props) {
  return (
    <div>
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Create Your Account</h1>
      <p className="text-sm text-gray-500 mb-6">
        Set up your account to start trading skills and connecting with others.
      </p>

      {/* Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4">
        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => updateFormData({ password: e.target.value })}
            className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
            className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
          />
          <p className="text-xs text-gray-400 italic pt-1">
            Your information is secure and will never be shared.
          </p>
        </div>
      </div>

      <StepNav onBack={onBack} onNext={onNext} showBackNote />
    </div>
  );
}