import Navbar from "@/components/navbar/Navbar";
import AboutSection from "@/components/about/AboutSection";
import SavingsCalculator from "@/components/savings-calculator/SavingsCalculator";
import PartnerValueAndFaq from "@/components/about/PartnerValueAndFaq";
import ExcellenceSection from "@/components/excellence/ExcellenceSection";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF5] text-[#1C1917]">
      <Navbar />
      <main className="flex-1 pt-16">
        <AboutSection />
        <SavingsCalculator />
        <PartnerValueAndFaq />
        <ExcellenceSection />
      </main>
      <Footer />
    </div>
  );
}