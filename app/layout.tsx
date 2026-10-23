import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altan Putra | Mobile & Web Developer",
  description:
    "Portfolio of Altan Putra - Mobile and Web Developer specializing in Flutter, Next.js, and modern UI engineering. 1st Place Winner in Web Development at FICPACTCUP2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={poppins.variable} suppressHydrationWarning>
      <body className="bg-white selection:bg-zinc-900 selection:text-white text-zinc-900 antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
