"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function CreateOfferForm() {
  const router = useRouter();
  const [title, setTitle] = useState("I will fix plumbing issues and install pipes professionally");
  const [description, setDescription] = useState("");
  const [expectations, setExpectations] = useState("");

  return (
    <div className="w-full  mx-auto   p-6 sm:p-10  my-10">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-none px-0 text-[22px] font-bold md:text-[26px] lg:text-[28px] focus-visible:ring-0 shadow-none bg-transparent dark:text-white"
        placeholder="Enter your offer title..."
      />

      <div className="mt-8 flex flex-col md:flex-row gap-6 lg:gap-10">
        <div className="w-full md:w-[40%] shrink-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=400&auto=format&fit=crop"
              alt="Service Offer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Textarea
              placeholder="Be clear about what you can do, your experience, and what's included."
              className="min-h-[140px] resize-none rounded-[1rem] border-slate-200 p-4 text-[15px] font-medium placeholder:text-slate-400 focus-visible:ring-emerald-500/20 dark:border-border/50 dark:bg-muted/10 dark:placeholder:text-slate-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={1500}
            />
            <div className="text-right text-[11px] font-semibold tracking-wide text-slate-400">
              0/{1500 - description.length} characters
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Textarea
              placeholder="Be specific so both sides understand expectations upfront."
              className="min-h-[140px] resize-none rounded-[1rem] border-slate-200 p-4 text-[15px] font-medium placeholder:text-slate-400 focus-visible:ring-emerald-500/20 dark:border-border/50 dark:bg-muted/10 dark:placeholder:text-slate-500"
              value={expectations}
              onChange={(e) => setExpectations(e.target.value)}
              maxLength={1500}
            />
            <div className="text-right text-[11px] font-semibold tracking-wide text-slate-400">
               0/{1500 - expectations.length} characters
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Input
              placeholder="When do you need this done?"
              className="flex-1 rounded-xl border-slate-200 py-6 px-4 font-medium placeholder:text-slate-400 dark:border-border/50 dark:bg-muted/10"
            />
            <Input
              placeholder="Location this will take place"
              className="flex-1 rounded-xl border-slate-200 py-6 px-4 font-medium placeholder:text-slate-400 dark:border-border/50 dark:bg-muted/10"
            />
          </div>

          <div className="flex flex-wrap justify-end gap-3 mt-4">
            <Button
              variant="outline"
              className="rounded-full h-12 px-6 text-[15px] font-bold text-slate-600 border-slate-200 hover:bg-slate-50 dark:border-border/50 dark:text-slate-300 dark:hover:bg-muted/20"
              onClick={() => router.back()}
              type="button"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back</span>
            </Button>
            <Button
              className="rounded-full h-12 bg-[#6b8b7e] hover:bg-[#5b786c] text-white px-8 text-[15px] font-bold shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Send Trade Offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
