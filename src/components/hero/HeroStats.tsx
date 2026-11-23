"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "0%",
    title: "Commission",
    label: "Keep your hard-earned order margins.",
  },
  {
    icon: TrendingUp,
    value: "+60%",
    title: "Repeat Orders",
    label: "Encourage more direct customer orders.",
  },
  {
    icon: Sparkles,
    value: "100%",
    title: "Brand Control",
    label: "Own your customer relationships.",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-stone-950/65 p-5 text-left shadow-xl backdrop-blur-xl transition-all hover:border-orange-400/60 hover:bg-stone-900/85"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/25" />

            <div className="relative flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                <Icon className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-4 w-4 text-stone-500 transition group-hover:text-orange-400" />
            </div>

            <div className="relative mt-5">
              <p className="text-3xl font-extrabold tracking-tight text-white">
                {item.value}
              </p>

              <h3 className="mt-1 text-sm font-bold text-orange-300">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-stone-300">
                {item.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}