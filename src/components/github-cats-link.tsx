import Image from "next/image";

const GITHUB_PROFILE_URL = "https://github.com/pokemon918";

/** Day asset width / height; night PNG letterboxed with `object-contain`. */
const CATS_ASPECT = 613 / 407;

export function GithubCatsLink({
  isDay,
  ready,
}: {
  isDay: boolean;
  ready: boolean;
}) {
  const showDay = !ready || isDay;

  return (
    <a
      href={GITHUB_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute z-[20] block w-[15%] cursor-pointer [filter:drop-shadow(0_16px_22px_rgba(0,0,0,0.42))] transition-transform duration-200 hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200"
      style={{
        left: "52%",
        bottom: "15%",
        transform: "translateX(-50%) translateY(-5%)",
      }}
      aria-label="Open GitHub profile pokemon918"
    >
      <div
        className="relative w-full"
        style={{ aspectRatio: String(CATS_ASPECT) }}
      >
        <Image
          src="/github-cats-night.png"
          alt=""
          fill
          unoptimized
          sizes="40vw"
          className={`object-contain object-center transition-opacity duration-700 ease-out ${
            showDay ? "opacity-100" : "opacity-0"
          }`}
        />
        <Image
          src="/github-cats-day.png"
          alt=""
          fill
          unoptimized
          sizes="40vw"
          className={`object-contain object-center transition-opacity duration-700 ease-out ${
            showDay ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </a>
  );
}
