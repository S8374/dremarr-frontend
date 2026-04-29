"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { Button } from "@/components/ui/button";
import { ClipboardList, MessageSquareMore } from "lucide-react";
import Link from "next/link";

export default function PlanBilling() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const labels = {
    title: isSpanish ? "Plan y Facturación" : "Plan & Billing",
    subtitle: isSpanish ? "Administra tu plan y pagos." : "Manage your plan and payments.",
    cancel: isSpanish ? "Cancelar Membresía" : "Cancel Membership",
    currentPlan: isSpanish ? "Plan Actual" : "Current Plan",
    upgrade: isSpanish ? "Mejorar Plan" : "Upgrade Plan",
    usage: isSpanish ? "Uso" : "Usage",
    usageSubtitle: isSpanish ? "Tu uso se renueva cada mes." : "Your usage is renewed every month.",
    silverPlan: isSpanish ? "Plan Plata" : "Silver Plan",
    monthlyPrice: isSpanish ? "$19.99/ Mensual" : "$19.99/ Monthly",
    renewAt: isSpanish ? "Se renueva el" : "Renew at",
    renewDate: isSpanish ? "24 de Mayo, 2026" : "May 24, 2026",
    listing: isSpanish ? "Anuncio" : "Listing",
    messages: isSpanish ? "Mensajes" : "Messages",
    listingCount: isSpanish ? "1 de 3" : "1 of 3",
    messagesCount: isSpanish ? "70 de 100" : "70 of 100",
  };

  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
        <div>
          <h1 className="text-[30px] font-bold text-foreground tracking-tight">
            {labels.title}
          </h1>
          <p className="text-[15px] text-muted-foreground mt-1">
            {labels.subtitle}
          </p>
        </div>
        <button className="h-12 px-8 rounded-full border border-rose-200 text-rose-500 font-bold text-[14px] hover:bg-rose-50 transition-all">
          {labels.cancel}
        </button>
      </div>

      {/* Current Plan Section */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-bold text-foreground">
            {labels.currentPlan}
          </h2>
          <Button className="h-12 px-8 rounded-xl bg-brand hover:bg-brand/90 text-white font-bold text-[14px] shadow-sm">
            {labels.upgrade}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-10 rounded-[20px] border border-border shadow-sm flex flex-col gap-2">
            <span className="text-[17px] font-bold text-muted-foreground">{labels.silverPlan}</span>
            <span className="text-[32px] font-bold text-foreground heading">{labels.monthlyPrice}</span>
          </div>
          <div className="bg-card p-10 rounded-[20px] border border-border shadow-sm flex flex-col gap-2">
            <span className="text-[17px] font-bold text-muted-foreground">{labels.renewAt}</span>
            <span className="text-[32px] font-bold text-foreground heading">{labels.renewDate}</span>
          </div>
        </div>
      </div>

      {/* Usage Section */}
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-[20px] font-bold text-foreground">
            {labels.usage}
          </h2>
          <p className="text-[14px] text-muted-foreground mt-1">
            {labels.usageSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Listing Usage */}
          <div className="bg-card p-12 rounded-[24px] border border-border shadow-sm flex flex-col items-start gap-8">
             <div className="w-full flex justify-center">
                <div className="relative h-44 w-44">
                   <svg className="h-full w-full" viewBox="0 0 100 100">
                      <circle className="text-muted/30" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                      <circle className="text-brand transition-all duration-500 ease-out" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 1/3)} strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" transform="rotate(-90 50 50)" />
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 bg-muted/50 rounded-full flex items-center justify-center">
                         <ClipboardList className="h-8 w-8 text-muted-foreground" />
                      </div>
                   </div>
                </div>
             </div>
             <div className="flex flex-col gap-1 w-full">
                <span className="text-[17px] font-bold text-muted-foreground">{labels.listing}</span>
                <span className="text-[36px] font-bold text-foreground heading">{labels.listingCount}</span>
             </div>
          </div>

          {/* Messages Usage */}
          <div className="bg-card p-12 rounded-[24px] border border-border shadow-sm flex flex-col items-start gap-8">
             <div className="w-full flex justify-center">
                <div className="relative h-44 w-44">
                   <svg className="h-full w-full" viewBox="0 0 100 100">
                      <circle className="text-muted/30" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                      <circle className="text-brand transition-all duration-500 ease-out" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 70/100)} strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" transform="rotate(-90 50 50)" />
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 bg-muted/50 rounded-full flex items-center justify-center">
                         <MessageSquareMore className="h-8 w-8 text-muted-foreground" />
                      </div>
                   </div>
                </div>
             </div>
             <div className="flex flex-col gap-1 w-full">
                <span className="text-[17px] font-bold text-muted-foreground">{labels.messages}</span>
                <span className="text-[36px] font-bold text-foreground heading">{labels.messagesCount}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
