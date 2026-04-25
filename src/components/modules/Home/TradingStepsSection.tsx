"use client";

import { Plus, Mail, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/shared/language-provider";
import { motion, Variants } from "framer-motion";

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
            title: language === "es" ? "Completa el intercambio" : "Complete the Exchange",
            titleEs: "Completa el intercambio",
            description:
                language === "es"
                    ? "Intercambia tus habilidades, completa los servicios acordados y deja reseñas. Mejora tu reputación y abre más oportunidades."
                    : "Exchange your skills, complete the agreed services, and leave reviews. Build your reputation and unlock more opportunities.",
        },
    ];

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8">
            <div className="container">
                <div className="mb-14 text-center">
                    <h2 className="mb-4 text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[38px] md:text-[44px]">
                        {language === "es" ? (
                            <>Empieza a <span className="text-[#6d8b84]">intercambiar</span> en 3 pasos</>
                        ) : (
                            <>Start <span className="text-[#6d8b84]">Trading</span> in Three Steps</>
                        )}
                    </h2>
                    <p className="mx-auto max-w-2xl text-[16px] leading-[1.6] text-muted-foreground sm:text-[18px] md:text-[20px]">
                        {language === "es" ? "Sin configuración complicada. Solo crea, conecta e intercambia." : "No complicated setup. Just create, connect, and exchange."}
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.15 }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.article
                            variants={cardVariants}
                            key={index}
                            className={`mx-auto flex h-full w-full flex-col items-center rounded-3xl border border-border/40 bg-muted/30 px-6 py-10 transition-all hover:bg-muted/40 lg:px-4 xl:px-8 dark:bg-card ${index === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md" : ""}`}
                        >
                            <div className="relative mb-8 flex w-full items-center justify-center">
                                <span className="absolute left-0 text-[48px] font-black leading-none text-foreground/10 md:text-[58px] lg:text-[68px]">
                                    {step.number}
                                </span>
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-sm border border-border/50 transition-transform group-hover:scale-110 dark:bg-muted/30 lg:h-16 lg:w-16">
                                    <step.icon className="h-7 w-7 text-[#6d8b84] lg:h-8 lg:w-8" />
                                </div>
                            </div>

                            <h3 className="mb-4 text-center text-[20px] font-bold tracking-tight text-foreground sm:text-2xl lg:text-[21px] xl:text-[26px]">
                                {isSpanish ? step.titleEs : step.title}
                            </h3>

                            <p className="text-center text-[15px] leading-[1.6] text-muted-foreground sm:text-base lg:text-[15px] xl:text-[17px]">
                                {step.description}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TradingSteps;
