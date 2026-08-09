// "use client";

// import { useState } from "react";
// import { X } from "lucide-react";
// import { useContactModal } from "@/components/ContactModalProvider";
// import { motion } from "framer-motion";
// import { DURATION_FAST, EASE_STANDARD } from "@/lib/motion";
// import { socialLinks } from "@/lib/social";

// // TODO: replace with your real n8n workflow webhook URL once it's live
// const N8N_WEBHOOK_URL = "https://your-n8n-instance.com/webhook/contact-form";

// export default function ContactModal() {
//     const { isOpen, close } = useContactModal();
//     const [form, setForm] = useState({ name: "", email: "", message: "" });
//     const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

//     if (!isOpen) return null;

//     async function handleSubmit(e: React.FormEvent) {
//         e.preventDefault();
//         setStatus("sending");
//         try {
//             const res = await fetch(N8N_WEBHOOK_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(form),
//             });
//             if (!res.ok) throw new Error("Request failed");
//             setStatus("sent");
//             setForm({ name: "", email: "", message: "" });
//         } catch {
//             setStatus("error");
//         }
//     }

//     return (
//         /* 1. Removed overflow-y-auto from here so this wrapper stays fixed */
//         <div className="fixed inset-0 z-50 bg-dark-bg flex flex-col h-screen w-screen overflow-hidden">

//             {/* Fixed Header Bar */}
//             <div className="shrink-0 flex items-center justify-between px-md py-md border-b border-dark-border bg-dark-bg z-10">
//                 <span className="font-semibold text-dark-text">Ahmed Nawaz</span>
//                 <button
//                     onClick={close}
//                     className="cursor-pointer flex items-center gap-xs font-mono text-small text-dark-text-muted hover:text-dark-text transition-colors"
//                 >
//                     Close <X className="w-4 h-4" />
//                 </button>
//             </div>

//             {/* 2. Added overflow-y-auto HERE so only the modal body scrolls */}
//             <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center gap-2xl px-md py-3xl">
//                 <div className="flex flex-col items-center gap-lg text-center">
//                     <h2 className="pt-10 text-h1-mobile lg:text-h2 font-bold text-dark-text">
//                         Let&apos;s talk
//                     </h2>

//                     <a
//                         href="mailto:Ahmednawaz3926@gmail.com"
//                         className="text-h4-mobile lg:text-h4 font-semibold text-amber border-b border-amber pb-xs"
//                     >
//                         Ahmednawaz3926@gmail.com
//                     </a>

//                     <div className="flex items-center gap-lg font-mono text-small text-dark-text-muted">
//                         {socialLinks.map((link) => (
//                             <a
//                                 key={link.label}
//                                 href={link.href}
//                                 className="hover:text-dark-text transition-colors"
//                             >
//                                 {link.label}
//                             </a>
//                         ))}
//                     </div>
//                 </div>

//                 <form
//                     onSubmit={handleSubmit}
//                     className="w-full max-w-1/3 flex flex-col gap-md rounded-lg border border-dark-border bg-dark-surface p-lg"
//                 >
//                     <div className="flex flex-col gap-xs">
//                         <label htmlFor="name" className="font-mono text-small text-dark-text-muted">Name</label>
//                         <input
//                             id="name"
//                             required
//                             value={form.name}
//                             onChange={(e) => setForm({ ...form, name: e.target.value })}
//                             className="rounded-md border border-dark-border bg-dark-bg px-md py-sm text-body text-dark-text outline-none focus:border-amber"
//                         />
//                     </div>

//                     <div className="flex flex-col gap-xs">
//                         <label htmlFor="email" className="font-mono text-small text-dark-text-muted">Email</label>
//                         <input
//                             id="email"
//                             type="email"
//                             required
//                             value={form.email}
//                             onChange={(e) => setForm({ ...form, email: e.target.value })}
//                             className="rounded-md border border-dark-border bg-dark-bg px-md py-sm text-body text-dark-text outline-none focus:border-amber"
//                         />
//                     </div>

//                     <div className="flex flex-col gap-xs">
//                         <label htmlFor="message" className="font-mono text-small text-dark-text-muted">Message</label>
//                         <textarea
//                             id="message"
//                             required
//                             rows={4}
//                             value={form.message}
//                             onChange={(e) => setForm({ ...form, message: e.target.value })}
//                             className="rounded-md border border-dark-border bg-dark-bg px-md py-sm text-body text-dark-text outline-none focus:border-amber resize-none"
//                         />
//                     </div>

//                     <motion.button
//                         type="submit"
//                         disabled={status === "sending"}
//                         whileHover={status !== "sending" ? { scale: 1.02, boxShadow: "var(--shadow-glow-amber)" } : {}}
//                         whileTap={status !== "sending" ? { scale: 0.98 } : {}}
//                         transition={{ duration: DURATION_FAST, ease: EASE_STANDARD }}
//                         className="cursor-pointer rounded-md bg-amber px-lg py-md font-semibold text-dark-bg disabled:opacity-40"
//                     >
//                         {status === "sending" ? "Sending..." : "Send Message"}
//                     </motion.button>


//                     {status === "sent" && (
//                         <p className="text-small text-success">Thanks — I&apos;ll get back to you soon.</p>
//                     )}
//                     {status === "error" && (
//                         <p className="text-small text-error">Something went wrong. Try again, or email me directly.</p>
//                     )}
//                 </form>
//             </div>
//         </div >
//     );
// }


























"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";
import { motion } from "framer-motion";
import { DURATION_FAST, EASE_STANDARD } from "@/lib/motion";
import { socialLinks } from "@/lib/social";

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
        <div className="fixed inset-0 z-50 bg-dark-bg flex flex-col h-screen w-screen overflow-hidden">
            {/* Fixed Header Bar */}
            <div className="shrink-0 flex items-center justify-between px-md py-sm border-b border-dark-border bg-dark-bg z-10">
                <span className="font-semibold text-dark-text">Ahmed Nawaz</span>
                <button
                    onClick={close}
                    className="cursor-pointer flex items-center gap-xs font-mono text-small text-dark-text-muted hover:text-dark-text transition-colors"
                >
                    Close <X className="w-4 h-4" />
                </button>
            </div>

            {/* Non-scrollable Main Body */}
            <div className="flex-1 flex flex-col items-center justify-center gap-md px-md py-md overflow-hidden">
                <div className="flex flex-col items-center gap-sm text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark-text">
                        Let&apos;s talk
                    </h2>

                    <a
                        href="mailto:Ahmednawaz3926@gmail.com"
                        className="text-base sm:text-lg font-semibold text-amber border-b border-amber pb-0.5"
                    >
                        Ahmednawaz3926@gmail.com
                    </a>

                    <div className="flex items-center gap-md font-mono text-small text-dark-text-muted mt-1">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="hover:text-dark-text transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-1/3 flex flex-col gap-sm rounded-lg border border-dark-border bg-dark-surface p-md"
                >
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="name" className="font-mono text-xs text-dark-text-muted">Name</label>
                        <input
                            id="name"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="rounded-md border border-dark-border bg-dark-bg px-sm py-2.5 text-small text-dark-text outline-none focus:border-amber"
                        />
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="email" className="font-mono text-xs text-dark-text-muted">Email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="rounded-md border border-dark-border bg-dark-bg px-sm py-2.5 text-small text-dark-text outline-none focus:border-amber"
                        />
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="message" className="font-mono text-xs text-dark-text-muted">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={3}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="rounded-md border border-dark-border bg-dark-bg px-sm py-1.5 text-small text-dark-text outline-none focus:border-amber resize-none"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={status !== "sending" ? { scale: 1.02, boxShadow: "var(--shadow-glow-amber)" } : {}}
                        whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                        transition={{ duration: DURATION_FAST, ease: EASE_STANDARD }}
                        className="cursor-pointer rounded-md bg-amber px-md py-sm font-semibold text-dark-bg disabled:opacity-40 mt-1 text-small"
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </motion.button>

                    {status === "sent" && (
                        <p className="text-xs text-success">Thanks — I&apos;ll get back to you soon.</p>
                    )}
                    {status === "error" && (
                        <p className="text-xs text-error">Something went wrong. Try again, or email me directly.</p>
                    )}
                </form>
            </div>
        </div>
    );
}