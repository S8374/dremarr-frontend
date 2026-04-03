import { ShieldCheck, MessageCircle, Star, Flag } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Badges",
    description: "Members upload certifications and licenses for verification, earning trust badges.",
  },
  {
    icon: MessageCircle,
    title: "Secure Messaging",
    description: "Private, encrypted conversations keep your negotiations safe and organized.",
  },
  {
    icon: Star,
    title: "Review System",
    description: "Rate and review members after each exchange to build community trust.",
  },
  {
    icon: Flag,
    title: "Report Tools",
    description: "Easily report suspicious activity or inappropriate behavior to our team.",
  },
];

export default function TradeWithConfidence() {
  return (
    <section className="bg-[#212927] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1340px] rounded-none  px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.2fr] lg:gap-14">
          <div className="space-y-7">
            <h2 className="max-w-[360px] text-4xl font-semibold leading-[1.07] tracking-[-0.02em] text-white sm:text-5xl lg:text-[58px]">
              Trade with
              <br />
              Confidence
            </h2>

            <p className="max-w-[420px] text-base leading-relaxed text-[#c4cbce] sm:text-[30px]">
              Our verification system, review platform, and safety tools ensure every exchange is secure and transparent.
            </p>

            <button
              type="button"
              className="inline-flex rounded-full border border-[#cc9f53] px-7 py-2.5 text-sm font-semibold text-[#cc9f53] transition-colors hover:bg-[#cc9f53]/12"
            >
              View safety Guidelines
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

                <h3 className="mb-3 text-[30px] font-semibold text-white">{feature.title}</h3>
                <p className="text-[22px] leading-[1.35] text-[#d0d5d7]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
