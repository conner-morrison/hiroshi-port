"use client";

import Image from "next/image";

/** Matches cropped cloud PNG (682×512). */
const CLOUD_ASPECT = 682 / 512;

/** Four clones: varied size & placement; timing feels wind-like. */
const CLOUDS = [
  { id: "a", top: "48%", left: "67%", widthPct: 30, duration: 22, delay: 0 },
  { id: "b", top: "60%", left: "40%", widthPct: 5, duration: 29, delay: -7 },
  { id: "e", top: "60%", left: "40%", widthPct: 10, duration: 29, delay: -7 },
  { id: "c", top: "32%", left: "14%", widthPct: 16, duration: 19, delay: -11 },
  { id: "d", top: "72%", left: "3%", widthPct: 23, duration: 26, delay: -4 },
] as const;

export function AboutFloatingClouds({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  const showDay = !ready || isDay;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {CLOUDS.map((c, index) => (
        <div
          key={c.id}
          className="animate-about-cloud absolute [filter:drop-shadow(0_10px_18px_rgba(0,0,0,0.2))] dark:[filter:drop-shadow(0_8px_16px_rgba(0,0,0,0.45))]"
          style={{
            top: c.top,
            left: c.left,
            width: `${c.widthPct}%`,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
          }}
        >
          <div
            className="relative w-full"
            style={{ aspectRatio: String(CLOUD_ASPECT) }}
          >
            <Image
              src="/about-cloud-day.png"
              alt=""
              fill
              unoptimized
              loading="eager"
              priority={index === 0}
              sizes="30vw"
              className={`object-contain object-center transition-opacity duration-700 ease-out ${
                showDay ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src="/about-cloud-night.png"
              alt=""
              fill
              unoptimized
              loading="eager"
              sizes="30vw"
              className={`object-contain object-center transition-opacity duration-700 ease-out ${
                showDay ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
