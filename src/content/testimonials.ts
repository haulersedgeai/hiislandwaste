export type TestimonialSource = "google" | "yelp";

export interface Testimonial {
  name: string;
  location: string;
  rating: 5;
  source: TestimonialSource;
  body: string;
  shortQuote?: string;
  project?: string;
  tags?: {
    services?: string[];
    segments?: string[];
    locations?: string[];
  };
}

export const GOOGLE_REVIEW_COUNT = 114;
export const YELP_REVIEW_COUNT = 7;
export const TOTAL_REVIEW_COUNT = 121;
export const REVIEW_AVERAGE = 5.0;

export const testimonials: Testimonial[] = [
  // ── Existing Yelp 4 ──────────────────────────────────────
  {
    name: "Valerie V.",
    location: "Hilo, HI",
    rating: 5,
    source: "yelp",
    shortQuote: "We could not have asked for a better team.",
    body:
      "We used Naea and his crew on numerous occasions and we could not have asked for a better team. Very dependable, skilled, respectful and very professional. Arrived on time. They got the job done in no time and even cleaned up the area and left no trash residue. We highly recommend Naea and his crew!",
    project: "Repeat residential cleanouts",
    tags: {
      services: ["residential-junk-removal", "garage-cleanouts"],
      segments: ["families", "kupuna-ohana"],
      locations: ["hilo"],
    },
  },
  {
    name: "Todd Y.",
    location: "Southwest, NV",
    rating: 5,
    source: "yelp",
    shortQuote: "Arrived on time and in and out in less than an hour.",
    body:
      "Used them for a clean out prior to putting a house up for sale. Very responsive and gave an unbeatable quote. The team arrived on-time and was in and out of our house in less than an hour. They were all professional and safely handled all the larger items being very strategic in how they moved the items out of the house and packing in the dumpster to maximize space. I was extremely satisfied with Hawaii Island Waste and definitely recommend them.",
    project: "Pre-sale property cleanout",
    tags: {
      services: ["property-cleanouts", "estate-cleanouts"],
      segments: ["realtors"],
    },
  },
  {
    name: "Kamreyn M.",
    location: "Hilo, HI",
    rating: 5,
    source: "yelp",
    shortQuote: "Smooth, efficient, and completely stress-free.",
    body:
      "Hawaii Island Waste – Junk Removal provided outstanding service. They arrived on time and quickly removed multiple beds and a large amount of debris from my property. The entire process was smooth, efficient, and completely stress-free, leaving my home noticeably more organized and clutter-free. Naea and his team were incredibly professional and maintained excellent communication before, during, and after the service. I highly recommend their services.",
    project: "Residential junk removal",
    tags: {
      services: ["residential-junk-removal", "mattress-removal"],
      segments: ["families"],
      locations: ["hilo"],
    },
  },
  {
    name: "Donn U.",
    location: "La Quinta, CA",
    rating: 5,
    source: "yelp",
    shortQuote: "Amazing, quick, and worth every penny.",
    body:
      "I used them to haul away residential junk accumulated for 40 years at my dad's house in Hilo. Since I was only in Hawaii for a week there are only so many trips I could make to the rubbish dump with my dad. I finally convinced my dad to hire professionals for the big items like old beds, large tree stumps in the backyard, and heavy metal debris. The team was amazing, quick, and worth every penny.",
    project: "Family property cleanout",
    tags: {
      services: ["residential-junk-removal", "estate-cleanouts"],
      segments: ["kupuna-ohana", "families"],
      locations: ["hilo"],
    },
  },

  // ── New Google 12 ────────────────────────────────────────
  {
    name: "Stephen Mika'ele LB",
    location: "Hilo, HI",
    rating: 5,
    source: "google",
    body:
      "Naea and his crew are the best! Today was the third time they've helped me with removing clutter from my grandma's house. So many great things to say about them. They make the process so simple and stress-free, especially because they do all the heavy lifting.",
    project: "Repeat grandma's-house cleanout",
    tags: {
      services: ["estate-cleanouts", "residential-junk-removal"],
      segments: ["kupuna-ohana"],
      locations: ["hilo"],
    },
  },
  {
    name: "Vance Kamau",
    location: "Papaʻikou, HI",
    rating: 5,
    source: "google",
    body:
      "I recently hired Hawaii Island Waste to help me tackle a massive garage cleanout at my home in Papaʻikou, and I couldn't be happier with the results! The team was incredibly professional, efficient, and friendly from start to finish.",
    project: "Massive garage cleanout",
    tags: {
      services: ["residential-junk-removal", "garage-cleanouts"],
      segments: ["families"],
      locations: ["papaikou"],
    },
  },
  {
    name: "Rusty Crabbe",
    location: "Waimea, HI",
    rating: 5,
    source: "google",
    body:
      "Big thanks to Naea and Hawaii Island Waste! They did an amazing job helping us clear out our home in Waimea. Naea is great to work with — super communicative and helpful. It's hard to find service this reliable and easy to deal with. 10/10 recommend!",
    project: "Whole-home clearout",
    tags: {
      services: ["residential-junk-removal", "estate-cleanouts"],
      segments: ["families"],
      locations: ["waimea"],
    },
  },
  {
    name: "Bobby Castillo",
    location: "Wainaku, HI",
    rating: 5,
    source: "google",
    body:
      "I had a great experience with Hawaii Island Waste getting rid of old junk on my property in Wainaku. The service was incredibly fast and easy from start to finish. They handled everything efficiently, and their team was excellent. If you need reliable, quick junk removal on the island, I highly recommend their great service!",
    project: "Property junk removal",
    tags: {
      services: ["residential-junk-removal"],
      segments: ["families"],
      locations: ["hilo"],
    },
  },
  {
    name: "Stephanie Goya",
    location: "Hilo, HI",
    rating: 5,
    source: "google",
    body:
      "Naea and his crew at Hawaii Island Waste have been super helpful and dependable! We've been using them for the past 7 years now and they never disappoint. Always reliable, professional and just the best in town! 10/10",
    project: "7-year repeat customer",
    tags: {
      services: ["residential-junk-removal"],
      segments: ["families"],
      locations: ["hilo"],
    },
  },
  {
    name: "Merle Unoki",
    location: "Hawaiʻi Island · Kūpuna client",
    rating: 5,
    source: "google",
    body:
      "We have been 'cleaning' our house. After years of accumulation of stuff, Naea and his staff were very helpful. We are in our kūpuna years and we are so grateful for Hawaii Island Waste services. If you are thinking about decluttering — call them.",
    project: "Decades of accumulated decluttering",
    tags: {
      services: ["residential-junk-removal", "estate-cleanouts"],
      segments: ["kupuna-ohana"],
    },
  },
  {
    name: "Kevin Kurata",
    location: "Hilo, HI · Island Cold Storage",
    rating: 5,
    source: "google",
    body:
      "Very impressed with HI Island Waste Removal: they worked around our crazy schedule. On one of the days the crew had another job lined up, Boss man Naea himself filled in to continue our project.",
    project: "Commercial cleanout",
    tags: {
      services: ["commercial-junk-removal"],
      segments: ["contractors"],
      locations: ["hilo"],
    },
  },
  {
    name: "Andrew Yanagi",
    location: "Hawaiʻi Island · Contractor",
    rating: 5,
    source: "google",
    body:
      "I hired Hawaii Island Waste to load and haul away the construction waste after the full gut/demo of the inside of a condo. The owner and his crew were on time, on schedule and professionals. They hauled a roll-off dumpster worth of stuff.",
    project: "Full condo gut/demo construction waste",
    tags: {
      services: ["demolition-services", "construction-debris", "dumpster-rentals", "interior-demolition"],
      segments: ["contractors"],
    },
  },
  {
    name: "Ryan Obina",
    location: "Hawaiʻi Island · Contractor",
    rating: 5,
    source: "google",
    body:
      "Best job-site clean-up on the Big Island. I gave them an address and they cleaned up everything and more — didn't have to be there for them to do the job. Very trustworthy. I will use them for all my jobs and pricing for what they did couldn't ask for a better price. Very reasonable. I will be telling more contractors about them.",
    project: "Job-site cleanup",
    tags: {
      services: ["construction-debris", "commercial-junk-removal"],
      segments: ["contractors"],
    },
  },
  {
    name: "Anne Carlson",
    location: "Hawaiʻi Island",
    rating: 5,
    source: "google",
    body:
      "Sheldon was very pleasant and efficient. I asked for service and they were here the next day. Took down an old shed and removed all debris. You'd never know it was there.",
    project: "Shed demolition + debris removal",
    tags: {
      services: ["demolition-services", "shed-demolition"],
      segments: ["families"],
    },
  },
  {
    name: "John Balberde",
    location: "Hawaiʻi Island",
    rating: 5,
    source: "google",
    body:
      "Awesome experience using Hawaii Island Waste! Naea and his crew were accommodating and very helpful — they were able to haul away everything, from old cabinets to flooring and even an old boat for me. Easy to communicate with, the pricing was fair, and the job was done without any issues. Thank you!",
    project: "Mixed cleanout (cabinets, flooring, even an old boat)",
    tags: {
      services: ["residential-junk-removal"],
      segments: ["families"],
    },
  },
  {
    name: "Marisa Andres",
    location: "Hilo, HI · Realtor",
    rating: 5,
    source: "google",
    body:
      "We had an amazing experience with Hawaii Island Waste for our Hilo properties! From start to finish, the team was professional, quick, and so easy to work with.",
    project: "Multiple Hilo property cleanouts",
    tags: {
      services: ["residential-junk-removal", "property-cleanouts"],
      segments: ["realtors"],
      locations: ["hilo"],
    },
  },

  // ── New Yelp 3 ───────────────────────────────────────────
  {
    name: "Rylee A.",
    location: "Hawaiʻi Island",
    rating: 5,
    source: "yelp",
    body:
      "Absolutely amazing service! They were on time, professional, and super fast. Naea and the team handled everything with care and made the whole junk removal process completely stress-free. Pricing was fair and transparent, and my space looks incredible now. Highly recommend to anyone needing a reliable junk removal company!",
    project: "Junk removal",
    tags: {
      services: ["residential-junk-removal"],
      segments: ["families"],
    },
  },
  {
    name: "Harry C.",
    location: "Wake Forest, NC · Off-island property owner",
    rating: 5,
    source: "yelp",
    body:
      "I called three other companies to get a very large warehouse cleaned out — all three said it was too much work, would take about a week. A referral pointed me to Naea at Hawaii Island Waste. One phone call and it was done. The photos the next day of that warehouse cleaned out — we couldn't believe it. I just authorized payment. Very impressive.",
    project: "Large warehouse cleanout",
    tags: {
      services: ["commercial-junk-removal", "estate-cleanouts", "property-cleanouts"],
      segments: ["contractors", "realtors"],
    },
  },
  {
    name: "S H.",
    location: "Gardena, CA · Off-island family",
    rating: 5,
    source: "yelp",
    body:
      "Naʻea and the crew at Hawaiʻi Island Waste were exactly what we needed. We have been clearing up our ʻohana land — decades of accumulation of metal, wood, ceramic, plastic, all succumbed to the weather. Thanks to their professionalism, communication, and attention to detail, a very stressful situation was made incredibly easy. They were mindful of budget, gave us multiple paths, and even adjusted the invoice when dump charges came in lower than expected. No surprises and no hustles.",
    project: "ʻOhana land cleanup",
    tags: {
      services: ["estate-cleanouts", "residential-junk-removal", "yard-waste-removal"],
      segments: ["families", "kupuna-ohana"],
    },
  },
];

// ── Helpers ────────────────────────────────────────────────

export function getTestimonialsForLocation(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.tags?.locations?.includes(slug));
}

export function getTestimonialsForService(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.tags?.services?.includes(slug));
}

/**
 * Accepts either the segment slug (`for-families`) or the short tag (`families`).
 */
export function getTestimonialsForSegment(slugOrTag: string): Testimonial[] {
  const tag = slugOrTag.startsWith("for-") ? slugOrTag.slice(4) : slugOrTag;
  return testimonials.filter((t) => t.tags?.segments?.includes(tag));
}

/**
 * Curated mix across segments for the homepage. Picks at most one per
 * (segment, source) combo in priority order, then fills with anything left.
 */
export function getFeaturedTestimonials(n: number): Testimonial[] {
  const pickedNames = new Set<string>();
  const picks: Testimonial[] = [];

  const picksOrder: { segment: string; locationHint?: string; source?: TestimonialSource }[] = [
    { segment: "families", locationHint: "hilo", source: "google" },
    { segment: "kupuna-ohana", source: "google" },
    { segment: "contractors", source: "google" },
    { segment: "realtors", source: "google" },
    { segment: "families", source: "google" },
    { segment: "kupuna-ohana", source: "yelp" },
    { segment: "families", source: "yelp" },
    { segment: "contractors", source: "yelp" },
    { segment: "realtors", source: "yelp" },
  ];

  for (const want of picksOrder) {
    if (picks.length >= n) break;
    const match = testimonials.find(
      (t) =>
        !pickedNames.has(t.name) &&
        t.tags?.segments?.includes(want.segment) &&
        (want.source ? t.source === want.source : true) &&
        (want.locationHint ? t.tags?.locations?.includes(want.locationHint) : true),
    );
    if (match) {
      picks.push(match);
      pickedNames.add(match.name);
    }
  }

  // Fill with anything remaining if we couldn't hit n with the priority list.
  for (const t of testimonials) {
    if (picks.length >= n) break;
    if (!pickedNames.has(t.name)) {
      picks.push(t);
      pickedNames.add(t.name);
    }
  }

  return picks.slice(0, n);
}
