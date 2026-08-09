"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_STANDARD, DURATION_BASE } from "@/lib/motion";

export default function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: DURATION_BASE, ease: EASE_STANDARD, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}