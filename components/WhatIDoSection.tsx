"use client";

import { motion, Variants } from "framer-motion";
import { FlutterIcon, NextIcon, FigmaIcon } from "./TechStackIcon";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "mobile",
    num: "01",
    title: "Mobile App Development",
    tagline: "Cross-platform iOS & Android in Flutter",
    desc: "Building native-feel, high-performance mobile applications using Flutter and Dart. From complex state management to smooth 60fps animations and offline caching.",
    highlights: [
      "Flutter & Dart Architecture",
      "Offline Storage (Hive & SQLite)",
      "RESTful API & Auth Systems",
      "Pixel-perfect Responsive Layouts",
    ],
    accentColor: "hover:border-cyan-500/40 hover:shadow-cyan-500/5",
    logo: (
      <FlutterIcon className="h-10 w-10 text-zinc-500 transition-all duration-300 group-hover:scale-110 group-hover:text-[#06B6D4]" />
    ),
  },
  {
    id: "web",
    num: "02",
    title: "Modern Web Engineering",
    tagline: "High-speed Next.js 16 Web Applications",
    desc: "Creating accessible, fast, and SEO-optimized web applications with Next.js App Router, React 19, TypeScript, and modern Tailwind CSS architectures.",
    highlights: [
      "Next.js App Router & Server Components",
      "Strict TypeScript Type Safety",
      "Tailwind CSS v4 & Micro-interactions",
      "Supabase Backend & PostgreSQL",
    ],
    accentColor: "hover:border-zinc-950/40 hover:shadow-zinc-950/5",
    logo: (
      <NextIcon className="h-10 w-10 text-zinc-500 transition-all duration-300 group-hover:scale-110 group-hover:text-zinc-950" />
    ),
  },
  {
    id: "ui",
    num: "03",
    title: "UI/UX & Design Systems",
    tagline: "Figma to Production-Ready Code",
    desc: "Designing user-centric, high-fidelity interfaces in Figma and translating them into production-grade, accessible code with consistent tokens and motion design.",
    highlights: [
      "Figma Design Systems & Tokens",
      "WCAG 2.2 AA Accessibility Compliance",
      "Micro-animations & Gestures",
      "Rapid Prototyping & User Flow",
    ],
    accentColor: "hover:border-orange-500/40 hover:shadow-orange-500/5",
    logo: (
      <FigmaIcon className="h-10 w-10 text-zinc-500 transition-all duration-300 group-hover:scale-110 group-hover:text-[#F24E1E]" />
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
      viewport={{ once: true, margin: "-80px" }}
      className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={itemVariants}
          className={`group relative flex flex-col justify-between rounded-[28px] border border-zinc-200/90 bg-white p-7 sm:p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)] ${service.accentColor}`}
        >
          {/* Top Bar: Icon + Number */}
          <div className="flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50 shadow-inner transition-colors duration-300 group-hover:bg-white group-hover:shadow-xs">
              {service.logo}
            </div>
            <span className="font-mono-code text-xl font-bold tracking-tight text-zinc-300 transition-colors group-hover:text-zinc-600">
              [{service.num}]
            </span>
          </div>

          {/* Middle: Content */}
          <div className="my-6 flex flex-col gap-2.5">
            <h3 className="font-display text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
              {service.title}
            </h3>
            <p className="font-mono-code text-xs font-semibold text-zinc-500">
              {service.tagline}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              {service.desc}
            </p>
          </div>

          {/* Bottom: Feature tags */}
          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2">
            <div className="flex flex-wrap gap-1.5">
              {service.highlights.map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/70 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700"
                >
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
