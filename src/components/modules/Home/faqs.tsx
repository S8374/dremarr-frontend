"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/components/shared/language-provider";

const faqs = [
  {
    question: "What is this platform about?",
    questionEs: "De qué trata esta plataforma?",
    answer:
      "This platform is a skill-exchange marketplace where users can offer their services and receive other services in return without using money. It simply connects people who agree on the value of their work and want to trade fairly.",
    answerEs:
      "Esta plataforma es un mercado de intercambio de habilidades donde los usuarios pueden ofrecer sus servicios y recibir otros a cambio sin usar dinero. Solo conecta a personas que acuerdan el valor de su trabajo y quieren intercambiar de forma justa.",
  },
  {
    question: "Do I need to pay to exchange services?",
    questionEs: "Tengo que pagar para intercambiar servicios?",
    answer:
      "No, you don't need to pay any money. This is a pure skill-barter platform. You exchange your skills/services directly with other members.",
    answerEs:
      "No, no necesitas pagar dinero. Esta es una plataforma de trueque de habilidades. Intercambias tus servicios directamente con otros miembros.",
  },
  {
    question: "Who can join the platform?",
    questionEs: "Quién puede unirse a la plataforma?",
    answer:
      "Anyone who has a skill to offer or is willing to exchange services can join. Whether you're a professional, freelancer, student, or hobbyist — as long as you're ready to trade skills fairly, you're welcome.",
    answerEs:
      "Cualquiera que tenga una habilidad para ofrecer o quiera intercambiar servicios puede unirse. Ya seas profesional, freelancer, estudiante o aficionado, si estás listo para intercambiar habilidades de forma justa, eres bienvenido.",
  },
  {
    question: "Is the platform responsible for service quality or disputes?",
    questionEs: "La plataforma es responsable de la calidad del servicio o de las disputas?",
    answer:
      "While we provide tools for verification, reviews, and secure messaging, the final responsibility lies with the users. We strongly encourage thorough communication and mutual agreement before any exchange.",
    answerEs:
      "Aunque ofrecemos herramientas de verificación, reseñas y mensajería segura, la responsabilidad final recae en los usuarios. Recomendamos encarecidamente una comunicación detallada y un acuerdo mutuo antes de cualquier intercambio.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background px-4 py-14 text-foreground sm:px-6 sm:py-16 lg:px-8">
      <div className="container">
        <h2 className={`mb-10 text-center font-semibold text-foreground sm:mb-12 ${isSpanish ? "text-[24px] sm:text-[36px]" : "text-2xl sm:text-4xl"}`}>
          <span className="text-[#738C88]">{language === "es" ? "Preguntas" : "Frequently"}</span> {language === "es" ? "frecuentes" : "Asked Questions"}
        </h2>

        <div className="mx-auto  space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="group flex w-full items-center justify-between px-5 py-5 text-left sm:px-7 sm:py-6"
              >
                <span className={`pr-6 font-medium leading-tight text-foreground sm:pr-8 ${isSpanish ? "text-[15px] sm:text-[22px]" : "text-[17px] sm:text-[28px]"}`}>
                  {isSpanish ? faq.questionEs : faq.question}
                </span>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-64 sm:max-h-56" : "max-h-0"
                  }`}
              >
                <div className={`px-5 pb-6 leading-relaxed text-muted-foreground sm:px-7 sm:pb-8 ${isSpanish ? "text-[14px] sm:text-[16px]" : "text-[15px] sm:text-[20px]"}`}>
                  {isSpanish ? faq.answerEs : faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
