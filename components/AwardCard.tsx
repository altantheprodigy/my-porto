"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Trophy,
  Maximize2,
  X,
  Calendar,
  Building2,
  CheckCircle2,
  Medal,
} from "lucide-react";
import { useScrollLock } from "@/lib/useScrollLock";

interface TechStack {
  name: string;
  logo: React.ReactNode;
}

interface AwardCardProps {
  title: string;
  organizer: string;
  rank: string;
  projectName: string;
  role: string;
  date: string;
  images: string[];
  techStacks: TechStack[];
  link?: string;
  teamName?: string;
  description?: string;
}

const photoLabels = [
  { label: "Web Interface", subtitle: "Project Preview" },
  { label: "Winner Team", subtitle: "Ceremony & Award" },
  { label: "Trophy & Certificate", subtitle: "Official Winner" },
];

export default function AwardCard({
  title,
  organizer,
  rank,
  projectName,
  role,
  date,
  images,
  techStacks,
  link,
  teamName = "Floraverse Team",
  description = "Championed 1st place in the Web Development competition at FICTPACT CUP 2026 (UNIKA Soegijapranata Semarang). Built FLORAVERSE, an interactive educational web platform engineered with Next.js and TypeScript, securing the championship through modern UI architecture and seamless responsiveness.",
}: AwardCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Hook scroll lock for lightbox
  useScrollLock(isLightboxOpen, () => setIsLightboxOpen(false));

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Arrow key navigation inside lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  return (
    <>
      <div className="group relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] border border-zinc-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-zinc-300 hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)]">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Prestigious Details & Story (7 cols) */}
          <div className="flex flex-col gap-5 lg:col-span-7">
            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50/80 px-3.5 py-1 text-xs font-bold text-amber-900 shadow-xs">
                <Trophy size={14} className="text-amber-600" />
                <span>{rank}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono-code text-xs font-semibold text-zinc-700">
                <Building2 size={13} className="text-zinc-500" />
                <span>{organizer}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono-code text-xs font-medium text-zinc-500">
                <Calendar size={13} className="text-zinc-400" />
                <span>{date}</span>
              </span>
            </div>

            {/* Title & Project Identification */}
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl">
                {title}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-600">
                <span>Winning Project:</span>
                <span className="font-mono-code font-bold text-zinc-950 bg-zinc-100 px-2.5 py-0.5 rounded-md border border-zinc-200">
                  {projectName}
                </span>
                <span className="text-zinc-300">•</span>
                <span>Role: <strong className="text-zinc-900">{role}</strong></span>
              </div>
            </div>

            {/* Narrative Description */}
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
              {description}
            </p>

            {/* Key Achievements Bullet points */}
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>1st Place among university contestants</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Lead Front-End architectural design</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Next.js 16 + Tailwind CSS + Supabase</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>Official trophy & certificate verified</span>
              </div>
            </div>

            {/* Tech Stack Pills & Actions */}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-4">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-xs font-semibold text-zinc-400">Stack:</span>
                <div className="flex flex-wrap items-center gap-2">
                  {techStacks.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group/tech relative flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 shadow-xs transition-transform hover:scale-110"
                      title={tech.name}
                    >
                      {tech.logo}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 shadow-xs transition-all hover:bg-zinc-100 hover:text-zinc-950 focus-ring"
                >
                  <Maximize2 size={15} />
                  <span>View Photos</span>
                </button>

                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-zinc-950 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 active:scale-95 focus-ring"
                  >
                    <span>Live Web</span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Gallery (5 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            <div className="group/gallery relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-zinc-100 shadow-inner">
              {/* Image Preview with Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full cursor-pointer"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Achievement Documentation: ${photoLabels[currentIndex]?.label || `Photo ${currentIndex + 1}`}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover/gallery:scale-105"
                    priority={currentIndex === 0}
                  />

                  {/* Gradient bottom bar label */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10 text-white">
                    <p className="font-mono-code text-[11px] font-semibold tracking-wider uppercase text-amber-400">
                      Photo {currentIndex + 1} of {images.length}
                    </p>
                    <p className="font-display text-sm font-bold drop-shadow-xs">
                      {photoLabels[currentIndex]?.label || "Achievement Documentation"}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black active:scale-90 focus-ring"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black active:scale-90 focus-ring"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Expand to Lightbox button overlay */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                aria-label="Open full image"
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-90 transition-all hover:bg-black hover:opacity-100 z-10 focus-ring"
              >
                <Maximize2 size={14} />
              </button>
            </div>

            {/* Thumbnail Selectors */}
            {images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`group/thumb relative flex flex-col items-center gap-1.5 rounded-xl border p-1.5 transition-all duration-200 focus-ring ${
                      idx === currentIndex
                        ? "border-zinc-950 bg-zinc-100 shadow-xs ring-2 ring-zinc-950/20"
                        : "border-zinc-200/80 bg-white hover:border-zinc-300 hover:bg-zinc-50"
                    }`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-100">
                      <Image
                        src={img}
                        alt={`Thumbnail of ${photoLabels[idx]?.label || `Photo ${idx + 1}`}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`font-mono-code text-[10px] font-semibold truncate max-w-full ${
                        idx === currentIndex ? "text-zinc-950 font-bold" : "text-zinc-500"
                      }`}
                    >
                      {photoLabels[idx]?.label || `Photo ${idx + 1}`}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Award photo gallery viewer"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              data-lenis-prevent
              className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col items-center"
            >
              <div className="relative flex w-full items-center justify-between pb-3 text-white">
                <div>
                  <h4 className="font-display text-base font-bold sm:text-lg">
                    {photoLabels[currentIndex]?.label || "Achievement Photo"}
                  </h4>
                  <p className="font-mono-code text-xs text-zinc-300">
                    {title} • {organizer}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close photo viewer"
                  className="rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors focus-ring"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main lightbox photo container */}
              <div className="relative flex aspect-video max-h-[75vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-black/50">
                <Image
                  src={images[currentIndex]}
                  alt={`High resolution photo of ${photoLabels[currentIndex]?.label || title}`}
                  fill
                  className="object-contain"
                  priority
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      aria-label="Previous photo"
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-black transition-all focus-ring"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next photo"
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-black transition-all focus-ring"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails in lightbox */}
              {images.length > 1 && (
                <div className="mt-4 flex gap-3 overflow-x-auto p-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative h-14 w-20 overflow-hidden rounded-lg border-2 transition-all focus-ring ${
                        idx === currentIndex ? "border-amber-400 scale-105" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Go to photo ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
