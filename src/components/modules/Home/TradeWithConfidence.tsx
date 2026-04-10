"use client";

import { ShieldCheck, MessageCircle, Star, Flag } from "lucide-react";
import { useLanguage } from "@/components/shared/language-provider";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Badges",
    titleEs: "Insignias verificadas",
    description: "Members upload certifications and licenses for verification, earning trust badges.",
    descriptionEs: "Los miembros suben certificaciones y licencias para verificación, obteniendo insignias de confianza.",
  },
  {
    icon: MessageCircle,
    title: "Secure Messaging",
    titleEs: "Mensajería segura",
    description: "Private, encrypted conversations keep your negotiations safe and organized.",
    descriptionEs: "Las conversaciones privadas y cifradas mantienen tus negociaciones seguras y organizadas.",
  },
  {
    icon: Star,
    title: "Review System",
    titleEs: "Sistema de reseñas",
    description: "Rate and review members after each exchange to build community trust.",
    descriptionEs: "Califica y reseña a los miembros después de cada intercambio para fortalecer la confianza de la comunidad.",
  },
  {
    icon: Flag,
    title: "Report Tools",
    titleEs: "Herramientas de reporte",
    description: "Easily report suspicious activity or inappropriate behavior to our team.",
    descriptionEs: "Reporta fácilmente actividades sospechosas o comportamientos inapropiados a nuestro equipo.",
  },
];

export default function TradeWithConfidence() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <section className="bg-[#212927] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="container rounded-none py-12 sm:py-14 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.2fr] lg:gap-14">
          <div className="space-y-7">
            <h2 className="max-w-[360px] font-semibold leading-[1.07] tracking-[-0.02em] text-white text-4xl sm:text-5xl lg:text-[58px]">
              {language === "es" ? (
                <>
                  Intercambia con
                  <br />
                  confianza
                </>
              ) : (
                <>
                  Trade with
                  <br />
                  Confidence
                </>
              )}
            </h2>

            <p className="max-w-[420px] leading-relaxed text-[#c4cbce] text-base sm:text-[20px]">
              {language === "es"
                ? "Nuestro sistema de verificación, plataforma de reseñas y herramientas de seguridad garantizan intercambios seguros y transparentes."
                : "Our verification system, review platform, and safety tools ensure every exchange is secure and transparent."}
            </p>

            <button
              type="button"
              className="inline-flex rounded-full border border-[#cc9f53] px-7 py-2.5 text-sm font-semibold text-[#cc9f53] transition-colors hover:bg-[#cc9f53]/12"
            >
              {language === "es" ? "Ver guías de seguridad" : "View safety Guidelines"}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#445354] p-6 sm:p-7"
              >
                <div className="mb-6 text-[#d6a95a]">
                  <feature.icon className="h-6 w-6 stroke-[1.8]" />
                </div>

                <h3 className="mb-3 text-[24px] font-semibold text-white sm:text-[30px]">{isSpanish ? feature.titleEs : feature.title}</h3>
                <p className="text-[16px] leading-[1.35] text-[#d0d5d7] sm:text-[20px]">
                  {isSpanish ? feature.descriptionEs : feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
