"use client";

import Image from "next/image";
import { FileDown, ArrowRight, X } from "lucide-react";
import React, { useState } from "react";
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
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="relative mt-2 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-6">
        <div 
          className="flex w-max items-stretch gap-6 sm:gap-8 pr-6 sm:pr-8 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] will-change-transform"
          style={{ animationPlayState: selectedProject ? 'paused' : undefined }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] active:-translate-y-2 active:border-brand-blue/30 active:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] md:w-[380px]"
              onTouchStart={() => {}}
            >
              {/* Image Section */}
              <div className="relative mx-6 mt-6 h-[180px] overflow-hidden rounded-[20px] border border-zinc-200 bg-white/50 shadow-inner md:h-[200px]">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title, Category & Desc */}
              <div className="flex flex-col gap-2 p-6 pb-4">
                <h3 className="text-xl font-bold text-zinc-900 md:text-2xl">{project.title}</h3>
                <p className="font-utama text-[14px] font-semibold text-brand-blue">{project.category}</p>
                <p className="font-utama line-clamp-2 mt-2 text-[14px] leading-relaxed text-zinc-500">
                  {project.description}
                </p>
              </div>

              {/* See Detail Button */}
              <div className="mt-auto px-6 pb-6">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex w-full items-center justify-center rounded-xl bg-white border border-zinc-200 py-3 text-[14px] font-semibold text-zinc-900 transition-colors hover:bg-brand-blue hover:text-white group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] group-active:bg-brand-blue group-active:text-white group-active:border-brand-blue group-active:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)]"
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
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-100 shadow-2xl md:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-zinc-100 p-2 text-zinc-900/70 transition-colors hover:bg-white/90 hover:text-zinc-900 md:right-6 md:top-6"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="relative flex h-[250px] w-full shrink-0 items-center justify-center overflow-hidden bg-zinc-100 md:h-auto md:w-[45%]">
                {/* Blurred Background */}
                <Image
                  src={selectedProject.imageSrc}
                  alt="background"
                  fill
                  className="object-cover opacity-40 blur-2xl scale-110"
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
                
                {/* Gradient separator */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-100 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-zinc-100" />
              </div>

              {/* Modal Content */}
              <div className="flex flex-col overflow-y-auto p-6 md:p-8">
                <p className="font-utama text-[14px] font-semibold text-brand-blue">{selectedProject.category}</p>
                <h3 className="mt-1 text-2xl font-bold text-zinc-900 md:text-3xl">{selectedProject.title}</h3>
                
                <div className="mt-6 flex flex-col gap-6">
                  <div>
                    <h4 className="mb-2 text-[15px] font-semibold text-zinc-900">About Project</h4>
                    <p className="font-utama text-[14px] leading-relaxed text-zinc-600">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.techStacks && selectedProject.techStacks.length > 0 && (
                    <div>
                      <h4 className="mb-3 text-[15px] font-semibold text-zinc-900">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStacks.map((tech, i) => (
                          <div key={i} className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white p-2.5 shadow-inner transition-transform hover:scale-110" title={tech.name}>
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
                      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand-blue px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] active:scale-95 md:w-fit"
                    >
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
                      <span className="relative z-10">{selectedProject.downloadText || "View Project"}</span>
                      {selectedProject.isDownload ? <FileDown size={18} className="relative z-10" /> : <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
