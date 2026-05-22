import * as React from "react";
import { cn } from "@/lib/cn";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-md border border-(--color-sand-300) bg-white px-3 py-2 text-base",
      "placeholder:text-(--color-ocean-700)/40 focus-visible:border-(--color-ocean-500) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-volcano-400)/30",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
