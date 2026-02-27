import { Github, Linkedin, LinkedinIcon, Mail, Twitter } from "lucide-react"; // Pastikan sudah install lucide-react
import Link from "next/link";
import { Instagram, Facebook, FileDown } from "lucide-react";

const Footer = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      username: "@altannputra",
      href: "https://www.instagram.com/altannputra?igsh=MTJoY3p2MDRuZGxlYw==", // Masukkan link IG kamu
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      username: "Altan Putra",
      href: "https://www.facebook.com/share/1AtuCbeCfY/", // Masukkan link FB kamu
      color: "hover:text-blue-600",
    },
    {
      name: "Github",
      icon: <Github size={20} />,
      username: "altantheprodigy",
      href: "https://github.com/altantheprodigy?tab=repositories", // Masukkan link FB kamu
      color: "hover:text-zinc-400",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon size={20} />,
      username: "Altan Assyfa Naura Putra",
      href: "https://www.linkedin.com/in/altan-assyfa-naura-putra-41aa22290/", // Masukkan link FB kamu
      color: "hover:text-[#0A66C2",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      username: "altan.naura123@gmail.com",
      href: "", // Masukkan link FB kamu
      color: "hover:text-[#EA4335]",
    },
  ];
  return (
    <footer className="bg-hitam-utama w-full px-4 py-4 md:px-36">
      {/* 1. Garis Pemisah (Horizontal Rule) */}
      <hr className="border-border-nav mb-12" />

      <div className="flex flex-col items-center gap-10">
        {/* 3. Bagian Reach Me Out */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-utama text-sm font-medium text-white">
            Reach me out
          </span>
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`group flex items-center text-white transition-all duration-500 ease-in-out ${social.color}`}
              >
                <div className="relative z-10 flex items-center justify-center">
                  {social.icon}
                </div>

                <span className="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap opacity-0 transition-all duration-500 ease-in-out group-hover:ml-3 group-hover:max-w-[200px] group-hover:opacity-100">
                  {social.username}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
