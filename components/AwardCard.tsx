"use client";

import { useState } from "react";
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
} from "lucide-react";

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
  { label: "Trophy & Piagam", subtitle: "Official Winner" },
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
  teamName = "Tim Kalau Menang Lomba Lagi",
  description = "Championed 1st place in the Web Development competition at FICTPACT CUP 2026 (UNIKA Soegijapranata). Built FLORAVERSE, an interactive educational web platform engineered with Next.js and TypeScript, securing the championship through modern UI architecture and seamless responsiveness.",
}: AwardCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="group relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] border border-zinc-200/90 bg-gradient-to-b from-white via-zinc-50/50 to-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-zinc-400 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]">
        
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-zinc-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl" />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Prestigious Details & Story (7 cols) */}
          <div className="flex flex-col gap-5 lg:col-span-7">
            
            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/90 bg-gradient-to-r from-amber-50 to-amber-100/70 px-3.5 py-1.5 text-xs font-bold text-amber-900 shadow-sm">
                <Trophy className="h-4 w-4 text-amber-600" />
                <span>{rank} • 1st Place Winner</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-zinc-700" />
                <span>FICTPACT CUP 2026</span>
              </div>
            </div>

            {/* Title & Organizer */}
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl">
                {title}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm font-medium text-zinc-500">
                <span className="flex items-center gap-1.5 text-zinc-800 font-semibold">
                  <Building2 className="h-4 w-4 text-zinc-700 shrink-0" />
                  {organizer}
                </span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1.5 text-zinc-600">
                  <Calendar className="h-4 w-4 text-zinc-400 shrink-0" />
                  {date}
                </span>
              </div>
            </div>

            {/* Brief Narrative */}
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
              {description}
            </p>

            {/* Structured Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Project
                </span>
                <span className="text-sm font-bold text-zinc-950">
                  {projectName}
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Role
                </span>
                <span className="text-sm font-bold text-zinc-950">
                  {role}
                </span>
              </div>

              <div className="flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Team
                </span>
                <span className="text-sm font-bold text-zinc-950 truncate" title={teamName}>
                  {teamName}
                </span>
              </div>
            </div>

            {/* Tech Stack Icons & CTA */}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-zinc-500">Technologies Used</span>
                <div className="flex flex-wrap items-center gap-2">
                  {techStacks.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group/tech relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white p-2 shadow-sm transition-all duration-300 hover:scale-110 hover:border-zinc-400 hover:shadow-md"
                      title={tech.name}
                    >
                      {tech.logo}
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-zinc-950 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-sm transition-opacity group-hover/tech:opacity-100 whitespace-nowrap z-20">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-950"
                >
                  <Maximize2 size={15} />
                  <span>View Photos</span>
                </button>

                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-zinc-800 active:scale-95"
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
            <div className="group/gallery relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 bg-zinc-100 shadow-inner">
              
              {/* Image Preview with Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-full w-full cursor-pointer"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Achievement Photo ${currentIndex + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover/gallery:scale-105"
                    priority={currentIndex === 0}
                  />

                  {/* Gradient bottom bar label */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10 text-white">
                    <p className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                      Photo {currentIndex + 1} of {images.length}
                    </p>
                    <p className="text-sm font-bold drop-shadow-sm">
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95 z-10"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95 z-10"
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
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-90 transition-all hover:bg-black hover:opacity-100 z-10"
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
                    className={`group/thumb relative flex flex-col items-center gap-1.5 rounded-xl border p-1.5 transition-all duration-200 ${
                      idx === currentIndex
                        ? "border-zinc-950 bg-zinc-100 shadow-sm ring-2 ring-zinc-950/20"
                        : "border-zinc-200/80 bg-white hover:border-zinc-300 hover:bg-zinc-50"
                    }`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-100">
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`text-[11px] font-semibold truncate max-w-full ${
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col items-center"
            >
              <div className="relative flex w-full items-center justify-between pb-3 text-white">
                <div>
                  <h4 className="text-base font-bold sm:text-lg">
                    {photoLabels[currentIndex]?.label || "Achievement Photo"}
                  </h4>
                  <p className="text-xs text-zinc-300">
                    {title} • {organizer}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main lightbox photo container */}
              <div className="relative flex aspect-video max-h-[75vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-black/50">
                <Image
                  src={images[currentIndex]}
                  alt="High resolution award photo"
                  fill
                  className="object-contain"
                  priority
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/80"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/80"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails in lightbox */}
              {images.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative h-14 w-20 overflow-hidden rounded-lg border-2 transition-all ${
                        idx === currentIndex
                          ? "border-white scale-105 shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt="Thumbnail"
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
