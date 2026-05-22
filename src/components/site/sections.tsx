import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Star, Shield, Award, MapPin, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import type { Service } from "@/content/services";
import type { Location } from "@/content/locations";
import type { Testimonial } from "@/content/testimonials";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { label: "Get A Free Quote", href: "/get-a-quote" },
  secondaryCta = { label: `Call ${site.phone}`, href: `tel:${site.phoneE164}` },
  imageSrc,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-(--color-ocean-800) text-white">
      {imageSrc ? (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-(--color-ocean-900)/95 via-(--color-ocean-800)/85 to-(--color-ocean-800)/40" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,98,37,0.18),transparent_60%)]" />
      )}
      <div className="relative container-x py-16 md:py-24 max-w-5xl">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-(--color-volcano-400)/15 border border-(--color-volcano-300)/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-(--color-volcano-200)">
            <MapPin className="size-3.5" /> {eyebrow}
          </div>
        )}
        <h1 className="mt-4 font-display font-extrabold leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="xl">
            <Link href={primaryCta.href}>{primaryCta.label} <ArrowRight className="size-4" /></Link>
          </Button>
          <Button asChild size="xl" variant="outlineLight">
            <a href={secondaryCta.href}>
              <Phone className="size-4" /> {secondaryCta.label}
            </a>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/75">
          <span className="inline-flex items-center gap-1.5"><Shield className="size-4 text-(--color-volcano-300)" /> $2M Insured</span>
          <span className="inline-flex items-center gap-1.5"><Award className="size-4 text-(--color-volcano-300)" /> Featured on HGTV</span>
          <span className="inline-flex items-center gap-1.5"><Star className="size-4 text-(--color-volcano-300)" /> Locally Owned</span>
        </div>
      </div>
    </section>
  );
}

export function CTASection({
  title = "Ready to reclaim your space?",
  body = "Your fresh start begins with a conversation. Free, no-obligation quote in minutes.",
  primaryHref = "/get-a-quote",
  primaryLabel = "Get A Free Quote",
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-(--color-sand-100) py-16 md:py-20">
      <div className="container-x text-center max-w-3xl">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-(--color-ocean-800) tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-(--color-ocean-700)/85 leading-relaxed">{body}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button asChild size="xl">
            <Link href={primaryHref}>{primaryLabel} <ArrowRight className="size-4" /></Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <a href={`tel:${site.phoneE164}`}>
              <Phone className="size-4" /> {site.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--color-volcano-500)">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display font-extrabold text-3xl md:text-4xl text-(--color-ocean-800) tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-(--color-ocean-700)/80 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="flex h-full flex-col hover:border-(--color-volcano-300) transition-colors">
      <div className="p-6 flex-1">
        <CardTitle>{service.title}</CardTitle>
        <CardDescription className="mt-2">{service.shortDescription}</CardDescription>
      </div>
      <div className="p-6 pt-0">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-(--color-volcano-500) hover:text-(--color-volcano-600)"
        >
          Learn more <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </Card>
  );
}

export function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/service-area/${location.slug}`}
      className="group block rounded-lg border border-(--color-sand-200) bg-white p-4 hover:border-(--color-volcano-300) hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="font-display font-bold text-(--color-ocean-800) group-hover:text-(--color-volcano-500) transition-colors">
          {location.name}
        </div>
        <ArrowRight className="size-4 text-(--color-ocean-500) group-hover:translate-x-0.5 transition-transform" />
      </div>
      {location.neighborhoods.length > 0 && (
        <p className="mt-1 text-xs text-(--color-ocean-700)/65 line-clamp-1">
          {location.neighborhoods.slice(0, 3).join(" · ")}
        </p>
      )}
    </Link>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full bg-white">
      <CardContent className="pt-6">
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-(--color-volcano-400) text-(--color-volcano-400)" />
          ))}
        </div>
        <Quote className="size-5 text-(--color-sand-400) mb-2" />
        <p className="font-display font-bold text-lg text-(--color-ocean-800) leading-snug">
          "{testimonial.shortQuote}"
        </p>
        <p className="mt-3 text-(--color-ocean-700)/80 leading-relaxed text-sm">
          {testimonial.quote}
        </p>
        <div className="mt-4 pt-4 border-t border-(--color-sand-200)">
          <p className="font-bold text-(--color-ocean-800) text-sm">{testimonial.name}</p>
          <p className="text-xs text-(--color-ocean-700)/70">{testimonial.location}{testimonial.service ? ` · ${testimonial.service}` : ""}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-(--color-sand-200) bg-(--color-sand-50)">
      <div className="container-x py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <Shield className="size-6 mx-auto text-(--color-volcano-500)" />
          <p className="mt-2 text-sm font-bold text-(--color-ocean-800)">$2M Insured</p>
          <p className="text-xs text-(--color-ocean-700)/70">Liability + crew</p>
        </div>
        <div>
          <Award className="size-6 mx-auto text-(--color-volcano-500)" />
          <p className="mt-2 text-sm font-bold text-(--color-ocean-800)">Featured on HGTV</p>
          <p className="text-xs text-(--color-ocean-700)/70">Renovation Aloha S2 E4</p>
        </div>
        <div>
          <Star className="size-6 mx-auto text-(--color-volcano-500)" />
          <p className="mt-2 text-sm font-bold text-(--color-ocean-800)">5-Star Service</p>
          <p className="text-xs text-(--color-ocean-700)/70">Real reviews from our 'ohana</p>
        </div>
        <div>
          <MapPin className="size-6 mx-auto text-(--color-volcano-500)" />
          <p className="mt-2 text-sm font-bold text-(--color-ocean-800)">Born & Raised Here</p>
          <p className="text-xs text-(--color-ocean-700)/70">Locally owned since 2021</p>
        </div>
      </div>
    </section>
  );
}
