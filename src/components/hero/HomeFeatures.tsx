"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Clock,
  ShieldCheck,
  ArrowRight,
  Check,
  X,
} from "lucide-react";

const EXPERIENCE_CARDS = [
  {
    title: "Mobile-First Digital Menu",
    subtitle: "Appetizing & Fast",
    description:
      "Give hungry guests a clean, photo-rich menu that loads quickly on any phone with effortless item selection.",
    badge: "Guest Favorite",
    icon: Smartphone,
  },
  {
    title: "Smooth Order & Pickup Flow",
    subtitle: "Zero Kitchen Chaos",
    description:
      "Keep dine-in tables, takeaway pickups, and local deliveries organized during busy lunch and dinner rushes.",
    badge: "Peak-Hour Ready",
    icon: Clock,
  },
  {
    title: "Transparent 0% Commission",
    subtitle: "Your Hard-Earned Margin",
    description:
      "Stop giving away huge cuts per order. Keep full control of your brand, customer list, and daily earnings.",
    badge: "100% Profit Focus",
    icon: ShieldCheck,
  },
];

const COMPARISON_POINTS = [
  {
    feature: "Commission on every customer order",
    thirdParty: "Heavy per-order cut",
    kuzuEats: "0% Commission",
  },
  {
    feature: "Customer relationship & repeat loyalty",
    thirdParty: "Shared / platform-owned",
    kuzuEats: "Directly yours",
  },
  {
    feature: "Menu updates, combos & festive offers",
    thirdParty: "Restricted & delayed",
    kuzuEats: "Instant & flexible",
  },
];

export default function HomeExtraFeatures() {
  return (
    <section
      id="more-features"
      className="py-16 sm:py-24 bg-[#FFFBF5] border-t border-orange-100/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Part 1: Curated Experience Cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
              Signature Experience
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-stone-900">
              Crafted for{" "}
              <span className="text-orange-600">Hungry Guests</span> &amp;{" "}
              <span className="text-stone-900">Growing Kitchens</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600">
              Every detail is designed to make ordering feel inviting for
              diners and profitable for restaurant owners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERIENCE_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl bg-white border border-orange-100 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-orange-950/5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-orange-700">
                        {card.badge}
                      </span>
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      {card.subtitle}
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-stone-900">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 transition"
                    >
                      <span>See how it works</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Clear Value Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-white border border-orange-100 p-6 sm:p-8 shadow-md shadow-orange-950/5"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Smart Choice for Owners
              </span>
              <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-stone-900">
                Why Restaurants Switch to Direct Ordering
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-sm">
              Keep your brand front and center while giving customers a fast,
              familiar ordering flow.
            </p>
          </div>

          <div className="divide-y divide-stone-100 mt-2">
            {COMPARISON_POINTS.map((row) => (
              <div
                key={row.feature}
                className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-sm"
              >
                <div className="md:col-span-6 font-bold text-stone-800">
                  {row.feature}
                </div>
                <div className="md:col-span-3 inline-flex items-center gap-2 text-stone-500">
                  <X className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>{row.thirdParty}</span>
                </div>
                <div className="md:col-span-3 inline-flex items-center gap-2 font-bold text-emerald-700">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{row.kuzuEats}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Part 3: Final Call-to-Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-stone-950 via-stone-900 to-orange-950 text-white p-7 sm:p-11 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-orange-500/20 border border-orange-400/30 px-3.5 py-1 text-xs font-bold text-amber-300 mb-3">
              Ready When You Are
            </span>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-bold leading-tight">
              Serve Great Food. Keep Every Rupee of Your Growth.
            </h3>
            <p className="mt-2.5 text-sm sm:text-base text-stone-300 leading-relaxed">
              Launch a welcoming digital presence for your restaurant or café
              and turn everyday diners into loyal regulars.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:brightness-110 transition"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              <span>Partner Login</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}