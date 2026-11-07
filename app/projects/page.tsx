"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowLeft, Sparkles, Filter, Code2, Smartphone, Globe } from "lucide-react";
import {
  FigmaIcon,
  FlutterIcon,
  HiveIcon,
  LaravelIcon,
  MySqlIcon,
  NextIcon,
  SupabaseIcon,
  TailWindIcon,
  TypescriptIcon,
  VercelIcon,
  DartIcon,
} from "@/components/TechStackIcon";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");

  const projects = [
    {
      id: "floraverse",
      type: "web" as const,
      category: "Web Engineering",
      title: "FLORAVERSE",
      description:
        "1st Place Champion in Web Development at FICPACTCUP 2026 (UNIKA Soegijapranata Semarang). Designed and engineered an interactive plant biodiversity platform utilizing Next.js App Router, React 19, TypeScript, and Supabase backend with high-speed indexing.",
      imageSrc: "/floraverse.png",
      downloadLink: "https://floraverse.vercel.app/",
      isDownload: false,
      downloadText: "Live Demo",
      actionType: "live" as const,
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
      id: "conversation-card",
      type: "mobile" as const,
      category: "Mobile Engineering",
      title: "Conversation Card",
      description:
        "An interactive social card deck mobile application presenting curated interpersonal questions across genres. Solo project covering Figma UI/UX, Flutter architecture, local state management, and Laravel REST API synchronization.",
      imageSrc: "/preview_conversation.png",
      downloadLink: "/conversation_card_latest.apk",
      isDownload: true,
      downloadText: "Download APK",
      actionType: "download" as const,
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
      id: "rus-consign",
      type: "mobile" as const,
      category: "Mobile Engineering",
      title: "RUS Consign",
      description:
        "Comprehensive campus consignment marketplace platform designed to facilitate student business transactions. Engineered in Flutter with Hive offline-first client database, real-time product browsing, and Laravel backend API.",
      imageSrc: "/RusConsign.png",
      downloadLink: "https://github.com/altantheprodigy/RusConsign.git",
      isDownload: false,
      downloadText: "View Code",
      actionType: "github" as const,
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
      id: "airpay",
      type: "mobile" as const,
      category: "Mobile Engineering",
      title: "AirPay Finance App",
      description:
        "Modern digital wallet and contactless fintech mobile application prototype. Features transaction categorization, virtual card management, expense analytics, and 60fps micro-animations built with Flutter and Hive.",
      imageSrc: "/preview-airpay.png",
      downloadLink: "/airpay.apk",
      isDownload: true,
      downloadText: "Download APK",
      actionType: "download" as const,
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

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <div className="min-h-screen w-full bg-[#fafafa] px-6 py-12 md:px-16 lg:px-28">
      <div className="mx-auto max-w-7xl flex flex-col gap-10">
        {/* Navigation */}
        <div className="pt-16">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 shadow-xs transition-all hover:bg-zinc-50 hover:text-zinc-950 focus-ring"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-zinc-200/80 pb-8">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono-code text-xs font-semibold text-zinc-600 shadow-xs w-fit">
              <Code2 size={13} className="text-zinc-500" />
              <span>PROJECT ARCHIVE</span>
            </div>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
              All Engineered Projects
            </h1>
            <p className="max-w-2xl text-sm sm:text-base text-zinc-600">
              A comprehensive archive of mobile applications and web platforms built from design to production.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all focus-ring ${
                filter === "all"
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
              }`}
            >
              <span>All</span>
              <span className="font-mono-code text-[11px] opacity-70">({projects.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setFilter("mobile")}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all focus-ring ${
                filter === "mobile"
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
              }`}
            >
              <Smartphone size={13} />
              <span>Mobile</span>
              <span className="font-mono-code text-[11px] opacity-70">
                ({projects.filter((p) => p.type === "mobile").length})
              </span>
            </button>

            <button
              type="button"
              onClick={() => setFilter("web")}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all focus-ring ${
                filter === "web"
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
              }`}
            >
              <Globe size={13} />
              <span>Web</span>
              <span className="font-mono-code text-[11px] opacity-70">
                ({projects.filter((p) => p.type === "web").length})
              </span>
            </button>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-8 pb-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              category={project.category}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              downloadLink={project.downloadLink}
              isDownload={project.isDownload}
              downloadText={project.downloadText}
              actionType={project.actionType}
              techStacks={project.techStacks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
