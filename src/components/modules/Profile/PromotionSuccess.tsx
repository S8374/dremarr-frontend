"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, Star, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PromotionSuccess() {
  return (
    <div className="flex flex-col items-center w-full pb-16">
      
      {/* Header Section */}
      <div className="flex flex-col items-center mt-12 mb-16 text-center px-4">
        <div className="h-20 w-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg mb-6 shadow-green-500/20">
            <CheckCircle2 className="text-white h-12 w-12" />
        </div>
        <h1 className="text-[32px] md:text-[36px] text-slate-800 dark:text-white tracking-tight leading-tight ">
            Your listing has been added successfully!
        </h1>
      </div>

      <div className="w-full  mx-auto flex flex-col gap-16 px-4">
          
          {/* Middle Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Preview Card */}
              <div className="rounded-2xl border border-slate-200 dark:border-border/60 bg-white dark:bg-card overflow-hidden shadow-sm flex flex-col">
                  <div className="relative w-full aspect-video">
                      <Image 
                         src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
                         alt="Plumber fixing sink" 
                         fill 
                         className="object-cover" 
                      />
                  </div>
                  <div className="p-5 flex-1 flex items-center">
                     <h3 className="text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
                         I will fix plumbing issues and install pipes professionally
                     </h3>
                  </div>
              </div>

              {/* Upsell Card */}
              <div className="rounded-2xl bg-[#f2f4f6] dark:bg-muted/30 p-8 flex flex-col justify-between items-start gap-6 border border-slate-100 dark:border-border/40">
                  <div className="flex flex-col gap-4">
                      <h3 className="text-[20px] font-bold text-slate-900 dark:text-white">
                          Get More Matches Faster
                      </h3>
                      <ul className="flex flex-col gap-2 text-[14px] font-medium text-slate-600 dark:text-slate-300">
                         <li className="flex gap-2">
                             <span className="text-slate-400">•</span>
                             Show your listing to more people
                         </li>
                         <li className="flex gap-2">
                             <span className="text-slate-400">•</span>
                             Get faster responses and better matches
                         </li>
                         <li className="flex gap-2">
                             <span className="text-slate-400">•</span>
                             Stand out at the top of the feed
                         </li>
                      </ul>
                  </div>
                  <Link href="/boost" className="w-full">
                  <Button className="w-full h-12 bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold rounded-2xl shadow-sm text-[15px] transition-all hover:scale-[1.02] active:scale-95">
                      Boost my listing
                  </Button>
                  </Link>
              </div>
          </div>

          <hr className="w-full border-t border-slate-200 dark:border-border" />

          {/* Promoted Features Section */}
          <div className="flex flex-col items-center w-full pt-4">
              <h2 className="text-[28px] font-bold text-slate-800 dark:text-white mb-10 text-center tracking-tight">
                  Promoted Features
              </h2>

              <div className="w-full border border-slate-200 dark:border-border/60 rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-card">
                  
                  {/* Table Header (Pricing) */}
                  <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-border/60 bg-[#728e85]">
                      <div className="flex flex-col items-center justify-center p-8 text-center">
                          <span className="text-white/80 font-bold text-[13px] uppercase tracking-wider mb-2">Weekly Boost</span>
                          <span className="text-white font-extrabold text-[36px] tracking-tight">$1.99</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-8 text-center">
                          <span className="text-white/80 font-bold text-[13px] uppercase tracking-wider mb-2">Monthly Boost</span>
                          <span className="text-white font-extrabold text-[36px] tracking-tight">$5.99</span>
                      </div>
                  </div>

                  {/* Table Rows */}
                  <div className="flex flex-col divide-y divide-slate-200 dark:divide-border/60">
                      
                      {/* Reach */}
                      <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-border/60">
                         <div className="flex flex-col items-center justify-center p-8 text-center gap-3">
                             <div className="p-3 rounded-full border border-dashed border-slate-400 dark:border-slate-500">
                                <Globe className="h-6 w-6 text-slate-800 dark:text-slate-200" />
                             </div>
                             <div className="flex flex-col">
                                 <h4 className="text-[14px] font-bold text-slate-900 dark:text-white">Expand Reach</h4>
                                 <p className="text-[12px] font-medium text-slate-500">Presenting your listing to a large audience</p>
                             </div>
                         </div>
                         <div className="flex flex-col items-center justify-center p-8 text-center gap-3">
                             <div className="p-3 rounded-full border border-dashed border-slate-400 dark:border-slate-500">
                                <Globe className="h-6 w-6 text-slate-800 dark:text-slate-200" />
                             </div>
                             <div className="flex flex-col">
                                 <h4 className="text-[14px] font-bold text-slate-900 dark:text-white">Expand Reach</h4>
                                 <p className="text-[12px] font-medium text-slate-500">Presenting your listing to a large audience</p>
                             </div>
                         </div>
                      </div>

                      {/* Support */}
                      <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-border/60">
                         <div className="flex flex-col items-center justify-center p-8 text-center gap-3">
                             <Wrench className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                             <div className="flex flex-col">
                                 <h4 className="text-[14px] font-bold text-slate-900 dark:text-white">Priority Support</h4>
                                 <p className="text-[12px] font-medium text-slate-500">Get priority customer support</p>
                             </div>
                         </div>
                         <div className="flex flex-col items-center justify-center p-8 text-center gap-3">
                             <Wrench className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                             <div className="flex flex-col">
                                 <h4 className="text-[14px] font-bold text-slate-900 dark:text-white">Priority Support</h4>
                                 <p className="text-[12px] font-medium text-slate-500">Get priority customer support</p>
                             </div>
                         </div>
                      </div>

                      {/* Featured */}
                      <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-border/60">
                         <div className="flex flex-col items-center justify-center p-8 text-center gap-3">
                             <Star className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                             <div className="flex flex-col">
                                 <h4 className="text-[14px] font-bold text-slate-900 dark:text-white">Featured Listing</h4>
                                 <p className="text-[12px] font-medium text-slate-500">Appear at the top of search results</p>
                             </div>
                         </div>
                         <div className="flex flex-col items-center justify-center p-8 text-center gap-3">
                             <Star className="h-8 w-8 text-slate-800 dark:text-slate-200" />
                             <div className="flex flex-col">
                                 <h4 className="text-[14px] font-bold text-slate-900 dark:text-white">Featured Listing</h4>
                                 <p className="text-[12px] font-medium text-slate-500">Appear at the top of search results</p>
                             </div>
                         </div>
                      </div>

                  </div>
              </div>
          </div>
          
      </div>
    </div>
  );
}
