import type { Metadata } from "next";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { PageHero, CTASection } from "@/components/site/sections";
import { faqs, faqsByCategory } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About Junk Removal, Demolition & Dumpsters",
  description:
    "Everything you wanted to know: what we take, how we price, where we serve, our insurance, and how the process works on Hawaiʻi Island.",
  alternates: { canonical: "/faq" },
};

const CATEGORY_TITLES: Record<string, string> = {
  general: "About Us",
  items: "Items We Take",
  process: "How It Works",
  pricing: "Pricing",
  "service-area": "Service Area",
  insurance: "Insurance & Licensing",
};

const CATEGORY_ORDER = ["general", "items", "process", "pricing", "service-area", "insurance"] as const;

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions, straight answers."
        subtitle="Don't see your question? Call us — Mon–Sun, 7am–8pm. We'd rather talk than have you guess."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container-x max-w-4xl">
          {CATEGORY_ORDER.map((cat) => {
            const items = faqsByCategory[cat];
            if (!items) return null;
            return (
              <div key={cat} className="mb-10">
                <h2 className="font-display font-extrabold text-2xl text-(--color-ocean-800) mb-2">
                  {CATEGORY_TITLES[cat]}
                </h2>
                <Accordion type="single" collapsible className="border-t border-(--color-sand-200)">
                  {items.map((f, idx) => (
                    <AccordionItem key={f.q} value={`${cat}-${idx}`}>
                      <AccordionTrigger>{f.q}</AccordionTrigger>
                      <AccordionContent>
                        <p>{f.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection title="Still have questions?" body="Give us a call. We're happy to talk it through — no pressure to book." />
    </>
  );
}
