import ProjectCard from "@/components/ProjectCard";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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

const Page = () => {
  const projects = [
    {
      category: "Mobile Development",
      title: "Conversation Card",
      description:
        "An interactive chat card application that presents a variety of unique question decks with genres ranging from romance and hobbies to deep talk. In this solo project, I handled the entire front-end cycle, from UI design and slicing to API integration, which allows users to log in and create their own custom decks.",
      imageSrc: "/preview_conversation.png",
      downloadLink: "/#",
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
      downloadLink: "/#",
      isDownload: false,
      downloadText: "View Project", // Berhubung ini isDownload = false, teksnya saya sarankan "View Project" / "View GitHub"
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
      title: "AirPay Finance App",
      description:
        "A financial transaction application similar to mobile banking, developed with a team using Flutter and Hive Local Database. This project challenged me to implement Figma designs into a responsive interface to support essential features such as transfers, top-ups, withdrawals, and purchases of various digital vouchers.",
      imageSrc: "/preview-airpay.png",
      downloadLink: "/#",
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
          name: "Hive",
          logo: (
            <HiveIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#FDEE21]" />
          ),
        },
        {
          name: "Figma",
          logo: (
            <FigmaIcon className="h-6 w-6 text-zinc-500 transition-colors duration-500 group-hover:text-[#F24E1E]" />
          ),
        },
      ],
    },
  ];

  return (
    // Wrapper: Ditambahkan padding (px-36 py-20) dan dihapus teks hitam yang bentrok dengan bg gelap
    <div className="bg-hitam-utama min-h-screen w-full px-8 py-16 font-sans selection:bg-gray-200 md:px-36 md:py-20">
      {/* 1. Tombol Back to Home */}
      <Link
        href="/#MyProjects"
        className="group mb-12 flex w-fit items-center gap-2 text-zinc-400 transition-colors duration-300 hover:text-white"
      >
        <ArrowLeft
          size={20}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span className="text-[16px] font-medium">Back to Home</span>
      </Link>

      {/* 2. Header Section */}
      <div className="mb-14 flex flex-col gap-2">
        <h1 className="text-[40px] font-bold tracking-tight text-white md:text-[56px]">
          All Projects
        </h1>
        <div className="bg-brand-green h-1 w-32 rounded-full"></div>
        <p className="mt-2 max-w-2xl text-[18px] leading-relaxed font-light text-zinc-400">
          A deeper dive into all the mobile and web applications I have built.
          From concept and design to deployment.
        </p>
      </div>

      {/* 3. Project List Container (Hapus h-screen, ubah gap jadi lebih besar) */}
      <div className="flex flex-col gap-12 pb-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            category={project.category}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            downloadLink={project.downloadLink}
            isDownload={project.isDownload}
            downloadText={project.downloadText}
            techStacks={project.techStacks}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
