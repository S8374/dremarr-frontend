"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen font-sans">

            {/* ── HERO SECTION ── */}
            <section className="max-w-6xl mx-auto px-8 pt-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        What if your skills<br />could be your{" "}
                        <span className="text-[#7a9e8e]">currency?</span>
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm">
                        DreMarr was inspired by real life, where doing hair helped a daughter stay
                        in competitive cheer, and electrical work was traded to meet everyday needs.
                        We built this platform so anyone can turn their skills into real value.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        <Button className="bg-[#3d5a4c] hover:bg-[#2e4439] text-white rounded-full px-6 py-2 text-sm font-semibold">
                            Join The Community
                        </Button>
                        <Button
                            variant="outline"
                            className="border-[#3d5a4c] text-[#3d5a4c] hover:bg-[#3d5a4c] hover:text-white rounded-full px-6 py-2 text-sm font-semibold"
                        >
                            Start Trading Skills
                        </Button>
                    </div>
                </div>

                {/* Right — hero image card */}
                <div className="relative flex justify-end">
                    <div className="relative w-full max-w-sm">
                        {/* Background teal card offset */}
                        <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl z-0" />
                        <Image
                            src="/cover.png"
                            alt="Hand holding a lightbulb"
                            className="w-full h-72 object-cover"
                            width={600}
                            height={520}
                        />
                    </div>
                </div>
            </section>

            {/* ── OUR STORY ── */}
            <section className="max-w-6xl mx-auto px-8 pb-20">
                <div className="bg-[#f0f2f0] rounded-2xl px-8 md:px-16 py-12 text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-5">Our Story</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        DreMarr was built on a simple idea:{" "}
                        <span className="font-semibold italic">what if your skills could be your currency?</span>
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-2xl mx-auto">
                        Like many people, we saw how expensive everyday services have become, and at the same time,
                        how many talented individuals have skills they don't always get to fully use or monetize.
                        There had to be a better way.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
                        So we created DreMarr, a platform where people can trade what they're good at for what they need.
                        This isn't just about saving money, it's about building a community where people support each other
                        and create opportunities without always relying on cash.
                    </p>
                </div>
            </section>

            {/* ── MEET THE FOUNDERS ── */}
            <section className="max-w-6xl mx-auto px-8 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left text */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-5">Meet The Founders</h2>
                    <div>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                DreMarr was created by Andrew and Tamara, a husband-and-wife team who believe in building
                                something bigger than themselves.
                            </p>
                            <p>
                                With backgrounds in cosmetology and electrical work, they understand firsthand the value of
                                skilled trades and the hard work behind them. Long before DreMarr existed, this way of living
                                was already part of their everyday lives.
                            </p>
                            <p>
                                As a young mother, Tamara often traded doing hair so her daughter could participate in
                                competitive cheer, turning her skill into opportunity when money was tight. In the same way,
                                Andrew has frequently traded electrical work for things their family needed, reinforcing the
                                idea that skills hold real, tangible value.
                            </p>
                            <p>
                                Coming from different backgrounds but sharing the same vision, they saw how often people are
                                limited by finances despite having something valuable to offer. They wanted to create a
                                platform that empowers others to use their skills as a form of currency, whether to earn,
                                trade, or grow.
                            </p>
                            <p>
                                DreMarr is a reflection of their shared belief in community, resourcefulness, and creating
                                opportunities that don't depend solely on money.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right — founder photo */}
                <div className="flex flex-col items-center mt-0 md:mt-14">
                    <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-xs border-2 border-muted-foreground">
                        <Image
                            src="/about.png"
                            alt="Andrew and Tamara"
                            className="w-full h-80 object-cover object-top"
                            width={400}
                            height={520}
                        />
                    </div>
                    <p className="mt-3 font-semibold text-gray-800 text-sm">Andrew and Tamara</p>
                    <p className="text-gray-500 text-xs">Founder of Dremarr</p>
                </div>
            </section>

            {/* ── MISSION & VISION ── */}
            <section className="">
                <div
                    className="relative overflow-hidden px-8 text-center"
                    
                >
                    <div className="relative z-10 max-w-xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">Mission &amp; Vision</h2>
                        <p className="text-[#d0e6dc] text-sm leading-relaxed">
                            To empower individuals to exchange, monetize, and access services through their skills,
                            creating opportunities beyond traditional financial limitations.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}