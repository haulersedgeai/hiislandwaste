import { site } from "@/lib/site";
import { locations } from "@/content/locations";
import {
  testimonials,
  REVIEW_AVERAGE,
  TOTAL_REVIEW_COUNT,
} from "@/content/testimonials";
import type { Service } from "@/content/services";
import type { Location } from "@/content/locations";
import type { FAQ } from "@/content/faq";
import type { Testimonial } from "@/content/testimonials";

// Curated subset of reviews embedded in LocalBusiness schema. AggregateRating
// still reports the full 121-review total — we just cap embedded reviews so
// the JSON-LD payload stays lean across segments (families, kupuna, contractors, realtors).
const SCHEMA_REVIEW_NAMES = [
  "Valerie V.",
  "Donn U.",
  "Todd Y.",
  "Stephen Mika'ele LB",
  "Vance Kamau",
  "Rusty Crabbe",
  "Stephanie Goya",
  "Kevin Kurata",
  "Andrew Yanagi",
];

const schemaReviews = SCHEMA_REVIEW_NAMES
  .map((n) => testimonials.find((t) => t.name === n))
  .filter((t): t is Testimonial => Boolean(t));

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  site.url.replace(/\/$/, "");

export const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const SERVICE_CATALOG = [
  {
    name: "Residential Junk Removal",
    description: "Full-service residential junk and clutter removal across Hawaiʻi Island.",
    slug: "residential-junk-removal",
  },
  {
    name: "Demolition Services",
    description: "Licensed, insured demolition of sheds, decks, fences, hot tubs and interior tear-out.",
    slug: "demolition-services",
  },
  {
    name: "Dumpster Rentals",
    description: "Roll-off dumpster rentals with flexible sizes and responsible disposal across Hawaiʻi County.",
    slug: "dumpster-rentals",
  },
  {
    name: "Estate Cleanouts",
    description: "Compassionate, full-service estate clearing with sorting for donation, recycling and disposal.",
    slug: "estate-cleanouts",
  },
];

export function localBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    "@id": LOCALBUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: ["Hawaii Island Waste Junk Removal & Demolition", "HIW"],
    description: site.description,
    url: SITE_URL,
    image: `${SITE_URL}/images/og-default.jpg`,
    logo: `${SITE_URL}/images/logo.png`,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "$$",
    foundingDate: site.founded,
    founder: site.ownerNames.map((n) => ({ "@type": "Person", name: n })),
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.hq.locality,
      addressRegion: site.hq.region,
      postalCode: site.hq.postalCode,
      addressCountry: site.hq.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.hq.lat,
      longitude: site.hq.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hawaiʻi County, HI" },
      { "@type": "AdministrativeArea", name: "Hawaiʻi Island" },
      ...locations.map((l) => ({ "@type": "City", name: l.name })),
    ],
    sameAs: [site.social.instagram],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEW_AVERAGE.toFixed(1),
      reviewCount: String(TOTAL_REVIEW_COUNT),
      bestRating: "5",
      worstRating: "5",
    },
    review: schemaReviews.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: t.body,
      itemReviewed: { "@id": LOCALBUSINESS_ID },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.name} Services`,
      itemListElement: SERVICE_CATALOG.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: `${SITE_URL}/services/${s.slug}`,
          provider: { "@id": LOCALBUSINESS_ID },
          areaServed: { "@type": "AdministrativeArea", name: "Hawaiʻi County, HI" },
        },
      })),
    },
  };
}

export function serviceSchema(service: Service): Record<string, unknown> {
  const isDumpster = service.slug === "dumpster-rentals";
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    url: `${SITE_URL}/services/${service.slug}`,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  };
  if (isDumpster) {
    offer.priceSpecification = {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: 400,
      minPrice: 400,
      description:
        "Starting price for a 15 cubic-yard, 2-day roll-off bin rental on Hawaiʻi Island. Excludes County of Hawaiʻi disposal fees, which are billed separately at exact tonnage.",
    };
    offer.description =
      "15 cubic-yard, 2-day roll-off bin rental. Pricing starts at $400 in the Hilo/Puna core and scales by distance up to $925 Kona-side. Disposal fees billed at exact tonnage.";
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.metaDescription,
    serviceType: service.title,
    provider: { "@id": LOCALBUSINESS_ID },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hawaiʻi County, HI" },
      { "@type": "AdministrativeArea", name: "Hawaiʻi Island" },
    ],
    url: `${SITE_URL}/services/${service.slug}`,
    offers: offer,
  };
}

export function locationServiceSchema(loc: Location): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/service-area/${loc.slug}#service`,
    name: `Junk Removal & Demolition in ${loc.name}`,
    description:
      loc.metaDescription ||
      `Full-service junk removal, demolition and dumpster rentals in ${loc.name}, Hawaiʻi County.`,
    provider: { "@id": LOCALBUSINESS_ID },
    areaServed: { "@type": "City", name: loc.name, containedInPlace: { "@type": "AdministrativeArea", name: "Hawaiʻi County, HI" } },
    url: `${SITE_URL}/service-area/${loc.slug}`,
  };
}

export function faqSchema(items: FAQ[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

export function reviewsPageSchema(items: Testimonial[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: t.name },
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: 5,
          worstRating: 1,
        },
        reviewBody: t.body,
        itemReviewed: { "@id": LOCALBUSINESS_ID },
      },
    })),
  };
}
