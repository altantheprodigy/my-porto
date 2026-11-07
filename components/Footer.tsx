"use client";

import Link from "next/link";
import ContactSection from "./ContactSection";
import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#fafafa] border-t border-zinc-200/80 px-6 md:px-16 lg:px-28 pb-12 pt-6">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        {/* Interactive Contact Communication Hub */}
        <ContactSection />

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200/80 pt-8 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-950 text-white font-mono-code font-bold text-[10px]">
              AP
            </div>
            <span className="font-medium text-zinc-700">
              Altan Assyfa Naura Putra &copy; {currentYear}
            </span>
            <span className="text-zinc-300">•</span>
            <span className="font-mono-code text-zinc-500">
              Next.js 16 & Tailwind CSS v4
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="font-medium text-zinc-600 hover:text-zinc-950 transition-colors focus-ring"
            >
              All Projects
            </Link>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 font-medium text-zinc-600 hover:text-zinc-950 transition-colors focus-ring"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
