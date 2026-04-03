"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/images/hero.jpg";
import heroDoctorImage from "@/assets/images/hero-doctor.jpg";
import avatarOne from "@/assets/images/doctor-cardiologist.jpg";
import avatarTwo from "@/assets/images/doctor-neurologist.jpg";
import avatarThree from "@/assets/images/doctor-orthopedic.jpg";

// JSON Data
const popularServices = [
  {
    id: 1,
    title: "Electrical & Technical Services",
    image: heroImage,
  },
  {
    id: 2,
    title: "Home Repair & Maintenance",
    image: avatarTwo,
  },
  {
    id: 3,
    title: "Automotive Services",
    image: heroDoctorImage,
  },
  {
    id: 4,
    title: "Landscaping & Outdoor Work",
    image: avatarThree,
  },
  {
    id: 5,
    title: "Personal Care & Beauty Services",
    image: avatarOne,
  },
];

export default function SearchServicesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  const filteredServices = popularServices.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <section className=" px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1340px]">
        <h2 className="mb-4 text-[32px] font-semibold text-[#1a2130] sm:text-[42px]">
          Search Services Offered
        </h2>

        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search for any service offered"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-16 w-full rounded-2xl border border-[#cfd3da] bg-[#f7f8f9] px-5 pr-20 text-base text-[#1f2430] placeholder:text-[#7f8590] focus:border-[#a1a7b3] focus:outline-none sm:px-6 sm:text-[24px]"
          />
          <button
            type="button"
            aria-label="Search services"
            className="absolute right-3 top-1/2 flex h-12 w-[52px] -translate-y-1/2 items-center justify-center rounded-[10px] bg-[#7f9693] text-white transition-colors hover:bg-[#6f8582]"
          >
            <Search size={22} />
          </button>
        </div>

        <h3 className="mb-5 text-2xl font-semibold text-[#1a2130] sm:text-3xl">Popular Services</h3>

        <div
          ref={sliderTrackRef}
          onScroll={handleTrackScroll}
          className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max snap-x gap-3.5">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="w-[236px] snap-start overflow-hidden rounded-2xl border border-[#cfd3da] bg-[#eceef1]"
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
                  <h4 className="line-clamp-2 text-[17px] font-semibold leading-[1.2] text-[#1b2230]">
                    {service.title}
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
