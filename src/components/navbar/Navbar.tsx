"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { BRAND_CONTACT, NAV_LINKS } from "@/data/siteData";
import MobileMenu from "./MobileMenu";

const ANNOUNCEMENTS = [
  "Fast local delivery and direct restaurant ordering active across partner zones.",
  "0% commission direct ordering for partner restaurants and cloud kitchens.",
  "Instant table booking and repeat guest rewards now live.",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightHeader = scrolled || pathname !== "/";

  const handleNextAnnouncement = () => {
    setAnnouncementIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        {/* Top Announcement Bar */}
        <div className="border-b border-orange-500/20 bg-stone-950/95 px-4 py-2 text-xs text-stone-200 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="shrink-0 rounded-full border border-orange-400/40 bg-orange-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-amber-300">
                Live Service
              </span>
              <p className="truncate text-stone-300">
                {ANNOUNCEMENTS[announcementIdx]}
              </p>
            </div>

            <button
              type="button"
              onClick={handleNextAnnouncement}
              className="shrink-0 cursor-pointer font-semibold text-amber-300 transition-colors hover:text-orange-400"
            >
              Next update →
            </button>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`transition-all duration-300 ${
            isLightHeader
              ? "bg-[#FFFBF5]/95 backdrop-blur-md shadow-sm border-b border-orange-100 py-3"
              : "bg-gradient-to-b from-stone-950/85 via-stone-950/55 to-transparent py-3.5"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Brand logo */}
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-2.5 cursor-pointer"
            >
              <img
                src="/images/logo.png"
                alt={`${BRAND_CONTACT.brandName} Logo`}
                className="h-9 sm:h-10 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop navigation links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8">
              {NAV_LINKS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 hover:text-orange-500 hover:-translate-y-0.5 ${
                      active
                        ? "text-orange-500 underline underline-offset-8 decoration-2"
                        : isLightHeader
                        ? "text-stone-700"
                        : "text-stone-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/login"
                className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2 text-sm font-bold text-white whitespace-nowrap shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Login
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`md:hidden rounded-xl p-2.5 cursor-pointer transition-all duration-200 active:scale-95 ${
                isLightHeader
                  ? "text-stone-800 hover:bg-orange-50"
                  : "text-white hover:bg-white/15"
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}