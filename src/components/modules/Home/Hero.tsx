"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/images/hero.jpg";
import heroDoctorImage from "@/assets/images/hero-doctor.jpg";
import avatarOne from "@/assets/images/doctor-cardiologist.jpg";
import avatarTwo from "@/assets/images/doctor-neurologist.jpg";
import avatarThree from "@/assets/images/doctor-orthopedic.jpg";

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

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-full px-4 pb-12 pt-0 sm:px-6 md:pb-16 lg:mx-auto lg:max-w-[1380px] lg:px-0">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[1fr_0.88fr] lg:gap-12">
          {/* Left */}
          <div className="pt-2 md:pt-7 lg:pt-10">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1 text-[12px] font-medium text-muted-foreground">
              Trusted by 50,000+ skill Traders
            </div>

            <h1 className="mb-4 max-w-[620px] text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[52px] md:text-[64px] lg:text-[74px]">
              Where Skill is
              <br />
              <span className="text-[#708f88]">Currency</span>
            </h1>

            <p className="mb-8 max-w-[520px]  leading-[1.34] text-muted-foreground  text-xl">
              Exchange your expertise for services you need. No money required, just skills that matter.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4 md:mb-10">
              <button
                type="button"
                className="w-full rounded-full bg-[#6f8f89] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(110,142,131,0.75)] transition-colors hover:bg-[#5f7c72] sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              >
                Join The Waitlist
              </button>

              <button
                type="button"
                className="w-full rounded-full border border-[#cfaa6b] px-6 py-3 text-sm font-semibold text-[#cfaa6b] transition-colors hover:bg-[#cfaa6b]/10 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              >
                Browse Marketplace
              </button>
            </div>

            {/* Avatars */}
            <div className="mb-9 flex items-center md:mb-12 ">
              <div className="flex -space-x-2.5">
                <Image
                  src={avatarOne}
                  alt="User 1"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded-full border-2 border-background object-cover"
                />
                <Image
                  src={avatarTwo}
                  alt="User 2"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded-full border-2 border-background object-cover"
                />
                <Image
                  src={avatarThree}
                  alt="User 3"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded-full border-2 border-background object-cover"
                />
                <Image
                  src={avatarOne}
                  alt="User 4"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded-full border-2 border-background object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid w-full max-w-[680px] grid-cols-3 overflow-hidden rounded-2xl border border-border bg-transparent px-2 py-3 md:py-4">
              <div className="flex flex-col items-center justify-center border-r border-border px-2 py-1">
                <span className="text-[28px] font-semibold leading-none text-foreground sm:text-[34px] md:text-[41px]">50K+</span>
                <span className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">Member</span>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-border px-2 py-1">
                <span className="text-[28px] font-semibold leading-none text-foreground sm:text-[34px] md:text-[41px]">200K+</span>
                <span className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">Skills Traded</span>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-1">
                <span className="text-[28px] font-semibold leading-none text-foreground sm:text-[34px] md:text-[41px]">4.8</span>
                <span className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">Average Rating</span>
              </div>
            </div>
          </div>

          {/* Right visual panel */}
          <div className="relative mx-auto h-[360px] w-full self-start sm:h-[460px] md:h-[560px] lg:h-[716px] lg:self-end">
            <div className="hero-image-clip absolute inset-0 overflow-hidden bg-card lg:-mt-16">
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
            </div>

            {/* Bottom profile card */}
            <div className="absolute bottom-3 left-3  flex h-14 w-[calc(100%-88px)] max-w-[335px] items-center gap-2.5 rounded-full bg-card/95 px-2.5 py-2 shadow-[0_12px_32px_-20px_rgba(10,18,40,0.6)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:h-[72px] sm:w-[335px] sm:gap-3 sm:px-3 lg:bottom-10">
              <Image
                src={currentSlide.avatar}
                alt={currentSlide.name}
                width={50}
                height={50}
                className="h-10 w-10 rounded-full object-cover sm:h-[50px] sm:w-[50px]"
              />
              <div className="flex-1">
                <p className="text-[13px] font-semibold leading-tight text-[#6e8e84] sm:text-[14px]">
                  {currentSlide.name}
                </p>
                <p className="text-[10px] text-muted-foreground sm:text-[13px]">{currentSlide.role}</p>
              </div>
            </div>

            {/* Bottom arrow control */}
            <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1.5 sm:bottom-5 sm:right-4 sm:gap-2 lg:bottom-9">
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