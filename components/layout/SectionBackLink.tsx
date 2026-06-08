"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type SectionBackLinkProps = {
  fallbackHref: string;
  label?: string;
  className?: string;
};

export function SectionBackLink({
  fallbackHref,
  label = "Back",
  className = "",
}: SectionBackLinkProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
          return;
        }

        router.push(fallbackHref);
      }}
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15 ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </button>
  );
}
