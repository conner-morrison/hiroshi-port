import Image from "next/image";

/** Day PNG intrinsic ratio (width / height); night asset letterboxed inside this box. */
const RAFT_ASPECT = 366 / 197;

type SlotStyle = {
  top: string;
  left: string;
  width: string;
  /** Optional fine nudge, e.g. `translateY(-6%)` */
  transform?: string;
};

/**
 * Five project narrative wrappers — each slot is positioned independently
 * as % of the landscape layer (same coordinate space as the background art).
 * Edit `top`, `left`, `width` (and optional `transform`) per raft.
 */
const PROJECT_SLOTS: { id: string; style: SlotStyle }[] = [
  { id: "raft-1", style: { top: "45%", left: "24%", width: "28%" } },
  { id: "raft-2", style: { top: "50%", left: "34%", width: "28%" } },
  { id: "raft-3", style: { top: "55%", left: "22%", width: "28%" } },
  { id: "raft-4", style: { top: "60%", left: "40%", width: "28%" } },
  { id: "raft-5", style: { top: "65%", left: "36%", width: "28%" } },
];

export function ProjectNarrativeBanners({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  const showDay = !ready || isDay;

  return (
    <div className="pointer-events-none absolute inset-0 z-[6]" aria-hidden>
      {PROJECT_SLOTS.map(({ id, style }) => (
        <div
          key={id}
          className="absolute [filter:drop-shadow(0_10px_14px_rgba(0,0,0,0.35))]"
          style={style}
        >
          <div
            className="relative w-full"
            style={{ aspectRatio: String(RAFT_ASPECT) }}
          >
            <Image
              src="/project-narrative-day.png"
              alt=""
              fill
              sizes="20vw"
              className={`object-contain object-center transition-opacity duration-700 ease-out ${
                showDay ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src="/project-narrative-night.png"
              alt=""
              fill
              sizes="20vw"
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
