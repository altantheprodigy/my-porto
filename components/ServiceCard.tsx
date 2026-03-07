import Image from "next/image";

interface ServiceCardProps {
  logo: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

export default function ServiceCard({
  logo,
  title,
  desc,
  color,
}: ServiceCardProps) {
  return (
    <div
      className="group relative h-full cursor-default" // Tambahkan h-full di sini
      style={{ "--warna-tema": color } as React.CSSProperties}
    >
      <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-8 pt-14 pb-12 text-center shadow-lg backdrop-blur-md transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:border-[var(--warna-tema)] hover:bg-white/10 hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.1)]">
        {/* Ikon Tetap Sama */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 transition-transform duration-500 group-hover:scale-110">
          <div className="from-brand-green to-brand-blue relative h-24 w-24 rounded-full bg-gradient-to-b p-[2px] shadow-lg">
            <div className="bg-bg-card flex h-full w-full items-center justify-center rounded-full">
              <div className="flex h-14 w-14 items-center justify-center transition-transform duration-500 group-hover:rotate-6">
                {logo}
              </div>
            </div>
          </div>
        </div>

        <h3 className="mb-4 text-[18px] font-bold text-white transition-colors duration-300 group-hover:text-[var(--warna-tema)]">
          {title}
        </h3>

        <p className="text-text-body text-[15px] leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
          {desc}
        </p>
      </div>
    </div>
  );
}
