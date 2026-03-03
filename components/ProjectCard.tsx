import Image from "next/image";
import { FileDown } from "lucide-react";

// 1. PERBAIKAN: Tambahkan properti 'name' ke dalam interface
interface TechStack {
  name: string; // Menyimpan nama teknologi (misal: "Flutter", "Next.js")
  logo: React.ReactNode;
}

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  downloadLink: string;
  downloadText?: string;
  isDownload: boolean;
  techStacks: TechStack[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  imageSrc,
  downloadLink,
  isDownload,
  downloadText = "Download App",
  techStacks,
}) => {
  return (
    /* 1. PERBAIKAN: flex-col untuk mobile, md:flex-row untuk desktop */
    <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
      {/* Kotak Gambar */}
      {/* 2. PERBAIKAN: Tambahkan w-full, dan sesuaikan min-h agar tidak terlalu tinggi di mobile */}
      <div className="w-full flex-1 rounded-2xl bg-[#2D313E] p-4 md:p-5">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={imageSrc}
            alt={`Preview Project ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Kotak Teks & Tombol */}
      {/* 3. PERBAIKAN: Hapus padding vertikal py-2 di mobile agar lebih rapat */}
      <div className="flex flex-[2] flex-col md:py-2">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="font-utama text-[14px] font-medium text-zinc-400 md:text-[15px]">
            {category}
          </p>
          <h3 className="text-[20px] font-bold text-white md:text-[24px]">
            {title}
          </h3>
          <p className="font-utama line-clamp-4 text-[14px] leading-relaxed text-text-body md:text-[15px]">
            {description}
          </p>
        </div>

        {/* Konten Bawah */}
        {/* 4. PERBAIKAN: justify-center di mobile, mt-auto untuk dorong ke bawah di desktop */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-auto md:justify-start md:pt-4">
          <a
            href={downloadLink}
            download={isDownload ? true : undefined}
            target={isDownload ? "_self" : "_blank"}
            className="group bg-bg-card text-brand-blue relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-4 py-3 text-[15px] font-semibold transition-all duration-300 hover:text-white active:scale-95 md:w-fit md:text-[16px]"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
            <span className="relative z-10">{downloadText}</span>
            <FileDown
              size={18}
              className="relative z-10 transition-all duration-300 group-hover:translate-y-0.5 group-hover:animate-bounce"
            />
          </a>

          {techStacks.length > 0 && (
            <>
              {/* Garis pemisah disembunyikan di mobile jika layout tombol penuh */}
              <div className="hidden h-6 w-px bg-zinc-700 md:mx-2 md:block"></div>

              <div className="flex flex-wrap justify-center gap-3">
                {techStacks.map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-bg-card relative flex shrink-0 items-center justify-center rounded-xl px-3 py-3 transition-all duration-300 ease-out group-hover:rotate-6 hover:-translate-y-1"
                  >
                    {/* Tooltip tetap berfungsi baik di desktop (hover) */}
                    <span className="bg-bg-card pointer-events-none absolute top-full left-1/2 z-20 mt-2 -translate-x-1/2 rounded-md px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 md:-top-8 md:mt-0 md:group-hover:-top-11">
                      {tech.name}
                      <svg
                        className="absolute top-full left-0 h-2 w-full text-zinc-800"
                        viewBox="0 0 255 255"
                      >
                        <polygon
                          className="fill-current"
                          points="0,0 127.5,127.5 255,0"
                        />
                      </svg>
                    </span>
                    {tech.logo}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
