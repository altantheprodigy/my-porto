"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Trophy } from "lucide-react";

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

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      handleNext();
    } else if (swipe > 50) {
      handlePrev();
    }
  };

  return (
    <div className="group mx-auto flex w-full max-w-[600px] flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-4 md:p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)]">
      
      {/* Top: Carousel Section */}
      <div className="w-full">
        <div className="group/carousel relative aspect-[4/3] md:aspect-video w-full overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="relative h-full w-full cursor-grab active:cursor-grabbing"
            >
              <Image
                src={images[currentIndex]}
                alt={`Award Image ${currentIndex + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover/carousel:scale-105"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-zinc-900 opacity-100 md:opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white md:group-hover/carousel:opacity-100 shadow-md z-10"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-zinc-900 opacity-100 md:opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white md:group-hover/carousel:opacity-100 shadow-md z-10"
              >
                <ChevronRight size={16} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-4 bg-brand-blue" : "w-1.5 bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom: Content Section */}
      <div className="flex flex-col gap-5 px-2 pb-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-sm font-semibold text-brand-blue bg-brand-blue/10 w-fit px-3 py-1 rounded-full">
            <Trophy size={14} />
            <span>{rank}</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl mt-1">
            {title}
          </h3>
          <p className="text-[15px] font-medium text-zinc-600">
            {organizer} <span className="mx-2">•</span> {date}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-100 mt-2">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Project</span>
            <span className="text-[15px] font-bold text-zinc-800">{projectName}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Role</span>
            <span className="text-[15px] font-bold text-zinc-800">{role}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
          <div className="flex flex-wrap gap-2">
            {techStacks.map((tech, idx) => (
              <div
                key={idx}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 p-2 transition-transform hover:scale-110 hover:bg-zinc-100 shadow-sm"
                title={tech.name}
              >
                {tech.logo}
              </div>
            ))}
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-[14px] font-bold text-white transition-all hover:bg-brand-blue1 active:scale-95 shadow-md"
            >
              View Project
              <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
