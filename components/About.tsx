"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, MapPin } from "lucide-react";

const features = [
  "Günlük hazırlanan ev yemekleri",
  "Izgara ve ocak ürünleri",
  "Geleneksel paça çeşitleri",
  "Toplu yemek organizasyonu",
];

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative overflow-hidden bg-[#f8f7f2] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a45c]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0d4b3b]">
                Hakkımızda
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-4xl font-bold leading-tight text-[#062b22] md:text-6xl">
              Gelenekten gelen
              <span className="block text-[#0d4b3b]">
                gerçek lezzet.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#10231e]/65">
              Birbey Restaurant olarak Osmaniye&apos;de geleneksel mutfağın
              sevilen lezzetlerini günlük ve özenli şekilde hazırlıyoruz.
              Paçadan kebaba, ev yemeklerinden fırın ürünlerine kadar geniş
              bir menü sunuyoruz.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-[#10231e]/55">
              328 AVM&apos;nin hemen arkasındaki merkezi konumumuzda,
              hem günlük yemek için gelen misafirlerimizi hem de özel
              organizasyonlar için toplu yemek taleplerini ağırlıyoruz.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm font-medium text-[#062b22]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d4b3b] text-white">
                    <Check size={14} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0d4b3b] p-8 shadow-2xl md:p-12">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#c9a45c]/20" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c9a45c]">
                  <span className="font-serif text-3xl font-bold text-[#062b22]">
                    B
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-3xl font-bold text-white md:text-4xl">
                  Sofranızın
                  <br />
                  <span className="text-[#c9a45c]">lezzet adresi.</span>
                </h3>

                <p className="mt-6 max-w-md leading-7 text-white/65">
                  Kahvaltıdan akşam yemeğine, günlük ev yemeklerinden
                  özel gün organizasyonlarına kadar sofranız için
                  birçok seçenek Birbey Restaurant&apos;ta.
                </p>

                <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-7">
                  <MapPin className="text-[#c9a45c]" size={20} />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Merkezi Konum
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      328 AVM arkası · Osmaniye
                    </p>
                  </div>

                  <ArrowUpRight
                    className="ml-auto text-white/30"
                    size={22}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
