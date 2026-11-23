
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
  ArrowUpRight,
  CheckCircle2,
  Store,
  Users,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";

const highlights = [
  {
    icon: Utensils,
    title: "Online Ordering & Reservations",
    description:
      "Accept direct food orders and table bookings through your own branded digital platform.",
    tag: "Smart Ordering",
  },
  {
    icon: Clock,
    title: "Serve More Customers, Faster",
    description:
      "Manage incoming orders efficiently and deliver a smoother experience during busy hours.",
    tag: "Save Time",
  },
  {
    icon: BarChart3,
    title: "Actionable Business Insights",
    description:
      "Understand customer preferences, track popular dishes and discover growth opportunities.",
    tag: "Grow Smarter",
  },
  {
    icon: HeartHandshake,
    title: "Zero Commission Drain",
    description:
      "Keep more of your earnings with direct orders and transparent business operations.",
    tag: "Keep Your Profit",
  },
];

const QUICK_METRICS = [
  { label: "Commission Fee", value: "0%", icon: Zap },
  { label: "Order Ownership", value: "100%", icon: ShoppingBag },
  { label: "Partner Onboarding", value: "Guided", icon: Users },
];

const focusPoints = [
  "Complete ownership of your direct customer relationships",
  "A simple and efficient online ordering experience",
  "Better visibility into your restaurant's performance",
];

const ABOUT_HERO_BG =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85";

export default function AboutSection() {
  const [bgSrc, setBgSrc] = useState(ABOUT_HERO_BG);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFFBF5]"
    >
      {/* ================= HERO SECTION ================= */}

      <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden border-b border-orange-100 py-20 sm:min-h-[480px] sm:py-24">

        <img
          src={bgSrc}
          alt="Restaurant dining atmosphere"
          onError={() => setBgSrc(siteConfig.images.aboutShowcase)}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8EF]/90 via-[#FFF8EF]/85 to-[#FFFBF5]" />

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-[100px]" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-200/30 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-4xl px-5 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Discover Our Story
          </span>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            More Than Food.
            <br />
            <span className="text-orange-600">
              We're About Connections.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-700 sm:text-base sm:leading-8">
            At <strong className="text-stone-950">Kuzueats</strong>, we believe
            great food brings people together. We're building a smarter way for
            restaurants, cafés and food entrepreneurs to grow their businesses,
            connect directly with customers and keep more of what they earn.
          </p>

          {/* Metrics */}

          <div className="mx-auto mt-9 grid max-w-2xl grid-cols-3 gap-2.5 sm:gap-4">
            {QUICK_METRICS.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-orange-100 bg-white/95 p-3 shadow-sm backdrop-blur-md transition-shadow hover:shadow-lg sm:p-5"
                >
                  <Icon className="mx-auto mb-2 h-5 w-5 text-orange-500 transition-transform group-hover:scale-110" />

                  <p className="text-lg font-black text-orange-600 sm:text-2xl">
                    {metric.value}
                  </p>

                  <p className="mt-1 text-[9px] font-bold text-stone-500 sm:text-xs">
                    {metric.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ================= ABOUT STORY ================= */}

      <div className="relative overflow-hidden py-20 sm:py-28">

        {/* Background decoration */}

        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-orange-200/30 blur-[110px]" />

        <div className="pointer-events-none absolute -bottom-20 -left-32 h-96 w-96 rounded-full bg-amber-200/30 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >

              <span className="mb-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-600">
                <TrendingUp className="h-4 w-4" />
                Built for Independent Kitchens
              </span>

              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
                Helping Restaurants
                <span className="text-orange-600"> Grow Beyond </span>
                Expectations.
              </h2>

              <p className="mt-6 text-sm leading-7 text-stone-600 sm:text-base">
                Whether you're running a neighbourhood café, a family-owned
                restaurant or a growing food chain, Kuzueats brings essential
                digital tools together in one convenient platform.
              </p>

              <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
                From online ordering and table reservations to business
                insights and customer engagement, our goal is to simplify
                restaurant operations while helping food businesses build
                lasting customer relationships.
              </p>

              {/* Focus points */}

              <div className="mt-7 space-y-3">
                {focusPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                    <p className="text-sm font-medium leading-6 text-stone-700">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Feature Cards */}

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -7 }}
                      className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-xl"
                    >
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-50 transition-transform duration-500 group-hover:scale-150" />

                      <div className="relative z-10">

                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </div>

                          <ArrowUpRight className="h-4 w-4 text-stone-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-600" />
                        </div>

                        <span className="mt-4 inline-block text-[9px] font-extrabold uppercase tracking-wider text-orange-600">
                          {item.tag}
                        </span>

                        <h3 className="mt-1 text-sm font-extrabold text-stone-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-stone-500">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT IMAGE SHOWCASE */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-xl"
            >

              {/* Decorative frame */}

              <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-orange-200/70" />

              <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-white bg-white shadow-2xl">

                <img
                  src={siteConfig.images.aboutShowcase}
                  alt="Delicious freshly prepared restaurant food"
                  loading="lazy"
                  className="aspect-[4/4.2] w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                  <span className="inline-block rounded-full bg-orange-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    The Kuzueats Promise
                  </span>

                  <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl">
                    Good Food.
                    <br />
                    Better Opportunities.
                  </h3>

                  <p className="mt-2 max-w-sm text-xs leading-6 text-white/80 sm:text-sm">
                    Empowering food businesses with the freedom to grow,
                    connect and succeed.
                  </p>

                </div>
              </div>

              {/* Floating ownership card */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-3.5 shadow-xl sm:-left-8 sm:p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-stone-900">
                    Your Business, Your Rules
                  </p>
                  <p className="mt-0.5 text-[10px] text-stone-500">
                    More control over direct orders
                  </p>
                </div>
              </motion.div>

              {/* Floating partner card */}

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-3.5 shadow-xl sm:-right-7 sm:p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Store className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-stone-900">
                    Made for Restaurants
                  </p>
                  <p className="mt-0.5 text-[10px] text-stone-500">
                    Designed around your needs
                  </p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </div>

      {/* ================= BRAND MESSAGE STRIP ================= */}

      <div className="border-y border-orange-100 bg-white/70 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:grid-cols-3 sm:gap-5 sm:px-8">

          {[
            {
              icon: Store,
              title: "For Every Kitchen",
              description:
                "From small cafés to established restaurant businesses.",
            },
            {
              icon: HeartHandshake,
              title: "Built on Trust",
              description:
                "Creating stronger connections between restaurants and customers.",
            },
            {
              icon: TrendingUp,
              title: "Focused on Growth",
              description:
                "Helping food entrepreneurs embrace smarter digital operations.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-stone-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-stone-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
