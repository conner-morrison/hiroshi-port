"use client";

import Image from "next/image";
import type { PortfolioLocale } from "@/i18n/portfolio-messages";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import { englishDisplay } from "@/fonts/english-display";
import { usePortfolioLocale } from "./language-provider";

/** Intrinsic aspect of day banner PNG (width / height). Both assets are letterboxed with `object-contain` in this box. */
const BANNER_ASPECT = 614 / 232;

const LEFT_TOP_TEMPLE_ID = "left-top-temple";
const UNDER_RIGHT_TOP_TEMPLE_ID = "under-right-top-temple";
const MIDDLE_LEFT_DOWN_TEMPLE_ID = "middle-left-down-temple";
const LEFT_MIDDLE_RIGHT_DOWN_TEMPLE_ID = "left-middle-right-down-temple";

const NARRATIVE_COPY_SLOT_IDS = new Set([
  LEFT_TOP_TEMPLE_ID,
  UNDER_RIGHT_TOP_TEMPLE_ID,
  MIDDLE_LEFT_DOWN_TEMPLE_ID,
  LEFT_MIDDLE_RIGHT_DOWN_TEMPLE_ID,
]);

/**
 * Vertical anchor for **left-top-temple** copy: % from the **top** of that banner
 * box; text is centered on that line with `translateY(-50%)`.
 */
const NARRATIVE_COPY_ANCHOR_LEFT_TOP_PCT = 62;

/**
 * Same role as `NARRATIVE_COPY_ANCHOR_LEFT_TOP_PCT`, for **middle-left-down-temple**.
 * Tune independently if the art needs a different vertical line.
 */
const NARRATIVE_COPY_ANCHOR_MIDDLE_LEFT_DOWN_PCT = 64;

/**
 * Same role as the other `NARRATIVE_COPY_ANCHOR_*` constants, for **left-middle-right-down-temple**.
 */
const NARRATIVE_COPY_ANCHOR_LEFT_MIDDLE_RIGHT_DOWN_PCT = 62;

/**
 * Same role as the other `NARRATIVE_COPY_ANCHOR_*` constants, for **under-right-top-temple**.
 */
const NARRATIVE_COPY_ANCHOR_UNDER_RIGHT_TOP_PCT = 62;

/**
 * **100** = default narrative banner font size. **115** = 15% larger (scales both
 * mobile and `sm` caps together). Wired to `--narrative-copy-font-pct` in `globals.css`.
 */
const NARRATIVE_COPY_FONT_SIZE_PCT = 120;

type SlotStyle = { top: string; left: string; width: string };

/**
 * Four copies of the experience narrative wrapper, placed over the landscape
 * at temple-adjacent regions (tune percentages if your art crop differs).
 */
const BANNER_SLOTS: { id: string; style: SlotStyle }[] = [
  { id: LEFT_TOP_TEMPLE_ID, style: { top: "28.5%", left: "4%", width: "30%" } },
  { id: UNDER_RIGHT_TOP_TEMPLE_ID, style: { top: "31.5%", left: "67%", width: "30%" } },
  { id: MIDDLE_LEFT_DOWN_TEMPLE_ID, style: { top: "37%", left: "9%", width: "30%" } },
  {
    id: LEFT_MIDDLE_RIGHT_DOWN_TEMPLE_ID,
    style: { top: "42.3%", left: "68%", width: "30%" },
  },
];

function NarrativeCopyOverlay({
  copy,
  anchorTopPct,
  showDay,
  locale,
  langReady,
}: {
  copy: string;
  anchorTopPct: number;
  showDay: boolean;
  locale: PortfolioLocale;
  langReady: boolean;
}) {
  return (
    <div
      className="absolute inset-x-0 z-[2] flex justify-center px-[4%] sm:px-[5%]"
      style={{
        top: `${anchorTopPct}%`,
        transform: "translateY(-50%)",
        ["--narrative-copy-font-pct" as string]: String(NARRATIVE_COPY_FONT_SIZE_PCT),
      }}
    >
      <p
        lang={locale === "en" ? "en" : "ja"}
        className={`experience-narrative-banner-copy max-h-full w-full max-w-[96%] text-pretty text-center font-medium leading-snug tracking-wide ${
          langReady && locale === "en"
            ? englishDisplay.className
            : "font-sans"
        } ${showDay ? "text-stone-900" : "text-stone-50"} px-0.5 py-0 sm:px-1 sm:py-0.5`}
        style={{
          fontFeatureSettings:
            langReady && locale === "en" ? '"kern" 1, "liga" 1' : undefined,
          textShadow: showDay
            ? "0 0 10px rgba(255,255,255,0.95), 0 0 20px rgba(255,255,255,0.75), 0 1px 2px rgba(0,0,0,0.25)"
            : "0 0 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.95), 0 0 1px rgba(0,0,0,1)",
        }}
      >
        {copy}
      </p>
    </div>
  );
}

export function ExperienceNarrativeBanners({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  const { locale, ready: langReady } = usePortfolioLocale();
  const t = portfolioMessages[langReady ? locale : "ja"];
  const showDay = !ready || isDay;

  const copyBySlotId: Record<string, string> = {
    [LEFT_TOP_TEMPLE_ID]: t.experienceNarrative.leftTopTemple,
    [UNDER_RIGHT_TOP_TEMPLE_ID]: t.experienceNarrative.underRightTopTemple,
    [MIDDLE_LEFT_DOWN_TEMPLE_ID]: t.experienceNarrative.middleLeftDownTemple,
    [LEFT_MIDDLE_RIGHT_DOWN_TEMPLE_ID]:
      t.experienceNarrative.leftMiddleRightDownTemple,
  };

  const anchorTopPctBySlotId: Record<string, number> = {
    [LEFT_TOP_TEMPLE_ID]: NARRATIVE_COPY_ANCHOR_LEFT_TOP_PCT,
    [UNDER_RIGHT_TOP_TEMPLE_ID]: NARRATIVE_COPY_ANCHOR_UNDER_RIGHT_TOP_PCT,
    [MIDDLE_LEFT_DOWN_TEMPLE_ID]: NARRATIVE_COPY_ANCHOR_MIDDLE_LEFT_DOWN_PCT,
    [LEFT_MIDDLE_RIGHT_DOWN_TEMPLE_ID]:
      NARRATIVE_COPY_ANCHOR_LEFT_MIDDLE_RIGHT_DOWN_PCT,
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-[5]">
      {BANNER_SLOTS.map(({ id, style }) => (
        <div key={id} className="absolute" style={style}>
          <div
            className="relative w-full [container-type:size]"
            style={{ aspectRatio: String(BANNER_ASPECT) }}
          >
            <Image
              src="/experience-banner-day.png"
              alt=""
              fill
              sizes="50vw"
              className={`object-contain object-center transition-opacity duration-700 ease-out ${
                showDay ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src="/experience-banner-night.png"
              alt=""
              fill
              sizes="50vw"
              className={`object-contain object-center transition-opacity duration-700 ease-out ${
                showDay ? "opacity-0" : "opacity-100"
              }`}
            />
            {NARRATIVE_COPY_SLOT_IDS.has(id) ? (
              <NarrativeCopyOverlay
                copy={copyBySlotId[id]!}
                anchorTopPct={anchorTopPctBySlotId[id]!}
                showDay={showDay}
                locale={locale}
                langReady={langReady}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
