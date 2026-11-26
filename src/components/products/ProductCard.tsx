"use client";

import React, { useEffect, useState } from "react";
import type { ProductItem } from "@/data/productsData";

interface ProductCardProps {
  product: ProductItem;
}

const formatPrice = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;

const getCategoryFallbackIcon = (category: ProductItem["category"]) => {
  if (category === "Starter Kits") return "🚀";
  if (category === "POS & Hardware") return "🖥️";
  return "📈";
};

export default function ProductCard({ product }: ProductCardProps) {
  const firstAvailable =
    product.variants.find((variant) => variant.inStock) ??
    product.variants[0];

  const [selectedVariantId, setSelectedVariantId] = useState(
    firstAvailable?.id ?? ""
  );
  const [imageError, setImageError] = useState(false);

  const activeVariant =
    product.variants.find((variant) => variant.id === selectedVariantId) ??
    firstAvailable;

  const activeImageSrc = activeVariant?.image || product.image;

  useEffect(() => {
    setImageError(false);
  }, [activeImageSrc]);

  const availableVariants = product.variants.filter(
    (variant) => variant.inStock
  );

  const startingPrice =
    availableVariants.length > 0
      ? Math.min(...availableVariants.map((variant) => variant.price))
      : Math.min(...product.variants.map((variant) => variant.price));

  const allOutOfStock = availableVariants.length === 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/60">
      {/* Product Image Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50/60 to-neutral-100">
        {!imageError && activeImageSrc ? (
          <img
            src={activeImageSrc}
            alt={product.imageAlt}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm ring-1 ring-orange-100">
              {getCategoryFallbackIcon(product.category)}
            </div>
            <span className="text-xs font-semibold text-neutral-500">
              {product.name}
            </span>
          </div>
        )}

        {/* Top Overlay Badges */}
        <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between gap-2 sm:inset-x-4 sm:top-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-orange-700 shadow-sm ring-1 ring-orange-100 backdrop-blur-sm">
              {product.category}
            </span>

            {product.badge && (
              <span className="rounded-full bg-orange-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          <span className="flex shrink-0 items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-neutral-800 shadow-sm ring-1 ring-neutral-200/80 backdrop-blur-sm">
            <span className="text-amber-500">★</span>
            {product.rating.toFixed(1)}
            <span className="font-normal text-neutral-400">/5</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h2 className="text-lg font-extrabold leading-snug text-neutral-900 sm:text-xl">
          {product.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-neutral-500">
          {product.description}
        </p>

        {/* Key Highlights */}
        {product.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {product.highlights.slice(0, 3).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs font-medium text-neutral-600"
              >
                <span className="mt-0.5 text-orange-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Plan / Variant Selector */}
        <div className="mt-5">
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Choose Your Plan
            </p>

            <span className="text-[11px] font-medium text-neutral-400">
              {product.variants.length} Options
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {product.variants.map((variant) => {
              const isSelected = variant.id === activeVariant?.id;

              return (
                <button
                  key={variant.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedVariantId(variant.id)}
                  className={`flex min-h-12 flex-col items-center justify-center rounded-xl border px-2.5 py-2 text-center text-xs font-bold transition active:scale-[0.99] ${
                    isSelected
                      ? "border-orange-600 bg-orange-600 text-white shadow-md shadow-orange-200"
                      : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-orange-300 hover:bg-orange-50"
                  }`}
                >
                  <span className="leading-tight">{variant.label}</span>
                  {!variant.inStock && (
                    <span
                      className={`mt-1 text-[9px] font-semibold ${
                        isSelected ? "text-orange-100" : "text-rose-500"
                      }`}
                    >
                      Out of stock
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing & Stock Footer */}
        <div className="mt-auto pt-6">
          <div className="border-t border-dashed border-neutral-200 pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
              Selected Plan Price
            </p>

            <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
              <span className="text-2xl font-black tracking-tight text-neutral-900">
                {activeVariant ? formatPrice(activeVariant.price) : "N/A"}
              </span>

              {activeVariant && (
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                    activeVariant.inStock
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  {activeVariant.inStock ? "● In Stock" : "● Out of Stock"}
                </span>
              )}
            </div>

            {activeVariant && (
              <p className="mt-2 text-xs text-neutral-400">
                SKU:{" "}
                <span className="font-semibold text-neutral-600">
                  {activeVariant.sku}
                </span>
              </p>
            )}

            <div className="mt-4 flex items-center justify-between rounded-xl bg-orange-50/80 px-3 py-2.5">
              <span className="text-xs font-medium text-neutral-600">
                Starting from
              </span>
              <span className="text-sm font-extrabold text-orange-700">
                {formatPrice(startingPrice)}
              </span>
            </div>

            {allOutOfStock && (
              <p className="mt-3 text-center text-xs font-semibold text-rose-600">
                Currently unavailable
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}