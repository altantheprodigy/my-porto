import React from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  status: string; // e.g., "Intern", "Full-time", "Student", "Alumni"
  company: string;
  location: string;
  period: string;
  description: string[] | string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  status,
  company,
  location,
  period,
  description,
}) => {
  return (
    <div className="group relative flex h-full flex-col gap-4 rounded-[24px] border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)]">
      {/* Header: Role & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-800">
          {role}
        </h3>
        <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 font-mono-code text-[11px] font-bold uppercase tracking-wider text-zinc-800 shadow-xs">
          {status}
        </span>
      </div>

      {/* Company, Date, Location Metadata */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-zinc-600">
        <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
          <Building2 size={15} className="text-zinc-500 shrink-0" />
          <span>{company}</span>
        </div>
        <span className="text-zinc-300 hidden sm:inline">•</span>
        <div className="flex items-center gap-1.5 font-mono-code text-xs text-zinc-500">
          <Calendar size={13} className="shrink-0 text-zinc-400" />
          <span>{period}</span>
        </div>
        <span className="text-zinc-300 hidden sm:inline">•</span>
        <div className="flex items-center gap-1.5 text-zinc-500">
          <MapPin size={13} className="shrink-0 text-zinc-400" />
          <span>{location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="pt-2 text-sm leading-relaxed text-zinc-600">
        {Array.isArray(description) ? (
          <ul className="flex flex-col gap-2">
            {description.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
