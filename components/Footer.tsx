"use client";

import { useState } from "react";
import {
  Github,
  LinkedinIcon,
  Mail,
  Instagram,
  Facebook,
  Check,
  Copy,
} from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "altan.naura123@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "GitHub",
      icon: <Github size={18} />,
      username: "@altantheprodigy",
      href: "https://github.com/altantheprodigy?tab=repositories",
      badge: "hover:border-zinc-400 hover:text-zinc-950",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon size={18} />,
      username: "Altan Assyfa Naura Putra",
      href: "https://www.linkedin.com/in/altan-assyfa-naura-putra-41aa22290/",
      badge: "hover:border-[#0A66C2] hover:text-[#0A66C2]",
    },
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      username: "@altannputra",
      href: "https://www.instagram.com/altannputra?igsh=MTJoY3p2MDRuZGxlYw==",
      badge: "hover:border-pink-500 hover:text-pink-600",
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      username: "Altan Putra",
      href: "https://www.facebook.com/share/1AtuCbeCfY/",
      badge: "hover:border-blue-600 hover:text-blue-600",
    },
  ];

  return (
    <footer className="w-full mt-12 pt-8">
      {/* Contact CTA Card */}
      <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-8 sm:p-12 text-white shadow-2xl">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-zinc-800/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-zinc-700/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-800/80 px-4 py-1 text-xs font-semibold text-zinc-300 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for New Projects & Roles</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Let’s build something remarkable together.
          </h3>

          <p className="text-sm sm:text-base text-zinc-400 max-w-lg">
            Whether you have an idea for a mobile app, high-performance web platform, or just want to connect — my inbox is always open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 shadow-lg shadow-white/10 transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-95"
            >
              <Mail size={16} />
              <span>Send Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-5 py-3 text-sm font-semibold text-zinc-200 transition-all hover:bg-zinc-700 hover:text-white active:scale-95"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copied ? "Copied to clipboard!" : "Copy Email"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Socials & Copyright */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-t border-zinc-200/80 pt-8">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-utama text-sm font-bold text-zinc-900">
            Altan Assyfa Naura Putra
          </span>
          <span className="text-xs text-zinc-500">
            © {new Date().getFullYear()} • Crafted with Next.js & Tailwind CSS
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50 px-3.5 py-1.5 text-xs font-semibold text-zinc-700 transition-all duration-200 ${social.badge} hover:bg-white hover:shadow-sm`}
              title={social.username}
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
