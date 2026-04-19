"use client";

import { englishDisplay } from "@/fonts/english-display";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import { usePortfolioLocale } from "./language-provider";

const NAV_IDS = [
  "about",
  "experience",
  "projects",
  "technology",
  "contact",
] as const;

export function SiteHeader() {
  const { locale, ready } = usePortfolioLocale();
  const t = portfolioMessages[ready ? locale : "ja"];
  const enNav = ready && locale === "en";

  return (
    <header className="relative z-10 flex justify-center px-3 pt-20 pb-3 sm:px-4 sm:pt-[5.25rem] sm:pb-4">
      <nav
        aria-label={t.navAria}
        className={`flex max-w-4xl flex-wrap items-center justify-center gap-x-1 gap-y-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 shadow-lg backdrop-blur-md sm:gap-x-2 sm:px-4 sm:pl-28 sm:pr-24 ${enNav ? englishDisplay.className : ""}`}
      >
        {NAV_IDS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`rounded-full px-2.5 py-1.5 text-xs text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 sm:px-3 sm:text-sm ${enNav ? "font-semibold tracking-wide" : "font-medium"}`}
          >
            {t.nav[id]}
          </a>
        ))}
      </nav>
    </header>
  );
}
