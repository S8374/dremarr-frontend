"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { StepNav } from "./StepNav";
import { SignupFormData } from "./Signup";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

interface Props {
  formData: SignupFormData;
  updateFormData: (fields: Partial<SignupFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function StepAccountSetup({ formData, updateFormData, onNext, onBack, register, errors }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showOther, setShowOther] = useState(false);

  // No longer using triggerWidth as we switch from DropdownMenu to Select/Input morphing

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
        </div>

        {/* How Did You Hear About Us */}
        <div className="space-y-1">
          <Label htmlFor="heardAboutUs" className="text-[16px] font-medium text-gray-700">
            How Did You Hear About Us
          </Label>
          
          {!showOther ? (
            <Select
              onValueChange={(value) => {
                if (value === "Other") {
                  setShowOther(true);
                  updateFormData({ heardAboutUs: "" });
                } else {
                  updateFormData({ heardAboutUs: value });
                }
              }}
              value={formData.heardAboutUs || ""}
            >
              <SelectTrigger className="bg-white border-gray-200 rounded-lg h-11 text-sm focus:ring-[#3d6b60] w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Google">Google</SelectItem>
                <SelectItem value="Facebook">Facebook</SelectItem>
                <SelectItem value="Instagram">Instagram</SelectItem>
                <SelectItem value="Linkedin">Linkedin</SelectItem>
                <SelectItem value="Tiktok">Tiktok</SelectItem>
                <SelectItem value="Friend">Friend</SelectItem>
                <SelectItem value="X">X</SelectItem>
                <SelectItem value="Threads">Threads</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <div className="relative group">
              <Input
                id="heardAboutUs"
                placeholder="Please specify"
                {...register("heardAboutUs")}
                autoFocus
                className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60] pr-10 w-full"
              />
              <button
                type="button"
                onClick={() => {
                  setShowOther(false);
                  updateFormData({ heardAboutUs: "" });
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                title="Go back to selection"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {errors.heardAboutUs?.message ? (
            <p className="text-xs text-red-500 pt-1">{String(errors.heardAboutUs.message)}</p>
          ) : null}
        </div>

        <div className="pt-2">
          <p className="text-xs text-gray-400 italic">
            Your information is secure and will never be shared.
          </p>
        </div>
      </div>

      <StepNav onBack={onBack} onNext={onNext} showBackNote hideBackButton />
    </div>
  );
}