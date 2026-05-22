import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield, Award, Heart, Clock, Truck, Sparkles, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteForm } from "@/components/site/quote-form";
import { CTASection, SectionHeading, ServiceCard, TestimonialCard, TrustBar, LocationCard } from "@/components/site/sections";
import { serviceHubs } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { customerSegments } from "@/content/customer-segments";
import { locations } from "@/content/locations";
import { site } from "@/lib/site";

export default function HomePage() {
  const featuredLocations = locations.filter((l) =>
    ["hilo", "keaau", "pahoa", "hawaiian-paradise-park", "volcano", "waimea", "kailua-kona", "honokaa"].includes(l.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-(--color-ocean-800) text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-crew.jpg"
            alt="Hawaii Island Waste crew loading materials"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-(--color-ocean-900)/95 via-(--color-ocean-800)/85 to-(--color-volcano-700)/60" />
        </div>

        <div className="relative container-x py-16 md:py-24 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-(--color-volcano-200)">
              <Heart className="size-3.5" /> Locally owned · Family-run since 2021
            </p>
            <h1 className="mt-5 font-display font-extrabold leading-[1.02] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Your Fresh Start,
              <br />
              <span className="text-(--color-volcano-300)">Handled With ALOHA.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-white/90 leading-relaxed">
              Dependable junk removal, demolition, dumpster rentals and estate cleanouts across Hawaiʻi Island. You point — we do the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="xl">
                <Link href="/get-a-quote">Get A Free Quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="xl" variant="outlineLight">
                <a href={`tel:${site.phoneE164}`}>
                  <Phone className="size-4" /> {site.phone}
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5"><Shield className="size-4 text-(--color-volcano-300)" /> $2M Insured</span>
              <span className="inline-flex items-center gap-1.5"><Award className="size-4 text-(--color-volcano-300)" /> Featured on HGTV</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="size-4 text-(--color-volcano-300)" /> Mon–Sun 7am–8pm</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="bg-white/97 backdrop-blur shadow-xl">
              <CardContent className="p-6 md:p-7">
                <h2 className="font-display font-bold text-xl text-(--color-ocean-800)">Get a free quote</h2>
                <p className="mt-1 text-sm text-(--color-ocean-700)/75">
                  Fast response. Mon–Sun, 7am–8pm. Or call <a href={`tel:${site.phoneE164}`} className="font-bold text-(--color-volcano-500)">{site.phone}</a>.
                </p>
                <div className="mt-5">
                  <QuoteForm compact />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-500)">Built for Hawaiʻi Island</p>
            <h2 className="mt-2 font-display font-extrabold text-3xl md:text-5xl text-(--color-ocean-800) tracking-tight">
              Our Mission
            </h2>
            <p className="mt-5 text-lg md:text-xl text-(--color-ocean-700)/85 leading-relaxed">
              To be the trusted partner our island relies on — combining compassionate service for our <strong>kūpuna</strong> with professional expertise for our builders, so every space we clear paves the way for a stronger, more beautiful community.
            </p>
            <p className="mt-4 text-base text-(--color-ocean-700)/75 leading-relaxed">
              We are Hawaii Island Waste, founded on the Hawaiian value of <em>mālama</em> — to care for our people and our place. Since 2021, we've transformed overwhelmed spaces in Hilo and across Hawaiʻi Island, lifting burdens with both strength and heart. It is this <em>kuleana</em> to serve with aloha that drives us to be your trusted partner in renewal.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Truck, title: "Convenience", body: "We handle the entire job from start to finish, so you don't have to lift a finger." },
                { icon: Heart, title: "Community", body: "A trusted local partner invested in the well-being of Hawaiʻi Island." },
                { icon: Clock, title: "Reliability", body: "Professional, on-time service you can count on, every single time." },
                { icon: Sparkles, title: "Compassion", body: "Strength and understanding for life's stressful transitions, big or small." },
              ].map((p) => (
                <div key={p.title} className="rounded-lg border border-(--color-sand-200) bg-(--color-sand-50) p-5">
                  <p.icon className="size-6 text-(--color-volcano-500)" />
                  <h3 className="mt-3 font-display font-bold text-(--color-ocean-800)">{p.title}</h3>
                  <p className="mt-1 text-sm text-(--color-ocean-700)/80">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/gallery/photo-022.jpg"
              alt="Hawaii Island Waste crew at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-(--color-sand-50)">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Solutions"
            title="Full-scale solutions, handled with aloha."
            subtitle="From a single bulky item to a complete property transformation, our trained crews handle the job from quote to final sweep."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceHubs.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore All Services <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Who We Serve"
            title="A trusted partner across Hawaiʻi Island."
            subtitle="We tailor our approach to each kind of project — from a tired garage to a kupuna's downsize to a contractor's tear-out."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {customerSegments.map((seg) => (
              <Link
                key={seg.slug}
                href={`/who-we-serve/${seg.slug}`}
                className="group rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-6 hover:border-(--color-volcano-300) hover:shadow-md transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-(--color-volcano-500)">
                  {seg.shortLabel}
                </p>
                <h3 className="mt-3 font-display font-bold text-lg text-(--color-ocean-800) group-hover:text-(--color-volcano-500) transition-colors">
                  {seg.tagline}
                </h3>
                <p className="mt-2 text-sm text-(--color-ocean-700)/80 leading-relaxed">{seg.promise}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-(--color-volcano-500)">
                  Learn how we help <ArrowRight className="size-3.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-(--color-ocean-800) text-white">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-300)">Trusted by Hawaiʻi Island & beyond</p>
            <h2 className="mt-2 font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              See what our HIW 'Ohana are saying
            </h2>
            <div className="mt-3 flex justify-center items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-(--color-volcano-300) text-(--color-volcano-300)" />
              ))}
              <span className="ml-2 text-white/85 text-sm">Real reviews. Real names.</span>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outlineLight" size="lg">
              <Link href="/reviews">Read More Reviews <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Area teaser */}
      <section className="py-16 md:py-24 bg-(--color-sand-50)">
        <div className="container-x">
          <SectionHeading
            eyebrow="Service Area"
            title="Serving every corner of Hawaiʻi Island."
            subtitle="From Hilo to Kona, Hāmākua to Kaʻū. Our home base is east-side, and we run scheduled service to the whole island."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {featuredLocations.map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/service-area"><MapPin className="size-4" /> See Full Service Area</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HGTV callout */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-500)">In the Spotlight</p>
            <h2 className="mt-2 font-display font-extrabold text-3xl md:text-4xl text-(--color-ocean-800) tracking-tight">
              As seen on HGTV's <em>Renovation Aloha</em>
            </h2>
            <p className="mt-4 text-lg text-(--color-ocean-700)/85 leading-relaxed">
              We were honored to bring our demolition and site-clearance expertise to a major Waikoloa Village renovation, featured on HGTV's Renovation Aloha (Season 2, Episode 4). The same level of care, precision, and respect for the ʻāina that we bring to every client.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Read Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-(--color-sand-200)">
            <Image
              src="/images/gallery/photo-024.jpg"
              alt="Hawaii Island Waste demolition project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
