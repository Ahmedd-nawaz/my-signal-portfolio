"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useContactModal } from "@/components/ContactModalProvider";
import { DURATION_FAST, EASE_STANDARD } from "@/lib/motion";

type ContactTriggerProps = Omit<HTMLMotionProps<"button">, "onClick">;

export default function ContactTrigger({ className, children, ...props }: ContactTriggerProps) {
  const { open } = useContactModal();
  return (
    <motion.button
      onClick={open}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: DURATION_FAST, ease: EASE_STANDARD }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}