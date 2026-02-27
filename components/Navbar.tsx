"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-hitam-utama fixed top-0 left-0 z-50 w-full">
      <div className="border-border-nav mx-auto max-w-7xl border-b px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo atau Ruang Kosong di Kiri */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-utama text-xl font-bold text-white">
              <span>AltanPutra</span>
            </Link>
          </div>

          {/* Menu di Kanan */}
          <div className="hidden space-x-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-utama text-sm font-medium transition-colors hover:text-black ${
                  pathname === item.href ? "text-black" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
