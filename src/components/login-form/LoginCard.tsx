"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, ArrowLeft, Lock, Mail } from "lucide-react";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    setStatusMessage(
      `Partner sign-in request prepared for ${email}. Connect your authentication API to complete live login.`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-md rounded-3xl bg-white p-7 sm:p-9 shadow-2xl shadow-stone-900/10 border border-orange-100"
    >
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-orange-600 transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Brand logo & heading */}
      <div className="text-center mb-7">
        <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25">
          <UtensilsCrossed className="h-7 w-7" />
        </div>
        <p className="text-xl font-extrabold tracking-tight text-stone-900">
          Kuzu <span className="text-red-600">Eats</span>
        </p>
        <h1 className="mt-2 text-lg sm:text-xl font-bold text-stone-800">
          Restaurant Login
        </h1>
      </div>

      <form onSubmit={handleSignIn} className="space-y-5">
        <div>
          <label
            htmlFor="login-email"
            className="block text-sm font-semibold text-stone-700 mb-1.5"
          >
            Email
          </label>
          <div className="relative">
            <Mail className="h-4 w-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="login-email"
              type="email"
              required
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-[#FFFBF5] pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/15 transition"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="login-password"
            className="block text-sm font-semibold text-stone-700 mb-1.5"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="h-4 w-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="login-password"
              type="password"
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-[#FFFBF5] pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/15 transition"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="inline-flex items-center gap-2 text-sm text-stone-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-stone-300 text-red-600 focus:ring-red-500"
            />
            <span>Remember me</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-red-500 to-rose-600 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/25 hover:opacity-95 active:scale-[0.99] transition"
        >
          SIGN IN
        </button>

        {statusMessage && (
          <p className="rounded-xl bg-orange-50 border border-orange-200 p-3 text-xs text-stone-700">
            {statusMessage}
          </p>
        )}
      </form>
    </motion.div>
  );
}