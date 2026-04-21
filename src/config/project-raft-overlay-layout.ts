/**
 * Layout & typography for project raft overlays (screenshot + title/stack on top of
 * the default `project-narrative-*.png` raft). Tune numbers/strings here — no need
 * to hunt through JSX.
 *
 * Units: `%` values are relative to the **raft slot** box (the narrative banner).
 * Font sizes use `cqw` (1% of container width) with a `rem` cap; requires
 * `[container-type:size]` on the raft root (already set in the component).
 */
export type ProjectRaftOverlayLayout = {
  /** % from top of raft; overlay’s vertical **center** sits here (`translateY(-50%)`). */
  anchorTopPct: number;
  /** Horizontal anchor before translate; `50` = centered on raft. */
  overlayLeftPct: number;
  /** Overlay row width as % of raft width. */
  overlayWidthPct: number;
  /** `max-width` as % of raft (keeps inset from edges). */
  overlayMaxWidthPct: number;
  /**
   * Band height as % of raft. Sets both `height` and `max-height` on the overlay row
   * so the flex row has a definite height and the screenshot can fill it (`object-cover`).
   * `null` → defaults to `92%` in code.
   */
  overlayMaxHeightPct: number | null;
  /** Side padding inside overlay row (% of raft). */
  horizontalPaddingPct: number;
  /**
   * When `true`, the overlay row uses `flex-row-reverse` so the screenshot column sits on
   * the **right** and copy on the **left** (raft 3 style).
   */
  overlayRowReverse: boolean;
  /** Screenshot column width (% of the overlay row’s inner width). */
  imageColumnWidthPct: number;
  /**
   * `object-position` for `object-fit: cover` (e.g. `"left center"`). The **second** value is
   * vertical only when the bitmap is cropped on the top and bottom; wide screenshots are
   * usually cropped left/right only, so changing vertical `%` here often does nothing — use
   * `imageTranslateYPct` to move the image up/down inside the clip.
   */
  imageObjectPosition: string;
  /**
   * Vertical shift of the screenshot inside the rounded column (% of **column height**;
   * CSS `translateY` on a wrapper). Positive = down, negative = up; always visible (clipped
   * by `overflow-hidden` on the column).
   */
  imageTranslateYPct: number;
  /** Gap between screenshot and text (% of raft, passed as gap %). */
  flexGapPct: number;
  /** Space between title and stack (`em`). */
  titleStackGapEm: number;
  /** Title: `cqw` part of `min(cqw, rem)`. */
  titleFontCqw: number;
  titleFontRemMax: number;
  /** Stack line: `cqw` / `rem` cap. */
  stackFontCqw: number;
  stackFontRemMax: number;
  /** When `true` and locale is English, use editorial serif; otherwise Geist sans. */
  useSerifWhenEnglish: boolean;
  /** Extra Tailwind on title (e.g. `font-semibold tracking-wide`). */
  titleTailwind: string;
  /** Extra Tailwind on stack `<p>`. */
  stackTailwind: string;
};

export const PROJECT_RAFT_OVERLAY_LAYOUT: Record<
  "raft-1" | "raft-2" | "raft-3" | "raft-4" | "raft-5",
  ProjectRaftOverlayLayout
> = {
  "raft-1": {
    anchorTopPct: 49,
    overlayLeftPct: 50,
    overlayWidthPct: 74,
    overlayMaxWidthPct: 76,
    overlayMaxHeightPct: 52,
    horizontalPaddingPct: 1,
    overlayRowReverse: false,
    imageColumnWidthPct: 46,
    imageObjectPosition: "left center",
    imageTranslateYPct: 0,
    flexGapPct: 3,
    titleStackGapEm: 0.35,
    titleFontCqw: 4.2,
    titleFontRemMax: 0.78,
    stackFontCqw: 3.2,
    stackFontRemMax: 0.62,
    useSerifWhenEnglish: true,
    titleTailwind: "font-semibold leading-tight tracking-wide",
    stackTailwind: "font-medium leading-snug tracking-wide",
  },
  "raft-2": {
    anchorTopPct: 49,
    overlayLeftPct: 50,
    overlayWidthPct: 74,
    overlayMaxWidthPct: 76,
    overlayMaxHeightPct: 52,
    horizontalPaddingPct: 1.5,
    overlayRowReverse: false,
    imageColumnWidthPct: 40,
    imageObjectPosition: "left 62%",
    imageTranslateYPct: 0,
    flexGapPct: 3,
    titleStackGapEm: 0.4,
    titleFontCqw: 4,
    titleFontRemMax: 0.76,
    stackFontCqw: 3,
    stackFontRemMax: 0.6,
    useSerifWhenEnglish: true,
    titleTailwind: "font-semibold leading-tight tracking-wide",
    stackTailwind: "font-medium leading-snug tracking-wide",
  },
  "raft-3": {
    anchorTopPct: 49,
    overlayLeftPct: 50,
    overlayWidthPct: 74,
    overlayMaxWidthPct: 76,
    overlayMaxHeightPct: 52,
    horizontalPaddingPct: 1.5,
    overlayRowReverse: false,
    imageColumnWidthPct: 44,
    imageObjectPosition: "left center",
    imageTranslateYPct: 0,
    flexGapPct: 3,
    titleStackGapEm: 0.4,
    titleFontCqw: 4,
    titleFontRemMax: 0.76,
    stackFontCqw: 2.85,
    stackFontRemMax: 0.55,
    useSerifWhenEnglish: true,
    titleTailwind: "font-semibold leading-tight tracking-wide",
    stackTailwind: "font-medium leading-snug tracking-wide",
  },
  "raft-4": {
    anchorTopPct: 49,
    overlayLeftPct: 50,
    overlayWidthPct: 74,
    overlayMaxWidthPct: 76,
    overlayMaxHeightPct: 52,
    horizontalPaddingPct: 1.5,
    overlayRowReverse: false,
    imageColumnWidthPct: 46,
    imageObjectPosition: "left center",
    imageTranslateYPct: 0,
    flexGapPct: 3,
    titleStackGapEm: 0.4,
    titleFontCqw: 3.85,
    titleFontRemMax: 0.74,
    stackFontCqw: 2.65,
    stackFontRemMax: 0.52,
    useSerifWhenEnglish: true,
    titleTailwind: "font-semibold leading-tight tracking-wide",
    stackTailwind: "font-medium leading-snug tracking-wide",
  },
  "raft-5": {
    anchorTopPct: 49,
    overlayLeftPct: 50,
    overlayWidthPct: 74,
    overlayMaxWidthPct: 76,
    overlayMaxHeightPct: 52,
    horizontalPaddingPct: 1.5,
    overlayRowReverse: false,
    imageColumnWidthPct: 46,
    imageObjectPosition: "left center",
    imageTranslateYPct: 0,
    flexGapPct: 3,
    titleStackGapEm: 0.4,
    titleFontCqw: 3.75,
    titleFontRemMax: 0.72,
    stackFontCqw: 2.75,
    stackFontRemMax: 0.53,
    useSerifWhenEnglish: true,
    titleTailwind: "font-semibold leading-tight tracking-wide",
    stackTailwind: "font-medium leading-snug tracking-wide",
  },
};

export const PROJECT_RAFT_OVERLAY_IMAGE: Record<
  "raft-1" | "raft-2" | "raft-3" | "raft-4" | "raft-5",
  string
> = {
  "raft-1": "/project-raft-1-agentic-workflow.jpg",
  "raft-2": "/project-raft-2-chat-past.jpg",
  "raft-3": "/project-raft-3-ai-operating-system.png",
  "raft-4": "/project-raft-4-okr-management.png",
  "raft-5": "/project-raft-5-community-events.png",
};
