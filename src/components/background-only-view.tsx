"use client";

import { portfolioMessages } from "@/i18n/portfolio-messages";
import { AboutIntro } from "./about-intro";
import {
  EXPERIENCE_DURAFLAME_BADGE_LAYOUT,
  EXPERIENCE_GRAB_BADGE_LAYOUT,
  EXPERIENCE_KEMIKAN_BADGE_LAYOUT,
  EXPERIENCE_NUS_BADGE_LAYOUT,
} from "@/config/experience-logo-badge-layout";
import { ExperienceLogoBadge } from "./experience-logo-badge";
import { CelestialThemeToggle } from "./celestial-theme-toggle";
import { ExperienceHeadingBanner } from "./experience-heading-banner";
import { ExperienceNarrativeBanners } from "./experience-narrative-banners";
import { ExperienceSakuraPetals } from "./experience-sakura-petals";
import { GithubCatsLink } from "./github-cats-link";
import { ProjectNarrativeBanners } from "./project-narrative-banners";
import { SiteHeader } from "./site-header";
import { MailPigeonLink } from "./mail-pigeon-link";
import { TelegramBoothLink } from "./telegram-booth-link";
import { LanguageToggle } from "./language-toggle";
import { usePortfolioLocale } from "./language-provider";
import { usePortfolioTheme } from "./theme-provider";

/** Must match `public/portfolio-day-bg.png` / `portfolio-night-bg.png` dimensions (pixels). */
const BG_WIDTH = 341;
const BG_HEIGHT = 1024;

const dayBgSrc = "/portfolio-day-bg.jpg";
const nightBgSrc = "/portfolio-night-bg.jpg";

/** Shared vertical stack order for 経験 / 成果 / 技術 / 連携 banners (per section box). */
const SECTION_HEADING_BANNER_BASE =
  "pointer-events-none absolute top-[3%] z-[12]";

/**
 * Horizontal placement — edit each section’s X independently.
 * Examples: `left-1/2 -translate-x-1/2` (center), `left-[12%]`, `right-[8%] left-auto`,
 * `left-[45%] -translate-x-1/2` (shifted center).
 */
const SECTION_HEADING_BANNER_X = {
  experience: "left-1/2 -translate-x-1/2",
  projects: "left-2/9 -translate-x-1/2",
  technology: "left-1/2 -translate-x-1/2",
  contact: "left-17/24 -translate-x-1/2",
} as const;

const SECTIONS = [
  { id: "about" as const, title: "About", topPct: 0, heightPct: 20 },
  { id: "experience" as const, title: "Experience", topPct: 20, heightPct: 20 },
  { id: "projects" as const, title: "Projects", topPct: 40, heightPct: 30 },
  { id: "technology" as const, title: "Technology", topPct: 70, heightPct: 9 },
  { id: "contact" as const, title: "Contact", topPct: 77, heightPct: 20 },
];

export function BackgroundOnlyView() {
  const { theme, ready } = usePortfolioTheme();
  const { locale, ready: langReady } = usePortfolioLocale();
  const t = portfolioMessages[langReady ? locale : "ja"];
  const englishTypography = Boolean(langReady && locale === "en");
  const isDay = !ready || theme === "light";

  return (
    <div className="relative w-full bg-black">
      <SiteHeader />
      <div
        className="relative z-0 w-full max-w-none bg-black"
        style={{ aspectRatio: `${BG_WIDTH} / ${BG_HEIGHT}` }}
      >
        {/* Native <img>: Next `Image` + `fill` can size to 0 when height comes only from `aspect-ratio`. */}
        <img
          src={dayBgSrc}
          alt=""
          width={BG_WIDTH}
          height={BG_HEIGHT}
          decoding="async"
          fetchPriority="high"
          className={`absolute inset-0 z-0 size-full object-cover object-center transition-opacity duration-700 ease-out ${
            isDay ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={nightBgSrc}
          alt=""
          width={BG_WIDTH}
          height={BG_HEIGHT}
          decoding="async"
          fetchPriority="high"
          className={`absolute inset-0 z-0 size-full object-cover object-center transition-opacity duration-700 ease-out ${
            isDay ? "opacity-0" : "opacity-100"
          }`}
        />
        <ExperienceNarrativeBanners isDay={isDay} ready={ready} />
        <ProjectNarrativeBanners isDay={isDay} ready={ready} />
        <TelegramBoothLink isDay={isDay} ready={ready} />
        <MailPigeonLink isDay={isDay} ready={ready} />
        <GithubCatsLink isDay={isDay} ready={ready} />
        {SECTIONS.map(({ id, topPct, heightPct }) => (
          <section
            key={id}
            id={id}
            aria-label={t.sections[id]}
            className="pointer-events-none absolute right-0 left-0 z-10"
            style={{
              top: `${topPct}%`,
              height: `${heightPct}%`,
            }}
          >
            {id === "about" ? null : (
              <h2 className="sr-only">{t.sections[id]}</h2>
            )}
            {id === "experience" ? (
              <>
                <ExperienceSakuraPetals />
                <ExperienceLogoBadge
                  layout={EXPERIENCE_NUS_BADGE_LAYOUT}
                  isDay={isDay}
                />
                <ExperienceLogoBadge
                  layout={EXPERIENCE_GRAB_BADGE_LAYOUT}
                  isDay={isDay}
                />
                <ExperienceLogoBadge
                  layout={EXPERIENCE_DURAFLAME_BADGE_LAYOUT}
                  isDay={isDay}
                />
                <ExperienceLogoBadge
                  layout={EXPERIENCE_KEMIKAN_BADGE_LAYOUT}
                  isDay={isDay}
                />
                <div
                  className={`${SECTION_HEADING_BANNER_BASE} ${SECTION_HEADING_BANNER_X.experience}`}
                  aria-hidden
                >
                  <ExperienceHeadingBanner
                    isDay={isDay}
                    text={t.glassHeadings.experience}
                    englishTypography={englishTypography}
                  />
                </div>
              </>
            ) : null}
            {id === "projects" ? (
              <div
                className={`${SECTION_HEADING_BANNER_BASE} ${SECTION_HEADING_BANNER_X.projects}`}
                aria-hidden
              >
                <ExperienceHeadingBanner
                  isDay={isDay}
                  text={t.glassHeadings.projects}
                  englishTypography={englishTypography}
                />
              </div>
            ) : null}
            {id === "technology" ? (
              <div
                className={`${SECTION_HEADING_BANNER_BASE} ${SECTION_HEADING_BANNER_X.technology}`}
                aria-hidden
              >
                <ExperienceHeadingBanner
                  isDay={isDay}
                  text={t.glassHeadings.technology}
                  englishTypography={englishTypography}
                />
              </div>
            ) : null}
            {id === "contact" ? (
              <div
                className={`${SECTION_HEADING_BANNER_BASE} ${SECTION_HEADING_BANNER_X.contact}`}
                aria-hidden
              >
                <ExperienceHeadingBanner
                  isDay={isDay}
                  text={t.glassHeadings.contact}
                  englishTypography={englishTypography}
                />
              </div>
            ) : null}
            {id === "about" ? (
              <AboutIntro isDay={isDay} ready={ready} />
            ) : null}
          </section>
        ))}
      </div>
      <span className="sr-only">{t.srBackground(isDay)}</span>
      <LanguageToggle />
      <CelestialThemeToggle />
    </div>
  );
}
