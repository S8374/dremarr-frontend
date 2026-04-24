"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./language-provider";

export default function Footer() {
    const { language } = useLanguage();
    const isSpanish = language === "es";

    const quickLinks = [
        { href: "/#", label: isSpanish ? "Mercado" : "Marketplace" },
        // marketplace
        { href: "/#", label: isSpanish ? "Membresia" : "Membership" },
        // membership
        { href: "/#", label: isSpanish ? "Mensajes" : "Message" },
        // messages
        { href: "/#", label: isSpanish ? "Nuestra historia" : "Our story" },
        // about
        { href: "/#", label: isSpanish ? "Soporte" : "Support" },
        // support
    ];

    return (
        <footer className="overflow-x-hidden bg-[#040607] pt-16 pb-6 text-white">
            <div className="container">
                <div className="grid grid-cols-1 justify-items-center gap-12 text-center md:grid-cols-2 md:justify-items-stretch md:gap-10 md:text-left lg:grid-cols-[1.2fr_1fr_1fr_1.15fr]">
                    <div className="w-full">
                        <h2 className="text-[36px] font-semibold leading-none tracking-wide text-brand font-brand">DREMARR</h2>
                        <p className="mt-2 text-[16px] text-[#cad2d7]">
                            {isSpanish ? "Donde la habilidad es moneda" : "Where Skill is Currency"}
                        </p>
                    </div>

                    <div className="w-full">
                        <h3 className="text-lg font-semibold text-white">{isSpanish ? "Enlaces" : "Quick Links"}</h3>
                        <ul className="mt-5 grid justify-center gap-3 text-[#c8d0d5] md:block md:space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="inline-block min-w-[150px] text-center transition-colors hover:text-white md:min-w-0 md:text-left">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full">
                        <h3 className="text-lg font-semibold text-white">{isSpanish ? "Conectar" : "Connect"}</h3>
                        <div className="mt-5 grid justify-center gap-4 text-[#c8d0d5] md:block md:space-y-4">
                            <a href="#" className="mx-auto flex w-fit items-center justify-center gap-3 transition-colors hover:text-white md:mx-0 md:w-auto md:justify-start">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#7f9b95] text-[#f2f5f6]">
                                    <Instagram className="h-5 w-5" />
                                </span>
                                Instagram
                            </a>
                            <a href="#" className="mx-auto flex w-fit items-center justify-center gap-3 transition-colors hover:text-white md:mx-0 md:w-auto md:justify-start">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#7f9b95] text-[#f2f5f6]">
                                    <Facebook className="h-5 w-5" />
                                </span>
                                Facebook
                            </a>
                            <a href="#" className="mx-auto flex w-fit items-center justify-center gap-3 transition-colors hover:text-white md:mx-0 md:w-auto md:justify-start">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#7f9b95] text-[#f2f5f6]">
                                    <Linkedin className="h-5 w-5" />
                                </span>
                                Linkedin
                            </a>
                            <a href="#" className="mx-auto flex w-fit items-center justify-center gap-3 transition-colors hover:text-white md:mx-0 md:w-auto md:justify-start">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#7f9b95] text-[20px] text-[#f2f5f6]">
                                    ♪
                                </span>
                                Tiktok
                            </a>
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="text-lg font-semibold text-white">{isSpanish ? "Mantente al dia" : "Stay Updated"}</h3>
                        <p className="mx-auto mt-4 max-w-sm text-[17px] text-[#c8d0d5] md:mx-0">
                            {isSpanish ? "Recibe las ultimas noticias y ofertas especiales" : "Get the latest news and special offers"}
                        </p>

                        <div className="mx-auto mt-5 flex h-11 w-full max-w-[370px] items-center overflow-hidden rounded-full bg-[#1d282b] md:mx-0">
                            <input
                                type="email"
                                placeholder={isSpanish ? "Tu correo" : "Your email"}
                                className="h-full flex-1 bg-transparent px-5 text-[14px] text-white placeholder:text-[#c4cbd0] focus:outline-none"
                            />
                            <button
                                type="button"
                                className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#8aa39d] text-white"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-[#2d363c] pt-4 text-[15px] text-[#c8d0d5]">
                    <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start md:gap-4">
                            <span>© 2026 DreMarr LLC. All rights reserved</span>
                            <span className="hidden lg:inline">|</span>
                            <span>hello@dremmarr.com</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-end">
                            {/* terms */}
                            <Link href="/#" className="transition-colors hover:text-white">
                                {isSpanish ? "Terminos y condiciones" : "Terms & conditions"}
                            </Link>
                            {/* privacy */}
                            <Link href="/#" className="transition-colors hover:text-white">
                                {isSpanish ? "Politica de privacidad" : "Privacy Policy"}
                            </Link>
                            {/* about */}
                            <Link href="/#" className="transition-colors hover:text-white">
                                {isSpanish ? "Sobre nosotros" : "About Us"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}