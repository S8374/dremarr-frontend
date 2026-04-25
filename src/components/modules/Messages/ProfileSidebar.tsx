"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, BadgeCheck, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLanguage } from "@/components/shared/language-provider";

const reviews = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Senior Analyst",
    roleEs: "Analista Senior",
    date: "Jan 20, 2024",
    dateEs: "20 Ene, 2024",
    stars: 5,
    text: "Amazing experience working with this electrician! He quickly diagnosed the issue and explained everything clearly before starting the work. The job was completed efficiently with great attention to detail. Everything is now working perfectly. Highly professional and reliable—definitely recommended!",
    textEs: "¡Increíble experiencia trabajando con este electricista! Diagnosticó rápidamente el problema y explicó todo claramente antes de comenzar el trabajo. El trabajo se completó de manera eficiente con gran atención al detalle. ¡Altamente profesional y confiable!",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Manager",
    roleEs: "Gerente de Marketing",
    date: "Feb 12, 2024",
    dateEs: "12 Feb, 2024",
    stars: 5,
    text: "Excellent service! Very polite and professional. Highly recommend for any home electrical needs.",
    textEs: "¡Excelente servicio! Muy amable y profesional. Recomiendo encarecidamente para cualquier necesidad eléctrica del hogar.",
  },
  {
    id: 3,
    name: "James Anderson",
    role: "Property Owner",
    roleEs: "Dueño de Propiedad",
    date: "Mar 05, 2024",
    dateEs: "05 Mar, 2024",
    stars: 5,
    text: "Reliable and fast. Found and fixed a complex wiring issue in no time. Definitely using this service again.",
    textEs: "Confiable y rápido. Encontró y solucionó un problema de cableado complejo en poco tiempo. Definitivamente usaré este servicio nuevamente.",
  }
];

export function ProfileSidebar() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const labels = {
    role: isSpanish ? "Electricista" : "Electrician",
    verified: isSpanish ? "Verificado" : "Verified",
    gold: isSpanish ? "Membresía Oro" : "Gold Membership",
    bio: isSpanish
      ? "Electricista profesional que brinda servicios eléctricos seguros y confiables para hogares y empresas. Experto en cableado, instalaciones, reparaciones y resolución de problemas. Me concentro en el trabajo de calidad, la seguridad y la satisfacción del cliente."
      : "Professional electrician providing safe and reliable electrical services for homes and businesses. Skilled in wiring, installations, repairs, and troubleshooting. I focus on quality work, safety, and customer satisfaction.",
    location: isSpanish ? "Ubicación" : "Location",
    memberSince: isSpanish ? "Miembro desde" : "Member Since",
    viewProfile: isSpanish ? "Ver Perfil" : "View Profile"
  };

  return (
    <div className="flex flex-col h-full bg-background border-l border-border relative overflow-hidden scrollbar-hide font-sans">
      <div
        data-lenis-prevent
        className="flex-1 overflow-y-auto p-5 scrollbar-hide flex flex-col gap-4"
      >
        {/* Profile Info Card */}
        <div className="bg-card rounded-3xl p-6 border border-border shadow-sm shrink-0">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-16 w-16 border border-border p-0.5 shadow-sm bg-muted/20">
              <AvatarImage src="https://i.pravatar.cc/150?u=killan" alt="Killan James" />
              <AvatarFallback>KJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <h2 className="text-[16px] font-bold text-foreground tracking-tight">Killan James</h2>
                <div className="flex items-center gap-1 shrink-0">
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                  <span className="text-[13px] font-bold text-foreground">5.0</span>
                </div>
              </div>
              <span className="text-[13px] font-bold text-muted-foreground">{labels.role}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            <Badge variant="secondary" className="h-6 gap-1 bg-[#738C88] text-white border-none px-2 rounded-full text-[10px] font-bold shadow-sm hover:bg-[#738C88]">
              <BadgeCheck className="h-3.5 w-3.5 fill-white text-[#738C88]" />
              {labels.verified}
            </Badge>
            <Badge className="h-6 bg-[#cfaa6a] hover:bg-[#b0905a] text-white border-none px-3 rounded-full text-[10px] font-bold shadow-sm">
              {labels.gold}
            </Badge>
            <Badge variant="default" className="h-6 bg-gradient-to-r from-[#f28b5a] to-[#f0502e] hover:from-[#f28b5a] hover:to-[#f0502e] text-white border-none px-2.5 rounded-full text-[10px] font-bold shadow-sm gap-1">
              <Crown className="h-3.5 w-3.5 fill-none text-white stroke-[2.5px]" />
              PRO
            </Badge>
          </div>

          <p className="text-[13px]  leading-[1.6] text-muted-foreground mb-8 tracking-tight">
            {labels.bio}
          </p>

          <div className="grid grid-cols-2 gap-4 pb-2">
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-tight">{labels.location}</span>
              <span className="text-[14px] font-bold text-foreground opacity-80">Miami, FL</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-tight">{labels.memberSince}</span>
              <span className="text-[14px] font-bold text-foreground opacity-80">2/10/2024</span>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="flex flex-col gap-4 mb-4">
          {reviews.slice(0, 1).map((row) => (
            <div key={row.id} className="bg-card rounded-3xl p-6 border border-border shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wide">
                  {isSpanish ? row.dateEs : row.date}
                </span>
                <div className="flex items-center gap-0.5">
                  {[...Array(row.stars)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <h4 className="text-[14px] font-bold text-foreground leading-none mb-1">{row.name}</h4>
                <span className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none">
                  {isSpanish ? row.roleEs : row.role}
                </span>
              </div>

              <p className="text-[12px]  text-muted-foreground leading-[1.6] tracking-tight">
                {isSpanish ? row.textEs : row.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky View Profile Button */}
      <div className="border-t border-border bg-background/80 p-4 backdrop-blur-sm shadow-[0_-8px_30px_rgba(0,0,0,0.02)]">
        <Link href="/profile/1" className="btn-pill-outline h-14 w-full flex items-center justify-center border-border">
          {/* /profile/1 */}
          {labels.viewProfile}
        </Link>
      </div>
    </div>
  );
}

