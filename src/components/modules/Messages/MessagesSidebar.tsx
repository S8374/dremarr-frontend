"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/shared/language-provider";

const messagesData = [
  {
    id: 1,
    name: "Killan James",
    message: "Typing...",
    messageEs: "Escribiendo...",
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
    messageEs: "Wow realmente genial",
    time: "01:15 AM",
    avatar: "https://i.pravatar.cc/150?u=team",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    message: "Ok, That's perfect",
    messageEs: "Ok, eso es perfecto",
    time: "12:00 AM",
    avatar: "https://i.pravatar.cc/150?u=maria",
    unread: 0,
    online: true,
  },
];

export function MessagesSidebar() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <div className="flex flex-col h-full bg-background border-r border-border overflow-hidden scrollbar-hide">
      <div className="p-8 pb-6">
        <div className="flex items-center gap-6 mb-8">
          <button 
            onClick={() => window.history.back()}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-muted/20 transition-all hover:bg-muted/40 active:scale-90"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-[28px] font-bold text-foreground tracking-tight heading">
            {isSpanish ? "Mensajes" : "Messages"}
          </h1>
        </div>

        <div className="relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50" />
          <Input 
            placeholder={isSpanish ? "Buscar..." : "Search..."} 
            className="pl-14 h-14 bg-muted/30 dark:bg-muted/10 border-none rounded-2xl text-[16px] text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:bg-muted/50 transition-all"
          />
        </div>
      </div>

      <div 
        data-lenis-prevent
        className="flex-1 overflow-y-auto mt-2 px-4 space-y-2 scrollbar-hide"
      >
        {messagesData.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "group relative flex items-center gap-4 p-2 cursor-pointer transition-all duration-300 rounded-xl",
              msg.id === 1 ? "bg-muted/50 dark:bg-muted/20 font-bold" : "hover:bg-muted/30 dark:hover:bg-muted/10"
            )}
          >
            <div className="relative shrink-0">
              <Avatar className="h-[64px] w-[64px] shadow-sm border border-background">
                <AvatarImage src={msg.avatar} alt={msg.name} />
                <AvatarFallback>{msg.name[0]}</AvatarFallback>
              </Avatar>
              {msg.online && (
                <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500 shadow-sm" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-bold text-[17px] text-foreground truncate tracking-tight">{msg.name}</h3>
                <span className="text-[12px] font-bold text-muted-foreground/60">{msg.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className={cn(
                  "text-[14px] truncate",
                  msg.isTyping ? "text-emerald-500 font-bold" : "text-muted-foreground font-medium"
                )}>
                  {isSpanish ? msg.messageEs : msg.message}
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
