import { myListings } from "./dashboard-data";
import { MapPin, MessageSquare, Eye, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardListings() {
  return (
    <div className="rounded-2xl border border-slate-100 dark:border-border/60 bg-white dark:bg-card p-6 shadow-sm">
      <h2 className="text-[18px] font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
        My Listings
      </h2>
      <div className="flex flex-col gap-4">
        {myListings.map((listing) => (
          <div
            key={listing.id}
            className="flex items-center gap-4 rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-muted/20 transition-colors"
          >
            {/* Thumbnail */}
            <div className="relative h-[80px] w-[100px] shrink-0 rounded-xl overflow-hidden">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-1.5 min-w-0">
              <p className="text-[14px] font-bold text-slate-800 dark:text-white leading-snug line-clamp-2">
                {listing.title}
              </p>
              <div className="flex items-center gap-1 text-[12px] font-medium text-slate-500">
                <MapPin className="h-3 w-3 shrink-0" />
                {listing.location}
              </div>
              <div className="flex items-center gap-4 text-[12px] font-medium text-slate-400">
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {listing.views}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {listing.messages}
                </span>
              </div>
            </div>

            {/* Edit */}
            <Link
              href="/edit-profile"
              className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#728e85] hover:bg-[#5f7e75] text-white font-bold text-[12px] transition-all"
            >
              <Pencil className="h-3 w-3" />
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
