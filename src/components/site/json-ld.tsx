import { site } from "@/lib/site";
import { locations } from "@/content/locations";
import { testimonials } from "@/content/testimonials";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    image: `${site.url}/images/logo.png`,
    logo: `${site.url}/images/logo.png`,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "$$",
    foundingDate: site.founded,
    founder: site.ownerNames.map((n) => ({ "@type": "Person", name: n })),
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
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hawaiʻi County, HI" },
      ...locations.map((l) => ({ "@type": "City", name: l.name })),
    ],
    sameAs: [site.social.instagram],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.aggregateRating.value,
      reviewCount: site.aggregateRating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.quote,
    })),
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Junk Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Demolition Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dumpster Rentals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estate Cleanouts" } },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
