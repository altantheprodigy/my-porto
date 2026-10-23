"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Mobile Developer",
    status: "Intern",
    company: "CAN Creative | Jasa Pembuatan Web dan Aplikasi Mobile",
    location: "Semarang, Indonesia",
    period: "October 2024 - March 2025",
    description: [
      "Responsible for developing and maintaining mobile applications using the Flutter framework.",
    ],
  },
  {
    role: "Mobile Developer",
    status: "Team Project",
    company: "SMK Raden Umar Said Kudus",
    location: "Kudus, Indonesia",
    period: "March - September 2024",
    description: [
      "Collaborated in a team to develop mobile application features using Flutter. Ensured optimal performance and responsive layout for Android and iOS platforms.",
    ],
  },
];

const educations = [
  {
    role: "Informatics Engineering",
    status: "Student",
    company: "Dian Nuswantoro University",
    location: "Semarang, Indonesia",
    period: "2025 - Present",
    description: [
      "Continuing my education at Dian Nuswatara University in Semarang, improving my skills and experience here.",
    ],
  },
  {
    role: "Software and game engineering",
    status: "Alumni",
    company: "Raden Umar Said Vocational High School",
    location: "Kudus, Indonesia",
    period: "2022 - 2025",
    description: [
      "Graduated with a grade of 89 in Software Engineering and completed a final project creating the RUS Consign Mobile application.",
    ],
  },
];

import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceEducationTabs() {
  const [activeTab, setActiveTab] = useState<"experiences" | "educations">("experiences");

  return (
    <div className="flex w-full flex-col gap-8 md:gap-10 mt-4">
      {/* Tab Selectors */}
      <div className="relative flex flex-row items-center justify-center rounded-full bg-zinc-100/90 p-1.5 mx-auto w-full max-w-[380px] border border-zinc-200 shadow-sm">
        <button
          onClick={() => setActiveTab("experiences")}
          className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 px-4 text-xs sm:text-sm font-bold transition-all duration-300 ${
            activeTab === "experiences" ? "text-white" : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          {activeTab === "experiences" && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 -z-10 rounded-full bg-zinc-900 shadow-md"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <Briefcase size={15} />
          <span>Experience</span>
        </button>

        <button
          onClick={() => setActiveTab("educations")}
          className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 px-4 text-xs sm:text-sm font-bold transition-all duration-300 ${
            activeTab === "educations" ? "text-white" : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          {activeTab === "educations" && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 -z-10 rounded-full bg-zinc-900 shadow-md"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <GraduationCap size={16} />
          <span>Education</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="mx-auto w-full max-w-[900px] min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "experiences" && (
            <motion.div
              key="experiences"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} />
              ))}
            </motion.div>
          )}
          {activeTab === "educations" && (
            <motion.div
              key="educations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {educations.map((edu, idx) => (
                <ExperienceCard key={idx} {...edu} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
