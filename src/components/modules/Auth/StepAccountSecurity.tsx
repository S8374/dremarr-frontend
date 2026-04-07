"use client";

import { useRef } from "react";
import { Label } from "@/components/ui/label";
import { FieldErrors } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadCloud } from "lucide-react";
import { StepNav } from "./StepNav";
import { SignupFormData } from "./Signup";

interface Props {
  formData: SignupFormData;
  updateFormData: (fields: Partial<SignupFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  errors: FieldErrors<any>;
}

const ID_TYPES = [
  "Government Issued ID",
  "Passport",
  "Driver's License",
  "National ID Card",
];

const CERT_TYPES = [
  "Contractor License",
  "Trade Certificate",
  "Professional Certification",
  "None",
];

interface UploadBoxProps {
  label: string;
  helperText: string;
  file: File | null;
  onChange: (file: File | null) => void;
  accept?: string;
}

function UploadBox({ label, helperText, file, onChange, accept = "*" }: UploadBoxProps) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex-1">
      <button
        type="button"
        onClick={() => ref.current?.click()}
        className="w-full border-2 border-dashed border-gray-300 rounded-xl py-8 flex flex-col items-center justify-center hover:border-[#3d6b60] transition-colors bg-white"
      >
        <UploadCloud className="w-7 h-7 text-gray-400 mb-2" />
        <p className="text-sm font-medium text-gray-600">Upload file</p>
        <p className="text-xs text-gray-400 text-center max-w-[180px] mt-1">{helperText}</p>
      </button>
      <input
        ref={ref}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
      {file && (
        <p className="text-xs text-[#3d6b60] mt-1 truncate">{file.name}</p>
      )}
    </div>
  );
}

export function StepAccountSecurity({ formData, updateFormData, onNext, onBack, errors }: Props) {
  return (
    <div>
      <h1 className="text-[38px] leading-[1.04] md:text-2xl font-bold text-gray-900 mb-2 tracking-tight">Verify Your Identity</h1>
      <p className="text-[17px] md:text-sm text-gray-500 mb-5 md:mb-6 leading-snug max-w-md">
        Verify your identity to build trust and get a verified badge. Verified users are
        more likely to get matched and complete trades.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-6 space-y-5">
        {/* Selects Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-[16px] font-medium text-gray-700">Select ID Type</Label>
            <Select
              value={formData.idType}
              onValueChange={(val) => updateFormData({ idType: val })}
            >
              <SelectTrigger className="bg-white border-gray-200 rounded-lg h-11 text-sm focus:ring-[#3d6b60]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ID_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.idType?.message ? (
              <p className="text-xs text-red-500 pt-1">{String(errors.idType.message)}</p>
            ) : null}
          </div>

          <div className="space-y-1">
            <Label className="text-[16px] font-medium text-gray-700">
              Certification{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </Label>
            <Select defaultValue="Contractor License">
              <SelectTrigger className="bg-white border-gray-200 rounded-lg h-11 text-sm focus:ring-[#3d6b60]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CERT_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Upload Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UploadBox
            label="ID Document"
            helperText="Upload your ID Helper Text: Government-issued ID (driver's license, passport, etc.)"
            file={formData.idFile}
            onChange={(f) => updateFormData({ idFile: f })}
          />
          <UploadBox
            label="Certification"
            helperText="Upload certification (optional) Add helper text: License, certification, or proof of your trade"
            file={formData.certFile}
            onChange={(f) => updateFormData({ certFile: f })}
          />
        </div>
        {errors.idFile?.message ? (
          <p className="text-xs text-red-500">{String(errors.idFile.message)}</p>
        ) : null}

        <p className="text-[14px] text-gray-400 italic">
          Upload document according to your occupation.
        </p>
      </div>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}