export interface ItemCategory {
  title: string;
  /** 2-3 sentence Big Island context: routing, facility, why this matters. */
  context: string;
  items: string[];
}

export const itemsWeTake: ItemCategory[] = [
  {
    title: "Household & Furniture",
    context:
      "Sofas to mattresses to the upright piano nobody's played since the kids moved away — we take it from wherever it sits, no need to drag it out front. Usable furniture in good shape gets routed to local charities and reuse channels first. Everything else goes through the East Hawaiʻi Regional Sort Station in Hilo.",
    items: [
      "Sofas, sectionals, sleeper sofas, loveseats",
      "Recliners and lift chairs",
      "Beds, mattresses, box springs (any size)",
      "Dressers, armoires, nightstands",
      "Dining tables and chair sets",
      "Coffee tables, end tables, entertainment centers",
      "Bookshelves and china hutches",
      "Office furniture, desks, file cabinets",
      "Patio and lanai furniture",
      "Wicker and rattan sets",
      "Upright pianos (grand pianos by quote)",
      "Rugs, carpets and pads",
    ],
  },
  {
    title: "Appliances (Refrigerant Handled Properly)",
    context:
      "Refrigerators, freezers and AC units contain refrigerant that has to be handled under federal rules — not just tossed in the back of a pickup. We route refrigerant-containing units through the proper channels so they're recovered, not vented. Working appliances get a second look for reuse before disposal.",
    items: [
      "Refrigerators, freezers, ice makers",
      "Wine coolers and beverage fridges",
      "Washers and dryers (including stacked units)",
      "Dishwashers",
      "Stoves, ranges, ovens, cooktops",
      "Microwaves and trash compactors",
      "Window AC units",
      "Mini-split indoor and outdoor units",
      "Dehumidifiers (essential gear on the windward side)",
      "Tankless and tank water heaters",
    ],
  },
  {
    title: "Electronics / E-Waste (Landfill-Banned in Hawaiʻi)",
    context:
      "TVs, monitors and electronics are banned from Hawaiʻi County landfills — they have to be routed through certified e-waste recyclers. We handle that for you so your old plasma TV doesn't end up in the wrong place. Tube TVs and CRT monitors are fine; we take them with everything else.",
    items: [
      "Tube (CRT) TVs",
      "Flat-screen, plasma and projection TVs",
      "Desktop computers and laptops",
      "Computer monitors",
      "Printers, copiers and scanners",
      "Stereos, speakers and AV equipment",
      "Game consoles and DVD/Blu-Ray players",
      "Small electronics, cables and peripherals",
    ],
  },
  {
    title: "Yard & Green Waste (Composted, Not Landfilled)",
    context:
      "Green waste from our jobs routes to the East Hawaiʻi Organics Facility in Hilo or the West Hawaiʻi Organics Facility in Puʻuanahulu, where it gets composted into mulch and soil amendments. Storm cleanup, post-hurricane debris, and post-storm runs are something we do a lot of on the windward side. Untreated wood and clean green debris are kept separate from contaminated loads.",
    items: [
      "Tree limbs, branches, downed trunks",
      "Palm fronds and coconut piles",
      "Brush, hedge trimmings, vine pulls",
      "Grass clippings and lawn debris",
      "Post-storm debris and downed trees",
      "Landscaping debris and old mulch",
      "Untreated wood pallets",
      "Potting soil and pots",
    ],
  },
  {
    title: "Construction & Demolition (Routed to Puʻuanahulu per County Rules)",
    context:
      "All construction and demolition (C&D) debris generated on Hawaiʻi Island is required by the County to be hauled to the West Hawaiʻi Sanitary Landfill at Puʻuanahulu — there is no east-side C&D option. We have the trucks, the permits and the manifests to do it legally and include tipping fees in your quote. Recoverable metals and clean lumber get pulled out for recycling first.",
    items: [
      "Drywall, plaster, sheetrock",
      "Tile, flooring, carpet and padding",
      "Lumber, framing scraps, plywood",
      "Roofing, shingles and metal roofing",
      "Concrete, brick and masonry (volume limits)",
      "Lava rock and basalt from site clearing",
      "Demo debris from sheds, decks, fences, lanais",
      "Cabinets, countertops and plumbing fixtures",
      "Windows and doors",
      "Metal scrap and rebar",
    ],
  },
  {
    title: "Demolition Projects",
    context:
      "Sheds, decks, fences, hot tubs, lanais, kitchen and bath tear-outs — we handle the demolition and haul-off as one job. For structures that require a Hawaiʻi County demolition permit (and pre-1980 structures that need an asbestos survey first), we manage the paperwork so it gets done right.",
    items: [
      "Sheds — wood, metal, plastic",
      "Decks, lanais and pergolas",
      "Fencing — wood, chain-link, vinyl",
      "Hot tubs and spas",
      "Above-ground pools",
      "Gazebos and outdoor structures",
      "Interior non-structural walls",
      "Kitchen and bathroom tear-outs",
    ],
  },
  {
    title: "Island-Specific Items",
    context:
      "Living on Hawaiʻi Island means hauling things mainland companies have never heard of — old catchment tank liners, lava rock piles, coffee farm debris, ranch outbuilding contents. We've worked all of it. If it's part of island life, we know how to handle it.",
    items: [
      "Catchment tank parts and old liners (common Puna, Volcano, off-grid properties)",
      "Lava rock and basalt boulders from landscape clearing",
      "Beach chairs, paddleboards, surfboards, snorkel gear",
      "Coffee farm debris — bags, ag plastic, pulper waste (Holualoa, Captain Cook, Hōnaunau — ask about specifics)",
      "Ranch outbuilding contents (Waimea, Hāmākua paniolo country)",
      "Post-storm tarps, sandbags and salvage piles",
      "Vacation rental and condo turnover loads",
      "Coconut piles and orchard prunings",
    ],
  },
  {
    title: "Estate & Property Cleanouts",
    context:
      "Estate cleanouts, hoarder situations, pre-sale realtor clearouts — these get handled with discretion. We sort on-site: donations first, recycling second, and only what's left goes to the landfill. Many of our realtor and probate clients are off-island; we coordinate by phone and photo.",
    items: [
      "Full-house contents (we sort: donate, recycle, dispose)",
      "Hoarder cleanouts handled with compassion and discretion",
      "Garage, shed and storage accumulations",
      "Pre-sale realtor cleanouts",
      "Probate and inherited property contents",
      "Vacation rental and Airbnb full clear-outs",
      "Office and small-business closeouts",
    ],
  },
  {
    title: "Household Junk & Specialty",
    context:
      "The miscellaneous category — boxes, bags, toys, exercise equipment, things you can't quite name. If it's taking up space and isn't hazardous, we can almost certainly take it.",
    items: [
      "Boxes, bags and packing material",
      "Clothing, linens and textiles",
      "Toys and sports equipment",
      "Exercise equipment and home gyms",
      "Kitchenware, dishes and glassware",
      "Books and magazines",
      "Holiday decor",
      "Tools (working or broken)",
      "Pool tables and arcade cabinets",
      "Residential safes",
      "Restaurant and retail equipment",
    ],
  },
];

export const itemsWeDoNotTake = [
  "Hazardous chemicals and pesticides — route to the County's HHW collection events",
  "Liquid paint (oil-based or undried latex) — same: County HHW events",
  "Automotive fluids — gasoline, engine oil, transmission fluid, antifreeze",
  "Asbestos-containing material — requires a licensed abatement contractor first; we'll take the cleared debris after",
  "Medical waste, sharps and biohazards",
  "Live ammunition, explosives, fireworks",
  "Wet or leaking containers of unknown contents",
];
