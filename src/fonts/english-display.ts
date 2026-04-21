import { Source_Serif_4 } from "next/font/google";

/**
 * English-only typography: editorial serif for nav, glass headings, and about copy.
 */
export const englishDisplay = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-english-display",
});
