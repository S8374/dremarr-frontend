"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import developerImage from "@/assets/images/hero/developer.png";
import electriciansImage from "@/assets/images/hero/electricians.jpeg";
import hairStylistsImage from "@/assets/images/hero/hair-stylists.png";
import mechanicsImage from "@/assets/images/hero/mechanics.png";
import developerUserImage from "@/assets/images/hero/users/developer.png";
import electriciansUserImage from "@/assets/images/hero/users/electricians.png";
import hairStylistsUserImage from "@/assets/images/hero/users/hair-stylists.png";
import mechanicsUserImage from "@/assets/images/hero/users/mechanics.png";
import { useLanguage } from "@/components/shared/language-provider";

const heroSlides = [
  {
    image: electriciansImage,
    avatar: electriciansUserImage,
    name: "Mr. John Lother",
    role: "Electrician",
  },
  {
    image: hairStylistsImage,
    avatar: hairStylistsUserImage,
    name: "Dr. Sarah Miles",
    role: "Hair Stylist",
  },
  {
    image: mechanicsImage,
    avatar: mechanicsUserImage,
    name: "Dr. Eric Nolan",
    role: "Mechanic",
  },
  {
    image: developerImage,
    avatar: developerUserImage,
    name: "Mr. Sabbir",
    role: "Web Developer",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-background text-foreground">

      <div className="container pb-12 pt-0 md:pb-16">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 xl:grid-cols-[1fr_0.88fr] xl:gap-12">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="pt-2 md:pt-6 xl:pt-10"
          >
            <motion.div
              variants={itemVariants}
              className={`mb-6 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1 font-medium text-muted-foreground ${isSpanish ? "text-[11px]" : "text-[12px]"}`}
            >
              {language === "es" ? "Confiado por más de 50,000 comerciantes de habilidades" : "Trusted by 50,000+ skill Traders"}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`mb-4 max-w-[800px] font-bold leading-[1.08] tracking-[-0.02em] text-foreground ${isSpanish ? "text-[28px] sm:text-[38px] md:text-[50px] xl:text-[60px]" : "text-[34px] sm:text-[46px] md:text-[58px] xl:text-[74px]"}`}
            >
              {language === "es" ? "Donde la habilidad es" : "Where Skill is"}
              <br />
              <span className="text-[#708f88]">{language === "es" ? "moneda" : "Currency"}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`mb-8 max-w-[520px] leading-[1.45] text-muted-foreground ${isSpanish ? "text-sm sm:text-base md:text-lg" : "text-base sm:text-lg md:text-xl"}`}
            >
              {language === "es"
                ? "Intercambia tu experiencia por los servicios que necesitas. Sin dinero, solo habilidades que importan."
                : "Exchange your expertise for services you need. No money required, just skills that matter."}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-8 flex flex-wrap items-center gap-4 md:mb-10"
            >
              <button
                type="button"
                className="w-full rounded-full bg-[#6f8f89] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(110,142,131,0.75)] transition-colors hover:bg-[#5f7c72] sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              >
                {language === "es" ? "Unirse a la lista" : "Join The Waitlist"}
              </button>

              <button
                type="button"
                className="w-full rounded-full border border-[#cfaa6b] px-6 py-3 text-sm font-semibold text-[#cfaa6b] transition-colors hover:bg-[#cfaa6b]/10 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              >
                {language === "es" ? "Explorar mercado" : "Browse Marketplace"}
              </button>
            </motion.div>

            {/* Avatars */}
            <motion.div
              variants={itemVariants}
              className="mb-9 flex items-center md:mb-12 "
            >
              <div className="flex -space-x-2.5">
                {[electriciansUserImage, hairStylistsUserImage, mechanicsUserImage, developerUserImage].map((avatar, i) => (
                  <Image
                    key={i}
                    src={avatar}
                    alt={`User ${i + 1}`}
                    width={42}
                    height={42}
                    className="h-[42px] w-[42px] rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid w-full max-w-[680px] grid-cols-3 overflow-hidden rounded-2xl border border-border bg-transparent px-1 py-3 sm:px-2 md:py-4"
            >
              <div className="flex flex-col items-center justify-center border-r border-border px-2 py-1">
                <span className={`font-semibold leading-none text-foreground ${isSpanish ? "text-[22px] sm:text-[28px] md:text-[38px]" : "text-[24px] sm:text-[30px] md:text-[41px]"}`}>50K+</span>
                <span className={`mt-2 font-medium text-muted-foreground ${isSpanish ? "text-[10px] sm:text-[11px]" : "text-xs sm:text-sm"}`}>{language === "es" ? "Miembros" : "Member"}</span>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-border px-2 py-1">
                <span className={`font-semibold leading-none text-foreground ${isSpanish ? "text-[22px] sm:text-[28px] md:text-[38px]" : "text-[24px] sm:text-[30px] md:text-[41px]"}`}>200K+</span>
                <span className={`mt-2 font-medium text-muted-foreground ${isSpanish ? "text-[10px] sm:text-[11px]" : "text-xs sm:text-sm"}`}>{language === "es" ? "Habilidades" : "Skills Traded"}</span>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-1">
                <span className={`font-semibold leading-none text-foreground ${isSpanish ? "text-[22px] sm:text-[28px] md:text-[38px]" : "text-[24px] sm:text-[30px] md:text-[41px]"}`}>4.8</span>
                <span className={`mt-2 font-medium text-muted-foreground ${isSpanish ? "text-[10px] sm:text-[11px]" : "text-xs sm:text-sm"}`}>{language === "es" ? "Valoración" : "Average Rating"}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual panel */}
          <div className="relative mx-auto h-80 w-full self-start sm:h-[420px] md:h-[520px] lg:h-[700px] xl:h-[700px] xl:self-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="hero-image-clip absolute inset-0 overflow-hidden bg-card xl:-mt-16"
            >
              {heroSlides.map((slide, index) => (
                <Image
                  key={index}
                  src={slide.image}
                  alt="Two people exchanging skills"
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className={`object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
                    }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-black/5 to-transparent" />
            </motion.div>

            {/* Bottom profile card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-3 left-3 z-20 flex h-14 w-[calc(100%-140px)] max-w-[320px] items-center gap-3 rounded-full bg-card/95 px-4 py-2 shadow-[0_15px_45px_-15px_rgba(10,18,40,0.6)] backdrop-blur-md sm:bottom-6 sm:left-6 sm:h-[86px] sm:w-full sm:max-w-[420px] sm:gap-5 sm:px-5 xl:bottom-12"
            >
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full sm:h-[62px] sm:w-[62px]">
                <Image
                  src={currentSlide.avatar}
                  alt={currentSlide.name}
                  width={62}
                  height={62}
                  className="h-10 w-10 rounded-full object-cover sm:h-[56px] sm:w-[56px]"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-bold leading-tight text-[#5d7d74] sm:text-[24px]">
                  {currentSlide.name}
                </p>
                <p className="text-[10px] font-medium text-muted-foreground sm:text-[16px]">{currentSlide.role}</p>
              </div>
            </motion.div>

            {/* Bottom arrow control */}
            <div className="absolute bottom-2.5 right-2.5 z-30 flex items-center gap-2 sm:bottom-6 sm:right-6 sm:gap-4 xl:bottom-12">
              <button
                type="button"
                aria-label="Show next hero slide"
                onClick={handleNextSlide}
                className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[1.5px] border-white/95 bg-transparent text-white shadow-2xl transition-all hover:bg-white hover:text-black sm:h-[88px] sm:w-[88px] sm:border-2"
              >
                <ArrowRight className="h-6 w-6 sm:h-9 sm:w-9" />
              </button>
              <div className="mb-1">
                <span className="h-2 w-2 rounded-full bg-white sm:h-3 sm:w-3 block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
