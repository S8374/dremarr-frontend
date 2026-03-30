'use client';

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, MessageSquare } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import logo from "@/assets/logo/logo.png";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#", label: "Marketplace" },
  { href: "#", label: "Membership" },
];

const PublicNavbar = () => {
  return (
    <header className="w-full bg-[#f5f5f6]">
      <div className="mx-auto flex w-full max-w-full items-center justify-between px-6 py-4 md:px-8 md:py-5 lg:mx-auto lg:max-w-[1380px]">
        <div className="flex items-center gap-5 md:gap-8">
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="Dremarr logo"
              width={46}
              height={46}
              className="h-[42px] w-[42px] rounded-full object-cover"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-[14px] font-medium text-[#8b8f97] md:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={index === 0 ? "text-[#6f8f84]" : "transition-colors hover:text-[#111827]"}
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              aria-label="Messages"
              className="text-[#8b8f97] transition-colors hover:text-[#111827]"
            >
              <MessageSquare className="h-4 w-4" />
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-[#cfaa6a] px-3.5 py-1.5 text-[13px] font-medium text-white"
            >
              Light Mode
              <ChevronDown className="h-4 w-4" />
            </button>
          </nav>
        </div>

        <Link
          href="/login"
          className="hidden rounded-full border border-[#88a39b] bg-[#f3f4f5] px-12 py-2.5 text-[19px] font-semibold text-[#5f7e75] shadow-[0_2px_0_rgba(101,132,123,0.22)] md:inline-flex"
        >
          Login
        </Link>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#ced2d8] text-[#5f7e75]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-5">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="text-lg font-medium text-[#111827]">
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/login"
                  className="mt-2 inline-flex w-fit rounded-full border border-[#89a49d] bg-[#f2f4f4] px-8 py-2 text-base font-semibold text-[#5f7e75]"
                >
                  Login
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
