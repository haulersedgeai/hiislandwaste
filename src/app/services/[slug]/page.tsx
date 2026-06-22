import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, CTASection, ServiceCard, TestimonialCard } from "@/components/site/sections";
import { QuoteForm } from "@/components/site/quote-form";
import { services, getService } from "@/content/services";
import { getTestimonialsForService } from "@/content/testimonials";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/schema/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import {
  BIN_SPEC,
  PRICE_TIERS,
  DISPOSAL_FEES,
  PRICING_NOTES,
  DISPOSAL_DISCLAIMER,
} from "@/content/binPricing";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = (service.relatedSlugs ?? [])
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const serviceTestimonials = getTestimonialsForService(service.slug).slice(0, 2);

  const heroImage =
    service.category === "demolition" ? "/images/hero-demolition.jpg"
    : service.category === "dumpsters" ? "/images/hero-dumpster.jpg"
    : service.category === "estate-cleanouts" ? "/images/hero-estate.jpg"
    : "/images/hero-junk.jpg";

  return (
    <>
      <JsonLd id={`ld-service-${service.slug}`} data={serviceSchema(service)} />
      <JsonLd
        id={`ld-breadcrumb-${service.slug}`}
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` },
        ])}
      />
      <PageHero
        eyebrow={service.isHub ? "Service" : "Specialty Service"}
        title={service.h1}
        subtitle={service.hero}
        imageSrc={heroImage}
        imageAlt={service.title}
      />

      {/* Breadcrumbs */}
      <nav className="border-b border-(--color-sand-200) bg-white" aria-label="Breadcrumb">
        <div className="container-x py-3 text-sm text-(--color-ocean-700)/70">
          <Link href="/" className="hover:text-(--color-volcano-500)">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-(--color-volcano-500)">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-(--color-ocean-800) font-semibold">{service.title}</span>
        </div>
      </nav>

      {/* Main */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 lg:pr-6">
            <div className="prose-content space-y-5 text-lg text-(--color-ocean-700)/90 leading-relaxed">
              {service.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h2 className="mt-12 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
              What's Included
            </h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {service.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="size-5 shrink-0 mt-0.5 text-(--color-forest-500)" />
                  <span className="text-(--color-ocean-700)/90">{item}</span>
                </li>
              ))}
            </ul>

            {service.items && service.items.length > 0 && (
              <>
                <h2 className="mt-12 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
                  Items We Handle
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-(--color-sand-100) border border-(--color-sand-200) px-3 py-1 text-sm text-(--color-ocean-700)"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </>
            )}

            {service.process && (
              <>
                <h2 className="mt-12 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
                  How It Works
                </h2>
                <ol className="mt-5 space-y-4">
                  {service.process.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="shrink-0 size-9 rounded-full bg-(--color-volcano-400) text-white flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-(--color-ocean-800)">{step.title}</h3>
                        <p className="text-(--color-ocean-700)/85">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}

            {service.slug === "dumpster-rentals" && <BinPricingSection />}

            <div className="mt-10 flex flex-wrap gap-3">
              {service.slug === "dumpster-rentals" && (
                <Button size="lg" type="button">
                  RENT A DUMPSTER <ArrowRight className="size-4" />
                </Button>
              )}
              <Button asChild size="lg" variant={service.slug === "dumpster-rentals" ? "secondary" : "primary"}>
                <Link href="/get-a-quote">Get A Free Quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${site.phoneE164}`}>
                  <Phone className="size-4" /> Call {site.phone}
                </a>
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-(--color-ocean-800)">
                    Get a free quote for this job
                  </h3>
                  <p className="mt-1 text-sm text-(--color-ocean-700)/75">
                    Quick reply — Mon–Sun, 7am–8pm.
                  </p>
                  <div className="mt-4">
                    <QuoteForm compact defaultService={mapServiceDefault(service.title)} />
                  </div>
                </CardContent>
              </Card>
              {serviceTestimonials.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 md:py-16 bg-(--color-sand-50) border-t border-(--color-sand-200)">
          <div className="container-x">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
              Related Services
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.slice(0, 6).map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

function BinPricingSection() {
  return (
    <section className="mt-12" aria-labelledby="bin-pricing-heading">
      <h2
        id="bin-pricing-heading"
        className="font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)"
      >
        Bin Rental Pricing
      </h2>
      <p className="mt-2 text-(--color-ocean-700)/85">
        Published flat-rate pricing for our {BIN_SPEC.size} bin, {BIN_SPEC.rentalDays}-day rental.
        Each tier covers a service area — disposal fees are billed separately at the exact tonnage.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {PRICE_TIERS.map((tier) => (
          <div
            key={tier.startsAt}
            className="rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-5"
          >
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-(--color-volcano-500)">
                  Starts at
                </div>
                <div className="mt-1 font-display font-extrabold text-3xl text-(--color-ocean-800)">
                  ${tier.startsAt}
                </div>
                <div className="text-sm text-(--color-ocean-700)/75">+ disposal fee</div>
              </div>
              <div className="text-right text-xs text-(--color-ocean-700)/70">
                {BIN_SPEC.size}
                <br />
                {BIN_SPEC.rentalDays}-day rental
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-(--color-sand-200)">
              <div className="text-xs font-bold uppercase tracking-wider text-(--color-ocean-700)/70">
                Service area
              </div>
              <div className="mt-1.5 text-sm text-(--color-ocean-700)">
                {tier.towns.join(" · ")}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-10 font-display font-extrabold text-xl text-(--color-ocean-800)">
        Disposal Fees (County of Hawaiʻi)
      </h3>
      <p className="mt-2 text-(--color-ocean-700)/85 text-sm">
        Charged in addition to the rental price, at exact tonnage when we offload at the county facility.
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border border-(--color-sand-200)">
        <table className="w-full text-sm">
          <thead className="bg-(--color-sand-100) text-(--color-ocean-800)">
            <tr>
              <th className="px-4 py-2.5 text-left font-display font-bold">Material</th>
              <th className="px-4 py-2.5 text-right font-display font-bold">Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {DISPOSAL_FEES.map((fee) => (
              <tr key={fee.material} className="border-t border-(--color-sand-200)">
                <td className="px-4 py-2.5 text-(--color-ocean-700)">{fee.material}</td>
                <td className="px-4 py-2.5 text-right font-semibold text-(--color-ocean-800)">
                  {fee.perTon !== null ? `$${fee.perTon} / ton` : fee.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-(--color-ocean-700)">
        {PRICING_NOTES.map((note) => (
          <li key={note} className="flex items-start gap-2">
            <Check className="size-4 shrink-0 mt-0.5 text-(--color-forest-500)" />
            <span>{note}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs leading-relaxed text-(--color-ocean-700)/70">
        {DISPOSAL_DISCLAIMER}
      </p>
    </section>
  );
}

function mapServiceDefault(title: string): string | undefined {
  const map: Record<string, string> = {
    "Residential Junk Removal": "Residential Junk Removal",
    "Demolition Services": "Demolition",
    "Dumpster Rentals": "Dumpster Rental",
    "Estate Cleanouts": "Estate Cleanout",
    "Furniture Removal": "Furniture Removal",
    "Appliance Removal": "Appliance Removal",
    "Mattress Removal": "Mattress Removal",
    "TV & Electronics Removal": "TV / Electronics (E-Waste)",
    "Hot Tub Removal": "Hot Tub Removal",
    "Shed Demolition & Removal": "Shed Demolition",
    "Deck & Lanai Demolition": "Deck Demolition",
    "Fence Removal & Demolition": "Fence Removal",
    "Interior Demolition": "Interior Demolition",
    "Compassionate Hoarder Cleanouts": "Hoarder Cleanout",
    "Garage Cleanouts": "Garage Cleanout",
    "Construction Debris Removal": "Construction Debris",
    "Yard Waste & Green Waste Removal": "Yard / Green Waste",
    "Property Cleanouts (For Realtors & Investors)": "Property Cleanout (Realtor)",
    "Commercial & Office Cleanouts": "Commercial / Office",
  };
  return map[title];
}
