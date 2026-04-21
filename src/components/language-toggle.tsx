"use client";

import { portfolioMessages } from "@/i18n/portfolio-messages";
import { usePortfolioLocale } from "./language-provider";

const BTN =
  "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/40 text-xl shadow-md backdrop-blur-md transition-transform hover:scale-105 hover:bg-black/50 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200";

function FlagJapan() {
  return (
    <span
      className="flex h-4 w-7 items-center justify-center overflow-hidden border border-black/10 bg-white shadow-inner"
      aria-hidden
    >
      <svg viewBox="0 0 3 2" className="h-full w-full">
        <rect width="3" height="2" fill="#fff" />
        <circle cx="1.5" cy="1" r="0.45" fill="#bc002d" />
      </svg>
    </span>
  );
}

function FlagUs() {
  return (
    <span
      className="flex h-4 w-7 items-center justify-center overflow-hidden border border-black/10 shadow-inner"
      aria-hidden
    >
      <svg viewBox="0 0 30 16" className="h-full w-full">
        <rect width="30" height="16" fill="#b22234" />
        <path
          fill="#fff"
          d="M0 2h30v2H0zm0 4h30v2H0zm0 4h30v2H0zm0 4h30v2H0z"
        />
        <rect width="12" height="9" fill="#3c3b6e" />
      </svg>
    </span>
  );
}

export function LanguageToggle() {
  const { locale, setLocale, ready } = usePortfolioLocale();
  const t = portfolioMessages[ready ? locale : "ja"].language;

  if (!ready) {
    return (
      <div
        className="pointer-events-none fixed top-3 left-3 z-50 h-11 w-[5.5rem] rounded-full opacity-0 sm:left-4 sm:top-3.5"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="fixed top-3 left-3 z-50 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 p-1.5 shadow-lg backdrop-blur-md sm:left-4 sm:top-3.5"
      role="group"
      aria-label={t.groupAria}
    >
      <button
        type="button"
        onClick={() => setLocale("ja")}
        className={`${BTN} ${locale === "ja" ? "ring-2 ring-amber-200/90 ring-offset-2 ring-offset-black/60" : ""}`}
        aria-label={t.switchToJa}
        aria-pressed={locale === "ja"}
      >
        <FlagJapan />
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`${BTN} ${locale === "en" ? "ring-2 ring-amber-200/90 ring-offset-2 ring-offset-black/60" : ""}`}
        aria-label={t.switchToEn}
        aria-pressed={locale === "en"}
      >
        <FlagUs />
      </button>
    </div>
  );
}
