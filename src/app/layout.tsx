import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ContactModalProvider } from "@/components/ContactModalProvider";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-signal-portfolio.vercel.app"),
  title: {
    default: "Ahmed Nawaz — AI Product Builder",
    template: "%s | Ahmed Nawaz",
  },
  description:
    "Solo product builder shipping AI tools in public — a WhatsApp AI receptionist and an AI-powered household expense manager. Design, build, and deploy, end to end.",
  openGraph: {
    title: "Ahmed Nawaz — AI Product Builder",
    description: "Solo product builder shipping AI tools in public.",
    url: "https://my-signal-portfolio.vercel.app",
    siteName: "Ahmed Nawaz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Nawaz — AI Product Builder",
    description: "Solo product builder shipping AI tools in public.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <ContactModalProvider>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  name: "Ahmed Nawaz",
                  jobTitle: "AI Product Builder",
                  description: "Solo product builder shipping AI tools in public.",
                  url: "https://my-signal-portfolio.vercel.app",
                }),
              }}
            />
            <Nav />
            {children}
            <Footer />
            <ContactModal />
          </ContactModalProvider>
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}