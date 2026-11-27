"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChefHat,
  CheckCircle2,
  Sparkles,
  Utensils,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";

import { BRAND_CONTACT } from "@/data/siteData";
import HeroStats from "./HeroStats";

const HERO_LOCAL_BG = "/images/hero-bg.avif";

const SPOTLIGHT_KITCHENS = [
  {
    name: "Spice Villa — Chennai",
    tag: "+60% Direct Orders",
    note: "Signature coastal dishes ordered directly without commission cuts.",
    image: "/images/spotlight-spice-villa.jpg",
    onlineImage:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Urban Dine — Bengaluru",
    tag: "3.2x Repeat Guests",
    note: "Seamless table and pickup flow for busy dining hours.",
    image: "/images/spotlight-urban-dine.jpg",
    onlineImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "The Pasta House — Mumbai",
    tag: "100% Margin Kept",
    note: "Growing loyal customers with a direct ordering experience.",
    image: "/images/spotlight-pasta-house.jpg",
    onlineImage:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  },
];

const MODES = [
  {
    id: "delivery",
    label: "Direct Delivery",
    icon: ShoppingBag,
    summary: "Instant local order routing with zero third-party commission.",
  },
  {
    id: "dinein",
    label: "Smart Table Flow",
    icon: Utensils,
    summary: "Faster table turns, smooth reservations, and organized service.",
  },
  {
    id: "loyalty",
    label: "Repeat Rewards",
    icon: Sparkles,
    summary: "Turn first-time diners into regulars with direct engagement.",
  },
];

export default function HeroSection() {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [activeMode, setActiveMode] = useState("delivery");
  const [spotlightSrc, setSpotlightSrc] = useState(
    SPOTLIGHT_KITCHENS[0].image
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => {
        const next = (prev + 1) % SPOTLIGHT_KITCHENS.length;
        setSpotlightSrc(SPOTLIGHT_KITCHENS[next].image);
        return next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSpotlight = SPOTLIGHT_KITCHENS[spotlightIndex];
  const selectedModeObj =
    MODES.find((mode) => mode.id === activeMode) ?? MODES[0];

  const changeSpotlight = (direction: number) => {
    setSpotlightIndex((prev) => {
      const next =
        (prev + direction + SPOTLIGHT_KITCHENS.length) %
        SPOTLIGHT_KITCHENS.length;
      setSpotlightSrc(SPOTLIGHT_KITCHENS[next].image);
      return next;
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-stone-950 pb-16 pt-28 sm:pt-32"
    >
      <motion.img
        src={HERO_LOCAL_BG}
        alt={`Freshly prepared dishes from ${BRAND_CONTACT.brandName} partner kitchens`}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-stone-950/65 to-[#FFFBF5]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-orange-950/30" />

      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px]" />
      <div className="absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-500/15 px-4 py-2 text-xs font-bold text-orange-200 backdrop-blur-xl sm:text-sm"
        >
          <ChefHat className="h-4 w-4 text-orange-400" />
          Built for Restaurants, Cafés &amp; Culinary Creators
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-5xl break-words font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Made with Passion,
          <br className="hidden sm:block" />
          Served with Love.
          <span className="mt-2 block bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Because You Deserve the Best Bite.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-200 sm:text-base lg:text-lg"
        >
          Take full command of your online ordering, table reservations and
          customer loyalty — without losing profits to heavy third-party
          commissions.
        </motion.p>

        {/* Ordering modes */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-7 flex flex-wrap justify-center gap-2"
        >
          {MODES.map((mode) => {
            const Icon = mode.icon;
            const selected = activeMode === mode.id;

            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id)}
                aria-pressed={selected}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer sm:text-sm ${
                  selected
                    ? "border-amber-400 bg-amber-400 text-stone-950 shadow-lg shadow-orange-500/20"
                    : "border-white/20 bg-white/10 text-white backdrop-blur-md hover:border-orange-400 hover:bg-orange-500/20"
                }`}
              >
                <Icon className="h-4 w-4" />
                {mode.label}
              </button>
            );
          })}
        </motion.div>

        <p className="mx-auto mt-3 max-w-xl text-xs font-medium text-amber-200/90 sm:text-sm">
          {selectedModeObj.summary}
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-7 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-orange-600/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-orange-500/40 active:scale-95"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 active:scale-95"
          >
            Explore {BRAND_CONTACT.brandName}
          </Link>
        </motion.div>

        {/* Partner spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-9 max-w-2xl rounded-2xl border border-white/15 bg-stone-950/75 p-4 text-left shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <img
              src={spotlightSrc}
              onError={() => {
                if (spotlightSrc !== currentSpotlight.onlineImage) {
                  setSpotlightSrc(currentSpotlight.onlineImage);
                }
              }}
              alt={currentSpotlight.name}
              className="h-14 w-14 shrink-0 rounded-xl border border-white/15 object-cover sm:h-16 sm:w-16"
            />

            <div className="min-w-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpotlight.name}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-white">
                      {currentSpotlight.name}
                    </span>

                    <span className="rounded-full bg-orange-500/20 px-2.5 py-1 text-[10px] font-bold text-orange-300">
                      {currentSpotlight.tag}
                    </span>
                  </div>

                  <p className="mt-1 text-xs leading-relaxed text-stone-300">
                    {currentSpotlight.note}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => changeSpotlight(-1)}
                aria-label="Previous partner"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:bg-orange-500 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => changeSpotlight(1)}
                aria-label="Next partner"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:bg-orange-500 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-stone-200 sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Easy Menu Setup
          </span>

          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Direct Customer Experience
          </span>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}