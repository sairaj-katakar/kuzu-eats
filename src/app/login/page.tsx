"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setSubmittedMessage("Please enter both your email and password.");
      return;
    }
    setSubmittedMessage(
      `Welcome back! Signed in as ${email.trim()} (${rememberMe ? "Session saved" : "Single session"}).`
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFFBF5] via-[#FFF6EB] to-[#FDEBD7] px-4 py-8 sm:px-6 lg:px-8 flex flex-col justify-between">
      {/* Top Bar */}
      <div className="mx-auto w-full max-w-5xl flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-stone-700 shadow-xs hover:border-orange-400 hover:text-orange-700 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-orange-100/80 px-3.5 py-1.5 text-xs font-bold text-orange-800">
          <ShieldCheck className="h-3.5 w-3.5 text-orange-600" />
          <span>0% Commission Partner Portal</span>
        </span>
      </div>

      {/* Centered Login Card */}
      <div className="mx-auto my-8 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-orange-100 bg-white p-6 sm:p-8 shadow-xl shadow-orange-950/5"
        >
          {/* Brand Logo & Heading */}
          <div className="text-center mb-7">
            <Link href="/" className="inline-flex items-center justify-center mb-4">
              <img
                src="/images/logo.png"
                alt="Kuzu Eats Logo"
                className="h-16 sm:h-20 w-auto max-w-[200px] object-contain"
              />
            </Link>

            <h1 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-stone-900">
              Restaurant Login
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-500">
              Sign in to manage direct orders, menus, and customer growth.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Email Field */}
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs sm:text-sm font-bold text-stone-800 mb-1.5"
              >
                Email
              </label>
              <div className="relative flex items-center">
                <Mail className="h-4 w-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                  className="w-full rounded-xl border border-stone-200 bg-[#FFFDF9] pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="login-password"
                  className="block text-xs sm:text-sm font-bold text-stone-800"
                >
                  Password
                </label>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative flex items-center">
                <Lock className="h-4 w-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full rounded-xl border border-stone-200 bg-[#FFFDF9] pl-10 pr-11 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 text-stone-400 hover:text-stone-700 p-1 transition cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-stone-300 text-orange-600 focus:ring-orange-500"
                />
                <span>Remember this device</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/25 hover:brightness-105 active:scale-[0.99] transition cursor-pointer"
            >
              <span>Sign In to Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {submittedMessage && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs sm:text-sm font-medium text-emerald-800">
                {submittedMessage}
              </div>
            )}
          </form>

          {/* Footer Link */}
          <div className="mt-6 pt-5 border-t border-stone-100 text-center text-xs sm:text-sm text-stone-600">
            New to Kuzueats?{" "}
            <Link
              href="/contact"
              className="font-bold text-orange-600 hover:text-orange-700 transition"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <p className="text-center text-xs text-stone-500">
        © 2026 Kuzueats. Built for independent restaurants &amp; cafés.
      </p>
    </main>
  );
}