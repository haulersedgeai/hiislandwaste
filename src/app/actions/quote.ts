"use server";

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

  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) {
    console.error("[quote] WEB3FORMS_KEY not set");
    return { status: "error", message: "We hit a snag sending your quote. Please call us at 808-300-9766 — we'd love to help right away." };
  }

  const payload = {
    access_key: accessKey,
    subject: `New Quote Request — ${service} (${city}) — ${name}`,
    from_name: "Hawaii Island Waste Quotes",
    replyto: email || undefined,
    name,
    phone,
    email: email || "—",
    service,
    city,
    address: address || "—",
    preferred_date: preferredDate || "Anytime / flexible",
    message: description,
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!data.success) {
      console.error("[quote] web3forms error:", data);
      return { status: "error", message: "We hit a snag sending your quote. Please call us at 808-300-9766 — we'd love to help right away." };
    }
  } catch (e) {
    console.error("[quote] web3forms fetch error:", e);
    return { status: "error", message: "We hit a snag sending your quote. Please call us at 808-300-9766 — we'd love to help right away." };
  }

  return { status: "success", message: "Mahalo — your request is in. We'll reach out shortly." };
}
