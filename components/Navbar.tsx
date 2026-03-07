"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          ? "bg-hitam-utama/70 border-b border-white/10 py-3 shadow-lg backdrop-blur-xl"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-utama group flex items-center gap-2 text-xl font-bold tracking-tighter text-white"
          >
            <div className="from-brand-green to-brand-blue shadow-brand-blue/20 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-black text-white shadow-lg">
              A
            </div>
            <span className="hidden sm:block">AltanPutra</span>
          </Link>

          {/* Navigasi Desktop & Mobile - Bikin sederhana di tengah/kanan */}
          <div className="flex items-center gap-1 sm:gap-2">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white sm:px-4"
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-full border border-white/10 bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <a
              href="/CV Altan Assyfa Naura Putra.pdf"
              download
              className="group relative ml-2 inline-flex items-center justify-center overflow-hidden rounded-full p-px font-semibold sm:ml-4"
            >
              <span className="from-brand-green via-brand-blue to-brand-green absolute inset-0 animate-[spin_2s_linear_infinite] bg-gradient-to-r opacity-70 group-hover:opacity-100" />
              <div className="bg-hitam-utama group-hover:bg-hitam-utama/50 relative flex items-center gap-2 rounded-full px-4 py-1.5 transition-all duration-300">
                <span className="text-sm font-medium text-white">Resume</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
