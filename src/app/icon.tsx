import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon — monogram on deep slate gradient (matches portfolio night tones). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(142deg, #0c1222 0%, #152238 42%, #1a365d 100%)",
          borderRadius: 7,
          border: "1px solid rgba(148, 163, 184, 0.35)",
        }}
      >
        <span
          style={{
            color: "#f8fafc",
            fontSize: 19,
            fontWeight: 700,
            fontFamily:
              'ui-sans-serif, system-ui, "Segoe UI", Roboto, sans-serif',
            letterSpacing: "-0.04em",
            marginTop: -1,
          }}
        >
          H
        </span>
      </div>
    ),
    { ...size }
  );
}
