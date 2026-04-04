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
                <section className="bg-background px-4 py-14 text-foreground sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-[1340px]">
                <div className="mb-12 text-center sm:mb-14">
                                        <h2 className={`mb-3 font-semibold text-foreground ${isSpanish ? "text-[28px] sm:text-[36px] md:text-[44px]" : "text-3xl sm:text-4xl md:text-5xl"}`}>
                        {language === "es" ? (
                          <>Empieza a <span className="text-[#79948d]">intercambiar</span> en 3 pasos</>
                        ) : (
                          <>Start <span className="text-[#79948d]">Trading</span> in Three Steps</>
                        )}
                    </h2>
                                        <p className={`text-muted-foreground ${isSpanish ? "text-sm sm:text-base" : "text-base sm:text-lg"}`}>
                        {language === "es" ? "Sin configuración complicada. Solo crea, conecta e intercambia." : "No complicated setup. Just creat, connect, and exchange."}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {steps.map((step, index) => (
                        <article
                            key={index}
                            className="rounded-2xl border border-border bg-card px-7 py-7 sm:px-8 sm:py-8"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-5xl font-bold leading-none text-muted-foreground/40 sm:text-[58px]">
                                    {step.number}
                                </span>
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-primary">
                                    <step.icon className="h-5 w-5" />
                                </div>
                            </div>

                            <h3 className={`mb-3 font-semibold leading-tight text-foreground ${isSpanish ? "text-[24px] sm:text-[28px]" : "text-[29px]"}`}>
                                {isSpanish ? step.titleEs : step.title}
                            </h3>

                            <p className={`leading-[1.35] text-muted-foreground ${isSpanish ? "text-[16px] sm:text-[18px]" : "text-[22px]"}`}>
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
