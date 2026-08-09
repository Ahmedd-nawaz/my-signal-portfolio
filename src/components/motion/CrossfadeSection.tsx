"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export default function CrossfadeSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="sticky top-0">
      <motion.div style={{ opacity }}>{children}</motion.div>
    </div>
  );
}