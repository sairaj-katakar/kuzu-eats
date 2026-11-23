
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
  ShieldCheck,
  Clock,
  MessageCircle,
  Star,
} from "lucide-react";

// ================= VALUE PILLARS =================

const VALUE_PILLARS = [
  {
    title: "Fast, Stress-Free Setup",
    description:
      "Get started with your menu, pricing and brand identity through a simple guided onboarding experience.",
    tag: "Easy Setup",
    icon: Zap,
    number: "01",
  },
  {
    title: "Your Brand, Your Guests",
    description:
      "Build direct customer relationships and create memorable experiences that encourage repeat visits.",
    tag: "Full Ownership",
    icon: Store,
    number: "02",
  },
  {
    title: "Care That Builds Trust",
    description:
      "Clear workflows and dependable guidance help your restaurant team manage daily operations.",
    tag: "Reliable Support",
    icon: HeartHandshake,
    number: "03",
  },
  {
    title: "Memorable Food Moments",
    description:
      "Great food, accurate orders and a welcoming experience make every dining moment special.",
    tag: "Guest Happiness",
    icon: Award,
    number: "04",
  },
];

// ================= AUDIENCE CONTENT =================

const AUDIENCE_TABS = {
  owners: {
    label: "Restaurant Owners",
    badge: "Higher Margins & Peace of Mind",
    title: "Grow Your Restaurant Without Giving Away Your Hard Work",
    subtitle:
      "Designed for independent kitchens, cloud kitchens, cafés and growing restaurant businesses that want better control over their digital presence.",
    points: [
      "Keep 100% of order value with zero per-order commission cuts",
      "Highlight chef specials, combos and seasonal menus",
      "Build stronger relationships with your customers",
      "Understand your business through useful order and dish insights",
    ],
    ctaLabel: "Book a Partner Walkthrough",
    ctaHref: "/contact",
    icon: Store,
  },
  diners: {
    label: "Food Lovers",
    badge: "Fresh, Honest & Effortless",
    title: "Discover Great Food From the Kitchens You Love",
    subtitle:
      "Enjoy a welcoming food discovery and ordering experience while supporting local restaurants, independent chefs and neighbourhood cafés.",
    points: [
      "Browse food through a clean, mobile-friendly experience",
      "Connect directly with local restaurants and cafés",
      "Share special notes and dining preferences",
      "Discover memorable dishes from food businesses",
    ],
    ctaLabel: "Explore KuzuEats",
    ctaHref: "/",
    icon: Utensils,
  },
};

// ================= FAQ DATA =================

const PARTNER_FAQS = [
  {
    q: "Is KuzuEats really 0% commission on direct orders?",
    a: "Yes. KuzuEats is built around commission-free direct orders. Our goal is to help restaurants protect their earnings instead of losing a percentage of every order to third-party commissions.",
  },
  {
    q: "Will this work for both small cafés and multi-location restaurants?",
    a: "Yes. Whether you operate a small neighbourhood café, an independent restaurant or a growing multi-location food business, KuzuEats aims to support your digital ordering needs.",
  },
  {
    q: "How quickly can a restaurant get started?",
    a: "Getting started is simple. Visit our Contact page, share your restaurant details and connect with our team for guided partner onboarding.",
  },
  {
    q: "Can I maintain my restaurant's own brand identity?",
    a: "Yes. Our approach focuses on helping restaurants maintain their own identity and build direct relationships with their guests.",
  },
  {
    q: "Is KuzuEats suitable for cloud kitchens?",
    a: "Yes. Cloud kitchens, independent food businesses and traditional restaurants can all benefit from a direct digital ordering approach.",
  },
];

// ================= MAIN COMPONENT =================

export default function PartnerValueAndFaq() {
  const [audience, setAudience] = useState<"owners" | "diners">("owners");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeAudience = AUDIENCE_TABS[audience];
  const ActiveIcon = activeAudience.icon;

  return (
    <section className="relative overflow-hidden border-t border-orange-100 bg-gradient-to-b from-[#FFFBF5] via-[#FFF6EB] to-[#FFFBF5] py-20 sm:py-28">

      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-orange-200/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-amber-200/30 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">

        {/* ==========================================
            SECTION 1: VALUE PILLARS
        ========================================== */}

        <div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >

            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-700">
              <Sparkles className="h-4 w-4" />
              Happiness Built In
            </span>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
              Why Both
              <span className="text-orange-600"> Partners & Guests </span>
              Stay Happy
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
              Great food deserves a platform that feels warm, fast and fair
              for everyone at the table. We bring restaurants and food lovers
              closer together.
            </p>

          </motion.div>

          {/* VALUE CARDS
              Mobile: Horizontal scrolling
              Tablet: Two-column grid
              Desktop: Four-column grid
          */}

          <div className="
            flex gap-4
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory
            pb-5
            scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-50
            md:grid md:grid-cols-2
            md:overflow-visible md:pb-0
            lg:grid-cols-4
          ">

            {VALUE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  whileHover={{ y: -9 }}
                  className="
                    group relative flex min-h-[255px]
                    w-[280px] shrink-0 snap-start
                    flex-col justify-between overflow-hidden
                    rounded-3xl border border-orange-100
                    bg-white p-6 shadow-sm
                    transition-all duration-300
                    hover:border-orange-300
                    hover:shadow-xl hover:shadow-orange-950/5
                    sm:min-h-[280px]
                    md:w-auto md:min-w-0
                  "
                >

                  {/* Background number */}

                  <span className="pointer-events-none absolute -right-2 -top-5 select-none font-[family-name:var(--font-playfair)] text-8xl font-black text-orange-50 transition-colors group-hover:text-orange-100/80">
                    {pillar.number}
                  </span>

                  <div className="relative z-10">

                    <div className="flex items-center justify-between gap-2">

                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-orange-600 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-600 group-hover:text-white"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>

                      <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wide text-amber-800">
                        {pillar.tag}
                      </span>

                    </div>

                    <h3 className="mt-7 text-lg font-extrabold leading-snug text-stone-900 transition-colors group-hover:text-orange-700">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-stone-500 sm:text-sm">
                      {pillar.description}
                    </p>

                  </div>

                  <div className="mt-6 flex items-center justify-between">

                    <span className="h-1 w-10 rounded-full bg-orange-200 transition-all duration-500 group-hover:w-20 group-hover:bg-orange-500" />

                    <ArrowRight className="h-4 w-4 text-stone-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-600" />

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Mobile scroll indicator */}

          <div className="mt-2 flex items-center justify-center gap-2 text-[10px] font-semibold text-stone-400 md:hidden">
            <ArrowRight className="h-3.5 w-3.5" />
            Swipe to explore more
          </div>

        </div>

        {/* ==========================================
            SECTION 2: INTERACTIVE AUDIENCE SWITCHER
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-xl shadow-orange-950/5"
        >

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-100/60 blur-[80px]" />

          <div className="relative z-10 p-6 sm:p-10 lg:p-12">

            {/* Header */}

            <div className="flex flex-col justify-between gap-6 border-b border-stone-100 pb-7 md:flex-row md:items-center">

              <div>

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-600">
                  Tailored Value
                </span>

                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900 sm:text-3xl">
                  Designed Around Real Needs
                </h3>

                <p className="mt-2 text-xs text-stone-500 sm:text-sm">
                  One platform. Different needs. Better experiences.
                </p>

              </div>

              {/* Tabs */}

              <div className="inline-flex w-full self-start rounded-2xl border border-orange-100 bg-[#FFF7ED] p-1.5 sm:w-auto">

                <button
                  type="button"
                  onClick={() => setAudience("owners")}
                  aria-pressed={audience === "owners"}
                  className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 sm:flex-none sm:px-5 sm:text-sm ${
                    audience === "owners"
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20"
                      : "text-stone-600 hover:text-orange-700"
                  }`}
                >
                  <Store className="h-4 w-4" />
                  Restaurant Owners
                </button>

                <button
                  type="button"
                  onClick={() => setAudience("diners")}
                  aria-pressed={audience === "diners"}
                  className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 sm:flex-none sm:px-5 sm:text-sm ${
                    audience === "diners"
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20"
                      : "text-stone-600 hover:text-orange-700"
                  }`}
                >
                  <Utensils className="h-4 w-4" />
                  Food Lovers
                </button>

              </div>
            </div>

            {/* Animated Content */}

            <AnimatePresence mode="wait">

              <motion.div
                key={audience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 items-center gap-10 pt-9 lg:grid-cols-12 lg:gap-12"
              >

                <div className="lg:col-span-7">

                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[10px] font-extrabold text-emerald-700 sm:text-xs">
                    <ShieldCheck className="h-4 w-4" />
                    {activeAudience.badge}
                  </span>

                  <div className="mt-6 flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                      <ActiveIcon className="h-6 w-6" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      {activeAudience.label}
                    </span>

                  </div>

                  <h4 className="mt-5 font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-stone-900 sm:text-3xl">
                    {activeAudience.title}
                  </h4>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                    {activeAudience.subtitle}
                  </p>

                  <Link
                    href={activeAudience.ctaHref}
                    className="group mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
                  >
                    {activeAudience.ctaLabel}

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>

                {/* Right checklist */}

                <div className="lg:col-span-5">

                  <div className="rounded-3xl border border-orange-100 bg-[#FFFBF5] p-5 sm:p-6">

                    <div className="mb-5 flex items-center justify-between">

                      <h5 className="text-sm font-extrabold text-stone-900">
                        What You Can Expect
                      </h5>

                      <Sparkles className="h-5 w-5 text-orange-500" />

                    </div>

                    <div className="space-y-3">

                      {activeAudience.points.map((point, idx) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 rounded-xl border border-orange-100/70 bg-white p-4 transition-all hover:border-orange-200 hover:shadow-sm"
                        >

                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                          <span className="text-xs font-medium leading-6 text-stone-700 sm:text-sm">
                            {point}
                          </span>

                        </motion.div>
                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>
        </motion.div>

        {/* ==========================================
            SECTION 3: FAQ ACCORDION
        ========================================== */}

        <div className="mx-auto max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-700">
              <MessageCircle className="h-4 w-4" />
              Quick Answers
            </span>

            <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 sm:text-4xl">
              Common Questions
              <span className="text-orange-600"> From Partners</span>
            </h3>

            <p className="mt-3 text-sm leading-7 text-stone-500">
              Everything you need to know before getting started with KuzuEats.
            </p>

          </motion.div>

          <div className="space-y-3">

            {PARTNER_FAQS.map((faq, idx) => {

              const isOpen = openFaqIndex === idx;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-orange-300 shadow-lg shadow-orange-950/5"
                      : "border-orange-100 shadow-sm hover:border-orange-200"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex(isOpen ? null : idx)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-orange-50/40 sm:px-6"
                  >

                    <div className="flex items-center gap-4">

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-colors ${
                          isOpen
                            ? "bg-orange-500 text-white"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        0{idx + 1}
                      </span>

                      <span className="text-sm font-extrabold leading-6 text-stone-900 sm:text-base">
                        {faq.q}
                      </span>

                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>

                  </button>

                  <AnimatePresence initial={false}>

                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >

                        <div className="border-t border-orange-100 px-5 pb-5 pt-4 sm:px-6 sm:pl-[4.75rem]">

                          <p className="text-xs leading-7 text-stone-600 sm:text-sm">
                            {faq.a}
                          </p>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

          {/* FAQ support */}

          <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-orange-100 bg-white p-5 sm:flex-row sm:px-7">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                <MessageCircle className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-extrabold text-stone-900">
                  Still have questions?
                </p>

                <p className="mt-1 text-xs text-stone-500">
                  Our team is ready to help you.
                </p>
              </div>

            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-orange-200 px-5 py-2.5 text-xs font-bold text-orange-700 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

        {/* ==========================================
            SECTION 4: PARTNER CTA
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 px-6 py-12 shadow-xl shadow-orange-900/10 sm:px-12 sm:py-14"
        >

          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[40px] border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

            <div className="max-w-2xl">

              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">
                <Star className="h-4 w-4 fill-white" />
                Let's Grow Together
              </span>

              <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-white sm:text-4xl">
                Your Restaurant Deserves
                <br className="hidden sm:block" />
                <span className="text-orange-100">
                  A Better Way to Grow.
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">
                Take the next step towards better digital ordering, stronger
                customer relationships and more control over your restaurant
                business.
              </p>

            </div>

            <div className="flex shrink-0 flex-col gap-3">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-orange-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-xl"
              >
                Become a Partner

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <span className="flex items-center justify-center gap-2 text-[10px] font-semibold text-white/80">
                <Clock className="h-3.5 w-3.5" />
                Simple guided onboarding
              </span>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
