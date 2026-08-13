"use client";

import { motion } from "framer-motion";
import ContactTrigger from "@/components/ContactTrigger";
import { DURATION_FAST, EASE_STANDARD } from "@/lib/motion";
import { useActiveSection } from "@/lib/hooks";

const underline = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
};
const SECTION_IDS = ["work", "experiments", "signal", "about"];

function NavLink({ href, isActive, children }: { href: string; isActive: boolean; children: string }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      animate={isActive ? "hover" : "rest"}
      whileHover="hover"
      className={`relative transition-colors ${isActive ? "text-dark-text" : "text-dark-text-muted hover:text-dark-text"
        }`}
    >
      {children}
      <motion.span
        variants={underline}
        transition={{ duration: DURATION_FAST, ease: EASE_STANDARD }}
        className="absolute left-0 -bottom-1 h-px w-full bg-amber origin-left"
      />
    </motion.a>
  );
}

export default function Nav() {
  const activeId = useActiveSection(SECTION_IDS);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 bg-dark-surface/80 border-b border-dark-border backdrop-blur-sm">
      <div className="container-app h-full flex items-center justify-between">
        <a href="/" className="font-mono text-small text-dark-text">
          Ahmed Nawaz
        </a>

        <div className="hidden md:flex items-center gap-lg font-mono text-mono-label uppercase tracking-wide">
          <NavLink href="/#work" isActive={activeId === "work"}>Work</NavLink>
          <NavLink href="/#experiments" isActive={activeId === "experiments"}>Experiments</NavLink>
          <NavLink href="/#signal" isActive={activeId === "signal"}>Signal</NavLink>
          <NavLink href="/#about" isActive={activeId === "about"}>About</NavLink>
        </div>

        <ContactTrigger
          whileHover={{ scale: 1.02, boxShadow: "var(--shadow-glow-amber)" }}
          className="cursor-pointer rounded-md bg-amber px-lg py-sm font-mono text-mono-label uppercase tracking-wide text-dark-bg"
        >
          Connect
        </ContactTrigger>
      </div>
    </nav>
  );
}