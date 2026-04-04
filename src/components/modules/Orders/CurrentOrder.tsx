"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function CurrentOrder() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (f: File) => setFile(f);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) handleFile(dropped);
  };

  const handleDeliver = () => {
    console.log("=== Deliver Your Offer ===");
    console.log("File:", file?.name ?? "No file uploaded");
    console.log("=========================");
  };

  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-[30px] font-bold text-slate-900 dark:text-white tracking-tight">
          Orders
        </h1>
        <p className="text-[15px] font-medium text-slate-500 dark:text-slate-400 mt-1">
          Stay updated on your order status here!
        </p>
      </div>

      {/* Order Details Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-border/60 bg-white dark:bg-card shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-border/60">
          <h2 className="text-[15px] font-bold text-slate-900 dark:text-white">
            Order Details
          </h2>
        </div>

        {/* Exchange With Row */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 dark:border-border/60">
          <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-300">
            You
          </span>
          <span className="text-[14px] font-medium text-slate-400">
            Exchange with
          </span>
          <Avatar className="h-7 w-7 border border-background shadow-sm">
            <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="Killan James" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          <span className="text-[14px] font-bold text-slate-800 dark:text-white">
            Killan James
          </span>
        </div>

        {/* Exchange Summary Label */}
        <div className="px-6 pt-5 pb-2">
          <h3 className="text-[14px] font-bold text-slate-900 dark:text-white">
            Exchange Summary
          </h3>
        </div>

        {/* Timeline & Location Row */}
        <div className="grid grid-cols-2 border-b border-slate-100 dark:border-border/60 mx-6 mb-5 divide-x divide-slate-100 dark:divide-border/60 rounded-xl border border-slate-100 dark:border-border/50 overflow-hidden">
          <div className="py-3 px-5">
            <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">
              Within 3 Days
            </span>
          </div>
          <div className="py-3 px-5">
            <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">
              Miami, FL
            </span>
          </div>
        </div>

        {/* Bring/Return Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6 pb-8">
          {/* What You Bring */}
          <div className="rounded-xl border border-slate-200 dark:border-border/60 bg-[#fafbfc] dark:bg-muted/10 p-5 flex flex-col gap-3">
            <h4 className="text-[14px] font-bold text-slate-900 dark:text-white">
              What You Bring To The Table
            </h4>
            <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              Share the skill or service you&apos;re offering in this trade. Be clear about what you can do and the level of quality someone can expect. If you have experience, certifications, or examples, include that to build trust. The more specific you are, the easier it is to find the right match. This is your chance to show your value.
            </p>
          </div>

          {/* What You Get */}
          <div className="rounded-xl border border-slate-200 dark:border-border/60 bg-[#fafbfc] dark:bg-muted/10 p-5 flex flex-col gap-3">
            <h4 className="text-[14px] font-bold text-slate-900 dark:text-white">
              What You Get In Return
            </h4>
            <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              Describe what you&apos;re looking to receive from this exchange. Be upfront about your expectations so both sides are aligned from the start. Whether it&apos;s a service, project help, or something specific, clarity helps avoid misunderstandings. A good trade should feel fair and beneficial to both people. The goal is a smooth, mutually valuable exchange.
            </p>
          </div>
        </div>
      </div>

      {/* Upload Proof Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-border/60 bg-white dark:bg-card shadow-sm overflow-hidden">
        {/* Upload Label Row */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-border/60">
          <h2 className="text-[15px] font-bold text-slate-900 dark:text-white">
            Upload proof for deliver this work
          </h2>
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* Listing Preview */}
          <div className="flex items-center gap-4 rounded-xl border border-slate-100 dark:border-border/60 p-3">
            <div className="relative h-[72px] w-[90px] shrink-0 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400"
                alt="Plumber"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[14px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              I will fix plumbing issues and install pipes professionally
            </p>
          </div>

          {/* Drop Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-2xl border-2 border-dashed cursor-pointer transition-colors ${
              dragging
                ? "border-[#728e85] bg-[#728e85]/5"
                : "border-slate-300 dark:border-border/60 bg-[#fafbfc] dark:bg-muted/10 hover:bg-slate-50 dark:hover:bg-muted/20"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
            <UploadCloud className="h-12 w-12 text-slate-400 dark:text-slate-500 mb-3" />
            {file ? (
              <p className="text-[14px] font-bold text-[#728e85]">{file.name}</p>
            ) : (
              <p className="text-[14px] font-medium text-slate-500 text-center px-4">
                Drag and drop proof of work completion here
                <br />
                or{" "}
                <span className="font-bold text-slate-700 dark:text-slate-300 underline underline-offset-2">
                  browse.
                </span>
              </p>
            )}
          </div>

          {/* Deliver Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleDeliver}
              className="h-12 px-8 rounded-full bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[15px] shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Deliver your offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
