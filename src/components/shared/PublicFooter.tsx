"use client";

import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./language-provider";

export default function Footer() {
    const { language } = useLanguage();
    const isSpanish = language === "es";

    return (
        <footer className="bg-[#0a0a0a] text-white pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12">

                    {/* Logo & Tagline */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl font-bold tracking-wider text-emerald-400">DREMARR</span>
                        </div>
                        <p className={`text-gray-400 ${isSpanish ? "text-base" : "text-lg"}`}>{language === "es" ? "Donde las habilidades se convierten en valor." : "Where Skills Become Value."}</p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold text-lg mb-6">{language === "es" ? "Enlaces" : "Quick Links"}</h3>
                        <ul className="space-y-3 text-gray-400">
                            {/* <li><Link href="/" className="hover:text-white transition">{language === "es" ? "Inicio" : "Home"}</Link></li> */}
                            <li><Link href="/marketplace" className="hover:text-white transition">{language === "es" ? "Mercado" : "Marketplace"}</Link></li>
                            <li><Link href="/membership" className="hover:text-white transition">{language === "es" ? "Membresía" : "Membership"}</Link></li>
                            <li><Link href="/message" className="hover:text-white transition">{language === "es" ? "Mensajes" : "Message"}</Link></li>
                            {/* <li><Link href="/login" className="hover:text-white transition">{language === "es" ? "Iniciar sesión" : "Login"}</Link></li> */}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-semibold text-lg mb-6">{language === "es" ? "Conectar" : "Connect"}</h3>
                        <div className="space-y-4">
                            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                                <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                Instagram
                            </a>
                            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                                <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                                    <Facebook className="w-5 h-5" />
                                </div>
                                Facebook
                            </a>
                            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                                <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                LinkedIn
                            </a>
                            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                                <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                                    <span className="text-xl">♫</span>
                                </div>
                                Tiktok
                            </a>
                        </div>
                    </div>

                    {/* Stay Updated */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-semibold text-lg mb-6">{language === "es" ? "Mantente al día" : "Stay Updated"}</h3>
                        <p className={`text-gray-400 mb-4 ${isSpanish ? "text-sm" : ""}`}>{language === "es" ? "Recibe las últimas noticias y ofertas especiales" : "Get the latest news and special offers"}</p>

                        <div className="relative">
                            <input
                                type="email"
                                placeholder={language === "es" ? "Tu correo" : "Your email"}
                                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-full py-4 pl-6 pr-14 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 transition w-10 h-10 rounded-full flex items-center justify-center">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>hello@dremmarr.com</p>

                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-white transition">{language === "es" ? "Términos" : "Terms & conditions"}</Link>
                        <Link href="/privacy" className="hover:text-white transition">{language === "es" ? "Privacidad" : "Privacy Policy"}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}