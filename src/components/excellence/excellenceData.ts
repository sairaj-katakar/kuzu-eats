import { BRAND_CONTACT } from "@/data/siteData";

export interface ExcellenceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  fallbackImage: string;
  tag: string;
}

export const excellenceItems: ExcellenceItem[] = [
  {
    id: "quality-over-quantity",
    title: "QUALITY OVER QUANTITY",
    description:
      "Local chefs submit their applications & less than 5% earn an apron.",
    image: "/images/excellence-quality.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
    tag: "Curated Kitchens",
  },
  {
    id: "taste-tested",
    title: "TASTE-TESTED TO PERFECTION",
    description:
      "Every dish is vetted for taste, quality & presentation by our culinary team.",
    image: "/images/excellence-tasted.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    tag: "Culinary Standard",
  },
  {
    id: "credentials-you-can-trust",
    title: "CREDENTIALS YOU CAN TRUST",
    description: `Licensed chefs & facilities — every ${BRAND_CONTACT.brandName} partner meets rigorous safety standards.`,
    image: "/images/excellence-credentials.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
    tag: "Verified Hygiene",
  },
  {
    id: "dedicated-to-excellence",
    title: "DEDICATED TO CULINARY EXCELLENCE",
    description:
      "Every order is reviewed for the highest standards in safety and quality.",
    image: "/images/excellence-dedicated.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    tag: "Guest Satisfaction",
  },
];