import React from "react";

export type ProjectCategory = "Mobile Development" | "Web Development" | "Full-Stack System";

export type ProjectActionType = "download" | "github" | "live";

export interface TechStackItem {
  name: string;
  color?: string;
  iconName?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  imageSrc: string;
  link: string;
  actionType: ProjectActionType;
  actionText: string;
  isDownload: boolean;
  featured: boolean;
  award?: string;
  tags: string[];
  techStacks: {
    name: string;
    iconKey: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  status: "Intern" | "Full-time" | "Contract" | "Student" | "Alumni";
  company: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  organizer: string;
  rank: string;
  projectName: string;
  role: string;
  date: string;
  images: string[];
  link?: string;
  teamName: string;
  description: string;
  techStacks: string[];
}

export interface ServiceItem {
  num: string;
  title: string;
  tagline: string;
  desc: string;
  highlights: string[];
  tools: string[];
  icon: "smartphone" | "globe" | "palette";
}
