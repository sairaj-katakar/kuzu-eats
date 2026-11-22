"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "0% Commission",
    label: "Keep 100% of your hard-earned order margins",
  },
  {
    icon: TrendingUp,
    value: "Up to +60%",
    label: "Faster direct repeat orders & customer retention",
  },
  {
    icon: Sparkles,
    value: "Full Brand Control",
    label: "Direct customer relationships & real-time insights",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
            className="rounded-2xl border border-white/15 bg-stone-950/55 backdrop-blur-md p-4 sm:p-5 text-left hover:border-orange-400/50 transition"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-extrabold text-white">{item.value}</p>
                <p className="text-xs sm:text-sm text-stone-200/90 leading-snug">
                  {item.label}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}