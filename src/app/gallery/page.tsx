import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CTASection } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Gallery — Real Hawaiʻi Island Cleanouts, Demolitions & Hauls",
  description:
    "Real photos of real jobs across Hawaiʻi Island — junk removal, estate cleanouts, demolitions, and before-and-after transformations.",
  alternates: { canonical: "/gallery" },
};

type GalleryItem = { src: string; alt: string };

const GALLERY: GalleryItem[] = [
  // Real before/after pairs (lead with the storytelling photos)
  { src: "/images/before-after/shed-overgrown-before.jpg", alt: "Overgrown Hilo property with rusted shed and scattered debris before Hawaii Island Waste cleanout" },
  { src: "/images/before-after/shed-cleared-after.jpg", alt: "Same Hilo property after Hawaii Island Waste cleared the brush and debris, exposing the shed and graded ground" },
  { src: "/images/before-after/yard-tarp-debris-before.jpg", alt: "Yard piled with construction debris under a green tarp before Hawaii Island Waste cleanup" },
  { src: "/images/before-after/yard-tarp-debris-after.jpg", alt: "Same yard cleared of debris by Hawaii Island Waste, ground exposed under the tarp" },
  { src: "/images/before-after/yard-driveway-cleared.jpg", alt: "Cleared driveway and landscaped yard after a Hawaii Island Waste cleanout, palms and concrete drive visible" },
  { src: "/images/before-after/room-cleanout-split.jpg", alt: "Before/after split image — room cluttered with boxes and debris cleared to a bright empty space by Hawaii Island Waste" },
  { src: "/images/before-after/patio-cleanup-before.jpg", alt: "Hilo backyard patio with bagged debris and brush piled around the table before cleanout" },
  { src: "/images/before-after/lanai-cleared-after.jpg", alt: "Cleared Hawaiian lanai interior after Hawaii Island Waste cleanout — bright, empty, ready" },
  { src: "/images/before-after/shed-debris-before.jpg", alt: "Property mid-clearing with heavy debris and brush still on the ground" },

  // Crew & equipment action shots
  { src: "/images/services/demolition-fence-crew.jpg", alt: "Hawaii Island Waste crew carrying out a chain-link fence panel during a demolition job" },
  { src: "/images/services/hiw-truck-detail.jpg", alt: "Close-up of the Hawaii Island Waste branded Ram 2500 truck — junk removal & demolition" },
  { src: "/images/about/naea-excavator.jpg", alt: "Naea Kaopua operating a CAT 303 mini excavator on a Hilo residential job" },
  { src: "/images/about/naea-with-customer.jpg", alt: "Naea Kaopua reviewing a job estimate with a customer in his Hawaii Island Waste long-sleeve" },
  { src: "/images/about/naea-truck.jpg", alt: "Naea Kaopua walking with the Hawaii Island Waste truck at a residential cleanout" },

  // Existing gallery photos (kept) with descriptive alt where possible
  { src: "/images/gallery/photo-003.jpg", alt: "Pile of household items and electronics staged for Hawaii Island Waste pickup at a Hilo carport" },
  { src: "/images/gallery/photo-005.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-006.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-008.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-011.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-015.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-016.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-017.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-018.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-019.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-020.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-022.jpg", alt: "Hawaii Island Waste crew at work on a Hilo cleanout" },
  { src: "/images/gallery/photo-024.jpg", alt: "Hawaii Island Waste demolition project in progress" },
  { src: "/images/gallery/photo-029.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-032.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-036.jpg", alt: "Hawaii Island Waste excavator clearing debris on a Hilo property" },
  { src: "/images/gallery/photo-037.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-038.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-040.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-041.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-044.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-046.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-053.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-054.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-057.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-058.jpg", alt: "Hawaii Island Waste cleanout in progress" },
  { src: "/images/gallery/photo-060.jpg", alt: "Hawaii Island Waste cleanout in progress" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real jobs. Real island. Real ʻOhana."
        subtitle="From garages-turned-back-into-garages to before-and-after demos, here's a look at what the HIW crew has been up to."
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {GALLERY.map((item, i) => (
              <div
                key={item.src}
                className="relative aspect-square rounded-lg overflow-hidden border border-(--color-sand-200) bg-(--color-sand-100) group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={i < 8 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-(--color-ocean-700)/70">
            Follow{" "}
            <a href="https://instagram.com/hiislandwaste" className="font-bold text-(--color-volcano-500) hover:underline" target="_blank" rel="noopener noreferrer">
              @hiislandwaste
            </a>{" "}
            on Instagram for new before-and-afters every week.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
