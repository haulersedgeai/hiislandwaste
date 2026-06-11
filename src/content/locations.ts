export type Region = "east-hawaii" | "north-hawaii" | "west-hawaii" | "south-hawaii";

export type RoutedFacility =
  | "east-sort-station"
  | "west-landfill"
  | "east-organics"
  | "west-organics";

export type ResponseWindow =
  | "Same-day or next-day"
  | "Scheduled — typically 2-3 days"
  | "Scheduled days only";

export interface Location {
  slug: string;
  name: string;
  fullName: string;
  region: Region;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  roads: string[];
  /** Where general loads from this town route. Demo/C&D always goes to West Hawaiʻi Landfill regardless. */
  routedTo?: RoutedFacility[];
  /** 2–3 sentence note: road approach, elevation/climate, lot type, anything affecting job logistics. */
  localNotes?: string;
  /** Honest response-time window based on distance from Hilo base. */
  responseTime?: ResponseWindow;
}

export const FACILITY_DETAILS: Record<RoutedFacility, { name: string; place: string; description: string }> = {
  "east-sort-station": {
    name: "East Hawaiʻi Regional Sort Station",
    place: "Hilo",
    description:
      "the County of Hawaiʻi's east-side facility for residential and commercial loads, off Kanoelehua Avenue in Hilo.",
  },
  "west-landfill": {
    name: "West Hawaiʻi Sanitary Landfill",
    place: "Puʻuanahulu",
    description:
      "the County's only active sanitary landfill — and the required destination for all construction & demolition (C&D) and grading & grubbing (G&G) debris from anywhere on Hawaiʻi Island.",
  },
  "east-organics": {
    name: "East Hawaiʻi Organics Facility",
    place: "Hilo",
    description: "the east-side composting facility for greenwaste and yard waste.",
  },
  "west-organics": {
    name: "West Hawaiʻi Organics Facility",
    place: "Puʻuanahulu",
    description: "the west-side composting facility for greenwaste and yard waste.",
  },
};

export const regions: Record<
  Region,
  { name: string; tagline: string; intro: string; description: string }
> = {
  "east-hawaii": {
    name: "East Hawaiʻi",
    tagline: "Hilo, Puna & lower Hāmākua — our home base.",
    intro:
      "East Hawaiʻi is where we started and where we work the most. From Hilo Bay up through the windward Hāmākua coast and out to the Puna lava fields, our crews know the back roads, the subdivisions, and the rain.",
    description:
      "Full-service junk removal, demolition, dumpster rentals and estate cleanouts across Hilo, Keaʻau, Pāhoa, Volcano, the Hāmākua coast and every Puna subdivision.",
  },
  "north-hawaii": {
    name: "North Hawaiʻi",
    tagline: "Hāmākua, Waimea & Kohala — ranch country, coast country.",
    intro:
      "North Hawaiʻi runs the Hāmākua coast through Honokaʻa and up into Waimea cattle country, then over the top of the island to Hāwī and Kapaʻau. We service the whole stretch.",
    description:
      "Junk removal, demolition and cleanouts across Honokaʻa, Paʻauilo, Waimea, Hāwī and Kapaʻau — the Hāmākua and Kohala communities.",
  },
  "west-hawaii": {
    name: "West Hawaiʻi",
    tagline: "Kona coast & south Kohala resort country.",
    intro:
      "West Hawaiʻi — the Kona side — is sunnier, drier, and a longer haul from Hilo. We service Kailua-Kona, Waikoloa, the coffee belt and the resort coast on scheduled days. For larger Kona-side projects, ask about minimums and we'll make it work.",
    description:
      "Scheduled service to Kailua-Kona, Holualoa, Kealakekua, Captain Cook, Hōnaunau, Keauhou, Waikoloa Village, Waikoloa Beach Resort and Puakō.",
  },
  "south-hawaii": {
    name: "South Hawaiʻi (Kaʻū)",
    tagline: "Nāʻālehu, Ocean View & Pāhala — the southernmost reach.",
    intro:
      "The Kaʻū district covers everything south of Volcano: Pāhala, Nāʻālehu, Hawaiian Ocean View Estates, all the way to South Point. It's a big stretch with small populations — we serve it on scheduled days, especially for larger cleanouts and demolitions.",
    description:
      "Scheduled service to Nāʻālehu, Ocean View (HOVE) and Pāhala — the Kaʻū district communities.",
  },
};

export const locations: Location[] = [
  // ────────────── EAST HAWAIʻI ──────────────
  {
    slug: "hilo",
    name: "Hilo",
    fullName: "Hilo, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Hilo HI | Demolition & Dumpsters | Hawaii Island Waste",
    metaDescription:
      "Locally-owned junk removal, demolition, dumpster rental and estate cleanouts in Hilo. Free quotes, same-week service, $2M insured. Call 808-300-9766.",
    intro:
      "Hilo is home base. From downtown along the Bayfront to Kaumana on the uphill side and Keaukaha on the bay, our crews are working a Hilo job almost every day. We know the rain, we know the narrow neighborhood streets, and we know how to keep mud off your floors when the windward weather hits.",
    neighborhoods: ["Downtown Hilo", "Bayfront", "Kaumana", "Waiākea", "Keaukaha", "Pana'ewa", "Wainaku", "Piʻihonua"],
    landmarks: ["Hilo Bay", "Liliʻuokalani Gardens", "Wailoa River State Park", "Rainbow Falls", "Banyan Drive", "Hilo Farmers Market", "Coconut Island (Moku Ola)"],
    roads: ["Hawaii Belt Road", "Highway 11", "Highway 19", "Bayfront Highway", "Kanoelehua Avenue"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Hilo is windward rainforest — averaging around 130 inches of rain a year — so older downtown homes sit on tight lots with carports and narrow driveways that need careful truck staging. Our base is here, so we can almost always work a Hilo job within a day or two.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "kaumana",
    name: "Kaumana",
    fullName: "Kaumana, Hilo",
    region: "east-hawaii",
    metaTitle: "Junk Removal Kaumana | Hilo Uphill Neighborhoods | Hawaii Island Waste",
    metaDescription:
      "Junk removal, dumpster rentals and demolition for Kaumana, Kaumana Estates and the uphill Hilo neighborhoods. Free quote: 808-300-9766.",
    intro:
      "Kaumana sits up the hill west of Hilo along Saddle Road, where the rain trades for cooler nights and bigger lots. We work the Kaumana Drive corridor regularly — junk removal, demolition, dumpster drops for renovations on the older homes up there.",
    neighborhoods: ["Kaumana Estates", "Kaumana Drive corridor", "Kūlana", "Piʻihonua-upper"],
    landmarks: ["Kaumana Caves State Park", "Wailuku River", "Boiling Pots", "Peʻepeʻe Falls"],
    roads: ["Kaumana Drive", "Saddle Road (Hwy 200 / Daniel K. Inouye Hwy)"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Kaumana sits above Hilo on the lava-tube side, where Kaumana Drive narrows and climbs through older homes on smaller lots. The uphill approach matters for dumpster placement — we scout a flat staging spot before drop-off.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "keaau",
    name: "Keaʻau",
    fullName: "Keaʻau, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Keaʻau HI | HPP & Orchidland Pickup | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and dumpster rentals for Keaʻau, Hawaiian Paradise Park, Orchidland and Ainaloa. Free quotes: 808-300-9766.",
    intro:
      "Keaʻau is the gateway to Puna — and to half a dozen large subdivisions where most of east Hawaiʻi actually lives. Whether you're in town near Keaʻau Beach Park or back in HPP, Orchidland or Ainaloa, we cover the area weekly.",
    neighborhoods: ["Keaʻau Town", "Hawaiian Paradise Park (HPP)", "Orchidland Estates", "Ainaloa", "Hawaiian Acres-east"],
    landmarks: ["Keaʻau Beach Park", "Shipman Estate", "Keaʻau-Pāhoa Road corridor"],
    roads: ["Highway 11", "Highway 130 (Keaʻau-Pāhoa Road)", "Hawaii Belt Road"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Keaʻau sits at the Hwy 11 / Hwy 130 junction — gateway to HPP, Orchidland, Ainaloa and the rest of Puna. Subdivision lots are typically one acre with long gravel approach drives, so we plan tow paths and turnarounds before the truck rolls.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "pahoa",
    name: "Pāhoa",
    fullName: "Pāhoa, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Pāhoa HI | Leilani & Nānāwale Service | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and dumpster rentals in Pāhoa, Leilani Estates and Nānāwale. Locally owned, free quotes. Call 808-300-9766.",
    intro:
      "Pāhoa is a community that's done a lot of rebuilding since the 2018 flow. Our crews work Leilani Estates, Nānāwale and the Pāhoa village area on the regular — junk removal, post-construction debris, lot clearing.",
    neighborhoods: ["Pāhoa Village", "Leilani Estates", "Nānāwale Estates", "Lava Tree subdivision", "Kaimū"],
    landmarks: ["Lava Tree State Monument", "Pohoiki (Isaac Hale Beach Park)", "Akebono Theater", "Maku'u Farmers Market"],
    roads: ["Highway 130", "Pohoiki Road", "Government Beach Road"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Pāhoa, Leilani and Nānāwale sit in Lava Zones 1 and 2, with many post-2018 eruption rebuilds and lava-rock terrain that affects equipment routing. We've done a lot of post-construction debris haul-off and lot clearing in this area.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "hawaiian-paradise-park",
    name: "Hawaiian Paradise Park",
    fullName: "Hawaiian Paradise Park (HPP), HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal HPP Hawaiian Paradise Park | Hawaii Island Waste",
    metaDescription:
      "Junk removal, dumpster drops and cleanouts throughout Hawaiian Paradise Park (HPP). Free quotes for any section. Call 808-300-9766.",
    intro:
      "HPP is the biggest subdivision on Hawai'i Island — eight sections, miles of straight streets, and a whole lot of homes that have been built, expanded and rebuilt over the years. We work HPP regularly — from the Maku'u side up through Kaloli Point.",
    neighborhoods: ["HPP Sections 1–8", "Maku'u side", "Kaloli Point area", "Beach Road frontage"],
    landmarks: ["Maku'u Drive", "Paradise Drive", "Beach Road", "Highway 130", "HPP Activity Center"],
    roads: ["Maku'u Drive", "Paradise Drive", "Beach Road", "Highway 130"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "HPP is the island's biggest subdivision — eight sections of one-acre lots on a straight-street grid off Hwy 130. Long gravel approach drives are the rule, not the exception, so we confirm site access and turnaround space before scheduling.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "orchidland-estates",
    name: "Orchidland Estates",
    fullName: "Orchidland Estates, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Orchidland Estates HI | Hawaii Island Waste",
    metaDescription:
      "Pickup, demolition and dumpster service in Orchidland Estates. Family-owned, fully insured. Call 808-300-9766 for a quote.",
    intro:
      "Orchidland sits along the Hwy 130 corridor between Keaʻau and Pāhoa — a big, mostly-residential subdivision where lots run large and the trees run thick. Plenty of older sheds, plenty of brush piles, plenty of work for us.",
    neighborhoods: ["Orchidland", "Orchidland-mauka", "Orchidland-makai"],
    landmarks: ["Highway 130 corridor", "'Olaʻa Forest edge", "Kalapana access"],
    roads: ["Highway 130", "Orchid Drive"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Orchidland sits along Hwy 130 between Keaʻau and Pāhoa with the same big-lot, big-brush feel as HPP. Lots of older sheds, brush piles and post-construction debris work — straightforward access off the highway.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "ainaloa",
    name: "Ainaloa",
    fullName: "Ainaloa, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Ainaloa HI | Puna Subdivision | Hawaii Island Waste",
    metaDescription:
      "Pickup, demolition, and cleanouts for Ainaloa and the surrounding Puna subdivisions. Free quotes — call 808-300-9766.",
    intro:
      "Ainaloa sits between Keaʻau and Pāhoa along Hwy 130, with a quiet residential feel and the same big lots and tropical overgrowth that define the Puna side. Our trucks roll through Ainaloa on the way to almost every Puna job.",
    neighborhoods: ["Ainaloa Village", "Ainaloa estates", "Ainaloa-makai"],
    landmarks: ["Highway 130 corridor", "Pāhoa-Keaʻau midpoint", "Mauna Loa lower slopes"],
    roads: ["Highway 130", "Ainaloa Boulevard"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Ainaloa sits on Hwy 130 between Keaʻau and Pāhoa — quiet, residential, with the same big-lot Puna feel. Most jobs route easily off Ainaloa Boulevard.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "hawaiian-acres",
    name: "Hawaiian Acres",
    fullName: "Hawaiian Acres, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Hawaiian Acres HI | Puna Pickup | Hawaii Island Waste",
    metaDescription:
      "Junk removal and cleanouts in Hawaiian Acres and the Mountain View side. Locally owned and insured. Call 808-300-9766.",
    intro:
      "Hawaiian Acres is the big subdivision off the Hwy 11 / Mountain View side — large lots, lots of off-grid living, plenty of cleanout work. We bring smaller trucks down the gravel roads when we need to.",
    neighborhoods: ["Hawaiian Acres", "Hawaiian Acres Roads (numbered)", "Mountain View side"],
    landmarks: ["'Ola'a Forest Reserve edge", "Mountain View access", "Volcano Highway corridor"],
    roads: ["Highway 11 (Volcano Highway)", "Hawaiian Acres Roads 1–9"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Hawaiian Acres runs off Hwy 11 on the Mountain View side — large lots, plenty of off-grid living, and the numbered gravel Roads 1–9. We bring the smaller truck when the approach drive can't handle full-size.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "kurtistown",
    name: "Kurtistown",
    fullName: "Kurtistown, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Kurtistown HI | Puna & Hwy 11 Pickup | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and dumpster service for Kurtistown. Fully insured, locally owned. Call 808-300-9766.",
    intro:
      "Kurtistown sits along Hwy 11 between Keaʻau and Mountain View — small in population, but a regular stop for our crews when we're running the Volcano route.",
    neighborhoods: ["Kurtistown Village", "Kurtistown-mauka"],
    landmarks: ["Mauna Loa Macadamia Nut Estate (nearby)", "'Ola'a Forest Reserve", "Highway 11 corridor"],
    roads: ["Highway 11 (Volcano Highway)", "Old Volcano Road"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Kurtistown sits along Hwy 11 between Keaʻau and Mountain View — small village, but a regular stop when we're running the Volcano route.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "mountain-view",
    name: "Mountain View",
    fullName: "Mountain View, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Mountain View HI | Volcano Hwy Pickup | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and dumpster service in Mountain View, Fern Acres and Eden Roc. Free quotes — call 808-300-9766.",
    intro:
      "Mountain View runs along the Volcano Highway midway between Hilo and Volcano Village. Cool weather, big trees, lots of older homes — plus the Fern Acres and Eden Roc subdivisions extending mauka.",
    neighborhoods: ["Mountain View Village", "Fern Acres", "Eden Roc", "Mountain View-mauka"],
    landmarks: ["Volcano Highway corridor", "Mauna Loa slopes", "'Ola'a Forest"],
    roads: ["Highway 11 (Volcano Highway)", "South Kulani Road"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Mountain View runs along the Volcano Highway midway between Hilo and Volcano Village — cooler weather, bigger trees, mostly older homes plus the Fern Acres and Eden Roc subdivisions climbing mauka.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "volcano",
    name: "Volcano",
    fullName: "Volcano, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Volcano HI | Volcanoes NP Area | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition, estate cleanouts and dumpster drops in Volcano Village and the Volcanoes National Park area. Call 808-300-9766.",
    intro:
      "Volcano Village sits at 4,000 feet on the rim of Kīlauea — cool, misty, forested, and full of beautiful older homes hidden in fern forest. We handle cleanouts, demolitions and dumpster drops up here even with the long-haul drive from Hilo.",
    neighborhoods: ["Volcano Village", "Mauna Loa Estates", "Royal Hawaiian Estates", "Fern Forest"],
    landmarks: ["Hawaiʻi Volcanoes National Park", "Kīlauea Caldera", "Volcano Art Center", "Chain of Craters Road"],
    roads: ["Highway 11 (Volcano Highway)", "Old Volcano Road", "Chain of Craters Road"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Volcano Village sits at roughly 4,000 ft on the rim of Kīlauea — cool, misty, forested, with lava-rock substrate that requires careful equipment routing on driveways. About 45 minutes from our Hilo base, so we typically schedule out a day or two.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "papaikou",
    name: "Papaʻikou",
    fullName: "Papaʻikou, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Papaʻikou HI | Hāmākua Coast | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and cleanouts in Papaʻikou and the lower Hāmākua coast. Free quotes — call 808-300-9766.",
    intro:
      "Papaʻikou is the first Hāmākua town north of Hilo — a gem of a coastal village known for the Onomea scenic drive. We work the older plantation-era homes here and the new builds along the coast.",
    neighborhoods: ["Papaʻikou Village", "Papaʻikou-mauka", "Onomea-side"],
    landmarks: ["Onomea Bay", "Hawaii Tropical Bioreserve & Garden", "Onomea Scenic Drive"],
    roads: ["Highway 19", "Old Māmalahoa Highway", "Scenic Route"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Papaʻikou is the first Hāmākua town north of Hilo, with steep coastal lots off the Onomea scenic drive and a mix of plantation-era homes and new builds. Quick run for our Hilo base.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "pepeekeo",
    name: "Pepeʻekeo",
    fullName: "Pepeʻekeo, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Pepeʻekeo HI | Hāmākua Coast | Hawaii Island Waste",
    metaDescription:
      "Junk removal, cleanouts and dumpster service in Pepeʻekeo and the Hāmākua coast. Call 808-300-9766 for a free quote.",
    intro:
      "Pepeʻekeo sits along the Hāmākua coast just north of Papaʻikou — old plantation country, beautiful scenic drive, lots of homes set back in the cane fields and forests.",
    neighborhoods: ["Pepeʻekeo Village", "Mauna Kea Sugar Mill area", "Pepeʻekeo-mauka"],
    landmarks: ["Pepeʻekeo Scenic Drive", "Onomea Falls", "Old Mauna Kea Sugar Mill"],
    roads: ["Highway 19", "Pepeʻekeo Scenic Drive (Old Māmalahoa)"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Pepeʻekeo sits along the Hāmākua coast just north of Papaʻikou — old plantation country, scenic drive, lots of homes set back in the cane fields and forests. Steep coastal terrain means we scout truck staging carefully.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "honomu",
    name: "Honomū",
    fullName: "Honomū, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Honomū HI | Akaka Falls Area | Hawaii Island Waste",
    metaDescription:
      "Junk removal and cleanouts in Honomū near Akaka Falls. Locally owned, insured. Call 808-300-9766 for a free quote.",
    intro:
      "Honomū is the small Hāmākua village at the turnoff to Akaka Falls — historic main street, sugar-era buildings, and homes tucked into the rainforest above and below.",
    neighborhoods: ["Honomū Town", "Honomū-mauka", "Akaka Falls Road area"],
    landmarks: ["Akaka Falls State Park", "Kahuna Falls", "Honomū historic district"],
    roads: ["Highway 19", "Akaka Falls Road (Hwy 220)"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Honomū is the small Hāmākua village at the Akaka Falls turnoff — historic main street, sugar-era buildings, homes tucked into rainforest above and below.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "hakalau",
    name: "Hakalau",
    fullName: "Hakalau, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Hakalau HI | Hāmākua Coast | Hawaii Island Waste",
    metaDescription:
      "Junk removal and cleanouts for Hakalau and the Hāmākua coast. Free quotes, insured crews. Call 808-300-9766.",
    intro:
      "Hakalau sits along the windward coast north of Honomū — small, beautiful, and rainy. We service the bay-side homes and the forested lots that climb mauka into the wildlife refuge boundary.",
    neighborhoods: ["Hakalau Bay area", "Hakalau-mauka", "Hakalau Plantation"],
    landmarks: ["Hakalau Forest National Wildlife Refuge", "Hakalau Bay", "Old Hakalau Sugar Mill site"],
    roads: ["Highway 19", "Old Māmalahoa Highway"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Hakalau sits along the windward coast north of Honomū — small, rainy, beautiful. We work the bay-side homes and forested lots climbing mauka toward the wildlife refuge boundary.",
    responseTime: "Same-day or next-day",
  },
  {
    slug: "laupahoehoe",
    name: "Laupāhoehoe",
    fullName: "Laupāhoehoe, HI",
    region: "east-hawaii",
    metaTitle: "Junk Removal Laupāhoehoe HI | Hāmākua Coast | Hawaii Island Waste",
    metaDescription:
      "Junk removal, dumpster drops and cleanouts for Laupāhoehoe and Pāpa'aloa. Locally owned, insured. Call 808-300-9766.",
    intro:
      "Laupāhoehoe is the historic coastal town along the Hāmākua coast — dramatic Laupāhoehoe Point, the old plantation village, and homes scattered through the surrounding ranchland. We make the drive regularly.",
    neighborhoods: ["Laupāhoehoe Town", "Laupāhoehoe Point", "Pāpa'aloa", "Laupāhoehoe-mauka"],
    landmarks: ["Laupāhoehoe Point Park", "Laupāhoehoe Train Museum", "Hāmākua coast cliffs"],
    roads: ["Highway 19", "Old Māmalahoa Highway"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Laupāhoehoe is the historic coastal town along the Hāmākua coast — dramatic Point, old plantation village, and homes scattered through ranchland. About 45 minutes north of Hilo, so we typically batch jobs in this stretch.",
    responseTime: "Scheduled — typically 2-3 days",
  },

  // ────────────── NORTH HAWAIʻI ──────────────
  {
    slug: "honokaa",
    name: "Honokaʻa",
    fullName: "Honokaʻa, HI",
    region: "north-hawaii",
    metaTitle: "Junk Removal Honokaʻa HI | Hāmākua Coast Pickup | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and dumpster service for Honokaʻa, Kalōpā and the Hāmākua coast. Free quotes — call 808-300-9766.",
    intro:
      "Honokaʻa is the heart of the upper Hāmākua coast — historic main street, the People's Theatre, plenty of older homes and a strong agricultural community out toward Kalōpā. We work it on scheduled days.",
    neighborhoods: ["Honokaʻa Town", "Pa'auilo-side", "Kalōpā", "Honokaʻa-mauka"],
    landmarks: ["Honokaʻa People's Theatre", "Kalōpā State Recreation Area", "Hāmākua Coast cliffs"],
    roads: ["Highway 19 (Māmalahoa Hwy)", "Highway 240 (to Waipiʻo)"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Honokaʻa is the heart of upper Hāmākua — historic main street, former plantation lands, steep coastal terrain off Hwy 19. Roughly an hour from Hilo, so we batch Honokaʻa/Pāʻauilo runs on scheduled days.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "paauilo",
    name: "Paʻauilo",
    fullName: "Paʻauilo, HI",
    region: "north-hawaii",
    metaTitle: "Junk Removal Paʻauilo HI | Hāmākua Coast | Hawaii Island Waste",
    metaDescription:
      "Junk removal and cleanouts for Paʻauilo, Kalōpā and ranch country along the Hāmākua coast. Call 808-300-9766.",
    intro:
      "Paʻauilo sits along Hwy 19 between Honokaʻa and Laupāhoehoe — old sugar-cane country turned ranchland and small farms. Big lots, big projects, big cleanouts.",
    neighborhoods: ["Paʻauilo-makai", "Paʻauilo-mauka", "Kalōpā area"],
    landmarks: ["Paʻauilo Plantation Village", "Kalōpā State Park", "Hāmākua coastline"],
    roads: ["Highway 19 (Māmalahoa Hwy)"],
    routedTo: ["east-sort-station", "east-organics", "west-landfill"],
    localNotes:
      "Paʻauilo sits along Hwy 19 between Honokaʻa and Laupāhoehoe — old sugar-cane country turned ranchland and small farms. Big lots and big projects, run on scheduled Hāmākua days.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "waimea",
    name: "Waimea (Kamuela)",
    fullName: "Waimea / Kamuela, HI",
    region: "north-hawaii",
    metaTitle: "Junk Removal Waimea / Kamuela HI | North Hawaiʻi | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and dumpster drops in Waimea (Kamuela), Lālāmilo, Puʻukapu and Parker Ranch country. Call 808-300-9766.",
    intro:
      "Waimea — also known as Kamuela on the post — is Parker Ranch country: cool temperatures, big lots, paniolo heritage. We service all of Waimea on scheduled days for cleanouts, demolitions and dumpster drops.",
    neighborhoods: ["Waimea Town", "Lālāmilo", "Puʻukapu Homesteads", "Waikiʻi", "Pu'u Loa", "Waikoloa Heights-side"],
    landmarks: ["Parker Ranch", "Puʻukoholā Heiau (Kawaihae)", "Mauna Kea base", "Hwy 190 / Hwy 19 junction"],
    roads: ["Highway 19", "Highway 190 (Māmalahoa Hwy)", "Highway 250 (Kohala Mountain Road)"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Waimea (Kamuela) is paniolo country — 2,600 ft elevation, cool weather, big ranch properties with outbuildings. We typically reach Waimea via Saddle Road (Hwy 200) from Hilo on scheduled Kohala-side days.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "hawi",
    name: "Hāwī",
    fullName: "Hāwī, HI",
    region: "north-hawaii",
    metaTitle: "Junk Removal Hāwī HI | North Kohala Pickup | Hawaii Island Waste",
    metaDescription:
      "Junk removal, cleanouts and demolition for Hāwī, Kapaʻau and North Kohala. Call 808-300-9766 for a free quote.",
    intro:
      "Hāwī is the northernmost town on Hawaiʻi Island — historic plantation main street, art galleries, and a community that runs deep. We make the drive up around the top of the island on scheduled days.",
    neighborhoods: ["Hāwī Town", "Hāwī-mauka", "Halaʻula"],
    landmarks: ["King Kamehameha I statue (original)", "Pololū Valley overlook", "Akoni Pule Highway"],
    roads: ["Highway 270 (Akoni Pule Hwy)", "Highway 250 (Kohala Mountain Road)"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Hāwī is the northernmost town on Hawaiʻi Island — historic plantation main street out past Kapaʻau on Hwy 270. About two hours from our Hilo base, so we run North Kohala on scheduled days.",
    responseTime: "Scheduled days only",
  },
  {
    slug: "kapaau",
    name: "Kapaʻau",
    fullName: "Kapaʻau, HI",
    region: "north-hawaii",
    metaTitle: "Junk Removal Kapaʻau HI | North Kohala | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and cleanouts in Kapaʻau and Niuliʻi, North Kohala. Free quote — call 808-300-9766.",
    intro:
      "Kapaʻau is the small town just east of Hāwī, home of the original King Kamehameha statue and the gateway to Pololū. Long road, beautiful drive, small-town community.",
    neighborhoods: ["Kapaʻau Town", "Niuliʻi", "Kohala Estates"],
    landmarks: ["Original King Kamehameha I Statue", "Pololū Lookout", "Kohala Mountain"],
    roads: ["Highway 270 (Akoni Pule Hwy)"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Kapaʻau is the small town just east of Hāwī along Hwy 270 — home of the original Kamehameha statue and the gateway to Pololū. Same scheduled-day pattern as Hāwī.",
    responseTime: "Scheduled days only",
  },

  // ────────────── WEST HAWAIʻI ──────────────
  {
    slug: "kailua-kona",
    name: "Kailua-Kona",
    fullName: "Kailua-Kona, HI",
    region: "west-hawaii",
    metaTitle: "Junk Removal Kailua-Kona HI | West Hawaiʻi Pickup | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and dumpster service in Kailua-Kona on scheduled days. Project minimums for the Kona side. Call 808-300-9766.",
    intro:
      "Kailua-Kona is the heart of West Hawaiʻi — the historic Aliʻi Drive coast, the airport gateway, and the Kona town all visitors know. We service the Kona side on scheduled days; for larger projects we'll come anytime — just ask about minimums.",
    neighborhoods: ["Kailua Village (Aliʻi Drive)", "Kona Heights", "Holualoa-side", "Keahole-side", "Kalaoa"],
    landmarks: ["Aliʻi Drive", "Kailua Pier", "Hulihe'e Palace", "Mokuaikaua Church", "Kona International Airport"],
    roads: ["Highway 11 (Hawaii Belt Road)", "Highway 19 (Queen Kaʻahumanu Hwy)", "Saddle Road (Hwy 200)", "Aliʻi Drive"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Kailua-Kona is dry-side coastal — the resort heart of Aliʻi Drive plus the Kona Heights residential climb above town. From Hilo it's about two hours via Saddle Road (Hwy 200) or three via the Belt Road, so we batch Kona-side projects on scheduled runs.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "holualoa",
    name: "Holualoa",
    fullName: "Holualoa, HI",
    region: "west-hawaii",
    metaTitle: "Junk Removal Holualoa HI | Coffee Country | Hawaii Island Waste",
    metaDescription:
      "Junk removal and cleanouts in Holualoa, Kona's coffee country. Scheduled service, free quotes. Call 808-300-9766.",
    intro:
      "Holualoa is the artsy mauka village above Kailua-Kona — coffee farms, galleries, and beautiful homes climbing the Hualālai slope. We service Holualoa on the same Kona-side schedule.",
    neighborhoods: ["Holualoa Village", "Holualoa Mauka", "Coffee belt area"],
    landmarks: ["Holualoa Art Village", "Hualālai slope", "Kona Coffee Country"],
    roads: ["Highway 180 (Māmalahoa Hwy - upper)", "Highway 190"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Holualoa is coffee country — mountainside above Kona on Hwy 180 with narrow uphill drives and farm-property layouts. Same scheduled Kona-side cadence.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "kealakekua",
    name: "Kealakekua",
    fullName: "Kealakekua, HI",
    region: "west-hawaii",
    metaTitle: "Junk Removal Kealakekua HI | South Kona | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and cleanouts in Kealakekua and South Kona. Scheduled days, free quotes. Call 808-300-9766.",
    intro:
      "Kealakekua sits in South Kona, above the bay famous for snorkeling and the Captain Cook monument. Old coffee country, plenty of older homes, regular cleanout work.",
    neighborhoods: ["Kealakekua Town", "Captain Cook-side", "Kealakekua-mauka"],
    landmarks: ["Kealakekua Bay", "Captain Cook Monument", "Greenwell Coffee Farm"],
    roads: ["Highway 11 (Māmalahoa Hwy)", "Napoʻopoʻo Road"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Kealakekua sits in South Kona above the famous bay — old coffee country, plenty of older homes on Hwy 11 frontage. Scheduled Kona-side days from our Hilo base.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "captain-cook",
    name: "Captain Cook",
    fullName: "Captain Cook, HI",
    region: "west-hawaii",
    metaTitle: "Junk Removal Captain Cook HI | South Kona | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and dumpster drops in Captain Cook, South Kona. Scheduled service. Call 808-300-9766.",
    intro:
      "Captain Cook is the mauka village along Hwy 11 in South Kona — coffee farms, the historic Manago Hotel, and a long band of homes climbing the slope.",
    neighborhoods: ["Captain Cook Village", "Honaunau-side", "Captain Cook-mauka"],
    landmarks: ["Captain Cook Monument", "Manago Hotel", "Greenwell Farms"],
    roads: ["Highway 11 (Māmalahoa Hwy)"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Captain Cook is the mauka village along Hwy 11 in South Kona — coffee farms, the historic Manago Hotel, and a long band of homes climbing the slope.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "honaunau",
    name: "Hōnaunau",
    fullName: "Hōnaunau, HI",
    region: "west-hawaii",
    metaTitle: "Junk Removal Hōnaunau HI | South Kona | Hawaii Island Waste",
    metaDescription:
      "Junk removal and cleanouts in Hōnaunau and South Kona. Scheduled service, free quotes. Call 808-300-9766.",
    intro:
      "Hōnaunau is South Kona at its most historic — home to Puʻuhonua o Hōnaunau, the Place of Refuge. Quiet coastal community with a strong sense of place.",
    neighborhoods: ["Hōnaunau", "Hōnaunau-mauka", "Hoʻokena-side"],
    landmarks: ["Puʻuhonua o Hōnaunau (Place of Refuge)", "Two Step snorkel area", "Hōnaunau Bay"],
    roads: ["Highway 11 (Māmalahoa Hwy)", "Highway 160 (Puʻuhonua Road)"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Hōnaunau is South Kona at its most historic — quiet coastal community, narrow lanes off Hwy 160 down to the Place of Refuge. Scheduled Kona-side days.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "keauhou",
    name: "Keauhou",
    fullName: "Keauhou, HI",
    region: "west-hawaii",
    metaTitle: "Junk Removal Keauhou HI | South Kailua-Kona | Hawaii Island Waste",
    metaDescription:
      "Junk removal, dumpster drops and demolition in Keauhou and South Kailua-Kona. Scheduled service — call 808-300-9766.",
    intro:
      "Keauhou is the resort and residential community south of Kailua-Kona — beautiful homes, the Keauhou Resort, and the famous manta ray night-dive bay. We service Keauhou on Kona-side scheduled days.",
    neighborhoods: ["Keauhou Resort area", "Keauhou Mauka", "Kahaluʻu-side"],
    landmarks: ["Keauhou Bay", "Outrigger Keauhou Beach", "Manta ray dive sites"],
    roads: ["Aliʻi Drive", "Highway 11", "Keauhou Pkwy"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Keauhou is the resort + residential community south of Kailua-Kona along Aliʻi Drive — beautiful homes, the Keauhou Resort, and the manta ray night-dive bay. Scheduled Kona-side days.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "waikoloa-village",
    name: "Waikoloa Village",
    fullName: "Waikoloa Village, HI",
    region: "west-hawaii",
    metaTitle: "Junk Removal Waikoloa Village HI | South Kohala | Hawaii Island Waste",
    metaDescription:
      "Junk removal, demolition and dumpster service in Waikoloa Village. Scheduled service to South Kohala. Call 808-300-9766.",
    intro:
      "Waikoloa Village is the inland residential community above the resort coast — homes spread across the hills with views down to the ocean. We service Waikoloa Village on scheduled Kohala-side runs. (Hawaii Island Waste's demolition was featured on HGTV's Renovation Aloha for a Waikoloa Village project — Season 2, Episode 4.)",
    neighborhoods: ["Waikoloa Village", "Waikoloa Heights", "Waikoloa Highlands"],
    landmarks: ["Waikoloa Stables", "Highway 190 corridor", "Mauna Kea views"],
    roads: ["Highway 190 (Māmalahoa Hwy)", "Waikoloa Road"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Waikoloa Village is a 6-mile-inland residential community above the resort coast — distinct from Waikoloa Beach Resort. Reached via Hwy 190 / Waikoloa Road. Our HGTV Renovation Aloha demolition was here (S2 E4).",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "waikoloa-beach-resort",
    name: "Waikoloa Beach Resort",
    fullName: "Waikoloa Beach Resort, HI",
    region: "west-hawaii",
    metaTitle: "Junk Removal Waikoloa Beach Resort | Hawaii Island Waste",
    metaDescription:
      "Junk removal, condo cleanouts and dumpster service at Waikoloa Beach Resort. Scheduled service — call 808-300-9766.",
    intro:
      "Waikoloa Beach Resort is the resort coast — Anaeho'omalu Bay, Kings' Shops, Queens' MarketPlace, plus the surrounding condo and timeshare communities. We handle condo cleanouts, contractor debris, and resort-side projects on scheduled days.",
    neighborhoods: ["Anaeho'omalu (A-Bay)", "Mauna Lani-side", "Kohala by the Sea", "Kings' Land"],
    landmarks: ["'Anaeho'omalu Bay", "Kings' Shops", "Queens' MarketPlace", "Mauna Lani Resort"],
    roads: ["Highway 19 (Queen Kaʻahumanu Hwy)", "Waikoloa Beach Drive"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Waikoloa Beach Resort is the coastal resort area off Queen Kaʻahumanu Highway — distinct from Waikoloa Village 6 miles inland. We handle condo cleanouts, contractor debris, and resort-side projects on scheduled Kohala days.",
    responseTime: "Scheduled — typically 2-3 days",
  },
  {
    slug: "puako",
    name: "Puakō & Hāpuna",
    fullName: "Puakō / Hāpuna, HI",
    region: "west-hawaii",
    metaTitle: "Junk Removal Puakō & Hāpuna HI | South Kohala | Hawaii Island Waste",
    metaDescription:
      "Junk removal and demolition in Puakō, Mauna Lani and the Hāpuna resort area. Scheduled service — call 808-300-9766.",
    intro:
      "Puakō is the quiet residential coast just south of Hāpuna Beach — narrow lanes, old homes, and one of the best snorkel coasts on the island. We service Puakō, the Hāpuna and Mauna Kea resorts on Kohala-side runs.",
    neighborhoods: ["Puakō", "Mauna Lani-side", "Mauna Kea Resort area"],
    landmarks: ["Hāpuna Beach State Park", "Puakō petroglyphs", "Mauna Kea Beach"],
    roads: ["Puakō Beach Drive", "Highway 19 (Queen Kaʻahumanu Hwy)"],
    routedTo: ["west-organics", "west-landfill"],
    localNotes:
      "Puakō is the quiet residential coast just south of Hāpuna Beach — narrow lanes, older homes. We service Puakō, Hāpuna and Mauna Kea resort properties on scheduled Kohala-side runs.",
    responseTime: "Scheduled — typically 2-3 days",
  },

  // ────────────── SOUTH HAWAIʻI ──────────────
  {
    slug: "naalehu",
    name: "Nāʻālehu",
    fullName: "Nāʻālehu, HI",
    region: "south-hawaii",
    metaTitle: "Junk Removal Nāʻālehu HI | Kaʻū District | Hawaii Island Waste",
    metaDescription:
      "Junk removal, cleanouts and demolition in Nāʻālehu, Waiʻōhinu and the Kaʻū district. Scheduled service — call 808-300-9766.",
    intro:
      "Nāʻālehu is the southernmost town in the United States — quiet, small, and a long way from anywhere else. We service Nāʻālehu and the Kaʻū coast on scheduled days. For larger projects we'll come anytime.",
    neighborhoods: ["Nāʻālehu Town", "Waiʻōhinu", "Discovery Harbour"],
    landmarks: ["Punaluʻu Black Sand Beach", "Southernmost town in USA", "South Point (Ka Lae)"],
    roads: ["Highway 11 (Hawaii Belt Road)", "South Point Road"],
    routedTo: ["west-landfill"],
    localNotes:
      "Nāʻālehu is the southernmost town in the United States — agricultural Kaʻū coast off Hwy 11 / South Point Road. A long haul from Hilo (90+ minutes), so we batch Kaʻū jobs on scheduled days.",
    responseTime: "Scheduled days only",
  },
  {
    slug: "ocean-view",
    name: "Ocean View",
    fullName: "Ocean View / HOVE, HI",
    region: "south-hawaii",
    metaTitle: "Junk Removal Ocean View HI | HOVE Pickup | Hawaii Island Waste",
    metaDescription:
      "Junk removal and cleanouts in Ocean View (HOVE) and the Ranchos. Scheduled service to Kaʻū — call 808-300-9766.",
    intro:
      "Hawaiian Ocean View Estates — HOVE — is one of the largest subdivisions in the country, sprawling across the southern slope of Mauna Loa. Lots of off-grid homes, lava-field landscaping, and a strong DIY community. We service HOVE on scheduled days.",
    neighborhoods: ["Hawaiian Ocean View Estates (HOVE)", "HOVE Ranchos", "Ocean View Village"],
    landmarks: ["South Point Road", "Mauna Loa southern slope", "Lava fields"],
    roads: ["Highway 11 (Hawaii Belt Road)", "Hawaii Ocean View Road"],
    routedTo: ["west-landfill"],
    localNotes:
      "HOVE is a massive 1-acre-lot subdivision sprawling across Mauna Loa's southern slope on lava-rock substrate — lots of off-grid homes, lava-field landscaping, strong DIY community. Long haul from Hilo, so we run Kaʻū on scheduled days.",
    responseTime: "Scheduled days only",
  },
  {
    slug: "pahala",
    name: "Pāhala",
    fullName: "Pāhala, HI",
    region: "south-hawaii",
    metaTitle: "Junk Removal Pāhala HI | Kaʻū District | Hawaii Island Waste",
    metaDescription:
      "Junk removal and cleanouts in Pāhala and Wood Valley, Kaʻū. Scheduled service — call 808-300-9766.",
    intro:
      "Pāhala is the old sugar-plantation town in Kaʻū — coffee country now, with Wood Valley climbing up toward Mauna Loa. Beautiful, quiet, and a haul from Hilo — we service it on scheduled days.",
    neighborhoods: ["Pāhala Town", "Wood Valley", "Pāhala-mauka"],
    landmarks: ["Punaluʻu Black Sand Beach (nearby)", "Kaʻū Coffee Mill", "Wood Valley Temple"],
    roads: ["Highway 11 (Hawaii Belt Road)", "Wood Valley Road"],
    routedTo: ["west-landfill"],
    localNotes:
      "Pāhala is the old sugar-plantation town in Kaʻū — agricultural lands, coffee country, with Wood Valley climbing up toward Mauna Loa. A long haul from Hilo on Hwy 11, so we service it on scheduled Kaʻū days.",
    responseTime: "Scheduled days only",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByRegion(region: Region): Location[] {
  return locations.filter((l) => l.region === region);
}
