import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero, CTASection, TestimonialCard } from "@/components/site/sections";
import {
  testimonials,
  GOOGLE_REVIEW_COUNT,
  YELP_REVIEW_COUNT,
  TOTAL_REVIEW_COUNT,
  REVIEW_AVERAGE,
  type Testimonial,
} from "@/content/testimonials";
import { JsonLd } from "@/components/schema/JsonLd";
import { reviewsPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reviews — What Our HIW 'Ohana Are Saying",
  description:
    "Real, named reviews from Hawaii Island Waste customers across Hilo and Hawaiʻi Island. See why families and contractors trust us.",
  alternates: { canonical: "/reviews" },
};

// TODO(verify): Replace with the verified Google Business Profile URL once confirmed.
const GOOGLE_BUSINESS_URL = "https://www.google.com/maps/place/Hawaii+Island+Waste";
// TODO(verify): Replace with the verified Yelp profile URL once confirmed.
const YELP_BUSINESS_URL =
  "https://www.yelp.com/biz/hawaii-island-waste-junk-removal-and-dumpster-rental-hilo";

const SEGMENT_GROUPS: { tag: string; label: string }[] = [
  { tag: "families", label: "Families" },
  { tag: "kupuna-ohana", label: "Kūpuna & ʻOhana" },
  { tag: "contractors", label: "Contractors" },
  { tag: "realtors", label: "Realtors" },
];

function groupTestimonials(items: Testimonial[]) {
  const groups: { label: string; items: Testimonial[] }[] = [];
  const placed = new Set<string>();
  for (const g of SEGMENT_GROUPS) {
    const matched = items.filter(
      (t) => !placed.has(t.name) && t.tags?.segments?.includes(g.tag),
    );
    matched.forEach((t) => placed.add(t.name));
    if (matched.length > 0) groups.push({ label: g.label, items: matched });
  }
  const other = items.filter((t) => !placed.has(t.name));
  if (other.length > 0) groups.push({ label: "Other", items: other });
  return groups;
}

export default function ReviewsPage() {
  const groups = groupTestimonials(testimonials);

  return (
    <>
      <JsonLd id="ld-reviews-list" data={reviewsPageSchema(testimonials)} />
      <JsonLd
        id="ld-breadcrumb-reviews"
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews" },
        ])}
      />
      <PageHero
        eyebrow="Reviews"
        title="See what our HIW 'Ohana are saying."
        subtitle={`${TOTAL_REVIEW_COUNT} verified 5-star reviews across Google & Yelp. Every review on this page is real and named — we don't post anonymous testimonials.`}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          {/* Rating header + platform badge links */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-6 fill-(--color-volcano-400) text-(--color-volcano-400)" />
                ))}
              </div>
              <span className="font-display font-bold text-2xl text-(--color-ocean-800)">
                {REVIEW_AVERAGE.toFixed(1)}
              </span>
              <span className="text-(--color-ocean-700)/70">· {TOTAL_REVIEW_COUNT} reviews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-3xl">
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-5 hover:border-(--color-volcano-300) hover:shadow-md transition-all"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white border border-(--color-sand-200) font-display font-extrabold text-xl text-(--color-ocean-800)">
                G
              </span>
              <div>
                <p className="font-display font-bold text-(--color-ocean-800)">
                  {REVIEW_AVERAGE.toFixed(1)} ★ on Google
                </p>
                <p className="text-sm text-(--color-ocean-700)/75">
                  {GOOGLE_REVIEW_COUNT} reviews — read them on Google
                </p>
              </div>
            </a>
            <a
              href={YELP_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-5 hover:border-(--color-volcano-300) hover:shadow-md transition-all"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white border border-(--color-sand-200) font-display font-extrabold text-xl text-(--color-volcano-500)">
                Y
              </span>
              <div>
                <p className="font-display font-bold text-(--color-ocean-800)">
                  {REVIEW_AVERAGE.toFixed(1)} ★ on Yelp
                </p>
                <p className="text-sm text-(--color-ocean-700)/75">
                  {YELP_REVIEW_COUNT} reviews — read them on Yelp
                </p>
              </div>
            </a>
          </div>

          {/* Grouped by segment */}
          <div className="space-y-14">
            {groups.map((g) => (
              <div key={g.label}>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800) tracking-tight">
                  {g.label}
                </h2>
                <div className="mt-6 grid md:grid-cols-2 gap-5 max-w-5xl">
                  {g.items.map((t) => (
                    <TestimonialCard key={t.name} testimonial={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-3xl rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-6 md:p-8">
            <h2 className="font-display font-bold text-xl text-(--color-ocean-800)">
              Worked with us? Tell the next family.
            </h2>
            <p className="mt-2 text-(--color-ocean-700)/85">
              The best way to support a small local business is a kind word online. Tag us{" "}
              <a href="https://instagram.com/hiislandwaste" className="font-bold text-(--color-volcano-500) hover:underline" target="_blank" rel="noopener noreferrer">
                @hiislandwaste
              </a>{" "}
              on Instagram or leave a review on{" "}
              <a href={GOOGLE_BUSINESS_URL} className="font-bold text-(--color-volcano-500) hover:underline" target="_blank" rel="noopener noreferrer">
                Google
              </a>
              . Mahalo!
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
