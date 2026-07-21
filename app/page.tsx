"use client";

import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import { ArrowBigDown, FileDown, Rocket, RocketIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  DartIcon,
  FigmaIcon,
  FlutterIcon,
  HiveIcon,
  LaravelIcon,
  MySqlIcon,
  NextIcon,
  PhpIcon,
  TailWindIcon,
  TypescriptIcon,
  SupabaseIcon,
  VercelIcon,
} from "@/components/TechStackIcon";
import ProjectCard from "@/components/ProjectCard";
import ProjectMarquee from "@/components/ProjectMarquee";
import ExperienceCard from "@/components/ExperienceCard";
import AwardCard from "@/components/AwardCard";
import WhatIDoSection from "@/components/WhatIDoSection";
import ExperienceEducationTabs from "@/components/ExperienceEducationTabs";

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
    // Outer container: Hapus padding dan gap di sini agar Hero bisa full-screen
    <div className="bg-white selection:bg-brand-blue/30 relative min-h-screen overflow-hidden font-sans text-zinc-900 selection:text-zinc-900">


      {/* 1. HERO SECTION (Memenuhi Layar 100vh) */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 rotate-[-2deg] rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm shadow-lg backdrop-blur-md"
        >
          <span className="from-brand-blue to-brand-blue1 bg-gradient-to-r bg-clip-text font-medium text-transparent">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Font Size: text-4xl di HP, text-6xl di Laptop */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-utama text-5xl font-extrabold tracking-tighter text-zinc-900 md:text-7xl lg:text-8xl"
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-gradient-altan relative drop-shadow-lg">
            Altan Putra
            <motion.span
              className="from-brand-blue to-brand-blue1 absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-gradient-to-r opacity-50 blur-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        {/* Flex-col di HP agar tidak bertabrakan, Flex-row di Laptop */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center text-lg font-light text-zinc-500 md:flex-row md:text-2xl"
        >
          <span className="text-brand-blue font-medium drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            Mobile Development
          </span>
          <span className="mx-4 hidden text-zinc-600 md:inline">|</span>
          <span className="text-brand-blue mt-2 font-medium drop-shadow-[0_0_10px_rgba(16,185,129,0.3)] md:mt-0">
            Web Development
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-xl text-base text-balance text-zinc-500 md:text-lg"
        >
          Crafting intuitive, performant, and premium digital experiences across
          mobile and web platforms.
        </motion.p>

        {/* Tombol Get Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex w-full justify-center"
        >
          <a
            href="#about"
            className="group relative flex w-full max-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-full p-[2px] font-semibold transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] active:scale-95 md:w-fit"
          >
            <span className="from-brand-blue via-brand-blue1 to-brand-blue absolute inset-0 animate-[spin_4s_linear_infinite] bg-gradient-to-r" />

            <span className="bg-white group-hover:bg-zinc-100 relative flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-[16px] transition-all duration-300">
              <span className="relative z-10 text-zinc-900 font-medium">
                Start Exploring
              </span>

              <RocketIcon
                size={18}
                className="text-brand-blue group-hover:text-brand-blue relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="from-brand-blue h-12 w-[1px] bg-gradient-to-b to-transparent"
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
            {/* Static Glow Behind Avatar to save performance */}
            <div className="from-brand-blue to-brand-blue absolute -inset-2 rounded-full bg-gradient-to-br opacity-30 blur-lg transition duration-1000 group-hover:opacity-60"></div>
            <div className="from-brand-blue via-brand-blue to-brand-blue1 absolute -inset-1 rounded-full bg-gradient-to-br opacity-50 blur-md transition-all duration-700 group-hover:rotate-12 group-hover:scale-105 group-hover:opacity-100"></div>

            <div className="bg-white relative z-10 h-full w-full rounded-full p-[4px]">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#1a1a1a]">
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
                className="bg-brand-blue h-1.5 rounded-full"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-[16px] leading-relaxed text-zinc-500 md:text-[18px]"
            >
              A passionate{" "}
              <span className="font-semibold text-zinc-900 drop-shadow-md">
                Computer Science
              </span>{" "}
              student at{" "}
              <span className="hover:text-brand-blue cursor-pointer font-semibold text-zinc-900 transition-colors">
                UDINUS Semarang
              </span>{" "}
              who crafts digital solutions through{" "}
              <span className="text-brand-blue font-semibold">Mobile</span> and{" "}
              <span className="text-brand-blue font-semibold">Web</span>{" "}
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
              {["React", "Next.js", "Flutter", "Laravel"].map((tech, i) => (
                <span
                  key={tech}
                  className="text-brand-blue bg-brand-blue/10 border-brand-blue/20 hover:bg-brand-blue/20 cursor-default rounded-full border px-4 py-1.5 text-[14px] font-medium shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-colors"
                >
                  {tech}
                </span>
              ))}

              <span className="mx-2 hidden text-zinc-600 md:inline">•</span>

              <a
                href="/CV_Altan_Assyfa_Naura_Putra_Updated.pdf"
                download
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full p-[1px] text-[15px] font-semibold transition-all duration-300 active:scale-95 sm:w-fit"
              >
                <span className="from-brand-blue to-brand-blue absolute inset-0 bg-gradient-to-r opacity-50 transition-opacity group-hover:opacity-100 group-active:opacity-100" />
                <span className="bg-white group-hover:bg-white/80 group-active:bg-white/80 relative flex w-full items-center justify-center gap-2 rounded-full px-5 py-2 transition-colors">
                  <span className="text-zinc-900 group-hover:text-brand-blue group-active:text-brand-blue font-bold transition-colors">
                    Download CV
                  </span>
                  <FileDown
                    size={18}
                    className="group-hover:text-brand-blue group-active:text-brand-blue text-zinc-900 transition-all duration-300 group-hover:translate-y-0.5 group-active:translate-y-0.5"
                  />
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Experiences & Educations Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8"
        >

          {/* Tab Layout for Experiences & Educations */}
          <ExperienceEducationTabs />
        </motion.div>

        {/* Awards & Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col items-center gap-1 md:items-start">
            <h2 className="text-[28px] font-bold tracking-tight text-zinc-900 md:text-[32px]">
              Awards & Achievements
            </h2>
            <div className="h-1 w-20 rounded-full bg-brand-blue md:w-80"></div>
          </div>

          <div className="flex flex-col gap-10">
            {awards.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-10"
        >
          <div className="flex flex-col items-center gap-1 md:items-start">
            <h2 className="text-[28px] font-bold tracking-tight text-zinc-900 md:text-[32px]">
              What I Do
            </h2>
            <div className="bg-brand-blue h-1 w-20 rounded-full md:w-32"></div>
          </div>

          <WhatIDoSection />
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-1 md:items-start">
            <h2 className="text-[28px] font-bold tracking-tight text-zinc-900 md:text-[32px]">
              Tech Stack
            </h2>
            <div className="bg-brand-blue h-1 w-20 rounded-full md:w-50"></div>
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
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--hover-color)] group-hover:shadow-[0_10px_30px_-10px_var(--hover-color)]">
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          id="MyProjects"
          className="flex flex-col gap-8 md:gap-12"
        >
          <div className="flex flex-col items-center gap-1 md:items-start">
            <h2 className="text-[28px] font-bold tracking-tight text-zinc-900 md:text-[32px]">
              My Projects
            </h2>
            <div className="bg-brand-blue h-1 w-20 rounded-full md:w-50"></div>
          </div>

          <ProjectMarquee projects={projects} />

        </motion.div>

        <Footer />
      </div>
    </div>
  );
}
