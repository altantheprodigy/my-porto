import React from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  status: string; // Misal: "Intern", "Full-time"
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
    <div
      className="group relative flex h-full flex-col gap-4 rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] active:border-zinc-900"
      onTouchStart={() => {}}
    >
      {/* Header: Role & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-utama text-lg sm:text-xl font-bold text-zinc-900 transition-colors duration-300 group-hover:text-zinc-950">
          {role}
        </h3>
        <span className="rounded-full bg-zinc-900 text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
          {status}
        </span>
      </div>

      {/* Company & Date Info */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-zinc-500">
        <div className="flex items-center gap-1.5 font-semibold text-zinc-800">
          <Building2 size={15} className="text-zinc-700 shrink-0" />
          <span>{company}</span>
        </div>
        <span className="text-zinc-300 hidden sm:inline">•</span>
        <div className="flex items-center gap-1.5 text-zinc-500">
          <Calendar size={14} className="shrink-0 text-zinc-400" />
          <span>{period}</span>
        </div>
        <span className="text-zinc-300 hidden sm:inline">•</span>
        <div className="flex items-center gap-1.5 text-zinc-500">
          <MapPin size={14} className="shrink-0 text-zinc-400" />
          <span>{location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="text-sm leading-relaxed text-zinc-600">
        {Array.isArray(description) ? (
          <ul className="flex flex-col gap-1.5">
            {description.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-800" />
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
