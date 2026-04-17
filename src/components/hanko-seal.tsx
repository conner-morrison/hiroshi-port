export function HankoSeal({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
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
