"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navItems = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Menü", href: "#menu" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#062b22]/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:h-24 lg:px-8">
        
        {/* Logo */}
        <a
          href="#anasayfa"
          onClick={closeMobile}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a45c]/60 bg-white/10 backdrop-blur-sm">
            <span className="font-serif text-xl font-bold text-[#c9a45c]">
              B
            </span>
          </div>

          <div className="leading-none">
            <div className="font-serif text-xl font-bold tracking-wide text-white">
              BİRBEY
            </div>
            <div className="mt-1 text-[9px] tracking-[0.32em] text-[#c9a45c]">
              RESTAURANT
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-white/90 transition-colors duration-300 hover:text-[#c9a45c]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c9a45c] transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:05074438080"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#c9a45c] hover:bg-white/15"
          >
            <Phone size={16} />
            <span>0507 443 80 80</span>
          </a>

          <a
            href="#menu"
            className="rounded-full bg-[#c9a45c] px-6 py-3 text-sm font-bold text-[#062b22] transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            Menüyü İncele
          </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#062b22]/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className="border-b border-white/10 py-4 text-base font-medium text-white transition-colors hover:text-[#c9a45c]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="tel:05074438080"
            onClick={closeMobile}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#c9a45c] py-4 font-bold text-[#062b22]"
          >
            <Phone size={18} />
            Hemen Ara
          </a>

          <div className="mt-5 flex items-center justify-center gap-2 pb-3 text-sm text-white/60">
            <MapPin size={15} />
            328 AVM arkası · Osmaniye
          </div>
        </nav>
      </div>
    </header>
  );
}
