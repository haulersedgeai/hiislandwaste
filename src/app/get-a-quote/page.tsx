import type { Metadata } from "next";
import { Check, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/sections";
import { QuoteCTA } from "@/components/site/quote-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote — Hawaii Island Waste",
  description:
    "Free, no-obligation quote for junk removal, demolition, dumpster rentals or estate cleanouts on Hawaiʻi Island. Photo quotes welcome.",
  alternates: { canonical: "/get-a-quote" },
};

export default function GetAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Quote"
        title="Tell us about your project."
        subtitle="Photo quotes work great for small jobs. For estates or demos, we'll come walk it. No obligation, ever."
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Card>
              <CardContent className="p-6 md:p-8">
                <QuoteCTA />
              </CardContent>
            </Card>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-lg text-(--color-ocean-800)">
                  What to expect
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-(--color-ocean-700)/90">
                  {[
                    "Fast reply, usually within hours during business hours",
                    "Free estimate by phone, photo, or on-site walk-through",
                    "Honest, volume-based pricing — no hidden fees",
                    "Scheduling that works around your day",
                    "Licensed, $2M insured, DOT compliant",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="size-4 shrink-0 mt-0.5 text-(--color-forest-500)" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-lg text-(--color-ocean-800)">
                  Prefer to call?
                </h3>
                <p className="mt-2 text-sm text-(--color-ocean-700)/80">
                  We're real humans, in Hilo, ready to help.
                </p>
                <a href={`tel:${site.phoneE164}`} className="mt-4 flex items-center gap-2 text-2xl font-display font-extrabold text-(--color-volcano-500) hover:text-(--color-volcano-600)">
                  <Phone className="size-6" /> {site.phone}
                </a>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-(--color-ocean-700)/70">
                  <Clock className="size-3.5" /> {site.hoursLine}
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
