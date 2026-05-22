import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, CTASection } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Pricing — Free Estimates · Volume-Based · No Surprises",
  description:
    "Hawaii Island Waste pricing is volume-based with free, no-obligation estimates. Photo quotes for small jobs. Honest pricing across Hawaiʻi Island.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward pricing. No surprises."
        subtitle="Every job is unique. We quote based on volume — how much space your items take in our truck — plus any special handling. Estimates are always free and never an obligation."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
              How we price your job
            </h2>
            <ul className="mt-6 space-y-3 text-(--color-ocean-700)/90 leading-relaxed">
              {[
                "Volume-based pricing — you pay for the space you fill in our truck.",
                "Special handling (hot tubs, demolition, heavy debris) is quoted separately and shown up-front.",
                "No charge for normal residential stairs or carries.",
                "Free, no-obligation estimates — by phone, text photo, or on-site walk-through.",
                "Photo quotes work great for smaller jobs. Text 808-300-9766.",
                "Payment on completion: cash, card, check, or Venmo.",
                "Same-day and next-day pricing available when our schedule allows.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="size-5 shrink-0 mt-0.5 text-(--color-forest-500)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { title: "Photo Quote", body: "Text a few photos. We'll send a price range within hours during business hours.", tag: "Fastest" },
              { title: "Phone Quote", body: "Tell us about the job over the phone. Good for clear, simple projects.", tag: "Most Common" },
              { title: "On-Site Walk-Through", body: "For big projects — estate cleanouts, demos, dumpster placement — we'll come see it.", tag: "Most Accurate" },
            ].map((q) => (
              <Card key={q.title}>
                <CardContent className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-(--color-volcano-500)">{q.tag}</p>
                  <h3 className="mt-2 font-display font-bold text-xl text-(--color-ocean-800)">{q.title}</h3>
                  <p className="mt-2 text-sm text-(--color-ocean-700)/85">{q.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready for your free estimate?" />
    </>
  );
}
