"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, ExternalLink, Calendar, MapPin, User, Medal } from "lucide-react";

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
}

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
}: AwardCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group bg-bg-card relative flex w-full flex-col gap-6 overflow-hidden rounded-2xl border border-white/5 p-4 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.2)] md:flex-row md:p-6 lg:p-8">
      {/* Animated Glow Behind Card on Hover */}
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-brand-blue/10 to-transparent blur-xl" />
      </div>

      {/* Carousel Section */}
      <div className="relative flex w-full shrink-0 flex-col gap-3 md:w-5/12 lg:w-4/12">
        <div className="group/carousel relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-hitam-utama">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`Award Image ${currentIndex + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (Show on hover) */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-black/80 group-hover/carousel:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-black/80 group-hover/carousel:opacity-100"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-4 bg-amber-400" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-1 flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[13px] font-semibold text-amber-400">
                <Trophy size={14} className="text-amber-400" />
                {rank}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[13px] font-medium text-zinc-400">
                <Calendar size={14} />
                {date}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-[15px] text-zinc-400">
              <MapPin size={16} className="text-brand-blue" />
              <span>{organizer}</span>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[15px] text-zinc-300">
              <Medal size={18} className="text-brand-green" />
              <span className="font-semibold text-white">Project:</span> {projectName}
            </div>
            <div className="flex items-center gap-2 text-[15px] text-zinc-300">
              <User size={18} className="text-brand-blue" />
              <span className="font-semibold text-white">Role:</span> {role}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            {techStacks.map((tech, idx) => (
              <div
                key={idx}
                className="group bg-bg-card relative flex shrink-0 items-center justify-center rounded-xl px-3 py-3 transition-all duration-300 ease-out group-hover:rotate-6 hover:-translate-y-1"
              >
                {/* Tooltip */}
                <span className="bg-bg-card pointer-events-none absolute top-full left-1/2 z-20 mt-2 -translate-x-1/2 rounded-md px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 md:-top-8 md:mt-0 md:group-hover:-top-11">
                  {tech.name}
                  <svg
                    className="absolute top-full left-0 h-2 w-full text-zinc-800"
                    viewBox="0 0 255 255"
                  >
                    <polygon
                      className="fill-current"
                      points="0,0 127.5,127.5 255,0"
                    />
                  </svg>
                </span>
                {tech.logo}
              </div>
            ))}
          </div>
        </div>

        {link && (
          <div className="mt-2 md:mt-0">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-bold text-black transition-all hover:bg-zinc-200 active:scale-95"
            >
              View Project
              <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
