import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { StickyMobileCTA } from "@/components/site/sticky-cta";
import { JsonLd } from "@/components/schema/JsonLd";
import { localBusinessSchema, SITE_URL } from "@/lib/schema";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Junk Removal, Demolition & Dumpsters on Hawaiʻi Island`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "junk removal Hilo",
    "junk removal Big Island",
    "demolition Hilo",
    "dumpster rental Hilo",
    "estate cleanout Hawaii",
    "hot tub removal",
    "shed demolition",
    "hoarder cleanout Big Island",
    "Hawaii Island Waste",
    "Hawaiʻi Island junk removal",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: SITE_URL,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-(--color-ocean-800)">
        <JsonLd id="ld-localbusiness" data={localBusinessSchema()} />
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
