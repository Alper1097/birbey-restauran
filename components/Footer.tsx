"use client";

import { ArrowUp, MapPin, Phone } from "lucide-react";

const links = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Menü", href: "#menu" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-[#031b15] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a45c]/50">
                <span className="font-serif text-xl font-bold text-[#c9a45c]">
                  B
                </span>
              </div>

              <div>
                <div className="font-serif text-2xl font-bold">
                  BİRBEY
                </div>

                <div className="mt-1 text-[9px] tracking-[0.3em] text-[#c9a45c]">
                  RESTAURANT
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-sm leading-7 text-white/45">
              Geleneksel lezzetleri, sıcak bir sofrayı ve kaliteli
              hizmeti bir araya getiriyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-xl font-bold">
              Hızlı Menü
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/45 transition-colors hover:text-[#c9a45c]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold">
              İletişim
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href="tel:05074438080"
                className="flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-[#c9a45c]"
              >
                <Phone size={17} />
                0507 443 80 80
              </a>

              <div className="flex items-start gap-3 text-sm text-white/45">
                <MapPin size={17} className="mt-0.5 shrink-0" />
                <span>
                  328 AVM&apos;nin hemen arkası
                  <br />
                  Osmaniye
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Birbey Restaurant. Tüm hakları saklıdır.
          </p>

          <a
            href="#anasayfa"
            className="flex items-center gap-2 transition-colors hover:text-[#c9a45c]"
          >
            Başa dön
            <ArrowUp size={15} />
          </a>

        </div>

      </div>
    </footer>
  );
}
