export type PortfolioLocale = "ja" | "en";

export const portfolioMessages = {
  ja: {
    nav: {
      about: "概要",
      experience: "経験",
      projects: "プロジェクト",
      technology: "技術",
      contact: "連絡",
    },
    navAria: "ページ内ナビゲーション",
    sections: {
      about: "概要",
      experience: "経験",
      projects: "プロジェクト",
      technology: "技術",
      contact: "連絡",
    },
    glassHeadings: {
      experience: "経験",
      projects: "成果",
      technology: "技術",
      contact: "連携",
    },
    srBackground: (day: boolean) =>
      day ? "昼の風景背景" : "夜の風景背景",
    theme: {
      toNight: "夜間モードに切り替え",
      toDay: "昼間モードに切り替え",
    },
    language: {
      switchToJa: "日本語に切り替え",
      switchToEn: "Switch to English",
      groupAria: "表示言語",
    },
    links: {
      github: "GitHubプロフィール pokemon918 を開く",
      mail: "梶裕志にメールを送る",
      telegram: "Telegramでチャットを開く",
    },
    about: {
      name: "梶裕志",
      role: "シニアソフトウェアエンジニア",
      tagline: "アイデアから実行まで",
      education: "シンガポール国立大学 コンピュータサイエンス学士",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      technology: "Technology",
      contact: "Contact",
    },
    navAria: "On this page",
    sections: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      technology: "Technology",
      contact: "Contact",
    },
    glassHeadings: {
      experience: "Experience",
      projects: "Projects",
      technology: "Technology",
      contact: "Contact",
    },
    srBackground: (day: boolean) =>
      day ? "Day landscape background" : "Night landscape background",
    theme: {
      toNight: "Switch to night mode",
      toDay: "Switch to day mode",
    },
    language: {
      switchToJa: "Switch to Japanese",
      switchToEn: "Switch to English",
      groupAria: "Display language",
    },
    links: {
      github: "Open GitHub profile pokemon918",
      mail: "Send email to Hiroshi Kaji",
      telegram: "Open Telegram chat",
    },
    about: {
      name: "Hiroshi Kaji",
      role: "Senior Software Engineer",
      tagline: "From idea to delivery",
      education: "B.Sc. Computer Science, National University of Singapore",
    },
  },
} as const;

export type PortfolioMessages = (typeof portfolioMessages)[PortfolioLocale];
