export interface FAQ {
  category: "general" | "pricing" | "service-area" | "items" | "process" | "insurance";
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  // ───────────────── GENERAL ─────────────────
  {
    category: "general",
    q: "What does Hawaii Island Waste do?",
    a: "We're a locally owned, family-run company providing full-service junk removal, demolition, dumpster rentals and estate cleanouts across Hawaiʻi Island. We started in 2021 in Hilo and now serve the whole Big Island.",
  },
  {
    category: "general",
    q: "Where is Hawaii Island Waste based?",
    a: "Our base is in Hilo on the east side of Hawaiʻi Island. Operating hours are Monday through Sunday, 7am to 8pm. We service the entire island (Hawaiʻi County) — east-side jobs are usually same-day or next-day, while Kona, Kohala and Kaʻū jobs run on scheduled days.",
  },
  {
    category: "general",
    q: "Are you locally owned?",
    a: "Yes. Hawaii Island Waste was founded October 5, 2021 by Sherman 'Naea' and Chae Kaopua during the pandemic, and it's still family-owned and operated. The company was featured on HGTV's Renovation Aloha (Season 2, Episode 4) for a Waikoloa Village demolition.",
  },
  {
    category: "general",
    q: "Do you serve the whole Big Island or just Hilo?",
    a: "Whole island. The east side — Hilo, Puna, and Hāmākua south of Honokaʻa — is our home territory and runs same-day or next-day in most cases. North Kohala, Waimea, Kona side and Kaʻū are scheduled-day runs, typically within 2-3 days.",
  },
  {
    category: "general",
    q: "Who actually shows up?",
    a: "Our trained, uniformed crew — not random subcontractors. The business was started by Sherman 'Naea' and Chae Kaopua in 2021 and grew from a single family truck. Naea or one of our lead crew members manages every job.",
  },

  // ───────────────── ITEMS ─────────────────
  {
    category: "items",
    q: "What items do you take?",
    a: "Almost everything — furniture, appliances, mattresses, TVs and e-waste, hot tubs, sheds, decks, fences, construction debris, yard and green waste, estate-cleanout contents, and hoarder cleanouts. See our full Items We Take page for the detailed list. We donate or recycle whatever we can before sending the rest to the proper Hawaiʻi County facility.",
  },
  {
    category: "items",
    q: "Do you take green waste / yard waste?",
    a: "Yes. Tree limbs, palm fronds, brush, hedge clippings, storm debris — we haul it. Green waste from our jobs routes to the East Hawaiʻi Organics Facility in Hilo or the West Hawaiʻi Organics Facility in Puʻuanahulu, where it's composted into mulch rather than landfilled.",
  },
  {
    category: "items",
    q: "Do you take e-waste, TVs, and old electronics?",
    a: "Yes. E-waste is banned from Hawaiʻi County landfills, so we route TVs (CRT, LCD, plasma, flat-panel), computers, monitors, printers and small electronics through proper recycling channels. Just point at the pile.",
  },
  {
    category: "items",
    q: "Do you take appliances with refrigerant (fridges, AC units, freezers)?",
    a: "Yes. Refrigerant-containing appliances — refrigerators, freezers, window AC units, mini-splits, wine coolers — require special handling under federal and state rules. We route them properly so they're not landfilled with the rest.",
  },
  {
    category: "items",
    q: "What about hazardous materials, paint, chemicals, asbestos?",
    a: "No — those need specialized handling we're not licensed for. For paint and chemicals, the County of Hawaiʻi's household hazardous waste (HHW) collection events are the right route. For asbestos (common in pre-1980 structures on Hawaiʻi Island), you'll need a licensed abatement contractor first; we can come in after for the cleared debris.",
  },
  {
    category: "items",
    q: "Do you take tires and car batteries?",
    a: "Tires and lead-acid batteries are landfill-banned in Hawaiʻi. We can usually take them but may charge a small handling fee since they have to be routed to specific recycling facilities. Ask when you call so we can quote it right.",
  },
  {
    category: "items",
    q: "Where does my junk actually go?",
    a: "We don't just head straight to the landfill. We prioritize donating usable items to local charities and routing recyclables (metals, e-waste, green waste, cardboard) to proper handlers whenever possible. General loads route to the East Hawaiʻi Regional Sort Station in Hilo or the West Hawaiʻi Sanitary Landfill at Puʻuanahulu; all construction and demolition debris is required by Hawaiʻi County to go to Puʻuanahulu.",
  },

  // ───────────────── PROCESS ─────────────────
  {
    category: "process",
    q: "How does it work?",
    a: "Five steps. (1) Request a quote — call, text photos, or use the form. (2) We confirm scope and schedule a window. (3) Our crew arrives in the window we agreed on. (4) You point — we do the rest. (5) We sweep up, you sign off, and we route everything to the right facility.",
  },
  {
    category: "process",
    q: "Do I need to be home?",
    a: "No, as long as we can access the items and you have payment info on file. Many of our estate-cleanout and realtor clients are off-island — we coordinate by phone, text and photo and send confirmation pictures when the job is done.",
  },
  {
    category: "process",
    q: "Do I need to move everything to the curb?",
    a: "Not at all. Our 'Full-Service' means we take it from wherever it sits — the backyard, the garage, the second floor, the lanai. You don't have to lift a finger.",
  },
  {
    category: "process",
    q: "How fast can you come?",
    a: "Hilo and east-side Puna jobs are usually same-day or next-day. Kona side, North Kohala, Waimea and Kaʻū are scheduled runs — typically within 2-3 days. The fastest way to lock in a window is to call 808-300-9766.",
  },
  {
    category: "process",
    q: "How much notice do you need for a dumpster?",
    a: "24-48 hours for east-side delivery in most cases; longer for Kona side and Kaʻū. We size the dumpster to the job — there's no point renting more than you need, and we can swap or pull as soon as you're done.",
  },
  {
    // TODO(JUSTIN): Client only priced a 15-yard bin. If HIW only rents the
    // 15-yard, rewrite this answer accordingly. Currently assumes 15-yard is
    // the standard published size and other sizes are by quote.
    category: "process",
    q: "How big are your dumpsters?",
    a: "Our standard published bin is a 15 cubic-yard roll-off — the right size for most renovations, garage cleanouts and yard projects. Larger or smaller sizes are available by quote. We'll recommend the right size for your job so you're not paying for a second haul or for capacity you won't use.",
  },

  // ───────────────── PRICING ─────────────────
  {
    category: "pricing",
    q: "How much does junk removal cost on the Big Island?",
    a: "Pricing is volume-based — what fits in our truck, not what's in it. We have an honest minimum for a single-item pickup that scales up by truck-load. You get a firm written quote before we start, so there are no surprises. Call or text photos to 808-300-9766 for the fastest quote.",
  },
  {
    category: "pricing",
    q: "How much does a dumpster rental cost on the Big Island?",
    a: "Our standard 15-yard, 2-day bin rental starts at $400 in the Hilo, Puna and Keaʻau core ($400 covers Hilo, Keaʻau, HPP, Kurtistown, Papaʻikou and Pepeʻekeo) and scales up by distance from our Hilo base — $450 for Pāhoa and Mountain View, $525 for the Hāmākua coast and Volcano, $775 for Honokaʻa, Waimea and Kaʻū, $850 for Waikoloa, and $925 for the Kona side. A County of Hawaiʻi disposal fee is charged on top at the exact tonnage offloaded ($154/ton for construction debris and household material, $129/ton for scrap metal, $39/ton for green waste). Additional days beyond the first 2 are $15 per day. Contact us for multiple-bin, military, senior or contractor rates.",
  },
  {
    category: "pricing",
    q: "Are estimates really free?",
    a: "Yes. We give written estimates with no obligation. Photo quotes work great for smaller jobs; for larger projects we'll come walk the site at no charge.",
  },
  {
    category: "pricing",
    q: "What does demolition cost?",
    a: "Demolition pricing varies widely based on structure type, size, and disposal volume. All C&D debris from our jobs is required to be hauled to the West Hawaiʻi Sanitary Landfill at Puʻuanahulu (Hawaiʻi County rule), so tipping fees factor into the quote. Permits, manifests and tipping fees are all included up front — you don't get a surprise bill.",
  },
  {
    category: "pricing",
    q: "Do you charge extra for stairs, long carries, or difficult access?",
    a: "Sometimes — long approach drives in HPP, steep Kaumana lots, or multi-flight stairs can add time. When they do, we tell you up front in the quote, not after the fact. Normal residential stairs and carries are included.",
  },
  {
    category: "pricing",
    q: "Do you accept credit cards?",
    a: "Yes — cash, card, check, and Venmo are all accepted. Payment is on completion when you've signed off on the job.",
  },

  // ───────────────── SERVICE AREA ─────────────────
  {
    category: "service-area",
    q: "What areas do you serve?",
    a: "Our home base is Hilo, and we serve all of Hawaiʻi Island. Our most regular service area is east Hawaiʻi — Hilo, Keaʻau, Pāhoa, Puna, Volcano, Mountain View and the lower Hāmākua coast. We also cover the north (Honokaʻa, Waimea, Hāwī, Kapaʻau), the west / Kona side, and Kaʻū on scheduled days.",
  },
  {
    category: "service-area",
    q: "Do you service Waimea, Kona, Volcano or Ocean View?",
    a: "Yes — we service the entire island. Our base is in Hilo so the east side is same-day or next-day; Waimea, Kona side and Ocean View (HOVE) run on scheduled days, typically 2-3 days out. Check the Service Area page for response-time notes per town.",
  },
  {
    category: "service-area",
    q: "Do you service the resort areas (Waikoloa Beach, Mauna Lani, Hāpuna)?",
    a: "Yes — we handle condo cleanouts, vacation-rental turnovers, contractor debris and resort-side projects on scheduled Kohala-side days. We're familiar with the gate access and HOA staging rules for the major properties along Queen Kaʻahumanu Highway.",
  },
  {
    category: "service-area",
    q: "Why does Kona side take longer than Hilo?",
    a: "We're based in Hilo, and Kona is about 2 hours via Saddle Road (Daniel K. Inouye Hwy) or nearly 3 via the Belt Road. Rather than racing across the island for one job, we batch Kona-side projects on scheduled runs — better for you, better for the equipment, better for the price.",
  },

  // ───────────────── INSURANCE ─────────────────
  {
    category: "insurance",
    q: "Are you licensed and insured?",
    a: "Yes. We carry a $2M general liability policy plus crew coverage. Our trucks and drivers are DOT-compliant with regular inspections and proper load securement. We'll send proof of insurance on request.",
  },
  {
    category: "insurance",
    q: "What if something gets damaged during the job?",
    a: "Our liability coverage handles property damage caused by our crew. We've never had a claim, but the protection is there — that's the whole point of carrying a real policy rather than the bare-minimum coverage some haulers skate by on.",
  },
  {
    category: "insurance",
    q: "Do you need a permit to demolish a structure in Hawaiʻi County?",
    a: "Most demolition work requires a Hawaiʻi County demolition permit through the Department of Public Works. For structures built before 1980, an asbestos survey is also required before the permit will be issued. We handle the permitting on demolition projects we do — you don't have to figure it out.",
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
