"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import Footer from "@/components/footer/Footer";
import HomeGrowthShowcase from "@/components/hero/HomeGrowthShowcase";
import HomeFeatures from "@/components/hero/HomeFeatures";
import {
  ANNOUNCEMENTS,
  POPULAR_CATEGORIES,
  FEATURED_RESTAURANTS,
  SPECIAL_OFFERS,
  HOW_IT_WORKS_STEPS,
  WHY_CHOOSE_ROWS,
  DELIVERY_COVERAGE,
  ACHIEVEMENT_STATS,
  LANDING_FAQS,
  BRAND_CONTACT,
} from "@/data/siteData";

export default function HomePage() {
  const [activeAnnouncementIndex, setActiveAnnouncementIndex] = useState(0);
  const currentAnnouncement = ANNOUNCEMENTS[activeAnnouncementIndex];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF5] text-[#1C1917] scroll-smooth">
      {/* 1. Announcement Bar & Navigation Menu */}
      <div className="bg-stone-900 text-amber-50 text-xs sm:text-sm py-2 px-4 border-b border-stone-800">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 truncate">
            <span className="inline-flex items-center rounded-full bg-orange-500/20 border border-orange-400/40 px-2.5 py-0.5 text-[11px] font-semibold text-orange-300">
              {currentAnnouncement.badge}
            </span>
            <p className="truncate text-stone-200 transition-all duration-300">
              {currentAnnouncement.text}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              setActiveAnnouncementIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length)
            }
            className="shrink-0 text-[11px] font-semibold text-amber-300 hover:text-orange-400 transition-colors cursor-pointer"
          >
            Next update →
          </button>
        </div>
      </div>

      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Banner & Quick App Download Strip */}
        <div className="transition-all duration-500">
          <HeroSection />
        </div>

        <section className="bg-amber-50/70 border-y border-orange-100 py-4 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="font-medium text-stone-700">
              Order faster on mobile or partner directly with{" "}
              <span className="font-bold text-orange-600">{BRAND_CONTACT.brandName}</span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#mobile-app"
                className="rounded-full bg-stone-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-orange-600 transition-colors duration-300"
              >
                Get iOS &amp; Android App
              </a>
              <Link
                href="/about"
                className="rounded-full bg-white border border-orange-200 px-3.5 py-1.5 text-xs font-semibold text-stone-800 hover:border-orange-400 transition-colors duration-300"
              >
                Restaurant &amp; Rider Partners
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Popular Food Categories */}
        <section
          id="food-categories"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFBF5]"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Explore Flavors
                </span>
                <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-stone-900">
                  Popular Food Categories
                </h2>
              </div>
              <p className="text-sm text-stone-600 max-w-md">
                Discover freshly prepared meals across everyday favorites, bowls, snacks, and desserts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {POPULAR_CATEGORIES.map((category) => (
                <div
                  key={category.id}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-44 w-full overflow-hidden bg-stone-100">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {category.itemCountLabel}
                      </p>
                    </div>
                    <a
                      href="#featured-restaurants"
                      className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300"
                    >
                      Browse →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Featured Restaurants */}
        <section
          id="featured-restaurants"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50/40 border-y border-stone-200/60"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Trusted Kitchens
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-stone-900">
                Featured Restaurants
              </h2>
              <p className="mt-2 text-sm text-stone-600 max-w-xl">
                Handpicked kitchens known for consistent taste, reliable prep speed, and direct order care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FEATURED_RESTAURANTS.map((restaurant) => (
                <article
                  key={restaurant.id}
                  className="group rounded-2xl bg-white border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={restaurant.imageUrl}
                      alt={restaurant.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-stone-900/85 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-amber-300">
                      {restaurant.badge}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-bold text-stone-900">
                          {restaurant.name}
                        </h3>
                        <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-xs font-bold text-emerald-700">
                          ★ {restaurant.rating}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 mt-1">{restaurant.cuisine}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-600">
                      <span>Est. {restaurant.deliveryTime}</span>
                      <a
                        href="#mobile-app"
                        className="font-bold text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        Order Now →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Special Offers & Promotions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFBF5]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Deals &amp; Savings
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-stone-900">
                Special Offers &amp; Promotions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SPECIAL_OFFERS.map((offer) => (
                <div
                  key={offer.id}
                  className="rounded-2xl border border-orange-200/90 bg-gradient-to-br from-white to-amber-50/60 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-orange-600 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
                      {offer.code}
                    </span>
                    <span className="text-xs font-semibold text-stone-500">
                      {offer.validLabel}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-stone-900">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Existing Growth Showcase + How Kuzu Eats Works */}
        <HomeGrowthShowcase />

        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-amber-50/50 border-y border-stone-200/60">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Simple Process
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900">
                How Kuzu Eats Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-sm hover:border-orange-300 transition-all duration-300"
                >
                  <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    STEP {step.stepNumber}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Existing Home Features + Why Choose Kuzu Eats Comparison */}
        <HomeFeatures />

        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FFFBF5]">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                The Smarter Choice
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900">
                Why Choose Kuzu Eats
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-700">
                    <th className="py-3.5 px-5 font-bold">Capability</th>
                    <th className="py-3.5 px-5 font-semibold text-stone-500">
                      Other Platforms
                    </th>
                    <th className="py-3.5 px-5 font-bold text-orange-600">
                      Kuzu Eats
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {WHY_CHOOSE_ROWS.map((row) => (
                    <tr
                      key={row.feature}
                      className="hover:bg-amber-50/40 transition-colors"
                    >
                      <td className="py-3.5 px-5 font-semibold text-stone-900">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-5 text-stone-500">
                        {row.otherPlatforms}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-emerald-700">
                        ✓ {row.kuzuEats}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. Delivery Coverage & Operating Hours */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-amber-50/40 border-y border-stone-200/60">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Service Availability
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900">
                Delivery Coverage &amp; Operating Hours
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DELIVERY_COVERAGE.map((zone) => (
                <div
                  key={zone.zoneName}
                  className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-stone-900">
                      {zone.zoneName}
                    </h3>
                    <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-bold text-orange-700">
                      {zone.eta}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-stone-600">{zone.areas}</p>
                  <p className="mt-3 pt-3 border-t border-stone-100 text-xs font-semibold text-stone-800">
                    Hours: {zone.hours}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Achievements & Customer Testimonials */}
        <section className="pt-14 pb-4 px-4 sm:px-6 lg:px-8 bg-[#FFFBF5]">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ACHIEVEMENT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white border border-stone-200/80 p-5 text-center shadow-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-orange-600">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-bold text-stone-900">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-stone-500">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <TestimonialsCarousel />

        {/* 10. Mobile App Download Section */}
        <section
          id="mobile-app"
          className="py-14 px-4 sm:px-6 lg:px-8 bg-amber-50/60 border-y border-stone-200/60"
        >
          <div className="mx-auto max-w-6xl rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Mobile App Experience
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-stone-900">
                Get the Kuzu Eats App for Faster Ordering
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                Browse menus, apply promo codes like KUZU25, track live delivery, and reorder favorite dishes in one tap.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="https://play.google.com/store/apps/details?id=com.kuzueats.kuzueats_delivery&utm_source=chatgpt.com"
                className="rounded-xl bg-stone-900 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-stone-800 transition-colors"
              >
                Download on iOS
              </Link>
              <Link
                href="https://apps.apple.com/bt/app/kuzu-eats/id6759248288?utm_source=chatgpt.com"
                className="rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:brightness-110 transition-all"
              >
                Get on Google Play
              </Link>
            </div>
          </div>
        </section>

        {/* 11. Frequently Asked Questions */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FFFBF5]">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Quick Answers
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {LANDING_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white border border-stone-200/80 p-5 shadow-sm"
                >
                  <h3 className="text-base font-bold text-stone-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Home-to-About / Contact Callout Banner */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FFFBF5]">
          <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900 to-stone-800 px-6 py-10 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Ready to Grow Commission-Free?
              </p>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold">
                See how Kuzueats protects your restaurant margins
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:brightness-110 transition"
              >
                <span className="font-bold">Contact Us</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}