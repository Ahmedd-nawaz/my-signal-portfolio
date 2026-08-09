"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_STANDARD, DURATION_BASE, STAGGER_STEP } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER_STEP } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION_BASE, ease: EASE_STANDARD } },
};

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}