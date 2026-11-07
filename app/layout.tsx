import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altan Putra — Mobile & Full-Stack Web Developer",
  description:
    "Personal portfolio of Altan Putra, a Software Engineer specializing in Flutter, Next.js, and modern UI engineering. 1st Place Winner in Web Development at FICPACTCUP2026.",
  keywords: [
    "Altan Putra",
    "Mobile Developer",
    "Web Developer",
    "Flutter",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Semarang",
    "Indonesia",
  ],
  authors: [{ name: "Altan Putra" }],
  creator: "Altan Putra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://altanputra.dev",
    title: "Altan Putra — Mobile & Full-Stack Web Developer",
    description:
      "Specializing in Flutter mobile development, Next.js, and modern UI engineering. 1st Place Winner in Web Development at FICPACTCUP2026.",
    siteName: "Altan Putra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altan Putra — Mobile & Full-Stack Web Developer",
    description:
      "Specializing in Flutter mobile development, Next.js, and modern UI engineering. 1st Place Winner in Web Development at FICPACTCUP2026.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#fafafa] selection:bg-zinc-950 selection:text-white text-zinc-950 antialiased font-sans"
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
