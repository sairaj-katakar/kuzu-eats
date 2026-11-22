"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "./testimonialsData";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const handleBeforeInit = (swiper: SwiperType) => {
    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevEl;
      swiper.params.navigation.nextEl = nextEl;
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-[#FFF5EA] to-[#FFFBF5] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 mb-3">
            Partner Stories
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Real Feedback from Our{" "}
            <span className="text-orange-600">Partner Restaurants</span>
          </h2>
          <p className="mt-3 text-base text-stone-600">
            See how restaurant owners are growing faster with Kuzueats.
          </p>
        </motion.div>

        {/* Responsive Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4200,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".kuzu-swiper-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl,
            nextEl,
          }}
          onBeforeInit={handleBeforeInit}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!px-1"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="h-full rounded-3xl bg-white p-6 sm:p-7 shadow-lg shadow-orange-950/5 border border-orange-100 flex flex-col justify-between hover:border-orange-300 transition">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={item.avatar}
                        alt={item.restaurant}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-200"
                      />
                      <div>
                        <h3 className="text-base font-extrabold text-stone-900">
                          {item.restaurant}
                        </h3>
                        <p className="text-xs text-stone-500">
                          {item.ownerName} • {item.location}
                        </p>
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-orange-200 shrink-0" />
                  </div>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-orange-50 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    {item.metricBadge}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Compact bottom controls: small arrows + pagination dots */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <button
            ref={setPrevEl}
            type="button"
            aria-label="Previous testimonial slide"
            className="h-8 w-8 rounded-full border border-orange-200 bg-white text-stone-700 hover:bg-orange-600 hover:border-orange-600 hover:text-white inline-flex items-center justify-center shadow-xs transition cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="kuzu-swiper-pagination flex items-center justify-center gap-1.5 w-auto!" />

          <button
            ref={setNextEl}
            type="button"
            aria-label="Next testimonial slide"
            className="h-8 w-8 rounded-full border border-orange-200 bg-white text-stone-700 hover:bg-orange-600 hover:border-orange-600 hover:text-white inline-flex items-center justify-center shadow-xs transition cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .kuzu-swiper-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d6c5b8;
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.2s ease;
          margin: 0 !important;
        }
        .kuzu-swiper-pagination .swiper-pagination-bullet-active {
          width: 22px;
          background: #ea580c;
        }
      `}</style>
    </section>
  );
}