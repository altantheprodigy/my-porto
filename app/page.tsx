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
} from "@/components/TechStackIcon";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  const skills = [
    {
      name: "Flutter",
      level: "Advance",
      logo: (
        <FlutterIcon className="h-8 w-8 text-zinc-500 transition-colors duration-500 group-hover:text-[#61DAFB]" />
      ),
      color: "#61DAFB",
    },
    {
      name: "Laravel",
      level: "Intermediate",
      logo: (
        <LaravelIcon className="h-8 w-8 text-zinc-500 transition-colors duration-500 group-hover:text-[#FF2D20]" />
      ),
      color: "#FF2D20",
    },
    {
      name: "Next.js ",
      level: "Advance",
      logo: (
        <NextIcon className="h-8 w-8 text-zinc-500 transition-colors duration-500 group-hover:text-[#FFFFFF]" />
      ),
      color: "#FFFFFF",
    },
    {
      name: "Dart",
      level: "Advance",
      logo: (
        <DartIcon className="h-8 w-8 text-zinc-500 transition-colors duration-500 group-hover:text-[#0175C2]" />
      ),
      color: "#0175C2",
    },
    {
      name: "PHP",
      level: "Intermediate",
      logo: (
        <PhpIcon className="h-8 w-8 text-zinc-500 transition-colors duration-500 group-hover:text-[#777BB4]" />
      ),
      color: "#777BB4",
    },
    {
      name: "Tailwind CSS",
      level: "Advance",
      logo: (
        <TailWindIcon className="h-8 w-8 text-zinc-500 transition-colors duration-500 group-hover:text-[#06B6D4]" />
      ),
      color: "#06B6D4",
    },
  ];

  const projects = [
    {
      category: "Mobile Development",
      title: "Conversation Card",
      description:
        "An interactive chat card application that presents a variety of unique question decks with genres ranging from romance and hobbies to deep talk. In this solo project, I handled the entire front-end cycle, from UI design and slicing to API integration, which allows users to log in and create their own custom decks.",
      imageSrc: "/preview_conversation.png",
      downloadLink: "/conversation_card.apk",
      isDownload: true,
      downloadText: "Download App",
      techStacks: [
        {
          name: "Flutter",
          logo: (
            <FlutterIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#06B6D4]" />
          ),
        },
        {
          name: "Laravel",
          logo: (
            <LaravelIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#FF2D20]" />
          ),
        },
        {
          name: "Figma",
          logo: (
            <FigmaIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#F24E1E]" />
          ),
        },
        {
          name: "MySQL",
          logo: (
            <MySqlIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#4479A1]" />
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
            <FlutterIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#06B6D4]" />
          ),
        },
        {
          name: "Laravel",
          logo: (
            <LaravelIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#FF2D20]" />
          ),
        },
        {
          name: "Figma",
          logo: (
            <FigmaIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#F24E1E]" />
          ),
        },
        {
          name: "MySQL",
          logo: (
            <MySqlIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#4479A1]" />
          ),
        },
      ],
    },
  ];

  return (
    // Outer container: Hapus padding dan gap di sini agar Hero bisa full-screen
    <div className="bg-hitam-utama selection:bg-brand-blue/30 relative min-h-screen overflow-hidden font-sans text-white selection:text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="bg-brand-blue/20 absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full blur-[120px]" />
        <div className="bg-brand-green/10 absolute top-[20%] -right-[10%] h-[60%] w-[40%] rounded-full blur-[120px]" />
      </div>

      {/* 1. HERO SECTION (Memenuhi Layar 100vh) */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 rotate-[-2deg] rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm shadow-lg backdrop-blur-md"
        >
          <span className="from-brand-green to-brand-blue bg-gradient-to-r bg-clip-text font-medium text-transparent">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Font Size: text-4xl di HP, text-6xl di Laptop */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-utama text-5xl font-extrabold tracking-tighter text-white md:text-7xl lg:text-8xl"
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-gradient-altan relative drop-shadow-lg">
            Altan Putra
            <motion.span
              className="from-brand-green to-brand-blue absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-gradient-to-r opacity-50 blur-sm"
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
          className="mt-8 flex flex-col items-center text-lg font-light text-zinc-400 md:flex-row md:text-2xl"
        >
          <span className="text-brand-blue font-medium drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            Mobile Development
          </span>
          <span className="mx-4 hidden text-zinc-600 md:inline">|</span>
          <span className="text-brand-green mt-2 font-medium drop-shadow-[0_0_10px_rgba(16,185,129,0.3)] md:mt-0">
            Web Development
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-xl text-base text-balance text-zinc-400 md:text-lg"
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
            {/* Animated Border Gradient */}
            <span className="from-brand-blue via-brand-green to-brand-blue absolute inset-0 animate-[spin_4s_linear_infinite] bg-gradient-to-r" />

            {/* Inner Content */}
            <span className="bg-hitam-utama group-hover:bg-hitam-utama/40 relative flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-[16px] transition-all duration-300 group-hover:backdrop-blur-md">
              <span className="relative z-10 text-white transition-colors group-hover:text-white">
                Start Exploring
              </span>

              <RocketIcon
                size={18}
                className="text-brand-blue group-hover:text-brand-green relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
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
            {/* Animated Glow Behind Avatar */}
            <div className="from-brand-green to-brand-blue absolute -inset-2 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-gradient-to-br opacity-30 blur-xl transition duration-1000 group-hover:opacity-60"></div>
            <div className="from-brand-green via-brand-blue absolute -inset-1 animate-[spin_6s_linear_infinite] rounded-full bg-gradient-to-br to-purple-500 opacity-50 blur-md transition duration-500 group-hover:opacity-100"></div>

            <div className="bg-hitam-utama relative z-10 h-full w-full rounded-full p-[4px]">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#1a1a1a]">
                <Image
                  src="/altan-seragam.jpeg"
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
                className="text-3xl font-bold tracking-tight text-white md:text-4xl"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-brand-green h-1.5 rounded-full"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-[16px] leading-relaxed text-zinc-400 md:text-[18px]"
            >
              A passionate{" "}
              <span className="font-semibold text-white drop-shadow-md">
                Computer Science
              </span>{" "}
              student at{" "}
              <span className="hover:text-brand-blue cursor-pointer font-semibold text-white transition-colors">
                UDINUS Semarang
              </span>{" "}
              who crafts digital solutions through{" "}
              <span className="text-brand-blue font-semibold">Mobile</span> and{" "}
              <span className="text-brand-green font-semibold">Web</span>{" "}
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
                href="/CV Altan Assyfa Naura Putra.pdf"
                download
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full p-[1px] text-[15px] font-semibold transition-all duration-300 active:scale-95 sm:w-fit"
              >
                <span className="from-brand-blue to-brand-green absolute inset-0 bg-gradient-to-r opacity-50 transition-opacity group-hover:opacity-100" />
                <span className="bg-hitam-utama group-hover:bg-hitam-utama/80 relative flex w-full items-center gap-2 rounded-full px-5 py-2 transition-colors">
                  <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                    Download CV
                  </span>
                  <FileDown
                    size={18}
                    className="group-hover:text-brand-green text-white transition-all duration-300 group-hover:translate-y-0.5"
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
          <div className="flex flex-col items-center gap-1 md:items-start">
            <h2 className="text-[28px] font-bold tracking-tight text-white md:text-[32px]">
              Experiences & Educations
            </h2>
            <div className="bg-brand-green h-1 w-20 rounded-full md:w-80"></div>
          </div>

          {/* Grid: 1 Kolom di HP, 2 Kolom di Desktop (LG) */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Kolom Experiences */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <div className="bg-brand-blue h-2 w-2 rounded-full"></div>
                <h3 className="text-[18px] font-bold tracking-wider text-white uppercase">
                  Experiences
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <ExperienceCard
                  role="Mobile Developer"
                  status="Intern"
                  company="CAN Creative | Jasa Pembuatan Web dan Aplikasi Mobile"
                  location="Semarang, Indonesia"
                  period="October 2024 - March 2025"
                  description={[
                    "Responsible for developing and maintaining mobile applications using the Flutter framework.",
                  ]}
                />
                <ExperienceCard
                  role="Mobile Developer"
                  status="Team Project"
                  company="SMK Raden Umar Said Kudus"
                  location="Kudus, Indonesia"
                  period="March - September 2024"
                  description={[
                    "Collaborated in a team to develop mobile application features using Flutter. Ensured optimal performance and responsive layout for Android and iOS platforms.",
                  ]}
                />
                {/* Tambahkan Card lainnya sesuai kebutuhan */}
              </div>
            </div>

            {/* Kolom Educations */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <div className="bg-brand-green h-2 w-2 rounded-full"></div>
                <h3 className="text-[18px] font-bold tracking-wider text-white uppercase">
                  Educations
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <ExperienceCard
                  role="Informatics Engineering"
                  status="Student"
                  company="Dian Nuswantoro University"
                  location="Semarang, Indonesia"
                  period="2025 - Present"
                  description={[
                    "Continuing my education at Dian Nuswatara University in Semarang, improving my skills and experience here.",
                  ]}
                />
                <ExperienceCard
                  role="Software and game engineering"
                  status="Alumni"
                  company="Raden Umar Said Vocational High School"
                  location="Kudus, Indonesia"
                  period="2022 - 2025"
                  description={[
                    "Graduated with a grade of 89 in Software Engineering and completed a final project creating the RUS Consign Mobile application.",
                  ]}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col gap-20 lg:flex-row lg:items-stretch lg:gap-7"
        >
          {/* Teks Judul & Deskripsi */}
          <div className="flex flex-col items-center gap-3 text-center lg:flex-1 lg:items-start lg:text-left">
            <h3 className="text-[28px] font-medium text-white md:text-[32px]">
              What I Do
            </h3>
            <p className="text-text-body max-w-md text-[16px] leading-relaxed font-normal md:text-[18px]">
              Exploring modern technology to build functional, responsive{" "}
              <span className="text-brand-blue font-medium">Applications</span>{" "}
              and <span className="text-brand-green font-medium">Websites</span>{" "}
              that provide an optimal user experience.
            </p>
          </div>

          {/* Container Kartu Service */}
          {/* Di HP: Stack vertikal dengan gap besar karena ada ikon -top-12 */}
          {/* Di Tablet: Grid 2 kolom */}
          {/* Di Laptop: Flex 3 kolom */}
          <div className="grid flex-[4] grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 lg:flex lg:flex-row">
            <div className="flex-1">
              <ServiceCard
                logo={
                  <FlutterIcon className="h-10 w-10 text-zinc-500 group-hover:text-[#06B6D4]" />
                }
                title="Mobile Development"
                desc="Developing high-performance apps with Flutter."
                color="#06B6D4"
              />
            </div>
            <div className="flex-1">
              <ServiceCard
                logo={
                  <NextIcon className="h-6 w-6 text-zinc-500 group-hover:text-[#FFFFFF]" />
                }
                title="Web Development"
                desc="Building modern web apps with Next.js."
                color="#FFFFFF"
              />
            </div>
            <div className="flex-1">
              <ServiceCard
                logo={
                  <FigmaIcon className="h-6 w-6 text-zinc-500 group-hover:text-[#F24E1E]" />
                }
                title="UI Design"
                desc="Creating interactive UI using Figma."
                color="#F24E1E"
              />
            </div>
          </div>
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
            <h2 className="text-[28px] font-bold tracking-tight text-white md:text-[32px]">
              Tech Stack
            </h2>
            <div className="bg-brand-green h-1 w-20 rounded-full md:w-50"></div>
          </div>

          {/* Grid Dinamis: 
      1 Kolom di HP sangat kecil, 
      2 Kolom di HP standar (sm), 
      3 Kolom di Laptop (lg) 
  */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{ "--hover-color": skill.color } as React.CSSProperties}
                className="group bg-bg-card relative flex w-full flex-row items-center gap-4 rounded-2xl border border-transparent px-4 py-4 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[var(--hover-color)] hover:shadow-[0_10px_40px_-10px_var(--hover-color)] md:gap-6 md:px-6 md:py-5"
              >
                {/* Ukuran Box Logo: Sedikit lebih kecil di mobile agar tidak sesak */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:rotate-6 md:h-14 md:w-14">
                  {skill.logo}
                </div>

                <div className="flex flex-col gap-1">
                  {/* Ukuran Font: text-base di mobile, text-lg di desktop */}
                  <h3 className="text-[16px] font-bold text-white transition-colors duration-300 group-hover:text-[var(--hover-color)] md:text-[18px]">
                    {skill.name}
                  </h3>
                  <span className="bg-brand-blue/10 w-fit rounded-full px-2.5 py-0.5 text-[12px] font-semibold text-white group-hover:text-[var(--hover-color)] md:text-[14px]">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
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
            <h2 className="text-[28px] font-bold tracking-tight text-white md:text-[32px]">
              My Projects
            </h2>
            <div className="bg-brand-green h-1 w-20 rounded-full md:w-50"></div>
          </div>

          <div className="flex flex-col gap-10 md:gap-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* Tombol See More: w-full di mobile */}
          <a
            href="/AllProjects"
            className="group bg-bg-card relative mt-2 flex w-full cursor-pointer flex-row items-center justify-center gap-4 rounded-[12px] px-4 py-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#34394A] hover:shadow-lg md:w-fit md:py-3"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/ViewList.png"
                alt="ViewList"
                width={20}
                height={20}
              />
            </div>
            <p className="font-utama text-text-body text-[15px] font-medium transition-colors duration-300 group-hover:text-white">
              See More
            </p>
          </a>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}
