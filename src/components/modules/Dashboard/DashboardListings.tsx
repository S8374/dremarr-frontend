import { myListings } from "./dashboard-data";
import { MapPin, MessageSquare, Eye, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardListings() {
  return (
    <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-[20px] font-bold text-slate-800 mb-6 heading">
        My Listings
      </h2>
      <div className="flex flex-col gap-4">
        {myListings.map((listing) => (
          <div
            key={listing.id}
            className="flex items-center gap-6 rounded-[20px] p-4 border border-slate-100 hover:bg-slate-50 transition-all group"
          >
            {/* Thumbnail */}
            <div className="relative h-[110px] w-[150px] shrink-0 rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-2 min-w-0">
              <p className="text-[15px] font-bold text-slate-700 leading-tight">
                {listing.title}
              </p>
              <div className="flex items-center gap-1.5 text-[12px] font-bold text-slate-400">
                <MapPin className="h-4 w-4 shrink-0" />
                {listing.location}
              </div>
              <div className="flex items-center gap-5 text-[12px] font-bold text-slate-300 mt-1">
                <span className="flex items-center gap-2">
                   <Eye className="h-4 w-4" />
                   {listing.views < 10 ? `0${listing.views}` : listing.views} views
                </span>
                <span className="flex items-center gap-2">
                   <MessageSquare className="h-4 w-4" />
                   {listing.messages < 10 ? `0${listing.messages}` : listing.messages} message
                </span>
              </div>
            </div>

            {/* Edit */}
            <Link
              href="/edit-profile"
              className="shrink-0 flex items-center justify-center px-6 h-[40px] rounded-xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[13px] transition-all"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
