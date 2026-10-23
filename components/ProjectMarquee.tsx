"use client";

import Image from "next/image";
import { FileDown, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechStack {
  name: string;
  logo: React.ReactNode;
}

interface Project {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  downloadLink: string;
  downloadText?: string;
  isDownload: boolean;
  techStacks: TechStack[];
}

export default function ProjectMarquee({ projects }: { projects: Project[] }) {
  // 3x duplication is optimal for infinite loop on all screen sizes up to 4K without DOM bloat
  const duplicatedProjects = [...projects, ...projects, ...projects];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const isInteracting = useRef(false);

  // IntersectionObserver: Only activate RAF loop when section is actually on-screen
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll logic: pauses completely when off-screen to preserve CPU & battery
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || !isInView) return;

    let animId: number;
    const step = () => {
      if (!isPaused && !isDragging && !selectedProject && !isInteracting.current) {
        el.scrollLeft += 0.8;
        // Seamless loop when passing halfway
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, isPaused, isDragging, selectedProject]);

  // Mouse drag handling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    isInteracting.current = true;
    dragStartX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    dragStartScrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = dragStartScrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => {
        isInteracting.current = false;
      }, 1000);
    }
  };

  const scrollPrev = () => {
    if (!scrollContainerRef.current) return;
    isInteracting.current = true;
    scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    setTimeout(() => {
      isInteracting.current = false;
    }, 2000);
  };

  const scrollNext = () => {
    if (!scrollContainerRef.current) return;
    isInteracting.current = true;
    scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    setTimeout(() => {
      isInteracting.current = false;
    }, 2000);
  };

  return (
    <div className="relative w-full">
      {/* Scroll Navigation Buttons Header */}
      <div className="mb-4 flex items-center justify-between px-1">
        <p className="text-xs font-medium text-zinc-500">
          Tip: Geser/scroll horizontal atau gunakan tombol navigasi
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Scroll left"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Scroll right"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Carousel Container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handleMouseUpOrLeave();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onTouchStart={() => {
          isInteracting.current = true;
        }}
        onTouchEnd={() => {
          setTimeout(() => {
            isInteracting.current = false;
          }, 1500);
        }}
        className={`relative flex w-full overflow-x-auto py-4 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <div className="flex items-stretch gap-6 sm:gap-8 pr-8">
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-[30px] border border-zinc-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-400 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] md:w-[380px]"
            >
              {/* Image Section */}
              <div className="relative mx-5 mt-5 h-[180px] overflow-hidden rounded-[20px] border border-zinc-100 bg-zinc-50 shadow-inner md:h-[200px]">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 300px, 380px"
                  loading={index > 2 ? "lazy" : "eager"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                />
              </div>

              {/* Title, Category & Desc */}
              <div className="flex flex-col gap-2 p-6 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  {project.category}
                </span>
                <h3 className="text-xl font-extrabold tracking-tight text-zinc-950 md:text-2xl">
                  {project.title}
                </h3>
                <p className="line-clamp-2 mt-1 text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
              </div>

              {/* See Detail Button */}
              <div className="mt-auto px-6 pb-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex w-full items-center justify-center rounded-xl bg-zinc-950 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95"
                >
                  See Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-2xl md:flex-row"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="absolute right-4 top-4 z-10 rounded-full bg-zinc-100 p-2 text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-950 md:right-6 md:top-6"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="relative flex h-[250px] w-full shrink-0 items-center justify-center overflow-hidden bg-zinc-950 md:h-auto md:w-[45%]">
                {/* Blurred Background */}
                <Image
                  src={selectedProject.imageSrc}
                  alt="background"
                  fill
                  className="object-cover opacity-30 blur-2xl scale-110"
                />

                {/* Main Image */}
                <div className="relative h-[90%] w-[90%]">
                  <Image
                    src={selectedProject.imageSrc}
                    alt={selectedProject.title}
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col overflow-y-auto p-6 md:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  {selectedProject.category}
                </span>
                <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-zinc-950 md:text-3xl">
                  {selectedProject.title}
                </h3>

                <div className="mt-6 flex flex-col gap-6">
                  <div>
                    <h4 className="mb-2 text-sm font-bold text-zinc-900">About Project</h4>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.techStacks && selectedProject.techStacks.length > 0 && (
                    <div>
                      <h4 className="mb-3 text-sm font-bold text-zinc-900">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStacks.map((tech, i) => (
                          <div
                            key={i}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white p-2.5 shadow-sm transition-transform hover:scale-110"
                            title={tech.name}
                          >
                            {tech.logo}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <a
                      href={selectedProject.downloadLink}
                      download={selectedProject.isDownload ? true : undefined}
                      target={selectedProject.isDownload ? "_self" : "_blank"}
                      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-zinc-800 active:scale-95 md:w-fit"
                    >
                      <span className="relative z-10">
                        {selectedProject.downloadText || "View Project"}
                      </span>
                      {selectedProject.isDownload ? (
                        <FileDown size={18} className="relative z-10" />
                      ) : (
                        <ArrowRight
                          size={18}
                          className="relative z-10 transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
