import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ProductsCatalog from "@/components/products/ProductsCatalog";
import { Sparkles } from "lucide-react";

const features = [
  {
    icon: "🛒",
    title: "Direct Ordering",
    subtitle: "Simplify online orders",
  },
  {
    icon: "🖥️",
    title: "Smart POS Tools",
    subtitle: "Manage restaurant operations",
  },
  {
    icon: "📈",
    title: "Business Growth",
    subtitle: "Build customer loyalty",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#fffdfb] text-neutral-900 scroll-smooth">
      <Navbar />

      <main>
        {/* Products Hero Section */}
        <section className="relative isolate overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50">
          {/* Background Decorations */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-200/30 blur-3xl animate-pulse sm:h-72 sm:w-72" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-amber-200/30 blur-3xl animate-pulse sm:h-72 sm:w-72" />

          {/* Hero Content */}
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-12 pt-32 text-center sm:px-6 sm:pb-16 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/95 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-700 shadow-sm transition-all duration-300 hover:border-orange-300">
              <Sparkles className="h-4 w-4 shrink-0 text-orange-600" />
              <span>KuzuEats Solutions</span>
            </span>

            {/* Main Heading */}
            <h1 className="mx-auto mt-5 w-full max-w-4xl text-[32px] font-black leading-[1.15] tracking-tight text-neutral-950 sm:mt-7 sm:text-5xl sm:leading-tight lg:text-6xl">
              Smart Solutions for
              <span className="mt-1 block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Growing Restaurants
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl px-1 text-[13px] leading-7 text-neutral-600 sm:mt-6 sm:px-0 sm:text-base sm:leading-8">
              Discover powerful restaurant tools, smart POS hardware,
              direct ordering solutions, and growth packages designed
              to take your restaurant business forward.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row">
              <a
                href="#products-catalog"
                className="group inline-flex min-h-[50px] w-full max-w-[340px] items-center justify-center gap-2 rounded-xl bg-orange-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl active:scale-95 sm:w-auto sm:min-w-[210px]"
              >
                <span>Explore Products</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <div className="flex min-h-[50px] w-full max-w-[340px] items-center justify-center gap-2 rounded-xl border border-orange-100 bg-white/90 px-5 py-3 text-xs font-semibold text-neutral-700 shadow-2xs transition-all duration-300 hover:border-orange-200 sm:w-auto sm:text-sm">
                <span className="text-amber-500">★</span>
                <span>Smart Restaurant Solutions</span>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="mx-auto mt-7 grid w-full max-w-3xl grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex min-w-0 flex-col items-center justify-center rounded-xl border border-orange-100 bg-white/90 px-2 py-4 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-lg sm:rounded-2xl sm:p-5"
                >
                  <div className="text-xl transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="mt-2 break-words text-[11px] font-extrabold leading-tight text-neutral-900 transition-colors group-hover:text-orange-600 sm:text-sm">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-[10px] leading-4 text-neutral-500 sm:mt-2 sm:text-xs sm:leading-5">
                    {feature.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Catalog */}
        <div className="transition-all duration-500">
          <ProductsCatalog />
        </div>
      </main>

      <Footer />
    </div>
  );
}