export interface CustomerSegment {
  slug: string;
  title: string;
  shortLabel: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  promise: string;
  intro: string[];
  painPoints: { title: string; body: string }[];
  howWeHelp: string[];
  recommendedServices: string[];
  testimonialNames?: string[];
}

export const customerSegments: CustomerSegment[] = [
  {
    slug: "for-families",
    title: "For Everyday Families",
    shortLabel: "Everyday Families",
    metaTitle: "Junk Removal for Families on Hawai'i Island | Hawaii Island Waste",
    metaDescription:
      "Reclaim your weekends. Full-service junk removal, garage cleanouts and household clearing for Hawai'i Island families. Call 808-300-9766.",
    tagline: "Reclaim your weekends. Reclaim your sanctuary.",
    promise:
      "We take on the physical burden of junk removal so you can enjoy a clean, organized home without the stress.",
    intro: [
      "Family life on the island piles up fast — kids grow, projects start and stop, the garage absorbs anything that doesn't have a home. Eventually you can't find the lawn mower and the lanai has become storage.",
      "We help families across Hawai'i Island reclaim their space without sacrificing their weekends. You point at what needs to go. We carry it, sort it, route what we can to donation, and haul the rest.",
    ],
    painPoints: [
      { title: "Clutter that's stealing your weekends", body: "Every Saturday becomes a half-finished cleanup that turns into next Saturday's problem." },
      { title: "Heavy items you can't move alone", body: "Old sofas, broken appliances, mattresses you can't even get out the door." },
      { title: "Dump-run drama", body: "Multiple loads to Hilo's transfer station, sorting rules, lines, limits." },
      { title: "Garage that hasn't fit a car in years", body: "Storage that became chaos that became a wall of stuff." },
    ],
    howWeHelp: [
      "One visit clears it all — you don't move a thing",
      "Same-day and next-day appointments when available",
      "Weekend and after-work scheduling",
      "Donation routing for usable items",
      "Final sweep so the space is ready to use",
      "Free, no-pressure estimates by photo or on-site",
    ],
    recommendedServices: ["residential-junk-removal", "garage-cleanouts", "yard-waste-removal", "furniture-removal"],
    testimonialNames: ["Valerie V.", "Kamreyn M."],
  },
  {
    slug: "for-kupuna-ohana",
    title: "For Kūpuna & Their 'Ohana",
    shortLabel: "Kūpuna & 'Ohana",
    metaTitle: "Cleanouts for Kūpuna & 'Ohana on Hawai'i Island | Hawaii Island Waste",
    metaDescription:
      "Compassionate estate cleanouts and downsizing support for kūpuna and their families on Hawai'i Island. Call 808-300-9766.",
    tagline: "Compassionate strength and dignity for life's transitions.",
    promise:
      "Our full-service support handles the heavy lifting, allowing families to focus on each other with dignity and care.",
    intro: [
      "Caring for a kupuna's home — or clearing it after they're gone — is one of the heaviest jobs a family can take on. There's logistics, there's emotion, there's a lifetime of belongings to sort. And it usually has to happen on someone else's timeline.",
      "We bring our most experienced crews to kūpuna and estate work. We move at your family's pace. We set aside what looks important — photos, documents, jewelry — for your review. We never touch what shouldn't be touched, and we treat the home like it's our own ohana's.",
    ],
    painPoints: [
      { title: "Aging in place with too much stuff", body: "Decades of belongings make daily life harder and the home less safe." },
      { title: "Downsizing to a smaller home or care facility", body: "Time pressure, emotional weight, and physical demands all at once." },
      { title: "Settling an estate from out of state", body: "Family flies in for a week — needs everything handled while they're here." },
      { title: "Preparing a kupuna's home for sale", body: "Years of accumulation between you and a market-ready listing." },
    ],
    howWeHelp: [
      "Free, in-home consultations with the family",
      "Phased schedules that match the household's pace",
      "Sorting for keepsakes, photos, documents, medications",
      "Donation routing to local charities when possible",
      "Coordination with realtors, executors and care agencies",
      "Final clean so the home is livable or list-ready",
    ],
    recommendedServices: ["estate-cleanouts", "hoarder-cleanouts", "furniture-removal", "residential-junk-removal"],
    testimonialNames: ["Donn U.", "Valerie V."],
  },
  {
    slug: "for-contractors",
    title: "For Contractors & Developers",
    shortLabel: "Contractors & Developers",
    metaTitle: "Contractor Debris Removal & Demolition on Hawai'i Island | Hawaii Island Waste",
    metaDescription:
      "Reliable site cleanup, demolition and dumpster rentals for contractors across Hawai'i Island. Keep your build on schedule. Call 808-300-9766.",
    tagline: "Reliable site cleanup. On-time. On budget.",
    promise:
      "Keep your project timeline and budget on track with reliable site cleanup. We handle demolition debris and final cleanouts efficiently, so you can focus on building.",
    intro: [
      "Contractors don't have time to babysit waste. Every hour you spend on dump runs is an hour off the build, and every full dumpster sitting on-site is a tripping hazard and a deadline you'll miss.",
      "We schedule around your crew — daily pickups, recurring schedules, or one-time tear-outs. Licensed, $2M liability insured, DOT-compliant. We bring the equipment, you stay focused on building.",
    ],
    painPoints: [
      { title: "Debris piling up faster than you can haul it", body: "Drywall, lumber, roofing, demo waste — your trucks aren't dump trucks." },
      { title: "Demo phase eating your schedule", body: "Interior tear-outs take longer than they should without the right crew." },
      { title: "Inconsistent haulers", body: "Last-minute no-shows that put your build behind by days." },
      { title: "Final cleanup before turnover", body: "Job's done — except the punch-list mess that needs to disappear before walk-through." },
    ],
    howWeHelp: [
      "Recurring job-site pickups on your schedule",
      "Interior demolition and tear-out crews",
      "Roll-off dumpsters in the right size for your phase",
      "Same-week or same-day turnaround",
      "Insured, COI on request",
      "Featured on HGTV's Renovation Aloha — we know how to work with film crews and tight schedules",
    ],
    recommendedServices: ["construction-debris", "interior-demolition", "demolition-services", "dumpster-rentals"],
  },
  {
    slug: "for-realtors",
    title: "For Realtors & Property Managers",
    shortLabel: "Realtors & Property Managers",
    metaTitle: "Property Cleanouts for Realtors on Hawai'i Island | Hawaii Island Waste",
    metaDescription:
      "Fast property cleanouts and pre-listing prep for realtors and property managers across Hawai'i Island. Call 808-300-9766.",
    tagline: "List faster. Sell faster. Make properties market-ready in one visit.",
    promise:
      "Instantly boost curb appeal and property value with our professional cleanout service. We quickly transform cluttered spaces into market-ready listings.",
    intro: [
      "Clutter kills curb appeal and stretches days-on-market. Tenant turnovers, post-foreclosure messes, overstuffed estates — every one of them stands between you and a clean listing photo.",
      "We're the team realtors and property managers across Hawai'i Island call when a property needs to be photo-ready by next week. We scale crew size to project size, coordinate with your timeline, and deliver a property your client is proud to list.",
    ],
    painPoints: [
      { title: "Tenant turnover messes", body: "Furniture, junk, leftover appliances — between you and the next lease." },
      { title: "Pre-listing prep on a deadline", body: "Photographer scheduled, property still full of stuff." },
      { title: "Foreclosure and trash-out work", body: "REO properties that need a full reset before they can hit MLS." },
      { title: "Estate sales for out-of-state clients", body: "Heirs out of state, you're the local lead — and the house has 30 years of accumulation." },
    ],
    howWeHelp: [
      "Same-week scheduling for time-sensitive listings",
      "Coordination with property managers and brokerages",
      "Yard, garage, lanai and interior in one visit",
      "Light landscaping and curb-appeal cleanup",
      "Photo-ready final sweep",
      "Transparent flat-rate pricing for most cleanouts",
    ],
    recommendedServices: ["property-cleanouts", "estate-cleanouts", "hoarder-cleanouts", "yard-waste-removal"],
    testimonialNames: ["Todd Y."],
  },
];

export function getSegment(slug: string): CustomerSegment | undefined {
  return customerSegments.find((s) => s.slug === slug);
}
