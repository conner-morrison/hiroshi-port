import { Yuji_Syuku } from "next/font/google";
import { englishDisplay } from "@/fonts/english-display";

const brush = Yuji_Syuku({
  subsets: ["latin"],
  weight: "400",
});

/**
 * Glass tint (0–1). Lower = stronger transparency (more blurred site behind).
 * Day = warm yellow; night = cool dark.
 */
export const EXPERIENCE_BANNER_GLASS = {
  day: {
    washTop: 0.045,
    washMid: 0.028,
    washBottom: 0.04,
    veil: 0.17,
  },
  night: {
    washTop: 0.08,
    washMid: 0.055,
    washBottom: 0.09,
    veil: 0.4,
  },
} as const;

/** Glam rule: line thickness feel (px) and glow strength (0–1). */
export const EXPERIENCE_BANNER_LINES = {
  heightPx: 3,
  glow: 0.55,
} as const;

function glamLineGradient(night: boolean): string {
  if (night) {
    return "linear-gradient(90deg, transparent 0%, transparent 6%, rgba(100,88,60,0.15) 18%, rgba(212,175,95,0.95) 44%, rgba(255,252,240,0.98) 50%, rgba(212,175,95,0.95) 56%, rgba(100,88,60,0.15) 82%, transparent 94%, transparent 100%)";
  }
  return "linear-gradient(90deg, transparent 0%, transparent 6%, rgba(220,180,90,0.35) 20%, rgba(255,236,180,0.98) 48%, rgba(255,250,235,1) 50%, rgba(255,236,180,0.98) 52%, rgba(220,180,90,0.35) 80%, transparent 94%, transparent 100%)";
}

function glamLineShadow(night: boolean, glow: number): string {
  if (night) {
    return `0 0 ${14 * glow}px rgba(200,170,100,${0.35 * glow}), 0 ${3 * glow}px ${18 * glow}px rgba(0,0,0,${0.45 * glow})`;
  }
  return `0 0 ${12 * glow}px rgba(255,220,150,${0.5 * glow}), 0 ${2 * glow}px ${14 * glow}px rgba(180,140,60,${0.35 * glow})`;
}

/**
 * Horizontal glass band: glam soft lines only above / below copy, no left/right
 * frame. Strong transparency + heavy blur so the landscape reads through.
 */
export function ExperienceHeadingBanner({
  isDay,
  text = "経験",
  englishTypography = false,
}: {
  isDay: boolean;
  text?: string;
  /** Latin / English copy: editorial serif + tighter tracking than brush Kanji. */
  englishTypography?: boolean;
}) {
  const night = !isDay;
  const g = night ? EXPERIENCE_BANNER_GLASS.night : EXPERIENCE_BANNER_GLASS.day;
  const ln = EXPERIENCE_BANNER_LINES;

  const backgroundImage = night
    ? `linear-gradient(180deg, rgba(18,20,30,${g.washTop}) 0%, rgba(10,12,22,${g.washMid}) 50%, rgba(6,8,16,${g.washBottom}) 100%)`
    : `linear-gradient(180deg, rgba(255,248,220,${g.washTop}) 0%, rgba(255,236,185,${g.washMid}) 50%, rgba(252,224,155,${g.washBottom}) 100%)`;

  const backgroundColor = night
    ? `rgba(4,6,14,${g.veil})`
    : `rgba(255,252,230,${g.veil})`;

  const lineH = `${ln.heightPx}px`;
  const rootFont = englishTypography ? englishDisplay.className : brush.className;

  return (
    <div
      className={`inline-flex min-w-0 flex-col items-stretch gap-2.5 ${rootFont}`}
      style={
        englishTypography
          ? { fontFeatureSettings: '"kern" 1, "liga" 1' }
          : undefined
      }
    >
      <div
        aria-hidden
        className="w-full shrink-0 rounded-full"
        style={{
          height: lineH,
          background: glamLineGradient(night),
          boxShadow: glamLineShadow(night, ln.glow),
        }}
      />
      <div
        className="relative w-full px-8 py-2 backdrop-blur-[44px] sm:px-12 sm:py-2.5"
        style={{
          backgroundImage,
          backgroundColor,
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
          boxShadow: night
            ? "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.28)"
            : "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(200,160,80,0.1)",
        }}
      >
        <span
          className={`relative z-[1] inline-block w-full text-center ${englishTypography ? "text-[clamp(1.2rem,3.2vw,1.75rem)] font-semibold tracking-[0.06em] sm:tracking-[0.08em]" : "text-[clamp(1.45rem,4.2vw,2.1rem)] tracking-[0.38em] pr-[0.38em]"} ${night ? "text-[#f7f5ef]" : "text-[#1a1610]"}`}
          style={{
            textShadow: night
              ? "0 1px 3px rgba(0,0,0,0.7), 0 0 14px rgba(0,0,0,0.3)"
              : "0 1px 2px rgba(255,255,255,0.95)",
          }}
        >
          {text}
        </span>
      </div>
      <div
        aria-hidden
        className="w-full shrink-0 rounded-full"
        style={{
          height: lineH,
          background: glamLineGradient(night),
          boxShadow: glamLineShadow(night, ln.glow),
        }}
      />
    </div>
  );
}
