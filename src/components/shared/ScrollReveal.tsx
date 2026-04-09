"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 1, 0.36, 1], // Custom cubic-bezier for a premium snap
      }}
    >
      {children}
    </motion.div>
  );
}
