import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero, CTASection, TestimonialCard } from "@/components/site/sections";
import { testimonials } from "@/content/testimonials";
import { JsonLd } from "@/components/schema/JsonLd";
import { reviewsPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reviews — What Our HIW 'Ohana Are Saying",
  description:
    "Real, named reviews from Hawaii Island Waste customers across Hilo and Hawaiʻi Island. See why families and contractors trust us.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
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
        subtitle="Every review on this page is real and named. We don't post anonymous testimonials — that's not how we roll."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-6 fill-(--color-volcano-400) text-(--color-volcano-400)" />
              ))}
            </div>
            <span className="font-display font-bold text-2xl text-(--color-ocean-800)">5.0</span>
            <span className="text-(--color-ocean-700)/70">· From our happy 'ohana</span>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>

          <div className="mt-12 max-w-3xl rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-6 md:p-8">
            <h2 className="font-display font-bold text-xl text-(--color-ocean-800)">
              Worked with us? Tell the next family.
            </h2>
            <p className="mt-2 text-(--color-ocean-700)/85">
              The best way to support a small local business is a kind word online. Tag us{" "}
              <a href="https://instagram.com/hiislandwaste" className="font-bold text-(--color-volcano-500) hover:underline" target="_blank" rel="noopener noreferrer">
                @hiislandwaste
              </a>{" "}
              on Instagram or leave a review on Google. Mahalo!
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
