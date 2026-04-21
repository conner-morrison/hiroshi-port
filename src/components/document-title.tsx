"use client";

import { useEffect } from "react";
import { portfolioMessages } from "@/i18n/portfolio-messages";
import { usePortfolioLocale } from "./language-provider";

/**
 * Syncs `document.title` (and meta description) with the active locale; default
 * HTML metadata remains English for crawlers until hydration.
 */
export function DocumentTitle() {
  const { locale, ready } = usePortfolioLocale();

  useEffect(() => {
    const t = portfolioMessages[ready ? locale : "ja"].site;
    document.title = t.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t.description);
    }
  }, [locale, ready]);

  return null;
}
