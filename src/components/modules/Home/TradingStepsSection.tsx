"use client";

import { Plus, Mail, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/shared/language-provider";

const TradingSteps = () => {
    const { language } = useLanguage();
    const isSpanish = language === "es";
    const steps = [
        {
            number: "01",
            icon: Plus,
            title: language === "es" ? "Publica tu habilidad" : "Post your skill",
            titleEs: "Publica tu habilidad",
            description:
                language === "es"
                    ? "Crea una publicación mostrando lo que ofreces o lo que buscas. Agrega detalles, imágenes y tu disponibilidad para atraer coincidencias correctas."
                    : "Create a listing showcasing what you offer or what you're looking for. Add details, images, and your availability to attract the right matches.",
        },
        {
            number: "02",
            icon: Mail,
            title: language === "es" ? "Conecta y negocia" : "Connect & Negotiate",
            titleEs: "Conecta y negocia",
            description:
                language === "es"
                    ? "Explora publicaciones, envía mensajes y conversa los detalles de tu intercambio. Nuestro sistema de mensajería segura mantiene todo organizado."
                    : "Browse listings, message members, and discuss the details of your exchange. Our secure messaging keeps all conversations organized",
        },
        {
            number: "03",
            icon: CheckCircle,
            title: language === "es" ? "Completa el intercambio" : "Complete the Barter",
            titleEs: "Completa el intercambio",
            description:
                language === "es"
                    ? "Intercambia tus habilidades, completa los servicios acordados y deja reseñas. Mejora tu reputación y abre más oportunidades."
                    : "Exchange your skills, complete the agreed services, and leave reviews. Build your reputation and unlock more opportunities.",
        },
    ];

    return (
        <section className="bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1340px]">
                <div className="mb-12 text-center">
                    <h2 className={`mb-2 font-semibold text-foreground ${isSpanish ? "text-[30px] md:text-[44px]" : "text-[44px]"}`}>
                        {language === "es" ? (
                            <>Empieza a <span className="text-[#79948d]">intercambiar</span> en 3 pasos</>
                        ) : (
                            <>Start <span className="text-[#79948d]">Trading</span> in Three Steps</>
                        )}
                    </h2>
                    <p className="text-[24px] text-muted-foreground">
                        {language === "es" ? "Sin configuración complicada. Solo crea, conecta e intercambia." : "No complicated setup. Just creat, connect, and exchange."}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-center">
                    {steps.map((step, index) => (
                        <article
                            key={index}
                            className="rounded-2xl bg-[#f3f4f6] px-7 py-7"
                        >
                            <div className="relative mb-5 flex h-14 items-start justify-center">
                                <span className="absolute left-0 top-0 text-[58px] font-bold leading-none text-[#c9cdd5]">
                                    {step.number}
                                </span>
                                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full border border-[#c4ccd4] bg-[#e3e7eb]">
                                    <step.icon className="h-5 w-5 text-[#6d8b84]" />
                                </div>
                            </div>

                            <h3 className="mb-3 text-[37px] font-semibold leading-tight text-foreground">
                                {isSpanish ? step.titleEs : step.title}
                            </h3>

                            <p className="text-[22px] leading-[1.35] text-muted-foreground">
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
