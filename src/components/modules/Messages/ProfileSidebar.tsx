"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Senior Analyst",
    date: "Jan 20, 2024",
    stars: 5,
    text: "Amazing experience working with this electrician! He quickly diagnosed the issue and explained everything clearly before starting the work. The job was completed efficiently with great attention to detail. Everything is now working perfectly. Highly professional and reliable—definitely recommended!",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Manager",
    date: "Feb 12, 2024",
    stars: 5,
    text: "Excellent service! Very polite and professional. Highly recommend for any home electrical needs.",
  },
  {
    id: 3,
    name: "James Anderson",
    role: "Property Owner",
    date: "Mar 05, 2024",
    stars: 5,
    text: "Reliable and fast. Found and fixed a complex wiring issue in no time. Definitely using this service again.",
  }
];

export function ProfileSidebar() {
  return (
    <div className="flex flex-col h-full bg-[#f8f9fb] dark:bg-muted/10 border-l border-border/10 relative overflow-hidden scrollbar-hide">
      <div className="flex-1 overflow-y-auto p-5 scrollbar-hide flex flex-col gap-4">
        {/* Profile Info Card */}
        <div className="bg-white dark:bg-card rounded-3xl p-6 border border-slate-100 dark:border-border/40 shadow-sm shrink-0">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-16 w-16 border-2 border-background shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="Killan James" />
              <AvatarFallback>KJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h2 className="text-[14px] font-bold text-slate-900 dark:text-white tracking-tight">Killan Jame</h2>
                <div className="flex items-center ">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-[15px] font-semibold text-slate-400">5.0</span>
                </div>
              </div>
              <span className="text-[14px] font-medium text-slate-500 tracking-tight">Electrician</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#728e85] text-white">
                <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />
                <span className="text-[11px] font-bold">Verified</span>
            </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f0502e] text-white">
                <Zap className="h-3.5 w-3.5 stroke-[2.5] fill-white" />
                <span className="text-[11px] font-bold uppercase">Pro</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#cfaa6a] text-white">
                <span className="text-[11px] font-bold">Gold Membership</span>
            </div>
          
          </div>

          <p className="text-[13px] font-medium leading-[1.6] text-slate-500 mb-6 tracking-tight">
            Professional electrician providing safe and reliable electrical services for homes and businesses.
          </p>

          <div className="mb-6 h-px w-full bg-slate-50 dark:bg-border/10" />

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 tracking-tight">Location</span>
                <span className="text-[14px] font-bold text-slate-800 dark:text-white">Miami, FL</span>
            </div>
            <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-slate-400 tracking-tight">Member Since</span>
                <span className="text-[14px] font-bold text-slate-800 dark:text-white">2/10/2024</span>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="flex flex-col gap-4 mb-4">
             {reviews.map((row) => (
                <div key={row.id} className="bg-white dark:bg-card rounded-3xl p-6 border border-slate-100 dark:border-border/40 shadow-sm transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{row.date}</span>
                        <div className="flex items-center gap-0.5">
                            {[...Array(row.stars)].map((_, i) => (
                                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <h4 className="text-[15px] font-bold text-slate-900 dark:text-white leading-none mb-1">{row.name}</h4>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{row.role}</span>
                    </div>
                    
                    <p className="text-[12px] font-medium text-slate-500 leading-[1.6] tracking-tight">
                        {row.text}
                    </p>
                </div>
            ))}
        </div>
      </div>

      {/* Sticky View Profile Button */}
        <div className="border-t border-border/10 bg-[#f8f9fb]/80 p-5 dark:bg-muted/10 backdrop-blur-sm shadow-[0_-8px_30px_rgba(0,0,0,0.02)]">
          <Link href="/profile/1" className="w-full block">
            <Button className="h-14 w-full rounded-4xl border-4 border-slate-100 bg-white text-[18px] font-bold text-slate-500 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-slate-50 active:scale-95 dark:border-border/40 dark:bg-card dark:hover:bg-muted/20">
                View Profile
            </Button>
          </Link>
      </div>
    </div>
  );
}
