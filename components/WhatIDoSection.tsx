"use client";

import { motion, Variants } from "framer-motion";
import { FlutterIcon, NextIcon, FigmaIcon } from "./TechStackIcon";

const services = [
  {
    id: "mobile",
    num: "01",
    title: "Mobile Development",
    desc: "Building native-like, high-performance mobile applications using Flutter. From smooth 60fps animations to robust clean architecture, I craft intuitive, resilient mobile experiences.",
    highlights: ["Flutter & Dart", "Cross-Platform (iOS & Android)", "State Management & REST APIs"],
    accentColor: "group-hover:border-[#06B6D4]/40 group-hover:shadow-[#06B6D4]/10",
    badgeColor: "bg-[#06B6D4]/10 text-[#0284c7]",
    logo: (
      <FlutterIcon className="h-10 w-10 text-zinc-400 transition-all duration-500 group-hover:scale-110 group-hover:text-[#06B6D4] group-active:scale-110 group-active:text-[#06B6D4]" />
    ),
  },
  {
    id: "web",
    num: "02",
    title: "Web Development",
    desc: "Creating modern, responsive, and blazing-fast web applications using Next.js and React. Focusing on clean code, optimal Core Web Vitals, and engaging micro-interactions.",
    highlights: ["Next.js & TypeScript", "Tailwind CSS & Framer Motion", "Performance & SEO Focused"],
    accentColor: "group-hover:border-zinc-950/40 group-hover:shadow-zinc-950/10",
    badgeColor: "bg-zinc-900/10 text-zinc-900",
    logo: (
      <NextIcon className="h-10 w-10 text-zinc-400 transition-all duration-500 group-hover:scale-110 group-hover:text-zinc-900 group-active:scale-110 group-active:text-zinc-900" />
    ),
  },
  {
    id: "ui",
    num: "03",
    title: "UI & UX Design",
    desc: "Designing user-centric, high-fidelity interfaces in Figma. Translating complex user journeys into clean layouts, accessible design systems, and developer-ready prototypes.",
    highlights: ["Figma Design Systems", "Wireframing & Prototyping", "User-Centric Architecture"],
    accentColor: "group-hover:border-[#F24E1E]/40 group-hover:shadow-[#F24E1E]/10",
    badgeColor: "bg-[#F24E1E]/10 text-[#ea580c]",
    logo: (
      <FigmaIcon className="h-10 w-10 text-zinc-400 transition-all duration-500 group-hover:scale-110 group-hover:text-[#F24E1E] group-active:scale-110 group-active:text-[#F24E1E]" />
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhatIDoSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={itemVariants}
          className={`group relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] ${service.accentColor}`}
          onTouchStart={() => {}}
        >
          {/* Top Bar: Icon + Number */}
          <div className="flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50 shadow-inner transition-colors duration-500 group-hover:bg-white group-hover:shadow-md">
              {service.logo}
            </div>
            <span className="font-mono text-2xl font-black tracking-tight text-zinc-300 transition-colors group-hover:text-zinc-600">
              {service.num}
            </span>
          </div>

          {/* Middle: Content */}
          <div className="my-6 flex flex-col gap-3">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 md:text-2xl">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              {service.desc}
            </p>
          </div>

          {/* Bottom: Feature tags */}
          <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
            {service.highlights.map((item, i) => (
              <span
                key={i}
                className="rounded-lg bg-zinc-100/80 px-2.5 py-1 text-[11px] font-medium text-zinc-600 transition-colors group-hover:bg-zinc-200/60 group-hover:text-zinc-900"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
