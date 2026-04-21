"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import type { ExperienceLogoBadgeLayout } from "@/config/experience-logo-badge-layout";

function glowStyle(isDay: boolean): CSSProperties {
  return isDay
    ? {
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.55), 0 0 14px rgba(255,255,255,0.65), 0 0 28px rgba(30,58,138,0.35)",
      }
    : {
        boxShadow:
          "0 0 0 1px rgba(191,219,254,0.35), 0 0 16px rgba(147,197,253,0.55), 0 0 36px rgba(37,99,235,0.35)",
      };
}

export function ExperienceLogoBadge({
  layout,
  isDay,
}: {
  layout: ExperienceLogoBadgeLayout;
  isDay: boolean;
}) {
  const radius = `${layout.borderRadiusPct}%`;
  const frame: CSSProperties = {
    width: `${layout.sizePct}%`,
    aspectRatio: `${layout.aspectRatioW} / ${layout.aspectRatioH}`,
    left: `${layout.leftPct}%`,
    top: `${layout.topPct}%`,
    borderRadius: radius,
    ...glowStyle(isDay),
  };

  return (
    <div
      className="pointer-events-none absolute z-[9]"
      style={frame}
      aria-hidden
    >
      <div
        className="relative size-full overflow-hidden"
        style={{ borderRadius: radius }}
      >
        <Image
          src={layout.imageSrc}
          alt=""
          fill
          unoptimized
          className="object-cover"
          style={{ objectPosition: layout.objectPosition }}
          sizes={`${Math.min(100, Math.ceil(layout.sizePct * 1.2))}vw`}
        />
      </div>
    </div>
  );
}
