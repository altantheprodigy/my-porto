"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiencesData, educationsData } from "@/data/experience";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceEducationTabs() {
  const [activeTab, setActiveTab] = useState<"experiences" | "educations">("experiences");

  return (
    <div className="flex w-full flex-col gap-8 md:gap-10 mt-4">
      {/* Tab Selectors with WAI-ARIA Compliance */}
      <div
        role="tablist"
        aria-label="Experience and education switcher"
        className="relative flex flex-row items-center justify-center rounded-full bg-zinc-100 p-1.5 mx-auto w-full max-w-[380px] border border-zinc-200 shadow-inner"
      >
        <button
          role="tab"
          id="tab-experiences"
          aria-selected={activeTab === "experiences"}
          aria-controls="panel-experiences"
          tabIndex={activeTab === "experiences" ? 0 : -1}
          onClick={() => setActiveTab("experiences")}
          className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 px-4 text-xs sm:text-sm font-semibold transition-colors duration-200 focus-ring ${
            activeTab === "experiences" ? "text-white" : "text-zinc-600 hover:text-zinc-950"
          }`}
        >
          {activeTab === "experiences" && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 -z-10 rounded-full bg-zinc-950 shadow-sm"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <Briefcase size={15} />
          <span>Experience</span>
        </button>

        <button
          role="tab"
          id="tab-educations"
          aria-selected={activeTab === "educations"}
          aria-controls="panel-educations"
          tabIndex={activeTab === "educations" ? 0 : -1}
          onClick={() => setActiveTab("educations")}
          className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 px-4 text-xs sm:text-sm font-semibold transition-colors duration-200 focus-ring ${
            activeTab === "educations" ? "text-white" : "text-zinc-600 hover:text-zinc-950"
          }`}
        >
          {activeTab === "educations" && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 -z-10 rounded-full bg-zinc-950 shadow-sm"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <GraduationCap size={16} />
          <span>Education</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="mx-auto w-full max-w-[900px] min-h-[380px]">
        <AnimatePresence mode="wait">
          {activeTab === "experiences" && (
            <motion.div
              key="experiences"
              role="tabpanel"
              id="panel-experiences"
              aria-labelledby="tab-experiences"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5"
            >
              {experiencesData.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} />
              ))}
            </motion.div>
          )}

          {activeTab === "educations" && (
            <motion.div
              key="educations"
              role="tabpanel"
              id="panel-educations"
              aria-labelledby="tab-educations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5"
            >
              {educationsData.map((edu, idx) => (
                <ExperienceCard key={idx} {...edu} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
