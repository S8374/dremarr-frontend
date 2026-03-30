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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900 sm:mb-12 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="group flex w-full items-center justify-between px-4 py-5 text-left sm:px-8 sm:py-6"
              >
                <span className="pr-6 text-base font-medium text-gray-900 sm:pr-8 sm:text-lg">
                  {faq.question}
                </span>
                <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-emerald-500 transition-colors">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-64 sm:max-h-48" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-6 leading-relaxed text-gray-600 sm:px-8 sm:pb-8">
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
