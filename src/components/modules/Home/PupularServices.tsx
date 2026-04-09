"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/images/hero.jpg";
import heroDoctorImage from "@/assets/images/hero-doctor.jpg";
import avatarOne from "@/assets/images/doctor-cardiologist.jpg";
import avatarTwo from "@/assets/images/doctor-neurologist.jpg";
import avatarThree from "@/assets/images/doctor-orthopedic.jpg";
import { useLanguage } from "@/components/shared/language-provider";

// JSON Data
const popularServices = [
  {
    id: 1,
    title: "Electrical & Technical Services",
    titleEs: "Servicios eléctricos y técnicos",
    image: heroImage,
  },
  {
    id: 2,
    title: "Home Repair & Maintenance",
    titleEs: "Reparación y mantenimiento del hogar",
    image: avatarTwo,
  },
  {
    id: 3,
    title: "Automotive Services",
    titleEs: "Servicios automotrices",
    image: heroDoctorImage,
  },
  {
    id: 4,
    title: "Landscaping & Outdoor Work",
    titleEs: "Jardinería y trabajos exteriores",
    image: avatarThree,
  },
  {
    id: 5,
    title: "Personal Care & Beauty Services",
    titleEs: "Cuidado personal y belleza",
    image: avatarOne,
  },
];

export default function SearchServicesSection() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const [searchTerm, setSearchTerm] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  const filteredServices = popularServices.filter((service) => {
    const searchableTitle = `${service.title} ${service.titleEs ?? ""}`;
    return searchableTitle.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    const updateScrollBounds = () => {
      if (!sliderTrackRef.current) return;

      const nextMax = Math.max(
        sliderTrackRef.current.scrollWidth - sliderTrackRef.current.clientWidth,
        0
      );

      setMaxScroll(nextMax);
      setSliderValue((prev) => Math.min(prev, nextMax));
    };

    updateScrollBounds();
    window.addEventListener("resize", updateScrollBounds);

    return () => window.removeEventListener("resize", updateScrollBounds);
  }, [filteredServices.length]);

  const handleTrackScroll = () => {
    if (!sliderTrackRef.current) return;
    setSliderValue(sliderTrackRef.current.scrollLeft);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    if (sliderTrackRef.current) {
      sliderTrackRef.current.scrollTo({ left: value, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1340px]">
        <h2 className="mb-4 font-semibold text-foreground text-[32px] sm:text-[42px]">
          {language === "es" ? "Buscar servicios ofrecidos" : "Search Services Offered"}
        </h2>

        <div className="relative mb-10">
          <input
            type="text"
            placeholder={language === "es" ? "Buscar cualquier servicio ofrecido" : "Search for any service offered"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-16 w-full rounded-2xl border border-border bg-card px-5 pr-20 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none sm:px-6 text-base sm:text-[24px]"
          />
          <button
            type="button"
            aria-label="Search services"
            className="absolute right-3 top-1/2 flex h-12 w-[52px] -translate-y-1/2 items-center justify-center rounded-[10px] bg-[#7f9693] text-white transition-colors hover:bg-[#6f8582]"
          >
            <Search size={22} />
          </button>
        </div>

        <h3 className={`mb-5 font-semibold text-foreground ${isSpanish ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`}>
          {language === "es" ? "Servicios populares" : "Popular Services"}
        </h3>

        <div
          ref={sliderTrackRef}
          onScroll={handleTrackScroll}
          className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max snap-x gap-3.5">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="w-[236px] snap-start overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative h-[155px] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="236px"
                    className="object-cover"
                  />
                </div>

                <div className="px-4 py-3.5">
                  <h4 className="line-clamp-2 text-[17px] font-semibold leading-[1.2] text-foreground">
                    {language === "es" ? service.titleEs : service.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {maxScroll > 0 ? (
          <div className="mt-4">
            <input
              type="range"
              min={0}
              max={maxScroll}
              value={sliderValue}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              aria-label="Slide popular services"
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#d5d9df] accent-[#7f9693]"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
