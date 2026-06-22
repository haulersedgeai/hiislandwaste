"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// ────────────────────────────────────────────────────────────────────
// TODO(JUSTIN) — REPLACE BEFORE GOING LIVE.
// The client's reference snippet had company_name=Pack_Mule_Dumpsters,
// which is a Bin Boss template leftover, NOT Hawaii Island Waste.
// Confirm HIW's real Bin Boss storefront slug with the client and
// replace the placeholder below. Until this is updated, the modal will
// open the wrong storefront.
// ────────────────────────────────────────────────────────────────────
const BINBOSS_URL =
  "https://app.mybinboss.com/storefront/?company_name=Hawaii_Island_Waste"; // TODO(JUSTIN): confirm real HIW slug

// Button text tokens that should open the modal. Match is case-insensitive
// and whitespace-normalized.
const TRIGGER_TOKENS = [
  "SCHEDULE NOW",
  "BOOK A RENTAL TODAY!",
  "ORDER ONLINE",
  "BOOK NOW",
  "RENT A DUMPSTER",
];

const NORMALIZED_TOKENS = new Set(TRIGGER_TOKENS.map(normalize));
const BOUND_ATTR = "data-binboss-bound";

function normalize(s: string): string {
  return s.replace(/\s+/g, " ").trim().toUpperCase();
}

export default function BinBossModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  // Wire up CTA buttons on every route change. Guard with a data-attribute
  // so we don't double-bind on re-renders.
  useEffect(() => {
    function bindButtons() {
      const candidates = document.querySelectorAll<HTMLElement>(
        "button, a, [role='button']"
      );
      candidates.forEach((el) => {
        if (el.hasAttribute(BOUND_ATTR)) return;
        const text = normalize(el.textContent || "");
        if (!text) return;
        if (!NORMALIZED_TOKENS.has(text)) return;
        el.setAttribute(BOUND_ATTR, "true");
        el.addEventListener("click", (e) => {
          e.preventDefault();
          handleOpen();
        });
      });
    }

    // Initial bind + a microtask retry to catch late-mounted content.
    bindButtons();
    const t = window.setTimeout(bindButtons, 50);
    return () => window.clearTimeout(t);
  }, [pathname, handleOpen]);

  // Scroll lock + ESC to close
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, handleClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a dumpster rental"
      className="fixed inset-0 z-[1000] flex items-stretch md:items-center md:justify-center bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full h-full md:h-[80vh] md:max-h-[800px] md:w-[80vw] md:max-w-[1100px] md:rounded-2xl overflow-hidden bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-(--color-sand-200) bg-white">
          <div className="font-display font-bold text-(--color-ocean-800)">
            Book a Dumpster
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleClose}
            aria-label="Close booking window"
            className="inline-flex items-center justify-center size-9 rounded-full text-(--color-ocean-700) hover:bg-(--color-sand-100) focus-visible:outline-2 focus-visible:outline-(--color-volcano-500)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <iframe
          src={BINBOSS_URL}
          title="Bin Boss storefront"
          className="flex-1 w-full border-0"
          allow="payment *; clipboard-write"
        />
      </div>
    </div>
  );
}
