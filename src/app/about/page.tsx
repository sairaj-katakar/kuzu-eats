import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import AboutSection from "@/components/about/AboutSection";
import PartnerValueAndFaq from "@/components/about/PartnerValueAndFaq";
import ExcellenceSection from "@/components/excellence/ExcellenceSection";
import Footer from "@/components/footer/Footer";

const PARTNERSHIP_TRACKS = [
  {
    role: "Restaurant Partners",
    badge: "0% Direct Commission",
    summary:
      "Launch direct ordering, table flow, and repeat loyalty without losing margins to third-party commissions.",
    perks: [
      "Keep 100% of direct order value",
      "Fast menu setup & live updates",
      "Dedicated onboarding & support",
    ],
    ctaLabel: "Partner as a Restaurant",
    ctaHref: "/contact",
  },
  {
    role: "Delivery Rider Partners",
    badge: "Flexible Earnings",
    summary:
      "Deliver fresh orders across active zones with clear route coordination, timely payouts, and rider support.",
    perks: [
      "Clear pickup & drop-off clarity",
      "Peak-hour order opportunities",
      "Direct rider assistance team",
    ],
    ctaLabel: "Join as a Rider",
    ctaHref: "/contact",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF5] text-[#1C1917] scroll-smooth">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="transition-all duration-500">
          <AboutSection />
        </div>

        {/* Restaurant and Rider Partnerships Section */}
        <section
          id="partnerships"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50/50 border-y border-orange-100/80"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Grow Together
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-stone-900">
                Restaurant &amp; Rider Partnerships
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed">
                Kuzu Eats connects independent kitchens, riders, and local diners
                on a reliable, transparent platform built for long-term growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PARTNERSHIP_TRACKS.map((track) => (
                <div
                  key={track.role}
                  className="group rounded-3xl bg-white border border-orange-100 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-stone-900">
                        {track.role}
                      </h3>
                      <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-bold text-orange-700">
                        {track.badge}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                      {track.summary}
                    </p>

                    <ul className="mt-5 space-y-2 text-sm text-stone-700">
                      {track.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100">
                    <Link
                      href={track.ctaHref}
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:brightness-110 transition-all"
                    >
                      {track.ctaLabel} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PartnerValueAndFaq />
        <ExcellenceSection />
      </main>

      <Footer />
    </div>
  );
}