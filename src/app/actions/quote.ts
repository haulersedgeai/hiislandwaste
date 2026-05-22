"use server";

import { Resend } from "resend";
import fs from "node:fs/promises";
import path from "node:path";

export interface QuoteFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

const ALLOWED_CITIES = [
  "Hilo", "Kaumana", "Keaʻau", "Pāhoa", "Hawaiian Paradise Park", "Orchidland",
  "Ainaloa", "Hawaiian Acres", "Kurtistown", "Mountain View", "Volcano",
  "Papaʻikou", "Pepeʻekeo", "Honomū", "Hakalau", "Laupāhoehoe",
  "Honokaʻa", "Paʻauilo", "Waimea / Kamuela", "Hāwī", "Kapaʻau",
  "Kailua-Kona", "Holualoa", "Kealakekua", "Captain Cook", "Hōnaunau",
  "Keauhou", "Waikoloa Village", "Waikoloa Beach Resort", "Puakō / Hāpuna",
  "Nāʻālehu", "Ocean View / HOVE", "Pāhala", "Other",
];

const ALLOWED_SERVICES = [
  "Residential Junk Removal", "Demolition", "Dumpster Rental", "Estate Cleanout",
  "Furniture Removal", "Appliance Removal", "Mattress Removal", "TV / Electronics (E-Waste)",
  "Hot Tub Removal", "Shed Demolition", "Deck Demolition", "Fence Removal",
  "Interior Demolition", "Hoarder Cleanout", "Garage Cleanout", "Construction Debris",
  "Yard / Green Waste", "Property Cleanout (Realtor)", "Commercial / Office",
  "Other / Not Sure",
];

function sanitize(input: FormDataEntryValue | null, max = 500): string {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, max);
}

export async function submitQuote(
  _prev: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  const honeypot = sanitize(formData.get("company_url"));
  if (honeypot) {
    return { status: "success", message: "Thanks — we'll be in touch." };
  }

  const name = sanitize(formData.get("name"), 120);
  const phone = sanitize(formData.get("phone"), 40);
  const email = sanitize(formData.get("email"), 200);
  const address = sanitize(formData.get("address"), 240);
  const cityRaw = sanitize(formData.get("city"), 80);
  const serviceRaw = sanitize(formData.get("service"), 80);
  const description = sanitize(formData.get("description"), 4000);
  const preferredDate = sanitize(formData.get("preferredDate"), 40);

  if (!name || !phone || !description) {
    return { status: "error", message: "Please share your name, phone, and a brief description so we can help." };
  }
  if (!/^[\d().+\-\s]{7,}$/.test(phone)) {
    return { status: "error", message: "That phone number doesn't look right — please double-check." };
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That email doesn't look right — please double-check." };
  }

  const city = ALLOWED_CITIES.includes(cityRaw) ? cityRaw : (cityRaw || "Not specified");
  const service = ALLOWED_SERVICES.includes(serviceRaw) ? serviceRaw : (serviceRaw || "Not specified");

  const submittedAt = new Date().toISOString();
  const subject = `New Quote Request — ${service} (${city}) — ${name}`;

  const html = `
    <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; color:#0b1f41; line-height:1.5;">
      <h2 style="color:#144577;">New Quote Request</h2>
      <table style="border-collapse:collapse; width:100%; max-width:640px;">
        <tr><td style="padding:6px 10px; background:#f4ede6; font-weight:600; width:140px;">Name</td><td style="padding:6px 10px;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 10px; background:#f4ede6; font-weight:600;">Phone</td><td style="padding:6px 10px;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
        <tr><td style="padding:6px 10px; background:#f4ede6; font-weight:600;">Email</td><td style="padding:6px 10px;">${escapeHtml(email || "—")}</td></tr>
        <tr><td style="padding:6px 10px; background:#f4ede6; font-weight:600;">Service Address</td><td style="padding:6px 10px;">${escapeHtml(address || "—")}</td></tr>
        <tr><td style="padding:6px 10px; background:#f4ede6; font-weight:600;">City / Town</td><td style="padding:6px 10px;">${escapeHtml(city)}</td></tr>
        <tr><td style="padding:6px 10px; background:#f4ede6; font-weight:600;">Service Needed</td><td style="padding:6px 10px;">${escapeHtml(service)}</td></tr>
        <tr><td style="padding:6px 10px; background:#f4ede6; font-weight:600;">Preferred Date</td><td style="padding:6px 10px;">${escapeHtml(preferredDate || "Anytime / flexible")}</td></tr>
      </table>
      <h3 style="color:#144577; margin-top:18px;">Project Description</h3>
      <p style="white-space:pre-wrap; padding:10px; background:#f4ede6; border-radius:6px;">${escapeHtml(description)}</p>
      <p style="color:#666; font-size:12px; margin-top:24px;">
        Submitted ${submittedAt} via hiislandwaste.com
      </p>
    </div>
  `;

  const text = [
    `New Quote Request`,
    ``,
    `Name:            ${name}`,
    `Phone:           ${phone}`,
    `Email:           ${email || "—"}`,
    `Service Address: ${address || "—"}`,
    `City / Town:     ${city}`,
    `Service Needed:  ${service}`,
    `Preferred Date:  ${preferredDate || "Anytime / flexible"}`,
    ``,
    `Description:`,
    description,
    ``,
    `Submitted ${submittedAt}`,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL ?? "hijunkremoval@gmail.com";
  const from = process.env.QUOTE_FROM_EMAIL ?? "onboarding@resend.dev";

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: `Hawaii Island Waste Quotes <${from}>`,
        to: [to],
        replyTo: email || undefined,
        subject,
        html,
        text,
      });
      if (error) throw new Error(typeof error === "string" ? error : JSON.stringify(error));
    } catch (e) {
      console.error("[quote] resend error:", e);
      return { status: "error", message: "We hit a snag sending your quote. Please call us at 808-300-9766 — we'd love to help right away." };
    }
  } else {
    try {
      const dir = "/tmp/quotes";
      await fs.mkdir(dir, { recursive: true });
      const fname = path.join(dir, `quote-${Date.now()}.json`);
      await fs.writeFile(
        fname,
        JSON.stringify({ submittedAt, name, phone, email, address, city, service, preferredDate, description }, null, 2)
      );
      console.log(`[quote] saved to ${fname} (RESEND_API_KEY not set)`);
    } catch (e) {
      console.error("[quote] fs fallback error:", e);
    }
  }

  return { status: "success", message: "Mahalo — your request is in. We'll reach out shortly." };
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
