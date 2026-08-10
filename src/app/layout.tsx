import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ContactModalProvider } from "@/components/ContactModalProvider";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

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
  // TODO: replace with real name/description once you confirm final copy
  title: "Ahmed Nawaz — Portfolio",
  description: "AI products that talk to people.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ContactModalProvider>
          <Nav />
          {children}
          <Footer />
          <ContactModal />
        </ContactModalProvider>
        <Analytics/>
      </body>
    </html>
  );
}