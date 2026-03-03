import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import { ArrowBigDown, FileDown, Rocket, RocketIcon } from "lucide-react";
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
    <div className="bg-hitam-utama min-h-screen font-sans text-black selection:bg-gray-200">
      {/* 1. HERO SECTION (Memenuhi Layar 100vh) */}
      <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
        {/* Font Size: text-4xl di HP, text-6xl di Laptop */}
        <h1 className="font-utama text-4xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-gradient-altan">Altan Putra</span>
        </h1>

        {/* Flex-col di HP agar tidak bertabrakan, Flex-row di Laptop */}
        <p className="mt-6 flex flex-col items-center text-lg font-light text-zinc-400 md:flex-row md:text-2xl">
          <span className="text-brand-blue font-medium">
            Mobile Development
          </span>
          {/* Sembunyikan garis pemisah (|) di HP, munculkan di MD (tablet) ke atas */}
          <span className="mx-4 hidden text-zinc-600 md:inline">|</span>
          <span className="text-brand-green mt-2 font-medium md:mt-0">
            Web Development
          </span>
        </p>

        {/* Tombol Get Started */}
        <a
          href="#about"
          className="group border-brand-blue/30 bg-brand-blue/10 text-brand-blue relative mt-8 flex w-full max-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-2xl border px-6 py-4 text-[16px] font-semibold transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] active:scale-95 md:w-fit"
        >
          {/* Efek Gradasi yang mengisi penuh saat di-hover */}
          <div
            style={{ backgroundImage: "var(--bg-gradient-altan)" }}
            className="absolute inset-0 -translate-x-full opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
          ></div>

          <span className="relative z-10">Get Started</span>

          {/* Animasi roket meluncur ke kanan atas */}
          <RocketIcon
            size={18}
            className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </section>
      {/* 2. MAIN CONTENT WRAPPER (Mengembalikan padding & gap asli untuk sisa konten) */}
      <div className="flex flex-col gap-15 px-6 py-20 pb-32 md:px-20 lg:px-36">
        {/* 2. ABOUT ME SECTION */}
        {/* Ubah 'flex-row' menjadi 'flex-col' untuk mobile, 'md:flex-row' untuk desktop */}
        <div
          id="about"
          className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12"
        >
          {/* Avatar Section */}
          {/* Gunakan 'h-48 w-48' agar sedikit lebih besar di mobile agar proporsional */}
          <div className="group relative h-40 w-40 shrink-0 md:h-48 md:w-48">
            <div className="from-brand-green to-brand-blue absolute -inset-1 rounded-full bg-gradient-to-br opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>

            <div className="from-brand-green via-brand-blue to-brand-blue relative h-full w-full rounded-full bg-gradient-to-br p-[3px]">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#272727]">
                <Image
                  src="/altan-seragam.jpeg"
                  alt="Altan Putra"
                  width={192} // Sesuaikan dengan ukuran md:w-48
                  height={192}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Biography Section */}
          {/* 'text-center' di mobile, 'md:text-left' di desktop */}
          <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div className="flex flex-col items-center gap-1 md:items-start">
              <h2 className="text-[28px] font-bold tracking-tight text-white md:text-[32px]">
                About Me
              </h2>
              <div className="bg-brand-green h-1 w-12 rounded-full"></div>
            </div>

            <p className="max-w-2xl text-[16px] leading-relaxed text-text-body md:text-[18px]">
              A dedicated{" "}
              <span className="font-medium text-white">Computer Science</span>{" "}
              student at{" "}
              <span className="font-medium text-white">UDINUS Semarang</span>{" "}
              who creates digital solutions through{" "}
              <span className="text-brand-blue font-medium">Mobile</span> and{" "}
              <span className="text-brand-green font-medium">Web</span>{" "}
              Development. My focus is on exploring modern technologies to build
              functional, responsive applications that provide an optimal user
              experience.
            </p>

            {/* Tech Stack List: 'justify-center' di mobile, 'md:justify-start' di desktop */}
            {/* Gunakan 'flex-wrap' agar tag tidak terpotong saat layar sempit */}
            <div className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="text-brand-blue bg-brand-blue/10 rounded-full px-3 py-1 text-[14px] font-semibold md:text-[16px]">
                React
              </span>
              <span className="hidden text-zinc-600 md:inline">•</span>
              <span className="text-brand-blue bg-brand-blue/10 rounded-full px-3 py-1 text-[14px] font-semibold md:text-[16px]">
                Flutter
              </span>
              <span className="hidden text-zinc-600 md:inline">•</span>
              <span className="text-brand-blue bg-brand-blue/10 rounded-full px-3 py-1 text-[14px] font-semibold md:text-[16px]">
                Laravel
              </span>
              <span className="hidden text-zinc-600 md:inline">•</span>

              {/* Tombol Download CV: 'w-full' di mobile agar mudah diklik */}
              <a
                href="/CV Altan Assyfa Naura Putra.pdf"
                download
                className="group bg-brand-blue/10 text-brand-blue hover:bg-brand-blue relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-4 py-2 text-[14px] font-semibold transition-all duration-300 hover:text-white active:scale-95 md:w-fit md:text-[16px]"
              >
                <div
                  style={{ backgroundImage: "var(--bg-gradient-altan)" }}
                  className="absolute inset-0 -translate-x-full opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                ></div>
                <span className="relative z-10">Download CV</span>
                <FileDown
                  size={18}
                  className="relative z-10 transition-all duration-300 group-hover:translate-y-0.5 group-hover:animate-bounce"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Experiences & Educations Section */}
        <div className="flex flex-col gap-8">
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
        </div>

        {/* What I Do Section */}
        <div className="mt-10 flex flex-col gap-20 lg:flex-row lg:items-stretch lg:gap-7">
          {/* Teks Judul & Deskripsi */}
          <div className="flex flex-col items-center gap-3 text-center lg:flex-1 lg:items-start lg:text-left">
            <h3 className="text-[28px] font-medium text-white md:text-[32px]">
              What I Do
            </h3>
            <p className="max-w-md text-[16px] leading-relaxed font-normal text-text-body md:text-[18px]">
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
        </div>

        {/* Tech Stack Section */}
        <div className="flex flex-col gap-6">
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
        </div>

        {/* My Project Section */}
        <div id="MyProjects" className="flex flex-col gap-8 md:gap-12">
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
            <p className="font-utama text-[15px] font-medium text-text-body transition-colors duration-300 group-hover:text-white">
              See More
            </p>
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
}
