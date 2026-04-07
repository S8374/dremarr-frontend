"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
}

const LANGUAGES = ["English", "Bengali", "Hindi", "Arabic", "French", "Spanish"];

export function StepPersonalInfo({ formData, updateFormData, onNext, onBack }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    updateFormData({ profilePhoto: file });
  };

  const previewUrl = formData.profilePhoto
    ? URL.createObjectURL(formData.profilePhoto)
    : null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Personal Information</h1>
      <p className="text-sm text-gray-500 mb-6">
        Build trust by adding a face to your profile
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
        {/* Top row: photo + name + language */}
        <div className="flex gap-6 mb-5">
          {/* Profile Photo */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center w-32 h-32 rounded-xl border-2 border-dashed border-gray-300 bg-white hover:border-[#3d6b60] transition-colors shrink-0"
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Profile"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <>
                <UploadCloud className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500 font-medium">Profile Photo</span>
              </>
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />

          {/* Name + Language */}
          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <Label htmlFor="displayName" className="text-sm font-medium text-gray-700">
                Display Name
              </Label>
              <Input
                id="displayName"
                placeholder="Enter your full name according to your nid"
                value={formData.displayName}
                onChange={(e) => updateFormData({ displayName: e.target.value })}
                className="bg-white border-gray-200 rounded-lg h-11 text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60]"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-sm font-medium text-gray-700">Language</Label>
              <Select
                value={formData.language}
                onValueChange={(val) => updateFormData({ language: val })}
              >
                <SelectTrigger className="bg-white border-gray-200 rounded-lg h-11 text-sm focus:ring-[#3d6b60]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGES.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-1">
          <Label htmlFor="bio" className="text-sm font-medium text-gray-700">
            Professional Bio
          </Label>
          <Textarea
            id="bio"
            placeholder="I am an Electrician with 5 years of experience..."
            rows={5}
            maxLength={600}
            value={formData.bio}
            onChange={(e) => updateFormData({ bio: e.target.value })}
            className="bg-white border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus-visible:ring-[#3d6b60] resize-none"
          />
          <div className="flex justify-between">
            <p className="text-xs text-gray-400 italic">
              Tip: Mention your key tools and achievements.
            </p>
            <p className="text-xs text-gray-400">{formData.bio.length}/600</p>
          </div>
        </div>
      </div>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}