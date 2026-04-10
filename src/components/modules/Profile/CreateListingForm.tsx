"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateListingForm() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const router = useRouter();

  const [title, setTitle] = useState("I will fix plumbing issues and install pipes professionally");
  const [exchange, setExchange] = useState("Web development");
  const [timeline, setTimeline] = useState("Within 3 Days");
  const [location, setLocation] = useState("Miami, FL");
  const [description, setDescription] = useState(
    "Are you looking for a skilled and reliable electrician? You're in the right place. I provide professional electrical installation and repair services for homes, offices, and small businesses.\n\nMy services include electrical wiring, switch and socket installation, lighting installation, fan setup, circuit breaker repair, troubleshooting electrical issues, and general electrical maintenance. I focus on safety, quality workmanship, and completing every job efficiently.\n\nWhether you need a small repair or a complete electrical installation, I'm here to help. I aim to deliver dependable service and ensure your electrical systems work safely and smoothly.\n\nServices I offer:\n• Electrical installation\n• Electrical repairs and troubleshooting\n• Switch and socket installation\n• Lighting installation\n• Fan installation\n• Circuit breaker and wiring fixes\n\nFeel free to contact me before placing an order to discuss your needs."
  );

  const preferredExchangeTags = [
    "Electrical Wiring",
    "Circuit Installation",
    "Electrical Repair",
    "Troubleshooting"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== Listing Publish Action ===");
    console.log("Title:", title);
    console.log("Exchange:", exchange);
    console.log("Timeline:", timeline);
    console.log("Location:", location);
    console.log("Description:", description);
    console.log("=============================");
    
    // Redirect to success promotion page
    router.push("/promotion-listing");
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
         <h1 className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">
             {isSpanish ? "Crear Nuevo Anuncio" : "Create New Listing"}
         </h1>
         <p className="text-[15px] font-medium text-slate-500">
             {isSpanish 
               ? "Publica lo que ofreces o lo que buscas en el mercado" 
               : "Post what you're offering or what you're looking for in the marketplace"}
         </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column Fields */}
        <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100 flex gap-1">
                    {isSpanish ? "Título" : "Title"}<span className="text-red-500">*</span>
                </label>
                <Input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="h-[52px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all font-medium px-4 shadow-sm"
                    required
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100 flex gap-1">
                    {isSpanish ? "Intercambio Preferido" : "Preffered Exchange"}<span className="text-red-500">*</span>
                </label>
                <Input 
                    value={exchange}
                    onChange={(e) => setExchange(e.target.value)}
                    className="h-[52px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all font-medium px-4 shadow-sm"
                    required
                />
                <div className="flex flex-wrap gap-2 mt-2">
                    {preferredExchangeTags.map((tag, i) => (
                        <div key={i} className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-border/60 bg-white dark:bg-card text-[11px] font-bold text-slate-600 dark:text-slate-300 shadow-sm capitalize">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100 flex gap-1">
                        {isSpanish ? "Plazo" : "Timeline"}<span className="text-red-500">*</span>
                    </label>
                    <Input 
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="h-[52px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all font-medium px-4 shadow-sm"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100 flex gap-1">
                        {isSpanish ? "Ubicación" : "Location"}<span className="text-red-500">*</span>
                    </label>
                    <Input 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="h-[52px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all font-medium px-4 shadow-sm"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2 relative">
                <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100 flex gap-1">
                    {isSpanish ? "Descripción" : "Description"}<span className="text-red-500">*</span>
                </label>
                <Textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    data-lenis-prevent
                    className="min-h-[400px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[14px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all resize-y p-5 font-medium leading-relaxed shadow-sm text-slate-700 dark:text-slate-200"
                    required
                />
            </div>

            <div className="pt-4">
                <Button type="submit" className="h-[56px] w-[300px] rounded-full bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[16px] shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95">
                    {isSpanish ? "Publicar Anuncio" : "Publish Listing"}
                </Button>
            </div>
        </div>

        {/* Right Column Images */}
        <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Primary Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                 <Image 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1200" 
                    alt="Featured Image" 
                    fill 
                    className="object-cover" 
                 />
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-3 gap-3">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border-2 border-[#cfaa6a]">
                    <Image src="https://images.unsplash.com/photo-1558444458-5cd899262da3?auto=format&fit=crop&q=80&w=400" alt="Thumb 1" fill className="object-cover" />
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <Image src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400" alt="Thumb 2" fill className="object-cover" />
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <Image src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=400" alt="Thumb 3" fill className="object-cover" />
                </div>
            </div>

            {/* Add Image Button */}
            <div className="mt-2">
                <Button type="button" variant="outline" className="w-full h-12 rounded-full border-2 border-slate-300 dark:border-border text-slate-500 font-bold hover:bg-slate-50 dark:hover:bg-muted text-[15px] transition-all">
                    {isSpanish ? "Añadir Imagen" : "Add Image"}
                </Button>
            </div>
            
        </div>
      </form>
    </div>
  );
}
