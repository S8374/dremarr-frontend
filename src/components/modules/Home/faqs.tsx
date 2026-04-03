"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is this platform about?",
    answer:
      "This platform is a skill-exchange marketplace where users can offer their services and receive other services in return without using money. It simply connects people who agree on the value of their work and want to trade fairly.",
  },
  {
    question: "Do I need to pay to exchange services?",
    answer:
      "No, you don't need to pay any money. This is a pure skill-barter platform. You exchange your skills/services directly with other members.",
  },
  {
    question: "Who can join the platform?",
    answer:
      "Anyone who has a skill to offer or is willing to exchange services can join. Whether you're a professional, freelancer, student, or hobbyist — as long as you're ready to trade skills fairly, you're welcome.",
  },
  {
    question: "Is the platform responsible for service quality or disputes?",
    answer:
      "While we provide tools for verification, reviews, and secure messaging, the final responsibility lies with the users. We strongly encourage thorough communication and mutual agreement before any exchange.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f3f4f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-[1340px]">
        <h2 className="mb-10 text-center text-3xl font-semibold text-[#141a27] sm:mb-12 sm:text-5xl">
          <span className="text-[#7d978f]">Frequently</span> Asked Questions
        </h2>

        <div className="mx-auto  space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-[#e8eaed]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="group flex w-full items-center justify-between px-5 py-5 text-left sm:px-7 sm:py-6"
              >
                <span className="pr-6 text-[19px] font-medium leading-tight text-[#171d2b] sm:pr-8 sm:text-[35px]">
                  {faq.question}
                </span>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#263040] text-[#1a2433]">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-64 sm:max-h-56" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-6 text-[17px] leading-relaxed text-[#5f6673] sm:px-7 sm:pb-8 sm:text-[28px]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
