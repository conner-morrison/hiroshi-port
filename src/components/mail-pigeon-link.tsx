import Image from "next/image";

const MAILTO = "mailto:hiroshi.kaji@excitox.com";

/** Day pigeon PNG width / height; night asset letterboxed with `object-contain`. */
const PIGEON_ASPECT = 298 / 210;

export function MailPigeonLink({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  const showDay = !ready || isDay;

  return (
    <a
      href={MAILTO}
      className="absolute z-[20] block w-[14%] cursor-pointer [filter:drop-shadow(0_14px_20px_rgba(0,0,0,0.4))] transition-transform duration-200 hover:scale-[1.04] focus-visible:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
      style={{
        left: "25%",
        bottom: "10%",
        transform: "translateX(-50%) translateY(-6%)",
      }}
      aria-label="Send email to Hiroshi Kaji"
    >
      <div
        className="relative w-full"
        style={{ aspectRatio: String(PIGEON_ASPECT) }}
      >
        <Image
          src="/mail-pigeon-day.png"
          alt=""
          fill
          unoptimized
          sizes="30vw"
          className={`object-contain object-center transition-opacity duration-700 ease-out ${
            showDay ? "opacity-100" : "opacity-0"
          }`}
        />
        <Image
          src="/mail-pigeon-night.png"
          alt=""
          fill
          unoptimized
          sizes="30vw"
          className={`object-contain object-center transition-opacity duration-700 ease-out ${
            showDay ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </a>
  );
}
