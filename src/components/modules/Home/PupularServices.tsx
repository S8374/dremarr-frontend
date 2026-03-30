"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";

// JSON Data
const popularServices = [
  {
    id: 1,
    title: "Electrical & Technical Services",
    image: "/services/electrical.jpg",
  },
  {
    id: 2,
    title: "Home Repair & Maintenance",
    image: "/services/home-repair.jpg",
  },
  {
    id: 3,
    title: "Automotive Services",
    image: "/services/automotive.jpg",
  },
  {
    id: 4,
    title: "Landscaping & Outdoor Work",
    image: "/services/landscaping.jpg",
  },
  {
    id: 5,
    title: "Personal Care & Beauty Services",
    image: "/services/beauty.jpg",
  },
];

export default function SearchServicesSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = popularServices.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Title */}
        <h2 className="mb-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
          Serch Services
        </h2>

        {/* Search Bar - Exact Match */}
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search for any service"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-5 pr-14 text-sm placeholder:text-gray-500 shadow-sm focus:border-gray-300 focus:outline-none sm:py-4 sm:pl-6 sm:text-base"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 transition-colors p-2.5 rounded-xl cursor-pointer">
            <Search size={22} className="text-gray-600" />
          </div>
        </div>

        {/* Popular Services */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-gray-900 sm:text-2xl">Popular Services</h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100 sm:h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title Card - Exact Style */}
                <div className="p-4 border-t border-gray-100 bg-white">
                  <h4 className="text-[15px] font-medium text-gray-900 leading-tight line-clamp-2 min-h-[42px]">
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
