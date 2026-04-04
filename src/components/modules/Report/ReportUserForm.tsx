"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud } from "lucide-react";
import React, { useState } from "react";

interface ReportUserFormProps {
  data: any;
}

export default function ReportUserForm({ data }: ReportUserFormProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dump data to console natively
    console.log("=== Report Form Submitted ===");
    console.log("User Reported:", data.name);
    console.log("Issue Title:", issue);
    console.log("Description:", description);
    console.log("File Proof:", file ? file.name : "No file attached");
    console.log("=============================");
    
    // Optional: clear the form
    setIssue("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Left Column: User Context */}
      <div className="lg:col-span-4 flex flex-col pt-2">
        <h1 className="text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-8">
            {isSpanish ? "Reportar a este usuario" : "Report This User"}
        </h1>
        
        <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 shadow-sm">
              <AvatarImage src={data.avatar} alt={data.name} />
              <AvatarFallback>{data.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-[17px] font-bold text-slate-900 dark:text-white tracking-tight">{data.name}</h2>
              <span className="text-[13px] font-medium text-slate-500 tracking-tight">
                {isSpanish ? data.title_es : data.title_en}
              </span>
            </div>
        </div>
      </div>

      {/* Right Column: Form Card */}
      <div className="lg:col-span-8 flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-100 dark:border-border/40 bg-white dark:bg-card p-8 shadow-sm flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-slate-800 dark:text-slate-200">
                      {isSpanish ? "¿Cuál es el problema?" : "What's the issue?"}
                  </label>
                  <Input 
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      placeholder={isSpanish ? "Ingresa tu problema aquí..." : "Enter your issue here..."} 
                      className="h-12 w-full rounded-xl bg-white dark:bg-background border-slate-200 dark:border-border text-[15px] placeholder:text-slate-400 focus-visible:ring-0 transition-all font-medium"
                      required
                  />
              </div>

              <div className="flex flex-col gap-2">
                   <label className="text-[14px] font-semibold text-slate-800 dark:text-slate-200">
                      {isSpanish ? "Cuéntanos qué pasó" : "Tell us what happened"}
                  </label>
                  <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={isSpanish ? "por favor describe tu problema en detalle..." : "please describe your issue in detail..."} 
                      className="min-h-[140px] w-full rounded-xl bg-white dark:bg-background border-slate-200 dark:border-border text-[15px] placeholder:text-slate-400 focus-visible:ring-0 transition-all resize-none p-4 font-medium"
                      required
                  />
              </div>

              <div className="flex flex-col gap-2">
                   <label className="text-[14px] font-semibold text-slate-800 dark:text-slate-200">
                      {isSpanish ? "Subir Prueba" : "Upload Proof"}
                  </label>
                  
                  <div className="relative flex flex-col items-center justify-center w-full h-[160px] rounded-2xl border-2 border-dashed border-slate-200 dark:border-border/60 bg-[#fbfbfc] dark:bg-background/50 hover:bg-[#f8f9fa] dark:hover:bg-muted/10 transition-colors cursor-pointer group overflow-hidden">
                      <input 
                         type="file" 
                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                         onChange={handleFileChange}
                      />
                      <div className="flex flex-col items-center justify-center text-center px-4">
                          <UploadCloud className="h-10 w-10 text-slate-400 dark:text-slate-500 mb-2 group-hover:text-[#728e85] transition-colors" />
                          <h4 className="text-[15px] font-bold text-slate-800 dark:text-slate-200 mb-1">
                              {file ? file.name : (isSpanish ? "Subir archivo" : "Upload file")}
                          </h4>
                          <p className="text-[12px] font-medium text-slate-400 dark:text-slate-500">
                             {isSpanish ? "Agrega cualquier prueba para ayudarnos a revisar tu reporte más rápido" : "Add any proof to help us review your report faster"}
                          </p>
                      </div>
                  </div>
              </div>

              <div className="pt-2">
                  <Button type="submit" className="h-[52px] w-full rounded-2xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[16px] transition-all duration-300 shadow-sm active:scale-95">
                      {isSpanish ? "Enviar Reporte" : "Submit Report"}
                  </Button>
              </div>

          </form>

          <p className="text-[12px] italic text-slate-500 dark:text-slate-400 font-medium px-2">
              {isSpanish 
                ? "Tu reporte será revisado por nuestro equipo. Nos tomamos estos asuntos en serio y haremos un seguimiento si es necesario." 
                : "Your report will be reviewed by our team. We take these matters seriously and will follow up if needed."}
          </p>
      </div>
    </div>
  );
}
