import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CTASection } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Gallery — Real Hawaiʻi Island Cleanouts, Demolitions & Hauls",
  description:
    "Real photos of real jobs across Hawaiʻi Island — junk removal, estate cleanouts, demolitions, and before-and-after transformations.",
  alternates: { canonical: "/gallery" },
};

const GALLERY = [
  "photo-003.jpg", "photo-005.jpg", "photo-006.jpg", "photo-008.jpg", "photo-011.jpg",
  "photo-015.jpg", "photo-016.jpg", "photo-017.jpg", "photo-018.jpg", "photo-019.jpg",
  "photo-020.jpg", "photo-022.jpg", "photo-024.jpg", "photo-029.jpg", "photo-032.jpg",
  "photo-034.jpg", "photo-035.jpg", "photo-036.jpg", "photo-037.jpg", "photo-038.jpg",
  "photo-040.jpg", "photo-041.jpg", "photo-043.jpg", "photo-044.jpg", "photo-045.jpg",
  "photo-046.jpg", "photo-048.jpg", "photo-053.jpg", "photo-054.jpg", "photo-057.jpg",
  "photo-058.jpg", "photo-059.jpg", "photo-060.jpg",
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
            {GALLERY.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square rounded-lg overflow-hidden border border-(--color-sand-200) bg-(--color-sand-100) group"
              >
                <Image
                  src={`/images/gallery/${src}`}
                  alt={`Hawaii Island Waste project photo ${i + 1}`}
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
