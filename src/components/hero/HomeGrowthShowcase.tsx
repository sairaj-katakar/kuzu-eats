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
  ShoppingBag,
  Heart,
} from "lucide-react";
import { BRAND_CONTACT } from "@/data/siteData";

const TABS = [
  {
    id: "ordering",
    label: "Direct Ordering",
    badge: "Keep More Profits",
    headline: "Your restaurant. Your menu. Your orders.",
    description:
      "Build your own digital ordering experience. Let customers explore your dishes, place orders and connect directly with your restaurant.",
    highlights: [
      "Direct customer ordering",
      "Flexible menu and pricing",
      "No third-party commission on direct orders",
    ],
    metric: "0%",
    metricLabel: "Commission on direct orders",
    icon: ShoppingBag,
  },
  {
    id: "experience",
    label: "Guest Experience",
    badge: "Happy Diners",
    headline: "Make every food experience memorable.",
    description:
      "Create a smooth experience from discovering your menu to enjoying a meal at home or in your restaurant.",
    highlights: [
      "Mobile-friendly digital menu",
      "Convenient pickup and delivery flow",
      "Personalized customer experience",
    ],
    metric: "24/7",
    metricLabel: "Online menu availability",
    icon: Heart,
  },
  {
    id: "retention",
    label: "Customer Growth",
    badge: "Build Loyalty",
    headline: "Turn first-time guests into regular customers.",
    description:
      "Build direct customer relationships and encourage guests to return with offers, great service and memorable food.",
    highlights: [
      "Direct customer relationships",
      "Special offers and promotions",
      "Better understanding of customers",
    ],
    metric: "+60%",
    metricLabel: "Potential repeat-order improvement",
    icon: TrendingUp,
  },
];

const STEPS = [
  {
    step: "01",
    title: "Showcase Your Kitchen",
    text: "Display your signature dishes, menu, restaurant story and brand identity.",
    icon: UtensilsCrossed,
  },
  {
    step: "02",
    title: "Connect With Guests",
    text: "Give customers a simple and attractive way to explore and order.",
    icon: Users,
  },
  {
    step: "03",
    title: "Grow Your Business",
    text: "Build lasting relationships and encourage more direct orders.",
    icon: TrendingUp,
  },
];

export default function HomeGrowthShowcase() {
  const [activeTab, setActiveTab] = useState("ordering");

  const selected = TABS.find((tab) => tab.id === activeTab) || TABS[0];
  const ActiveIcon = selected.icon;

  return (
    <section
      id="growth-showcase"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFBF5] via-[#FFF5E9] to-[#FFFBF5] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
            <Sparkles className="h-4 w-4" />
            The {BRAND_CONTACT.brandName} Advantage
          </span>

          <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-stone-900 sm:text-5xl">
            Designed to Attract Guests.
            <span className="block text-orange-600">
              Built to Grow Restaurants.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            Everything your restaurant needs to create a strong digital
            presence, connect with customers and grow independently.
          </p>
        </motion.div>

        {/* Interactive tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-3 text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer sm:text-sm ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20"
                    : "border border-orange-200 bg-white text-stone-700 hover:border-orange-400 hover:text-orange-600"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic feature panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-xl shadow-orange-950/5 lg:grid-cols-12"
          >
            <div className="p-7 sm:p-10 lg:col-span-8">
              <span className="inline-block rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-orange-700">
                {selected.badge}
              </span>

              <h3 className="mt-5 max-w-2xl font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-stone-900 sm:text-4xl">
                {selected.headline}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
                {selected.description}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {selected.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-orange-100 bg-[#FFFBF5] p-3 text-xs font-semibold leading-relaxed text-stone-700 transition-all duration-200 hover:border-orange-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition-all duration-200 hover:gap-3"
              >
                <span>Discover how it works</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right metric panel */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950 p-7 text-white sm:p-10 lg:col-span-4">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/20 text-orange-300">
                  <ActiveIcon className="h-7 w-7" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-orange-300">
                  {selected.metricLabel}
                </p>

                <p className="mt-3 text-5xl font-extrabold tracking-tight">
                  {selected.metric}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-stone-300">
                  A digital experience designed for independent restaurants,
                  cafés and growing food businesses.
                </p>
              </div>

              <Link
                href="/contact"
                className="relative mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                <span>Start With {BRAND_CONTACT.brandName}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Three steps */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-extrabold tracking-widest text-orange-400">
                    STEP {item.step}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-stone-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-stone-600">
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