"use client";

import Image from "next/image";
import { Yuji_Syuku } from "next/font/google";
import { englishDisplay } from "@/fonts/english-display";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import { AboutFloatingClouds } from "./about-floating-clouds";
import { HankoSeal } from "./hanko-seal";
import { usePortfolioLocale } from "./language-provider";

const brush = Yuji_Syuku({
  subsets: ["latin"],
  weight: "400",
});

function VerticalChars({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {Array.from(text).map((ch, i) => (
        <span key={`${ch}-${i}`} className="block leading-[1.05]">
          {ch}
        </span>
      ))}
    </span>
  );
}

export function AboutIntro({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  const { locale, ready: langReady } = usePortfolioLocale();
  const t = portfolioMessages[langReady ? locale : "ja"].about;
  const portraitAlt =
    locale === "ja" ? "梶裕志のポートレート" : "Portrait of Hiroshi Kaji";

  return (
    <div className="pointer-events-auto relative flex h-full min-h-0 w-full max-w-[100dvw] items-center justify-center py-8 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:py-10 sm:pl-6 sm:pr-6 md:pl-10 md:pr-10 lg:pl-14 lg:pr-14 xl:pl-20 xl:pr-20 2xl:pl-28 2xl:pr-28">
      <AboutFloatingClouds isDay={isDay} ready={ready} />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-20">
        <div className="relative z-[2] flex w-full shrink-0 justify-center sm:w-2/5 sm:justify-center">
          <div className="relative aspect-square w-full max-w-[11rem] sm:max-w-none">
            <Image
              src="/hiroshi-portrait.png"
              alt={portraitAlt}
              fill
              className="rounded-full border-[3px] border-white/70 object-cover shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-2 ring-black/10 dark:border-white/35 dark:ring-white/10"
              sizes="(max-width: 640px) 11rem, 25vw"
              priority
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-center gap-8 sm:items-start">
          {locale === "ja" ? (
            <div
              className={`${brush.className} relative z-[2] inline-block rounded-sm px-7 pb-10 pt-8 shadow-[0_4px_24px_rgba(0,0,0,0.18),inset_0_0_80px_rgba(255,255,255,0.35)] sm:px-9 sm:pb-12 sm:pt-10`}
              style={{
                backgroundImage:
                  "linear-gradient(165deg, #fdfaf4 0%, #f0e8da 42%, #e8dfd0 100%)",
              }}
            >
              <div className="flex flex-row-reverse items-start justify-end gap-5 sm:gap-7">
                <div className="flex flex-col items-center text-[#111]">
                  <VerticalChars
                    text={t.name}
                    className="text-[clamp(2.75rem,6vw,4.25rem)] tracking-[0.02em]"
                  />
                </div>
                <div className="flex flex-col items-center text-[#1c1917]">
                  <VerticalChars
                    text={t.role}
                    className="text-[clamp(0.95rem,2.4vw,1.2rem)] tracking-[0.12em]"
                  />
                </div>
                <div className="flex flex-col items-center text-[#292524]">
                  <VerticalChars
                    text={t.tagline}
                    className="text-[clamp(0.9rem,2.2vw,1.05rem)] tracking-[0.1em]"
                  />
                </div>
                <div className="flex flex-col items-center text-[#292524]">
                  <VerticalChars
                    text={t.education}
                    className="text-[clamp(0.78rem,1.9vw,0.95rem)] tracking-[0.1em]"
                  />
                </div>
              </div>
              <HankoSeal className="pointer-events-none absolute -bottom-1 -left-1 z-10 h-[3.25rem] w-[3.25rem] -rotate-[8deg] sm:h-14 sm:w-14" />
            </div>
          ) : (
            <div
              className={`${englishDisplay.className} relative z-[2] w-full max-w-md rounded-sm px-7 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.18),inset_0_0_80px_rgba(255,255,255,0.35)] sm:px-9 sm:py-10`}
              style={{
                backgroundImage:
                  "linear-gradient(165deg, #fdfaf4 0%, #f0e8da 42%, #e8dfd0 100%)",
                fontFeatureSettings: '"kern" 1, "liga" 1, "onum" 1',
              }}
            >
              <div className="flex flex-col gap-4 text-left text-[#1c1917]">
                <p className="text-[clamp(1.65rem,3.8vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#111]">
                  {t.name}
                </p>
                <p className="text-[clamp(1rem,2.1vw,1.2rem)] font-normal leading-snug tracking-[0.01em] text-[#292524]">
                  {t.role}
                </p>
                <p className="text-[clamp(0.95rem,1.95vw,1.08rem)] font-normal leading-relaxed text-[#44403c]">
                  {t.tagline}
                </p>
                <p className="text-[0.8125rem] font-normal leading-[1.65] text-[#57534e] sm:text-[0.9375rem]">
                  {t.education}
                </p>
              </div>
              <HankoSeal className="pointer-events-none absolute -bottom-1 -left-1 z-10 h-[3.25rem] w-[3.25rem] -rotate-[8deg] sm:h-14 sm:w-14" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
