"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type PortfolioTheme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

type ThemeContextValue = {
  theme: PortfolioTheme;
  setTheme: (t: PortfolioTheme) => void;
  ready: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<PortfolioTheme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      setThemeState(stored);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, ready]);

  const setTheme = useCallback((t: PortfolioTheme) => {
    setThemeState(t);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, ready }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function usePortfolioTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("usePortfolioTheme must be used within ThemeProvider");
  }
  return ctx;
}
