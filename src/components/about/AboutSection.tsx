"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  Clock,
  BarChart3,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";

const highlights = [
  {
    icon: Utensils,
    title: "Online Ordering & Reservations",
    description:
      "Direct orders and seamless table bookings under your own brand identity.",
  },
  {
    icon: Clock,
    title: "Serve More Customers, Faster",
    description:
      "Streamlined order flow built for local eateries and fast-growing food chains.",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    description:
      "Track order trends, popular dishes, and repeat customer engagement in real time.",
  },
  {
    icon: HeartHandshake,
    title: "Zero Commission Drain",
    description:
      "Keep your profit margins intact instead of losing heavy cuts to middlemen.",
  },
];

const QUICK_METRICS = [
  { label: "Commission Fee", value: "0%" },
  { label: "Order Ownership", value: "100%" },
  { label: "Partner Onboarding", value: "Fast & Guided" },
];

const ABOUT_HERO_BG =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=80";

export default function AboutSection() {
  const [bgSrc, setBgSrc] = useState(ABOUT_HERO_BG);

  return (
    <section id="about" className="relative bg-[#FFFBF5] overflow-hidden">
      {/* Top Hero Banner with Clear Culinary Background Image */}
      <div className="relative py-20 sm:py-24 overflow-hidden border-b border-orange-100/80">
        <img
          src={bgSrc}
          alt="Kuzueats culinary dining atmosphere"
          onError={() => setBgSrc(siteConfig.images.aboutShowcase)}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-40 scale-105"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFF7ED]/65 via-[#FFF8EF]/75 to-[#FFFBF5]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-orange-200 px-4 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Who We Are</span>
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            About <span className="text-orange-600">Kuzueats</span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-stone-700 font-medium leading-relaxed">
            At <strong className="text-stone-900">Kuzueats</strong>, we believe
            food connects people. Our mission is to empower restaurants, cafés,
            and food entrepreneurs to take control of their online orders —
            without losing profits to third-party commissions.
          </p>

          {/* Key Value Strip */}
          <div className="mt-7 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl mx-auto">
            {QUICK_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-white/95 backdrop-blur-xs border border-orange-100 px-3 py-3 shadow-sm"
              >
                <p className="text-base sm:text-xl font-extrabold text-orange-600">
                  {metric.value}
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-stone-600 mt-0.5">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Editorial Content */}
      <div className="relative py-16 sm:py-24">
        {/* Subtle decorative warm glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-orange-200/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left column: Story + Feature mini-cards */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
                <TrendingUp className="h-4 w-4" />
                <span>Built for Independent Kitchens</span>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Whether you&apos;re a local eatery or a fast-growing food chain,
                Kuzueats gives you everything you need — from online ordering
                and table reservations to analytics and customer engagement
                tools.
              </p>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                We help restaurants{" "}
                <strong className="text-stone-900 font-bold">
                  serve more customers, faster
                </strong>
                , while providing a delightful, seamless experience for food
                lovers across the country.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-orange-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-orange-300 transition-all"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm font-bold text-stone-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right column: Visual showcase with fulfillment badge */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src={siteConfig.images.aboutShowcase}
                  alt="Freshly prepared dishes served for Kuzueats partner restaurants"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent" />

                {/* Floating client satisfaction card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 sm:p-4 shadow-lg border border-orange-100 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-orange-600">
                      Partner Growth Promise
                    </p>
                    <p className="text-xs sm:text-base font-extrabold text-stone-900 mt-0.5 truncate">
                      100% Commission-Free Direct Orders
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold text-emerald-800">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Verified ROI</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}