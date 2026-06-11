import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHero, CTASection } from "@/components/site/sections";
import { itemsWeTake, itemsWeDoNotTake } from "@/content/items";

export const metadata: Metadata = {
  title: "Items We Take (and Don't) — Hawaii Island Waste",
  description:
    "Big Island-specific list: household, appliances, e-waste, green waste, C&D debris routed to Puʻuanahulu, catchment tank liners, coffee farm debris, estate cleanouts, and what we can't take.",
  alternates: { canonical: "/items-we-take" },
};

export default function ItemsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Haul"
        title="Almost everything. With a few sensible exceptions."
        subtitle="Household, construction, yard, estate. What we can't take we'll point you to the right place — and everything we haul gets sorted on-site: donations first, recycling second, and only what's left goes to the proper Hawaiʻi County facility."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-(--color-ocean-800)">
            What we take
          </h2>
          <p className="mt-4 max-w-3xl text-(--color-ocean-700)/85">
            Everything we haul gets sorted on-site. Usable items go to local donation partners. Recyclables — metals, e-waste, green waste, cardboard — get routed to the right handlers. Construction debris from any job on the island is required by Hawaiʻi County to be hauled to the West Hawaiʻi Sanitary Landfill at Puʻuanahulu, and that's where we take it.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {itemsWeTake.map((cat) => (
              <div key={cat.title} className="rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-6">
                <h3 className="font-display font-bold text-lg text-(--color-ocean-800)">{cat.title}</h3>
                <p className="mt-2 text-sm text-(--color-ocean-700)/85 leading-relaxed">{cat.context}</p>
                <ul className="mt-4 space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-(--color-ocean-700)/85">
                      <Check className="size-4 shrink-0 mt-0.5 text-(--color-forest-500)" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-(--color-sand-100)">
        <div className="container-x max-w-3xl">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
            What we cannot take
          </h2>
          <p className="mt-2 text-(--color-ocean-700)/85">
            We'd rather tell you straight than waste your time. These need a different route, and we'll point you the right way:
          </p>
          <ul className="mt-6 space-y-2">
            {itemsWeDoNotTake.map((item) => (
              <li key={item} className="flex items-start gap-2 text-(--color-ocean-700)/90">
                <X className="size-5 shrink-0 mt-0.5 text-(--color-volcano-500)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-(--color-ocean-700)/70">
            Not sure about a specific item? Call us at <a href="tel:+18083009766" className="font-bold text-(--color-volcano-500) hover:underline">808-300-9766</a> — we'll let you know straight.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
