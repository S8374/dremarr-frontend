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
import Link from "next/link";

const messages = [
  {
    id: 1,
    text: "Hello there",
    type: "received",
    time: "4:30 PM",
  },
  {
    id: 2,
    text: "I have an offer for you and need your assistance.",
    type: "received",
    time: "4:31 PM",
  },
  {
    id: 3,
    text: "Hello James",
    type: "sent",
    time: "4:32 PM",
  },
  {
    id: 4,
    text: "Sounds great! I'd be happy to hear more about the offer.",
    type: "sent",
    time: "4:33 PM",
  },
  {
    id: 5,
    text: "",
    type: "offer",
    time: "4:35 PM",
    need: "I need web development services to boost my online presence and I'm looking for help with five pages.",
    offer: "I can offer you 5 hours of electrical work from a licensed electrician. We can negotiate what type of electrical work you would want.",
  },
];

export function ChatArea() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-background dark:bg-card scrollbar-hide">
      {/* Simple Header */}
      <div className="flex items-center justify-between border-b border-border/10 px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-6">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Trigger for Messages */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors">
                <Menu className="h-6 w-6 stroke-2" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] max-w-[340px] border-r-0 p-0">
               <SheetTitle className="sr-only">Messages Menu</SheetTitle>
              <MessagesSidebar />
            </SheetContent>
          </Sheet>

          <div className="relative shrink-0">
            <Avatar className="h-[52px] w-[52px] shadow-sm border border-background">
              <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="KillanJames" />
              <AvatarFallback>KJ</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[17px] font-bold text-foreground leading-tight">Killan James</h2>
            <span className="text-[12px] font-bold text-emerald-500 uppercase tracking-wider">Active</span>
          </div>
        </div>

        {/* Mobile Info Trigger for Profile */}
        <Sheet>
            <SheetTrigger asChild>
              <button className="xl:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors">
                <Info className="h-6 w-6 stroke-2" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[300px] border-l-0 p-0">
              <SheetTitle className="sr-only">Profile Information</SheetTitle>
              <ProfileSidebar />
            </SheetContent>
        </Sheet>
      </div>

      {/* Messages Thread */}
      <div
        ref={scrollRef}
        data-lenis-prevent
        className="flex-1 space-y-6 overflow-y-auto bg-muted/20 p-4 scrollbar-hide dark:bg-background/40 sm:p-6 lg:space-y-10 lg:p-10"
      >
        <div className="flex justify-center mb-8">
          <div className="relative flex h-px w-full items-center justify-center bg-border/50 dark:bg-border/10">
            <span className="absolute px-6 py-2 bg-muted/80 dark:bg-background/60 rounded-full text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Today, March 24</span>
          </div>
        </div>

        {/* Service Card Invite */}
        <div className="flex justify-start">
          <div className="relative w-full max-w-[540px] rounded-4xl border border-border/50 bg-card p-3 shadow-sm transition-all duration-300 hover:shadow-md sm:rounded-[2.5rem] sm:p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="relative h-[150px] w-full shrink-0 overflow-hidden rounded-[1.25rem] shadow-sm sm:h-[135px] sm:w-[180px] sm:rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop"
                  alt="Service"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center">
                <h3 className="mb-3 text-[15px] font-semibold leading-snug tracking-tight text-foreground">I will build and repair wooden furniture and structures</h3>
                <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/10">
                  <div className="flex flex-wrap items-center gap-2 p-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground text-[10px] font-bold uppercase text-background tracking-widest shadow-sm">
                      Need
                    </div>
                    <span className="text-[12px] text-muted-foreground">Plumbing and web development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Dialog */}
        <div className="space-y-6">
          {messages.map((msg) => {
            if (msg.type === "offer") {
              return (
                <div key={msg.id} className="flex flex-col items-start pt-4 pb-2">
                  <div className="flex items-start gap-3 w-full max-w-[550px]">
                    <Avatar className="h-[42px] w-[42px] shrink-0 shadow-sm border border-background mt-2">
                      <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="Killan" />
                      <AvatarFallback className="font-bold text-xs">KJ</AvatarFallback>
                    </Avatar>
                    
                    <div className="w-full flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 bg-card dark:bg-muted/10 border border-border/50 dark:border-border/20 p-5 rounded-3xl rounded-tl-none shadow-sm flex flex-col gap-3">
                           <div className="text-[13px] font-bold text-foreground">Need</div>
                           <p className="text-[13px] leading-relaxed text-muted-foreground font-medium">
                              {msg.need}
                           </p>
                        </div>
                        <div className="flex-1 bg-card dark:bg-muted/10 border border-border/50 dark:border-border/20 p-5 rounded-3xl shadow-sm flex flex-col gap-3">
                           <div className="text-[13px] font-bold text-foreground">Offer</div>
                           <p className="text-[13px] leading-relaxed text-muted-foreground font-medium">
                              {msg.offer}
                           </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-end gap-3 w-full pr-2">
                         <span className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground shrink-0">within 7 days / Miami, FI</span>
                         <div className="flex items-center gap-3">
                            <Button variant="outline" className="rounded-full px-5 h-9 text-[12px] font-bold text-rose-500 border-rose-100 bg-rose-50 hover:bg-rose-100 hover:text-rose-600 dark:border-rose-900/50 dark:bg-rose-900/20">
                                Decline
                            </Button>
                            <Button className="rounded-full px-6 h-9 text-[12px] font-bold bg-[#6b8b7e] hover:bg-[#5b786c] text-white transition-transform active:scale-95">
                                Accept
                            </Button>
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
                    <Avatar className="h-[42px] w-[42px] shrink-0 shadow-sm border border-background">
                      <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="Killan" />
                      <AvatarFallback className="font-bold text-xs">KJ</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={cn(
                    "px-7 py-4 text-[14px] leading-relaxed shadow-sm transition-all duration-300",
                    msg.type === "sent"
                      ? "bg-muted/30 text-foreground rounded-4xl rounded-tr-none dark:bg-muted/20"
                      : "bg-background text-foreground border border-border/50 dark:bg-muted/10 rounded-4xl rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Input Bar Section */}
      <div className="border-t border-border/10 bg-background dark:bg-card px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:gap-6">
          <div className="flex-1 relative">
            <Input
              placeholder="write a message"
              className="w-full rounded-4xl border-none bg-muted/20 py-5 pl-6 pr-24 text-[14px] font-bold placeholder:text-muted-foreground/60 transition-all focus-visible:bg-muted/30 focus-visible:ring-0 dark:bg-background/20 dark:text-white dark:focus-visible:bg-background/40 sm:py-6 sm:pl-8 sm:pr-32 sm:text-[15px]"
            />
            <div className="absolute right-5 top-1/2 flex -translate-y-1/2 items-center gap-3 sm:right-8 sm:gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-all active:scale-95">
                <Paperclip className="h-6 w-6 stroke-[2.5]" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-all active:scale-95">
                <Send className="h-6 w-6 stroke-[2.5]" />
              </button>
            </div>
          </div>
          <Button asChild className="h-14 w-full rounded-4xl border-4 border-muted/50 bg-card px-6 text-[16px] font-bold text-muted-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-muted/20 active:scale-95 dark:border-border/40 dark:bg-muted/10 dark:text-foreground sm:w-auto sm:min-w-[220px] sm:px-10 sm:text-[18px] lg:min-w-60 lg:px-12">
            <Link href="/create-offer">Create an offer</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
