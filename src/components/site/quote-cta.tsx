import { QuoteForm } from "@/components/site/quote-form";
import { site } from "@/lib/site";

export function QuoteCTA({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-4">
      <div>
        <h3
          className={`font-display font-extrabold text-(--color-ocean-800) ${
            compact ? "text-xl" : "text-2xl"
          }`}
        >
          Get a Fast, Free Quote
        </h3>
        <p className="mt-1.5 text-(--color-ocean-700)/80">
          Tell us about your project — we usually respond same day, Mon–Sun 7am–8pm.
        </p>
      </div>

      <QuoteForm compact={compact} />

      <p className="text-xs text-(--color-ocean-700)/60">
        Prefer to <a href={`tel:${site.phoneE164}`} className="font-semibold text-(--color-volcano-500) hover:underline">call</a> or <a href={`sms:${site.sms}`} className="font-semibold text-(--color-volcano-500) hover:underline">text</a>? Text us photos for the fastest quote.
      </p>
    </div>
  );
}
