"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface EditProfileFormProps {
  data: any;
}

export default function EditProfileForm({ data }: EditProfileFormProps) {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  // Naive splitting of Name for the initial state
  const firstNameInit = data.name.split(" ")[0] || "";
  const lastNameInit = data.name.split(" ")[1] || "";

  const [firstName, setFirstName] = useState(firstNameInit);
  const [lastName, setLastName] = useState(lastNameInit);
  const [about, setAbout] = useState(isSpanish ? data.about_es : data.about_en);
  const [skillsStr, setSkillsStr] = useState((isSpanish ? data.skills_es : data.skills_en).join(", "));
  const [location, setLocation] = useState(data.location);

  const skillsList = skillsStr.split(",").map((s: string) => s.trim()).filter((s: string) => s);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== Save Profile Changes ===");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("About:", about);
    console.log("Skills:", skillsList);
    console.log("Location:", location);
    console.log("============================");
  };

  return (
    <div className="flex flex-col gap-8 pb-16">
      
      <div className="flex items-center justify-between">
         <h1 className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">
             {isSpanish ? "Editar perfil" : "Edit profile"}
         </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                  <Avatar className="h-28 w-28 border-4 border-background shadow-sm">
                      <AvatarImage src={data.avatar} alt={data.name} className="object-cover" />
                      <AvatarFallback className="text-xl">{firstName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                          <Button type="button" className="h-10 px-4 rounded-xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-semibold text-[13px] shadow-sm transition-all duration-300">
                             + {isSpanish ? "Cambiar Imagen" : "Change Image"}
                          </Button>
                          <Button type="button" variant="secondary" className="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-muted dark:hover:bg-muted/80 text-slate-700 dark:text-white font-semibold text-[13px] shadow-sm transition-all duration-300">
                             {isSpanish ? "Eliminar Imagen" : "Remove Image"}
                          </Button>
                      </div>
                      <p className="text-[13px] font-medium text-slate-500 max-w-[340px] leading-relaxed">
                          {isSpanish ? "Los perfiles con fotos tienen más coincidencias. Admitimos PNGs y JPGs de menos de 2 MB." : "Profiles with photos get more matches, We support PNGs and JPGs under 2 MB"}
                      </p>
                  </div>
              </div>
              <Button type="submit" className="h-12 px-8 rounded-full bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[15px] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shrink-0 self-start sm:self-auto">
                   {isSpanish ? "Guardar Cambios" : "Save Changes"}
              </Button>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100">
                      {isSpanish ? "Nombre" : "First Name"}
                  </label>
                  <Input 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="h-[52px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all font-medium px-4 shadow-sm"
                  />
              </div>
              <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100">
                      {isSpanish ? "Apellido" : "Last Name"}
                  </label>
                  <Input 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="h-[52px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all font-medium px-4 shadow-sm"
                  />
              </div>
          </div>

          {/* About You */}
          <div className="flex flex-col gap-2">
                <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100">
                    {isSpanish ? "Sobre Ti" : "About You"}
                </label>
                <Textarea 
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder={isSpanish ? "Dile a la gente lo que haces..." : "Tell people what you do, your experience, and what makes your work stand out. Add this before the example..."} 
                    className="min-h-[160px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all resize-y p-5 font-medium leading-relaxed shadow-sm"
                />
          </div>

          {/* Skills & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
               <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100">
                        {isSpanish ? "Tus Habilidades y Servicios" : "Your Skills and Services"}
                    </label>
                    <Input 
                        value={skillsStr}
                        onChange={(e) => setSkillsStr(e.target.value)}
                        placeholder="Electrical wiring, Circuit Installation..."
                        className="h-[52px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all font-medium px-4 shadow-sm mb-2"
                    />
                    <div className="flex flex-wrap gap-2">
                       {skillsList.map((skill: string, index: number) => (
                           <div key={index} className="px-4 py-2 rounded-xl border border-slate-200 dark:border-border/60 bg-white dark:bg-card text-[11px] font-bold text-slate-600 dark:text-slate-300 shadow-sm capitalize">
                             {skill}
                           </div>
                       ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100">
                        {isSpanish ? "¿Dónde estás ubicado?" : "Where are you based?"}
                    </label>
                    <Input 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="h-[52px] w-full rounded-xl bg-white dark:bg-card border-slate-200 dark:border-border text-[15px] focus-visible:ring-[#728e85]/20 focus-visible:border-[#728e85] transition-all font-medium px-4 shadow-sm"
                    />
                </div>
          </div>

          {/* Portfolio Upload */}
          <div className="flex flex-col gap-4 mt-6">
               <label className="text-[14px] font-bold text-slate-900 dark:text-slate-100">
                    {isSpanish ? "Agregar más trabajos" : "Add More Work"}
               </label>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Upload Box */}
                  <div className="relative flex flex-col items-center justify-center w-full min-h-[220px] rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-border/60 bg-[#fbfbfc]/80 dark:bg-card hover:bg-[#f8f9fa] dark:hover:bg-muted/10 transition-colors cursor-pointer group overflow-hidden shadow-sm">
                      <input 
                         type="file" 
                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                      />
                      <div className="flex flex-col items-center justify-center text-center px-6">
                          <UploadCloud className="h-12 w-12 text-slate-400 dark:text-slate-500 mb-3 group-hover:text-[#728e85] transition-colors" />
                          <h4 className="text-[16px] font-bold text-slate-800 dark:text-slate-200 mb-2">
                              {isSpanish ? "Subir archivo" : "Upload file"}
                          </h4>
                          <p className="text-[13px] font-medium text-slate-400 dark:text-slate-500 leading-relaxed">
                             {isSpanish ? "Sube fotos de tu trabajo para generar confianza y destacar." : "Upload photos of your work to build trust and stand out."}
                          </p>
                      </div>
                  </div>

                  {/* Existing Portfolio Grid */}
                  {data.portfolio.slice(0,2).map((imgUrl: string, idx: number) => (
                      <div key={idx} className="relative w-full min-h-[220px] rounded-[2rem] overflow-hidden shadow-sm group">
                         <Image src={imgUrl} alt={`Portfolio ${idx}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                         {idx === 1 && data.portfolio.length >= 3 && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                  <span className="text-4xl font-extrabold text-white tracking-tighter drop-shadow-md">+0{data.portfolio.length}</span>
                              </div>
                          )}
                      </div>
                  ))}
               </div>
          </div>

      </form>
    </div>
  );
}
