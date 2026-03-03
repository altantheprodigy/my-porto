import React from "react";

interface ExperienceCardProps {
  role: string;
  status: string; // Misal: "Intern", "Full-time"
  company: string;
  location: string;
  period: string;
  description: string[]; // Menggunakan array agar bisa di-map menjadi list
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
    <div className="group bg-bg-card relative flex h-full flex-col gap-3 rounded-2xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-[#34394A] hover:shadow-xl">
      {/* Header: Role & Status */}
      <div className="flex flex-row items-center justify-between gap-4">
        <h3 className="group-hover:text-accent-blue font-utama text-[20px] font-bold text-white transition-colors duration-300">
          {role}
        </h3>
        <span className="bg-badge-bg font-utama text-badge-text rounded-full px-4 py-1 text-[13px] font-bold tracking-wider uppercase">
          {status}
        </span>
      </div>

      {/* Company & Date Info */}
      <div className="flex flex-col gap-1">
        <span className="font-utama text-[15px] font-bold text-white/90">
          {company}
        </span>
        <div className="flex items-center gap-2 text-[13px] font-medium text-zinc-400">
          <span>{period}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </div>
      <p className="text-text-body text-[14px] leading-relaxed group-hover:text-zinc-300">
        {description}
      </p>

      {/* Description List */}
      {/* <ul className="flex flex-col gap-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"></span>
            <p className="text-[14px] leading-relaxed text-zinc-400 group-hover:text-zinc-300">
              {item}
            </p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ExperienceCard;
