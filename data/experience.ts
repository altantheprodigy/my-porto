import { ExperienceItem, AwardItem } from "@/types/portfolio";

export const experiencesData: ExperienceItem[] = [
  {
    id: "can-creative",
    role: "Mobile Developer Intern",
    status: "Intern",
    company: "CAN Creative",
    location: "Semarang, Central Java, Indonesia",
    period: "Oct 2024 — Mar 2025",
    description: [
      "Engineered cross-platform mobile client features for client applications using Flutter and Dart.",
      "Ensured optimal runtime performance, smooth 60fps animations, and pixel-perfect responsive layouts across both Android and iOS devices.",
      "Collaborated closely with backend engineers and UI/UX designers to integrate RESTful API endpoints and resolve production UI defects.",
    ],
    skills: ["Flutter", "Dart", "REST API", "Git", "Figma", "Mobile UI"],
  },
  {
    id: "smk-rus",
    role: "Mobile Developer",
    status: "Alumni",
    company: "SMK Raden Umar Said Kudus",
    location: "Kudus, Central Java, Indonesia",
    period: "Mar 2024 — Sep 2024",
    description: [
      "Led mobile development for the RUS Consign marketplace app as the graduating capstone project.",
      "Designed and implemented complex client-side caching architecture using Hive and integrated Laravel backend APIs.",
      "Achieved a final graduation evaluation score of 89/100 in Software & Game Engineering.",
    ],
    skills: ["Flutter", "Hive", "Laravel", "State Management", "MySQL"],
  },
];

export const educationsData: ExperienceItem[] = [
  {
    id: "udinus",
    role: "Informatics Engineering (S1)",
    status: "Student",
    company: "Dian Nuswantoro University (UDINUS)",
    location: "Semarang, Central Java, Indonesia",
    period: "2025 — Present",
    description: [
      "Pursuing a Bachelor's Degree in Informatics Engineering with focus on Software Engineering, Mobile Architecture, and Modern Web Systems.",
      "Active in competitive programming, hackathons, and web application competitions across universities.",
    ],
    skills: ["Data Structures", "Algorithms", "Next.js", "Full-Stack Development"],
  },
  {
    id: "smk-rus-edu",
    role: "Software & Game Engineering",
    status: "Alumni",
    company: "SMK Raden Umar Said Kudus",
    location: "Kudus, Central Java, Indonesia",
    period: "2022 — 2025",
    description: [
      "Completed intensive vocational curriculum in Software and Game Development with specialized focus on mobile app architecture and OOP paradigms.",
      "Developed multiple production-ready applications utilizing Flutter, Laravel, and Figma.",
    ],
    skills: ["Software Engineering", "Mobile Development", "Database Design", "UI/UX"],
  },
];

export const awardData: AwardItem = {
  id: "fictpact-cup-2026",
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
  link: "https://floraverse.vercel.app/",
  teamName: "Floraverse Team",
  description:
    "Awarded 1st Place Champion in the prestigious university-level Web Development Competition at FICPACTCUP 2026. Served as Lead Front-End Developer, architecting a high-performance Next.js application with fluid micro-interactions, responsive taxonomy browsing, and Supabase integration.",
  techStacks: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
};
