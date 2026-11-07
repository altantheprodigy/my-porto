"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  RocketIcon,
  Trophy,
  Smartphone,
  Globe,
  CheckCircle2,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  DartIcon,
  FigmaIcon,
  FlutterIcon,
  LaravelIcon,
  MySqlIcon,
  NextIcon,
  PhpIcon,
  TailWindIcon,
  TypescriptIcon,
  SupabaseIcon,
  VercelIcon,
  HiveIcon,
} from "@/components/TechStackIcon";
import ProjectMarquee from "@/components/ProjectMarquee";
import AwardCard from "@/components/AwardCard";
import WhatIDoSection from "@/components/WhatIDoSection";
import ExperienceEducationTabs from "@/components/ExperienceEducationTabs";
import AiModeResumeButton from "@/components/AiModeResumeButton";

export default function Home() {
  const skills = [
    {
      name: "Flutter",
      logo: <FlutterIcon className="h-10 w-10 text-[#61DAFB]" />,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      logo: <NextIcon className="h-10 w-10 text-zinc-950" />,
      color: "#18181b",
    },
    {
      name: "TypeScript",
      logo: <TypescriptIcon className="h-10 w-10 text-[#3178C6]" />,
      color: "#3178C6",
    },
    {
      name: "Laravel",
      logo: <LaravelIcon className="h-10 w-10 text-[#FF2D20]" />,
      color: "#FF2D20",
    },
    {
      name: "Tailwind CSS",
      logo: <TailWindIcon className="h-10 w-10 text-[#06B6D4]" />,
      color: "#06B6D4",
    },
    {
      name: "Dart",
      logo: <DartIcon className="h-10 w-10 text-[#0175C2]" />,
      color: "#0175C2",
    },
    {
      name: "Supabase",
      logo: <SupabaseIcon className="h-10 w-10 text-[#3ECF8E]" />,
      color: "#3ECF8E",
    },
    {
      name: "Figma",
      logo: <FigmaIcon className="h-10 w-10 text-[#F24E1E]" />,
      color: "#F24E1E",
    },
  ];

  // All 4 comprehensive projects with rich vector icons
  const projects = [
    {
      category: "Web Engineering",
      title: "FLORAVERSE",
      description:
        "Championed 1st place in Web Development at FICPACTCUP2026. Architected high-performance plant biodiversity taxonomy web platform engineered with Next.js App Router, React 19, TypeScript, and Supabase integration.",
      imageSrc: "/floraverse.png",
      downloadLink: "https://floraverse.vercel.app/",
      isDownload: false,
      downloadText: "Live Web Demo",
      techStacks: [
        {
          name: "Next.js",
          logo: <NextIcon className="h-5 w-5 text-zinc-950" />,
        },
        {
          name: "TypeScript",
          logo: <TypescriptIcon className="h-5 w-5 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          logo: <TailWindIcon className="h-5 w-5 text-[#06B6D4]" />,
        },
        {
          name: "Supabase",
          logo: <SupabaseIcon className="h-5 w-5 text-[#3ECF8E]" />,
        },
        {
          name: "Vercel",
          logo: <VercelIcon className="h-5 w-5 text-zinc-950" />,
        },
      ],
    },
    {
      category: "Mobile Engineering",
      title: "Conversation Card",
      description:
        "Interactive social card deck mobile application presenting curated interpersonal questions. Complete solo development cycle from Figma design system, Flutter state architecture, to custom deck creation and Laravel API sync.",
      imageSrc: "/preview_conversation.png",
      downloadLink: "/conversation_card_latest.apk",
      isDownload: true,
      downloadText: "Download APK",
      techStacks: [
        {
          name: "Flutter",
          logo: <FlutterIcon className="h-5 w-5 text-[#06B6D4]" />,
        },
        {
          name: "Dart",
          logo: <DartIcon className="h-5 w-5 text-[#0175C2]" />,
        },
        {
          name: "Laravel",
          logo: <LaravelIcon className="h-5 w-5 text-[#FF2D20]" />,
        },
        {
          name: "MySQL",
          logo: <MySqlIcon className="h-5 w-5 text-[#4479A1]" />,
        },
        {
          name: "Figma",
          logo: <FigmaIcon className="h-5 w-5 text-[#F24E1E]" />,
        },
      ],
    },
    {
      category: "Mobile Engineering",
      title: "RUS Consign",
      description:
        "Campus consignment marketplace platform facilitating student entrepreneurship. Built with Flutter and Hive offline-first client storage, responsive catalog navigation, and full Laravel API integration.",
      imageSrc: "/RusConsign.png",
      downloadLink: "https://github.com/altantheprodigy/RusConsign.git",
      isDownload: false,
      downloadText: "View Code",
      techStacks: [
        {
          name: "Flutter",
          logo: <FlutterIcon className="h-5 w-5 text-[#06B6D4]" />,
        },
        {
          name: "Hive",
          logo: <HiveIcon className="h-5 w-5 text-[#FDEE21]" />,
        },
        {
          name: "Laravel",
          logo: <LaravelIcon className="h-5 w-5 text-[#FF2D20]" />,
        },
        {
          name: "MySQL",
          logo: <MySqlIcon className="h-5 w-5 text-[#4479A1]" />,
        },
      ],
    },
    {
      category: "Mobile Engineering",
      title: "AirPay Finance App",
      description:
        "Modern digital wallet and fintech mobile application prototype. Features contactless payment simulation, virtual card management, expense analytics, and smooth 60fps micro-animations.",
      imageSrc: "/preview-airpay.png",
      downloadLink: "/airpay.apk",
      isDownload: true,
      downloadText: "Download APK",
      techStacks: [
        {
          name: "Flutter",
          logo: <FlutterIcon className="h-5 w-5 text-[#06B6D4]" />,
        },
        {
          name: "Dart",
          logo: <DartIcon className="h-5 w-5 text-[#0175C2]" />,
        },
        {
          name: "Hive",
          logo: <HiveIcon className="h-5 w-5 text-[#FDEE21]" />,
        },
        {
          name: "Figma",
          logo: <FigmaIcon className="h-5 w-5 text-[#F24E1E]" />,
        },
      ],
    },
  ];

  const awards = [
    {
      title: "1st Place Winner — Web Development Competition",
      organizer: "FICPACTCUP 2026, UNIKA Soegijapranata Semarang",
      rank: "1st Place Winner",
      projectName: "FLORAVERSE",
      role: "Lead Front-End Developer",
      date: "7 April 2026",
      images: [
        "/floraverse.png",
        "/foto-bertiga-floraverse.jpeg",
        "/foto-piagam-piala.jpeg",
      ],
      techStacks: [
        {
          name: "Next.js",
          logo: <NextIcon className="h-5 w-5 text-zinc-950" />,
        },
        {
          name: "TypeScript",
          logo: <TypescriptIcon className="h-5 w-5 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          logo: <TailWindIcon className="h-5 w-5 text-[#06B6D4]" />,
        },
        {
          name: "Supabase",
          logo: <SupabaseIcon className="h-5 w-5 text-[#3ECF8E]" />,
        },
        {
          name: "Vercel",
          logo: <VercelIcon className="h-5 w-5 text-zinc-950" />,
        },
      ],
      link: "https://floraverse.vercel.app/",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa] font-sans text-zinc-950 selection:bg-zinc-950 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 pt-24 text-center">
        {/* Subtle Architectural Dot Grid & Spotlight */}
        <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,0,0,0.05),transparent)]" />

        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-4 py-1.5 text-xs font-medium text-zinc-700 shadow-xs backdrop-blur-md transition-all hover:border-zinc-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono-code text-[11px] font-semibold text-zinc-600">
            Available for Projects & Engineering Roles
          </span>
        </motion.div>

        {/* Hero Title with Space Grotesk */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="relative inline-block text-zinc-950">
            Altan Putra
            <motion.span
              className="absolute -bottom-2 left-0 h-[4px] w-full rounded-full bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-950 opacity-80"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        {/* Subtitle Specializations */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2 font-display text-base font-semibold text-zinc-700 sm:text-xl md:text-2xl"
        >
          <span>Mobile App Engineer</span>
          <span className="text-zinc-300">•</span>
          <span>Web Platform Developer</span>
          <span className="text-zinc-300">•</span>
          <span>UI/UX Architecture</span>
        </motion.p>

        {/* Bio summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-xl text-balance text-sm text-zinc-600 sm:text-base md:text-lg"
        >
          Crafting high-speed, accessible, and user-centric digital products across
          Flutter and Next.js. Champion of university-level web engineering.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a
            href="#projects"
            className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 active:scale-95 focus-ring"
          >
            <span>Explore Projects</span>
            <RocketIcon
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-zinc-700 shadow-xs transition-all hover:bg-zinc-50 hover:text-zinc-950 focus-ring"
          >
            <span>Get in Touch</span>
            <ArrowRight size={14} className="text-zinc-400" />
          </a>
        </motion.div>

        {/* Quick Proof Metrics Row (Anti-AI-SLOP: Tangible, real metrics with vector icons) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-2xl w-full"
        >
          <div className="flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs backdrop-blur-xs">
            <Trophy size={16} className="text-amber-600 shrink-0" />
            <div className="text-left">
              <p className="font-display text-xs font-bold text-zinc-900">
                1st Place Champion
              </p>
              <p className="font-mono-code text-[11px] text-zinc-500">
                FICPACTCUP 2026 Web
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs backdrop-blur-xs">
            <Smartphone size={16} className="text-cyan-600 shrink-0" />
            <div className="text-left">
              <p className="font-display text-xs font-bold text-zinc-900">
                4+ Production Apps
              </p>
              <p className="font-mono-code text-[11px] text-zinc-500">
                Flutter & Next.js
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs backdrop-blur-xs">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <div className="text-left">
              <p className="font-display text-xs font-bold text-zinc-900">
                Responsive & Accessible
              </p>
              <p className="font-mono-code text-[11px] text-zinc-500">
                WCAG 2.2 AA Standard
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="flex flex-col gap-24 px-6 py-12 md:px-16 lg:px-28">
        {/* ABOUT ME SECTION */}
        <section id="about" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14 rounded-[32px] border border-zinc-200/80 bg-white p-7 sm:p-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]"
          >
            {/* Avatar Section */}
            <div className="group relative h-44 w-44 shrink-0 sm:h-52 sm:w-52">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-zinc-300 via-zinc-100 to-zinc-400 opacity-60 blur-md transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10 h-full w-full rounded-full border-2 border-white p-1 shadow-md bg-white">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-zinc-900">
                  <Image
                    src="/my-foto.jpeg"
                    alt="Altan Assyfa Naura Putra"
                    width={240}
                    height={240}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono-code text-xs font-semibold text-zinc-600">
                <Terminal size={13} className="text-zinc-500" />
                <span>ABOUT THE DEVELOPER</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                Altan Assyfa Naura Putra
              </h2>

              <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-600">
                Informatics Engineering undergraduate at{" "}
                <span className="font-semibold text-zinc-950">
                  Dian Nuswantoro University (UDINUS)
                </span>{" "}
                in Semarang, Central Java. I specialize in cross-platform mobile engineering
                with <span className="font-semibold text-zinc-950">Flutter & Dart</span> and
                modern web applications with{" "}
                <span className="font-semibold text-zinc-950">
                  Next.js, React 19, TypeScript, and Tailwind CSS
                </span>
                .
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                {["Flutter", "Dart", "Next.js 16", "React 19", "TypeScript", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono-code text-xs font-medium text-zinc-700"
                    >
                      {tech}
                    </span>
                  )
                )}
                <span className="mx-1 hidden text-zinc-300 md:inline">•</span>
                <AiModeResumeButton label="Download Resume" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* WHAT I DO SECTION */}
        <section id="services" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col items-start gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 font-mono-code text-xs font-semibold text-zinc-600 shadow-xs">
                <span>01 // SERVICES & SPECIALIZATION</span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                What I Do & Deliver
              </h2>
              <p className="max-w-2xl text-sm sm:text-base text-zinc-600">
                End-to-end engineering from architectural concepts to production deployment.
              </p>
            </div>

            <WhatIDoSection />
          </motion.div>
        </section>

        {/* AWARDS & RECOGNITION SECTION */}
        <section id="awards" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col items-start gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 font-mono-code text-xs font-semibold text-zinc-600 shadow-xs">
                <span>02 // COMPETITION HONORS</span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                Awards & Achievements
              </h2>
              <p className="max-w-2xl text-sm sm:text-base text-zinc-600">
                Verified competition achievements validated at university levels.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {awards.map((award, index) => (
                <AwardCard key={index} {...award} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="flex flex-col items-start gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 font-mono-code text-xs font-semibold text-zinc-600 shadow-xs">
                  <span>03 // PORTFOLIO SHOWCASE</span>
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                  Featured Projects
                </h2>
                <p className="max-w-2xl text-sm sm:text-base text-zinc-600">
                  Select mobile and web applications developed with production quality.
                </p>
              </div>

              <Link
                href="/projects"
                className="group inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 shadow-xs transition-all hover:bg-zinc-50 hover:text-zinc-950 focus-ring"
              >
                <span>Browse All Projects</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <ProjectMarquee projects={projects} />
          </motion.div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col items-start gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 font-mono-code text-xs font-semibold text-zinc-600 shadow-xs">
                <span>04 // CAREER TRAJECTORY</span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                Experience & Education
              </h2>
              <p className="max-w-2xl text-sm sm:text-base text-zinc-600">
                Work experience at software houses and formal academic background.
              </p>
            </div>

            <ExperienceEducationTabs />
          </motion.div>
        </section>

        {/* TECH STACK ECOSYSTEM */}
        <section id="tech-stack" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col items-start gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 font-mono-code text-xs font-semibold text-zinc-600 shadow-xs">
                <span>05 // ARSENAL</span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                Technologies & Tools
              </h2>
              <p className="max-w-2xl text-sm sm:text-base text-zinc-600">
                Daily tools, frameworks, and database engines used to craft digital solutions.
              </p>
            </div>

            <div className="relative mt-2 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
              <div className="flex w-max items-center gap-8 sm:gap-12 pr-8 sm:pr-12 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
                {[...skills, ...skills, ...skills].map((skill, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center gap-3"
                    style={{ "--hover-color": skill.color } as React.CSSProperties}
                  >
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-zinc-200/90 bg-white shadow-xs transition-all duration-300 group-hover:-translate-y-1 group-hover:border-zinc-400 group-hover:shadow-md">
                      {skill.logo}
                    </div>
                    <span className="font-mono-code text-xs font-semibold text-zinc-700 transition-colors group-hover:text-zinc-950">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
