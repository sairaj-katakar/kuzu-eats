"use client";

import React from "react";
import Link from "next/link";
import { Globe, Camera, Share2 } from "lucide-react";

const supportLinks = [
  { label: "Terms & Conditions", href: "/contact" },
  { label: "Privacy Policy", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0D0C] text-stone-300 border-t border-stone-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-stone-800">
          {/* Brand summary */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="group inline-flex items-center focus:outline-none"
              aria-label="Kuzu Eats Home"
            >
              <div className="rounded-2xl bg-stone-900/90 border border-stone-700/70 px-3 py-2 shadow-md group-hover:border-orange-500/60 transition">
                <img
                  src="/images/logo.png"
                  alt="Kuzu Eats Logo"
                  className="h-14 sm:h-16 w-auto max-w-[180px] object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Kuzueats empowers restaurants to take control of their online
              orders, boost sales, and build lasting customer relationships —
              100% commission-free.
            </p>
          </div>

          {/* Support links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-orange-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App badges and social links */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get the App
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl border border-stone-700 bg-stone-900 px-4 py-2.5 text-left hover:border-orange-500/60 transition"
              >
                <span className="block text-[10px] uppercase tracking-wider text-stone-400">
                  Get it on
                </span>
                <span className="text-xs font-bold text-white">Google Play</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-stone-700 bg-stone-900 px-4 py-2.5 text-left hover:border-orange-500/60 transition"
              >
                <span className="block text-[10px] uppercase tracking-wider text-stone-400">
                  Download on the
                </span>
                <span className="text-xs font-bold text-white">App Store</span>
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/contact"
                aria-label="Community"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-300 hover:bg-orange-500 hover:text-white transition"
              >
                <Globe className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                aria-label="Gallery"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-300 hover:bg-orange-500 hover:text-white transition"
              >
                <Camera className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                aria-label="Share"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-300 hover:bg-orange-500 hover:text-white transition"
              >
                <Share2 className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-xs sm:text-sm text-stone-500">
          © 2026 Kuzueats. All rights reserved.
        </div>
      </div>
    </footer>
  );
}