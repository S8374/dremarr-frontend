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
    <section className="bg-white py-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
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
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-medium text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-emerald-500 transition-colors">
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
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-8 text-gray-600 leading-relaxed">
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
