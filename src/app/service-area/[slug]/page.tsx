import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, MapPin, Route, Landmark, Truck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, CTASection, LocationCard, ServiceCard, TestimonialCard } from "@/components/site/sections";
import { QuoteForm } from "@/components/site/quote-form";
import { locations, regions, getLocation, FACILITY_DETAILS, type Region, type Location } from "@/content/locations";
import { serviceHubs } from "@/content/services";
import { getTestimonialsForLocation } from "@/content/testimonials";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, locationServiceSchema } from "@/lib/schema";

const REGION_SLUGS: Region[] = ["east-hawaii", "north-hawaii", "west-hawaii", "south-hawaii"];

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...locations.map((l) => ({ slug: l.slug })),
    ...REGION_SLUGS.map((r) => ({ slug: r })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (REGION_SLUGS.includes(slug as Region)) {
    const r = regions[slug as Region];
    return {
      title: `${r.name} Service Area — Junk Removal, Demolition & Dumpsters`,
      description: r.description,
      alternates: { canonical: `/service-area/${slug}` },
    };
  }
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/service-area/${slug}` },
  };
}

export default async function ServiceAreaSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (REGION_SLUGS.includes(slug as Region)) {
    return <RegionView region={slug as Region} />;
  }

  const loc = getLocation(slug);
  if (!loc) notFound();

  return <LocationView slug={slug} />;
}

function RegionView({ region }: { region: Region }) {
  const r = regions[region];
  const locs = locations.filter((l) => l.region === region);

  return (
    <>
      <JsonLd
        id={`ld-breadcrumb-region-${region}`}
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Area", url: "/service-area" },
          { name: r.name, url: `/service-area/${region}` },
        ])}
      />
      <PageHero
        eyebrow="Region"
        title={`${r.name} — ${r.tagline}`}
        subtitle={r.intro}
        imageSrc="/images/hero-area.jpg"
        imageAlt={r.name}
      />

      <nav className="border-b border-(--color-sand-200) bg-white" aria-label="Breadcrumb">
        <div className="container-x py-3 text-sm text-(--color-ocean-700)/70">
          <Link href="/" className="hover:text-(--color-volcano-500)">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/service-area" className="hover:text-(--color-volcano-500)">Service Area</Link>
          <span className="mx-2">/</span>
          <span className="text-(--color-ocean-800) font-semibold">{r.name}</span>
        </div>
      </nav>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
              Towns we serve in {r.name}
            </h2>
            <p className="mt-2 text-(--color-ocean-700)/85">
              Tap a town for neighborhoods, landmarks and a town-specific quote form.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {locs.map((l) => (
                <LocationCard key={l.slug} location={l} />
              ))}
            </div>

            <h2 className="mt-14 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
              Services available in {r.name}
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              {serviceHubs.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-(--color-ocean-800)">
                    Get a quote in {r.name}
                  </h3>
                  <div className="mt-4">
                    <QuoteForm compact />
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function LocationView({ slug }: { slug: string }) {
  const loc = getLocation(slug)!;
  const r = regions[loc.region];
  const sameRegion = locations.filter((l) => l.region === loc.region && l.slug !== loc.slug).slice(0, 8);
  const locationTestimonials = getTestimonialsForLocation(loc.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        id={`ld-breadcrumb-${loc.slug}`}
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Area", url: "/service-area" },
          { name: r.name, url: `/service-area/${loc.region}` },
          { name: loc.name, url: `/service-area/${loc.slug}` },
        ])}
      />
      <JsonLd id={`ld-service-area-${loc.slug}`} data={locationServiceSchema(loc)} />
      <PageHero
        eyebrow={`${r.name} · Service Area`}
        title={`Junk Removal & Demolition in ${loc.name}`}
        subtitle={loc.intro}
        imageSrc="/images/hero-area.jpg"
        imageAlt={loc.fullName}
      />

      <nav className="border-b border-(--color-sand-200) bg-white" aria-label="Breadcrumb">
        <div className="container-x py-3 text-sm text-(--color-ocean-700)/70">
          <Link href="/" className="hover:text-(--color-volcano-500)">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/service-area" className="hover:text-(--color-volcano-500)">Service Area</Link>
          <span className="mx-2">/</span>
          <Link href={`/service-area/${loc.region}`} className="hover:text-(--color-volcano-500)">{r.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-(--color-ocean-800) font-semibold">{loc.name}</span>
        </div>
      </nav>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
              What we do in {loc.name}
            </h2>
            <p className="mt-3 text-lg text-(--color-ocean-700)/90 leading-relaxed">
              We provide full-service junk removal, demolition, dumpster rentals and estate cleanouts throughout {loc.name}. Our crews know the area, the back roads and the unique challenges of each subdivision and neighborhood.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-5">
                <div className="flex items-center gap-2 text-(--color-volcano-500) font-bold text-sm uppercase tracking-wider">
                  <MapPin className="size-4" /> Neighborhoods we cover
                </div>
                <ul className="mt-3 space-y-1.5 text-(--color-ocean-700)">
                  {loc.neighborhoods.map((n) => (
                    <li key={n}>• {n}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-5">
                <div className="flex items-center gap-2 text-(--color-volcano-500) font-bold text-sm uppercase tracking-wider">
                  <Landmark className="size-4" /> Nearby landmarks
                </div>
                <ul className="mt-3 space-y-1.5 text-(--color-ocean-700)">
                  {loc.landmarks.map((m) => (
                    <li key={m}>• {m}</li>
                  ))}
                </ul>
              </div>
            </div>

            {loc.roads.length > 0 && (
              <div className="mt-6 rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-5">
                <div className="flex items-center gap-2 text-(--color-volcano-500) font-bold text-sm uppercase tracking-wider">
                  <Route className="size-4" /> Roads we run
                </div>
                <p className="mt-2 text-(--color-ocean-700)">{loc.roads.join(" · ")}</p>
              </div>
            )}

            {(loc.localNotes || loc.routedTo) && (
              <section className="mt-12">
                <h3 className="font-display font-extrabold text-2xl text-(--color-ocean-800)">
                  What to know about cleanouts in {loc.name}
                </h3>
                {loc.localNotes && (
                  <p className="mt-3 text-(--color-ocean-700)/90 leading-relaxed">
                    {loc.localNotes}
                  </p>
                )}

                {loc.routedTo && loc.routedTo.length > 0 && (
                  <div className="mt-5 rounded-xl border border-(--color-sand-200) bg-white p-5">
                    <div className="flex items-center gap-2 text-(--color-volcano-500) font-bold text-sm uppercase tracking-wider">
                      <Truck className="size-4" /> How we route the load
                    </div>
                    <p className="mt-3 text-(--color-ocean-700)/90 leading-relaxed">
                      {routingNarrative(loc)}
                    </p>
                  </div>
                )}

                {loc.responseTime && (
                  <div className="mt-4 rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-5">
                    <div className="flex items-center gap-2 text-(--color-volcano-500) font-bold text-sm uppercase tracking-wider">
                      <Clock className="size-4" /> Response time
                    </div>
                    <p className="mt-2 text-(--color-ocean-700)">
                      <strong className="font-display text-(--color-ocean-800)">{loc.responseTime}.</strong>{" "}
                      {responseNarrative(loc)}
                    </p>
                  </div>
                )}
              </section>
            )}

            <h3 className="mt-14 font-display font-extrabold text-2xl text-(--color-ocean-800)">
              Services available in {loc.name}
            </h3>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {serviceHubs.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/get-a-quote">Get A Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${site.phoneE164}`}>
                  <Phone className="size-4" /> {site.phone}
                </a>
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-(--color-ocean-800)">
                    Get a {loc.name} quote
                  </h3>
                  <p className="mt-1 text-sm text-(--color-ocean-700)/75">
                    Tell us about your project — quick reply, no obligation.
                  </p>
                  <div className="mt-4">
                    <QuoteForm compact defaultCity={mapLocationDefault(loc.slug)} />
                  </div>
                </CardContent>
              </Card>
              {locationTestimonials.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </div>
          </aside>
        </div>
      </section>

      {sameRegion.length > 0 && (
        <section className="py-12 md:py-16 bg-(--color-sand-50) border-t border-(--color-sand-200)">
          <div className="container-x">
            <h2 className="font-display font-extrabold text-2xl text-(--color-ocean-800)">
              Nearby towns we also serve
            </h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {sameRegion.map((l) => (
                <LocationCard key={l.slug} location={l} />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href={`/service-area/${loc.region}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-(--color-volcano-500) hover:text-(--color-volcano-600)"
              >
                See all {r.name} towns <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

function routingNarrative(loc: Location): string {
  const routes = loc.routedTo ?? [];
  const general = routes.filter((f) => f !== "west-landfill");
  const hasLandfill = routes.includes("west-landfill");

  const sentences: string[] = [];

  if (general.length > 0) {
    const parts = general.map((f) => {
      const d = FACILITY_DETAILS[f];
      return `${d.name} (${d.place}) — ${d.description}`;
    });
    sentences.push(
      `General loads from ${loc.name} route to ${parts.join("; and ")}.`
    );
  }

  if (hasLandfill) {
    sentences.push(
      `Construction & demolition material from ${loc.name} we haul to the West Hawaiʻi Sanitary Landfill at Puʻuanahulu, per Hawaiʻi County rules — that destination is required for all C&D and grading & grubbing debris regardless of where the job is.`
    );
  }

  sentences.push("We handle the manifests, the tipping fees and the disposal paperwork.");
  return sentences.join(" ");
}

function responseNarrative(loc: Location): string {
  switch (loc.responseTime) {
    case "Same-day or next-day":
      return "Our base is in Hilo, so east-side jobs almost always fit a same-day or next-day window.";
    case "Scheduled — typically 2-3 days":
      return "The drive from Hilo means we batch this area on scheduled runs — usually within 2–3 days of your quote.";
    case "Scheduled days only":
      return "It's a long haul from our Hilo base, so we run this area on scheduled days. Ask us about the next run when you call.";
    default:
      return "Call us and we'll match a window to your job.";
  }
}

function mapLocationDefault(slug: string): string | undefined {
  const map: Record<string, string> = {
    "hilo": "Hilo",
    "kaumana": "Kaumana",
    "keaau": "Keaʻau",
    "pahoa": "Pāhoa",
    "hawaiian-paradise-park": "Hawaiian Paradise Park",
    "orchidland-estates": "Orchidland",
    "ainaloa": "Ainaloa",
    "hawaiian-acres": "Hawaiian Acres",
    "kurtistown": "Kurtistown",
    "mountain-view": "Mountain View",
    "volcano": "Volcano",
    "papaikou": "Papaʻikou",
    "pepeekeo": "Pepeʻekeo",
    "honomu": "Honomū",
    "hakalau": "Hakalau",
    "laupahoehoe": "Laupāhoehoe",
    "honokaa": "Honokaʻa",
    "paauilo": "Paʻauilo",
    "waimea": "Waimea / Kamuela",
    "hawi": "Hāwī",
    "kapaau": "Kapaʻau",
    "kailua-kona": "Kailua-Kona",
    "holualoa": "Holualoa",
    "kealakekua": "Kealakekua",
    "captain-cook": "Captain Cook",
    "honaunau": "Hōnaunau",
    "keauhou": "Keauhou",
    "waikoloa-village": "Waikoloa Village",
    "waikoloa-beach-resort": "Waikoloa Beach Resort",
    "puako": "Puakō / Hāpuna",
    "naalehu": "Nāʻālehu",
    "ocean-view": "Ocean View / HOVE",
    "pahala": "Pāhala",
  };
  return map[slug];
}
