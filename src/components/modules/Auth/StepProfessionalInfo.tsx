"use client";

import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FieldErrors } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadCloud, X } from "lucide-react";
import { StepNav } from "./StepNav";
import { cn } from "@/lib/utils";
import { SignupFormData } from "./Signup";

interface Props {
  formData: SignupFormData;
  updateFormData: (fields: Partial<SignupFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  errors: FieldErrors<any>;
}

const OCCUPATIONS = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Mason",
  "Welder",
  "HVAC Technician",
  "Software Developer",
];

const SKILL_SUGGESTIONS: Record<string, string[]> = {
  Electrician: ["Electrical Wiring", "Circuit Installation", "Electrical Repair", "Troubleshooting"],
  Plumber: ["Pipe Installation", "Leak Repair", "Drainage", "Water Heater"],
  Carpenter: ["Wood Joinery", "Cabinet Making", "Furniture Repair", "Framing"],
  default: ["Communication", "Problem Solving", "Time Management", "Team Work"],
};

export function StepProfessionalInfo({ formData, updateFormData, onNext, onBack, errors }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [skillInput, setSkillInput] = useState(formData.occupation || "");

  const suggestions =
    SKILL_SUGGESTIONS[formData.occupation] ?? SKILL_SUGGESTIONS.default;

  const toggleSkill = (skill: string) => {
    const exists = formData.skills.includes(skill);
    if (exists) {
      updateFormData({ skills: formData.skills.filter((s) => s !== skill) });
    } else if (formData.skills.length < 5) {
      updateFormData({ skills: [...formData.skills, skill] });
    }
  };

  const handleWorkFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    updateFormData({ workFiles: [...formData.workFiles, ...files] });
  };

  return (
    <div>
      <h1 className="text-[38px] leading-[1.04] md:text-2xl font-bold text-gray-900 mb-2 tracking-tight">Your Expertise</h1>
      <p className="text-[17px] md:text-sm text-gray-500 mb-5 md:mb-6 leading-snug max-w-md">
        Define the services you provide and your specialized skills.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-6 space-y-5">
        {/* Primary Occupation */}
        <div className="space-y-1">
          <Label className="text-[16px] font-medium text-gray-700">Primary Occupation</Label>
          <Select
            value={formData.occupation}
            onValueChange={(val) => {
              updateFormData({ occupation: val, skills: [] });
              setSkillInput(val);
            }}
          >
            <SelectTrigger className="bg-white border-gray-200 rounded-lg h-11 w-full text-sm focus:ring-[#3d6b60]">
              <SelectValue placeholder="Select occupation" />
            </SelectTrigger>
            <SelectContent>
              {OCCUPATIONS.map((occ) => (
                <SelectItem key={occ} value={occ}>
                  {occ}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.occupation?.message ? (
            <p className="text-xs text-red-500 pt-1">{String(errors.occupation.message)}</p>
          ) : null}
        </div>

        {/* Skills picker */}
        <div className="space-y-2">
          <Label className="text-[16px] font-medium text-gray-700">
            Pick 2–5 of your top skills
          </Label>
          <Input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Type a skill..."
            className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
          />
          <p className="text-[14px] text-gray-400 italic">
            Choose the skills you're confident trading.
          </p>
          {/* Suggestion chips */}
          <div className="flex flex-wrap gap-2 mt-1">
            {suggestions.map((skill) => {
              const selected = formData.skills.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={cn(
                    "text-xs px-3 py-1.5 rounded-full border transition-colors",
                    selected
                      ? "bg-[#3d6b60] text-white border-[#3d6b60]"
                      : "bg-white text-gray-600 border-gray-300 hover:border-[#3d6b60]"
                  )}
                >
                  {skill}
                </button>
              );
            })}
          </div>
          {formData.skills.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {formData.skills.map((s) => (
                <Badge
                  key={s}
                  variant="secondary"
                  className="gap-1 bg-[#3d6b60]/10 text-[#3d6b60] hover:bg-[#3d6b60]/20"
                >
                  {s}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => toggleSkill(s)}
                  />
                </Badge>
              ))}
            </div>
          )}
          {errors.skills?.message ? (
            <p className="text-xs text-red-500">{String(errors.skills.message)}</p>
          ) : null}
        </div>

        {/* Show Your Work */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Show Your Work</Label>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-gray-300 rounded-xl py-7 flex flex-col items-center justify-center hover:border-[#3d6b60] transition-colors bg-white"
          >
            <UploadCloud className="w-7 h-7 text-gray-400 mb-2" />
            <p className="text-[16px] font-medium text-gray-600">Upload file</p>
            <p className="text-[14px] text-gray-400 text-center max-w-[200px] mt-1 leading-snug">
              Upload photos or videos of your work to build trust and stand out.
            </p>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpg,image/jpeg,image/png,image/webp"
            multiple
            className="hidden"
            onChange={handleWorkFiles}
          />
          <p className="text-[14px] text-gray-400">we accept JPG, PNG &amp; WebP</p>
          {formData.workFiles.length > 0 && (
            <p className="text-[14px] text-[#3d6b60]">
              {formData.workFiles.length} file(s) uploaded
            </p>
          )}
          {errors.workFiles?.message ? (
            <p className="text-xs text-red-500">{String(errors.workFiles.message)}</p>
          ) : null}
        </div>
      </div>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}