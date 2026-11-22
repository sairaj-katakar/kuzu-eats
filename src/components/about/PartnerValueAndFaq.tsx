"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartHandshake,
  Zap,
  Award,
  Sparkles,
  Store,
  Utensils,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const VALUE_PILLARS = [
  {
    title: "Fast, Stress-Free Setup",
    description:
      "Go live with your menu, pricing, and brand identity without technical headaches.",
    tag: "Owner Delight",
    icon: Zap,
  },
  {
    title: "Your Brand, Your Guests",
    description:
      "Keep direct connections with every customer so repeat visits become natural.",
    tag: "Full Ownership",
    icon: Store,
  },
  {
    title: "Care That Builds Trust",
    description:
      "Responsive support and clear workflows keep your kitchen team calm in rush hours.",
    tag: "Reliable Support",
    icon: HeartHandshake,
  },
  {
    title: "Memorable Food Moments",
    description:
      "Warm presentation, accurate orders, and honest value make diners smile.",
    tag: "Guest Love",
    icon: Award,
  },
];

const AUDIENCE_TABS = {
  owners: {
    label: "For Restaurant & Café Owners",
    badge: "Higher Margins & Peace of Mind",
    title: "Grow Profits Without Giving Away Your Hard Work",
    subtitle:
      "Built for independent kitchens, cloud kitchens, and cafés that care deeply about food quality and sustainable margins.",
    points: [
      "Keep 100% of order value with zero per-order commission cuts",
      "Highlight chef specials, combos, and seasonal menus effortlessly",
      "Turn first-time diners into loyal neighborhood regulars",
      "Make informed decisions using clear order and dish insights",
    ],
    ctaLabel: "Book a Partner Walkthrough",
    ctaHref: "/contact",
  },
  diners: {
    label: "For Food Lovers & Guests",
    badge: "Fresh, Honest & Effortless",
    title: "Order Directly From the Kitchens You Love",
    subtitle:
      "Enjoy a smooth, welcoming ordering experience that supports local chefs and brings authentic flavors straight to your table.",
    points: [
      "Clean mobile-friendly browsing with clear dish details",
      "Direct connection with trusted local restaurants and cafés",
      "Special notes for spice preference and dining convenience",
      "Consistent quality from kitchens vetted for culinary care",
    ],
    ctaLabel: "Explore Kuzueats Story",
    ctaHref: "/",
  },
};

const PARTNER_FAQS = [
  {
    q: "Is Kuzueats really 0% commission on direct orders?",
    a: "Yes. Our mission is to protect restaurant margins so you keep what you earn from direct orders instead of losing heavy cuts to middlemen.",
  },
  {
    q: "Will this work for both small cafés and multi-location restaurants?",
    a: "Yes. Whether you run a cozy neighborhood café or a growing multi-outlet kitchen, the workflow adapts smoothly to your daily operations.",
  },
  {
    q: "How quickly can a restaurant get started?",
    a: "You can share your details on the Contact page and get guided onboarding so your team can start welcoming direct guests right away.",
  },
];

export default function PartnerValueAndFaq() {
  const [audience, setAudience] = useState<"owners" | "diners">("owners");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeAudience = AUDIENCE_TABS[audience];

  return (
    <div className="bg-gradient-to-b from-[#FFFBF5] via-[#FFF6EB] to-[#FFFBF5] py-16 sm:py-24 border-t border-orange-100/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Partner & Guest Value Pillars */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <motion.span
              initial={{ scale: 0.92, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 mb-3"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Happiness Built In</span>
            </motion.span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-stone-900">
              Why Both{" "}
              <span className="text-orange-600">Partners &amp; Guests</span>{" "}
              Stay Happy
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-stone-600">
              Great food deserves a platform that feels warm, fast, and fair for
              everyone at the table.
            </p>
          </motion.div>

          {/* Square cards in horizontal scrollable bar on mobile & tablet, 4-column grid on desktop */}
          <div className="kuzu-horizontal-scroll flex lg:grid lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory">
            {VALUE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 22, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.42,
                    delay: idx * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] lg:w-full lg:h-auto lg:aspect-square snap-start shrink-0 lg:shrink rounded-2xl bg-white border border-orange-100 hover:border-orange-300 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-orange-950/5 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2">
                    <motion.span
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="h-10 w-10 rounded-xl bg-orange-50 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-600 border border-orange-200/70 text-orange-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>
                    <span className="rounded-full bg-amber-50 group-hover:bg-orange-100 px-2.5 py-1 text-[11px] font-bold text-amber-800 transition-colors">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="my-auto pt-3">
                    <h3 className="text-base sm:text-lg font-extrabold text-stone-900 group-hover:text-orange-700 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-4">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="h-1 w-10 rounded-full bg-orange-200 group-hover:w-16 group-hover:bg-orange-500 transition-all" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive Dual Value Switcher */}
        <div className="rounded-3xl bg-white border border-orange-100 p-6 sm:p-10 shadow-lg shadow-orange-950/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Tailored Value
              </span>
              <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-stone-900">
                Designed Around Real Needs
              </h3>
            </div>

            <div className="inline-flex rounded-full bg-[#FFF7ED] p-1 border border-orange-200/70 self-start">
              <button
                type="button"
                onClick={() => setAudience("owners")}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                  audience === "owners"
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xs"
                    : "text-stone-700 hover:text-orange-700"
                }`}
              >
                <Store className="h-4 w-4" />
                <span>Restaurant Owners</span>
              </button>

              <button
                type="button"
                onClick={() => setAudience("diners")}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                  audience === "diners"
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xs"
                    : "text-stone-700 hover:text-orange-700"
                }`}
              >
                <Utensils className="h-4 w-4" />
                <span>Food Lovers</span>
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={audience}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="pt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-3">
                <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-xs font-bold text-emerald-700">
                  {activeAudience.badge}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                  {activeAudience.title}
                </h4>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {activeAudience.subtitle}
                </p>

                <div className="pt-3">
                  <Link
                    href={activeAudience.ctaHref}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 hover:brightness-105 transition"
                  >
                    <span>{activeAudience.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 gap-3">
                {activeAudience.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 rounded-2xl bg-[#FFFBF5] border border-orange-100 p-3.5 text-xs sm:text-sm font-medium text-stone-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Partner FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-7">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Quick Answers
            </span>
            <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-stone-900">
              Common Questions From Partners
            </h3>
          </div>

          <div className="space-y-3">
            {PARTNER_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-orange-100 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-sm sm:text-base text-stone-900 hover:bg-[#FFFBF5] transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-orange-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom sleek horizontal scrollbar for mobile & tablet */}
      <style jsx global>{`
        .kuzu-horizontal-scroll {
          scrollbar-width: thin;
          scrollbar-color: #f97316 #ffedd5;
        }
        .kuzu-horizontal-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .kuzu-horizontal-scroll::-webkit-scrollbar-track {
          background: #ffedd5;
          border-radius: 9999px;
        }
        .kuzu-horizontal-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #f97316, #ea580c);
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}