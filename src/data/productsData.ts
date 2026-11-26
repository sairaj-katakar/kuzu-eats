export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  inStock: boolean;
  sku: string;
  image?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: "Starter Kits" | "POS & Hardware" | "Growth Packs";
  description: string;
  rating: number;
  image: string;
  imageAlt: string;
  badge?: string;
  highlights: string[];
  variants: ProductVariant[];
}

export const productsData: ProductItem[] = [
  {
    id: "direct-order-kit",
    name: "Direct Ordering Starter Kit",
    category: "Starter Kits",
    description:
      "Commission-free online menu setup and instant order alerts for independent kitchens.",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Counter ordering system and tablet setup for restaurant orders",
    badge: "Popular",
    highlights: [
      "Zero commission on direct orders",
      "Instant kitchen & mobile order alerts",
      "Fast menu setup in one day",
    ],
    variants: [
      { id: "monthly", label: "Monthly", price: 1499, inStock: true, sku: "KE-DO-M" },
      { id: "quarterly", label: "Quarterly", price: 3999, inStock: true, sku: "KE-DO-Q" },
      { id: "yearly", label: "Annual", price: 12999, inStock: false, sku: "KE-DO-Y" },
    ],
  },
  {
    id: "smart-table-qr",
    name: "Smart Table Flow QR Pack",
    category: "POS & Hardware",
    description:
      "Durable table stands with instant dine-in menu access and table-side flow.",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Modern restaurant dining tables prepared for dine-in service",
    badge: "Best Seller",
    highlights: [
      "Spill-resistant table stand presentation",
      "Instant scan access to digital menu",
      "Faster table turnover during rush hours",
    ],
    variants: [
      { id: "pack-10", label: "10 Tables", price: 2499, inStock: true, sku: "KE-QR-10" },
      { id: "pack-25", label: "25 Tables", price: 5499, inStock: true, sku: "KE-QR-25" },
      { id: "pack-50", label: "50 Tables", price: 9999, inStock: true, sku: "KE-QR-50" },
    ],
  },
  {
    id: "repeat-loyalty-suite",
    name: "Repeat Customer Loyalty Suite",
    category: "Growth Packs",
    description:
      "Targeted repeat-order offers and guest retention tools to boost direct sales.",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Guests enjoying dining experience in a welcoming restaurant",
    highlights: [
      "Automated repeat-visit reward offers",
      "Customer visit & spend insights",
      "Built for higher average order value",
    ],
    variants: [
      { id: "standard", label: "Standard", price: 1999, inStock: true, sku: "KE-RL-STD" },
      { id: "pro", label: "Growth Pro", price: 3499, inStock: true, sku: "KE-RL-PRO" },
    ],
  },
  {
    id: "kitchen-display-kit",
    name: "Kitchen Order Display Setup",
    category: "POS & Hardware",
    description:
      "Streamlined order queue view to keep dine-in, pickup, and delivery prep organized.",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Active restaurant service counter and kitchen order workflow",
    highlights: [
      "Clear color-coded ticket queue",
      "Reduces paper ticket clutter",
      "Syncs dine-in, takeaway & delivery",
    ],
    variants: [
      { id: "single", label: "1 Display", price: 4299, inStock: true, sku: "KE-KDS-1" },
      { id: "dual", label: "2 Displays", price: 7999, inStock: false, sku: "KE-KDS-2" },
    ],
  },
];