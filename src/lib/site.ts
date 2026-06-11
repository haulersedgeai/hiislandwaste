export const site = {
  name: "Hawaii Island Waste",
  legalName: "Hawaii Island Waste L.L.C.",
  tagline: "Your Fresh Start, Handled With ALOHA.",
  shortTagline: "Your clean slate starts with us.",
  description:
    "Dependable junk removal, demolition, dumpster rentals, and estate cleanouts across Hawaiʻi Island — Hilo, Puna, Hāmākua, Kohala, Kona, and Kaʻū. Licensed, insured, locally owned.",
  url: process.env.SITE_URL ?? "https://www.hiislandwaste.com",
  vercelUrl: "https://hiislandwaste.vercel.app",
  phone: "808-300-9766",
  phoneE164: "+18083009766",
  sms: "+18083009766",
  email: "hijunkremoval@gmail.com",
  ownerNames: ["Sherman 'Naea' Kaopua", "Chae Kaopua"],
  founded: "2021-10-05",
  hoursLine: "Mon–Sun · 7am–8pm",
  hoursMachine: "Mo-Su 07:00-20:00",
  hq: {
    locality: "Hilo",
    region: "HI",
    postalCode: "96720",
    country: "US",
    lat: 19.7297,
    lng: -155.09,
  },
  social: {
    instagram: "https://instagram.com/hiislandwaste",
    instagramHandle: "@hiislandwaste",
  },
  aggregateRating: { value: 5.0, count: 4 },
};

export const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/gallery", label: "Gallery" },
] as const;

export const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/who-we-serve", label: "Who We Serve" },
    { href: "/gallery", label: "Gallery" },
  ],
  resources: [
    { href: "/items-we-take", label: "Items We Take" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
    { href: "/reviews", label: "Reviews" },
  ],
  services: [
    { href: "/services/residential-junk-removal", label: "Junk Removal" },
    { href: "/services/demolition-services", label: "Demolition" },
    { href: "/services/dumpster-rentals", label: "Dumpster Rentals" },
    { href: "/services/estate-cleanouts", label: "Estate Cleanouts" },
  ],
  segments: [
    { href: "/who-we-serve/for-families", label: "For Families" },
    { href: "/who-we-serve/for-kupuna-ohana", label: "For Kūpuna & 'Ohana" },
    { href: "/who-we-serve/for-contractors", label: "For Contractors" },
    { href: "/who-we-serve/for-realtors", label: "For Realtors" },
  ],
};
