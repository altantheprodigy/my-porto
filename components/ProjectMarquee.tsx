"use client";

import Image from "next/image";
import { FileDown, ArrowRight, X, ChevronLeft, ChevronRight, ExternalLink, Github, Code2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollLock } from "@/lib/useScrollLock";

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
  // 3x duplication for infinite smooth marquee
  const duplicatedProjects = [...projects, ...projects, ...projects];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Hook scroll lock when modal is open
  useScrollLock(!!selectedProject, () => setSelectedProject(null));

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const isInteracting = useRef(false);

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

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || !isInView) return;

    let animId: number;
    const step = () => {
      if (!isPaused && !isDragging && !selectedProject && !isInteracting.current) {
        el.scrollLeft += 0.75;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, isPaused, isDragging, selectedProject]);

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
      {/* Scroll Navigation Header */}
      <div className="mb-4 flex items-center justify-between px-1">
        <p className="text-xs font-mono-code text-zinc-500">
          Tip: Drag horizontally or use arrow buttons to explore
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95 focus-ring"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95 focus-ring"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Marquee Track Container */}
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
        className={`flex gap-6 overflow-x-hidden py-4 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={index}
            className="group relative flex h-[480px] w-[340px] shrink-0 flex-col overflow-hidden rounded-[24px] border border-zinc-200/90 bg-white p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] md:h-[500px] md:w-[360px]"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-100 bg-zinc-100">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 340px, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content Details */}
            <div className="mt-4 flex flex-1 flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-zinc-950 md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600">
                  {project.description}
                </p>
              </div>

              {/* Technologies & CTA */}
              <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex -space-x-1.5 overflow-hidden">
                  {project.techStacks?.slice(0, 4).map((tech, i) => (
                    <div
                      key={i}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-zinc-50 p-1.5 shadow-xs"
                      title={tech.name}
                    >
                      {tech.logo}
                    </div>
                  ))}
                  {project.techStacks && project.techStacks.length > 4 && (
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-zinc-100 text-[10px] font-bold text-zinc-600">
                      +{project.techStacks.length - 4}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 active:scale-95 focus-ring"
                >
                  <span>Details</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              data-lenis-prevent
              className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 shadow-md backdrop-blur-md transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95 focus-ring"
              >
                <X size={18} />
              </button>

              {/* Modal Banner Image */}
              <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-zinc-100">
                <Image
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>

              {/* Modal Scrollable Body */}
              <div
                data-lenis-prevent
                className="flex flex-col overflow-y-auto p-6 md:p-8"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-zinc-500">
                    {selectedProject.category}
                  </span>
                </div>
                <h3
                  id="modal-project-title"
                  className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl"
                >
                  {selectedProject.title}
                </h3>

                <div className="mt-6 flex flex-col gap-6">
                  <div>
                    <h4 className="mb-2 font-display text-sm font-bold text-zinc-900">
                      Overview
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.techStacks && selectedProject.techStacks.length > 0 && (
                    <div>
                      <h4 className="mb-3 font-display text-sm font-bold text-zinc-900">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStacks.map((tech, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50/70 px-3 py-2 text-xs font-semibold text-zinc-800"
                          >
                            <span className="h-5 w-5 shrink-0">{tech.logo}</span>
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-zinc-100">
                    <a
                      href={selectedProject.downloadLink}
                      download={selectedProject.isDownload ? true : undefined}
                      target={selectedProject.isDownload ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-zinc-800 active:scale-95 focus-ring md:w-auto"
                    >
                      <span>{selectedProject.downloadText || "Open Project"}</span>
                      {selectedProject.isDownload ? (
                        <FileDown size={17} />
                      ) : selectedProject.downloadLink.includes("github.com") ? (
                        <Github size={17} />
                      ) : (
                        <ExternalLink size={17} />
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
