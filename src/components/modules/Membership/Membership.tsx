"use client";

import { useState } from "react";
import { Check, X, PlusCircle, MinusCircle } from "lucide-react";
import { useLanguage } from "@/components/shared/language-provider";
import { Button } from "@/components/ui/button";

const TRANSLATIONS = {
  en: {
    title: "Choose Your Membership",
    subtitle: "Start free and upgrade anytime to unlock more features and grow your barter network",
    monthly: "Monthly",
    yearly: "Yearly",
    save20: "save 20%",
    mostPopular: "Most Popular",
    perMonth: "per month",
    perYear: "per year",
    faqsTitle1: "Frequently",
    faqsTitle2: "Asked Questions",
    silverTitle: "Silver",
    goldTitle: "Gold",
    platinumTitle: "Platinum",
    trial14: "14-Days Free Trial",
    trialDesc: "Then automatically renews at $9.99/month unless canceled before trial ends.",
    btnSilver: "Join Silver",
    btnGold: "Start 14-Day Free Trial",
    btnPlatinum: "Join Platinum",
    billingDesc: "Full access with monthly billing.",
    silverFeatures: [
      "Unlimited posts and responses",
      "Full message board access",
      "Unlimited messaging",
      "Upload verification documents",
      "Eligible for all badges",
      "Leave and receive reviews",
      "Priority search ranking",
      "Featured member status",
      "Premium support",
      "Early access to new features"
    ],
    goldFeatures: [
      "Post up to 5 listings per month",
      "Unlimited listing responses",
      "Full message board access",
      "Unlimited private messaging",
      "Upload licenses and certifications",
      "Eligible for verification badges",
      "Leave and receive reviews",
      "Higher search visibility",
      "Priority support",
      "Access to exclusive webinars and workshops"
    ],
    goldMissed: "Featured member status",
    platinumFeatures: [
      "Unlimited posts and responses",
      "Full message board access",
      "Unlimited messaging",
      "Upload verification documents",
      "Eligible for all badges",
      "Leave and receive reviews",
      "Priority search ranking",
      "Featured member status",
      "Premium support",
      "Early access to new features"
    ],
    faqs: [
      {
        q: "What do I get with the membership?",
        a: "You get full access to all premium features, exclusive content, and regular updates. Our subscription is designed to help you get the most value with continuous improvements and priority support."
      },
      {
        q: "Can I cancel my subscription anytime?",
        a: "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees."
      },
      {
        q: "Do you offer a free trial before subscribing?",
        a: "Yes! Our Gold membership comes with a 14-day free trial so you can explore all features before committing."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, PayPal, and Apple Pay."
      }
    ]
  },
  es: {
    title: "Elige tu Membresía",
    subtitle: "Comienza gratis y mejora en cualquier momento para desbloquear más funciones y hacer crecer tu red de trueque",
    monthly: "Mensual",
    yearly: "Anual",
    save20: "Ahorra 20%",
    mostPopular: "Más Popular",
    perMonth: "por mes",
    perYear: "por año",
    faqsTitle1: "Preguntas",
    faqsTitle2: "Frecuentes",
    silverTitle: "Plata",
    goldTitle: "Oro",
    platinumTitle: "Platino",
    trial14: "14 Días de Prueba Gratis",
    trialDesc: "Luego se renueva automáticamente a $9.99/mes a menos que se cancele antes.",
    btnSilver: "Unirse a Plata",
    btnGold: "Iniciar Prueba de 14 Días",
    btnPlatinum: "Unirse a Platino",
    billingDesc: "Acceso total con facturación mensual.",
    silverFeatures: [
      "Publicaciones y respuestas ilimitadas",
      "Acceso completo al foro",
      "Mensajes ilimitados",
      "Subir documentos de verificación",
      "Elegible para todas las insignias",
      "Dejar y recibir reseñas",
      "Calificación de búsqueda prioritaria",
      "Estado de miembro destacado",
      "Soporte premium",
      "Acceso anticipado a nuevas funciones"
    ],
    goldFeatures: [
      "Publicar hasta 5 anuncios por mes",
      "Respuestas ilimitadas a anuncios",
      "Acceso completo al foro",
      "Mensajería privada ilimitada",
      "Subir licencias y certificaciones",
      "Elegible para insignias de verificación",
      "Dejar y recibir reseñas",
      "Mayor visibilidad en búsquedas",
      "Soporte prioritario",
      "Acceso a seminarios y talleres exclusivos"
    ],
    goldMissed: "Estado de miembro destacado",
    platinumFeatures: [
      "Publicaciones y respuestas ilimitadas",
      "Acceso completo al foro",
      "Mensajes ilimitados",
      "Subir documentos de verificación",
      "Elegible para todas las insignias",
      "Dejar y recibir reseñas",
      "Calificación de búsqueda prioritaria",
      "Estado de miembro destacado",
      "Soporte premium",
      "Acceso anticipado a nuevas funciones"
    ],
    faqs: [
      {
        q: "¿Qué obtengo con la membresía?",
        a: "Obtienes acceso completo a todas las funciones premium, contenido exclusivo y actualizaciones periódicas. Nuestra suscripción está diseñada para ayudarte a obtener el mayor valor posible."
      },
      {
        q: "¿Puedo cancelar mi suscripción en cualquier momento?",
        a: "Sí, puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. No hay cargos por cancelación."
      },
      {
        q: "¿Ofrecen una prueba gratuita antes de suscribirse?",
        a: "¡Sí! Nuestra membresía Oro incluye una prueba gratuita de 14 días para que puedas explorar todas las funciones antes de comprometerte."
      },
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Aceptamos todas las principales tarjetas de crédito, PayPal y Apple Pay."
      }
    ]
  }
};

export default function Membership() {
  const { language } = useLanguage();
  const langIndex = language === "es" ? "es" : "en";
  const t = TRANSLATIONS[langIndex];

  const [isYearly, setIsYearly] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground py-16 md:py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-[34px] md:text-[42px] font-semibold mb-3 heading text-[#1a1c21] dark:text-white tracking-tight">
          {t.title}
        </h1>
        <p className="text-[#6b7280] dark:text-gray-400 max-w-2xl text-[15px] mb-8 font-medium">
          {t.subtitle}
        </p>

        {/* Toggle */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-sm font-bold mb-16 mt-2 max-w-[500px] w-full">
          <div className="flex justify-end">
            <span className={!isYearly ? "text-[#1a1c21] dark:text-white" : "text-[#1a1c21] dark:text-white"}>
              {t.monthly}
            </span>
          </div>
          <div
            className={`w-[48px] h-[24px] rounded-full cursor-pointer flex items-center px-1 transition-colors bg-[#cbd1d4] dark:bg-gray-600`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${isYearly ? "translate-x-6" : ""
                }`}
            />
          </div>
          <div className="flex items-center gap-3 justify-start">
            <span className={isYearly ? "text-[#1a1c21] dark:text-white" : "text-[#1a1c21] dark:text-white"}>
              {t.yearly}
            </span>
            <span className="bg-[#cdb07c] text-white text-[11px] px-3 py-1 rounded-full font-bold shadow-sm whitespace-nowrap">
              {t.save20}
            </span>
          </div>
        </div>

        {/* Pricing Cards Layout using Flex */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 md:gap-8 w-full max-w-[1100px] mb-24">

          {/* Silver */}
          <div className="bg-[#f7f8f9] dark:bg-zinc-900 rounded-[24px] p-8 w-full lg:w-[340px] flex flex-col text-left my-auto">
            <h3 className="text-[20px] font-semibold mb-2 text-[#1a1c21] dark:text-white">{t.silverTitle}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-[38px] font-bold text-[#1a1c21] dark:text-white tracking-[-0.04em]">{isYearly ? "$191.90" : "$19.99"}</span>
              <span className="text-[#6b7280] dark:text-gray-400 text-[13px]">{t.perMonth}</span>
            </div>
            <p className="text-[13px] text-[#2d3339] dark:text-gray-300 mb-6 font-medium">
              {t.billingDesc}
            </p>
            <Button variant="outline" className="w-full rounded-full h-[46px] text-[#67877e] dark:text-[#8cb3a7] border border-[#67877e] hover:bg-[#67877e]/10 bg-transparent mb-8 font-semibold text-[14px]">
              {t.btnSilver}
            </Button>
            <ul className="space-y-[14px] text-[13px]">
              {t.silverFeatures.map((feature, i) => (
                <li key={i} className="flex gap-3 text-[#2d3339] dark:text-gray-300 items-start">
                  <Check className="w-[18px] h-[18px] text-[#4caf50] shrink-0 mt-[1px]" strokeWidth={2.5} />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gold (Most Popular) */}
          <div className="bg-white dark:bg-zinc-950 border-[1.5px] border-[#cdb07c] rounded-[24px] p-8 md:px-10 md:py-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] w-full lg:w-[370px] flex flex-col text-left relative z-10 lg:-mx-2 lg:-my-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d2b17a] text-white text-[11px] px-5 py-1.5 rounded-full whitespace-nowrap font-medium">
              {t.mostPopular}
            </div>
            <h3 className="text-[20px] font-semibold mb-2 text-[#1a1c21] dark:text-white">{t.goldTitle}</h3>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-[38px] font-bold text-[#1a1c21] dark:text-white tracking-[-0.04em]">{isYearly ? "$95.90" : "$9.99"}</span>
              <span className="text-[#6b7280] dark:text-gray-400 text-[13px]">{t.perMonth}</span>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-[15px] text-[#1a1c21] dark:text-white mb-[5px]">{t.trial14}</p>
              <p className="text-[13px] text-[#2d3339] dark:text-gray-300 leading-snug">
                {t.trialDesc}
              </p>
            </div>
            <Button className="w-full rounded-full h-[46px] bg-[#d2b17a] hover:bg-[#b89b6b] text-white mb-8 font-semibold text-[14px] border-0 rounded-full">
              {t.btnGold}
            </Button>
            <ul className="space-y-[14px] text-[13px]">
              {t.goldFeatures.map((feature, i) => (
                <li key={i} className="flex gap-3 text-[#2d3339] dark:text-gray-300 items-start">
                  <Check className="w-[18px] h-[18px] text-[#4caf50] shrink-0 mt-[1px]" strokeWidth={2.5} />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
              <li className="flex gap-3 text-[#9ca3af] dark:text-gray-500 opacity-90 items-start">
                <X className="w-[18px] h-[18px] shrink-0 mt-[1px]" strokeWidth={2} />
                <span className="leading-tight">{t.goldMissed}</span>
              </li>
            </ul>
          </div>

          {/* Platinum */}
          <div className="bg-[#f7f8f9] dark:bg-zinc-900 rounded-[24px] p-8 w-full lg:w-[340px] flex flex-col text-left my-auto">
            <h3 className="text-[20px] font-semibold mb-2 text-[#1a1c21] dark:text-white">{t.platinumTitle}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-[38px] font-bold text-[#1a1c21] dark:text-white tracking-[-0.04em]">{isYearly ? "$191.90" : "$19.99"}</span>
              <span className="text-[#6b7280] dark:text-gray-400 text-[13px]">{t.perMonth}</span>
            </div>
            <p className="text-[13px] text-[#2d3339] dark:text-gray-300 mb-6 font-medium">
              {t.billingDesc}
            </p>
            <Button variant="outline" className="w-full rounded-full h-[46px] text-[#67877e] dark:text-[#8cb3a7] border border-[#67877e] hover:bg-[#67877e]/10 bg-transparent mb-8 font-semibold text-[14px]">
              {t.btnPlatinum}
            </Button>
            <ul className="space-y-[14px] text-[13px]">
              {t.platinumFeatures.map((feature, i) => (
                <li key={i} className="flex gap-3 text-[#2d3339] dark:text-gray-300 items-start">
                  <Check className="w-[18px] h-[18px] text-[#4caf50] shrink-0 mt-[1px]" strokeWidth={2.5} />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* FAQs */}
        <div className="w-full  mx-auto pt-16">
          <h2 className={`mb-12 text-center font-semibold heading ${language === "es" ? "text-3xl lg:text-[34px]" : "text-3xl lg:text-[34px]"}`}>
            <span className="text-[#67877e]">{t.faqsTitle1}</span> <span className="text-[#1a1c21] dark:text-white">{t.faqsTitle2}</span>
          </h2>

          <div className="space-y-4  mx-auto">
            {t.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#f7f8f9] dark:bg-zinc-900 border-none rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-semibold text-[16px] text-[#1a1c21] dark:text-white pr-8">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <MinusCircle className="w-6 h-6 text-[#6b7280] dark:text-gray-400 shrink-0" strokeWidth={1.5} />
                    ) : (
                      <PlusCircle className="w-6 h-6 text-[#6b7280] dark:text-gray-400 shrink-0" strokeWidth={1.5} />
                    )}
                  </button>
                  <div
                    className={`px-6 md:px-8 text-[#6b7280] dark:text-gray-400 text-[14px] md:text-[15px] leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[200px] pb-6 md:pb-8 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
