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
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Serch Services
        </h2>

        {/* Search Bar - Exact Match */}
        <div className="relative  mb-10">
          <input
            type="text"
            placeholder="Search for any service"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-6 pr-14 py-4 bg-white border border-gray-200 rounded-2xl text-base placeholder:text-gray-500 focus:outline-none focus:border-gray-300 shadow-sm"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 transition-colors p-2.5 rounded-xl cursor-pointer">
            <Search size={22} className="text-gray-600" />
          </div>
        </div>

        {/* Popular Services */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Popular Services</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
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
