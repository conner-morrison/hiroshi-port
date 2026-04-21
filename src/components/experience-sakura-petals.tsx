<<<<<<< HEAD
import type { CSSProperties } from "react";

const PETAL_COUNT = 28;
const VARIANTS = 4;

/**
 * Sakura petals — full experience band (`inset-0` on #experience).
 * Delays are a fraction of each petal’s own duration so many are visible at
 * different heights at once (not one thin row at the top).
=======
"use client";

const PETAL_COUNT = 14;
const DRIFT_VARIANTS = ["a", "b", "c", "d", "e"] as const;

/** Seconds per loop — higher = slower drift (longer time across the band). */
const DURATION_MIN = 52;
const DURATION_SPREAD = 20;

/** Stable spread across width (deterministic, no hydration mismatch). */
function leftPercent(i: number): number {
  return 3 + ((i * 41 + 17) % 94);
}

/**
 * Sakura petals falling through the experience band with varied wind-like motion.
 * Scoped to the experience section only (parent provides the clip box).
 *
 * Longer / slower flutter:
 * - Raise `DURATION_MIN` / `DURATION_SPREAD` (seconds per loop).
 * - In `globals.css`, widen horizontal `translate3d(...px, 0, 0)` values or add more % stops.
>>>>>>> recover-detached
 */
export function ExperienceSakuraPetals() {
  return (
    <div
<<<<<<< HEAD
      className="pointer-events-none absolute inset-x-[0%] inset-y-[20%] z-[8] overflow-hidden select-none"
      aria-hidden
    >
      {Array.from({ length: PETAL_COUNT }, (_, i) => {
        const v = i % VARIANTS;
        const dur = 13 + (i % 8) * 1.05 + (i % 5) * 0.28;
        /* Uniform phase spread: petal i starts at (i / N) of its own loop */
        const delay =
          PETAL_COUNT > 1 ? -(dur * (i / (PETAL_COUNT - 1))) : 0;
        /* Even horizontal spread across almost full width */
        const left =
          PETAL_COUNT > 1 ? 3 + (i / (PETAL_COUNT - 1)) * 92 : 48;
        return (
          <span
            key={i}
            className={`experience-sakura-petal experience-sakura-petal--${v}`}
            style={
              {
                left: `${left}%`,
                "--sakura-dur": `${dur}s`,
                "--sakura-delay": `${delay}s`,
              } as CSSProperties
            }
=======
      className="experience-sakura-layer pointer-events-none absolute inset-0 z-[7] overflow-hidden"
      aria-hidden
    >
      {Array.from({ length: PETAL_COUNT }, (_, i) => {
        const v = DRIFT_VARIANTS[i % DRIFT_VARIANTS.length];
        const duration = DURATION_MIN + ((i * 5) % DURATION_SPREAD);
        const delay = -((i * 2.3) % 24);
        const w = 5 + (i % 5);
        const h = 7 + (i % 5);
        return (
          <div
            key={i}
            className={`experience-sakura-petal experience-sakura-drift-${v}`}
            style={{
              left: `${leftPercent(i)}%`,
              top: "32%",
              width: `${w}px`,
              height: `${h}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
>>>>>>> recover-detached
          />
        );
      })}
    </div>
  );
}
