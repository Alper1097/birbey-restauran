"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="bg-[#f8f7f2] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a45c]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0d4b3b]">
              Bize Ulaşın
            </span>
            <span className="h-px w-10 bg-[#c9a45c]" />
          </div>

          <h2 className="font-serif text-4xl font-bold text-[#062b22] md:text-6xl">
            Sofranızı bekliyoruz.
          </h2>

          <p className="mt-5 leading-7 text-[#10231e]/55">
            Rezervasyon, paket servis veya toplu yemek organizasyonları
            hakkında bilgi almak için bize ulaşabilirsiniz.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* Telefon */}
          <motion.a
            href="tel:05074438080"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d4b3b] text-[#c9a45c]">
              <Phone size={25} />
            </div>

            <h3 className="mt-6 font-serif text-2xl font-bold text-[#062b22]">
              Telefon
            </h3>

            <p className="mt-2 text-[#10231e]/55">
              Rezervasyon ve bilgi
            </p>

            <p className="mt-5 text-lg font-bold text-[#0d4b3b]">
              0507 443 80 80
            </p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/905074438080"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group rounded-3xl bg-[#0d4b3b] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a45c] text-[#062b22]">
              <MessageCircle size={25} />
            </div>

            <h3 className="mt-6 font-serif text-2xl font-bold text-white">
              WhatsApp
            </h3>

            <p className="mt-2 text-white/55">
              Hızlıca mesaj gönderin
            </p>

            <p className="mt-5 text-lg font-bold text-[#c9a45c]">
              WhatsApp&apos;tan Yaz
            </p>
          </motion.a>

          {/* Konum */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl bg-white p-7 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d4b3b] text-[#c9a45c]">
              <MapPin size={25} />
            </div>

            <h3 className="mt-6 font-serif text-2xl font-bold text-[#062b22]">
              Konum
            </h3>

            <p className="mt-2 text-[#10231e]/55">
              Bizi kolayca bulabilirsiniz
            </p>

            <p className="mt-5 text-lg font-bold text-[#0d4b3b]">
              328 AVM&apos;nin hemen arkası
            </p>

            <p className="mt-1 text-sm text-[#10231e]/45">
              Osmaniye
            </p>
          </motion.div>

        </div>

        {/* Map / Directions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 overflow-hidden rounded-[2rem] bg-[#062b22] p-8 md:p-12"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c9a45c] text-[#062b22]">
                <Navigation size={24} />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Bizi Ziyaret Edin
                </h3>

                <p className="mt-2 max-w-lg leading-6 text-white/55">
                  328 AVM&apos;nin hemen arkasındaki işlek konumumuzda
                  sizleri bekliyoruz.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Birbey+Restaurant+Osmaniye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c9a45c] px-6 py-4 font-bold text-[#062b22] transition-all hover:scale-105 hover:bg-white"
            >
              Yol Tarifi Al
              <Navigation size={17} />
            </a>

          </div>
        </motion.div>

        {/* Hours */}
        <div className="mt-5 flex items-center justify-center gap-3 text-sm text-[#10231e]/45">
          <Clock3 size={17} />
          <span>Güncel çalışma saatleri için bizi arayabilirsiniz.</span>
        </div>

      </div>
    </section>
  );
}
