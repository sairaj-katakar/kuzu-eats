"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { BRAND_CONTACT } from "@/data/siteData";

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
          {/* Brand summary & direct contact */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="group inline-flex items-center focus:outline-none"
              aria-label="Kuzu Eats Home"
            >
              <div className="rounded-2xl bg-stone-900/90 border border-stone-700/70 px-3 py-2 shadow-md group-hover:border-orange-500/60 transition-all duration-300">
                <img
                  src="/images/logo.png"
                  alt="Kuzu Eats Logo"
                  className="h-14 sm:h-16 w-auto max-w-[180px] object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              {BRAND_CONTACT.brandName} empowers restaurants to take control of
              their online orders, boost sales, and build lasting customer
              relationships — 100% commission-free.
            </p>

            <div className="space-y-2 pt-1 text-xs sm:text-sm text-stone-300">
              <a
                href={BRAND_CONTACT.phoneHref}
                className="flex items-center gap-2 text-stone-300 hover:text-orange-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-orange-500 shrink-0" />
                <span>{BRAND_CONTACT.phone}</span>
              </a>
              <a
                href={BRAND_CONTACT.emailHref}
                className="flex items-center gap-2 text-stone-300 hover:text-orange-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-orange-500 shrink-0" />
                <span>{BRAND_CONTACT.email}</span>
              </a>
            </div>
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
                    className="text-stone-400 hover:text-orange-400 transition-colors duration-200"
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
                href="https://play.google.com/store/apps/details?id=com.kuzueats.kuzueats_delivery&utm_source=chatgpt.com"
                className="rounded-xl border border-stone-700 bg-stone-900 px-4 py-2.5 text-left hover:border-orange-500/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="block text-[10px] uppercase tracking-wider text-stone-400">
                  Get it on
                </span>
                <span className="text-xs font-bold text-white">Google Play</span>
              </Link>
              <Link
                href="https://apps.apple.com/bt/app/kuzu-eats/id6759248288?utm_source=chatgpt.com"
                className="rounded-xl border border-stone-700 bg-stone-900 px-4 py-2.5 text-left hover:border-orange-500/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="block text-[10px] uppercase tracking-wider text-stone-400">
                  Download on the
                </span>
                <span className="text-xs font-bold text-white">App Store</span>
              </Link>
            </div>

            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                Follow {BRAND_CONTACT.brandName}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {BRAND_CONTACT.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-stone-800/90 border border-stone-700/80 px-3 py-1.5 text-xs font-medium text-stone-200 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200"
                  >
                    {social.name} — {social.handle}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-xs sm:text-sm text-stone-500">
          © 2026 {BRAND_CONTACT.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}