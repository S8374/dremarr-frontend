import { Plus, Mail, CheckCircle } from "lucide-react";

const TradingSteps = () => {
    const steps = [
        {
            number: "01",
            icon: Plus,
            title: "Post your skill",
            description:
                "Create a listing showcasing what you offer or what you're looking for. Add details, images, and your availability to attract the right matches.",
        },
        {
            number: "02",
            icon: Mail,
            title: "Connect & Negotiate",
            description:
                "Browse listings, message members, and discuss the details of your exchange. Our secure messaging keeps all conversations organized",
        },
        {
            number: "03",
            icon: CheckCircle,
            title: "Complete the Barter",
            description:
                "Exchange your skills, complete the agreed services, and leave reviews. Build your reputation and unlock more opportunities.",
        },
    ];

    return (
        <section className=" px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-[1340px]">
                <div className="mb-12 text-center sm:mb-14">
                    <h2 className="mb-3 text-3xl font-semibold text-[#1a2130] sm:text-4xl md:text-5xl">
                        Start <span className="text-[#79948d]">Trading</span> in Three Steps
                    </h2>
                    <p className="text-base text-[#7b808c] sm:text-lg">
                        No complicated setup. Just creat, connect, and exchange.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {steps.map((step, index) => (
                        <article
                            key={index}
                            className="rounded-2xl bg-[#eaebee] px-7 py-7 sm:px-8 sm:py-8"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-5xl font-bold leading-none text-[#c4c9d2] sm:text-[58px]">
                                    {step.number}
                                </span>
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cdd4d7] bg-[#e4eaec] text-[#708f88]">
                                    <step.icon className="h-5 w-5" />
                                </div>
                            </div>

                            <h3 className="mb-3 text-[29px] font-semibold leading-tight text-[#1b2230]">
                                {step.title}
                            </h3>

                            <p className="text-[22px] leading-[1.35] text-[#69717f]">
                                {step.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TradingSteps;
