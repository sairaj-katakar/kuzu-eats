"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  UtensilsCrossed,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const GROWTH_TABS = [
  {
    id: "ordering",
    label: "0% Commission Ordering",
    badge: "Keep 100% Profits",
    headline: "Direct orders from your own menu—zero middleman cuts.",
    description:
      "Turn hungry diners into direct customers with fast mobile-friendly ordering, instant order alerts, and full control over pricing and offers.",
    highlights: [
      "Keep every rupee of your dish margins",
      "Update daily specials & availability in seconds",
      "Smooth checkout designed for hungry guests",
    ],
    metricLabel: "Average Partner Savings",
    metricValue: "Up to ₹1.4L / mo",
  },
  {
    id: "experience",
    label: "Delightful Guest Flow",
    badge: "Happy Diners",
    headline: "Warm hospitality from the first tap to the last bite.",
    description:
      "Whether guests dine in, pick up on the way home, or order for family gatherings, every touchpoint feels effortless and personal.",
    highlights: [
      "Clear preparation updates & pickup readiness",
      "Custom notes for spice level & dietary needs",
      "Consistent brand look across mobile & desktop",
    ],
    metricLabel: "Guest Satisfaction",
    metricValue: "4.9 ★ Rating",
  },
  {
    id: "retention",
    label: "Repeat Customer Growth",
    badge: "Loyal Regulars",
    headline: "Bring first-time food lovers back again and again.",
    description:
      "Build lasting relationships with neighborhood foodies instead of renting visibility on crowded third-party apps.",
    highlights: [
      "Encourage repeat orders with direct perks",
      "Spot top-selling dishes and peak hours easily",
      "Grow steady weekly revenue with confidence",
    ],
    metricLabel: "Repeat Order Lift",
    metricValue: "Up to +60%",
  },
];

const CLIENT_STEPS = [
  {
    step: "01",
    title: "Showcase Your Kitchen",
    text: "Present your signature dishes, chef story, and hygiene standards in a clean, appetizing layout.",
    icon: UtensilsCrossed,
  },
  {
    step: "02",
    title: "Attract & Delight Guests",
    text: "Give visitors an interactive, fast, and mobile-friendly experience that builds instant trust.",
    icon: Users,
  },
  {
    step: "03",
    title: "Grow Happy & Profitable",
    text: "Retain full margins, earn repeat customers, and scale your restaurant at your own pace.",
    icon: TrendingUp,
  },
];

export default function HomeGrowthShowcase() {
  const [selectedTabId, setSelectedTabId] = useState("ordering");

  const activeTab =
    GROWTH_TABS.find((tab) => tab.id === selectedTabId) || GROWTH_TABS[0];

  return (
    <section
      id="growth-showcase"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFBF5] via-[#FFF7ED] to-[#FFF5EA]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-4 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Why Restaurants &amp; Diners Love Kuzueats</span>
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Designed to Attract Guests &amp;{" "}
            <span className="text-orange-600">Keep Partners Smiling</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Explore how Kuzueats pairs appetizing storytelling with practical
            growth tools for restaurants and cafés.
          </p>
        </motion.div>

        {/* Interactive Feature Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {GROWTH_TABS.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedTabId(tab.id)}
                className={`rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md shadow-orange-500/25"
                    : "bg-white text-stone-700 border border-orange-200/80 hover:border-orange-400 hover:text-orange-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="rounded-3xl bg-white border border-orange-100 p-6 sm:p-9 shadow-lg shadow-orange-950/5 mb-14"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-bold mb-3">
                  {activeTab.badge}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-stone-900 leading-snug">
                  {activeTab.headline}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                  {activeTab.description}
                </p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeTab.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 rounded-2xl bg-[#FFFBF5] border border-orange-100/90 p-3 text-xs sm:text-sm font-medium text-stone-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 rounded-2xl bg-stone-950 text-white p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                    {activeTab.metricLabel}
                  </p>
                  <p className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-white">
                    {activeTab.metricValue}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Built for independent restaurants, cafés, and multi-city
                    kitchens across India.
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-sm font-bold text-white hover:brightness-110 transition"
                  >
                    <span>Start With Kuzueats</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3-Step Client Happiness Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white/95 border border-orange-100 p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="h-11 w-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-extrabold tracking-widest text-orange-400">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}