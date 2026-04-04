"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const plans = [
  { id: "monthly_999", label: "Montly Plan", price: "$9.99" },
  { id: "monthly_1999", label: "Monthly Plan", price: "$19.99" },
];

export default function BoostPaymentForm() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("monthly_999");
  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(val);
  };
  const handleExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (val.length >= 3) val = val.slice(0, 2) + "/" + val.slice(2);
    setExpiry(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== Boost Payment Submitted ===");
    console.log("Plan:", plans.find((p) => p.id === selectedPlan)?.label);
    console.log("Full Name:", fullName);
    console.log("Card Number:", cardNumber);
    console.log("Expiry:", expiry);
    console.log("CVV:", cvv);
    console.log("==============================");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start pt-4">
      
      {/* Left – Payment Details */}
      <div className="lg:col-span-5 flex flex-col gap-7">
        <h1 className="text-[28px] font-bold text-slate-900 dark:text-white tracking-tight">
          Payment details
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-slate-800 dark:text-slate-200">
              Full Name
            </label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter the name on the card"
              className="h-[52px] rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all px-4 font-medium shadow-sm"
              required
            />
          </div>

          {/* Card Number */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold text-slate-800 dark:text-slate-200">
              Card Number
            </label>
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                value={cardNumber}
                onChange={handleCardNumber}
                placeholder="Enter the 16 digits card number"
                className="h-[52px] rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all pl-10 pr-14 font-medium shadow-sm tracking-widest"
                required
              />
              {/* Mastercard icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex">
                <span className="h-5 w-5 rounded-full bg-red-500 opacity-90" />
                <span className="h-5 w-5 rounded-full bg-yellow-400 opacity-90 -ml-2" />
              </div>
            </div>
          </div>

          {/* Expiry & CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-slate-800 dark:text-slate-200">
                Expiry date
              </label>
              <Input
                value={expiry}
                onChange={handleExpiry}
                placeholder="MM/YY"
                className="h-[52px] rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all px-4 font-medium shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-slate-800 dark:text-slate-200">
                CVV
              </label>
              <Input
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                placeholder="CVV"
                className="h-[52px] rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all px-4 font-medium shadow-sm"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <Button
              type="submit"
              className="h-[52px] w-full rounded-2xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[16px] shadow-sm transition-all duration-300 hover:scale-[1.01] active:scale-95"
            >
              Payment
            </Button>
          </div>
        </form>
      </div>

      {/* Divider */}
      <div className="hidden lg:flex lg:col-span-1 justify-center pt-14">
        <div className="w-px h-full bg-slate-200 dark:bg-border min-h-[380px]" />
      </div>

      {/* Right – Plan Selection */}
      <div className="lg:col-span-6 flex flex-col gap-6">
        <h2 className="text-[28px] font-bold text-slate-900 dark:text-white tracking-tight">
          Select your plan
        </h2>

        <div className="flex flex-col gap-4">
          {plans.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlan(plan.id)}
              className={cn(
                "w-full rounded-2xl border-2 px-8 py-6 text-left transition-all duration-200 cursor-pointer",
                selectedPlan === plan.id
                  ? "border-[#728e85] bg-[#f0f5f4] dark:bg-[#728e85]/10"
                  : "border-slate-200 dark:border-border bg-white dark:bg-card hover:border-[#728e85]/50"
              )}
            >
              <div className="text-[40px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {plan.price}
              </div>
              <div className="text-[15px] font-semibold text-slate-500 dark:text-slate-400 mt-1">
                {plan.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
