"use client";

import { MessagesSidebar } from "@/components/modules/Messages/MessagesSidebar";
import { ChatArea } from "@/components/modules/Messages/ChatArea";
import { ProfileSidebar } from "@/components/modules/Messages/ProfileSidebar";

export default function MessagesPage() {
  return (
    <div className=" h-[calc(100vh-80px)] overflow-hidden">
      <div className=" max-w-[1440px] mx-auto h-full flex ">
        {/* Sidebar - Fixed width */}
        <aside className="w-[340px] hidden lg:block h-full border-r border-border/10 shrink-0 overflow-y-auto scrollbar-hide">
          <MessagesSidebar />
        </aside>

        {/* Main Chat Area - Flexible */}
        <main className="flex-1 h-full min-w-0 bg-white dark:bg-card overflow-y-auto scrollbar-hide">
          <ChatArea />
        </main>

        {/* Profile Detail Sidebar - Right side */}
        <aside className="w-[300px] hidden xl:block h-full shrink-0 overflow-y-auto scrollbar-hide">
          <ProfileSidebar />
        </aside>
      </div>
    </div>
  );
}

