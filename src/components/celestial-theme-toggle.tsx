"use client";

import Image from "next/image";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import { usePortfolioLocale } from "./language-provider";
import { usePortfolioTheme } from "./theme-provider";

const TOGGLE_PX = 72;

export function CelestialThemeToggle() {
  const { theme, setTheme, ready } = usePortfolioTheme();
  const { locale, ready: langReady } = usePortfolioLocale();
  const tTheme = portfolioMessages[langReady ? locale : "ja"].theme;

  if (!ready) {
    return (
      <div
        className="pointer-events-none fixed right-[max(0.75rem,env(safe-area-inset-right,0px))] top-[max(0.75rem,env(safe-area-inset-top,0px))] z-50 h-16 w-16 rounded-full opacity-0 sm:right-[max(1rem,env(safe-area-inset-right,0px))] sm:top-[max(0.875rem,env(safe-area-inset-top,0px))]"
        aria-hidden
      />
    );
  }

  if (theme === "light") {
    return (
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className="group fixed right-[max(0.75rem,env(safe-area-inset-right,0px))] top-[max(0.75rem,env(safe-area-inset-top,0px))] z-50 flex cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 shadow-none outline-none ring-2 ring-white/50 backdrop-blur-[2px] focus-visible:ring-4 focus-visible:ring-amber-200 sm:right-[max(1rem,env(safe-area-inset-right,0px))] sm:top-[max(0.875rem,env(safe-area-inset-top,0px))]"
        style={{ width: TOGGLE_PX, height: TOGGLE_PX }}
        aria-label={tTheme.toNight}
      >
        <span
          className="relative block transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
          style={{
            width: TOGGLE_PX,
            height: TOGGLE_PX,
            filter:
              "drop-shadow(0 0 14px rgba(255, 210, 100, 0.85)) drop-shadow(0 0 28px rgba(255, 190, 80, 0.45))",
          }}
        >
          <Image
            src="/sun-toggle.png"
            alt=""
            fill
            className="object-contain"
            sizes={`${TOGGLE_PX}px`}
            priority
          />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme("light")}
      className="group fixed right-[max(0.75rem,env(safe-area-inset-right,0px))] top-[max(0.75rem,env(safe-area-inset-top,0px))] z-50 flex cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 outline-none ring-2 ring-white/25 backdrop-blur-[2px] focus-visible:ring-4 focus-visible:ring-indigo-300 sm:right-[max(1rem,env(safe-area-inset-right,0px))] sm:top-[max(0.875rem,env(safe-area-inset-top,0px))]"
      style={{ width: TOGGLE_PX, height: TOGGLE_PX }}
      aria-label={tTheme.toDay}
    >
      <span
        className="relative block transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
        style={{
          width: TOGGLE_PX,
          height: TOGGLE_PX,
          filter:
            "drop-shadow(0 0 12px rgba(180, 210, 255, 0.75)) drop-shadow(0 0 24px rgba(120, 160, 255, 0.35))",
        }}
      >
        <Image
          src="/moon-toggle.png"
          alt=""
          fill
          className="object-contain"
          sizes={`${TOGGLE_PX}px`}
        />
      </span>
    </button>
  );
}
