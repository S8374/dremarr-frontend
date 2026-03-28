import { ShieldCheck, MessageCircle, Star, Flag } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Verified Badges",
    description: "Members upload certifications and licenses for verification, earning trust badges.",
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: "Secure Messaging",
    description: "Private, encrypted conversations keep your negotiations safe and organized.",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Review System",
    description: "Rate and review members after each exchange to build community trust.",
  },
  {
    icon: <Flag className="w-7 h-7" />,
    title: "Report Tools",
    description: "Easily report suspicious activity or inappropriate behavior to our team.",
  },
];

export default function TradeWithConfidence() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Heading & Description */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-semibold leading-tight">
              Trade with <span className="text-emerald-400">Confidence</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-md">
              Our verification system, review platform, and safety tools ensure every exchange is secure and transparent.
            </p>

            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white transition-all px-8 py-3.5 rounded-full font-medium text-sm flex items-center gap-2">
              View safety Guidelines
            </button>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1e2937] hover:bg-[#334155] transition-all p-8 rounded-3xl group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#334155] group-hover:bg-emerald-500/20 transition-colors rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-[15px]">
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
