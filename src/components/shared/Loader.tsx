"use client";

import { motion } from "framer-motion";

interface LoaderProps {
  text?: string;
  fullScreen?: boolean;
}

export default function Loader({
  text = "Unlocking your dreams...",
  fullScreen = true,
}: LoaderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-8 ${
        fullScreen ? "fixed inset-0 z-[100] h-screen w-screen bg-background" : "min-h-[400px] w-full"
      }`}
    >
      <div className="relative flex h-32 w-32 items-center justify-center">
        {/* Outer Ring - Skill Circle */}
        <motion.div
          className="absolute h-full w-full rounded-full border-2 border-[#738C88]/20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Second Ring - Value Exchange */}
        <motion.div
          className="absolute h-[80%] w-[80%] rounded-full border-t-2 border-l-2 border-[#cfaa6b]"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Third Ring - Connection */}
        <motion.div
          className="absolute h-[60%] w-[60%] rounded-full border-b-2 border-r-2 border-[#738C88]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center Pulse - The Dreamer */}
        <motion.div
          className="h-4 w-4 rounded-full bg-[#738C88] shadow-[0_0_20px_rgba(115,140,136,0.6)]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <motion.span
          className="text-lg font-semibold tracking-widest uppercase text-[#738C88]"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {text}
        </motion.span>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full bg-linear-to-r from-[#738C88] to-[#cfaa6b]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}

