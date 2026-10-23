"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, RocketIcon } from "lucide-react";
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
      logo: <FlutterIcon className="h-12 w-12 text-[#61DAFB]" />,
      color: "#61DAFB",
    },
    {
      name: "Laravel",
      logo: <LaravelIcon className="h-12 w-12 text-[#FF2D20]" />,
      color: "#FF2D20",
    },
    {
      name: "Next.js ",
      logo: <NextIcon className="h-12 w-12 text-zinc-900" />,
      color: "#18181b",
    },
    {
      name: "Dart",
      logo: <DartIcon className="h-12 w-12 text-[#0175C2]" />,
      color: "#0175C2",
    },
    {
      name: "PHP",
      logo: <PhpIcon className="h-12 w-12 text-[#777BB4]" />,
      color: "#777BB4",
    },
    {
      name: "Tailwind CSS",
      logo: <TailWindIcon className="h-12 w-12 text-[#06B6D4]" />,
      color: "#06B6D4",
    },
  ];

  const projects = [
    {
      category: "Web Development",
      title: "FLORAVERSE",
      description:
        "A web application that won 1st place in Web Development at FICPACTCUP2026. I served as the Front-End Developer, building the interface and ensuring a seamless user experience using modern web technologies.",
      imageSrc: "/floraverse.png",
      downloadLink: "https://floraverse.vercel.app/",
      isDownload: false,
      downloadText: "View Web",
      techStacks: [
        {
          name: "Next.js",
          logo: (
            <NextIcon className="h-6 w-6 text-zinc-900" />
          ),
        },
        {
          name: "TypeScript",
          logo: (
            <TypescriptIcon className="h-6 w-6 text-[#3178C6]" />
          ),
        },
        {
          name: "Tailwind CSS",
          logo: (
            <TailWindIcon className="h-6 w-6 text-[#06B6D4]" />
          ),
        },
        {
          name: "Supabase",
          logo: (
            <SupabaseIcon className="h-6 w-6 text-[#3ECF8E]" />
          ),
        },
        {
          name: "Vercel",
          logo: (
            <VercelIcon className="h-6 w-6 text-zinc-900" />
          ),
        },
      ],
    },
    {
      category: "Mobile Development",
      title: "Conversation Card",
      description:
        "An interactive chat card application that presents a variety of unique question decks with genres ranging from romance and hobbies to deep talk. In this solo project, I handled the entire front-end cycle, from UI design and slicing to API integration, which allows users to log in and create their own custom decks.",
      imageSrc: "/preview_conversation.png",
      downloadLink: "/conversation_card_latest.apk",
      isDownload: true,
      downloadText: "Download App",
      techStacks: [
        {
          name: "Flutter",
          logo: (
            <FlutterIcon className="h-6 w-6 text-[#06B6D4]" />
          ),
        },
        {
          name: "Laravel",
          logo: (
            <LaravelIcon className="h-6 w-6 text-[#FF2D20]" />
          ),
        },
        {
          name: "Figma",
          logo: (
            <FigmaIcon className="h-6 w-6 text-[#F24E1E]" />
          ),
        },
        {
          name: "MySQL",
          logo: (
            <MySqlIcon className="h-6 w-6 text-[#4479A1]" />
          ),
        },
      ],
    },
    {
      category: "Mobile Development",
      title: "RUS Consign",
      description:
        "A comprehensive marketplace platform specifically designed to facilitate the sale of physical and digital products created by students. As a Front-End Developer, I played a major role in leading the visual aspects, from designing the interface in Figma, slicing the code to Flutter, to ensuring the smooth integration of the API with the Laravel backend.",
      imageSrc: "/RusConsign.png",
      downloadLink: "https://github.com/altantheprodigy/RusConsign.git",
      isDownload: false,
      downloadText: "View App",
      techStacks: [
        {
          name: "Flutter",
          logo: (
            <FlutterIcon className="h-6 w-6 text-[#06B6D4]" />
          ),
        },
        {
          name: "Laravel",
          logo: (
            <LaravelIcon className="h-6 w-6 text-[#FF2D20]" />
          ),
        },
        {
          name: "Figma",
          logo: (
            <FigmaIcon className="h-6 w-6 text-[#F24E1E]" />
          ),
        },
        {
          name: "MySQL",
          logo: (
            <MySqlIcon className="h-6 w-6 text-[#4479A1]" />
          ),
        },
      ],
    },
  ];

  const awards = [
    {
      title: "1st Place Web Development",
      organizer: "FICPACTCUP2026, UNIKA Semarang",
      rank: "Winner",
      projectName: "FLORAVERSE",
      role: "Front End Dev",
      date: "7 April 2026",
      images: ["/floraverse.png", "/foto-bertiga-floraverse.jpeg", "/foto-piagam-piala.jpeg"],
      techStacks: [
        {
          name: "Next.js",
          logo: <NextIcon className="h-6 w-6 text-zinc-900" />,
        },
        {
          name: "TypeScript",
          logo: <TypescriptIcon className="h-6 w-6 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          logo: <TailWindIcon className="h-6 w-6 text-[#06B6D4]" />,
        },
        {
          name: "Supabase",
          logo: <SupabaseIcon className="h-6 w-6 text-[#3ECF8E]" />,
        },
        {
          name: "Vercel",
          logo: <VercelIcon className="h-6 w-6 text-zinc-900" />,
        },
      ],
      link: "https://floraverse.vercel.app/",
    },
  ];

  return (
    // Outer container: Primary Black Palette with crisp white canvas
    <div className="bg-white selection:bg-zinc-950 selection:text-white relative min-h-screen overflow-hidden font-sans text-zinc-950">

      {/* 1. HERO SECTION (Memenuhi Layar 100vh) */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        {/* Subtle Ambient Background Spotlight (Dark Neutral) */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.04),transparent)]" />

        {/* Animated Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 bg-white/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-zinc-700 shadow-sm backdrop-blur-md transition-all hover:border-zinc-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Available for new opportunities</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-utama text-5xl font-extrabold tracking-tighter text-zinc-950 md:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m <br className="md:hidden" />
          <span className="text-gradient-altan relative drop-shadow-sm">
            Altan Putra
            <motion.span
              className="from-zinc-950 via-zinc-700 to-zinc-950 absolute -bottom-2 left-0 h-[4px] w-full rounded-full bg-gradient-to-r opacity-70 blur-[0.5px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center text-lg font-light text-zinc-500 md:flex-row md:text-2xl"
        >
          <span className="text-zinc-950 font-bold tracking-tight">
            Mobile Development
          </span>
          <span className="mx-4 hidden text-zinc-300 md:inline">•</span>
          <span className="text-zinc-950 font-bold tracking-tight mt-2 md:mt-0">
            Web Development
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-5 max-w-xl text-base text-balance text-zinc-500 md:text-lg"
        >
          Crafting intuitive, performant, and premium digital experiences across
          mobile and web platforms.
        </motion.p>

        {/* Start Exploring Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="mt-9 flex w-full justify-center"
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-zinc-950 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-zinc-950/20 transition-all duration-300 hover:bg-zinc-800 hover:scale-[1.02] active:scale-95"
          >
            <span>Start Exploring</span>
            <RocketIcon
              size={18}
              className="text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="from-zinc-950 h-12 w-[1.5px] bg-gradient-to-b to-transparent"
          />
        </motion.div>
      </section>
      {/* 2. MAIN CONTENT WRAPPER (Mengembalikan padding & gap asli untuk sisa konten) */}
      <div className="flex flex-col gap-15 px-6 py-20 pb-32 md:px-20 lg:px-36">
        {/* 2. ABOUT ME SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          id="about"
          className="flex flex-col items-center gap-8 pt-10 md:flex-row md:items-center md:gap-16"
        >
          {/* Avatar Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group relative h-48 w-48 shrink-0 md:h-64 md:w-64"
          >
            {/* Elegant Obsidian Halo Behind Avatar */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-zinc-950/40 via-zinc-800/30 to-zinc-600/20 opacity-70 blur-xl transition duration-1000 group-hover:opacity-100 group-hover:scale-105"></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black opacity-60 blur-md transition-all duration-700 group-hover:rotate-12 group-hover:scale-105 group-hover:opacity-100"></div>

            <div className="bg-white relative z-10 h-full w-full rounded-full p-[4px] shadow-xl">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#18181b]">
                <Image
                  src="/my-foto.jpeg"
                  alt="Altan Putra"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Biography Section */}
          <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-zinc-950 h-1.5 rounded-full"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-[16px] leading-relaxed text-zinc-600 md:text-[18px]"
            >
              A passionate{" "}
              <span className="font-bold text-zinc-950 drop-shadow-sm">
                Computer Science
              </span>{" "}
              student at{" "}
              <span className="hover:text-zinc-950 cursor-pointer font-bold text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors">
                UDINUS Semarang
              </span>{" "}
              who crafts digital solutions through{" "}
              <span className="text-zinc-950 font-bold underline decoration-zinc-900/40 underline-offset-4">Mobile</span> and{" "}
              <span className="text-zinc-950 font-bold underline decoration-zinc-900/40 underline-offset-4">Web</span>{" "}
              Development. I focus on exploring modern technologies to build
              highly functional, visually stunning, and responsive applications
              that leave a lasting impression.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              {["React", "Next.js", "Flutter", "Laravel"].map((tech) => (
                <span
                  key={tech}
                  className="text-zinc-800 bg-zinc-100 border-zinc-200 hover:bg-zinc-200 hover:border-zinc-300 cursor-default rounded-full border px-4 py-1.5 text-[14px] font-semibold transition-all shadow-sm"
                >
                  {tech}
                </span>
              ))}

              <span className="mx-2 hidden text-zinc-400 md:inline">•</span>
              <AiModeResumeButton label="Download CV" />
            </motion.div>
          </div>
        </motion.div>

        {/* Experiences & Educations Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-1.5 md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Career & Learning
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
              Experience & Education
            </h2>
            <div className="h-1.5 w-24 rounded-full bg-zinc-950"></div>
          </div>

          {/* Tab Layout for Experiences & Educations */}
          <ExperienceEducationTabs />
        </motion.div>

        {/* Awards & Achievements Section */}
        <motion.div
          id="awards"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8 scroll-mt-24"
        >
          <div className="flex flex-col items-center gap-1.5 md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Recognition & Honors
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
              Awards & Achievements
            </h2>
            <div className="h-1.5 w-24 rounded-full bg-zinc-950"></div>
          </div>

          <div className="flex flex-col gap-10">
            {awards.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-6 flex flex-col gap-8"
        >
          <div className="flex flex-col items-center gap-1.5 md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Core Specialization
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
              What I Do
            </h2>
            <div className="h-1.5 w-20 rounded-full bg-zinc-950"></div>
          </div>

          <WhatIDoSection />
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-1.5 md:items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Ecosystem & Tools
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
              Tech Stack
            </h2>
            <div className="h-1.5 w-20 rounded-full bg-zinc-950"></div>
          </div>

          {/* Horizontal Scrolling Marquee */}
          <div className="relative mt-4 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-6">
            <div className="flex w-max items-center gap-10 sm:gap-16 pr-10 sm:pr-16 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
              {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-4"
                  style={{ "--hover-color": skill.color } as React.CSSProperties}
                >
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--hover-color)] group-hover:shadow-[0_10px_30px_-10px_var(--hover-color)]">
                    {skill.logo}
                  </div>
                  <h3 className="text-[15px] font-bold tracking-wide text-zinc-900 transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* My Project Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          id="MyProjects"
          className="flex flex-col gap-8 md:gap-10 scroll-mt-24"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col items-center gap-1.5 md:items-start">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Selected Work
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                Featured Projects
              </h2>
              <div className="h-1.5 w-20 rounded-full bg-zinc-950"></div>
            </div>

            <Link
              href="/AllProjects"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors self-center sm:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ProjectMarquee projects={projects} />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}
