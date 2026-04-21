"use client";

import Image from "next/image";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import { usePortfolioLocale } from "./language-provider";

const TELEGRAM_URL = "https://t.me/willow0522";

/** Day booth PNG width / height (portrait); night asset letterboxed with `object-contain`. */
const BOOTH_ASPECT = 180 / 294;

export function TelegramBoothLink({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  const { locale, ready: langReady } = usePortfolioLocale();
  const t = portfolioMessages[langReady ? locale : "ja"].links;
  const showDay = !ready || isDay;

  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute z-[20] block w-[12%] cursor-pointer [filter:drop-shadow(0_12px_18px_rgba(0,0,0,0.45))] transition-transform duration-200 hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
      style={{
        right: "4%",
        bottom: "9.4%",
        transform: "translateY(4%)",
      }}
      aria-label={t.telegram}
    >
      <div
        className="relative w-full"
        style={{ aspectRatio: String(BOOTH_ASPECT) }}
      >
        <Image
          src="/telegram-booth-day.png"
          alt=""
          fill
          unoptimized
          sizes="18vw"
          className={`object-contain object-bottom transition-opacity duration-700 ease-out ${
            showDay ? "opacity-100" : "opacity-0"
          }`}
        />
        <Image
          src="/telegram-booth-night.png"
          alt=""
          fill
          unoptimized
          sizes="18vw"
          className={`object-contain object-bottom transition-opacity duration-700 ease-out ${
            showDay ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </a>
  );
}
