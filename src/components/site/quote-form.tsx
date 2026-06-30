// TEMP: parked — not rendered anywhere; restore when transactional email (Resend) is set up.
"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteFormState } from "@/app/actions/quote";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const initialState: QuoteFormState = { status: "idle" };

const CITY_OPTIONS = [
  "Hilo", "Kaumana", "Keaʻau", "Pāhoa", "Hawaiian Paradise Park", "Orchidland",
  "Ainaloa", "Hawaiian Acres", "Kurtistown", "Mountain View", "Volcano",
  "Papaʻikou", "Pepeʻekeo", "Honomū", "Hakalau", "Laupāhoehoe",
  "Honokaʻa", "Paʻauilo", "Waimea / Kamuela", "Hāwī", "Kapaʻau",
  "Kailua-Kona", "Holualoa", "Kealakekua", "Captain Cook", "Hōnaunau",
  "Keauhou", "Waikoloa Village", "Waikoloa Beach Resort", "Puakō / Hāpuna",
  "Nāʻālehu", "Ocean View / HOVE", "Pāhala", "Other",
];

const SERVICE_OPTIONS = [
  "Residential Junk Removal", "Demolition", "Dumpster Rental", "Estate Cleanout",
  "Furniture Removal", "Appliance Removal", "Mattress Removal", "TV / Electronics (E-Waste)",
  "Hot Tub Removal", "Shed Demolition", "Deck Demolition", "Fence Removal",
  "Interior Demolition", "Hoarder Cleanout", "Garage Cleanout", "Construction Debris",
  "Yard / Green Waste", "Property Cleanout (Realtor)", "Commercial / Office",
  "Other / Not Sure",
];

export function QuoteForm({
  defaultService,
  defaultCity,
  compact = false,
}: {
  defaultService?: string;
  defaultCity?: string;
  compact?: boolean;
}) {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-(--color-forest-300)/50 bg-(--color-forest-50)/40 p-6 md:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="size-7 text-(--color-forest-500) shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xl font-bold text-(--color-ocean-800)">Mahalo!</h3>
            <p className="mt-1 text-(--color-ocean-700)">{state.message}</p>
            <p className="mt-3 text-sm text-(--color-ocean-700)/80">
              Need help right now? Call us anytime 7am–8pm at{" "}
              <a href="tel:+18083009766" className="font-semibold text-(--color-volcano-500) hover:underline">
                808-300-9766
              </a>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] opacity-0"
        aria-hidden="true"
      />

      <div className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
        <div>
          <Label htmlFor="name">Your name *</Label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Full name" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" required type="tel" autoComplete="tel" placeholder="808-555-1234" className="mt-1.5" />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
        <div>
          <Label htmlFor="email">Email (optional)</Label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="preferredDate">Preferred date (optional)</Label>
          <Input id="preferredDate" name="preferredDate" type="text" placeholder="Anytime / a specific week" className="mt-1.5" />
        </div>
      </div>

      <div>
        <Label htmlFor="address">Service address (optional)</Label>
        <Input id="address" name="address" autoComplete="street-address" placeholder="Street address — we'll keep it private" className="mt-1.5" />
      </div>

      <div className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
        <div>
          <Label htmlFor="city">City / town *</Label>
          <Select id="city" name="city" required defaultValue={defaultCity ?? ""} className="mt-1.5">
            <option value="" disabled>Choose your area</option>
            {CITY_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="service">Service needed *</Label>
          <Select id="service" name="service" required defaultValue={defaultService ?? ""} className="mt-1.5">
            <option value="" disabled>What can we help with?</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="description">Tell us about the project *</Label>
        <Textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Briefly describe what needs to go, how much, and any access notes (stairs, gates, etc.). Photos? Text 808-300-9766."
          className="mt-1.5"
        />
        <p className="mt-1.5 text-xs text-(--color-ocean-700)/60">
          Have photos? Text them to 808-300-9766 for the fastest quote.
        </p>
      </div>

      {state.status === "error" && (
        <div className="rounded-md border border-(--color-volcano-300) bg-(--color-volcano-50) p-4 flex items-start gap-2 text-sm text-(--color-volcano-700)">
          <AlertTriangle className="size-5 shrink-0 mt-0.5" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <Button type="submit" size="lg" disabled={pending} className="sm:w-auto">
          {pending ? "Sending…" : "Get My Free Quote"}
        </Button>
        <p className="text-sm text-(--color-ocean-700)/70">
          Or call <a href="tel:+18083009766" className="font-semibold text-(--color-volcano-500) hover:underline">808-300-9766</a> · Mon–Sun 7am–8pm
        </p>
      </div>
    </form>
  );
}
