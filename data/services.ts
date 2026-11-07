import { ServiceItem } from "@/types/portfolio";

export const servicesData: ServiceItem[] = [
  {
    num: "01",
    title: "Mobile App Development",
    tagline: "High-Performance Cross-Platform Apps",
    desc: "Architecting clean, responsive, and robust mobile applications using Flutter & Dart. From state management to native device APIs, delivering native-grade feel across iOS and Android.",
    highlights: [
      "Smooth 60/120fps motion & gestures",
      "Offline caching (Hive, SQLite)",
      "Clean Architecture & BLoC / Riverpod",
      "RESTful API & WebSocket integration",
    ],
    tools: ["Flutter", "Dart", "Hive", "REST APIs", "Android & iOS"],
    icon: "smartphone",
  },
  {
    num: "02",
    title: "Modern Web Engineering",
    tagline: "Scalable Full-Stack Web Experiences",
    desc: "Building accessible, fast, and SEO-optimized web applications with Next.js App Router, React 19, TypeScript, and modern styling architectures.",
    highlights: [
      "Server-side rendering & dynamic caching",
      "Strict TypeScript type safety",
      "Tailwind CSS v4 & micro-interactions",
      "Award-winning frontend craftsmanship",
    ],
    tools: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase"],
    icon: "globe",
  },
  {
    num: "03",
    title: "UI/UX & Design Engineering",
    tagline: "Bridging Design & Production Code",
    desc: "Translating complex design concepts from Figma into production-grade, accessible code with consistent typography, micro-animations, and responsive layouts.",
    highlights: [
      "WCAG 2.2 AA accessibility compliance",
      "Design tokens & unified theme systems",
      "Figma-to-code precision slicing",
      "Fluid typography & optical spacing",
    ],
    tools: ["Figma", "Design Systems", "Framer Motion", "Lenis", "WCAG AA"],
    icon: "palette",
  },
];
