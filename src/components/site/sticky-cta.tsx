import Link from "next/link";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { site } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-(--color-sand-200) bg-white shadow-[0_-4px_12px_rgba(11,31,65,0.08)]"
      role="region"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-3 divide-x divide-(--color-sand-200)">
        <a
          href={`tel:${site.phoneE164}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-(--color-ocean-800) font-semibold text-xs hover:bg-(--color-sand-50)"
        >
          <Phone className="size-5 text-(--color-volcano-500)" />
          Call
        </a>
        <a
          href={`sms:${site.sms}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-(--color-ocean-800) font-semibold text-xs hover:bg-(--color-sand-50)"
        >
          <MessageSquare className="size-5 text-(--color-volcano-500)" />
          Text
        </a>
        <Link
          href="/get-a-quote"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white bg-(--color-volcano-400) font-semibold text-xs hover:bg-(--color-volcano-500)"
        >
          <FileText className="size-5" />
          Quote
        </Link>
      </div>
    </div>
  );
}
