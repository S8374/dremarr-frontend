"use client";

import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send, Menu, Info } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { MessagesSidebar } from "./MessagesSidebar";
import { ProfileSidebar } from "./ProfileSidebar";
import { useLanguage } from "@/components/shared/language-provider";
import Link from "next/link";

const messagesData = [
  {
    id: 1,
    text: "Hello there",
    textEs: "Hola",
    type: "received",
    time: "4:30 PM",
  },
  {
    id: 2,
    text: "I have an offer for you and need your assistance.",
    textEs: "Tengo una oferta para ti y necesito tu ayuda.",
    type: "received",
    time: "4:31 PM",
  },
  {
    id: 3,
    text: "Hello James",
    textEs: "Hola James",
    type: "sent",
    time: "4:32 PM",
  },
  {
    id: 4,
    text: "Sounds great! I'd be happy to hear more about the offer.",
    textEs: "¡Suena genial! Estaría encantado de saber más sobre la oferta.",
    type: "sent",
    time: "4:33 PM",
  },
  {
    id: 5,
    text: "",
    type: "offer",
    time: "4:35 PM",
    need: "I need web development services to boost my online presence and I'm looking for help with five pages.",
    needEs: "Necesito servicios de desarrollo web para aumentar mi presencia en línea y estoy buscando ayuda con cinco páginas.",
    offer: "I can offer you 5 hours of electrical work from a licensed electrician. We can negotiate what type of electrical work you would want.",
    offerEs: "Puedo ofrecerte 5 horas de trabajo eléctrico de un electricista certificado. Podemos negociar qué tipo de trabajo eléctrico desearías.",
  },
];

export function ChatArea() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  const labels = {
    active: isSpanish ? "Activo" : "Active",
    today: isSpanish ? "Hoy, 24 de Marzo" : "Today, March 24",
    need: isSpanish ? "Necesito" : "Need",
    offer: isSpanish ? "Oferta" : "Offer",
    decline: isSpanish ? "Rechazar" : "Decline",
    accept: isSpanish ? "Aceptar" : "Accept",
    placeholder: isSpanish ? "Escribe un mensaje..." : "write a message...",
    createOffer: isSpanish ? "Crear una oferta" : "Create an offer",
    acceptOfferMsg: isSpanish ? "Por favor acepta la oferta" : "Please accept the offer",
    within: isSpanish ? "dentro de 3 días / Miami, FL" : "within 3 days / Miami, FL",
    serviceTitle: isSpanish ? "Construiré y repararé muebles y estructuras de madera" : "I will build and repair wooden furniture and structures",
    serviceNeeds: isSpanish ? "Plomería y desarrollo web" : "Plumbing and web development"
  };

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-background border-border scrollbar-hide">
      {/* Simple Header */}
      <div className="flex items-center justify-between border-b border-border px-10 py-6 bg-background/50 backdrop-blur-sm z-10">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] max-w-[340px] border-r-0 p-0">
              <SheetTitle className="sr-only">Messages Menu</SheetTitle>
              <MessagesSidebar />
            </SheetContent>
          </Sheet>

          <div className="relative shrink-0">
            <Avatar className="h-12 w-12 border border-border p-0.5 bg-muted/20">
              <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="Killan" className="rounded-full" />
              <AvatarFallback>KJ</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[17px] font-bold text-foreground leading-tight">Killan James</h2>
            <span className="text-[12px] font-bold text-emerald-500">{labels.active}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="xl:hidden p-2 text-muted-foreground hover:text-foreground">
                <Info className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[300px] border-l-0 p-0">
              <SheetTitle className="sr-only">Profile </SheetTitle>
              <ProfileSidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Messages Thread */}
      <div
        ref={scrollRef}
        data-lenis-prevent
        className="flex-1 space-y-6 overflow-y-auto bg-muted/20 dark:bg-muted/5 p-4 scrollbar-hide sm:p-6 lg:space-y-10 lg:p-10"
      >
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 w-full">
            <div className="h-px bg-border flex-1 opacity-50" />
            <span className="text-[12px]  text-muted-foreground/40">{labels.today}</span>
            <div className="h-px bg-border flex-1 opacity-50" />
          </div>
        </div>

        {/* Service Card Invite */}
        <div className="flex justify-start">
          <div className="relative w-full max-w-[540px] rounded-3xl border border-border bg-card p-3 shadow-none">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="relative h-[110px] w-full shrink-0 overflow-hidden rounded-[18px] sm:w-[150px]">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop"
                  alt="Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center pr-4">
                <h3 className="mb-3 text-[15px]  leading-tight text-foreground">{labels.serviceTitle}</h3>
                <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/30 p-1 pr-4 w-full">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-foreground text-[11px] font-bold text-background shadow-sm">
                    {labels.need}
                  </div>
                  <span className="text-[14px] f text-muted-foreground truncate">{labels.serviceNeeds}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Dialog */}
        <div className="space-y-6">
          {messagesData.map((msg) => {
            if (msg.type === "offer") {
              return (
                <div key={msg.id} className="flex flex-col items-start pt-4 pb-2">
                  <div className="flex items-start gap-3 w-full max-w-[640px]">
                    <Avatar className="h-10 w-10 shrink-0 border border-border mt-0.5">
                      <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="Killan" />
                      <AvatarFallback>KJ</AvatarFallback>
                    </Avatar>

                    <div className="w-full flex flex-col gap-3">
                      <div className="bg-card dark:bg-muted/40 px-7 py-3 rounded-[20px] rounded-tl-none  text-[15px] text-foreground w-fit mb-1 border border-border shadow-sm">
                        {labels.acceptOfferMsg}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-card border border-border p-5 rounded-[12px] flex flex-col gap-4 min-h-[180px] shadow-sm">
                          <div className="text-[13px] font-bold text-foreground opacity-90">{labels.need}</div>
                          <p className="text-[13px] leading-relaxed text-muted-foreground font-bold">
                            {isSpanish ? msg.needEs : msg.need}
                          </p>
                        </div>
                        <div className="bg-card border border-border p-5 rounded-[12px] flex flex-col gap-4 min-h-[180px] shadow-sm">
                          <div className="text-[13px] font-bold text-foreground opacity-90">{labels.offer}</div>
                          <p className="text-[13px] leading-relaxed text-muted-foreground font-bold">
                            {isSpanish ? msg.offerEs : msg.offer}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3 w-full mt-1 pr-1">
                        <span className="text-[11px] font-bold text-muted-foreground/40">{labels.within}</span>
                        <div className="flex items-center gap-3">
                          <button className="rounded-full px-6 h-9 text-[13px] font-bold text-muted-foreground bg-muted hover:bg-muted/80 transition-colors border border-border">
                            {labels.decline}
                          </button>
                          <button className="rounded-full px-8 h-9 text-[13px] font-bold bg-[#728e85] hover:bg-[#5f7e75] text-white transition-all active:scale-95 shadow-md">
                            {labels.accept}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={msg.id} className={cn(
                "flex flex-col",
                msg.type === "sent" ? "items-end" : "items-start"
              )}>
                <div className={cn(
                  "flex items-end gap-3",
                  msg.type === "sent" ? "flex-row-reverse" : "flex-row"
                )}>
                  {msg.type === "received" && (
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="Killan" />
                      <AvatarFallback>KJ</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={cn(
                    "px-7 py-3 text-[15px]  transition-all duration-300 rounded-[22px] shadow-sm",
                    msg.type === "sent"
                      ? "bg-[#e2ebe8] text-[#3e524c]"
                      : "bg-card border border-border text-foreground"
                  )}>
                    {isSpanish ? msg.textEs : msg.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Input Bar Section */}
      <div className="border-t border-border bg-background px-10 py-5">
        <div className="flex items-center gap-6">
          <div className="flex-1 relative">
            <Input
              placeholder={labels.placeholder}
              className="w-full h-12 rounded-full border-none bg-muted/30 dark:bg-muted/10 pl-8 pr-28 text-[15px] font-bold text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-0"
            />
            <div className="absolute right-6 top-1/2 flex -translate-y-1/2 items-center gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Paperclip className="h-5 w-5 stroke-[2.5]" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Send className="h-5 w-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
          <Link href="#" className="btn-pill-outline h-12 flex items-center justify-center px-8 border-border whitespace-nowrap">
           {/* create-offer */}
            {labels.createOffer}
          </Link>
        </div>
      </div>
    </div>
  );
}
