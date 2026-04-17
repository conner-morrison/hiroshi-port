import Image from "next/image";

/** Intrinsic aspect of day banner PNG (width / height). Both assets are letterboxed with `object-contain` in this box. */
const BANNER_ASPECT = 614 / 232;

type SlotStyle = { top: string; left: string; width: string };

/**
 * Four copies of the experience narrative wrapper, placed over the landscape
 * at temple-adjacent regions (tune percentages if your art crop differs).
 */
const BANNER_SLOTS: { id: string; style: SlotStyle }[] = [
  { id: "left-top-temple", style: { top: "25%", left: "27%", width: "30%" } },
  { id: "under-right-top-temple", style: { top: "31%", left: "67%", width: "30%" } },
  { id: "middle-left-down-temple", style: { top: "35%", left: "28%", width: "30%" } },
  { id: "left-middle-right-down-temple", style: { top: "41%", left: "46%", width: "30%" } },
];

export function ExperienceNarrativeBanners({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  const showDay = !ready || isDay;

  return (
    <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden>
      {BANNER_SLOTS.map(({ id, style }) => (
        <div key={id} className="absolute" style={style}>
          <div
            className="relative w-full"
            style={{ aspectRatio: String(BANNER_ASPECT) }}
          >
            <Image
              src="/experience-banner-day.png"
              alt=""
              fill
              sizes="50vw"
              className={`object-contain object-center transition-opacity duration-700 ease-out ${
                showDay ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src="/experience-banner-night.png"
              alt=""
              fill
              sizes="50vw"
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
