"use client";

import { useLanguage } from "@/components/shared/language-provider";
import { myListings } from "./dashboard-data";
import { MapPin, MessageSquare, Eye, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardListings() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
      <h2 className="text-[22px] font-bold text-foreground mb-6">
        {isSpanish ? "Mis Anuncios" : "My Listings"}
      </h2>
      <div className="flex flex-col gap-4">
        {myListings.map((listing) => (
          <div
            key={listing.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-[20px] p-4 border border-border hover:bg-muted/30 transition-all group"
          >
            {/* Thumbnail */}
            <div className="relative h-[110px] w-full sm:w-[150px] shrink-0 rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-2 min-w-0">
              <p className="text-[15px] font-bold text-foreground leading-tight">
                {listing.title}
              </p>
              <div className="flex items-center gap-1.5 text-[12px] font-bold text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                {listing.location}
              </div>
              <div className="flex items-center gap-5 text-[12px] font-bold text-muted-foreground/60 mt-1">
                <span className="flex items-center gap-2">
                   <Eye className="h-4 w-4" />
                   {listing.views < 10 ? `0${listing.views}` : listing.views} {isSpanish ? "vistas" : "views"}
                </span>
                <span className="flex items-center gap-2">
                   <MessageSquare className="h-4 w-4" />
                   {listing.messages < 10 ? `0${listing.messages}` : listing.messages} {isSpanish ? "mensaje" : "message"}
                </span>
              </div>
            </div>

            {/* Edit */}
            <Link
              href="/edit-profile"
              className="shrink-0 flex items-center gap-2 px-6 h-[40px] rounded-xl bg-[#738C88] hover:bg-[#738C88] text-background dark:text-background font-bold text-[13px] transition-all border border-border"
            >
              <Pencil className="h-3.5 w-3.5" />
              {isSpanish ? "Editar" : "Edit"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
