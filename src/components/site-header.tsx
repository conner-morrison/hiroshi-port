"use client";

import { englishDisplay } from "@/fonts/english-display";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import { usePortfolioLocale } from "./language-provider";
import { usePortfolioTheme } from "./theme-provider";

const navShellDay =
  "border-stone-900/20 bg-white/25 shadow-lg backdrop-blur-md";
const navShellNight =
  "border-white/20 bg-[#080a0c]/35 shadow-lg backdrop-blur-md";
const linkDay =
  "text-stone-900/90 hover:bg-stone-900/10 hover:text-stone-950 focus-visible:outline-amber-700";
const linkNight =
  "text-white/90 hover:bg-white/20 hover:text-white focus-visible:outline-amber-200";

const NAV_IDS = [
  "about",
  "experience",
  "projects",
  "technology",
  "contact",
] as const;

export function SiteHeader() {
  const { locale, ready } = usePortfolioLocale();
  const { theme, ready: themeReady } = usePortfolioTheme();
  const t = portfolioMessages[ready ? locale : "ja"];
  const enNav = ready && locale === "en";
  const day = !themeReady || theme === "light";

  return (
    <header className="relative z-20 flex justify-center pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] pt-[max(5rem,env(safe-area-inset-top,0px))] pb-3 sm:pl-4 sm:pr-4 sm:pt-[max(5.25rem,env(safe-area-inset-top,0px))] sm:pb-4">
      <nav
        aria-label={t.navAria}
        className={`flex max-w-4xl flex-wrap items-center justify-center gap-x-1 gap-y-2 rounded-full border px-3 py-2 sm:gap-x-2 sm:px-4 sm:pl-28 sm:pr-24 ${
          day ? navShellDay : navShellNight
        } ${enNav ? englishDisplay.className : ""}`}
      >
        {NAV_IDS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`rounded-full px-2.5 py-1.5 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-3 sm:text-sm ${
              day ? linkDay : linkNight
            } ${enNav ? "font-semibold tracking-wide" : "font-medium"}`}
          >
            {t.nav[id]}
          </a>
        ))}
      </nav>
    </header>
  );
}
