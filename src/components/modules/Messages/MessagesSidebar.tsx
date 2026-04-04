"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const messages = [
  {
    id: 1,
    name: "Killan James",
    message: "Typing...",
    time: "04:30 PM",
    avatar: "https://i.pravatar.cc/150?u=killan",
    unread: 2,
    online: true,
    isTyping: true,
  },
  {
    id: 2,
    name: "Ahmed Medi",
    message: "Wow really Cool",
    time: "01:15 AM",
    avatar: "https://i.pravatar.cc/150?u=team",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    message: "Ok, That's perfect",
    time: "12:00 AM",
    avatar: "https://i.pravatar.cc/150?u=maria",
    unread: 0,
    online: true,
  },
];

export function MessagesSidebar() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-card border-r border-border/10 overflow-hidden scrollbar-hide">
      <div className="p-10 pb-6">
        <div className="flex items-center gap-6 mb-10">
          <button className="h-12 w-12 flex items-center justify-center rounded-full bg-slate-50 transition-all hover:bg-slate-100 active:scale-95">
            <ChevronLeft className="h-6 w-6 stroke-[2]" />
          </button>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Messages</h1>
        </div>

        <div className="relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
          <Input 
            placeholder="Search..." 
            className="pl-14 h-14 bg-slate-50 dark:bg-muted/10 border-none rounded-2xl text-[16px]  placeholder:text-slate-300 focus-visible:ring-0 focus-visible:bg-slate-100 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mt-2 px-4 space-y-2 scrollbar-hide">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "group relative flex items-center gap-4 p-2 cursor-pointer transition-all duration-300 rounded-xl",
              msg.id === 1 ? "bg-slate-50 dark:bg-muted/10 font-bold" : "hover:bg-slate-50/50 dark:hover:bg-muted/10"
            )}
          >
            <div className="relative shrink-0">
              <Avatar className="h-[64px] w-[64px] shadow-sm">
                <AvatarImage src={msg.avatar} alt={msg.name} />
                <AvatarFallback>{msg.name[0]}</AvatarFallback>
              </Avatar>
              {msg.online && (
                <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-bold text-[17px] text-slate-800 dark:text-white truncate tracking-tight">{msg.name}</h3>
                <span className="text-[12px] font-bold text-slate-400">{msg.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className={cn(
                  "text-[14px] truncate",
                  msg.isTyping ? "text-emerald-500 font-bold" : "text-slate-400 font-medium"
                )}>
                  {msg.message}
                </p>
                {msg.unread > 0 && (
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-[10px] font-bold text-white shrink-0">
                    {msg.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
