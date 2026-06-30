import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          Call or text us — we usually respond same day, Mon–Sun 7am–8pm.
        </p>
      </div>

      <div className={`grid gap-3 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
        <Button asChild size="lg">
          <a href={`tel:${site.phoneE164}`}>
            <Phone className="size-4" /> Call {site.phone}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={`sms:${site.sms}`}>
            <MessageSquare className="size-4" /> Text {site.phone}
          </a>
        </Button>
      </div>

      <p className="text-xs text-(--color-ocean-700)/60">
        Have photos? Text them along — fastest way to get a quote.
      </p>
    </div>
  );
}
