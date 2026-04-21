"use client";

import type { CSSProperties } from "react";

const PETAL_COUNT = 24;
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
 */
export function ExperienceSakuraPetals() {
  return (
    <div
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
            style={
              {
                left: `${leftPercent(i)}%`,
                top: "32%",
                width: `${w}px`,
                height: `${h}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
