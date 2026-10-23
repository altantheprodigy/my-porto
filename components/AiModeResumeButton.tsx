"use client";

import React, { useRef, useState, useCallback } from "react";
import { FileDown, Sparkles } from "lucide-react";

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

  // Google AI Color Spectrum (Red -> Yellow -> Green -> Blue -> Purple -> Red)
  const googleRainbow =
    "conic-gradient(from 0deg at 50% 50%, #EA4335 0deg, #FBBC05 72deg, #34A853 144deg, #4285F4 216deg, #A142F4 288deg, #EA4335 360deg)";

  // Outer spotlight mask: wider radius (~65px) so the outer halo blooms visibly around the cursor
  const outerSpotlightMask =
    "radial-gradient(65px circle at calc(var(--mouse-x, -100px) + 6px) calc(var(--mouse-y, -100px) + 6px), black 20%, rgba(0,0,0,0.4) 65%, transparent 100%)";

  return (
    <a
      id="ai-mode-resume-button"
      ref={buttonRef}
      href={href}
      download={download}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative inline-flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-[1.03] active:scale-95 ${className}`}
    >
      {/* 1. Outer Halo Effect: wider, richer glow outside button boundary following the hovered section */}
      <div
        className="pointer-events-none absolute -inset-[6px] rounded-full transition-opacity duration-300 will-change-[opacity]"
        style={{
          opacity: isHovered ? 0.75 : 0,
          background: googleRainbow,
          WebkitMaskImage: outerSpotlightMask,
          maskImage: outerSpotlightMask,
          filter: "blur(10px)",
          zIndex: 0,
        }}
      />

      {/* 2. Solid Inner Button Body: keeps button center dark and clean */}
      <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 rounded-full border border-zinc-800/90 bg-zinc-950 px-3.5 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors duration-200 group-hover:border-zinc-700/80">
        {showSparkles && (
          <Sparkles
            size={14}
            className="text-amber-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-amber-300"
          />
        )}
        <span className="font-medium tracking-tight">{label}</span>
        <FileDown
          size={14}
          className="text-zinc-400 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-white"
        />
      </div>
    </a>
  );
}
