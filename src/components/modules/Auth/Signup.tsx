"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { OnboardingSidebar } from "./OnboardingSidebar";
import { StepAccountSetup } from "./StepAccountSetup";
import { StepPersonalInfo } from "./StepPersonalInfo";
import { StepProfessionalInfo } from "./StepProfessionalInfo";
import { StepAccountSecurity } from "./StepAccountSecurity";
import { StepFirstTrade } from "./StepFirstTrade";
import { useRouter } from "next/navigation";

const MOBILE_STEP_LABELS = ["Ac. setup", "Personal info", "Prof. info", "Ac. Security", "Create trade"];

const signupSchema = z
  .object({
    email: z.string().trim().email("Please enter a valid email address."),
    phone: z
      .string()
      .trim()
      .min(10, "Phone number must be at least 10 digits."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters."),
    displayName: z.string().trim().min(2, "Display name is required."),
    language: z.string().trim().min(1, "Language is required."),
    bio: z.string().trim().min(30, "Bio must be at least 30 characters."),
    profilePhoto: z.any().nullable(),
    occupation: z.string().trim().min(1, "Primary occupation is required."),
    skills: z.array(z.string()).min(2, "Select at least 2 skills.").max(5, "You can select up to 5 skills."),
    workFiles: z.array(z.any()),
    idType: z.string().trim().min(1, "ID type is required."),
    idFile: z.any().nullable(),
    certFile: z.any().nullable(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

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

type SignupSchemaData = z.infer<typeof signupSchema>;

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
  const router = useRouter();
  const {
    register,
    watch,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaData>({
    resolver: zodResolver(signupSchema),
    defaultValues: initialFormData,
    mode: "onChange",
  });

  const formData = watch() as SignupFormData;

  const updateFormData = (fields: Partial<SignupFormData>) => {
    (Object.entries(fields) as Array<[keyof SignupFormData, SignupFormData[keyof SignupFormData]]>).forEach(
      ([key, value]) => {
        setValue(key as keyof SignupSchemaData, value as never, {
          shouldDirty: true,
          shouldValidate: key === "password" || key === "confirmPassword",
        });
      }
    );
  };

  const handleNext = async () => {
    let isValid = true;

    if (currentStep === 1) {
      isValid = await trigger(["email", "phone", "password", "confirmPassword"]);
    }

    if (currentStep === 2) {
      isValid = await trigger(["displayName", "language", "bio"]);
    }

    if (currentStep === 3) {
      isValid = await trigger(["occupation", "skills"]);
    }

    if (currentStep === 4) {
      isValid = await trigger(["idType"]);
    }

    if (!isValid) return;

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((s) => s + 1);
      return;
    }

    handleSubmit((values) => {
      console.log("Signup form payload:", values);
    })();
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    } else {
      router.push("/");
    }
  };

  const handleTopBack = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
      return;
    }

    router.back();
  };

  const stepProps = {
    formData,
    updateFormData,
    onNext: handleNext,
    onBack: handleBack,
    register,
    errors,
  };

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

          <main className="flex-1 px-4 pb-5 md:px-10 md:py-8">
            {currentStep === 1 && <StepAccountSetup {...stepProps} />}
            {currentStep === 2 && <StepPersonalInfo {...stepProps} />}
            {currentStep === 3 && <StepProfessionalInfo {...stepProps} />}
            {currentStep === 4 && <StepAccountSecurity {...stepProps} />}
            {currentStep === 5 && <StepFirstTrade {...stepProps} />}
          </main>
        </div>
      </div>
    </div>
  );
}