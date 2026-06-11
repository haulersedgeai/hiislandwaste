import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-(--color-ocean-800) text-white">
      <div className="container-x py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Hawaii Island Waste"
              width={48}
              height={48}
              className="size-12 rounded-full bg-white p-0.5"
            />
            <span className="font-display font-extrabold text-xl">Hawaii Island Waste</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Your trusted partner for junk removal, demolition, dumpster rentals
            and estate cleanouts across Hawaiʻi Island — from Hilo and Puna to
            Kona and Kaʻū. Locally owned, fully insured, handled with aloha.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={`tel:${site.phoneE164}`} className="flex items-center gap-2 hover:text-(--color-volcano-300) transition-colors">
              <Phone className="size-4" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-(--color-volcano-300) transition-colors">
              <Mail className="size-4" /> {site.email}
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="size-4" /> {site.hq.locality}, {site.hq.region} {site.hq.postalCode}
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="size-4" /> {site.hoursLine}
            </div>
            <a
              href={site.social.instagram}
              className="flex items-center gap-2 hover:text-(--color-volcano-300) transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="size-4" /> {site.social.instagramHandle}
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display font-bold text-sm uppercase tracking-wide text-(--color-volcano-300)">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.services.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-white/80 hover:text-white">All Services →</Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display font-bold text-sm uppercase tracking-wide text-(--color-volcano-300)">Who We Serve</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.segments.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display font-bold text-sm uppercase tracking-wide text-(--color-volcano-300)">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display font-bold text-sm uppercase tracking-wide text-(--color-volcano-300)">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.resources.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/get-a-quote" className="text-white/80 hover:text-white">Get A Quote</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-white/80 hover:text-white">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
            <p className="text-white/45">
              Site by <a href="https://adimize.com" target="_blank" rel="noopener" className="hover:text-white/70 transition-colors">adimize.com</a>
            </p>
          </div>
          <p>Locally owned · Licensed · $2M insured · DOT compliant · Founded 2021</p>
        </div>
      </div>
    </footer>
  );
}
