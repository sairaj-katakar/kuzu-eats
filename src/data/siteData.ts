export interface AnnouncementItem {
  id: string;
  text: string;
  badge: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FoodCategory {
  id: string;
  name: string;
  itemCountLabel: string;
  imageUrl: string;
}

export interface FeaturedRestaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: string;
  deliveryTime: string;
  badge: string;
  imageUrl: string;
}

export interface SpecialOffer {
  id: string;
  code: string;
  title: string;
  description: string;
  validLabel: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  otherPlatforms: string;
  kuzuEats: string;
}

export interface CoverageZone {
  zoneName: string;
  areas: string;
  hours: string;
  eta: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  roleOrLocation: string;
  quote: string;
  highlight: string;
  rating: number;
}

export interface AchievementStat {
  value: string;
  label: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BRAND_CONTACT = {
  brandName: "Kuzu Eats",
  phone: "+975-16170000",
  phoneHref: "tel:+97516170000",
  email: "kuzueats@gmail.com",
  emailHref: "mailto:kuzueats@gmail.com",
  supportHours: "Mon - Sun: 8:00 AM - 11:00 PM",
  address: "Kuzu Eats Operations Hub",
  socials: [
    { name: "Instagram", handle: "Kuzu Eats", href: "https://www.instagram.com/" },
    { name: "Facebook", handle: "Kuzu Eats", href: "https://www.facebook.com/" },
    { name: "TikTok", handle: "Kuzu Eats", href: "https://www.tiktok.com/" },
  ],
};

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: "ann-1",
    badge: "Live Service",
    text: "Fast local delivery and direct restaurant ordering active across partner zones.",
  },
  {
    id: "ann-2",
    badge: "Special Offer",
    text: "Get flat savings on first app orders and zero-commission partner onboarding.",
  },
];

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export const HERO_DATA = {
  eyebrow: "Fresh Meals. Fast Delivery. Direct Connection.",
  titleLine1: "Made with Passion,",
  titleLine2: "Served with Love.",
  titleAccent: "Because You Deserve the Best Bite.",
  subtitle:
    "Order fresh dishes from trusted local kitchens, track live delivery, or power your restaurant with smart tools and 0% commission on direct orders.",
  primaryCta: { label: "Explore Restaurants", href: "#featured-restaurants" },
  secondaryCta: { label: "Download App", href: "#mobile-app" },
  appBadges: ["iOS App Store", "Google Play", "Instant Web Order"],
};

export const POPULAR_CATEGORIES: FoodCategory[] = [
  {
    id: "cat-1",
    name: "Biryanis & Rice Bowls",
    itemCountLabel: "45+ Kitchens",
    imageUrl:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cat-2",
    name: "Artisan Burgers & Wraps",
    itemCountLabel: "38+ Kitchens",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cat-3",
    name: "Wood-Fired Pizza & Pasta",
    itemCountLabel: "29+ Kitchens",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cat-4",
    name: "Healthy Bowls & Salads",
    itemCountLabel: "24+ Kitchens",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cat-5",
    name: "Desserts & Specialty Coffee",
    itemCountLabel: "34+ Kitchens",
    imageUrl:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cat-6",
    name: "Street Snacks & Combos",
    itemCountLabel: "50+ Kitchens",
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },
];

export const FEATURED_RESTAURANTS: FeaturedRestaurant[] = [
  {
    id: "rest-1",
    name: "Saffron & Ember Kitchen",
    cuisine: "North Indian • Mughlai • Bowls",
    rating: "4.9",
    deliveryTime: "25-35 mins",
    badge: "Top Rated",
    imageUrl:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "rest-2",
    name: "Urban Crust & Grill",
    cuisine: "Pizza • Burgers • Loaded Fries",
    rating: "4.8",
    deliveryTime: "20-30 mins",
    badge: "Fastest Prep",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "rest-3",
    name: "Green Leaf Harvest Bar",
    cuisine: "Grain Bowls • Fresh Salads • Smoothies",
    rating: "4.9",
    deliveryTime: "20-28 mins",
    badge: "Chef Pick",
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
  },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: "offer-1",
    code: "KUZU25",
    title: "25% Off First App Order",
    description: "Enjoy instant savings on your first meal order placed through the Kuzu Eats mobile app.",
    validLabel: "New Users",
  },
  {
    id: "offer-2",
    code: "FREEDEL",
    title: "Free Delivery on Combo Meals",
    description: "Zero delivery fee on curated lunch and dinner combos from featured partner kitchens.",
    validLabel: "Daily Window",
  },
  {
    id: "offer-3",
    code: "ZEROFEES",
    title: "0% Direct Commission for Partners",
    description: "Restaurants keep full order margins while growing repeat customers with direct ordering.",
    validLabel: "Partner Launch",
  },
];

export const HOW_IT_WORKS_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Browse & Customize",
    description: "Explore food categories, featured restaurants, and daily offers in a clean digital menu.",
  },
  {
    stepNumber: "02",
    title: "Place Order in Seconds",
    description: "Confirm your meal or table order smoothly with transparent pricing and live status updates.",
  },
  {
    stepNumber: "03",
    title: "Fast Pickup or Doorstep Delivery",
    description: "Dedicated riders and partner kitchens prepare and deliver fresh food right on schedule.",
  },
];

export const WHY_CHOOSE_ROWS: ComparisonRow[] = [
  {
    feature: "Direct Order Margins",
    otherPlatforms: "High per-order commission cuts",
    kuzuEats: "0% commission on direct orders",
  },
  {
    feature: "Customer Relationship",
    otherPlatforms: "Owned by third-party marketplace",
    kuzuEats: "Direct connection with diners & repeat rewards",
  },
  {
    feature: "Menu & Offer Updates",
    otherPlatforms: "Slow approval & rigid templates",
    kuzuEats: "Instant menu control & live promotions",
  },
  {
    feature: "Ordering & Operations",
    otherPlatforms: "Disconnected tools",
    kuzuEats: "Unified ordering, table flow & partner support",
  },
];

export const DELIVERY_COVERAGE: CoverageZone[] = [
  {
    zoneName: "City Core & Business District",
    areas: "Central Market, Station Road, Commercial Hub",
    hours: "8:00 AM - 11:00 PM Daily",
    eta: "20-30 mins",
  },
  {
    zoneName: "Residential & Campus Belt",
    areas: "Green Park, College Road, Riverside Enclave",
    hours: "8:30 AM - 10:30 PM Daily",
    eta: "25-35 mins",
  },
  {
    zoneName: "Late-Night Snack & Diner Zone",
    areas: "Highway Plaza, Food Court Circle, Midtown",
    hours: "11:00 AM - 12:00 AM Daily",
    eta: "25-40 mins",
  },
];

export const ACHIEVEMENT_STATS: AchievementStat[] = [
  { value: "0%", label: "Direct Order Commission", detail: "Protects partner profit margins" },
  { value: "4.9/5", label: "Average Diner Rating", detail: "Across verified meal deliveries" },
  { value: "+60%", label: "Repeat Order Lift", detail: "Driven by direct loyalty & speed" },
  { value: "25 min", label: "Target Prep & Dispatch", detail: "Streamlined kitchen-to-rider flow" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Meera Joshi",
    roleOrLocation: "Coastal Flame Kitchen",
    quote:
      "Moving direct customers to Kuzu Eats improved our order margins immediately and made repeat ordering effortless.",
    highlight: "4.9 Rating",
    rating: 5,
  },
  {
    id: "rev-2",
    name: "Ananya Nair",
    roleOrLocation: "Spice Villa",
    quote:
      "Peak-hour orders stay organized and our regulars love the quick mobile experience and combo offers.",
    highlight: "+60% Repeat Orders",
    rating: 5,
  },
  {
    id: "rev-3",
    name: "Rohan Kulkarni",
    roleOrLocation: "Regular Diner",
    quote:
      "Hot food arrives on time, menu prices are clear, and finding great local spots takes less than a minute.",
    highlight: "Fast Delivery",
    rating: 5,
  },
];

export const LANDING_FAQS: FaqItem[] = [
  {
    question: "How do I order food or download the Kuzu Eats app?",
    answer:
      "You can browse categories and featured kitchens right here or jump to the Mobile App section to install Kuzu Eats for quick ordering and live tracking.",
  },
  {
    question: "How does Kuzu Eats support restaurants and delivery riders?",
    answer:
      "Partner restaurants get direct ordering tools, QR/POS hardware options, and 0% direct commission, while riders get clear dispatch routes and reliable support.",
  },
  {
    question: "What are the delivery hours and support contact details?",
    answer:
      "Most zones operate daily from morning through late evening. You can reach us by phone at +975-16170000 or email kuzueats@gmail.com.",
  },
];