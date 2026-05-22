"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm border-b border-(--color-sand-200)"
          : "bg-white border-b border-transparent"
      )}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Hawaii Island Waste"
            width={48}
            height={48}
            priority
            className="size-10 md:size-12 rounded-full"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-(--color-ocean-800) text-base md:text-lg tracking-tight">
              Hawaii Island Waste
            </span>
            <span className="hidden md:inline text-[11px] text-(--color-ocean-700)/70 font-medium tracking-wide uppercase">
              Junk Removal · Demolition · Dumpsters
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-semibold text-(--color-ocean-800) hover:text-(--color-volcano-500) transition-colors rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneE164}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-(--color-ocean-800) hover:text-(--color-volcano-500) transition-colors"
          >
            <Phone className="size-4" />
            <span>{site.phone}</span>
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/get-a-quote">Get A Quote</Link>
          </Button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex size-10 items-center justify-center rounded-md text-(--color-ocean-800) hover:bg-(--color-sand-100)"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 z-40 bg-white overflow-y-auto">
          <div className="container-x py-6">
            <nav className="flex flex-col">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-(--color-sand-200) py-4 text-lg font-semibold text-(--color-ocean-800)"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="border-b border-(--color-sand-200) py-4 text-lg font-semibold text-(--color-ocean-800)"
              >
                About
              </Link>
              <Link
                href="/faq"
                onClick={() => setOpen(false)}
                className="border-b border-(--color-sand-200) py-4 text-lg font-semibold text-(--color-ocean-800)"
              >
                FAQ
              </Link>
              <Link
                href="/reviews"
                onClick={() => setOpen(false)}
                className="border-b border-(--color-sand-200) py-4 text-lg font-semibold text-(--color-ocean-800)"
              >
                Reviews
              </Link>
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild size="lg" className="w-full">
                <Link href="/get-a-quote" onClick={() => setOpen(false)}>Get A Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <a href={`tel:${site.phoneE164}`}>Call {site.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
