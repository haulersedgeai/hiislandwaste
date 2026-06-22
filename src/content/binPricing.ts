export const BIN_SPEC = {
  size: "15 cubic yard",
  rentalDays: 2,
  extraDayFee: 15, // per day after the first 2 days
};

export interface PriceTier {
  startsAt: number;
  towns: string[];
}

export const PRICE_TIERS: PriceTier[] = [
  { startsAt: 400, towns: ["Pepeʻekeo", "Papaʻikou", "Hilo", "Keaʻau", "HPP", "Kurtistown"] },
  { startsAt: 450, towns: ["Pāhoa", "Hawaiian Beaches", "Mountain View"] },
  { startsAt: 525, towns: ["Hāmākua", "Volcano"] },
  { startsAt: 775, towns: ["Honokaʻa", "Waimea", "Kaʻū"] },
  { startsAt: 850, towns: ["Waikoloa"] },
  { startsAt: 925, towns: ["Kona"] },
];

export interface DisposalFee {
  material: string;
  perTon: number | null;
  note?: string;
}

export const DISPOSAL_FEES: DisposalFee[] = [
  { material: "Construction debris & household material", perTon: 154 },
  { material: "Scrap metal", perTon: 129 },
  { material: "Green waste", perTon: 39 },
  { material: "Appliances", perTon: null, note: "fees vary per appliance" },
];

export const PRICING_NOTES = [
  "Additional $15 per day after the initial 2 days.",
  "Contact us for multiple-bin, military, and senior rates.",
  "Contact us for contractor rates.",
];

export const DISPOSAL_DISCLAIMER =
  "Disposal fees are for informational purposes only and may be subject to change without notice from the County of Hawaiʻi. Customers are charged the exact disposal amount.";

// Map of location slugs → starting price tier. Only includes towns explicitly
// covered by a published tier (including obvious neighborhood matches like
// Kaumana → Hilo). Unlisted slugs return null so the page can show
// "Contact us for bin rental pricing".
const SLUG_PRICE: Record<string, number> = {
  // $400 tier — Pepeʻekeo, Papaʻikou, Hilo, Keaʻau, HPP, Kurtistown
  hilo: 400,
  kaumana: 400, // Hilo neighborhood
  keaau: 400,
  "hawaiian-paradise-park": 400,
  kurtistown: 400,
  papaikou: 400,
  pepeekeo: 400,

  // $450 tier — Pāhoa, Hawaiian Beaches, Mountain View
  pahoa: 450,
  "hawaiian-beaches": 450,
  "mountain-view": 450,

  // $525 tier — Hāmākua, Volcano
  volcano: 525,
  honomu: 525,
  hakalau: 525,
  laupahoehoe: 525,
  // TODO(JUSTIN): confirm with Naea — Pāʻauilo is geographically near Honokaʻa,
  // he may want $775 instead of the $525 Hāmākua-district rate.
  paauilo: 525,

  // $775 tier — Honokaʻa, Waimea, Kaʻū
  honokaa: 775,
  waimea: 775,
  naalehu: 775, // Kaʻū
  "ocean-view": 775, // Kaʻū
  pahala: 775, // Kaʻū

  // $850 tier — Waikoloa (Village + Beach Resort)
  "waikoloa-village": 850,
  "waikoloa-beach-resort": 850,

  // $925 tier — Kona (all Kona-side towns)
  "kailua-kona": 925,
  holualoa: 925,
  kealakekua: 925,
  "captain-cook": 925,
  honaunau: 925,
  keauhou: 925,
};

/**
 * Returns the starting price for a bin rental in the given town, or null if
 * the town is not in a published tier. Accepts a location slug, a town name,
 * or a tier-label string ("HPP", "Hāmākua", etc.).
 */
export function getBinPriceForTown(townOrSlug: string): number | null {
  if (!townOrSlug) return null;
  const key = townOrSlug.trim().toLowerCase();

  // Direct slug match
  if (key in SLUG_PRICE) return SLUG_PRICE[key];

  // Try normalized name match against tier labels
  const stripped = key
    .normalize("NFD")
    .replace(/[̀-ͯʻʼ'’`ʻ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  if (stripped in SLUG_PRICE) return SLUG_PRICE[stripped];

  // Tier-label aliases (regional names used in the pricing table itself)
  const aliases: Record<string, number> = {
    hpp: 400,
    "hawaiian-beaches": 450,
    hamakua: 525,
    kau: 775,
    waikoloa: 850,
    kona: 925,
  };
  return aliases[stripped] ?? null;
}
