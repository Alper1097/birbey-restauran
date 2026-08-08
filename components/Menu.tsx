"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Soup,
  Flame,
  Pizza,
  Utensils,
  Coffee,
  ArrowRight,
} from "lucide-react";

type Category =
  | "Çorbalar"
  | "Ocak Ürünleri"
  | "Fırın Ürünleri"
  | "Sulu Yemekler"
  | "İçecekler";

type MenuItem = {
  name: string;
  price: number;
};

const categories: {
  name: Category;
  icon: React.ElementType;
}[] = [
  { name: "Çorbalar", icon: Soup },
  { name: "Ocak Ürünleri", icon: Flame },
  { name: "Fırın Ürünleri", icon: Pizza },
  { name: "Sulu Yemekler", icon: Utensils },
  { name: "İçecekler", icon: Coffee },
];

const menu: Record<Category, MenuItem[]> = {
  Çorbalar: [
    { name: "Az Paça", price: 150 },
    { name: "Karışık Paça", price: 300 },
    { name: "Mercimek", price: 120 },
    { name: "Az Mercimek", price: 80 },
  ],

  "Ocak Ürünleri": [
    { name: "Adana Dürüm", price: 350 },
    { name: "Adana Kebap", price: 400 },
    { name: "Beyti Dürüm", price: 350 },
    { name: "Beyti Servis", price: 400 },
    { name: "Ciğer Dürüm", price: 350 },
    { name: "Ciğer Servis", price: 400 },
    { name: "Çöp Şiş", price: 400 },
    { name: "Kuşbaşı Dürüm", price: 350 },
    { name: "Kuşbaşı Servis", price: 400 },
    { name: "Tavuk Dürüm", price: 300 },
    { name: "Tavuk İncik", price: 350 },
    { name: "Tavuk Kanat", price: 350 },
    { name: "Tavuk Kemikli", price: 350 },
    { name: "Tavuk Kemiksiz", price: 350 },
    { name: "Yaprak Kebap", price: 450 },
  ],

  "Fırın Ürünleri": [
    { name: "Antep Lahmacun", price: 150 },
    { name: "Lahmacun", price: 50 },
    { name: "Kaşarlı Pide", price: 300 },
    { name: "Kaşarlı Pide (1.5 Kişilik)", price: 450 },
    { name: "Kıymalı Pide", price: 350 },
    { name: "Kıymalı Pide (1.5 Kişilik)", price: 450 },
    { name: "Kuşbaşılı Kaşarlı Pide", price: 400 },
    { name: "Kuşbaşılı Kaşarlı Pide (1.5 Kişilik)", price: 500 },
    { name: "Kuşbaşılı Pide", price: 350 },
    { name: "Kuşbaşılı Pide (1.5 Kişilik)", price: 450 },
    { name: "Peynirli Börek", price: 80 },
  ],

  "Sulu Yemekler": [
    { name: "Aşçı Tabağı", price: 750 },
    { name: "Çıtır Tavuk", price: 225 },
    { name: "Çoban Kavurma", price: 350 },
    { name: "Etli Kömbe (Adet)", price: 75 },
    { name: "Etli Kömbe (3 Adet)", price: 225 },
    { name: "Etli Sebze Yemekleri", price: 250 },
    { name: "Etsiz Sebze Yemekleri", price: 200 },
    { name: "Güveç", price: 300 },
    { name: "Ispanaklı Kömbe", price: 50 },
    { name: "İçli Köfte (Adet)", price: 75 },
    { name: "İçli Köfte (Porsiyon)", price: 225 },
    { name: "Kaburga", price: 350 },
    { name: "Karnıyarık", price: 250 },
    { name: "Kavurma", price: 350 },
    { name: "Kilis Tava", price: 250 },
    { name: "Kuru Fasulye", price: 150 },
    { name: "Mantı", price: 200 },
    { name: "Parmak Kebap", price: 350 },
    { name: "Patlıcan Musakka", price: 250 },
    { name: "Pilav", price: 50 },
    { name: "Piliç Topkapı", price: 300 },
    { name: "Sarma (Yarım)", price: 75 },
    { name: "Sarma (Tam)", price: 150 },
    { name: "Spesiyel But", price: 250 },
    { name: "Tabldot Yemek", price: 250 },
    { name: "Taş Kebabı", price: 250 },
    { name: "Tavuk Haşlama", price: 250 },
    { name: "Tavuk Sote", price: 200 },
    { name: "Zorkun Tava", price: 300 },
  ],

  İçecekler: [
    { name: "Pepsi Zero", price: 70 },
    { name: "1L Pepsi", price: 100 },
    { name: "Açık Ayran", price: 50 },
    { name: "Açık Şalgam", price: 50 },
    { name: "Sürahi Ayran", price: 100 },
    { name: "Cacık", price: 50 },
    { name: "Kapalı Ayran Büyük", price: 40 },
    { name: "Kapalı Ayran Küçük", price: 25 },
    { name: "Küçük Su", price: 10 },
    { name: "Pepsi Kutu", price: 70 },
    { name: "Pepsi Şişe", price: 70 },
    { name: "Soda", price: 40 },
    { name: "Su", price: 20 },
    { name: "Şalgam", price: 40 },
    { name: "Yedigün Kutu", price: 70 },
    { name: "Yedigün Şişe", price: 70 },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Çorbalar");

  const activeItems = menu[activeCategory];

  return (
    <section
      id="menu"
      className="bg-[#f8f7f2] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a45c]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0d4b3b]">
              Birbey Restaurant
            </span>
            <span className="h-px w-10 bg-[#c9a45c]" />
          </div>

          <h2 className="font-serif text-4xl font-bold text-[#062b22] md:text-6xl">
            Menümüz
          </h2>

          <p className="mt-5 leading-7 text-[#10231e]/55">
            Geleneksel lezzetlerden fırın ürünlerine kadar
            sofranız için hazırladığımız seçkin tatlar.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mt-12 flex gap-3 overflow-x-auto pb-3 md:justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-[#0d4b3b] text-white shadow-lg"
                    : "border border-[#0d4b3b]/10 bg-white text-[#062b22] hover:border-[#c9a45c] hover:text-[#0d4b3b]"
                }`}
              >
                <Icon size={17} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Menu */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-10 max-w-5xl"
          >
            <div className="overflow-hidden rounded-[2rem] border border-[#0d4b3b]/10 bg-white shadow-sm">

              {activeItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.025 }}
                  className="group flex items-center gap-4 border-b border-[#0d4b3b]/[0.07] px-5 py-5 last:border-0 md:px-8"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-[#062b22] transition-colors group-hover:text-[#0d4b3b] md:text-xl">
                      {item.name}
                    </h3>

                    <div className="mt-2 h-px max-w-xs bg-[#c9a45c]/30" />
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="whitespace-nowrap text-lg font-bold text-[#0d4b3b] md:text-xl">
                      {item.price} TL
                    </span>

                    <span className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#f8f7f2] text-[#0d4b3b] transition-all group-hover:bg-[#c9a45c] md:flex">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-5 text-[#10231e]/40">
          Fiyatlar bilgilendirme amaçlıdır. Güncel fiyatlar ve ürün
          bulunabilirliği için restoranımızla iletişime geçebilirsiniz.
        </p>

      </div>
    </section>
  );
}
