"use client";

import Image from "next/image";
import { AboutIntro } from "./about-intro";
import { CelestialThemeToggle } from "./celestial-theme-toggle";
import { ExperienceNarrativeBanners } from "./experience-narrative-banners";
import { SiteHeader } from "./site-header";
import { usePortfolioTheme } from "./theme-provider";

/** Must match exported `day_bg.jpg` / `night_bg.jpg` dimensions (pixels). */
const BG_WIDTH = 341;
const BG_HEIGHT = 1024;

const SECTIONS = [
  { id: "about" as const, title: "About", topPct: 0, heightPct: 20 },
  { id: "experience" as const, title: "Experience", topPct: 20, heightPct: 20 },
  { id: "projects" as const, title: "Projects", topPct: 40, heightPct: 20 },
  { id: "technology" as const, title: "Technology", topPct: 60, heightPct: 20 },
  { id: "contact" as const, title: "Contact", topPct: 80, heightPct: 20 },
];

export function BackgroundOnlyView() {
  const { theme, ready } = usePortfolioTheme();
  const isDay = !ready || theme === "light";

  return (
    <div className="relative w-full bg-black">
      <SiteHeader />
      <div
        className="relative w-full max-w-none bg-black"
        style={{ aspectRatio: `${BG_WIDTH} / ${BG_HEIGHT}` }}
      >
        <Image
          src="/day_bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-700 ease-out ${
            isDay ? "opacity-100" : "opacity-0"
          }`}
        />
        <Image
          src="/night_bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-700 ease-out ${
            isDay ? "opacity-0" : "opacity-100"
          }`}
        />
        <ExperienceNarrativeBanners isDay={isDay} ready={ready} />
        {SECTIONS.map(({ id, title, topPct, heightPct }) => (
          <section
            key={id}
            id={id}
            aria-label={title}
            className="absolute right-0 left-0 z-10"
            style={{
              top: `${topPct}%`,
              height: `${heightPct}%`,
            }}
          >
            {id === "about" ? null : (
              <h2 className="sr-only">{title}</h2>
            )}
            {id === "about" ? <AboutIntro /> : null}
          </section>
        ))}
      </div>
      <span className="sr-only">
        {isDay ? "Day landscape background" : "Night landscape background"}
      </span>
      <CelestialThemeToggle />
    </div>
  );
}
