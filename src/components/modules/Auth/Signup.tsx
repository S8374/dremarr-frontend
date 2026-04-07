"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OnboardingSidebar } from "./OnboardingSidebar";
import { StepAccountSetup } from "./StepAccountSetup";
import { StepPersonalInfo } from "./StepPersonalInfo";
import { StepProfessionalInfo } from "./StepProfessionalInfo";
import { StepAccountSecurity } from "./StepAccountSecurity";
import { StepFirstTrade } from "./StepFirstTrade";
import { useRouter } from "next/navigation";

export type SignupFormData = {
  // Step 1
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  // Step 2
  displayName: string;
  language: string;
  bio: string;
  profilePhoto: File | null;
  // Step 3
  occupation: string;
  skills: string[];
  workFiles: File[];
  // Step 4
  idType: string;
  idFile: File | null;
  certFile: File | null;
};

const TOTAL_STEPS = 5;

const initialFormData: SignupFormData = {
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  displayName: "",
  language: "English",
  bio: "",
  profilePhoto: null,
  occupation: "",
  skills: [],
  workFiles: [],
  idType: "Government Issued ID",
  idFile: null,
  certFile: null,
};

export default function Signup() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<SignupFormData>(initialFormData);

  const updateFormData = (fields: Partial<SignupFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    } else {
      router.push("/");
    }
  };

  const stepProps = { formData, updateFormData, onNext: handleNext, onBack: handleBack };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top back arrow */}
      <div className="px-6 pt-6">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-gray-200 w-9 h-9 hover:bg-gray-100"
          onClick={handleBack}
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </Button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <OnboardingSidebar currentStep={currentStep} />

        {/* Main content */}
        <main className="flex-1 px-10 py-8">
          {currentStep === 1 && <StepAccountSetup {...stepProps} />}
          {currentStep === 2 && <StepPersonalInfo {...stepProps} />}
          {currentStep === 3 && <StepProfessionalInfo {...stepProps} />}
          {currentStep === 4 && <StepAccountSecurity {...stepProps} />}
          {currentStep === 5 && <StepFirstTrade {...stepProps} />}
        </main>
      </div>
    </div>
  );
}