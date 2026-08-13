"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";
import { motion, AnimatePresence } from "framer-motion";
import { DURATION_FAST, EASE_STANDARD } from "@/lib/motion";
import { socialLinks } from "@/lib/social";
import Link from "next/link";

// TODO: replace with your real n8n workflow webhook URL once it's live
const N8N_WEBHOOK_URL = "https://your-n8n-instance.com/webhook/contact-form";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col h-screen w-screen overflow-hidden text-dark-text">
        {/* Fixed Header Bar */}
        <header className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-dark-border bg-dark-bg/90 backdrop-blur-sm z-10">
          <Link
            href="/"
            onClick={close}
            className="font-semibold text-base sm:text-lg text-dark-text hover:text-amber transition-colors"
          >
            Ahmed Nawaz
          </Link>
          <button
            onClick={close}
            type="button"
            className="cursor-pointer flex items-center gap-1.5 font-mono text-xs sm:text-sm text-dark-text-muted hover:text-dark-text transition-colors bg-dark-surface/50 hover:bg-dark-surface px-3 py-1.5 rounded-full border border-dark-border"
          >
            Close <X className="w-4 h-4" />
          </button>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto px-4 py-8 sm:py-12 flex flex-col items-center justify-center">
          <div className="w-full mx-auto flex flex-col items-center gap-6">
            
            {/* Header Text & Email */}
            <div className="flex flex-col pt-3xl items-center gap-3 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-dark-text">
                Let&apos;s talk
              </h2>

              <a
                href="mailto:Ahmednawaz3926@gmail.com"
                className="text-base sm:text-xl font-semibold text-amber hover:underline underline-offset-4 transition-all"
              >
                Ahmednawaz3926@gmail.com
              </a>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center items-center gap-4 font-mono text-xs sm:text-sm text-dark-text-muted mt-1">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form Card */}
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 rounded-xl border border-dark-border bg-dark-surface/90 p-5 sm:p-8 shadow-2xl backdrop-blur-sm"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-xs text-dark-text-muted uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-dark-border bg-dark-bg px-3.5 py-2.5 text-sm text-dark-text placeholder:text-dark-text-muted/40 outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-xs text-dark-text-muted uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-dark-border bg-dark-bg px-3.5 py-2.5 text-sm text-dark-text placeholder:text-dark-text-muted/40 outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-xs text-dark-text-muted uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-dark-border bg-dark-bg px-3.5 py-2.5 text-sm text-dark-text placeholder:text-dark-text-muted/40 outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={status !== "sending" ? { scale: 1.01 } : {}}
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                transition={{ duration: DURATION_FAST, ease: EASE_STANDARD }}
                className="w-full cursor-pointer rounded-lg bg-amber px-4 py-3 font-semibold text-dark-bg disabled:opacity-50 mt-2 text-sm shadow-md hover:brightness-110 transition-all"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "sent" && (
                <p className="text-xs text-emerald-400 font-mono text-center mt-1">
                  ✓ Thanks — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 font-mono text-center mt-1">
                  ✕ Something went wrong. Try again, or email me directly.
                </p>
              )}
            </form>
          </div>
        </main>
      </div>
    </AnimatePresence>
  );
}