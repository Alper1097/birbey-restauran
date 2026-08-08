"use client";

import { motion } from "framer-motion";
import {
  Beef,
  CakeSlice,
  ChefHat,
  Drumstick,
  Soup,
  Utensils,
} from "lucide-react";

const services = [
  {
    icon: Soup,
    title: "Paça & Çorbalar",
    description:
      "Günün her saatinde sıcak ve geleneksel çorba çeşitleri.",
  },
  {
    icon: Beef,
    title: "Kebap & Izgara",
    description:
      "Adana, ciğer, kuşbaşı ve birbirinden özel ızgara lezzetleri.",
  },
  {
    icon: ChefHat,
    title: "Ev Yemekleri",
    description:
      "Her gün değişen, sıcak ve doyurucu ev yemekleri.",
  },
  {
    icon: Drumstick,
    title: "Tavuk Çeşitleri",
    description:
      "Izgara tavuktan özel tavuk yemeklerine geniş seçenekler.",
  },
  {
    icon: CakeSlice,
    title: "Lahmacun & Pide",
    description:
      "Fırından sıcak çıkan lahmacun ve özel pide çeşitleri.",
  },
  {
    icon: Utensils,
    title: "Toplu Yemek",
    description:
      "Düğün, cenaze, mevlit ve özel organizasyonlara yemek hizmeti.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a45c]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0d4b3b]">
              Neler Sunuyoruz
            </span>
            <span className="h-px w-10 bg-[#c9a45c]" />
          </div>

          <h2 className="font-serif text-4xl font-bold text-[#062b22] md:text-5xl">
            Her damak tadına
            <span className="text-[#0d4b3b]"> bir lezzet.</span>
          </h2>

          <p className="mt-5 leading-7 text-[#10231e]/55">
            Geleneksel mutfağın sevilen tatlarını tek bir sofrada
            buluşturuyoruz.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-[#0d4b3b]/10 bg-[#f8f7f2] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#0d4b3b] hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d4b3b] text-[#c9a45c] transition-colors duration-500 group-hover:bg-[#c9a45c] group-hover:text-[#062b22]">
                  <Icon size={26} />
                </div>

                <h3 className="mt-7 font-serif text-2xl font-bold text-[#062b22] transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-[#10231e]/55 transition-colors duration-500 group-hover:text-white/60">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-10 bg-[#c9a45c] transition-all duration-500 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
