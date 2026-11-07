"use client";

import React, { useRef, useState, useCallback, useId } from "react";
import { Sparkles, FileText } from "lucide-react";

interface AiModeResumeButtonProps {
  href?: string;
  className?: string;
  download?: boolean;
  label?: string;
  showSparkles?: boolean;
}

export default function AiModeResumeButton({
  href = "/CV_Altan_Assyfa_Naura_Putra_Updated.pdf",
  className = "",
  download = true,
  label = "Resume",
  showSparkles = true,
}: AiModeResumeButtonProps) {
  const generatedId = useId();
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    buttonRef.current.style.setProperty("--mouse-x", `${x}px`);
    buttonRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true);
    updatePosition(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Modern Indigo / Emerald / Cyan Spectrum Glow
  const modernGlow =
    "conic-gradient(from 0deg at 50% 50%, #4F46E5 0deg, #06B6D4 90deg, #10B981 180deg, #3B82F6 270deg, #4F46E5 360deg)";

  const outerSpotlightMask =
    "radial-gradient(65px circle at calc(var(--mouse-x, -100px) + 6px) calc(var(--mouse-y, -100px) + 6px), black 20%, rgba(0,0,0,0.4) 65%, transparent 100%)";

  return (
    <a
      id={`resume-button-${generatedId}`}
      ref={buttonRef}
      href={href}
      download={download}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative inline-flex min-h-[44px] items-center justify-center rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-95 focus-ring ${className}`}
      aria-label="Download Altan Putra Resume PDF"
    >
      {/* 1. Outer Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-[4px] rounded-full transition-opacity duration-300 will-change-[opacity]"
        style={{
          opacity: isHovered ? 0.8 : 0,
          background: modernGlow,
          WebkitMaskImage: outerSpotlightMask,
          maskImage: outerSpotlightMask,
          filter: "blur(8px)",
          zIndex: 0,
        }}
      />

      {/* 2. Button Body */}
      <div className="relative z-10 flex min-h-[44px] items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors duration-200 group-hover:border-zinc-700">
        {showSparkles && (
          <Sparkles
            size={14}
            className="text-emerald-400 transition-transform duration-300 group-hover:rotate-12"
          />
        )}
        <span>{label}</span>
        <FileText size={14} className="text-zinc-400" />
      </div>
    </a>
  );
}
