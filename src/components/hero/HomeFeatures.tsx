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
  Utensils,
  Headphones,
  BarChart3,
} from "lucide-react";

const FEATURES = [
  {
    title: "Mobile-First Digital Menu",
    subtitle: "Beautiful Menu Experience",
    description:
      "Showcase your dishes with an attractive, easy-to-navigate digital menu that works smoothly across mobile and desktop.",
    badge: "Guest Favorite",
    icon: Smartphone,
  },
  {
    title: "Smooth Order & Pickup Flow",
    subtitle: "Simplified Operations",
    description:
      "Make ordering easier for your guests and organize dine-in, takeaway and delivery orders.",
    badge: "Easy Ordering",
    icon: Clock,
  },
  {
    title: "Transparent Direct Ordering",
    subtitle: "Protect Your Margins",
    description:
      "Build direct customer relationships and maintain control over your restaurant brand and ordering experience.",
    badge: "Owner Focus",
    icon: ShieldCheck,
  },
  {
    title: "Restaurant Brand Identity",
    subtitle: "Your Brand Matters",
    description:
      "Present your restaurant story, signature dishes and unique identity through a dedicated digital presence.",
    badge: "Brand Control",
    icon: Utensils,
  },
  {
    title: "Better Customer Connection",
    subtitle: "Build Relationships",
    description:
      "Create meaningful connections with guests and encourage them to return for their favorite dishes.",
    badge: "Guest First",
    icon: Headphones,
  },
  {
    title: "Business Growth Insights",
    subtitle: "Understand Your Business",
    description:
      "Use available order and customer information to understand your business and make better decisions.",
    badge: "Smart Growth",
    icon: BarChart3,
  },
];

const COMPARISON = [
  {
    feature: "Commission on direct orders",
    other: "Platform-dependent charges",
    kuzu: "0% KuzuEats commission",
  },
  {
    feature: "Customer relationship",
    other: "Platform-mediated",
    kuzu: "Direct connection",
  },
  {
    feature: "Menu updates",
    other: "Platform-dependent",
    kuzu: "Flexible menu management",
  },
  {
    feature: "Restaurant brand identity",
    other: "Platform-led presentation",
    kuzu: "Your restaurant identity",
  },
];

export default function HomeFeatures() {
  return (
    <section
      id="more-features"
      className="relative overflow-hidden border-t border-orange-100 bg-[#FFFBF5] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        {/* Features */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
              Signature Experience
            </span>

            <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 sm:text-5xl">
              Crafted for{" "}
              <span className="text-orange-600">Hungry Guests</span> & Growing
              Kitchens
            </h2>

            <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
              From beautiful digital menus to direct ordering, everything
              starts with a better restaurant experience.
            </p>
          </motion.div>

          {/* Mobile: Horizontal Snap Scroll | Tablet & Desktop: 2 & 3 Column Grid */}
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
            {FEATURES.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="group flex w-[82vw] max-w-[330px] shrink-0 snap-center flex-col rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/5 sm:w-auto sm:max-w-none sm:shrink sm:p-7 sm:hover:-translate-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-3 text-white shadow-lg shadow-orange-500/20 transition group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-bold text-orange-700">
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-wider text-orange-500">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-stone-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>

                  <Link
                    href="/about"
                    className="mt-6 inline-flex items-center gap-2 border-t border-stone-100 pt-5 text-sm font-bold text-orange-600 transition group-hover:gap-3"
                  >
                    Explore Feature
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-950/5 sm:p-9"
        >
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              The Smarter Choice
            </span>

            <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 sm:text-3xl">
              Why Restaurants Choose Direct Ordering
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-500">
              Keep your restaurant identity at the center of your digital
              ordering experience.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[560px]">
              <div className="grid grid-cols-12 rounded-xl bg-stone-50 px-4 py-4 text-xs font-bold uppercase tracking-wider text-stone-500">
                <div className="col-span-6">Comparison</div>
                <div className="col-span-3">Other platforms</div>
                <div className="col-span-3 text-orange-600">KuzuEats</div>
              </div>

              {COMPARISON.map((item) => (
                <div
                  key={item.feature}
                  className="grid grid-cols-12 items-center gap-2 border-b border-stone-100 px-4 py-5 text-xs sm:text-sm"
                >
                  <div className="col-span-6 font-bold text-stone-800">
                    {item.feature}
                  </div>

                  <div className="col-span-3 flex items-start gap-2 text-stone-500">
                    <X className="h-4 w-4 shrink-0 text-rose-500" />
                    {item.other}
                  </div>

                  <div className="col-span-3 flex items-start gap-2 font-bold text-emerald-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    {item.kuzu}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-stone-950 via-stone-900 to-orange-950 p-8 text-white shadow-2xl sm:p-12"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-[80px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="rounded-full border border-orange-400/30 bg-orange-500/15 px-4 py-2 text-xs font-bold text-orange-300">
                Ready to Grow?
              </span>

              <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight sm:text-4xl">
                Serve Great Food.
                <span className="block text-orange-400">
                  Keep Your Business Growing.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-stone-300 sm:text-base">
                Give your restaurant a digital presence that helps you connect
                with customers and build lasting relationships.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:brightness-110"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Partner Login
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}