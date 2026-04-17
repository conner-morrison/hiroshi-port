import Image from "next/image";
import { Yuji_Syuku } from "next/font/google";
import { AboutFloatingClouds } from "./about-floating-clouds";

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

function HankoSeal() {
  return (
    <div
      className="pointer-events-none absolute -bottom-1 -left-1 z-10 h-[3.25rem] w-[3.25rem] -rotate-[8deg] sm:h-14 sm:w-14"
      aria-hidden
    >
      <svg viewBox="0 0 64 64" className="h-full w-full drop-shadow-md">
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="3"
          className="fill-[#b42318] stroke-[#5c0d0a]/55"
          strokeWidth="1.5"
        />
        <rect
          x="6"
          y="6"
          width="52"
          height="52"
          rx="1.5"
          fill="none"
          className="stroke-[#f5e6dc]/25"
          strokeWidth="1"
        />
        <text
          x="32"
          y="41"
          textAnchor="middle"
          className="fill-[#f8eee8]/90 font-serif text-[26px]"
          style={{ fontFamily: "Georgia, 'Hiragino Mincho ProN', serif" }}
        >
          印
        </text>
      </svg>
    </div>
  );
}

export function AboutIntro({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  return (
    <div className="pointer-events-auto relative flex h-full min-h-0 w-full items-center justify-center px-4 py-10 sm:px-8 sm:py-12">
      <AboutFloatingClouds isDay={isDay} ready={ready} />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-12">
        <div className="relative z-[2] flex w-full shrink-0 justify-center sm:w-1/4 sm:justify-center">
          <div className="relative aspect-square w-full max-w-[11rem] sm:max-w-none">
            <Image
              src="/hiroshi-portrait.png"
              alt="Portrait of Hiroshi Kaji"
              fill
              className="rounded-full border-[3px] border-white/70 object-cover shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-2 ring-black/10 dark:border-white/35 dark:ring-white/10"
              sizes="(max-width: 640px) 11rem, 25vw"
              priority
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-center gap-8 sm:items-start">
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
                  text="梶裕志"
                  className="text-[clamp(2.75rem,6vw,4.25rem)] tracking-[0.02em]"
                />
              </div>
              <div className="flex flex-col items-center text-[#1c1917]">
                <VerticalChars
                  text="シニアソフトウェアエンジニア"
                  className="text-[clamp(0.95rem,2.4vw,1.2rem)] tracking-[0.12em]"
                />
              </div>
              <div className="flex flex-col items-center text-[#292524]">
                <VerticalChars
                  text="アイデアから実行まで"
                  className="text-[clamp(0.9rem,2.2vw,1.05rem)] tracking-[0.1em]"
                />
              </div>
              <div className="flex flex-col items-center text-[#292524]">
                <VerticalChars
                  text="シンガポール国立大学 コンピュータサイエンス学士"
                  className="text-[clamp(0.78rem,1.9vw,0.95rem)] tracking-[0.1em]"
                />
              </div>
            </div>
            <HankoSeal />
          </div>
        </div>
      </div>
    </div>
  );
}
