import Image from "next/image";
import {
  MessageSquare,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { HeroProps } from "@/types/heroProps";
import heroImage from "@/assets/images/hero.jpg";
import avatarOne from "@/assets/images/doctor-cardiologist.jpg";
import avatarTwo from "@/assets/images/doctor-neurologist.jpg";
import avatarThree from "@/assets/images/doctor-orthopedic.jpg";
import logo from "@/assets/logo/logo.png";

export function Hero({ }: HeroProps) {
  return (
    <section className="min-h-screen  text-[#111827]">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10">
        {/* Top Nav */}
        <nav className="mb-8 flex items-center justify-between md:mb-10 lg:mb-12">
          <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
            {/* Brand */}
            <div className="flex items-center gap-3 shrink-0">
              <Image
                src={logo}
                alt="Logo"
                className="h-full w-full object-cover"
                width={70}
                height={70}
              />
            </div>

            {/* Nav links */}
            <div className="hidden items-center gap-6 text-[15px] font-medium lg:flex xl:gap-8">
              <a href="#" className="text-[#6E8E83]">
                Home
              </a>
              <a href="#" className="text-[#6b7280] transition-colors hover:text-[#111827]">
                Marketplace
              </a>
              <a href="#" className="text-[#6b7280] transition-colors hover:text-[#111827]">
                Membership
              </a>
              <button className="relative text-[#6b7280] transition-colors hover:text-[#111827]">
                <MessageSquare className="h-[18px] w-[18px]" />
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl bg-[#D2B17D] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#bd9d6e]">
                Light Mode
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button className="hidden rounded-full border border-[#8ca29c] bg-[#f3f3f4] px-11 py-2.5 text-base font-semibold text-[#4b6360] shadow-[0_2px_0_0_rgba(143,161,155,0.22)] lg:inline-flex">
            Login
          </button>

          <button className="inline-flex rounded-full border border-[#8ca29c] px-6 py-2 text-sm font-semibold text-[#4b6360] lg:hidden">
            Login
          </button>
        </nav>

        {/* Hero grid */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-10 xl:gap-14">
          {/* Left */}
          <div className="pt-1 lg:pt-4">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#e8e8e8] bg-[#ededee] px-4 py-1 text-[12px] font-medium text-[#8b8f97] md:mb-7">
              Trusted by 50,000+ skill Traders
            </div>

            <h1 className="mb-4 max-w-[620px] text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-[#10192c] sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[74px]">
              Where Skill is
              <br />
              <span className="text-[#6E8E83]">Currency</span>
            </h1>

            <p className="mb-7 max-w-[500px] text-[18px] leading-[1.45] text-[#6b7280] md:mb-8 md:text-[24px] md:leading-[1.35] lg:text-[30px]">
              Exchange your expertise for services you need. No money required, just skills that matter.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-10 md:gap-4">
              <button className="rounded-full bg-[#6E8E83] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(110,142,131,0.75)] transition-colors hover:bg-[#5f7c72] sm:px-8 sm:py-3.5 sm:text-base">
                Join The Waitlist
              </button>

              <button className="rounded-full border border-[#D2B17D] px-6 py-3 text-sm font-semibold text-[#D2B17D] transition-colors hover:bg-[#D2B17D]/10 sm:px-8 sm:py-3.5 sm:text-base">
                Browse Marketplace
              </button>
            </div>

            {/* Avatars */}
            <div className="mb-8 flex items-center md:mb-12">
              <div className="flex -space-x-3 md:-space-x-2.5">
                <Image
                  src={avatarOne}
                  alt="User 1"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src={avatarTwo}
                  alt="User 2"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src={avatarThree}
                  alt="User 3"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src={avatarOne}
                  alt="User 4"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid w-full max-w-[620px] grid-cols-3 overflow-hidden rounded-2xl border border-[#cfd3d8] bg-transparent px-2 py-3 md:py-4">
              <div className="flex flex-col items-center justify-center border-r border-[#cfd3d8] px-2 py-1">
                <span className="text-[30px] font-semibold leading-none text-[#111827] sm:text-[36px] md:text-[42px]">50K+</span>
                <span className="mt-2 text-sm font-medium text-[#6b7280]">Member</span>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-[#cfd3d8] px-2 py-1">
                <span className="text-[30px] font-semibold leading-none text-[#111827] sm:text-[36px] md:text-[42px]">200K+</span>
                <span className="mt-2 text-sm font-medium text-[#6b7280]">Skills Traded</span>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-1">
                <span className="text-[30px] font-semibold leading-none text-[#111827] sm:text-[36px] md:text-[42px]">4.8</span>
                <span className="mt-2 text-sm font-medium text-[#6b7280]">Average Rating</span>
              </div>
            </div>
          </div>

          {/* Right visual panel */}
          <div className="relative mx-auto h-[420px] w-full  sm:h-[500px] md:h-[620px] lg:-mt-8 lg:h-[740px] xl:h-[790px]">
            <div className="hero-image-clip max-w-2xl absolute inset-0 overflow-hidden bg-[#ffffff]">
              <Image
                src={heroImage}
                alt="Two people exchanging skills"
                fill
                priority
                className="object-cover "
              />
            </div>

            {/* Bottom profile card */}
            <div className="absolute bottom-3 left-3 z-20 flex h-16 w-[260px] items-center gap-3 rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5 sm:h-[70px] sm:w-[330px]">
              <Image

                src={avatarOne}
                alt="Mr. John Lother"
                width={50}
                height={50}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-[14px] font-semibold leading-tight text-[#111827]">
                  Mr. John Lother
                </p>
                <p className="text-[11px] text-[#6b7280]">Electrician</p>
              </div>
            </div>

            {/* Bottom arrow control */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 sm:bottom-5 sm:right-5">
              <button className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/80 bg-[#0f1e39] text-white shadow-xl transition-colors hover:bg-[#1a2b47] sm:h-14 sm:w-14">
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}