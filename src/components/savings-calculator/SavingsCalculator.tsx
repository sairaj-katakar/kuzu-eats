"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SavingsCalculator() {
  const [monthlyOrders, setMonthlyOrders] = useState<number>(600);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(450);
  const [commissionRate, setCommissionRate] = useState<number>(22);

  const calculations = useMemo(() => {
    const monthlyGrossRevenue = monthlyOrders * avgOrderValue;
    const monthlyCommissionLost = Math.round(
      (monthlyGrossRevenue * commissionRate) / 100
    );
    const annualSavings = monthlyCommissionLost * 12;

    return {
      monthlyGrossRevenue,
      monthlyCommissionLost,
      annualSavings,
    };
  }, [monthlyOrders, avgOrderValue, commissionRate]);

  const formatINR = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <section
      id="calculator"
      className="relative py-16 sm:py-20 bg-gradient-to-br from-[#FFF5EA] via-[#FFFBF5] to-orange-50/60 border-y border-orange-100/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 mb-3">
            <Calculator className="h-3.5 w-3.5" />
            Interactive Profit Estimator
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-stone-900">
            See How Much You Save With{" "}
            <span className="text-orange-600">0% Commission</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Adjust your restaurant metrics below to estimate how much extra
            profit stays in your kitchen with Kuzueats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls card */}
          <div className="lg:col-span-7 rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-orange-950/5 border border-orange-100 space-y-7">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="monthly-orders"
                  className="text-sm font-bold text-stone-800"
                >
                  Monthly Online Orders
                </label>
                <span className="rounded-lg bg-orange-50 px-3 py-1 text-sm font-extrabold text-orange-700">
                  {monthlyOrders.toLocaleString("en-IN")} orders
                </span>
              </div>
              <input
                id="monthly-orders"
                type="range"
                min={100}
                max={5000}
                step={50}
                value={monthlyOrders}
                onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer h-2 bg-orange-100 rounded-lg"
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>100</span>
                <span>2,500</span>
                <span>5,000</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="avg-order-value"
                  className="text-sm font-bold text-stone-800"
                >
                  Average Order Value (AOV)
                </label>
                <span className="rounded-lg bg-orange-50 px-3 py-1 text-sm font-extrabold text-orange-700">
                  {formatINR(avgOrderValue)}
                </span>
              </div>
              <input
                id="avg-order-value"
                type="range"
                min={150}
                max={2500}
                step={50}
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer h-2 bg-orange-100 rounded-lg"
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>₹150</span>
                <span>₹1,300</span>
                <span>₹2,500</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="commission-rate"
                  className="text-sm font-bold text-stone-800"
                >
                  Current App Commission (%)
                </label>
                <span className="rounded-lg bg-red-50 px-3 py-1 text-sm font-extrabold text-red-600">
                  {commissionRate}%
                </span>
              </div>
              <input
                id="commission-rate"
                type="range"
                min={10}
                max={35}
                step={1}
                value={commissionRate}
                onChange={(e) => setCommissionRate(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer h-2 bg-red-100 rounded-lg"
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>10%</span>
                <span>22%</span>
                <span>35%</span>
              </div>
            </div>
          </div>

          {/* Results summary card */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 p-6 sm:p-8 text-white shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-300 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Estimated Savings Breakdown
              </div>

              <p className="text-xs uppercase tracking-wider text-stone-400">
                Potential Annual Profit Saved
              </p>
              <div className="mt-1 flex items-center gap-1 text-3xl sm:text-4xl font-extrabold text-amber-400">
                <IndianRupee className="h-7 w-7 shrink-0" />
                <span>{calculations.annualSavings.toLocaleString("en-IN")}</span>
              </div>

              <div className="mt-6 space-y-3 border-t border-stone-700/80 pt-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-stone-300">Monthly Order Volume</span>
                  <span className="font-bold text-white">
                    {formatINR(calculations.monthlyGrossRevenue)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-300">Monthly Savings</span>
                  <span className="font-bold text-emerald-400">
                    +{formatINR(calculations.monthlyCommissionLost)} / mo
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:opacity-95 transition"
            >
              <span>Claim Your 0% Commission Setup</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}