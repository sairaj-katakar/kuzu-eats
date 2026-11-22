"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChefHat,
  CheckCircle2,
  Sparkles,
  Utensils,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";
import HeroStats from "./HeroStats";

const SPOTLIGHT_KITCHENS = [
  {
    name: "Spice Villa — Chennai",
    tag: "+60% Direct Orders",
    note: "Signature coastal dishes ordered directly without commission cuts.",
  },
  {
    name: "Urban Dine — Bengaluru",
    tag: "3.2x Repeat Guests",
    note: "Seamless table & pickup flow built for busy dining hours.",
  },
  {
    name: "The Pasta House — Mumbai",
    tag: "100% Margin Kept",
    note: "Artisanal Italian kitchen growing repeat regulars every week.",
  },
];

const DINING_MODES = [
  { id: "delivery", label: "Direct Delivery", icon: Clock },
  { id: "dinein", label: "Smart Table Flow", icon: Utensils },
  { id: "loyalty", label: "Repeat Rewards", icon: Sparkles },
];

export default function HeroSection() {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [activeMode, setActiveMode] = useState("delivery");

  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % SPOTLIGHT_KITCHENS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentSpotlight = SPOTLIGHT_KITCHENS[spotlightIndex];

  const handlePrevSpotlight = () => {
    setSpotlightIndex((prev) =>
      prev === 0 ? SPOTLIGHT_KITCHENS.length - 1 : prev - 1
    );
  };

  const handleNextSpotlight = () => {
    setSpotlightIndex((prev) => (prev + 1) % SPOTLIGHT_KITCHENS.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16 bg-stone-950"
    >
      {/* Background culinary image with gentle motion */}
      <motion.img
        src={siteConfig.images.heroBg}
        alt="Fresh culinary dishes served at Kuzueats partner restaurants"
        initial={{ scale: 1.08, opacity: 0.65 }}
        animate={{ scale: 1.03, opacity: 0.82 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient overlays for strong contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-[#FFFBF5]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.32),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.18),transparent_50%)]" />

      {/* Hero content */}
      <div className="relative z-10 w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-300/35 bg-orange-500/15 backdrop-blur-md px-3.5 py-1.5 text-[11px] sm:text-sm font-semibold text-orange-200 mb-5"
        >
          <ChefHat className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-400 shrink-0" />
          <span className="truncate">
            Built for Restaurants, Cafés &amp; Culinary Creators
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-[family-name:var(--font-playfair)] text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] max-w-4xl mx-auto break-words"
        >
          “Made with passion, served with love.{" "}
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Because you deserve the best bite.”
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-lg text-stone-200 leading-relaxed px-1"
        >
          Take full command of your online ordering, table reservations, and
          customer loyalty—without losing profits to heavy third-party
          commissions.
        </motion.p>

        {/* Interactive dining mode switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          {DINING_MODES.map((mode) => {
            const Icon = mode.icon;
            const isSelected = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-amber-400 text-stone-950 font-semibold shadow-md shadow-amber-500/25"
                    : "bg-stone-900/75 text-stone-200 border border-white/15 hover:border-orange-400/50"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span>{mode.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Primary CTA links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-600/30 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
          >
            <span>Partner With Us</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/20 transition-all"
          >
            <span>Explore About &amp; Savings</span>
          </Link>
        </motion.div>

        {/* Interactive Partner Spotlight Carousel Strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34 }}
          className="mt-7 sm:mt-8 w-full max-w-2xl mx-auto rounded-2xl border border-white/15 bg-stone-900/80 backdrop-blur-md px-3.5 sm:px-4 py-3 text-left shadow-lg"
        >
          <div className="flex items-center justify-between gap-2.5 sm:gap-3">
            <div className="min-w-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpotlight.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {currentSpotlight.name}
                    </span>
                    <span className="rounded-full bg-orange-500/20 border border-orange-400/30 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-amber-300">
                      {currentSpotlight.tag}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-300 mt-1 line-clamp-2 sm:truncate">
                    {currentSpotlight.note}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handlePrevSpotlight}
                aria-label="Previous partner highlight"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/15 bg-white/5 text-stone-200 hover:bg-orange-500 hover:text-white inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <button
                type="button"
                onClick={handleNextSpotlight}
                aria-label="Next partner highlight"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/15 bg-white/5 text-stone-200 hover:bg-orange-500 hover:text-white inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-stone-300">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Instant Menu &amp; Order Setup</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Delightful Customer Experience</span>
          </span>
        </div>

        {/* Client fulfillment metrics */}
        <HeroStats />
      </div>
    </section>
  );
}