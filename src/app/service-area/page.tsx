import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero, CTASection, LocationCard, SectionHeading } from "@/components/site/sections";
import { locations, regions, type Region } from "@/content/locations";

export const metadata: Metadata = {
  title: "Service Area — All of Hawaiʻi Island (Big Island)",
  description:
    "Hawaii Island Waste serves every region of Hawaiʻi Island — Hilo, Puna, Hāmākua, Kohala, Kona and Kaʻū. Browse our service area or call 808-300-9766.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  const regionKeys: Region[] = ["east-hawaii", "north-hawaii", "west-hawaii", "south-hawaii"];

  return (
    <>
      <PageHero
        eyebrow="Hawaiʻi County"
        title="We serve the whole Big Island."
        subtitle="Our home base is Hilo, our most regular service area is east-side, and our scheduled runs cover every corner — Hāmākua coast, Kohala, Kona side, Waikoloa resorts, and Kaʻū."
        imageSrc="/images/hero-area.jpg"
        imageAlt="Hawaiʻi Island service area"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Regions"
            title="Pick a region or jump straight to your town."
            subtitle="The entire Big Island is Hawaiʻi County — we organize service by the four regions locals know."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {regionKeys.map((key) => {
              const r = regions[key];
              const count = locations.filter((l) => l.region === key).length;
              return (
                <Link
                  key={key}
                  href={`/service-area/${key}`}
                  className="group flex flex-col rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-6 hover:border-(--color-volcano-300) hover:shadow-md transition-all"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-(--color-volcano-500)">
                    {count} {count === 1 ? "town" : "towns"}
                  </p>
                  <h3 className="mt-2 font-display font-extrabold text-2xl text-(--color-ocean-800) group-hover:text-(--color-volcano-500) transition-colors">
                    {r.name}
                  </h3>
                  <p className="mt-1 italic text-(--color-ocean-700)/75">{r.tagline}</p>
                  <p className="mt-3 text-sm text-(--color-ocean-700)/85">{r.description}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-(--color-volcano-500)">
                    Explore {r.name} <ArrowRight className="size-3.5" />
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {regionKeys.map((key) => {
        const r = regions[key];
        const locs = locations.filter((l) => l.region === key);
        return (
          <section
            key={key}
            className="py-12 md:py-16 bg-(--color-sand-50) border-y border-(--color-sand-200) odd:bg-white odd:border-y-0"
          >
            <div className="container-x">
              <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-(--color-volcano-500)">
                    {r.name}
                  </p>
                  <h2 className="mt-1 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
                    {r.tagline}
                  </h2>
                </div>
                <Link href={`/service-area/${key}`} className="inline-flex items-center gap-1 text-sm font-bold text-(--color-volcano-500) hover:text-(--color-volcano-600)">
                  Region overview <ArrowRight className="size-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {locs.map((l) => (
                  <LocationCard key={l.slug} location={l} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-12 bg-white">
        <div className="container-x text-center text-sm text-(--color-ocean-700)/75 max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-(--color-volcano-500)" />
            Don't see your town? We probably still serve it — the whole island is Hawaiʻi County and we work the whole island.
            Call <a href="tel:+18083009766" className="font-bold text-(--color-volcano-500) hover:underline">808-300-9766</a> to confirm.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
