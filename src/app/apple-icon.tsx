import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — same mark as favicon at higher resolution. */
export default function AppleIcon() {
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
          borderRadius: 36,
          border: "2px solid rgba(148, 163, 184, 0.4)",
        }}
      >
        <span
          style={{
            color: "#f8fafc",
            fontSize: 108,
            fontWeight: 700,
            fontFamily:
              'ui-sans-serif, system-ui, "Segoe UI", Roboto, sans-serif',
            letterSpacing: "-0.04em",
            marginTop: -4,
          }}
        >
          H
        </span>
      </div>
    ),
    { ...size }
  );
}
