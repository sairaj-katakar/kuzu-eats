import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import Footer from "@/components/footer/Footer";
import HomeGrowthShowcase from "@/components/hero/HomeGrowthShowcase";
import HomeFeatures from "@/components/hero/HomeFeatures";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF5] text-[#1C1917]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HomeGrowthShowcase />
        <HomeFeatures />
        <TestimonialsCarousel />

        {/* Home-to-About / Contact callout banner */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FFFBF5]">
          <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900 to-stone-800 px-6 py-10 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Ready to Grow Commission-Free?
              </p>
              <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold">
                See how Kuzueats protects your restaurant margins
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:brightness-110 transition">
                <span className="font-bold">Contact Us</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}