"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UploadCloud } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const supportSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  issue: z.string().min(1, { message: "Please select an issue type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type SupportFormData = z.infer<typeof supportSchema>;

export default function Support() {
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      fullName: "",
      subject: "",
      issue: "",
      message: "",
    },
  });

  const onSubmit = (data: SupportFormData) => {
    const finalData = {
      ...data,
      screenshot: screenshot || null,
    };
    // Requirement: Show data in console
    console.log("Support request submitted:", finalData);
    alert("Message sent! Check console for data payload.");
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#fafafa] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column (Text) */}
        <div className="lg:col-span-5 pt-4">
          <h1 className="text-3xl md:text-[34px] font-bold text-[#1a1c21] mb-5 heading tracking-tight">
            How Can We Help?
          </h1>
          <p className="text-[#6b7280] text-[15px] leading-relaxed max-w-[420px]">
            Have a question or need help with a trade? Send us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Right Column (Form) */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Full name */}
              <div className="space-y-2 relative">
                <Label htmlFor="fullName" className="text-[13px] font-medium text-gray-700">
                  Full name
                </Label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("fullName")}
                  className={`w-full h-[46px] rounded-xl border px-4 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#768e86] focus:border-transparent transition-all ${
                    errors.fullName ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.fullName.message}</p>
                )}
              </div>

              {/* Subject */}
              <div className="space-y-2 relative">
                <Label htmlFor="subject" className="text-[13px] font-medium text-gray-700">
                  Subject
                </Label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What do you need help with?"
                  {...register("subject")}
                  className={`w-full h-[46px] rounded-xl border px-4 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#768e86] focus:border-transparent transition-all ${
                    errors.subject ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.subject.message}</p>
                )}
              </div>

              {/* Issue Dropdown */}
              <div className="space-y-2 relative">
                <Label className="text-[13px] font-medium text-gray-700">Issue</Label>
                <Select onValueChange={(val) => setValue("issue", val, { shouldValidate: true })}>
                  <SelectTrigger className={`w-full h-[46px] bg-white border rounded-xl px-4 text-[14px] outline-none focus:ring-[#768e86] shadow-none ${errors.issue ? 'border-red-500' : 'border-gray-200'}`}>
                    <SelectValue placeholder="choose the issue" className="text-gray-400" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 rounded-xl shadow-lg">
                    <SelectItem value="account" className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50">Account Issue</SelectItem>
                    <SelectItem value="trade" className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50">Trade Problem</SelectItem>
                    <SelectItem value="billing" className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50">Billing Inquiry</SelectItem>
                    <SelectItem value="other" className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.issue && (
                  <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.issue.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2 relative pt-2">
                <Label htmlFor="message" className="text-[13px] font-medium text-gray-700">
                  Message
                </Label>
                <textarea
                  id="message"
                  placeholder="Describe your question or issue in detail..."
                  {...register("message")}
                  className={`w-full h-[120px] rounded-xl border p-4 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#768e86] focus:border-transparent transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.message.message}</p>
                )}
              </div>

              {/* Upload Screenshot */}
              <div className="space-y-2 pt-2">
                <Label className="text-[13px] font-medium text-gray-700">
                  Upload Screenshot <span className="text-gray-400 font-normal">(optional)</span>
                </Label>
                
                <div 
                  className="w-full border-2 border-dashed border-gray-200 hover:border-[#67877e] rounded-xl py-8 px-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-white group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-[#67877e] mb-3 transition-colors" strokeWidth={1.5} />
                  <p className="text-[15px] font-semibold text-gray-700 mb-1">Upload file</p>
                  <p className="text-xs text-gray-400 text-center">Add any screenshot's to help us review your issue faster</p>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setScreenshot(e.target.files[0]);
                      }
                    }}
                  />
                  {screenshot && (
                    <div className="mt-4 px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200 flex items-center justify-center max-w-full truncate">
                      ✓ {screenshot.name}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-[48px] flex items-center justify-center bg-[#768e86] hover:bg-[#667d76] active:bg-[#596e67] text-white rounded-[10px] font-semibold text-[15px] transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}
