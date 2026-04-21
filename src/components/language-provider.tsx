"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { PortfolioLocale } from "@/i18n/portfolio-messages";

const STORAGE_KEY = "portfolio-locale";

type LanguageContextValue = {
  locale: PortfolioLocale;
  setLocale: (l: PortfolioLocale) => void;
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<PortfolioLocale>("ja");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ja" || stored === "en") {
      setLocaleState(stored);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale === "ja" ? "ja" : "en";
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const setLocale = useCallback((l: PortfolioLocale) => {
    setLocaleState(l);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, ready }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function usePortfolioLocale() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("usePortfolioLocale must be used within LanguageProvider");
  }
  return ctx;
}
