/**
 * Rounded “logo badge” overlays on the **Experience** band. Same frame for every entry:
 * glow + clip from `ExperienceLogoBadge`. Tune each logo with **`sizePct`** (width % of
 * section; height follows aspect), **`leftPct` / `topPct`**, and optional **`objectPosition`**.
 */
export type ExperienceLogoBadgeLayout = {
  imageSrc: string;
  leftPct: number;
  topPct: number;
  sizePct: number;
  borderRadiusPct: number;
  aspectRatioW: number;
  aspectRatioH: number;
  objectPosition: string;
};

export const EXPERIENCE_NUS_BADGE_LAYOUT = {
  /** Distinct filename avoids stale `/_next/image` + browser cache after asset swaps. */
  imageSrc: "/about-nus-logo.png",
  leftPct: 16,
  topPct: 39,
  sizePct: 7,
  borderRadiusPct: 11,
  aspectRatioW: 1024,
  aspectRatioH: 683,
  objectPosition: "center center",
} as const satisfies ExperienceLogoBadgeLayout;

export const EXPERIENCE_GRAB_BADGE_LAYOUT = {
  imageSrc: "/experience-grab-badge.png",
  leftPct: 79,
  topPct: 53.5,
  sizePct: 7,
  borderRadiusPct: 11,
  aspectRatioW: 1024,
  aspectRatioH: 684,
  objectPosition: "center center",
} as const satisfies ExperienceLogoBadgeLayout;

export const EXPERIENCE_DURAFLAME_BADGE_LAYOUT = {
  imageSrc: "/experience-duraflame-badge.png",
  leftPct: 80,
  topPct: 108,
  sizePct: 7,
  borderRadiusPct: 11,
  aspectRatioW: 1024,
  aspectRatioH: 684,
  objectPosition: "center center",
} as const satisfies ExperienceLogoBadgeLayout;

/** ケミカン / Intelligent Chemical Safety */
export const EXPERIENCE_KEMIKAN_BADGE_LAYOUT = {
  imageSrc: "/experience-kemikan-badge.png",
  leftPct: 20.8,
  topPct: 81,
  sizePct: 7,
  borderRadiusPct: 11,
  aspectRatioW: 1024,
  aspectRatioH: 683,
  objectPosition: "center center",
} as const satisfies ExperienceLogoBadgeLayout;
