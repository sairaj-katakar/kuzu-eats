import { siteConfig } from "@/data/siteData";

export interface TestimonialItem {
  id: string;
  restaurant: string;
  location: string;
  ownerName: string;
  quote: string;
  rating: number;
  avatar: string;
  metricBadge: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "spice-villa",
    restaurant: "Spice Villa",
    location: "Chennai, India",
    ownerName: "Ananya Nair",
    quote:
      "Kuzueats helped us take control of online orders — our delivery sales went up by 60% within two months!",
    rating: 5,
    avatar: siteConfig.images.avatars.spiceVilla,
    metricBadge: "+60% Delivery Sales",
  },
  {
    id: "urban-dine",
    restaurant: "Urban Dine",
    location: "Bengaluru, India",
    ownerName: "Rohan Kulkarni",
    quote:
      "Our team loves the dashboard — easy to use, fast to set up, and our customers keep coming back!",
    rating: 5,
    avatar: siteConfig.images.avatars.urbanDine,
    metricBadge: "High Repeat Orders",
  },
  {
    id: "pasta-house",
    restaurant: "The Pasta House",
    location: "Mumbai, India",
    ownerName: "Vikram Deshmukh",
    quote:
      "We finally stopped paying commissions to third-party apps. Kuzueats gave us freedom and more profits.",
    rating: 5,
    avatar: siteConfig.images.avatars.pastaHouse,
    metricBadge: "0% App Commission",
  },
  {
    id: "coastal-grill",
    restaurant: "Coastal Flame Kitchen",
    location: "Pune, India",
    ownerName: "Meera Joshi",
    quote:
      "From seamless table reservations to direct repeat regulars, customer satisfaction has never been higher.",
    rating: 5,
    avatar: siteConfig.images.avatars.coastalGrill,
    metricBadge: "4.9★ Guest Rating",
  },
];