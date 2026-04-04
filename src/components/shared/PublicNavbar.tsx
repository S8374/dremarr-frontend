'use client';

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Laptop, Menu, MessageSquare, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import logo from "@/assets/logo/logo.png";
import { useLanguage } from "./language-provider";

const PublicNavbar = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const isSpanish = language === "es";
  const modeLabel = theme ? theme.charAt(0).toUpperCase() + theme.slice(1) : "Theme";

  const navItems = [
    { href: "/", label: isSpanish ? "Inicio" : "Home" },
    { href: "/marketplace", label: isSpanish ? "Mercado" : "Marketplace" },
    { href: "#", label: isSpanish ? "Membresía" : "Membership" },
  ];

  return (
    <header className="w-full  border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-full items-center justify-between px-5 py-4 sm:px-7 md:px-9 md:py-5 lg:mx-auto lg:max-w-[1380px] lg:px-3 xl:px-0">
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="Dremarr logo"
              width={46}
              height={46}
              className="h-[42px] w-[42px] rounded-full object-cover"
            />
          </Link>

          <nav className="hidden items-center gap-3 text-[13px] font-medium text-muted-foreground md:flex lg:gap-5 lg:text-[15px] xl:gap-7 xl:text-[16px]">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={index === 0 ? "text-[#6f8f84] font-semibold" : "transition-colors hover:text-foreground"}
              >
                {item.label}
              </Link>
            ))}

            <Link 
              href="/messages" 
              aria-label="Messages" 
              className="relative text-muted-foreground transition-all hover:text-[#6f8f84] hover:scale-110 active:scale-95"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#f0502e] text-[9px] font-black text-white shadow-sm ring-1 ring-background">
                2
              </span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  size="sm"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#cfaa6a] px-3 py-1.5 text-[12px] font-semibold text-white shadow-[0_10px_24px_-16px_rgba(207,170,106,0.95)] transition-transform hover:-translate-y-0.5 hover:bg-[#c99a52] lg:gap-2 lg:px-4 lg:py-2 lg:text-[13px]"
                >
                  {resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span className={`max-w-[72px] truncate ${isSpanish ? "text-[11px]" : ""}`}>{modeLabel}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 rounded-2xl border-border/60 p-1 shadow-lg">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="h-4 w-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="h-4 w-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Laptop className="h-4 w-4" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative ml-1 inline-flex items-center rounded-full border border-border/70 bg-background dark:bg-muted/20 text-[11px] font-semibold shadow-[0_10px_30px_-24px_rgba(15,23,42,0.55)] lg:text-[12px]">
              <div
                className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-[#6f8f84] shadow-[0_8px_20px_-14px_rgba(111,143,132,0.9)] transition-transform duration-300 ease-out ${language === "es" ? "translate-x-full" : "translate-x-0"
                  }`}
              />
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={`relative z-10 inline-flex h-9 min-w-11 items-center justify-center rounded-full px-3.5 transition-colors duration-200 ${language === "en" ? "text-white" : "text-muted-foreground dark:text-slate-300 hover:text-foreground dark:hover:text-white"
                  }`}
              >
                <span className="sr-only">English</span>
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                aria-pressed={language === "es"}
                className={`relative z-10 inline-flex h-9 min-w-11 items-center justify-center rounded-full px-3.5 transition-colors duration-200 ${language === "es" ? "text-white" : "text-muted-foreground dark:text-slate-300 hover:text-foreground dark:hover:text-white"
                  }`}
              >
                <span className="sr-only">Spanish</span>
                ES
              </button>
            </div>
          </nav>
        </div>

        <Link
          href="/login"
          className={`hidden rounded-full border border-[#88a39b] bg-[#f3f4f5] font-semibold text-[#5f7e75] shadow-[0_2px_0_rgba(101,132,123,0.22)] dark:border-white dark:bg-card dark:text-white md:inline-flex ${isSpanish ? "px-4 py-1 text-[13px] leading-none lg:px-6 lg:py-1.5 xl:px-10 xl:py-4" : "px-6 py-1.5 text-sm lg:px-8 lg:py-2 lg:text-base xl:px-14 xl:py-2.5 xl:text-[19px]"
            }`}
        >
          {language === "es" ? "Iniciar sesión" : "Login"}
        </Link>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#ced2d8] text-[#5f7e75] dark:border-border dark:text-muted-foreground"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[320px] p-5">
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className={`text-lg font-medium text-foreground ${isSpanish ? "text-[15px]" : ""}`}>
                    {item.label}
                  </Link>
                ))}

                <div className="mt-2 grid grid-cols-3 gap-2">
                  <Button type="button" variant="outline" size="sm" onClick={() => setTheme("light")}>Light</Button>
                  <Button type="button" variant="outline" size="sm" onClick={() => setTheme("dark")}>Dark</Button>
                  <Button type="button" variant="outline" size="sm" onClick={() => setTheme("system")}>System</Button>
                </div>

                <div className="mt-1 inline-flex items-center gap-2 rounded-2xl border border-border bg-muted text-sm font-medium text-muted-foreground">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`rounded-full px-3 py-1.5 transition-colors ${language === "en" ? "bg-[#6f8f84] text-white" : "hover:text-foreground"
                      }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("es")}
                    className={`rounded-full px-3 py-1.5 transition-colors ${language === "es" ? "bg-[#6f8f84] text-white" : "hover:text-foreground"
                      }`}
                  >
                    Spanish
                  </button>
                </div>

                <Link
                  href="/login"
                  className={`mt-2 inline-flex w-fit rounded-full border border-[#89a49d] bg-[#f2f4f4] font-semibold text-[#5f7e75] dark:border-white dark:bg-card dark:text-white ${language === "es" ? "px-4 py-1 text-[13px]" : "px-8 py-2 text-base"
                    }`}
                >
                  {language === "es" ? "Iniciar sesión" : "Login"}
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
