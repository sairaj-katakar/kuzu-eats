"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";
import { excellenceItems } from "./excellenceData";

export default function ExcellenceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = excellenceItems.length;
  const currentItem = excellenceItems[activeIndex];

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  return (
    <section
      id="excellence"
      className="relative py-20 sm:py-24 bg-[#FFFBF5] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 mb-3">
            <Award className="h-3.5 w-3.5" />
            Culinary Standards
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Our Commitment to{" "}
            <span className="text-orange-600">Excellence</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Crafted with passion, tested with perfection, and served with trust.
          </p>
        </motion.div>

        {/* Mobile & Tablet Auto-Moving Single-Card View */}
        <div
          className="lg:hidden w-full max-w-sm mx-auto"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.article
                key={currentItem.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -45) {
                    setActiveIndex((prev) =>
                      prev === total - 1 ? 0 : prev + 1
                    );
                  } else if (info.offset.x > 45) {
                    setActiveIndex((prev) =>
                      prev === 0 ? total - 1 : prev - 1
                    );
                  }
                }}
                className="group w-full rounded-3xl bg-white border border-orange-100/90 shadow-md overflow-hidden flex flex-col cursor-grab active:cursor-grabbing"
              >
                <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-stone-950/75 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-amber-300">
                    {currentItem.tag}
                  </span>
                </div>

                <div className="p-5 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold tracking-wide text-orange-600 uppercase">
                      {currentItem.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-stone-600 leading-relaxed break-words">
                      {currentItem.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Indicator Dots Only */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {excellenceItems.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Card ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? "w-5 bg-orange-600"
                      : "w-2 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop Balanced 4-Card Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {excellenceItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group rounded-3xl bg-white border border-orange-100/90 shadow-md hover:shadow-xl hover:border-orange-300 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 rounded-full bg-stone-950/75 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-amber-300">
                  {item.tag}
                </span>
              </div>

              <div className="p-5 sm:p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold tracking-wide text-orange-600 uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}