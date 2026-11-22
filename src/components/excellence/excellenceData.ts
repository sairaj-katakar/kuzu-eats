import { siteConfig } from "@/data/siteData";

export interface ExcellenceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const excellenceItems: ExcellenceItem[] = [
  {
    id: "quality-over-quantity",
    title: "QUALITY OVER QUANTITY",
    description:
      "Local chefs submit their applications & less than 5% earn an apron.",
    image: siteConfig.images.excellence.quality,
    tag: "Curated Kitchens",
  },
  {
    id: "taste-tested",
    title: "TASTE-TESTED TO PERFECTION",
    description:
      "Every dish is vetted for taste, quality & presentation by our culinary team.",
    image: siteConfig.images.excellence.tasted,
    tag: "Culinary Standard",
  },
  {
    id: "credentials-you-can-trust",
    title: "CREDENTIALS YOU CAN TRUST",
    description:
      "Licensed chefs & facilities — every Kuzueats partner meets rigorous safety standards.",
    image: siteConfig.images.excellence.credentials,
    tag: "Verified Hygiene",
  },
  {
    id: "dedicated-to-excellence",
    title: "DEDICATED TO CULINARY EXCELLENCE",
    description:
      "Every order is reviewed for the highest standards in safety and quality.",
    image: siteConfig.images.excellence.dedicated,
    tag: "Guest Satisfaction",
  },
];