import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DocumentTitle } from "@/components/document-title";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { englishDisplay } from "@/fonts/english-display";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hiroshi Story",
    template: "%s · Hiroshi Story",
  },
  description:
    "Hiroshi Kaji — senior software engineer portfolio told through day and night landscapes.",
  applicationName: "Hiroshi Story",
  openGraph: {
    title: "Hiroshi Story",
    description:
      "Hiroshi Kaji — senior software engineer portfolio told through day and night landscapes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiroshi Story",
    description:
      "Hiroshi Kaji — senior software engineer portfolio told through day and night landscapes.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${englishDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-dvh min-w-0 overflow-x-hidden">
        <ThemeProvider>
          <LanguageProvider>
            <DocumentTitle />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
