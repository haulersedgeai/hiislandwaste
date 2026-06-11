import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Shield, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, CTASection, TestimonialCard } from "@/components/site/sections";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "About Hawaii Island Waste — Our Story, Our Mission",
  description:
    "Founded in 2021 by Sherman 'Naea' and Chae Kaopua, Hawaii Island Waste is a locally owned, family-run junk removal and demolition company on Hawaiʻi Island.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Transforming spaces, strengthening community — one load at a time."
        subtitle="We are your trusted 'Ohana at Hawaii Island Waste, providing full-service junk removal and dumpster rentals with ALOHA."
        imageSrc="/images/hero-crew.jpg"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 text-lg text-(--color-ocean-700)/90 leading-relaxed">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-500)">
              The Heart Behind Hawaii Island Waste
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-(--color-ocean-800) tracking-tight">
              Sherman "Naea" & Chae Kaopua — Founders
            </h2>
            <p>
              Hawaii Island Waste was born out of a real-life challenge. During the height of the pandemic, owners Sherman 'Naea' and Chae Kaopua found themselves at a crossroads. With the tattoo industry temporarily shut down, Naea (a former tattoo artist) and Chae spent their time renovating their family home.
            </p>
            <p>
              While they were knee-deep in home improvements, they hit a major roadblock: they couldn't find anyone reliable to pick up and dispose of their construction debris. That "light bulb" moment changed everything. They realized that if they were struggling with the mess, their neighbors likely were, too.
            </p>
            <p className="font-display font-bold text-(--color-ocean-800) text-xl">
              On October 5th, 2021, Hawaii Island Waste was born.
            </p>
            <p>
              From a family truck and trailer to HGTV. The business started as a true family affair. In the early days, it was just Naea and Chae, with their two children strapped into their car seats in the back of the truck. They turned a family project into a mission to serve the community.
            </p>
            <p>
              Today, Hawaii Island Waste has grown from that single truck into a thriving business with a dedicated professional crew. We specialize in full property cleanouts — a level of expertise that even caught the attention of HGTV's <em>Renovation Aloha</em> (Season 2, Episode 4).
            </p>
            <p>
              Our core remains the same. We are a local, family-owned business built on trust, relationships, and the goal of giving our clients a clean slate. When you hire us, you aren't just getting a junk removal crew — you're getting a team that treats your property like their own.
            </p>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-(--color-sand-200)">
              <Image
                src="/images/about/naea-chae-portrait.jpg"
                alt="Sherman 'Naea' and Chae Kaopua, founders of Hawaii Island Waste, in matching HIW polos"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-(--color-sand-200)">
                <Image
                  src="/images/about/naea-chae-family.jpg"
                  alt="Naea and Chae Kaopua with their two children and the Hawaii Island Waste truck at Hilo Bay"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-(--color-sand-200)">
                <Image
                  src="/images/about/naea-excavator.jpg"
                  alt="Sherman 'Naea' Kaopua operating a CAT 303 mini excavator on a Hilo job site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
            </div>
            <div className="rounded-xl border border-(--color-sand-200) bg-(--color-sand-50) p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-500)">By the Numbers</p>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="text-sm text-(--color-ocean-700)/70">Founded</dt>
                  <dd className="font-display font-bold text-(--color-ocean-800)">October 5, 2021</dd>
                </div>
                <div>
                  <dt className="text-sm text-(--color-ocean-700)/70">Insurance</dt>
                  <dd className="font-display font-bold text-(--color-ocean-800)">$2M Liability + crew</dd>
                </div>
                <div>
                  <dt className="text-sm text-(--color-ocean-700)/70">Coverage</dt>
                  <dd className="font-display font-bold text-(--color-ocean-800)">Hawaiʻi Island (all of Hawaiʻi County)</dd>
                </div>
                <div>
                  <dt className="text-sm text-(--color-ocean-700)/70">As Featured On</dt>
                  <dd className="font-display font-bold text-(--color-ocean-800)">HGTV Renovation Aloha · S2 E4</dd>
                </div>
                <div>
                  <dt className="text-sm text-(--color-ocean-700)/70">Hours</dt>
                  <dd className="font-display font-bold text-(--color-ocean-800)">Mon–Sun · 7am–8pm</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 md:py-20 bg-(--color-sand-50) border-y border-(--color-sand-200)">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-500)">Our Promise</p>
            <h2 className="mt-2 font-display font-extrabold text-3xl md:text-4xl text-(--color-ocean-800)">
              Full-Service. Done With ALOHA.
            </h2>
            <p className="mt-5 text-lg text-(--color-ocean-700)/85 leading-relaxed">
              "Our mission is to be the trusted partner our island relies on, combining compassionate service for our <strong>kūpuna</strong> with professional expertise for our builders, so every space we clear paves the way for a stronger, more beautiful community."
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Heart, title: "White-Glove Service", body: "You point, we do the rest. No lifting, no piles, no stress for you." },
              { icon: Shield, title: "Stewardship", body: "We prioritize recycling and donation, treating our ʻāina with respect." },
              { icon: Award, title: "Premium Professionalism", body: "Licensed, insured, and reliable. We show up on time and get the job done right." },
              { icon: MapPin, title: "Local Partnership", body: "We are your neighbors, dedicated to the long-term well-being of our island." },
            ].map((p) => (
              <div key={p.title} className="rounded-xl border border-(--color-sand-200) bg-white p-6">
                <p.icon className="size-7 text-(--color-volcano-500)" />
                <h3 className="mt-4 font-display font-bold text-(--color-ocean-800)">{p.title}</h3>
                <p className="mt-1.5 text-sm text-(--color-ocean-700)/85">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HGTV */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-500)">In the Spotlight</p>
            <h2 className="mt-2 font-display font-extrabold text-3xl md:text-4xl text-(--color-ocean-800)">
              Our Work, On HGTV.
            </h2>
            <p className="mt-5 text-lg text-(--color-ocean-700)/85 leading-relaxed">
              Our commitment to professional, full-service transformation extends beyond our daily jobs. We were honored to bring our demolition and site-clearance expertise to a major Waikoloa Village renovation, featured on HGTV's <em>Renovation Aloha</em> (Season 2, Episode 4). This project showcases the same level of care, precision, and respect for the ʻāina that we bring to every client.
            </p>
            <div className="mt-7">
              <Button asChild variant="outline" size="lg">
                <a href="https://www.hgtv.com/shows/renovation-aloha" target="_blank" rel="noopener noreferrer">
                  Watch the Series <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-(--color-sand-200)">
            <Image
              src="/images/gallery/photo-046.jpg"
              alt="Hawaii Island Waste CAT excavator loading demolition debris into a hauling truck on a Hawaiʻi Island jobsite"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-(--color-ocean-800) text-white">
        <div className="container-x grid md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </section>

      <CTASection title="Your fresh start begins with a conversation." />
    </>
  );
}
