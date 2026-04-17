import Image from "next/image";

export function AboutIntro() {
  return (
    <div className="pointer-events-auto flex h-full min-h-0 w-full items-center justify-center px-4 py-10 sm:px-8 sm:py-12">
      <div className="flex w-full max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
        <div className="flex w-full shrink-0 justify-center sm:w-1/4 sm:justify-center">
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

        <div className="min-w-0 flex-1 rounded-2xl border border-white/20 bg-black/40 px-6 py-7 shadow-xl backdrop-blur-md dark:bg-black/50 sm:px-8 sm:py-8">
          <h2 className="font-sans text-4xl font-semibold tracking-tight text-white drop-shadow-md sm:text-5xl">
            Hiroshi Kaji
          </h2>
          <div className="mt-5 space-y-3 border-t border-white/15 pt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            <p className="text-lg font-medium tracking-wide text-white sm:text-xl">
              From idea to execution
            </p>
            <p className="text-white/85">Senior software engineer</p>
            <p className="text-balance text-white/80">
              B.S. in Computer Science, National University of Singapore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
