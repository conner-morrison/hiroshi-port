import type { CSSProperties } from "react";

const PETAL_COUNT = 28;
const VARIANTS = 4;

/**
 * Sakura petals — full experience band (`inset-0` on #experience).
 * Delays are a fraction of each petal’s own duration so many are visible at
 * different heights at once (not one thin row at the top).
 */
export function ExperienceSakuraPetals() {
  return (
    <div
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
          />
        );
      })}
    </div>
  );
}
