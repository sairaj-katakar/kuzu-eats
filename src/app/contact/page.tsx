import Navbar from "@/components/navbar/Navbar";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF5] text-[#1C1917]">
      <Navbar />
      <main className="flex-1 pt-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}