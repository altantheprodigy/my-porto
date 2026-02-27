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
      className="group relative cursor-default"
      style={{ "--warna-tema": color } as React.CSSProperties}
    >
      {/* Saran Pro 1: 'group' pada parent memungkinkan kita mengontrol child saat hover.
          Saran Pro 2: '-translate-y-3' memberikan efek mengangkat saat kursor masuk.
      */}
      <div className="group-hover:border-brand-green/30 flex h-full max-w-sm flex-col items-center rounded-2xl border border-transparent bg-[#2D313E] px-8 pt-14 pb-12 text-center transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-[0_20px_50px_rgba(59,246,134,0.1)]">
        {/* Ikon Mengambang dengan Animasi */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 transition-transform duration-500 group-hover:scale-110">
          <div className="from-brand-green to-brand-blue relative h-24 w-24 rounded-full bg-gradient-to-b p-[2px] shadow-lg">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#34394A]">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#34394A] transition-transform duration-500 group-hover:rotate-6">
                {logo}
              </div>
            </div>
          </div>
        </div>

        {/* Judul dengan Perubahan Warna saat Hover */}
        <h3 className="mb-4 text-[18px] font-bold text-white transition-colors duration-300 group-hover:text-[var(--warna-tema)]">
          {title}
        </h3>

        <p className="text-[15px] leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
          {desc}
        </p>
      </div>
    </div>
  );
}
