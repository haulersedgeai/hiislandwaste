import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, CTASection, SectionHeading } from "@/components/site/sections";
import { customerSegments } from "@/content/customer-segments";

export const metadata: Metadata = {
  title: "Who We Serve — Families, Kūpuna, Contractors, Realtors",
  description:
    "Hawaii Island Waste serves four kinds of customers across Hawaiʻi Island: everyday families, kūpuna and ʻohana, contractors, and realtors. See how we tailor each.",
  alternates: { canonical: "/who-we-serve" },
};

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="A trusted partner across Hawaiʻi Island."
        subtitle="Different jobs need different approaches. We tailor our crews, scheduling and communication style to the kind of project you have."
        imageSrc="/images/hero-junk.jpg"
        imageAlt="Customers we serve"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Four ways we serve"
            title="Pick the one that sounds like you."
            subtitle="Each page goes deep — pain points, how we help, and the services we'd recommend."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {customerSegments.map((seg) => (
              <Link
                key={seg.slug}
                href={`/who-we-serve/${seg.slug}`}
                className="group flex flex-col rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-6 md:p-8 hover:border-(--color-volcano-300) hover:shadow-md transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-(--color-volcano-500)">
                  {seg.shortLabel}
                </p>
                <h2 className="mt-2 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800) group-hover:text-(--color-volcano-500) transition-colors">
                  {seg.title}
                </h2>
                <p className="mt-3 italic text-(--color-ocean-700)/80">{seg.tagline}</p>
                <p className="mt-3 text-(--color-ocean-700)/85 leading-relaxed">{seg.promise}</p>
                <p className="mt-5 inline-flex items-center gap-1 font-bold text-(--color-volcano-500)">
                  How we help <ArrowRight className="size-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
