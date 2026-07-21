"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk mengubah style navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#MyProjects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/70 border-b border-zinc-200 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center z-10">
            <Link
              href="/"
              className="font-utama group flex items-center gap-2 text-xl font-bold tracking-tighter text-zinc-900"
            >
              <div className="from-brand-blue to-brand-blue1 shadow-brand-blue/20 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-black text-white shadow-lg">
                A
              </div>
              <span className="hidden sm:block">AltanPutra</span>
            </Link>
          </div>

          {/* Navigasi Tengah (Desktop & Mobile) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 sm:gap-8 z-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 sm:text-sm active:text-zinc-900"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Button Resume Kanan */}
          <div className="flex items-center justify-end z-10">
            <a
              href="/CV_Altan_Assyfa_Naura_Putra_Updated.pdf"
              download
              className="inline-flex cursor-pointer items-center justify-center rounded-[6px] border border-[#2563eb] bg-[#2563eb] px-6 py-2.5 sm:px-8 sm:py-3 text-sm font-semibold text-white transition-all duration-200 ease-out [box-shadow:inset_0_-1.5px_1px_#3b82f6,inset_0_-6px_1px_#1d4ed8] hover:translate-y-[1px] hover:[box-shadow:inset_0_4px_4px_#1e3a8a]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
