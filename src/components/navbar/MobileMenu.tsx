"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 md:hidden"
        >
          {/* Backdrop overlay */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm"
          />

          {/* Slide-in drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#FFFBF5] shadow-2xl border-l border-orange-100 flex flex-col justify-between p-6"
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-orange-100">
                <Link
                  href="/"
                  onClick={onClose}
                  className="inline-flex items-center shrink-0 focus:outline-none"
                >
                  <img
                    src="/images/logo.png"
                    alt="Kuzu Eats"
                    className="h-9 sm:h-10 w-auto max-w-[145px] object-contain select-none"
                  />
                </Link>
                <button
                  onClick={onClose}
                  aria-label="Close mobile menu"
                  className="rounded-xl p-2 text-stone-600 hover:bg-orange-50 hover:text-orange-600 transition cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-stone-800 hover:bg-orange-50 hover:text-orange-600 transition"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-orange-400" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-orange-100 space-y-3">
              <Link
                href="/login"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:opacity-95 transition"
              >
                Login
              </Link>
              <p className="text-center text-xs text-stone-500">
                100% Commission-Free Partner Portal
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}