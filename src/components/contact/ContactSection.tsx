"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  Sparkles,
  Store,
  CalendarClock,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";

const INQUIRY_TOPICS = [
  "New Restaurant Partnership",
  "Book a Live Demo",
  "Menu & Onboarding Help",
  "General Question",
];

const CALLBACK_SLOTS = [
  "Morning (10 AM - 1 PM)",
  "Afternoon (2 PM - 5 PM)",
  "Evening (6 PM - 9 PM)",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    restaurantName: "",
    email: "",
    phone: "",
    topic: INQUIRY_TOPICS[0],
    callbackSlot: CALLBACK_SLOTS[1],
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text: string, field: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      restaurantName: "",
      email: "",
      phone: "",
      topic: INQUIRY_TOPICS[0],
      callbackSlot: CALLBACK_SLOTS[1],
      subject: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#FFFBF5] border-t border-orange-100/80 overflow-hidden"
    >
      {/* Top Culinary Banner with Background Photo & Soft Warm Overlay */}
      <div className="relative py-20 sm:py-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-20 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#FFF5EA]/90 via-[#FFF7ED]/92 to-[#FFFBF5]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/95 border border-orange-200/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-orange-700 mb-3 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Contact <span className="text-orange-600">Kuzueats</span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to launch your restaurant&apos;s
            commission-free ordering experience? Reach out below and our team
            will guide you step-by-step.
          </p>

          {/* Trust Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-stone-700">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-orange-100 px-3.5 py-1.5 shadow-2xs">
              <Clock className="h-3.5 w-3.5 text-orange-600" />
              <span>Replies within 2 business hours</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-orange-100 px-3.5 py-1.5 shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Zero-commission setup assistance</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 -mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Details & Support Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5 rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-orange-950/5 border border-orange-100"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Direct Channels
              </span>
              <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900">
                We&apos;re Here to Help
              </h3>
            </div>

            <div className="space-y-4 pt-1">
              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl bg-[#FFFBF5] border border-orange-100/80 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-extrabold text-orange-600">
                    Our Address
                  </h4>
                  <p className="mt-1 text-sm text-stone-700 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Phone with One-Click Copy */}
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-[#FFFBF5] border border-orange-100/80 p-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-extrabold text-orange-600">
                      Phone
                    </h4>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                      className="mt-1 inline-block text-sm font-medium text-stone-700 hover:text-orange-600 transition"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(siteConfig.contact.phone, "phone")}
                  aria-label="Copy phone number"
                  className="inline-flex items-center gap-1 rounded-lg border border-orange-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-stone-600 hover:text-orange-600 hover:border-orange-300 transition cursor-pointer shrink-0"
                >
                  {copiedField === "phone" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email with One-Click Copy */}
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-[#FFFBF5] border border-orange-100/80 p-4">
                <div className="flex items-start gap-4 min-w-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-extrabold text-orange-600">
                      Email
                    </h4>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="mt-1 block truncate text-sm font-medium text-stone-700 hover:text-orange-600 transition"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(siteConfig.contact.email, "email")}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1 rounded-lg border border-orange-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-stone-600 hover:text-orange-600 hover:border-orange-300 transition cursor-pointer shrink-0"
                >
                  {copiedField === "email" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Partner Support Hours */}
              <div className="flex items-start gap-4 rounded-2xl bg-[#FFFBF5] border border-orange-100/80 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-extrabold text-orange-600">
                    Partner Support Hours
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-stone-700">
                    Mon – Sat: 9:30 AM – 8:30 PM IST
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/70 p-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <strong className="text-stone-900">Onboarding Support:</strong>{" "}
              Our partner specialists help set up your digital menu, pricing,
              and commission-free checkout flow quickly.
            </div>
          </motion.div>

          {/* Right Column: Interactive Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-orange-950/5 border border-orange-100"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-stone-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you,{" "}
                    <strong className="text-stone-900">{formData.name}</strong>.
                    Our Kuzueats specialist will connect with you during{" "}
                    <strong className="text-stone-900">
                      {formData.callbackSlot}
                    </strong>{" "}
                    regarding{" "}
                    <strong className="text-orange-600">
                      {formData.restaurantName || formData.topic}
                    </strong>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-3 inline-flex items-center justify-center rounded-xl bg-stone-900 px-6 py-3 text-sm font-bold text-white hover:bg-stone-800 transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Topic Quick Selector */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 mb-2.5">
                      <Store className="h-3.5 w-3.5 text-orange-600" />
                      <span>How can we help you?</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {INQUIRY_TOPICS.map((topic) => {
                        const active = formData.topic === topic;
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, topic }))
                            }
                            className={`rounded-full px-3.5 py-1.5 text-xs font-bold border transition cursor-pointer ${
                              active
                                ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-transparent shadow-xs"
                                : "bg-[#FFFBF5] text-stone-700 border-orange-200/80 hover:border-orange-400"
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Restaurant Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-stone-700 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-stone-200 bg-[#FFFBF5] px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="restaurantName"
                        className="block text-xs font-bold text-stone-700 mb-1.5"
                      >
                        Restaurant / Café Name
                      </label>
                      <input
                        id="restaurantName"
                        name="restaurantName"
                        type="text"
                        placeholder="e.g., Spice Garden Kitchen"
                        value={formData.restaurantName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-stone-200 bg-[#FFFBF5] px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-stone-700 mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@restaurant.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-stone-200 bg-[#FFFBF5] px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-stone-700 mb-1.5"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-stone-200 bg-[#FFFBF5] px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                      />
                    </div>
                  </div>

                  {/* Preferred Callback Time Slot */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 mb-2">
                      <CalendarClock className="h-3.5 w-3.5 text-orange-600" />
                      <span>Preferred Callback Time</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {CALLBACK_SLOTS.map((slot) => {
                        const selected = formData.callbackSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                callbackSlot: slot,
                              }))
                            }
                            className={`rounded-xl px-3 py-2 text-xs font-semibold border text-center transition cursor-pointer ${
                              selected
                                ? "bg-orange-50 border-orange-500 text-orange-700"
                                : "bg-[#FFFBF5] border-stone-200 text-stone-600 hover:border-orange-300"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-stone-700 mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us a little about your restaurant, menu size, or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-stone-200 bg-[#FFFBF5] px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition resize-none"
                    />
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/25 hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </button>
                    <span className="text-xs text-stone-500">
                      No spam. Dedicated onboarding specialist support.
                    </span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}