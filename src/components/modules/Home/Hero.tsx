"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import heroImage from "@/assets/images/hero.jpg";
import heroDoctorImage from "@/assets/images/hero-doctor.jpg";
import avatarOne from "@/assets/images/doctor-cardiologist.jpg";
import avatarTwo from "@/assets/images/doctor-neurologist.jpg";
import avatarThree from "@/assets/images/doctor-orthopedic.jpg";
import { useLanguage } from "@/components/shared/language-provider";

const heroSlides = [
  {
    image: heroImage,
    avatar: avatarThree,
    name: "Mr. John Lother",
    role: "Electrician",
  },
  {
    image: heroDoctorImage,
    avatar: avatarOne,
    name: "Dr. Sarah Miles",
    role: "Cardiologist",
  },
  {
    image: heroImage,
    avatar: avatarTwo,
    name: "Dr. Eric Nolan",
    role: "Neurologist",
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
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute right-6 top-14 hidden h-52 w-40 overflow-hidden rounded-[28px] border border-border/80 bg-card shadow-[0_18px_40px_-22px_rgba(15,23,42,0.45)] lg:block xl:hidden"
      >
        <Image
          src={heroDoctorImage}
          alt="Skill exchange preview"
          fill
          sizes="160px"
          className="object-cover"
        />
      </motion.div>
      <div className="mx-auto w-full max-w-full px-4 pb-12 pt-0 sm:px-6 md:pb-16 lg:mx-auto lg:max-w-[1380px] lg:px-6 xl:px-0">
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
                {[avatarOne, avatarTwo, avatarThree, avatarOne].map((avatar, i) => (
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
          <div className="relative mx-auto h-80 w-full self-start sm:h-[420px] md:h-[520px] xl:h-[700px] xl:self-end">
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
                  className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
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
              className="absolute bottom-3 left-3 flex h-13 w-[calc(100%-88px)] max-w-[335px] items-center gap-2 rounded-full bg-card/95 px-2.5 py-2 shadow-[0_12px_32px_-20px_rgba(10,18,40,0.6)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:h-[72px] sm:w-[335px] sm:gap-3 sm:px-3 xl:bottom-10"
            >
              <Image
                src={currentSlide.avatar}
                alt={currentSlide.name}
                width={50}
                height={50}
                className="h-9 w-9 rounded-full object-cover sm:h-[50px] sm:w-[50px]"
              />
              <div className="flex-1">
                <p className="text-[12px] font-semibold leading-tight text-[#6e8e84] sm:text-[14px]">
                  {currentSlide.name}
                </p>
                <p className="text-[9px] text-muted-foreground sm:text-[13px]">{currentSlide.role}</p>
              </div>
            </motion.div>

            {/* Bottom arrow control */}
            <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1.5 sm:bottom-5 sm:right-4 sm:gap-2 xl:bottom-9">
              <button
                type="button"
                aria-label="Show next hero slide"
                onClick={handleNextSlide}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-white/90  text-white shadow-xl transition-colors hover:bg-[#1a2f4d] sm:h-[72px] sm:w-[72px]"
              >
                <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7" />
              </button>
              <div className="hidden items-center gap-1.5 sm:flex">
                {heroSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full ${index === activeSlide ? "bg-white" : "bg-white/60"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
