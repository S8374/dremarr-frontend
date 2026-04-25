"use client";

import { useState } from "react";
import { Check, X, Plus, Minus } from "lucide-react";
import { useLanguage } from "@/components/shared/language-provider";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
    silverDesc: "Perfect for individuals starting out",
    platinumDesc: "Full access with monthly billing.",
    silverFeatures: [
      "1 listing per month",
      "Basic profile",
      "Full message board access",
      "Private messaging",
      "Technical support"
    ],
    goldFeatures: [
      "5 listings per month",
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
    platinumFeatures: [
      "All items listed above",
      "Eligible for all badges",
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
        a: "We accept all major credit cards, PayPal"
      }
    ]
  },
  es: {
    title: "Elige tu Membresía",
    subtitle: "Comienza gratis y mejora en cualquier momento para desbloquear más funciones y hacer crecer tu red de trueque",
    monthly: "Mensual",
    yearly: "Anual",
    save20: "ahorra 20%",
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
    silverDesc: "Perfecto para personas que están comenzando",
    platinumDesc: "Acceso total con facturación mensual.",
    silverFeatures: [
      "1 anuncio por mes",
      "Perfil básico",
      "Acceso completo al foro",
      "Mensajería privada",
      "Soporte técnico"
    ],
    goldFeatures: [
      "5 anuncios por mes",
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
    platinumFeatures: [
      "Todos los artículos mencionados anteriormente",
      "Elegible para todas las insignias",
      "Clasificación de búsqueda prioritaria",
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
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
    <div className="min-h-screen bg-white dark:bg-black text-foreground py-16 md:py-24 overflow-hidden">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container flex flex-col items-center text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[34px] md:text-[42px] font-semibold mb-3 heading text-[#1a1c21] dark:text-white tracking-tight"
        >
          {t.title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-[#6b7280] dark:text-gray-400 max-w-2xl text-[15px] mb-8 font-medium"
        >
          {t.subtitle}
        </motion.p>

        {/* Toggle */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-sm font-bold mb-16 mt-2 max-w-[500px] w-full"
        >
          <div className="flex justify-end">
            <span className={!isYearly ? "text-[#1a1c21] dark:text-white" : "text-[#71717a]"}>
              {t.monthly}
            </span>
          </div>
          <div
            className={`w-[48px] h-[24px] rounded-full cursor-pointer flex items-center px-1 transition-colors ${isYearly ? "bg-[#cdb07c]" : "bg-[#cbd1d4]"} dark:bg-gray-600`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`w-4 h-4 bg-white rounded-full shadow-sm ${isYearly ? "translate-x-6" : ""}`}
            />
          </div>
          <div className="flex items-center gap-3 justify-start">
            <span className={isYearly ? "text-[#1a1c21] dark:text-white" : "text-[#71717a]"}>
              {t.yearly}
            </span>
            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
              className="bg-[#cdb07c] text-white text-[11px] px-3 py-1 rounded-full font-bold shadow-sm whitespace-nowrap"
            >
              {t.save20}
            </motion.span>
          </div>
        </motion.div>

        {/* Pricing Cards Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 md:gap-8 w-full max-w-[1100px] mb-24 px-4">

          {/* Silver */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#f7f8f9] dark:bg-zinc-900 rounded-3xl p-8 w-full lg:w-[340px] flex flex-col text-left my-auto border border-transparent hover:border-[#67877e]/20 transition-colors"
          >
            <h3 className="text-[20px] font-semibold mb-2 text-[#1a1c21] dark:text-white">{t.silverTitle}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={isYearly ? "yearly" : "monthly"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[38px] font-bold text-[#1a1c21] dark:text-white tracking-[-0.04em]"
                >
                  {isYearly ? "$3.99" : "$4.99"}
                </motion.span>
              </AnimatePresence>
              <div className="flex flex-col">
                <span className="text-[#6b7280] dark:text-gray-400 text-[13px]">{t.perMonth}</span>
                {isYearly && (
                  <span className="text-[10px] text-[#4caf50] font-bold">($47.90 {t.perYear})</span>
                )}
              </div>
            </div>
            <p className="text-[13px] text-[#2d3339] dark:text-gray-300 mb-6 font-medium">
              {t.silverDesc}
            </p>
            <Button variant="outline" className="w-full rounded-full h-[46px] text-[#67877e] dark:text-[#8cb3a7] border border-[#67877e] hover:bg-[#67877e] hover:text-white transition-all bg-transparent mb-8 font-semibold text-[14px]">
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
          </motion.div>

          {/* Gold (Most Popular) */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white dark:bg-zinc-950 border-[2px] border-[#cdb07c] rounded-[24px] p-8 md:px-10 md:py-10 shadow-[0_20px_50px_rgba(205,176,124,0.15)] w-full lg:w-[370px] flex flex-col text-left relative z-10 lg:-mx-2 lg:-my-8"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d2b17a] text-white text-[11px] px-5 py-1.5 rounded-full whitespace-nowrap font-medium shadow-lg">
              {t.mostPopular}
            </div>
            <h3 className="text-[20px] font-semibold mb-2 text-[#1a1c21] dark:text-white">{t.goldTitle}</h3>
            <div className="flex items-baseline gap-1 mb-3">
              <AnimatePresence mode="wait">
                <motion.span
                  key={isYearly ? "yearly" : "monthly"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[38px] font-bold text-[#1a1c21] dark:text-white tracking-[-0.04em]"
                >
                  {isYearly ? "$7.99" : "$9.99"}
                </motion.span>
              </AnimatePresence>
              <div className="flex flex-col">
                <span className="text-[#6b7280] dark:text-gray-400 text-[13px]">{t.perMonth}</span>
                {isYearly && (
                  <span className="text-[10px] text-[#4caf50] font-bold">($95.90 {t.perYear})</span>
                )}
              </div>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-[15px] text-[#1a1c21] dark:text-white mb-[5px]">{t.trial14}</p>
              <p className="text-[13px] text-[#2d3339] dark:text-gray-300 leading-snug">
                {t.trialDesc}
              </p>
            </div>
            <Button className="w-full rounded-full h-[46px] bg-[#d2b17a] hover:bg-[#b89b6b] text-white mb-8 font-semibold text-[14px] border-0 shadow-md hover:shadow-lg transition-all">
              {t.btnGold}
            </Button>
            <ul className="space-y-[14px] text-[13px]">
              {t.goldFeatures.map((feature, i) => (
                <li key={i} className="flex gap-3 text-[#2d3339] dark:text-gray-300 items-start">
                  <Check className="w-[18px] h-[18px] text-[#4caf50] shrink-0 mt-[1px]" strokeWidth={2.5} />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Platinum */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#f7f8f9] dark:bg-zinc-900 rounded-[24px] p-8 w-full lg:w-[340px] flex flex-col text-left my-auto border border-transparent hover:border-[#67877e]/20 transition-colors"
          >
            <h3 className="text-[20px] font-semibold mb-2 text-[#1a1c21] dark:text-white">{t.platinumTitle}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={isYearly ? "yearly" : "monthly"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[38px] font-bold text-[#1a1c21] dark:text-white tracking-[-0.04em]"
                >
                  {isYearly ? "$15.99" : "$19.99"}
                </motion.span>
              </AnimatePresence>
              <div className="flex flex-col">
                <span className="text-[#6b7280] dark:text-gray-400 text-[13px]">{t.perMonth}</span>
                {isYearly && (
                  <span className="text-[10px] text-[#4caf50] font-bold">($191.90 {t.perYear})</span>
                )}
              </div>
            </div>
            <p className="text-[13px] text-[#2d3339] dark:text-gray-300 mb-6 font-medium">
              {t.platinumDesc}
            </p>
            <Button variant="outline" className="w-full rounded-full h-[46px] text-[#67877e] dark:text-[#8cb3a7] border border-[#67877e] hover:bg-[#67877e] hover:text-white transition-all bg-transparent mb-8 font-semibold text-[14px]">
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
          </motion.div>

        </div>

        {/* FAQs */}
        <div className="w-full mx-auto pt-16">
          <h2 className={`mb-10 text-center font-semibold text-foreground sm:mb-12 ${language === "es" ? "text-[24px] sm:text-[36px]" : "text-2xl sm:text-4xl"}`}>
            <span className="text-[#738C88]">{language === "es" ? "Preguntas" : "Frequently"}</span> {language === "es" ? "frecuentes" : "Asked Questions"}
          </h2>

          <div className="space-y-4 mx-auto text-left w-full">
            {t.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="group flex w-full items-center justify-between px-5 py-5 text-left sm:px-7 sm:py-6 focus:outline-none"
                  >
                    <span className={`pr-6 font-medium leading-tight text-foreground sm:pr-8 ${language === "es" ? "text-[15px] sm:text-[22px]" : "text-[17px] sm:text-[28px]"}`}>
                      {faq.q}
                    </span>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-primary/50">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className={`px-5 pb-6 leading-relaxed text-muted-foreground sm:px-7 sm:pb-8 ${language === "es" ? "text-[14px] sm:text-[16px]" : "text-[15px] sm:text-[20px]"}`}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </motion.div>
    </div>
  );
}
