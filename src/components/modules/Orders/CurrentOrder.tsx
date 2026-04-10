"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useLanguage } from "@/components/shared/language-provider";

export default function CurrentOrder() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

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

  const labels = {
    title: isSpanish ? "Pedidos" : "Orders",
    subtitle: isSpanish ? "Mantente actualizado sobre el estado de tu pedido aquí" : "Stay updated on your order status here!",
    orderDetails: isSpanish ? "Detalles del pedido" : "Order Details",
    you: isSpanish ? "Tú" : "You",
    exchangeWith: isSpanish ? "Intercambio con" : "Exchange with",
    exchangeSummary: isSpanish ? "Resumen del intercambio" : "Exchange Summary",
    whatYouBring: isSpanish ? "Lo que aportas" : "What You Bring To The Table",
    whatYouGet: isSpanish ? "Lo que recibes a cambio" : "What You Get In Return",
    uploadProof: isSpanish ? "Subir comprobante del trabajo realizado" : "Upload proof for deliver this work",
    dragDrop: isSpanish ? "Arrastra y suelta el comprobante de finalización del trabajo aquí" : "Drag and drop proof of work completion here",
    browse: isSpanish ? "explorar." : "browse.",
    deliver: isSpanish ? "Entregar oferta" : "Deliver your offer",
    bringDesc: isSpanish 
      ? "Comparte la habilidad o servicio que ofreces en este intercambio. Sé claro sobre lo que puedes hacer y el nivel de calidad que alguien puede esperar. Si tienes experiencia, certificaciones o ejemplos, inclúyelos para generar confianza. Cuanto más específico seas, más fácil será encontrar la pareja adecuada. Esta es tu oportunidad de mostrar tu valor."
      : "Share the skill or service you're offering in this trade. Be clear about what you can do and the level of quality someone can expect. If you have experience, certifications, or examples, include that to build trust. The more specific you are, the easier it is to find the right match. This is your chance to show your value.",
    returnDesc: isSpanish
      ? "Describe lo que buscas recibir de este intercambio. Sé franco sobre tus expectativas para que ambas partes estén alineadas desde el principio. Ya sea un servicio, ayuda con un proyecto o algo específico, la claridad ayuda a evitar malentendidos. Un buen intercambio debe sentirse justo y beneficioso para ambas personas. El objetivo es un intercambio fluido y mutuamente valioso."
      : "Describe what you're looking to receive from this exchange. Be upfront about your expectations so both sides are aligned from the start. Whether it's a service, project help, or something specific, clarity helps avoid misunderstandings. A good trade should feel fair and beneficial to both people. The goal is a smooth, mutually valuable exchange."
  };

  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-[30px] font-bold text-slate-900 dark:text-white tracking-tight heading">
          {labels.title}
        </h1>
        <p className="text-[15px] font-bold text-slate-400 mt-1">
          {labels.subtitle}
        </p>
      </div>

      {/* Primary Card - Order Details */}
      <div className="rounded-[24px] bg-[#f2f4f5] dark:bg-card/50 p-10 flex flex-col gap-8">
        <div>
           <h2 className="text-[17px] font-bold text-slate-800 dark:text-white mb-6">
             {labels.orderDetails}
           </h2>
           <div className="bg-white dark:bg-card h-[60px] flex items-center px-6 rounded-xl border border-slate-100 dark:border-border/40 shadow-sm w-fit gap-2">
              <span className="text-[14px] font-bold text-slate-900 dark:text-white">{labels.you}</span>
              <span className="text-[14px] font-bold text-slate-400">{labels.exchangeWith}</span>
              <div className="flex items-center gap-3">
                 <Avatar className="h-8 w-8">
                    <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="Killan" />
                    <AvatarFallback>KJ</AvatarFallback>
                 </Avatar>
                 <span className="text-[14px] font-bold text-slate-800 dark:text-white">Killan James</span>
              </div>
           </div>
        </div>

        <div>
            <h2 className="text-[17px] font-bold text-slate-800 dark:text-white mb-6">
                {labels.exchangeSummary}
            </h2>
            <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-4">
                    <div className="bg-white dark:bg-card h-[46px] flex items-center px-8 rounded-xl border border-slate-100 dark:border-border/40 shadow-sm min-w-[200px]">
                        <span className="text-[14px] font-bold text-slate-500">{isSpanish ? "En 3 días" : "Within 3 Days"}</span>
                    </div>
                    <div className="bg-white dark:bg-card h-[46px] flex items-center px-8 rounded-xl border border-slate-100 dark:border-border/40 shadow-sm min-w-[200px]">
                        <span className="text-[14px] font-bold text-slate-500">Miami, FL</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-card p-10 rounded-[20px] border border-slate-100 dark:border-border/40 shadow-sm flex flex-col gap-6 min-h-[400px]">
                        <h4 className="text-[18px] font-bold text-slate-800 dark:text-white pb-6 border-b border-slate-50 dark:border-border/20">
                            {labels.whatYouBring}
                        </h4>
                        <p className="text-[14px] font-bold text-slate-400 leading-relaxed">
                            {labels.bringDesc}
                        </p>
                    </div>
                    <div className="bg-white dark:bg-card p-10 rounded-[20px] border border-slate-100 dark:border-border/40 shadow-sm flex flex-col gap-6 min-h-[400px]">
                        <h4 className="text-[18px] font-bold text-slate-800 dark:text-white pb-6 border-b border-slate-50 dark:border-border/20">
                            {labels.whatYouGet}
                        </h4>
                        <p className="text-[14px] font-bold text-slate-400 leading-relaxed">
                            {labels.returnDesc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Proof Section */}
      <div className="rounded-[24px] bg-[#f2f4f5] dark:bg-card/50 p-10 flex flex-col gap-8">
         <h2 className="text-[17px] font-bold text-slate-800 dark:text-white">
            {labels.uploadProof}
         </h2>
         <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-card p-4 rounded-[18px] border border-slate-100 dark:border-border/40 shadow-sm flex items-center gap-6">
                <div className="relative h-[110px] w-[150px] shrink-0 rounded-[14px] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400"
                        alt="Plumber"
                        fill
                        className="object-cover"
                    />
                </div>
                <p className="text-[17px] font-bold text-slate-800 dark:text-white">
                    I will fix plumbing issues and install pipes professionally
                </p>
            </div>

            <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative flex flex-col items-center justify-center w-full min-h-[260px] rounded-[24px] border-2 border-dashed transition-all cursor-pointer ${
                dragging
                    ? "border-[#728e85] bg-[#728e85]/5"
                    : "border-slate-300 bg-white dark:bg-card dark:border-border/60"
                }`}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                />
                <div className="p-4 bg-slate-50 dark:bg-muted/10 rounded-full mb-6">
                     <UploadCloud className="h-14 w-14 text-slate-400" />
                </div>
                {file ? (
                <p className="text-[15px] font-bold text-[#728e85]">{file.name}</p>
                ) : (
                <div className="text-center">
                    <p className="text-[17px] font-bold text-slate-400">
                        {labels.dragDrop}
                    </p>
                    <p className="text-[17px] font-bold text-slate-400">
                        {isSpanish ? "o " : "or "}<span className="text-[#728e85]">{labels.browse}</span>
                    </p>
                </div>
                )}
            </div>

            <div className="flex justify-end pt-4">
                <Button
                    onClick={handleDeliver}
                    className="h-12 px-8 rounded-full bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[15px] shadow-sm transition-all"
                >
                    {labels.deliver}
                </Button>
            </div>
         </div>
      </div>
    </div>
  );
}
