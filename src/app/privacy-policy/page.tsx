import type { Metadata } from "next";
import { PageHero } from "@/components/site/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hawaii Island Waste collects, uses, and protects the information you share with us.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we treat the information you share with us."
        primaryCta={{ label: "Get A Free Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: `Call ${site.phone}`, href: `tel:${site.phoneE164}` }}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container-x max-w-3xl space-y-5 text-(--color-ocean-700)/90 leading-relaxed">
          <p className="text-sm text-(--color-ocean-700)/70">Last updated: 2026</p>

          <h2 className="font-display font-extrabold text-2xl text-(--color-ocean-800) mt-6">Who we are</h2>
          <p>
            This site is operated by {site.legalName} ("we", "us"), located in {site.hq.locality}, {site.hq.region}. You can reach us at {site.phone} or {site.email}.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-(--color-ocean-800) mt-6">What we collect</h2>
          <p>
            When you submit our quote form or contact us, we collect the contact and project information you give us — typically your name, phone number, email, service address, city, the kind of service you need, and a description of the project. We also collect basic analytics (page views, device type) to understand how the site is used.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-(--color-ocean-800) mt-6">How we use it</h2>
          <p>
            We use your information to respond to your request, quote your project, schedule service, and follow up. We do not sell your information. We do not share it with third parties for marketing.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-(--color-ocean-800) mt-6">How we store it</h2>
          <p>
            Quote submissions are processed by our form-submission provider (Web3Forms, which delivers via AWS) and stored in our standard business email. We retain them only as long as needed to serve you and meet basic business record-keeping requirements.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-(--color-ocean-800) mt-6">Cookies</h2>
          <p>
            We use essential cookies to make the site work and may use basic analytics cookies to understand site usage. We do not use third-party advertising trackers.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-(--color-ocean-800) mt-6">Your choices</h2>
          <p>
            You can ask us to delete the information you've shared with us at any time by emailing {site.email}. If you submitted a quote request and we've already followed up, we'll keep a basic record for our books but won't use it for further outreach.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-(--color-ocean-800) mt-6">Updates</h2>
          <p>
            We may update this policy from time to time. The "Last updated" date at the top will change when we do.
          </p>
        </div>
      </section>
    </>
  );
}
