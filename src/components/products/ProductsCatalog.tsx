"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { productsData } from "@/data/productsData";
import ProductCard from "./ProductCard";

const CATEGORIES = [
  "All",
  "Starter Kits",
  "POS & Hardware",
  "Growth Packs",
] as const;

const MIN_PRICE = 1000;
const MAX_PRICE = 15000;

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

const getStartingPrice = (
  variants: (typeof productsData)[number]["variants"]
) => {
  const available = variants.filter((variant) => variant.inStock);
  const prices = (available.length > 0 ? available : variants).map(
    (variant) => variant.price
  );

  return prices.length > 0 ? Math.min(...prices) : 0;
};

export default function ProductsCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const list = productsData.filter((product) => {
      const matchesSearch =
        query === "" ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.highlights.some((item) => item.toLowerCase().includes(query)) ||
        product.variants.some(
          (variant) =>
            variant.label.toLowerCase().includes(query) ||
            variant.sku.toLowerCase().includes(query)
        );

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchingVariants = product.variants.filter(
        (variant) =>
          variant.price <= maxPrice && (!inStockOnly || variant.inStock)
      );

      const matchesPrice = matchingVariants.length > 0;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    const sorted = [...list];

    if (sortBy === "price-asc") {
      sorted.sort(
        (a, b) => getStartingPrice(a.variants) - getStartingPrice(b.variants)
      );
    } else if (sortBy === "price-desc") {
      sorted.sort(
        (a, b) => getStartingPrice(b.variants) - getStartingPrice(a.variants)
      );
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [searchQuery, selectedCategory, maxPrice, inStockOnly, sortBy]);

  const activeFilterCount = [
    searchQuery.trim() !== "",
    selectedCategory !== "All",
    maxPrice !== MAX_PRICE,
    inStockOnly,
    sortBy !== "featured",
  ].filter(Boolean).length;

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setMaxPrice(MAX_PRICE);
    setInStockOnly(false);
    setSortBy("featured");
  };

  return (
    <section
      id="products-catalog"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8"
    >
      {/* Catalog Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.45 }}
        className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
            Explore Our Collection
          </span>

          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl">
            Find the Right Solution
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
            Explore smart solutions designed to simplify restaurant operations and
            grow your business.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-full bg-emerald-50/80 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:self-auto sm:bg-transparent sm:p-0 sm:text-sm sm:font-medium sm:text-neutral-500">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span>Updated Product Pricing</span>
        </div>
      </motion.div>

      {/* Filter Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6"
      >
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Search */}
          <div className="lg:col-span-1">
            <label
              htmlFor="product-search"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-600"
            >
              Search Products
            </label>

            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-neutral-400">
                ⌕
              </span>

              <input
                id="product-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, features, SKU..."
                className="min-h-11 w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pl-10 pr-4 text-sm text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <label
                htmlFor="product-price"
                className="text-xs font-bold uppercase tracking-wider text-neutral-600"
              >
                Maximum Starting Price
              </label>

              <span className="text-sm font-extrabold text-orange-600">
                {formatPrice(maxPrice)}
              </span>
            </div>

            <input
              id="product-price"
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={500}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="mt-2 h-6 w-full cursor-pointer accent-orange-600"
            />

            <div className="flex justify-between text-[11px] font-medium text-neutral-400">
              <span>{formatPrice(MIN_PRICE)}</span>
              <span>{formatPrice(MAX_PRICE)}+</span>
            </div>
          </div>

          {/* Sorting */}
          <div className="md:col-span-2 lg:col-span-1">
            <label
              htmlFor="product-sort"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-600"
            >
              Sort Products
            </label>

            <select
              id="product-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="min-h-11 w-full cursor-pointer rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm font-medium text-neutral-800 outline-none transition-all duration-200 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            >
              <option value="featured">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-5 border-t border-neutral-100 pt-4 sm:mt-6 sm:pt-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-600">
            Browse Categories
          </p>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-10 shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 active:scale-95 sm:text-sm ${
                    active
                      ? "bg-orange-600 text-white shadow-md shadow-orange-200"
                      : "border border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Filters */}
        <div className="mt-4 flex flex-col gap-3 border-t border-neutral-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex min-h-10 cursor-pointer items-center gap-3 text-sm font-medium text-neutral-700">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="h-4 w-4 cursor-pointer rounded accent-orange-600"
            />
            <span>Show available products only</span>
          </label>

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <span className="text-xs font-medium text-neutral-500">
              {activeFilterCount} active filters
            </span>

            <button
              type="button"
              onClick={handleReset}
              className="min-h-10 cursor-pointer rounded-lg border border-orange-200 px-4 py-2 text-xs font-bold text-orange-700 transition-all duration-200 hover:bg-orange-50 active:scale-95"
            >
              Reset Filters ↺
            </button>
          </div>
        </div>
      </motion.div>

      {/* Results Information */}
      <div className="mb-5 mt-7 flex flex-wrap items-center justify-between gap-3 sm:mt-8">
        <div>
          <h3 className="text-lg font-extrabold text-neutral-900">
            Our Products
          </h3>

          <p className="mt-1 text-xs text-neutral-500">
            Showing {filteredProducts.length} of {productsData.length} products
          </p>
        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
          {filteredProducts.length} Results
        </span>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="h-full"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-dashed border-orange-200 bg-orange-50/40 px-5 py-14 text-center sm:py-20"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
            🔍
          </div>

          <h3 className="mt-5 text-xl font-extrabold text-neutral-900">
            No Products Found
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-neutral-500">
            We couldn&apos;t find any products matching your current filters.
            Try changing your search or price range.
          </p>

          <button
            type="button"
            onClick={handleReset}
            className="mt-6 min-h-11 cursor-pointer rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all duration-200 hover:bg-orange-700 active:scale-95"
          >
            Clear All Filters
          </button>
        </motion.div>
      )}
    </section>
  );
}