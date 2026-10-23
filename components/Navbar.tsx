"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AiModeResumeButton from "./AiModeResumeButton";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Achievements", href: "/#awards" },
    { name: "Projects", href: "/#MyProjects" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full transition-all duration-300"
    >
      <div
        className={cn(
          "w-full transition-all duration-300",
          scrolled
            ? "bg-white/80 border-b border-zinc-200/80 py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "bg-transparent py-4 sm:py-6"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Mark */}
            <div className="flex items-center">
              <Link
                href="/"
                className="group flex items-center gap-3 transition-transform active:scale-95"
              >
                {/* Monogram Badge with Active Indicator */}
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white font-utama text-xs font-black tracking-tighter shadow-sm ring-1 ring-zinc-800 transition-all duration-300 group-hover:scale-105 group-hover:ring-zinc-600 group-hover:shadow-[0_0_16px_rgba(0,0,0,0.25)]">
                  <span>AP</span>
                  {/* Subtle active status pulse */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </span>
                </div>

                {/* Name & Role */}
                <div className="flex items-center gap-2">
                  <span className="font-utama text-[15px] font-bold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700">
                    Altan Putra
                  </span>
                  <span className="hidden sm:inline-flex items-center rounded-full border border-zinc-200/90 bg-zinc-100/80 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-zinc-600">
                    Dev
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigasi Tengah */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-3.5 py-1 text-xs font-semibold text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions Kanan: Mobile Nav + AI Mode Resume Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile quick links */}
              <div className="flex md:hidden items-center gap-1 mr-1">
                {menuItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-2 py-1 text-[11px] font-semibold text-zinc-600 hover:text-zinc-950"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Google AI Mode Style Resume Button */}
              <AiModeResumeButton />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar at the bottom of Navbar (Sleek dark gradient) */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-950 origin-left"
        style={{ scaleX }}
      />
    </motion.header>
  );
};

export default Navbar;
