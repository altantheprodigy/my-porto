import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins", // Membuat variabel CSS
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-white selection:bg-brand-blue/30 text-zinc-900 selection:text-zinc-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
