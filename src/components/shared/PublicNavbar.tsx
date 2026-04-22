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

import { usePathname } from "next/navigation";

const PublicNavbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const isSpanish = language === "es";
  const modeLabel = theme ? theme.charAt(0).toUpperCase() + theme.slice(1) : "Theme";
  const languageLabel = isSpanish ? "Español" : "English";

  const navItems = [
    { href: "/", label: isSpanish ? "Inicio" : "Home" },
    { href: "/marketplace", label: isSpanish ? "Mercado" : "Marketplace" },
    //marketplace 
    { href: "/membership", label: isSpanish ? "Membresía" : "Membership" },
    // membership
  ];

  return (
    <header className={`w-full border-border/70 backdrop-blur-md ${isHomePage ? "bg-background/95" : "bg-[#f3f4f6] dark:bg-[#1a1c20]/95"}`}>
      <div className="container flex items-center justify-between py-4 md:py-5">
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
            // messages
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="ml-1 inline-flex items-center gap-1.5 rounded-full border-border/70 bg-background px-3 py-1.5 text-[12px] font-semibold text-foreground shadow-[0_10px_30px_-24px_rgba(15,23,42,0.55)] transition-transform hover:-translate-y-0.5 dark:bg-muted/20 lg:gap-2 lg:px-4 lg:py-2"
                >
                  <span className={`max-w-[78px] truncate ${isSpanish ? "text-[11px]" : ""}`}>{languageLabel}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 rounded-2xl border-border/60 p-1 shadow-lg">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <Link
          href="/login"
          // login
          className={`hidden items-center justify-center rounded-full border border-[#88a39b] bg-[#f3f4f5] font-semibold text-[#5f7e75] shadow-[0_2px_0_rgba(101,132,123,0.22)] dark:border-white dark:bg-card dark:text-white md:inline-flex px-6 py-1.5 text-sm lg:px-8 lg:py-2 lg:text-base ${isSpanish ? "xl:px-10 xl:py-4 xl:text-[13px] xl:leading-none" : "xl:px-14 xl:py-2.5 xl:text-[19px]"}`}
        >
          {language === "es" ? "Iniciar sesión" : "Log In"}
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
            <SheetContent side="right" className="flex w-[85vw] flex-col border-l border-border/40 bg-background/95 p-0 backdrop-blur-xl sm:max-w-xs">
              <div className="flex h-full flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-border/40 px-6 py-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                      <Image
                        src={logo}
                        alt="Dremarr logo"
                        width={32}
                        height={32}
                        className="h-7 w-7 rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-foreground">Dremarr</span>
                  </div>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center rounded-2xl px-4 py-4 text-[17px] font-semibold text-foreground/80 transition-all active:bg-primary/10 active:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Settings / Preferences */}
                  <div className="mt-8">
                    <h4 className="mb-4 px-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                      {isSpanish ? "Preferencias" : "Preferences"}
                    </h4>
                    
                    <div className="space-y-6 rounded-3xl bg-muted/30 p-4 border border-border/40">
                      {/* Theme Selection */}
                      <div className="space-y-3">
                        <p className="px-1 text-[13px] font-bold text-foreground/70">{isSpanish ? "Tema" : "Appearance"}</p>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            onClick={() => setTheme("light")}
                            className={`flex flex-col items-center gap-1.5 rounded-2xl py-2.5 text-[11px] font-bold transition-all ${theme === "light" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:bg-background/50"}`}
                          >
                            <Sun className="h-4 w-4" /> Light
                          </button>
                          <button
                            onClick={() => setTheme("dark")}
                            className={`flex flex-col items-center gap-1.5 rounded-2xl py-2.5 text-[11px] font-bold transition-all ${theme === "dark" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:bg-background/50"}`}
                          >
                            <Moon className="h-4 w-4" /> Dark
                          </button>
                          <button
                            onClick={() => setTheme("system")}
                            className={`flex flex-col items-center gap-1.5 rounded-2xl py-2.5 text-[11px] font-bold transition-all ${theme === "system" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:bg-background/50"}`}
                          >
                            <Laptop className="h-4 w-4" /> System
                          </button>
                        </div>
                      </div>

                      {/* Language Selection */}
                      <div className="space-y-3">
                        <p className="px-1 text-[13px] font-bold text-foreground/70">{isSpanish ? "Idioma" : "Language"}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setLanguage("en")}
                            className={`flex-1 rounded-2xl py-2.5 text-[13px] font-bold transition-all ${language === "en" ? "bg-background text-primary shadow-sm ring-1 ring-primary/20" : "bg-muted/40 text-muted-foreground hover:bg-background/50"}`}
                          >
                            English
                          </button>
                          <button
                            onClick={() => setLanguage("es")}
                            className={`flex-1 rounded-2xl py-2.5 text-[13px] font-bold transition-all ${language === "es" ? "bg-background text-primary shadow-sm ring-1 ring-primary/20" : "bg-muted/40 text-muted-foreground hover:bg-background/50"}`}
                          >
                            Español
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="border-t border-border/40 p-6">
                  <Link
                    href="/#"
                    className="flex w-full items-center justify-center rounded-full border border-[#88a39b] bg-[#f3f4f5] py-3 text-base font-bold text-[#5f7e75] shadow-[0_2px_0_rgba(101,132,123,0.22)] transition-transform active:scale-95 dark:border-white dark:bg-card dark:text-white"
                  >
                    {isSpanish ? "Iniciar sesión" : "Log In"}
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
