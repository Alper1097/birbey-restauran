"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Heart,
  PartyPopper,
  Users,
} from "lucide-react";

const occasions = [
  "Düğün ve nişan organizasyonları",
  "Cenaze ve taziye yemekleri",
  "Mevlit ve özel günler",
  "İşyeri ve fabrika yemekleri",
  "Kalabalık grup organizasyonları",
  "Toplu yemek siparişleri",
];

export default function Catering() {
  return (
    <section className="relative overflow-hidden bg-[#062b22] py-24 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full border border-[#c9a45c]" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full border border-[#c9a45c]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-[#c9a45c]">
              <PartyPopper size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Özel Organizasyonlar
              </span>
            </div>

            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
              Kalabalık sofraların
              <span className="block text-[#c9a45c]">
                lezzetini biz hazırlayalım.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Özel günleriniz ve toplu yemek ihtiyaçlarınız için
              Birbey Restaurant kalitesiyle hazırlanan yemekler
              sunuyoruz.
            </p>

            <a
              href="tel:05074438080"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 font-bold text-[#062b22] transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Toplu Yemek İçin Ara

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm md:p-9"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a45c] text-[#062b22]">
                <Users size={26} />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Toplu Yemek Hizmeti
                </h3>

                <p className="mt-1 text-sm text-white/45">
                  Organizasyonlarınıza özel
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {occasions.map((occasion) => (
                <div
                  key={occasion}
                  className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm text-white/70 last:border-0"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c9a45c]/15 text-[#c9a45c]">
                    <Check size={14} />
                  </span>

                  {occasion}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/[0.04] p-4">
              <Heart size={18} className="text-[#c9a45c]" />

              <p className="text-xs leading-5 text-white/45">
                Özel günlerinizde sofranızın yükünü alıyor,
                lezzeti misafirlerinize bırakıyoruz.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
