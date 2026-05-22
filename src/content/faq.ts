export interface FAQ {
  category: "general" | "pricing" | "service-area" | "items" | "process" | "insurance";
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  {
    category: "general",
    q: "What does Hawaii Island Waste do?",
    a: "We're a locally owned, family-run company providing full-service junk removal, demolition, dumpster rentals and estate cleanouts across Hawaiʻi Island. We started in 2021 in Hilo and now serve the whole Big Island.",
  },
  {
    category: "general",
    q: "Are you licensed and insured?",
    a: "Yes. We carry a $2 Million Liability Policy, every member of our crew is fully insured, and we are DOT compliant — our trucks and drivers meet Department of Transportation safety standards with regular inspections and proper load securement.",
  },
  {
    category: "general",
    q: "Who actually shows up?",
    a: "Our trained, uniformed crew — not random subcontractors. The business was started by Sherman 'Naea' and Chae Kaopua in 2021 and grew from a single family truck. Naea or one of our lead crew members manages every job.",
  },
  {
    category: "items",
    q: "What kind of \"junk\" do you actually take?",
    a: "Almost anything. We handle old furniture, appliances, electronics (e-waste), mattresses, yard waste, construction debris, hot tubs, sheds, decks, and more. If it's taking up space and it isn't hazardous, we can likely haul it away.",
  },
  {
    category: "items",
    q: "Is there anything you cannot take?",
    a: "To keep our team safe and protect the ʻāina, we cannot haul liquid hazardous materials. This includes: liquid paint (oil-based or latex that hasn't been dried out), and automotive fluids (gasoline, engine oil, transmission fluid, antifreeze). Tires are case-by-case — ask us when you call.",
  },
  {
    category: "items",
    q: "Where does my junk actually go?",
    a: "We don't just head straight to the landfill. We prioritize donating usable items to local charities and routing recyclables (metals, e-waste, green waste, cardboard) to proper handlers whenever possible. What's left goes to legal disposal at appropriate facilities.",
  },
  {
    category: "process",
    q: "Do I need to move everything to the curb?",
    a: "Not at all. Our 'Full-Service' means we take it from wherever it sits — the backyard, the garage, the second floor, the lanai. You don't have to lift a finger.",
  },
  {
    category: "process",
    q: "How does the process work?",
    a: "Three steps: (1) Contact us for a free estimate by phone, text, photo or on-site walk-through. (2) Pick a scheduling window that works for you. (3) Our crew arrives on time, you show us what stays and what goes, and we handle the rest — loading, hauling, sweeping up.",
  },
  {
    category: "process",
    q: "Do you offer same-day or next-day service?",
    a: "Often yes, especially for jobs in Hilo, Keaʻau, Puna and the lower Hāmākua coast. Call us and we'll check the schedule. Larger projects and Kona-side work usually need a bit more notice.",
  },
  {
    category: "process",
    q: "Do you offer free estimates?",
    a: "Always. You can send a photo by text, describe the project over the phone, or have us swing by for an on-site walk-through. No obligation, no pressure.",
  },
  {
    category: "pricing",
    q: "How much does it cost?",
    a: "Pricing is generally based on volume — how much space your items take up in our truck — plus any complicating factors like demolition, hot tub disassembly, or multi-floor carries. Every job is unique, so we offer free, no-obligation estimates. Photo quotes work great for smaller jobs.",
  },
  {
    category: "pricing",
    q: "Do you charge extra for stairs, basements or distance?",
    a: "Not for normal residential stairs or carries. If the job is unusually long-distance from the truck or involves heavy multi-floor work, we'll mention it in your quote so there are no surprises.",
  },
  {
    category: "pricing",
    q: "Do you accept credit cards?",
    a: "Yes — cash, card, check, and Venmo are all accepted. Payment is on completion when you've signed off on the job.",
  },
  {
    category: "service-area",
    q: "What areas do you serve?",
    a: "Our home base is Hilo, and we serve all of Hawaiʻi Island. Our most regular service area is east Hawaiʻi — Hilo, Keaʻau, Pāhoa, Puna, Volcano, Mountain View, and the lower Hāmākua coast. We also cover the north (Honokaʻa, Waimea, Hāwī, Kapaʻau), the west / Kona side, and Kaʻū on scheduled days. Larger projects on the Kona side may have project minimums.",
  },
  {
    category: "service-area",
    q: "Do you really go all the way to Kona / Waikoloa / Kaʻū?",
    a: "Yes — but on scheduled days. The drive from Hilo to Kona is roughly 2 hours via Saddle Road and 3 via the belt. For Kona-side, Waikoloa or Kaʻū work, ask about our scheduled days and minimums when you call. We've worked across the whole island, including a Waikoloa Village project featured on HGTV's Renovation Aloha.",
  },
  {
    category: "insurance",
    q: "Why does insurance matter for my home or business?",
    a: "Lower-cost haulers often don't carry meaningful insurance, which means if something gets damaged or someone gets hurt on your property, the liability can fall on you. We carry a $2M liability policy and fully insure every crew member, so the responsibility stays with us — not you.",
  },
  {
    category: "insurance",
    q: "Can you provide a Certificate of Insurance (COI)?",
    a: "Yes — we provide COIs on request for property managers, brokerages, HOAs and commercial sites. Let us know who needs to be listed and we'll get it over to you.",
  },
];

export const faqsByCategory = faqs.reduce<Record<FAQ["category"], FAQ[]>>(
  (acc, f) => {
    if (!acc[f.category]) acc[f.category] = [];
    acc[f.category].push(f);
    return acc;
  },
  {} as Record<FAQ["category"], FAQ[]>
);
