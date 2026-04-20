"use client";

import Image from "next/image";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import { englishDisplay } from "@/fonts/english-display";
import { usePortfolioLocale } from "./language-provider";

/** Day PNG intrinsic ratio (width / height); night asset letterboxed inside this box. */
const RAFT_ASPECT = 366 / 197;

const RAFT_1_ID = "raft-1";

/** Vertical line (from top of raft banner) where the **center** of the overlay sits; uses `translateY(-50%)`. */
const RAFT_1_OVERLAY_ANCHOR_TOP_PCT = 49;

type SlotStyle = {
  top: string;
  left: string;
  width: string;
  /** Optional fine nudge, e.g. `translateY(-6%)` */
  transform?: string;
};

/**
 * Five project narrative wrappers — each slot is positioned independently
 * as % of the landscape layer (same coordinate space as the background art).
 * Edit `top`, `left`, `width` (and optional `transform`) per raft.
 */
const PROJECT_SLOTS: { id: string; style: SlotStyle }[] = [
  { id: RAFT_1_ID, style: { top: "45%", left: "24%", width: "28%" } },
  { id: "raft-2", style: { top: "50%", left: "34%", width: "28%" } },
  { id: "raft-3", style: { top: "55%", left: "22%", width: "28%" } },
  { id: "raft-4", style: { top: "60%", left: "40%", width: "28%" } },
  { id: "raft-5", style: { top: "65%", left: "36%", width: "28%" } },
];

function narrativeTextShadow(showDay: boolean): string {
  return showDay
    ? "0 0 10px rgba(255,255,255,0.95), 0 0 20px rgba(255,255,255,0.75), 0 1px 2px rgba(0,0,0,0.25)"
    : "0 0 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.95), 0 0 1px rgba(0,0,0,1)";
}

function RaftOneNarrative({
  showDay,
  title,
  stackLine,
  locale,
  langReady,
}: {
  showDay: boolean;
  title: string;
  stackLine: string;
  locale: "ja" | "en";
  langReady: boolean;
}) {
  const englishTypography = Boolean(langReady && locale === "en");
  const titleFont = englishTypography ? englishDisplay.className : "font-sans";
  const stackFont = englishTypography ? englishDisplay.className : "font-sans";

  return (
    <div
      className="relative w-full [container-type:size]"
      style={{ aspectRatio: String(RAFT_ASPECT) }}
    >
      <Image
        src="/project-narrative-day.png"
        alt=""
        fill
        sizes="20vw"
        className={`object-contain object-center transition-opacity duration-700 ease-out ${
          showDay ? "opacity-100" : "opacity-0"
        }`}
      />
      <Image
        src="/project-narrative-night.png"
        alt=""
        fill
        sizes="20vw"
        className={`object-contain object-center transition-opacity duration-700 ease-out ${
          showDay ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className="pointer-events-none absolute left-52/100 z-[1] flex w-[84%] max-w-[76%] -translate-x-1/2 -translate-y-1/2 flex-row items-stretch gap-[3%] px-[1%]"
        style={{ top: `${RAFT_1_OVERLAY_ANCHOR_TOP_PCT}%` }}
      >
        <div className="relative min-h-0 w-[46%] shrink-0 overflow-hidden rounded-md ring-1 ring-black/20 ring-offset-1 ring-offset-transparent dark:ring-white/25">
          <Image
            src="/project-raft-1-agentic-workflow.jpg"
            alt=""
            fill
            className="object-cover object-left-top"
            sizes="25vw"
          />
        </div>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-[0.35em] text-left">
          <p
            lang={locale === "en" ? "en" : "ja"}
            className={`text-pretty font-semibold leading-tight tracking-wide [font-size:min(4.2cqw,0.78rem)] sm:[font-size:min(3.8cqw,0.85rem)] ${titleFont} ${
              showDay ? "text-stone-900" : "text-stone-50"
            }`}
            style={{
              textShadow: narrativeTextShadow(showDay),
              fontFeatureSettings: englishTypography
                ? '"kern" 1, "liga" 1'
                : undefined,
            }}
          >
            {title}
          </p>
          <p
            lang={locale === "en" ? "en" : "ja"}
            className={`text-pretty font-medium leading-snug tracking-wide [font-size:min(3.2cqw,0.62rem)] sm:[font-size:min(2.9cqw,0.68rem)] ${stackFont} ${
              showDay ? "text-stone-800" : "text-stone-100"
            }`}
            style={{
              textShadow: narrativeTextShadow(showDay),
              fontFeatureSettings: englishTypography
                ? '"kern" 1, "liga" 1'
                : undefined,
            }}
          >
            {stackLine}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProjectNarrativeBanners({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  const { locale, ready: langReady } = usePortfolioLocale();
  const t = portfolioMessages[langReady ? locale : "ja"];
  const showDay = !ready || isDay;
  const raft1 = t.projectNarrative.raft1;

  return (
    <div className="pointer-events-none absolute inset-0 z-[6]">
      {PROJECT_SLOTS.map(({ id, style }) => (
        <div
          key={id}
          className="absolute [filter:drop-shadow(0_10px_14px_rgba(0,0,0,0.35))]"
          style={style}
          aria-hidden={id !== RAFT_1_ID}
        >
          {id === RAFT_1_ID ? (
            <article className="relative w-full">
              <RaftOneNarrative
                showDay={showDay}
                title={raft1.title}
                stackLine={raft1.stackLine}
                locale={locale}
                langReady={langReady}
              />
            </article>
          ) : (
            <div
              className="relative w-full"
              style={{ aspectRatio: String(RAFT_ASPECT) }}
              aria-hidden
            >
              <Image
                src="/project-narrative-day.png"
                alt=""
                fill
                sizes="20vw"
                className={`object-contain object-center transition-opacity duration-700 ease-out ${
                  showDay ? "opacity-100" : "opacity-0"
                }`}
              />
              <Image
                src="/project-narrative-night.png"
                alt=""
                fill
                sizes="20vw"
                className={`object-contain object-center transition-opacity duration-700 ease-out ${
                  showDay ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
