import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "floraverse",
    title: "FLORAVERSE",
    category: "Web Development",
    shortDescription:
      "Award-winning web application (1st Place Winner at FICPACTCUP2026) dedicated to biodiversity discovery and interactive plant taxonomy.",
    description:
      "A modern web application that won 1st Place in Web Development at FICPACTCUP2026 (UNIKA Soegijapranata Semarang). As the Front-End Developer, I engineered the entire interface from ground up, delivering high-performance page loads, smooth animations, and responsive interactions using Next.js and Tailwind CSS with Supabase backend integration.",
    imageSrc: "/floraverse.png",
    link: "https://floraverse.vercel.app/",
    actionType: "live",
    actionText: "Live Demo",
    isDownload: false,
    featured: true,
    award: "1st Place Winner @ FICPACTCUP2026",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    techStacks: [
      { name: "Next.js", iconKey: "nextjs" },
      { name: "TypeScript", iconKey: "typescript" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "Supabase", iconKey: "supabase" },
      { name: "Vercel", iconKey: "vercel" },
    ],
  },
  {
    id: "conversation-card",
    title: "Conversation Card",
    category: "Mobile Development",
    shortDescription:
      "Interactive social card deck mobile app with dynamic themes, curated questions, and personalized custom deck creation.",
    description:
      "An interactive mobile chat card application that presents curated decks for deepening interpersonal relationships across genres from hobbies to deep talk. In this solo engineering project, I handled UI design, frontend architecture in Flutter, state management, and backend REST API integration for custom deck synchronization.",
    imageSrc: "/preview_conversation.png",
    link: "/conversation_card_latest.apk",
    actionType: "download",
    actionText: "Download APK",
    isDownload: true,
    featured: true,
    tags: ["Flutter", "Dart", "Laravel", "REST API", "MySQL"],
    techStacks: [
      { name: "Flutter", iconKey: "flutter" },
      { name: "Dart", iconKey: "dart" },
      { name: "Laravel", iconKey: "laravel" },
      { name: "MySQL", iconKey: "mysql" },
      { name: "Figma", iconKey: "figma" },
    ],
  },
  {
    id: "rus-consign",
    title: "RUS Consign",
    category: "Mobile Development",
    shortDescription:
      "Digital consignment marketplace mobile app engineered for vocational school student businesses and community transactions.",
    description:
      "A comprehensive consignment marketplace application designed to facilitate student entrepreneurship and campus goods trading. Built with Flutter and Laravel REST APIs, featuring offline-first caching via Hive, transaction management, real-time catalog filtering, and authentication.",
    imageSrc: "/RusConsign.png",
    link: "https://github.com/altantheprodigy/RusConsign.git",
    actionType: "github",
    actionText: "View Repository",
    isDownload: false,
    featured: true,
    tags: ["Flutter", "Hive", "Laravel", "MySQL", "Figma"],
    techStacks: [
      { name: "Flutter", iconKey: "flutter" },
      { name: "Hive", iconKey: "hive" },
      { name: "Laravel", iconKey: "laravel" },
      { name: "MySQL", iconKey: "mysql" },
      { name: "Figma", iconKey: "figma" },
    ],
  },
  {
    id: "airpay",
    title: "AirPay Finance App",
    category: "Mobile Development",
    shortDescription:
      "Modern digital e-wallet and contactless payment prototype interface featuring real-time transaction balance and analytics.",
    description:
      "A modern financial technology mobile application interface featuring interactive virtual card management, quick contactless payment flows, automated transaction categorization, and clean biometric authentication patterns built with Flutter.",
    imageSrc: "/preview-airpay.png",
    link: "/airpay.apk",
    actionType: "download",
    actionText: "Download APK",
    isDownload: true,
    featured: true,
    tags: ["Flutter", "Dart", "Figma", "UI Engineering"],
    techStacks: [
      { name: "Flutter", iconKey: "flutter" },
      { name: "Dart", iconKey: "dart" },
      { name: "Laravel", iconKey: "laravel" },
      { name: "Figma", iconKey: "figma" },
    ],
  },
];
