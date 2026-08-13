import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-light-bg py-4xl px-md">
      <div className="container-app grid lg:grid-cols-2 gap-3xl items-center">
        <FadeIn className="flex flex-col gap-lg">
          <div className="flex items-center gap-sm font-mono text-mono-label uppercase tracking-wide text-light-text-muted">
            <span className="text-amber">|</span> About
          </div>

          <h2 className="text-h2-mobile lg:text-h2 font-semibold text-light-text">
            Solo builder navigating <br /> the signal.
          </h2>

          <p className="text-body text-light-text-muted">
            Currently shipping two products in public: a WhatsApp AI
            Receptionist and an AI Household Expense Detective. Building
            phase by phase, focusing on utility and clarity over noise.
          </p>

          <div className="flex flex-wrap gap-lg pt-lg border-t border-light-border font-mono text-small text-light-text">
            <span className="flex items-center gap-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              2 products in build
            </span>
            <span className="flex items-center gap-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-light-text" />
              Solo since day one
            </span>
            <span className="flex items-center gap-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-light-text" />
              Build in public
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="relative w-full h-160 mx-auto">
          <div className="absolute inset-0 translate-x-2 -translate-y-2 rounded-lg bg-amber/5 border border-amber/10" />
          <div className="absolute inset-0 -rotate-2 rounded-lg border border-light-border bg-light-surface shadow-md overflow-hidden">
            <Image
              src="/Ahmed.jpg"
              alt="Ahmed Nawaz"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
