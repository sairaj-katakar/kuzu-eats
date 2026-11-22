import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Kuzu Eats | Commission-Free Ordering & Growth for Restaurants",
  description:
    "Empowering restaurants, cafés, and chefs to take control of online orders, boost customer satisfaction, and save commissions with Kuzu Eats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#FFFBF5] text-[#1C1917] selection:bg-orange-200 selection:text-orange-950">
        {children}
      </body>
    </html>
  );
}