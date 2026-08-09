"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import ContactTrigger from "@/components/ContactTrigger";
import { DURATION_FAST, EASE_STANDARD } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center gap-lg px-md pt-16 bg-dark-bg">
      <FadeIn>
        <div className="rounded-full border border-dark-border bg-dark-surface/50 px-lg py-sm">
          <span className="font-mono text-mono-label uppercase tracking-wide text-amber">
            &gt; currently building: WhatsApp AI Receptionist
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <h1 className="text-h1-mobile lg:text-h1 font-bold text-dark-text">
          AHMED NAWAZ
        </h1>
      </FadeIn>

      <FadeIn delay={0.16}>
        <p className="w-full text-body text-dark-text-muted">
          I design and build AI products, alone, end to end.
        </p>
      </FadeIn>

      <FadeIn delay={0.24}>
        <div className="flex flex-col sm:flex-row gap-md mt-md">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02, boxShadow: "var(--shadow-glow-amber)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: DURATION_FAST, ease: EASE_STANDARD }}
            className="rounded-md bg-amber px-lg py-md text-dark-bg font-semibold"
          >
            View Projects
          </motion.a>
          <ContactTrigger className="cursor-pointer rounded-md border border-current px-lg py-md text-dark-text font-semibold hover:border-amber hover:bg-amber/8 transition-colors">
            Get in Touch
          </ContactTrigger>
        </div>
      </FadeIn>

      <div className="absolute bottom-2xl flex flex-col items-center gap-xs text-dark-text-muted/50">
        <span className="font-mono text-mono-label uppercase tracking-wide">
          Scroll
        </span>
        <span>↓</span>
      </div>
    </section>
  );
}