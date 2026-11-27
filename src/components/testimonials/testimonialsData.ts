export interface TestimonialItem {
  id: string;
  restaurant: string;
  location: string;
  ownerName: string;
  quote: string;
  rating: number;
  avatar: string;
  fallbackAvatar: string;
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
    avatar: "/images/avatar-spice-villa.jpg",
    fallbackAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
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
    avatar: "/images/avatar-urban-dine.jpg",
    fallbackAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
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
    avatar: "/images/avatar-pasta-house.jpg",
    fallbackAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
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
    avatar: "/images/avatar-coastal-grill.jpg",
    fallbackAvatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
    metricBadge: "4.9★ Guest Rating",
  },
];