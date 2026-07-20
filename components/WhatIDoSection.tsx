"use client";

import { motion } from "framer-motion";
import { FlutterIcon, NextIcon, FigmaIcon } from "./TechStackIcon";

const services = [
  {
    id: "mobile",
    title: "Mobile Development",
    desc: "Building native-like, high-performance mobile applications using Flutter. From seamless animations to robust state management, I craft user experiences that feel intuitive and engaging across both iOS and Android platforms.",
    logo: (
      <FlutterIcon className="h-10 w-10 text-zinc-300 transition-all duration-500 group-hover:scale-110 group-hover:text-[#61DAFB]" />
    ),
  },
  {
    id: "web",
    title: "Web Development",
    desc: "Creating modern, responsive, and blazing-fast web applications using Next.js and React. Focusing on clean code, optimal performance, and dynamic user interfaces to deliver the best web experiences.",
    logo: (
      <NextIcon className="h-10 w-10 text-zinc-300 transition-all duration-500 group-hover:scale-110 group-hover:text-zinc-900" />
    ),
  },
  {
    id: "ui",
    title: "UI Design",
    desc: "Designing interactive and visually appealing user interfaces using Figma. Prioritizing user-centric design principles to ensure that every product is not only beautiful but also easy to navigate and accessible.",
    logo: (
      <FigmaIcon className="h-10 w-10 text-zinc-300 transition-all duration-500 group-hover:scale-110 group-hover:text-[#F24E1E]" />
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhatIDoSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={itemVariants}
          className="group relative flex flex-col gap-6 rounded-3xl border border-brand-blue/20 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.15)]"
        >
          {/* Logo Container */}
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 transition-colors duration-500 group-hover:bg-brand-blue/5">
            {service.logo}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-zinc-900 md:text-2xl">{service.title}</h3>
            <p className="text-[15px] leading-relaxed text-zinc-500">
              {service.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
