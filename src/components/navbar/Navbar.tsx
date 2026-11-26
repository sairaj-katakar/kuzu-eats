"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import MobileMenu from "./MobileMenu";


const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightHeader = scrolled || pathname !== "/";

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isLightHeader
            ? "bg-[#FFFBF5]/95 backdrop-blur-md shadow-sm border-b border-orange-100 py-3"
            : "bg-gradient-to-b from-stone-950/75 via-stone-950/40 to-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Custom brand logo image */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0">
            <img
              src={siteConfig.logo}
              alt={`${siteConfig.brandName} Logo`}
              className="h-9 sm:h-10 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            
          </Link>

          {/* Single-row desktop navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide whitespace-nowrap transition-colors hover:text-orange-500 ${
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
              className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2.5 text-sm font-bold text-white whitespace-nowrap shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={`md:hidden rounded-xl p-2.5 transition ${
              isLightHeader
                ? "text-stone-800 hover:bg-orange-50"
                : "text-white hover:bg-white/15"
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}