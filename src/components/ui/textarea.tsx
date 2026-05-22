import * as React from "react";
import { cn } from "@/lib/cn";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[120px] w-full rounded-md border border-(--color-sand-300) bg-white px-3 py-2 text-base",
      "placeholder:text-(--color-ocean-700)/40 focus-visible:border-(--color-ocean-500) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-volcano-400)/30",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
