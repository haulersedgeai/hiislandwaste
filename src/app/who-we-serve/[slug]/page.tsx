import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, CTASection, ServiceCard, TestimonialCard } from "@/components/site/sections";
import { QuoteCTA } from "@/components/site/quote-cta";
import { customerSegments, getSegment } from "@/content/customer-segments";
import { getService } from "@/content/services";
import { getTestimonialsForSegment } from "@/content/testimonials";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return customerSegments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const seg = getSegment(slug);
  if (!seg) return {};
  return {
    title: seg.metaTitle,
    description: seg.metaDescription,
    alternates: { canonical: `/who-we-serve/${seg.slug}` },
  };
}

export default async function SegmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seg = getSegment(slug);
  if (!seg) notFound();

  const recommended = seg.recommendedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const featuredTestimonials = getTestimonialsForSegment(seg.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={seg.shortLabel}
        title={seg.title}
        subtitle={seg.tagline}
        imageSrc="/images/hero-junk.jpg"
      />

      <nav className="border-b border-(--color-sand-200) bg-white" aria-label="Breadcrumb">
        <div className="container-x py-3 text-sm text-(--color-ocean-700)/70">
          <Link href="/" className="hover:text-(--color-volcano-500)">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/who-we-serve" className="hover:text-(--color-volcano-500)">Who We Serve</Link>
          <span className="mx-2">/</span>
          <span className="text-(--color-ocean-800) font-semibold">{seg.shortLabel}</span>
        </div>
      </nav>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-xl text-(--color-ocean-700)/85 leading-relaxed font-display italic">
              {seg.promise}
            </p>
            <div className="mt-6 space-y-5 text-lg text-(--color-ocean-700)/90 leading-relaxed">
              {seg.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h2 className="mt-12 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
              What you're up against
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {seg.painPoints.map((p) => (
                <div key={p.title} className="rounded-lg border border-(--color-sand-200) bg-(--color-sand-50) p-5">
                  <h3 className="font-display font-bold text-(--color-ocean-800)">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-(--color-ocean-700)/85">{p.body}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
              How we help
            </h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {seg.howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="size-5 shrink-0 mt-0.5 text-(--color-forest-500)" />
                  <span className="text-(--color-ocean-700)/90">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
              Recommended services
            </h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {recommended.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>

            {featuredTestimonials.length > 0 && (
              <>
                <h2 className="mt-12 font-display font-extrabold text-2xl md:text-3xl text-(--color-ocean-800)">
                  What folks like you say
                </h2>
                <div className="mt-5 grid md:grid-cols-2 gap-5">
                  {featuredTestimonials.map((t) => (
                    <TestimonialCard key={t.name} testimonial={t} />
                  ))}
                </div>
              </>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/get-a-quote">Get A Free Quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${site.phoneE164}`}>
                  <Phone className="size-4" /> {site.phone}
                </a>
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-(--color-ocean-800)">
                    Tell us about your project
                  </h3>
                  <p className="mt-1 text-sm text-(--color-ocean-700)/75">
                    Quick reply — Mon–Sun, 7am–8pm.
                  </p>
                  <div className="mt-4">
                    <QuoteCTA compact />
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
