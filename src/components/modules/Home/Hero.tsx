import Image from "next/image";
import {
  MessageSquare,
  ChevronDown,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";
import { HeroProps } from "@/types/heroProps";
import heroImage from "@/assets/images/hero.jpg";
import logo from "@/assets/logo/logo.png";

export function Hero({ }: HeroProps) {
  return (
    <section className="min-h-screen bg-[#f4f4f4] text-[#111827]">
      <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 sm:px-10 lg:px-14">
        {/* Top Nav */}
        <nav className="mb-12 flex items-center justify-between lg:mb-14">
          <div className="flex items-center gap-10">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Logo"
                className="h-full w-full object-cover"
                width={70}
                height={70}
              />
            </div>

            {/* Nav links */}
            <div className="hidden items-center gap-8 text-[15px] font-medium md:flex">
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
                {/* <span className="absolute -right-[2px] -top-[1px] h-2 w-2 rounded-full border border-[#f4f4f4] bg-red-400" /> */}
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl bg-[#D2B17D] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#bd9d6e]">
                Light Mode
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </nav>

        {/* Hero grid */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          {/* Left */}
          <div className="pt-4">
            <div className="mb-8 inline-flex items-center rounded-full border border-[#e8e8e8] bg-[#efefef] px-4 py-1 text-xs font-medium text-[#8b8f97]">
              Trusted by 50,000+ skill Traders
            </div>

            <h1 className="mb-6 text-[56px] font-bold leading-[1.05] tracking-[-0.02em] text-[#111827] lg:text-[74px]">
              Where Skill is
              <br />
              <span className="text-[#6E8E83]">Currency</span>
            </h1>

            <p className="mb-9 max-w-[480px] text-xl leading-[1.6] text-[#6b7280]">
              Exchange your expertise for services you need. No money required, just skills that matter.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#6E8E83] px-8 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_-12px_rgba(110,142,131,0.7)] transition-colors hover:bg-[#5f7c72]">
                Join The Waitlist
              </button>

              <button className="rounded-full border border-[#D2B17D] px-8 py-3.5 text-base font-semibold text-[#D2B17D] transition-colors hover:bg-[#D2B17D]/10">
                Browse Marketplace
              </button>
            </div>

            {/* Avatars */}
            <div className="mb-14 flex items-center">
              <div className="flex -space-x-3">
                <Image
                  src="/avatar1.jpg"
                  alt="User 1"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/avatar2.jpg"
                  alt="User 2"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/avatar3.jpg"
                  alt="User 3"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/avatar4.jpg"
                  alt="User 4"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid w-full max-w-[620px] grid-cols-3 overflow-hidden rounded-2xl border border-[#cfd3d8] bg-transparent px-2 py-4">
              <div className="flex flex-col items-center justify-center border-r border-[#cfd3d8] px-2 py-1">
                <span className="text-[42px] font-semibold leading-none text-[#111827]">50K+</span>
                <span className="mt-2 text-sm font-medium text-[#6b7280]">Member</span>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-[#cfd3d8] px-2 py-1">
                <span className="text-[42px] font-semibold leading-none text-[#111827]">200K+</span>
                <span className="mt-2 text-sm font-medium text-[#6b7280]">Skills Traded</span>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-1">
                <span className="text-[42px] font-semibold leading-none text-[#111827]">4.8</span>
                <span className="mt-2 text-sm font-medium text-[#6b7280]">Average Rating</span>
              </div>
            </div>
          </div>

          {/* Right visual panel */}
          <div className="relative h-[820px] -mt-24  w-full">
            {/* Main image box */}
            <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#d9dde1]">
              <Image
                src={heroImage}
                alt="Two people exchanging skills"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Top-right cutout shape */}
            <div className="absolute -top-px -right-px z-20 h-[85px] w-[180px]">
              <div className="absolute right-0 top-0 h-full w-full rounded-bl-[60px] bg-[#f4f4f4]" />
              <div className="absolute right-6 top-3 rounded-full border border-[#8fa19b] bg-[#f4f4f4] px-10 py-2.5 text-base font-semibold text-[#4b5f59] shadow-[0_2px_0_0_rgba(143,161,155,0.25)]">
                Login
              </div>
            </div>

            {/* Bottom profile card */}
            <div className="absolute bottom-4 left-4 z-20 flex h-[70px] w-[340px] items-center gap-3 rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md">
              <Image
                src="/avatar1.jpg"
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
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
              <button className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/80 bg-[#0f1e39] text-white shadow-xl transition-colors hover:bg-[#1a2b47]">
                <ArrowRight className="h-6 w-6" />
              </button>
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}