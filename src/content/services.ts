export type ServiceCategory =
  | "junk-removal"
  | "demolition"
  | "dumpsters"
  | "estate-cleanouts";

export interface Service {
  slug: string;
  category: ServiceCategory;
  isHub?: boolean;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  hero: string;
  intro: string[];
  whatsIncluded: string[];
  items?: string[];
  process?: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
  relatedSlugs?: string[];
  ctaTitle?: string;
  ctaBody?: string;
}

export const services: Service[] = [
  // ──────────────────────────────────────────────
  // HUB: RESIDENTIAL JUNK REMOVAL
  // ──────────────────────────────────────────────
  {
    slug: "residential-junk-removal",
    category: "junk-removal",
    isHub: true,
    title: "Residential Junk Removal",
    h1: "Residential Junk Removal on Hawai'i Island",
    metaTitle: "Residential Junk Removal Hilo & Big Island | Hawaii Island Waste",
    metaDescription:
      "Full-service junk removal in Hilo and across Hawai'i Island. We do all the heavy lifting. Family-owned, licensed, insured. Call 808-300-9766 for a free quote.",
    shortDescription:
      "Full-service removal of furniture, appliances, yard debris and household clutter. You point — we do the rest.",
    hero: "Reclaim your weekends. Reclaim your space. We handle the heavy lifting so your home can breathe again.",
    intro: [
      "Clutter steals your space, your time, and your peace of mind. What starts as \"I'll handle it this weekend\" turns into weeks of stress, heavy lifting, and multiple dump runs. On Hawai'i Island, disposal isn't always simple — landfill limits, sorting rules, and hauling logistics can make DIY junk removal more expensive and exhausting than you'd expect.",
      "Hawaii Island Waste makes it simple. Our trained crew shows up on time, carries everything out from wherever it sits — upstairs, garage, lanai, backyard — and hauls it away. We sort for donation and recycling whenever possible, so less ends up in the landfill and more goes back into the community.",
    ],
    whatsIncluded: [
      "Full labor — you don't move a thing",
      "Same-day and next-day appointments when available",
      "Free, no-obligation on-site or photo estimates",
      "Donation drop-off and recycling whenever possible",
      "Sweep and tidy after the load is out",
      "$2M liability insured, DOT-compliant trucks",
    ],
    process: [
      { title: "Request a quote", body: "Send a photo, give us a quick description, or have us swing by. Free, no obligation." },
      { title: "Schedule your project", body: "Pick a window that works — weekdays, weekends, evenings included." },
      { title: "We clear it out", body: "Our uniformed crew arrives on time, carries everything from where it sits, and loads the truck." },
      { title: "Enjoy peace of mind", body: "We sweep up, you sign off, and you get your space back." },
    ],
    relatedSlugs: ["furniture-removal", "appliance-removal", "mattress-removal", "yard-waste-removal", "garage-cleanouts", "hoarder-cleanouts"],
  },

  // SUB-SERVICES: JUNK REMOVAL
  {
    slug: "furniture-removal",
    category: "junk-removal",
    title: "Furniture Removal",
    h1: "Furniture Removal in Hilo & Across Hawai'i Island",
    metaTitle: "Furniture Removal Hilo HI | Couches, Beds, Dressers | Hawaii Island Waste",
    metaDescription:
      "Heavy, awkward furniture out of your home — fast. Couches, sectionals, bed frames, dressers, dining sets. Free estimates. Call 808-300-9766.",
    shortDescription: "Sectionals, recliners, dressers, bed frames, dining sets — we carry it out without scuffing your floors.",
    hero: "Old couch wedged in the doorway? Tired sectional taking up half the lanai? We've got it.",
    intro: [
      "Furniture is heavy, awkward, and almost always too big for the truck you have. Stairs, narrow doorways, second-floor lanais — that's where most DIY hauls turn into thrown-out backs or chipped paint.",
      "Our crew has moved every kind of couch, sectional, bed, dresser and dining set across Hilo, Puna, Hāmākua and beyond. We pad-wrap when it matters, disassemble when we have to, and walk it down stairs the right way.",
    ],
    whatsIncluded: [
      "Sofas, sectionals, sleeper sofas, loveseats, recliners",
      "Bed frames, headboards, mattresses & box springs",
      "Dressers, armoires, wardrobes",
      "Dining tables and chairs",
      "Office furniture and entertainment centers",
      "Disassembly for tight stairwells when needed",
    ],
    items: ["Couch", "Sectional", "Recliner", "Loveseat", "Bed Frame", "Mattress", "Box Spring", "Dresser", "Armoire", "Dining Table", "Office Desk", "Entertainment Center"],
    relatedSlugs: ["mattress-removal", "appliance-removal", "residential-junk-removal"],
  },
  {
    slug: "appliance-removal",
    category: "junk-removal",
    title: "Appliance Removal",
    h1: "Appliance Removal on Hawai'i Island",
    metaTitle: "Appliance Removal Hilo HI | Refrigerator, Washer, Dryer | Hawaii Island Waste",
    metaDescription:
      "Old refrigerator, washer, dryer, stove or AC unit — we haul it away from anywhere on Hawai'i Island. Licensed, insured. Call 808-300-9766.",
    shortDescription: "Refrigerators, freezers, washers, dryers, ranges, dishwashers, AC units — properly removed and responsibly handled.",
    hero: "Refrigerator that quit. Washer that won't drain. We'll get it out of your way.",
    intro: [
      "Big appliances are tough to handle on your own — they're heavy, awkward, and they leak in ways that ruin a clean truck bed. Refrigerators and freezers also contain refrigerant that has to be handled responsibly under federal rules.",
      "We remove old appliances from kitchens, laundry rooms, garages and lanais across Hawai'i Island. We bring the dollies, the straps, and the muscle — and we route working units to donation when we can.",
    ],
    whatsIncluded: [
      "Refrigerators, freezers, wine coolers",
      "Washers and dryers (stacked or standalone)",
      "Ovens, ranges, cooktops",
      "Dishwashers and trash compactors",
      "Microwaves and built-ins",
      "Window AC units, mini-splits, dehumidifiers",
    ],
    items: ["Refrigerator", "Freezer", "Washer", "Dryer", "Oven", "Range", "Dishwasher", "Microwave", "AC Unit", "Mini-Split", "Dehumidifier"],
    relatedSlugs: ["furniture-removal", "tv-electronics-removal", "residential-junk-removal"],
  },
  {
    slug: "mattress-removal",
    category: "junk-removal",
    title: "Mattress Removal",
    h1: "Mattress & Box Spring Removal on Hawai'i Island",
    metaTitle: "Mattress Removal Hilo HI | Box Spring, King, Queen | Hawaii Island Waste",
    metaDescription:
      "We remove old mattresses, box springs and bed frames from any room of your home. Hilo, Pāhoa, Volcano and beyond. Call 808-300-9766.",
    shortDescription: "Twins through California Kings — out of the bedroom, off the lanai, into the truck.",
    hero: "Old mattress sagging in the corner? We'll carry it out the same day if we can.",
    intro: [
      "Mattresses are awkward to haul, illegal to leave at the curb in most parts of the island, and a real pain to get into the back of a pickup. We make this one painless.",
      "We remove mattresses, box springs and bed frames from any floor of your home — wrapped if they're going to disposal, donated if they're in clean shape.",
    ],
    whatsIncluded: [
      "Twin, full, queen, king, California king",
      "Box springs and foundations",
      "Bed frames, headboards, footboards",
      "Bunk beds and toddler beds",
      "Disassembly if needed",
      "Same-day pickup when available",
    ],
    items: ["Twin Mattress", "Full Mattress", "Queen Mattress", "King Mattress", "California King", "Box Spring", "Bed Frame", "Bunk Bed", "Crib"],
    relatedSlugs: ["furniture-removal", "estate-cleanouts", "residential-junk-removal"],
  },
  {
    slug: "tv-electronics-removal",
    category: "junk-removal",
    title: "TV & Electronics Removal",
    h1: "TV & Electronics (E-Waste) Removal on Hawai'i Island",
    metaTitle: "TV & E-Waste Removal Hilo HI | Computers, Monitors | Hawaii Island Waste",
    metaDescription:
      "Old TVs, monitors, computers, printers and stereos hauled away from any home or office on Hawai'i Island. Routed to e-waste responsibly.",
    shortDescription: "Tube TVs, flat screens, computers, monitors, printers — handled responsibly under Hawaiʻi e-waste rules.",
    hero: "That tube TV in the closet? The dead printer in the garage? We'll route them the right way.",
    intro: [
      "Hawai'i requires that televisions, computers and other covered electronics get handled separately from regular trash. Cathode-ray-tube TVs and monitors especially can't just go in the bin — they contain materials that have to be processed.",
      "We pick up your old TVs, computers, monitors, printers and audio gear and route everything to e-waste handlers when possible. You don't have to drive to Hilo's transfer station or sort through anything yourself.",
    ],
    whatsIncluded: [
      "Tube (CRT) TVs and monitors",
      "Flat-screen and projection TVs",
      "Desktop computers and laptops",
      "Printers, scanners, fax machines",
      "Stereos, speakers, gaming consoles",
      "Cables, keyboards, peripherals",
    ],
    items: ["Tube TV", "Flat Screen TV", "Computer Monitor", "Desktop PC", "Laptop", "Printer", "Stereo", "Game Console"],
    relatedSlugs: ["appliance-removal", "garage-cleanouts", "residential-junk-removal"],
  },
  {
    slug: "hot-tub-removal",
    category: "demolition",
    title: "Hot Tub Removal",
    h1: "Hot Tub & Spa Removal on Hawai'i Island",
    metaTitle: "Hot Tub Removal Hilo HI | Spa Demolition | Hawaii Island Waste",
    metaDescription:
      "Old hot tub or spa removed from your backyard or lanai. We disconnect, cut down, and haul out — Hilo, Puna, Kona. Call 808-300-9766.",
    shortDescription: "Disconnect, drain, cut down, haul away. We make hot tubs disappear from your backyard.",
    hero: "Cracked acrylic. Leaking shell. Hot tub that hasn't worked since 2019. We'll take it.",
    intro: [
      "Old hot tubs are one of the toughest things to get rid of on your own. They're heavy, full of water, full of fiberglass and wiring, and bolted down on a deck or pad. No regular hauler will touch them.",
      "We disconnect the power, drain the water, cut the shell into manageable sections on-site if needed, and haul everything out. We work with hot tubs on lanais, in courtyards, behind houses — wherever they ended up.",
    ],
    whatsIncluded: [
      "Electrical disconnection coordination",
      "On-site cutting and breakdown",
      "Removal of shell, cabinet, equipment",
      "Concrete pad demolition (additional)",
      "Site cleanup after removal",
    ],
    relatedSlugs: ["deck-demolition", "shed-demolition", "demolition-services"],
  },
  {
    slug: "yard-waste-removal",
    category: "junk-removal",
    title: "Yard Waste & Green Waste Removal",
    h1: "Yard Waste & Green Waste Removal on Hawai'i Island",
    metaTitle: "Yard Waste Removal Hilo HI | Green Waste, Tree Debris | Hawaii Island Waste",
    metaDescription:
      "Tree branches, brush, palm fronds, landscaping debris and storm cleanup across Hawai'i Island. Call 808-300-9766 for a free quote.",
    shortDescription: "Branches, palm fronds, brush piles, storm debris and post-landscape cleanups — hauled and routed for mulching.",
    hero: "Storm cleanup, palm fronds, big brush pile from last weekend's project — we'll clear it.",
    intro: [
      "Hawai'i Island weather builds up green waste fast — palm fronds, big branches, the storm pile from last weekend, the brush from finally clearing that back fence line. It's heavy, it's everywhere, and your truck only holds so much.",
      "We come out, load it all up by hand or with equipment, and route it to green-waste mulching wherever we can. One trip, no drive to the transfer station, no overloaded trailer.",
    ],
    whatsIncluded: [
      "Tree branches and trunks (cut down to manageable size)",
      "Palm fronds and coconut piles",
      "Brush, hedges, vine pulls",
      "Landscaping debris and old mulch",
      "Storm and wind debris",
      "Routed to green-waste mulching when possible",
    ],
    items: ["Tree Branches", "Palm Fronds", "Brush", "Hedge Clippings", "Landscape Debris", "Storm Debris"],
    relatedSlugs: ["construction-debris", "property-cleanouts", "residential-junk-removal"],
  },
  {
    slug: "garage-cleanouts",
    category: "junk-removal",
    title: "Garage Cleanouts",
    h1: "Garage & Storage Cleanouts on Hawai'i Island",
    metaTitle: "Garage Cleanout Hilo HI | Storage Unit Cleanouts | Hawaii Island Waste",
    metaDescription:
      "Full garage and storage cleanouts in Hilo and across Hawai'i Island. We sort, haul, and leave the space ready to use. Call 808-300-9766.",
    shortDescription: "From half-full garages to floor-to-ceiling storage units — we clear it all out in a single visit.",
    hero: "When the garage hasn't fit a car in 15 years — we get it back.",
    intro: [
      "Garages on the island do double duty as workshops, surf-board storage, hurricane-supply caches, and the place where every \"I'll deal with that later\" item lands. Eventually you can't open the door without something falling.",
      "Our cleanout crews show up with the truck, the dollies, the gloves, and the patience. We work top to bottom, sort what can be donated, recycle what we can, and haul the rest.",
    ],
    whatsIncluded: [
      "Whole-garage or partial cleanouts",
      "Donation routing for usable items",
      "E-waste, appliance and tire pickup",
      "Yard-waste and lumber removal",
      "Final sweep so the floor is usable",
    ],
    relatedSlugs: ["hoarder-cleanouts", "estate-cleanouts", "property-cleanouts"],
  },
  {
    slug: "hoarder-cleanouts",
    category: "junk-removal",
    title: "Compassionate Hoarder Cleanouts",
    h1: "Compassionate Hoarder & Heavy-Clutter Cleanouts",
    metaTitle: "Hoarder Cleanout Services Hilo HI | Discreet & Respectful | Hawaii Island Waste",
    metaDescription:
      "Discreet, judgment-free hoarder cleanouts across Hawai'i Island. We work at the household's pace and protect what matters. Call 808-300-9766.",
    shortDescription: "Discreet, judgment-free, paced for the family. We protect what matters and clear the rest with care.",
    hero: "There's no judgment here. Just a team that knows how to clear the path forward, gently.",
    intro: [
      "Hoarder cleanouts aren't about \"stuff\" — they're about a person, a family, a long story. We treat every home that way. Our crews work quietly, communicate clearly, and never rush the household.",
      "We coordinate with social workers, kūpuna support agencies, realtors, and family members when needed. Identification, photos, keepsakes and documents get set aside for review. The rest gets responsibly removed.",
    ],
    whatsIncluded: [
      "Confidential consultation and walk-through",
      "Phased schedules to match the household's pace",
      "Sorting for keepsakes, documents, medications",
      "Donation routing for usable items",
      "Coordination with family, social workers, realtors",
      "Final cleanup so the home is livable or list-ready",
    ],
    relatedSlugs: ["estate-cleanouts", "property-cleanouts", "garage-cleanouts"],
  },

  // ──────────────────────────────────────────────
  // HUB: DEMOLITION
  // ──────────────────────────────────────────────
  {
    slug: "demolition-services",
    category: "demolition",
    isHub: true,
    title: "Demolition Services",
    h1: "Demolition Services on Hawai'i Island",
    metaTitle: "Demolition Services Hilo & Big Island | Licensed & Insured | Hawaii Island Waste",
    metaDescription:
      "Licensed, insured demolition across Hawai'i Island — sheds, decks, kitchens, baths, hot tubs, interior tear-outs. Featured on HGTV's Renovation Aloha.",
    shortDescription: "Light to mid-scale demolition handled cleanly and on schedule. Featured on HGTV's Renovation Aloha.",
    hero: "Clear the way for what's next. Licensed, insured, and done right the first time.",
    intro: [
      "When it's time to clear the way for something new, our demolition services in Hilo and across Hawai'i Island make the process smooth. From small residential tear-outs to larger structural projects, we handle everything with precision and respect for your property — and for the island we call home.",
      "We specialize in light to mid-scale demolition: sheds, decks, kitchens, bathrooms, hot tubs, garages, fences, and more. Every project leaves the site swept and load-out ready for your next phase.",
    ],
    whatsIncluded: [
      "Free written estimates",
      "Licensed and $2M liability insured",
      "DOT-compliant trucks and load securement",
      "On-site sorting for recycling and reuse",
      "Daily cleanup to keep the job site safe",
      "HGTV Renovation Aloha experience (S2 E4)",
    ],
    relatedSlugs: ["shed-demolition", "deck-demolition", "fence-removal", "interior-demolition", "hot-tub-removal", "construction-debris"],
  },
  {
    slug: "shed-demolition",
    category: "demolition",
    title: "Shed Demolition & Removal",
    h1: "Shed Demolition & Removal on Hawai'i Island",
    metaTitle: "Shed Demolition Hilo HI | Backyard Shed Removal | Hawaii Island Waste",
    metaDescription:
      "Old shed leaning, rotting, or in the way? We demolish and haul it — pad included — across Hawai'i Island. Call 808-300-9766.",
    shortDescription: "Wood, metal, or plastic — leaning, rotted, or just in the wrong spot. We tear it down and haul it out.",
    hero: "Old shed needs to come down? We bring the muscle, the tools, and the trucks.",
    intro: [
      "Sheds wear out in our island weather. Wood rots, metal rusts, plastic fades and cracks. Or maybe the shed is fine — but it's exactly where the new addition needs to go.",
      "We safely demolish wood, metal, and plastic sheds, sort the debris, and haul it away. Concrete pads can be broken out and removed as an add-on. Done in a day for most projects.",
    ],
    whatsIncluded: [
      "Wood, metal, or plastic shed tear-down",
      "Roof and frame breakdown",
      "Optional concrete pad removal",
      "Removal of stored items inside the shed",
      "Final site cleanup and rake-out",
    ],
    relatedSlugs: ["deck-demolition", "fence-removal", "demolition-services"],
  },
  {
    slug: "deck-demolition",
    category: "demolition",
    title: "Deck & Lanai Demolition",
    h1: "Deck & Lanai Demolition on Hawai'i Island",
    metaTitle: "Deck Demolition Hilo HI | Lanai Removal | Hawaii Island Waste",
    metaDescription:
      "Rotted deck or old lanai removed safely from your home. We dismantle, haul, and leave a clean site. Free estimates across Hawai'i Island.",
    shortDescription: "Rotted boards, loose railings, old lanais — dismantled board-by-board or cut down by section.",
    hero: "Soft boards. Wobbly railings. Old lanai past saving. We'll clear the slate.",
    intro: [
      "Coastal weather is hard on wood. Decks and lanais that looked solid five years ago can be soft, splintered, and dangerous now. Tearing one down is a job for a crew with the right saws and a real plan for the debris.",
      "We dismantle by section or whole-deck, separate hardware and lumber, and haul everything off-site. Pads and footers can be removed as an add-on if the next build needs a clean slate.",
    ],
    whatsIncluded: [
      "Whole-deck or section tear-downs",
      "Railing, lattice and stair removal",
      "Hardware separated for recycling when possible",
      "Optional concrete footer breakout",
      "Site swept clean for the next phase",
    ],
    relatedSlugs: ["shed-demolition", "fence-removal", "demolition-services"],
  },
  {
    slug: "fence-removal",
    category: "demolition",
    title: "Fence Removal & Demolition",
    h1: "Fence Removal & Demolition on Hawai'i Island",
    metaTitle: "Fence Removal Hilo HI | Wood, Chain Link, Vinyl | Hawaii Island Waste",
    metaDescription:
      "Old wood, chain link, vinyl or wire fencing removed and hauled away across Hawai'i Island. Concrete footers included on request.",
    shortDescription: "Wood, chain-link, vinyl, wire — pulled out by the run, posts and footers included on request.",
    hero: "Rotted fence dragging your yard down? We'll pull it out by the run.",
    intro: [
      "Old fences become a problem the day they stop standing straight. Pulling fence is heavy, dirty work — wood splits, hardware rusts, posts are usually set deeper than you think.",
      "We pull fence by the run, manage the debris, and either leave the post holes for a new install or break out the footers as part of the job.",
    ],
    whatsIncluded: [
      "Wood, chain-link, vinyl, wire and pipe fencing",
      "Gate removal and disposal",
      "Concrete footer breakout (add-on)",
      "Backfill of post holes on request",
      "Materials separated for recycling when possible",
    ],
    relatedSlugs: ["shed-demolition", "deck-demolition", "demolition-services"],
  },
  {
    slug: "interior-demolition",
    category: "demolition",
    title: "Interior Demolition",
    h1: "Interior Demolition — Kitchens, Baths & More",
    metaTitle: "Interior Demolition Hilo HI | Kitchen, Bath Tear-Out | Hawaii Island Waste",
    metaDescription:
      "Kitchen, bathroom, flooring and wall demolition for your remodel on Hawai'i Island. Clean prep for your contractor. Call 808-300-9766.",
    shortDescription: "Cabinets out, tile up, walls down. We prep your remodel site so your contractor walks into a clean slate.",
    hero: "Kitchen, bath, floor or full interior — we tear out so your contractor walks in clean.",
    intro: [
      "Most remodels start with the same step: get everything old out. Cabinets, countertops, flooring, tile, drywall — sometimes a wall or two. That demo phase is grueling on your own, and the dust and debris add up fast.",
      "We handle interior demolition for residential and small-commercial remodels: kitchens, bathrooms, flooring, ceilings, non-structural walls. We control the dust, contain the debris, and load out as we go so your contractor can start fresh.",
    ],
    whatsIncluded: [
      "Cabinet, countertop and tile tear-out",
      "Flooring removal (tile, hardwood, carpet, vinyl)",
      "Drywall and ceiling removal",
      "Non-structural wall removal",
      "Dust control and floor protection",
      "Daily load-outs and site cleanup",
    ],
    relatedSlugs: ["demolition-services", "construction-debris", "dumpster-rentals"],
  },

  // ──────────────────────────────────────────────
  // HUB: DUMPSTER RENTALS
  // ──────────────────────────────────────────────
  {
    slug: "dumpster-rentals",
    category: "dumpsters",
    isHub: true,
    title: "Dumpster Rentals",
    h1: "Dumpster Rentals on Hawai'i Island",
    metaTitle: "Dumpster Rental Hilo & Big Island | Roll-Off Rentals | Hawaii Island Waste",
    metaDescription:
      "Roll-off dumpster rentals for home, renovation and contractor projects across Hawai'i Island. Right-sized container, delivered and picked up.",
    shortDescription: "Right-sized roll-off containers delivered to your home or worksite. Load on your schedule — we handle pickup and disposal.",
    hero: "One on-site spot for everything. We deliver, you fill, we haul.",
    intro: [
      "Big projects make big piles fast. A renovation, a landscape overhaul, or a property cleanup turns your driveway into a debris yard if you don't have a plan for the waste.",
      "Our roll-off dumpsters give you a single, dedicated spot for everything. We deliver the right-sized container directly to your home or worksite so you can load at your own pace. When you're done, we pick it up and handle disposal, sorting for recycling whenever possible.",
    ],
    whatsIncluded: [
      "Right-sized container for your project",
      "Delivery and pickup included",
      "Flexible rental windows for DIY and contractors",
      "Driveway-friendly placement (we protect surfaces)",
      "Sorting for recycling when possible",
      "Transparent flat-rate pricing for most jobs",
    ],
    relatedSlugs: ["construction-debris", "interior-demolition", "residential-junk-removal"],
  },

  // ──────────────────────────────────────────────
  // HUB: ESTATE CLEANOUTS
  // ──────────────────────────────────────────────
  {
    slug: "estate-cleanouts",
    category: "estate-cleanouts",
    isHub: true,
    title: "Estate Cleanouts",
    h1: "Estate Cleanouts on Hawai'i Island",
    metaTitle: "Estate Cleanout Services Hilo & Big Island | Compassionate Care | Hawaii Island Waste",
    metaDescription:
      "Respectful, full-service estate cleanouts across Hawai'i Island. We handle the logistics so your family can focus on what matters. Call 808-300-9766.",
    shortDescription: "Compassionate, full-service estate clearing. We handle sorting, hauling and donation routing so families can focus on memories.",
    hero: "Compassionate strength for life's hardest transitions. We carry the weight so you don't have to.",
    intro: [
      "Handling an estate cleanout in Hilo or anywhere on Hawai'i Island can feel overwhelming — especially when you're balancing logistics, timelines, and the emotional weight that often comes with it. That's where we step in.",
      "Our local Big Island team provides respectful, full-service estate cleanouts designed to make the process as smooth and stress-free as possible — whether you're managing a family property, preparing a home for sale, or handling a rental turnover. We take care of everything from furniture and appliances to general household items, garage clutter, and more. You don't have to sort, lift, or haul. We handle the heavy work while carefully separating items for donation, recycling, and responsible disposal whenever possible.",
    ],
    whatsIncluded: [
      "Full-house, single-room, or partial cleanouts",
      "Compassionate, judgment-free approach",
      "Sorting for keepsakes, documents, photos",
      "Donation routing to local charities when possible",
      "Coordination with realtors, executors, family",
      "Final clean so the home is list-ready",
    ],
    relatedSlugs: ["hoarder-cleanouts", "property-cleanouts", "residential-junk-removal", "garage-cleanouts"],
  },
  {
    slug: "property-cleanouts",
    category: "estate-cleanouts",
    title: "Property Cleanouts (For Realtors & Investors)",
    h1: "Property Cleanouts for Realtors & Investors",
    metaTitle: "Property Cleanouts Hilo HI | Realtor & Investor Cleanouts | Hawaii Island Waste",
    metaDescription:
      "Fast property cleanouts for realtors, investors and property managers across Hawai'i Island. Get your listing market-ready. Call 808-300-9766.",
    shortDescription: "Tenant turnovers, foreclosure cleanouts, pre-listing prep — we make properties market-ready fast.",
    hero: "List faster. Sell faster. We turn cluttered properties market-ready in a single visit.",
    intro: [
      "Clutter kills curb appeal and stretches days-on-market. Realtors, investors and property managers across Hawai'i Island call us to turn unsightly tenant leave-behinds, post-foreclosure messes, and overstuffed estates into clean, photo-ready listings — fast.",
      "We coordinate on your timeline, scale crew size to project size, and handle the full chain: sorting, hauling, donation routing, and final sweep. Show up to a property that's ready for photos.",
    ],
    whatsIncluded: [
      "Tenant turnover cleanouts",
      "Pre-listing cleanouts and curb-appeal prep",
      "Foreclosure and trash-out services",
      "Yard, garage, lanai and interior in one visit",
      "Coordination with property managers and brokerages",
      "Same-week scheduling for time-sensitive listings",
    ],
    relatedSlugs: ["estate-cleanouts", "hoarder-cleanouts", "garage-cleanouts"],
  },
  {
    slug: "construction-debris",
    category: "demolition",
    title: "Construction Debris Removal",
    h1: "Construction & Renovation Debris Removal",
    metaTitle: "Construction Debris Removal Hilo HI | Contractor Cleanup | Hawaii Island Waste",
    metaDescription:
      "Reliable construction and renovation debris removal for contractors and homeowners on Hawai'i Island. Job-site cleanup that keeps you moving.",
    shortDescription: "Demo debris, drywall, lumber, roofing, concrete — hauled out so your build stays on schedule.",
    hero: "Demo done, build waiting? We'll clear the site so your crew can start.",
    intro: [
      "Construction debris stalls projects. Drywall scraps, lumber cut-offs, broken concrete, old roofing — none of it belongs in a dumpster you're trying to keep open for the next trade. Multiple dump runs eat days you can't afford.",
      "We handle scheduled and on-call construction debris removal for contractors, builders, and DIY homeowners across Hawai'i Island. Tell us the volume, we'll bring the truck. Recurring schedules available for active job sites.",
    ],
    whatsIncluded: [
      "Drywall, lumber, roofing, flooring debris",
      "Concrete and masonry rubble (volume limits apply)",
      "Metal and copper separated when possible",
      "Recurring job-site pickup schedules",
      "Same-day pickup when available",
      "Insured, DOT-compliant trucks",
    ],
    relatedSlugs: ["interior-demolition", "dumpster-rentals", "demolition-services"],
  },
  {
    slug: "commercial-junk-removal",
    category: "junk-removal",
    title: "Commercial & Office Cleanouts",
    h1: "Commercial & Office Junk Removal on Hawai'i Island",
    metaTitle: "Commercial Junk Removal Hilo HI | Office Cleanouts | Hawaii Island Waste",
    metaDescription:
      "Office cleanouts, retail tear-downs, restaurant equipment removal across Hawai'i Island. Insured, after-hours scheduling available.",
    shortDescription: "Office furniture, retail fixtures, restaurant equipment — handled after-hours when needed.",
    hero: "Office moving, retail closing, restaurant turning over? We work after-hours to keep you open.",
    intro: [
      "Commercial cleanouts don't fit in normal hours. You can't have a crew loading desks while customers are walking in or staff is trying to work. We schedule around your business — evenings, weekends, off-hours.",
      "We handle office furniture, cubicles, retail fixtures, restaurant equipment, and full property turnovers across Hawai'i Island. Properly insured for commercial work, COI provided on request.",
    ],
    whatsIncluded: [
      "Office furniture, cubicles, file cabinets",
      "Retail shelving, fixtures, display cases",
      "Restaurant equipment and walk-in tear-downs",
      "Electronics and IT equipment routed properly",
      "After-hours and weekend scheduling",
      "COI available on request",
    ],
    relatedSlugs: ["property-cleanouts", "estate-cleanouts", "interior-demolition"],
  },
];

export const serviceHubs = services.filter((s) => s.isHub);
export const subServices = services.filter((s) => !s.isHub);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesInCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category && !s.isHub);
}
