import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, MessageSquare } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero, CTASection } from "@/components/site/sections";
import { QuoteCTA } from "@/components/site/quote-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Free Quotes Mon–Sun, 7am–8pm",
  description:
    "Get in touch with Hawaii Island Waste. Call, text, email or send a photo for a free quote. Mon–Sun 7am–8pm. 808-300-9766.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's clear your space."
        subtitle="Call, text, email, or send a photo. Our local team is here to help — Mon–Sun, 7am–8pm."
        primaryCta={{ label: "Call Now", href: `tel:${site.phoneE164}` }}
        secondaryCta={{ label: "Send Email", href: `mailto:${site.email}` }}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-display font-extrabold text-xl text-(--color-ocean-800)">
                  Get in touch
                </h2>
                <div className="mt-5 space-y-4 text-(--color-ocean-700)">
                  <a href={`tel:${site.phoneE164}`} className="flex items-start gap-3 hover:text-(--color-volcano-500) transition-colors">
                    <Phone className="size-5 text-(--color-volcano-500) mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-(--color-ocean-700)/65">Phone</p>
                      <p className="font-bold text-(--color-ocean-800)">{site.phone}</p>
                    </div>
                  </a>
                  <a href={`sms:${site.sms}`} className="flex items-start gap-3 hover:text-(--color-volcano-500) transition-colors">
                    <MessageSquare className="size-5 text-(--color-volcano-500) mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-(--color-ocean-700)/65">Text (photos welcome)</p>
                      <p className="font-bold text-(--color-ocean-800)">{site.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-(--color-volcano-500) transition-colors">
                    <Mail className="size-5 text-(--color-volcano-500) mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-(--color-ocean-700)/65">Email</p>
                      <p className="font-bold text-(--color-ocean-800)">{site.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-(--color-volcano-500) mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-(--color-ocean-700)/65">Location</p>
                      <p className="font-bold text-(--color-ocean-800)">Hilo, HI</p>
                      <p className="text-sm text-(--color-ocean-700)/75">Proudly serving all of Hawaiʻi Island</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="size-5 text-(--color-volcano-500) mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-(--color-ocean-700)/65">Hours</p>
                      <p className="font-bold text-(--color-ocean-800)">{site.hoursLine}</p>
                    </div>
                  </div>
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-(--color-volcano-500) transition-colors">
                    <InstagramIcon className="size-5 text-(--color-volcano-500) mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-(--color-ocean-700)/65">Instagram</p>
                      <p className="font-bold text-(--color-ocean-800)">{site.social.instagramHandle}</p>
                    </div>
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button asChild size="md">
                    <a href={`tel:${site.phoneE164}`}><Phone className="size-4" /> Call</a>
                  </Button>
                  <Button asChild size="md" variant="outline">
                    <a href={`sms:${site.sms}`}><MessageSquare className="size-4" /> Text</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card>
              <CardContent className="p-6 md:p-8">
                <QuoteCTA />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
