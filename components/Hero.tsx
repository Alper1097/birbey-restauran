"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen overflow-hidden bg-[#062b22]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/restaurant.jpg"
          alt="Birbey Restaurant"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#031b15]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031b15]/95 via-[#062b22]/65 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#062b22] via-transparent to-[#062b22]/30" />
      </div>

      {/* Decorative circle */}
      <div className="absolute -right-40 top-1/4 hidden h-[500px] w-[500px] rounded-full border border-[#c9a45c]/10 lg:block" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-4xl">

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#c9a45c]"
          >
            <MapPin size={16} />
            <span>Osmaniye · 328 AVM Arkası</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Lezzetin
            <br />

            <span className="text-[#c9a45c]">
              Adı.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
          >
            Paça, kebap, ev yemekleri, lahmacun, pide ve daha fazlası.
            Geleneksel lezzetleri modern bir sofrada buluşturuyoruz.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#menu"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 font-bold text-[#062b22] transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Menüyü İncele

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:05074438080"
              className="flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#c9a45c] hover:bg-white/15"
            >
              <Phone size={18} />
              Hemen Ara
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/65"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-[#c9a45c]">
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
              </div>

              <span>Geleneksel lezzet</span>
            </div>

            <div className="hidden h-5 w-px bg-white/20 sm:block" />

            <span>Günlük taze yemekler</span>

            <div className="hidden h-5 w-px bg-white/20 sm:block" />

            <span>Toplu yemek hizmeti</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#hakkimizda"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50 md:flex"
      >
        <span>Aşağı kaydır</span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={17} />
        </motion.div>
      </motion.a>
    </section>
  );
}
