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







// import Image from "next/image";

// export default function About() {
//     return (
//         <section className="bg-light-bg py-16 px-6">
//             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
//                 {/* Left column — text */}
//                 <div className="flex flex-col gap-6">
//                     <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-gray-500">
//                         <span className="text-amber-500">|</span> About
//                     </div>

//                     <h2 className="text-4xl font-bold text-gray-900 leading-tight">
//                         Solo builder navigating
//                         <br /> the signal.
//                     </h2>

//                     <p className="text-gray-600 text-lg">
//                         Currently shipping two products in public: a WhatsApp AI
//                         Receptionist and an AI Household Expense Detective. Building
//                         phase by phase, focusing on utility and clarity over noise.
//                     </p>

//                     <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200 font-mono text-sm text-gray-800">
//                         <span className="flex items-center gap-2">
//                             <span className="w-2 h-2 rounded-full bg-amber-500" />
//                             2 products in build
//                         </span>
//                         <span className="flex items-center gap-2">
//                             <span className="w-2 h-2 rounded-full bg-gray-900" />
//                             Solo since day one
//                         </span>
//                         <span className="flex items-center gap-2">
//                             <span className="w-2 h-2 rounded-full bg-gray-900" />
//                             Build in public
//                         </span>
//                     </div>
//                 </div>

//                 {/* Right column — photo card */}
//                 {/* EXPLICIT HEIGHT (h-[480px]) guarantees Next.js fill image expands */}
//                 <div className="relative w-full h-160 mx-auto">
//                     {/* Back layer: flat amber-tinted card */}
//                     <div className="absolute inset-0 translate-x-3 -translate-y-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 pointer-events-none" />

//                     {/* Front layer: photo card */}
//                     <div className="absolute inset-0 -rotate-2 rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
//                         <Image
//                             src="/Ahmed.jpg" // Make sure this matches your public/ file extension (.jpg or .png)
//                             alt="Ahmed Nawaz"
//                             fill
//                             sizes="(max-width: 768px) 100vw, 450px"
//                             className="object-cover object-center"
//                             priority
//                         />
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }