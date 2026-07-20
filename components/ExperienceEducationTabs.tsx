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

export default function ExperienceEducationTabs() {
  const [activeTab, setActiveTab] = useState<"experiences" | "educations">("experiences");

  return (
    <div className="flex w-full flex-col gap-8 md:gap-12 mt-6">
      {/* Tab Selectors */}
      <div className="relative flex flex-row items-center justify-center rounded-2xl bg-zinc-50 p-1.5 mx-auto w-full max-w-[400px] border border-zinc-200 shadow-lg">
        {["experiences", "educations"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`relative z-10 flex-1 rounded-xl py-3 px-2 sm:px-6 text-[14px] sm:text-[15px] font-bold capitalize transition-all duration-300 ${
              activeTab === tab ? "text-white" : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-tab"
                className={`absolute inset-0 -z-10 rounded-xl shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] ${tab === "experiences" ? "bg-brand-blue" : "bg-brand-blue"}`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab}
          </button>
        ))}
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
