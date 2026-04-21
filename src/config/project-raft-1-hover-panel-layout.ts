/**
 * Raft-1 hover detail panel — stem, panel, image, type, glass. Edit values here only.
 */
export type ProjectRaft1HoverPanelLayout = {
  liftZIndex: number;
  stemWidthPx: number;
  stemCollapsedRem: number;
  stemExpandedRem: number;
  panelGapAboveRaftRem: number;
  /** Upper bound for panel width (`width` / `max-width`). */
  panelMaxWidth: string;
  /** Floor so the panel does not collapse visually on small / mid viewports. */
  panelMinWidth: string;
  /**
   * Fixed panel height so **%** sizes resolve on the image cell (`height: --r1-img-h-pct` from `sm` up).
   * Use `vh`/`dvh` so it fits the viewport.
   */
  panelHeight: string;
  panelPaddingRem: number;
  panelBorderRadiusRem: number;
  /** Image cell width as **% of the panel’s inner width** (below padding). */
  imageWidthPctOfPanel: number;
  /** Image slot height as **% of the panel’s inner height** (row layout: vertical space inside the panel body). */
  imageHeightPctOfPanel: number;
  /** Corner radius of the image cell only (rounded rectangle). */
  imageCellBorderRadiusRem: number;
  /**
   * How the bitmap is mapped into that cell (standard CSS `object-fit`):
   * - **`contain`**: whole image visible; letterboxing if aspect ≠ cell.
   * - **`cover`**: fills the cell; may crop; tune **`imageObjectPosition`**.
   */
  imageObjectFit: "contain" | "cover";
  /** CSS `object-position` (e.g. `"left center"`, `"center top"`). */
  imageObjectPosition: string;
  columnGapRem: number;
  titleToBodyGapEm: number;
  bodyToStackGapEm: number;
  titleFontCqw: number;
  titleFontRemMax: number;
  bodyFontRem: number;
  stackFontCqw: number;
  stackFontRemMax: number;
  glassBlurPx: number;
  glassBackdropSaturate: number;
  glassBgLight: string;
  glassBgDark: string;
  glassBorderLight: string;
  glassBorderDark: string;
};

export const PROJECT_RAFT_1_HOVER_PANEL_LAYOUT: ProjectRaft1HoverPanelLayout = {
  liftZIndex: 48,
  stemWidthPx: 2,
  stemCollapsedRem: 0.65,
  stemExpandedRem: 1.05,
  panelGapAboveRaftRem: 0.5,
  panelMaxWidth: "min(42vw, 72rem)",
  panelMinWidth: "min(38vw, max(30rem, 42vw))",
  panelHeight: "min(34dvh, 40rem)",
  panelPaddingRem: 0.9,
  panelBorderRadiusRem: 0.85,
  imageWidthPctOfPanel: 40,
  imageHeightPctOfPanel: 90,
  imageCellBorderRadiusRem: 0.65,
  imageObjectFit: "contain",
  imageObjectPosition: "center center",
  columnGapRem: 0.85,
  titleToBodyGapEm: 0.45,
  bodyToStackGapEm: 0.55,
  titleFontCqw: 3.2,
  titleFontRemMax: 1.05,
  bodyFontRem: 0.78,
  stackFontCqw: 3,
  stackFontRemMax: 0.72,
  glassBlurPx: 36,
  glassBackdropSaturate: 1.4,
  glassBgLight: "rgba(230, 248, 239, 0.32)",
  glassBgDark: "rgba(9, 10, 12, 0.56)",
  glassBorderLight: "rgba(255, 255, 255, 0.48)",
  glassBorderDark: "rgba(150, 200, 175, 0.3)",
};
