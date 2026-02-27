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
    <div className="flex flex-row items-stretch gap-8">
      {/* Kotak Kiri (Gambar) */}
      <div className="flex-1 rounded-2xl bg-[#2D313E] p-5">
        <div className="relative h-full min-h-[250px] w-full overflow-hidden rounded-xl">
          <Image
            src={imageSrc}
            alt={`Preview Project ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Kotak Kanan (Teks & Tombol) */}
      <div className="flex flex-[2] flex-col py-2">
        {/* Konten Atas (Kategori, Judul, Deskripsi) */}
        <div className="flex flex-col gap-3">
          <p className="font-utama text-[15px] font-medium text-zinc-400">
            {category}
          </p>
          <h3 className="text-[24px] font-bold text-white">{title}</h3>
          <p className="font-utama line-clamp-4 text-[15px] leading-relaxed font-light text-zinc-400">
            {description}
          </p>
        </div>

        {/* Konten Bawah (Tombol Download & Tech Stack) */}
        <div className="mt-auto flex flex-row items-center gap-3 pt-4">
          <a
            href={downloadLink}
            download={isDownload ? true : undefined}
            className="group bg-brand-blue/10 text-brand-blue relative flex w-fit items-center gap-2 overflow-hidden rounded-full px-3 py-3 text-[16px] font-semibold transition-all duration-300 hover:text-white active:scale-95"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
            <span className="relative z-10">{downloadText}</span>
            <FileDown
              size={18}
              className="relative z-10 transition-all duration-300 group-hover:translate-y-0.5 group-hover:animate-bounce"
            />
          </a>

          {/* Render Garis Pemisah & Logo HANYA JIKA techStacks ada isinya */}
          {techStacks.length > 0 && (
            <>
              {/* Pemisah Opsional (Garis vertikal) */}
              <div className="mx-2 h-6 w-px bg-zinc-700"></div>

              {/* Map Tech Stack */}
              {techStacks.map((tech, index) => (
                // 2. PERBAIKAN: Hapus 'overflow-hidden' dari sini
                <div
                  key={index}
                  className="group relative flex shrink-0 items-center justify-center rounded-xl bg-[#34394A] px-3 py-3 transition-all duration-300 ease-out group-hover:rotate-6 hover:-translate-y-1"
                >
                  {/* 3. PERBAIKAN: Elemen Tooltip (Muncul saat hover) */}
                  <span className="pointer-events-none absolute -top-8 left-1/2 z-20 -translate-x-1/2 rounded-md bg-[#34394A] px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:-top-11 group-hover:rotate-[-6deg] group-hover:opacity-100">
                    {tech.name}

                    {/* Segitiga kecil panah ke bawah */}
                    <svg
                      className="absolute top-full left-0 h-2 w-full text-zinc-800"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      xmlSpace="preserve"
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
