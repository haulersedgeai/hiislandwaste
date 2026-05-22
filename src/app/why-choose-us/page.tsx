import type { Metadata } from "next";
import { Truck, Heart, Clock, Sparkles, Shield, Award, Star, MapPin } from "lucide-react";
import { PageHero, CTASection, TestimonialCard } from "@/components/site/sections";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Why Choose Hawaii Island Waste",
  description:
    "Locally owned, $2M insured, DOT compliant, and featured on HGTV's Renovation Aloha. Here's why families and contractors trust us across Hawaiʻi Island.",
  alternates: { canonical: "/why-choose-us" },
};

const pillars = [
  { icon: Truck, title: "Full-Service", body: "Our promise is simple: you point, we do the rest. From the initial quote to the final sweep, we handle every step. No lifting, no hauling, no hidden steps or surprises. Just a completely cleared space." },
  { icon: Heart, title: "With Aloha", body: "We are your neighbors, not a mainland franchise. We treat your home, your belongings, and our shared ʻāina with the utmost respect and care, ensuring every job reflects the true spirit of aloha." },
  { icon: Clock, title: "Reliable", body: "We are your rock-solid partner. We show up when we say we will, with the right crew and equipment to get the job done right the first time. Your peace of mind starts with our dependability." },
  { icon: Sparkles, title: "Compassionate", body: "We provide strength and understanding for life's stressful transitions — estate clearings, kupuna downsizes, hoarder cleanouts. We work at your family's pace, never our own." },
];

const credentials = [
  { icon: Shield, title: "$2M Liability Insurance", body: "We carry a comprehensive $2 million insurance plan. Your property, driveway, and home or business are fully protected from the moment we arrive." },
  { icon: Shield, title: "Fully Insured Crew", body: "Every member of our crew is fully insured. If an accident happens on-site, the liability is on us — not on you." },
  { icon: Award, title: "DOT Compliant", body: "Our trucks and drivers meet strict Department of Transportation standards with regular inspections and proper load securement." },
  { icon: Award, title: "As Seen on HGTV", body: "We were featured on Renovation Aloha (Season 2, Episode 4) for our demolition and site-clearance work on a Waikoloa Village project." },
  { icon: Star, title: "5-Star Reviews", body: "Real reviews from real Hawaiʻi Island customers. Not a single one of our testimonials is anonymous." },
  { icon: MapPin, title: "Locally Owned & Operated", body: "Born and raised on Hawaiʻi Island. We aren't going anywhere — this community is our home." },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="The difference is in the details."
        subtitle="Locally owned. $2M insured. DOT compliant. Featured on HGTV. Backed by real reviews from real island customers."
        imageSrc="/images/hero-crew.jpg"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-500)">Our Pillars</p>
            <h2 className="mt-2 font-display font-extrabold text-3xl md:text-4xl text-(--color-ocean-800)">
              Four things you'll feel on every job.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-6 md:p-8">
                <p.icon className="size-8 text-(--color-volcano-500)" />
                <h3 className="mt-4 font-display font-extrabold text-2xl text-(--color-ocean-800)">{p.title}</h3>
                <p className="mt-3 text-(--color-ocean-700)/85 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-(--color-ocean-800) text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-300)">Credentials</p>
            <h2 className="mt-2 font-display font-extrabold text-3xl md:text-4xl">
              We carry what budget haulers don't.
            </h2>
            <p className="mt-3 text-white/80">
              These aren't marketing claims — they're the bare minimum to do this work right.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((c) => (
              <div key={c.title} className="rounded-xl border border-white/15 bg-white/5 p-6">
                <c.icon className="size-7 text-(--color-volcano-300)" />
                <h3 className="mt-3 font-display font-bold text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-white/80">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-500)">In Our Customers' Words</p>
            <h2 className="mt-2 font-display font-extrabold text-3xl md:text-4xl text-(--color-ocean-800)">
              See for yourself.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
