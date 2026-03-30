import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroProps } from "@/types/heroProps";
import heroImage from "@/assets/images/hero.jpg";
import avatarOne from "@/assets/images/doctor-cardiologist.jpg";
import avatarTwo from "@/assets/images/doctor-neurologist.jpg";
import avatarThree from "@/assets/images/doctor-orthopedic.jpg";

export function Hero({ }: HeroProps) {
  return (
    <section className="bg-[#f5f5f6] text-[#111827]">
      <div className="mx-auto w-full max-w-full pb-12 pt-0 md:pb-16 lg:mx-auto lg:max-w-[1380px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.88fr] lg:gap-12">
          {/* Left */}
          <div className="pt-2 md:pt-8 lg:pt-10">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#e5e7eb] bg-[#eaebee] px-4 py-1 text-[12px] font-medium text-[#8a8f98]">
              Trusted by 50,000+ skill Traders
            </div>

            <h1 className="mb-4 max-w-[620px] text-[54px] font-bold leading-[1.06] tracking-[-0.02em] text-[#121a2d] sm:text-[58px] md:text-[70px] lg:text-[74px]">
              Where Skill is
              <br />
              <span className="text-[#708f88]">Currency</span>
            </h1>

            <p className="mb-8 max-w-[520px] text-[20px] leading-[1.34] text-[#656d79] md:text-[24px] lg:text-[30px]">
              Exchange your expertise for services you need. No money required, just skills that matter.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4 md:mb-10">
              <button
                type="button"
                className="rounded-full bg-[#6f8f89] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(110,142,131,0.75)] transition-colors hover:bg-[#5f7c72] sm:px-8 sm:py-3.5 sm:text-base"
              >
                Join The Waitlist
              </button>

              <button
                type="button"
                className="rounded-full border border-[#cfaa6b] px-6 py-3 text-sm font-semibold text-[#cfaa6b] transition-colors hover:bg-[#cfaa6b]/10 sm:px-8 sm:py-3.5 sm:text-base"
              >
                Browse Marketplace
              </button>
            </div>

            {/* Avatars */}
            <div className="mb-9 flex items-center md:mb-12">
              <div className="flex -space-x-2.5">
                <Image
                  src={avatarOne}
                  alt="User 1"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded-full border-2 border-[#f5f5f6] object-cover"
                />
                <Image
                  src={avatarTwo}
                  alt="User 2"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded-full border-2 border-[#f5f5f6] object-cover"
                />
                <Image
                  src={avatarThree}
                  alt="User 3"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded-full border-2 border-[#f5f5f6] object-cover"
                />
                <Image
                  src={avatarOne}
                  alt="User 4"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded-full border-2 border-[#f5f5f6] object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid w-full max-w-[680px] grid-cols-3 overflow-hidden rounded-2xl border border-[#b8bec8] bg-transparent px-2 py-3 md:py-4">
              <div className="flex flex-col items-center justify-center border-r border-[#cfd3d8] px-2 py-1">
                <span className="text-[30px] font-semibold leading-none text-[#141c2f] sm:text-[38px] md:text-[41px]">50K+</span>
                <span className="mt-2 text-sm font-medium text-[#6b7280]">Member</span>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-[#cfd3d8] px-2 py-1">
                <span className="text-[30px] font-semibold leading-none text-[#141c2f] sm:text-[38px] md:text-[41px]">200K+</span>
                <span className="mt-2 text-sm font-medium text-[#6b7280]">Skills Traded</span>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-1">
                <span className="text-[30px] font-semibold leading-none text-[#141c2f] sm:text-[38px] md:text-[41px]">4.8</span>
                <span className="mt-2 text-sm font-medium text-[#6b7280]">Average Rating</span>
              </div>
            </div>
          </div>

          {/* Right visual panel */}
          <div className="relative mx-auto h-[440px] w-full sm:h-[530px] md:h-[620px] lg:h-[700px]">
            <div className="hero-image-clip -mt-16 absolute inset-0 overflow-hidden bg-white">
              <Image
                src={heroImage}
                alt="Two people exchanging skills"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Bottom profile card */}
            <div className="absolute bottom-4 left-4 z-20 flex h-16 w-[262px] items-center gap-3 rounded-full bg-white/95 px-3 py-2 shadow-[0_12px_32px_-20px_rgba(10,18,40,0.6)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:h-[72px] sm:w-[335px]">
              <Image
                src={avatarThree}
                alt="Mr. John Lother"
                width={50}
                height={50}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-[14px] font-semibold leading-tight text-[#6e8e84]">
                  Mr. John Lother
                </p>
                <p className="text-[11px] text-[#6b7280] sm:text-[13px]">Electrician</p>
              </div>
            </div>

            {/* Bottom arrow control */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 sm:bottom-5 sm:right-4">
              <button
                type="button"
                className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-white/90 bg-[#152843] text-white shadow-xl transition-colors hover:bg-[#1a2f4d] sm:h-[72px] sm:w-[72px]"
              >
                <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7" />
              </button>
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}