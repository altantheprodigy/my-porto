"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import AiModeResumeButton from "./AiModeResumeButton";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY > 150) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Achievements", href: "/#awards" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
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
          scrolled || mobileMenuOpen
            ? "bg-white/90 border-b border-zinc-200/80 py-2.5 sm:py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "bg-transparent py-3 sm:py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Mark */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-2.5 sm:gap-3 transition-transform active:scale-95 focus-ring rounded-xl"
              >
                {/* Monogram Badge */}
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white font-display text-xs font-bold tracking-tighter shadow-sm ring-1 ring-zinc-800 transition-all duration-300 group-hover:scale-105 group-hover:ring-zinc-600">
                  <span>AP</span>
                  {/* Subtle active beacon */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </span>
                </div>

                {/* Name & Role */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-display text-sm sm:text-base font-bold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700">
                    Altan Putra
                  </span>
                  <span className="hidden sm:inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100/90 px-2 py-0.5 font-mono-code text-[10px] font-semibold tracking-wide text-zinc-600">
                    Dev
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1.5 shadow-xs backdrop-blur-md">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-3.5 py-1 text-xs font-semibold text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-950 focus-ring"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions: Resume Button + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <AiModeResumeButton />

              {/* Mobile Hamburger (min 44px hit area) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-xs transition-all hover:bg-zinc-100 active:scale-95 focus-ring"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden w-full border-b border-zinc-200/90 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-2xl"
          >
            <nav className="mx-auto flex max-w-sm flex-col gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 active:bg-zinc-200/80 focus-ring"
                >
                  <span>{item.name}</span>
                  <ArrowRight size={14} className="text-zinc-400" />
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-950 origin-left"
        style={{ scaleX }}
      />
    </motion.header>
  );
};

export default Navbar;
