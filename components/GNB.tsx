"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/business", label: "사업분야" },
  // { href: "/contact", label: "문의" },
];

export default function GNB() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#050A18] shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          LCTech Holdings
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-white text-sm font-medium relative group transition-colors duration-200 hover:text-[#2563EB]">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563EB] transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)} aria-label="메뉴 열기">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#050A18] border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-white text-sm font-medium hover:text-[#2563EB] transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
