"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import {
  PROJECT_RAFT_OVERLAY_IMAGE,
  PROJECT_RAFT_OVERLAY_LAYOUT,
  type ProjectRaftOverlayLayout,
} from "@/config/project-raft-overlay-layout";
import { englishDisplay } from "@/fonts/english-display";
import { usePortfolioLocale } from "./language-provider";

/** Day PNG intrinsic ratio (width / height); night asset letterboxed inside this box. */
const RAFT_ASPECT = 366 / 197;

type RaftOverlayId =
  | "raft-1"
  | "raft-2"
  | "raft-3"
  | "raft-4"
  | "raft-5";

type SlotStyle = {
  top: string;
  left: string;
  width: string;
  transform?: string;
};

const PROJECT_SLOTS: { id: string; style: SlotStyle }[] = [
  { id: "raft-1", style: { top: "55.5%", left: "23%", width: "28%" } },
  { id: "raft-2", style: { top: "50%", left: "34%", width: "28%" } },
  // { id: "raft-3", style: { top: "55%", left: "22%", width: "28%" } },
  { id: "raft-4", style: { top: "60%", left: "40%", width: "28%" } },
  { id: "raft-5", style: { top: "65%", left: "36%", width: "28%" } },
];

/**
 * Narrative rafts that sit over the **Technology** river band (~scroll 70–79%).
 * Motion amplitude: **`--technology-raft-motion-pct`** on `:root` in `globals.css` (0–100).
 */
const TECHNOLOGY_RIVER_RAFT_IDS = new Set<string>(["raft-1", "raft-2", "raft-4", "raft-5"]);

function technologyRiverRaftFloatDelay(id: string): string {
  if (id === "raft-1") return "0s";
  if (id === "raft-2") return "0.675s";
  if (id === "raft-4") return "0s";
  if (id === "raft-5") return "1.35s";
  return "0s";
}

function narrativeTextShadow(showDay: boolean): string {
  return showDay
    ? "0 0 10px rgba(255,255,255,0.95), 0 0 20px rgba(255,255,255,0.75), 0 1px 2px rgba(0,0,0,0.25)"
    : "0 0 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.95), 0 0 1px rgba(0,0,0,1)";
}

function overlayBandHeightPct(layout: ProjectRaftOverlayLayout): string {
  if (layout.overlayMaxHeightPct != null) {
    return `${layout.overlayMaxHeightPct}%`;
  }
  return "92%";
}

function overlayStyle(layout: ProjectRaftOverlayLayout): CSSProperties {
  const bandH = overlayBandHeightPct(layout);
  return {
    top: `${layout.anchorTopPct}%`,
    left: `${layout.overlayLeftPct}%`,
    transform: "translate(-50%, -50%)",
    width: `${layout.overlayWidthPct}%`,
    maxWidth: `${layout.overlayMaxWidthPct}%`,
    height: bandH,
    maxHeight: bandH,
    paddingLeft: `${layout.horizontalPaddingPct}%`,
    paddingRight: `${layout.horizontalPaddingPct}%`,
    gap: `${layout.flexGapPct}%`,
  };
}

function ProjectRaftOverlaySlot({
  imageSrc,
  title,
  stackLine,
  layout,
  showDay,
  locale,
  langReady,
}: {
  imageSrc: string;
  title: string;
  stackLine: string;
  layout: ProjectRaftOverlayLayout;
  showDay: boolean;
  locale: "ja" | "en";
  langReady: boolean;
}) {
  const useSerif =
    Boolean(langReady && locale === "en") && layout.useSerifWhenEnglish;
  const titleFont = useSerif ? englishDisplay.className : "font-sans";
  const stackFont = useSerif ? englishDisplay.className : "font-sans";

  const titleFontSize = `min(${layout.titleFontCqw}cqw, ${layout.titleFontRemMax}rem)`;
  const stackFontSize = `min(${layout.stackFontCqw}cqw, ${layout.stackFontRemMax}rem)`;

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
        className={`pointer-events-none absolute z-[1] box-border flex min-h-0 items-stretch ${
          layout.overlayRowReverse ? "flex-row-reverse" : "flex-row"
        }`}
        style={overlayStyle(layout)}
      >
        <div
          className="relative h-[70%] min-h-0 shrink-0 self-stretch overflow-hidden rounded-md ring-1 ring-black/20 ring-offset-1 ring-offset-transparent dark:ring-white/25"
          style={{ width: `${layout.imageColumnWidthPct}%` }}
        >
          <div
            className="relative h-full w-full"
            style={{
              transform:
                layout.imageTranslateYPct !== 0
                  ? `translateY(${layout.imageTranslateYPct}%)`
                  : undefined,
            }}
          >
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: layout.imageObjectPosition }}
              sizes="25vw"
            />
          </div>
        </div>
        <div
          className="flex h-full min-h-0 min-w-0 flex-1 flex-col justify-center self-stretch text-left"
          style={{ gap: `${layout.titleStackGapEm}em` }}
        >
          <p
            lang={locale === "en" ? "en" : "ja"}
            className={`text-pretty text-stone-900 dark:text-stone-50 ${layout.titleTailwind} ${titleFont} ${
              showDay ? "!text-stone-900" : "!text-stone-50"
            }`}
            style={{
              fontSize: titleFontSize,
              textShadow: narrativeTextShadow(showDay),
              fontFeatureSettings: useSerif ? '"kern" 1, "liga" 1' : undefined,
            }}
          >
            {title}
          </p>
          <p
            lang={locale === "en" ? "en" : "ja"}
            className={`text-pretty ${layout.stackTailwind} ${stackFont} ${
              showDay ? "text-stone-800" : "text-stone-100"
            }`}
            style={{
              fontSize: stackFontSize,
              textShadow: narrativeTextShadow(showDay),
              fontFeatureSettings: useSerif ? '"kern" 1, "liga" 1' : undefined,
            }}
          >
            {stackLine}
          </p>
        </div>
      </div>
    </div>
  );
}

function raftOverlayId(id: string): RaftOverlayId | null {
  if (
    id === "raft-1" ||
    id === "raft-2" ||
    id === "raft-3" ||
    id === "raft-4" ||
    id === "raft-5"
  ) {
    return id;
  }
  return null;
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

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[6]"
      style={{ perspective: "1400px" }}
    >
      {PROJECT_SLOTS.map(({ id, style }) => {
        const overlayId = raftOverlayId(id);
        const hasOverlay = overlayId != null;

        const copy =
          overlayId === "raft-1"
            ? t.projectNarrative.raft1
            : overlayId === "raft-2"
              ? t.projectNarrative.raft2
              : overlayId === "raft-3"
                ? t.projectNarrative.raft3
                : overlayId === "raft-4"
                  ? t.projectNarrative.raft4
                  : overlayId === "raft-5"
                    ? t.projectNarrative.raft5
                    : null;

        const riverFloat = TECHNOLOGY_RIVER_RAFT_IDS.has(id);

        return (
          <div
            key={id}
            className={`absolute [filter:drop-shadow(0_10px_14px_rgba(0,0,0,0.35))] ${
              riverFloat ? "technology-river-raft-float" : ""
            }`}
            style={{
              ...style,
              ...(riverFloat
                ? { animationDelay: technologyRiverRaftFloatDelay(id) }
                : {}),
            }}
            aria-hidden={!hasOverlay}
          >
            {hasOverlay && copy && overlayId ? (
              <article className="relative w-full">
                <ProjectRaftOverlaySlot
                  imageSrc={PROJECT_RAFT_OVERLAY_IMAGE[overlayId]}
                  title={copy.title}
                  stackLine={copy.stackLine}
                  layout={PROJECT_RAFT_OVERLAY_LAYOUT[overlayId]}
                  showDay={showDay}
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
        );
      })}
    </div>
  );
}
