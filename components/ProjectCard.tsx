"use client";

import Image from "next/image";
import { FileDown, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import React from "react";

interface TechStack {
  name: string;
  logo: React.ReactNode;
}

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  downloadLink: string;
  downloadText?: string;
  isDownload?: boolean;
  actionType?: "live" | "download" | "github";
  techStacks: TechStack[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  imageSrc,
  downloadLink,
  isDownload = false,
  downloadText,
  actionType = isDownload ? "download" : "live",
  techStacks,
}) => {
  // Determine action button label and icon
  const getActionConfig = () => {
    if (actionType === "download" || isDownload) {
      return {
        label: downloadText || "Download APK",
        icon: FileDown,
        isExternal: false,
      };
    }
    if (actionType === "github") {
      return {
        label: downloadText || "View Repository",
        icon: Github,
        isExternal: true,
      };
    }
    return {
      label: downloadText || "Live Demo",
      icon: ExternalLink,
      isExternal: true,
    };
  };

  const actionConfig = getActionConfig();
  const ActionIcon = actionConfig.icon;

  return (
    <div className="group relative flex flex-col gap-6 rounded-[28px] border border-zinc-200/90 bg-white p-4.5 sm:p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-zinc-300 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)] md:flex-row md:items-stretch md:gap-8">
      {/* Media Box */}
      <div className="relative w-full flex-1 overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-100/80 p-2 shadow-inner md:p-2.5">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100">
          <Image
            src={imageSrc}
            alt={`Preview of ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Narrative & Actions */}
      <div className="flex flex-[1.4] flex-col justify-between py-1">
        <div className="flex flex-col gap-2.5 text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 font-mono-code text-[11px] font-semibold text-zinc-600">
              {category}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
            {title}
          </h3>

          <p className="line-clamp-4 text-sm leading-relaxed text-zinc-600">
            {description}
          </p>
        </div>

        {/* Bottom Actions & Tech Icons */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-4">
          <a
            href={downloadLink}
            download={actionConfig.isExternal ? undefined : true}
            target={actionConfig.isExternal ? "_blank" : "_self"}
            rel={actionConfig.isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 active:scale-95 focus-ring"
          >
            <span>{actionConfig.label}</span>
            <ActionIcon size={15} />
          </a>

          {techStacks && techStacks.length > 0 && (
            <div className="flex items-center gap-1.5">
              <span className="font-mono-code text-[11px] font-semibold text-zinc-400 mr-1">
                Tech:
              </span>
              <div className="flex items-center gap-1.5">
                {techStacks.map((tech, index) => (
                  <div
                    key={index}
                    className="group/tech relative flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-1.5 shadow-xs transition-transform hover:scale-110 hover:bg-white"
                  >
                    {/* Cohesive Dark Tooltip */}
                    <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 rounded-md bg-zinc-950 px-2 py-1 font-mono-code text-[11px] font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover/tech:opacity-100">
                      {tech.name}
                      <svg
                        className="absolute top-full left-1/2 -translate-x-1/2 h-1.5 w-3 text-zinc-950"
                        viewBox="0 0 12 6"
                      >
                        <polygon points="0,0 6,6 12,0" fill="currentColor" />
                      </svg>
                    </span>
                    {tech.logo}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
