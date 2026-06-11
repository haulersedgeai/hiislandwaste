import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, CTASection, SectionHeading, ServiceCard } from "@/components/site/sections";
import { services, serviceHubs } from "@/content/services";

export const metadata: Metadata = {
  title: "Services — Junk Removal, Demolition, Dumpsters, Estate Cleanouts",
  description:
    "Full-service junk removal, demolition, dumpster rentals and estate cleanouts on Hawaiʻi Island. Browse all services or call 808-300-9766.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const categories = [
    { key: "junk-removal", title: "Junk Removal", description: "Furniture, appliances, mattresses, electronics, garage cleanouts, and full household clearing." },
    { key: "demolition", title: "Demolition", description: "Sheds, decks, fences, hot tubs, interior tear-outs, and construction debris removal." },
    { key: "dumpsters", title: "Dumpster Rentals", description: "Right-sized roll-offs for home, renovation and contractor projects." },
    { key: "estate-cleanouts", title: "Estate Cleanouts", description: "Compassionate, full-service estate clearing and property cleanouts." },
  ] as const;

  return (
    <>
      <PageHero
        eyebrow="Hawaiʻi Island"
        title="Full-scale solutions, handled with aloha."
        subtitle="From a single bulky item to a complete property transformation, Hawaii Island Waste provides the professional, full-service removal and demolition solutions our island trusts."
        imageSrc="/images/hero-junk.jpg"
        imageAlt="Hawaii Island Waste services"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our 4 Pillars"
            title="Start with one of our main services."
            subtitle="Or jump to a specific need — we've got pages for everything from hot tubs to hoarder cleanouts."
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceHubs.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {categories.map((cat) => {
        const subs = services.filter((s) => s.category === cat.key && !s.isHub);
        if (subs.length === 0) return null;
        return (
          <section key={cat.key} className="py-12 md:py-16 bg-(--color-sand-50) border-y border-(--color-sand-200)">
            <div className="container-x">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div>
                  <h2 className="font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
                    {cat.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-(--color-ocean-700)/80">{cat.description}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {subs.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    aria-label={`Learn more about ${s.title}`}
                    className="group rounded-lg border border-(--color-sand-200) bg-white p-5 hover:border-(--color-volcano-300) hover:shadow-md transition-all"
                  >
                    <h3 className="font-display font-bold text-(--color-ocean-800) group-hover:text-(--color-volcano-500) transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-(--color-ocean-700)/80 line-clamp-2">{s.shortDescription}</p>
                    <p className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-(--color-volcano-500)">
                      Learn more <ArrowRight className="size-3.5" />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
