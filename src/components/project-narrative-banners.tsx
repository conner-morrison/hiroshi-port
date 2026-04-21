"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import {
  PROJECT_RAFT_OVERLAY_IMAGE,
  PROJECT_RAFT_OVERLAY_LAYOUT,
  type ProjectRaftOverlayLayout,
} from "@/config/project-raft-overlay-layout";
import { PROJECT_RAFT_1_HOVER_PANEL_LAYOUT } from "@/config/project-raft-1-hover-panel-layout";
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

const RAFT_1_HOVER_LAYOUT = PROJECT_RAFT_1_HOVER_PANEL_LAYOUT;

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

function Raft1HoverSproutDetail({
  imageSrc,
  title,
  stackLine,
  explanation,
  showDay,
  locale,
  langReady,
}: {
  imageSrc: string;
  title: string;
  stackLine: string;
  explanation: string;
  showDay: boolean;
  locale: "ja" | "en";
  langReady: boolean;
}) {
  const L = PROJECT_RAFT_1_HOVER_PANEL_LAYOUT;
  const raftLayout = PROJECT_RAFT_OVERLAY_LAYOUT["raft-1"];
  const useSerif =
    Boolean(langReady && locale === "en") && raftLayout.useSerifWhenEnglish;
  const titleFont = useSerif ? englishDisplay.className : "font-sans";
  const stackFont = useSerif ? englishDisplay.className : "font-sans";
  const titleFontSize = `min(${L.titleFontCqw}cqw, ${L.titleFontRemMax}rem)`;
  const stackFontSize = `min(${L.stackFontCqw}cqw, ${L.stackFontRemMax}rem)`;

  const glassBg = showDay ? L.glassBgLight : L.glassBgDark;
  const glassBorder = showDay ? L.glassBorderLight : L.glassBorderDark;

  const panelStyle: CSSProperties = {
    ["--r1-panel-max-w" as string]: L.panelMaxWidth,
    ["--r1-panel-width" as string]: L.panelMaxWidth,
    ["--r1-panel-min-w" as string]: L.panelMinWidth,
    ["--r1-img-w-pct" as string]: `${L.imageWidthPctOfPanel}%`,
    ["--r1-img-h-pct" as string]: `${L.imageHeightPctOfPanel}%`,
    width: L.panelMaxWidth,
    maxWidth: L.panelMaxWidth,
    minWidth: L.panelMinWidth,
    display: "flex",
    flexDirection: "column",
    height: L.panelHeight,
    overflow: "hidden",
    bottom: `calc(100% + ${L.panelGapAboveRaftRem}rem)`,
    padding: `${L.panelPaddingRem}rem`,
    borderRadius: `${L.panelBorderRadiusRem}rem`,
    backdropFilter: `blur(${L.glassBlurPx}px) saturate(${L.glassBackdropSaturate})`,
    WebkitBackdropFilter: `blur(${L.glassBlurPx}px) saturate(${L.glassBackdropSaturate})`,
    background: glassBg,
    border: `1px solid ${glassBorder}`,
    boxShadow: showDay
      ? "0 8px 28px rgba(0, 48, 28, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.55)"
      : "0 12px 40px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
  };

  const imageCellStyle: CSSProperties = {
    alignSelf: "center",
    flexShrink: 0,
    minHeight: 0,
    minWidth: 0,
    borderRadius: `${L.imageCellBorderRadiusRem}rem`,
  };

  return (
    <>
      <div className="raft-1-sprout-stem" aria-hidden />
      <div
        className="raft-1-sprout-panel text-left [container-type:inline-size]"
        role="tooltip"
        style={panelStyle}
      >
        <div
          className="flex min-h-0 min-w-0 flex-1 flex-col items-stretch sm:flex-row sm:items-stretch"
          style={{ gap: `${L.columnGapRem}rem` }}
        >
          <div
            className="raft-1-sprout-panel__media relative w-full shrink-0 overflow-hidden self-center ring-1 ring-black/15 dark:ring-white/20 sm:w-auto sm:self-center"
            style={imageCellStyle}
          >
            <div className="pointer-events-none absolute inset-0 min-h-0 min-w-0">
              <Image
                src={imageSrc}
                alt=""
                fill
                className={
                  L.imageObjectFit === "cover"
                    ? "object-cover"
                    : "object-contain object-center"
                }
                style={{
                  objectPosition: L.imageObjectPosition,
                }}
                sizes="(max-width: 640px) 90vw, 520px"
              />
            </div>
          </div>
          <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center self-stretch overflow-y-auto">
            <p
              lang={locale === "en" ? "en" : "ja"}
              className={`text-pretty ${raftLayout.titleTailwind} ${titleFont} ${
                showDay ? "text-stone-950" : "text-stone-50"
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
              className={`text-pretty font-normal leading-snug ${
                showDay ? "text-stone-800" : "text-stone-200"
              }`}
              style={{
                marginTop: `${L.titleToBodyGapEm}em`,
                fontSize: `${L.bodyFontRem}rem`,
                textShadow: narrativeTextShadow(showDay),
              }}
            >
              {explanation}
            </p>
            <p
              lang={locale === "en" ? "en" : "ja"}
              className={`text-pretty ${raftLayout.stackTailwind} ${stackFont} ${
                showDay ? "text-stone-800" : "text-stone-100"
              }`}
              style={{
                marginTop: `${L.bodyToStackGapEm}em`,
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
    </>
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
        const raft1Hover = id === "raft-1" && hasOverlay && copy;

        const raftArticle =
          hasOverlay && copy && overlayId ? (
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
          ) : null;

        return (
          <div
            key={id}
            className={`absolute ${
              riverFloat
                ? ""
                : "[filter:drop-shadow(0_10px_14px_rgba(0,0,0,0.35))]"
            } ${raft1Hover ? "raft-1-hover-root pointer-events-auto" : ""}`}
            style={{
              ...style,
              ...(raft1Hover
                ? ({
                    ["--raft-1-lift-z" as string]: String(
                      RAFT_1_HOVER_LAYOUT.liftZIndex
                    ),
                    ["--r1-stem-w" as string]: `${RAFT_1_HOVER_LAYOUT.stemWidthPx}px`,
                    ["--r1-stem-h0" as string]: `${RAFT_1_HOVER_LAYOUT.stemCollapsedRem}rem`,
                    ["--r1-stem-h1" as string]: `${RAFT_1_HOVER_LAYOUT.stemExpandedRem}rem`,
                  } as CSSProperties)
                : {}),
            }}
            aria-hidden={!hasOverlay}
            tabIndex={raft1Hover ? 0 : undefined}
            aria-label={
              raft1Hover
                ? `${t.projectNarrative.raft1.title}. ${t.projectNarrative.raft1.hoverExplanation}`
                : undefined
            }
          >
            {hasOverlay && copy && overlayId ? (
              <>
                {riverFloat ? (
                  <div
                    className="[filter:drop-shadow(0_10px_14px_rgba(0,0,0,0.35))] technology-river-raft-float"
                    style={{
                      animationDelay: technologyRiverRaftFloatDelay(id),
                    }}
                  >
                    {raftArticle}
                  </div>
                ) : (
                  raftArticle
                )}
                {id === "raft-1" ? (
                  <Raft1HoverSproutDetail
                    imageSrc={PROJECT_RAFT_OVERLAY_IMAGE["raft-1"]}
                    title={t.projectNarrative.raft1.title}
                    stackLine={t.projectNarrative.raft1.stackLine}
                    explanation={t.projectNarrative.raft1.hoverExplanation}
                    showDay={showDay}
                    locale={locale}
                    langReady={langReady}
                  />
                ) : null}
              </>
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
