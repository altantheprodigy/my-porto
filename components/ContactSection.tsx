"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  Smartphone,
  Globe,
  Terminal,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  CheckCircle2,
} from "lucide-react";

const INQUIRY_TOPICS = [
  {
    id: "mobile",
    label: "Mobile App (Flutter)",
    icon: Smartphone,
    placeholder: "Hi Altan, I'm looking for a Flutter developer to build or improve a mobile app...",
  },
  {
    id: "web",
    label: "Web Platform (Next.js)",
    icon: Globe,
    placeholder: "Hi Altan, I need a high-performance web platform built with Next.js & TypeScript...",
  },
  {
    id: "role",
    label: "Engineering Role / Hire",
    icon: Terminal,
    placeholder: "Hi Altan, we have an open software engineering opportunity that matches your background...",
  },
  {
    id: "collab",
    label: "General Inquiry / Collab",
    icon: MessageSquare,
    placeholder: "Hi Altan, wanted to reach out regarding...",
  },
];

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(INQUIRY_TOPICS[0]);
  const [senderName, setSenderName] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [localTime, setLocalTime] = useState("");

  const email = "altan.naura123@gmail.com";

  // Real-time Semarang Local Time (WIB / UTC+7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const formattedBody = `Topic: ${selectedTopic.label}\nFrom: ${senderName || "Anonymous"}\n\nMessage:\n${senderMessage || "(No specific message entered)"}`;

  const handleDraftEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Inquiry: ${selectedTopic.label}] from ${senderName || "Website Visitor"}`);
    const body = encodeURIComponent(formattedBody);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleCopyFormattedMessage = () => {
    navigator.clipboard.writeText(formattedBody);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const socials = [
    {
      name: "GitHub",
      handle: "@altantheprodigy",
      href: "https://github.com/altantheprodigy?tab=repositories",
      icon: Github,
    },
    {
      name: "LinkedIn",
      handle: "Altan Assyfa Naura Putra",
      href: "https://www.linkedin.com/in/altan-assyfa-naura-putra-41aa22290/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      handle: "@altannputra",
      href: "https://www.instagram.com/altannputra?igsh=MTJoY3p2MDRuZGxlYw==",
      icon: Instagram,
    },
    {
      name: "Facebook",
      handle: "Altan Putra",
      href: "https://www.facebook.com/share/1AtuCbeCfY/",
      icon: Facebook,
    },
  ];

  return (
    <section id="contact" className="w-full pt-16">
      {/* Section Header */}
      <div className="mb-10 flex flex-col items-start gap-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-mono-code font-semibold text-zinc-600 shadow-xs">
          <Terminal size={13} className="text-zinc-500" />
          <span>CONTACT & COLLABORATION</span>
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
          Have a project in mind, or looking to collaborate?
        </h2>
        <p className="max-w-2xl text-sm sm:text-base text-zinc-600">
          Based in Semarang, Central Java (WIB / UTC+7). Open for freelance contracts, mobile and web engineering roles, or technical discussions.
        </p>
      </div>

      {/* 2-Column Bento Communication Station */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: Direct Presence & Availability (5 cols) */}
        <div className="flex flex-col justify-between rounded-[28px] border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] lg:col-span-5">
          <div className="flex flex-col gap-6">
            {/* Live Status & Time Card */}
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4">
              <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold text-zinc-900">
                    Active & Available
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono-code text-xs text-zinc-500">
                  <Clock size={13} />
                  <span>{localTime ? `${localTime} WIB` : "WIB (UTC+7)"}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-1.5 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-zinc-400 shrink-0" />
                  <span>Semarang, Central Java, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Guaranteed response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Direct Email Container */}
            <div className="flex flex-col gap-2">
              <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Direct Email
              </span>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-2.5 sm:p-3">
                <div className="flex items-center gap-2.5 px-2 py-1">
                  <Mail size={16} className="text-zinc-500 shrink-0" />
                  <span className="font-mono-code text-xs sm:text-sm font-semibold text-zinc-900 truncate">
                    {email}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex flex-1 sm:flex-none min-h-[38px] items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs transition-all hover:bg-zinc-100 hover:text-zinc-950 focus-ring"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <Check size={14} className="text-emerald-600" />
                    ) : (
                      <Copy size={14} />
                    )}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="flex min-h-[38px] items-center justify-center rounded-xl bg-zinc-950 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 focus-ring"
                    title="Open in Email App"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Scope */}
            <div className="flex flex-col gap-2">
              <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Core Competencies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Flutter & Dart",
                  "Next.js 16 & React 19",
                  "TypeScript",
                  "Tailwind CSS v4",
                  "Laravel & REST API",
                  "UI/UX Engineering",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 font-mono-code text-[11px] font-medium text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Profiles Pill Grid */}
          <div className="mt-6 pt-6 border-t border-zinc-100">
            <span className="mb-3 block font-mono-code text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Profiles & Code
            </span>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[42px] items-center gap-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 text-xs font-semibold text-zinc-700 shadow-xs transition-all hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-950 focus-ring"
                  >
                    <IconComponent size={15} className="text-zinc-500 group-hover:text-zinc-950" />
                    <span className="truncate">{social.name}</span>
                    <ArrowUpRight size={12} className="ml-auto text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Inquiry Builder (7 cols) */}
        <div className="rounded-[28px] border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] lg:col-span-7">
          <form onSubmit={handleDraftEmail} className="flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-zinc-950" />
                <h3 className="font-display text-lg font-bold text-zinc-950">
                  Quick Inquiry Console
                </h3>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-zinc-500">
                Select your inquiry topic to generate a pre-structured email or copy a ready-to-paste message.
              </p>
            </div>

            {/* Topic Selector Chips */}
            <div className="flex flex-col gap-2">
              <label className="font-mono-code text-xs font-semibold text-zinc-700">
                Select Topic:
              </label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {INQUIRY_TOPICS.map((topic) => {
                  const TopicIcon = topic.icon;
                  const isSelected = selectedTopic.id === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`flex min-h-[44px] items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition-all focus-ring text-left ${
                        isSelected
                          ? "border-zinc-950 bg-zinc-950 text-white shadow-xs"
                          : "border-zinc-200 bg-zinc-50/70 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100"
                      }`}
                    >
                      <TopicIcon size={15} className={isSelected ? "text-white" : "text-zinc-500"} />
                      <span>{topic.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name or Company Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="inquiry-sender-name" className="font-mono-code text-xs font-semibold text-zinc-700">
                Your Name / Organization:
              </label>
              <input
                id="inquiry-sender-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Alex / Tech Studio"
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-zinc-950/10 transition-all"
              />
            </div>

            {/* Custom Message / Notes */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="inquiry-sender-message" className="font-mono-code text-xs font-semibold text-zinc-700">
                Project Notes / Details:
              </label>
              <textarea
                id="inquiry-sender-message"
                rows={4}
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                placeholder={selectedTopic.placeholder}
                className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-zinc-950/10 transition-all"
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 focus-ring"
              >
                <Send size={15} />
                <span>Open in Email App</span>
              </button>

              <button
                type="button"
                onClick={handleCopyFormattedMessage}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 shadow-xs transition-all hover:bg-zinc-50 hover:text-zinc-950 focus-ring"
                title="Copy ready draft for LinkedIn or WhatsApp"
              >
                {copiedMessage ? (
                  <Check size={15} className="text-emerald-600" />
                ) : (
                  <Copy size={15} />
                )}
                <span>{copiedMessage ? "Draft Copied!" : "Copy Draft"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
