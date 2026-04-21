export type PortfolioLocale = "ja" | "en";

export const portfolioMessages = {
  ja: {
    site: {
      title: "ヒロシのストーリー",
      description:
        "梶裕志のソフトウェアエンジニアとしての歩みを、昼と夜の風景で表現したポートフォリオです。",
    },
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
    experienceNarrative: {
      underRightTopTemple:
        "2025.1 ~ 現在 : US : セキュリティ、パフォーマンス、回復力、およびCI/CDを強化しながら、拡張性の高いフルスタックのマイクロサービスとAPIを構築および最適化しました。",
      middleLeftDownTemple:
        "2021.11 ~ 2024.12 : 東京、日本 : 多言語対応のAI駆動型SDS処理および化学データプラットフォームを構築し、文書分類精度95%、稼働率99.9%を達成しました。",
      leftMiddleRightDownTemple:
        "2016.6 ~ 2021.10 : US : エンタープライズAIプラットフォームおよび小売インテリジェンスエンジンを設計・展開し、スケーラブルで安全なデータ駆動型自動化を実現。",
      leftTopTemple:
        "2012.8 ~ 2016.5 : シンガポール : シンガポール国立大学でソフトウェア工学、アルゴリズム、データ構造、および現代の技術開発において強固な基盤を築き、学士（B.S.）を取得しました。",
    },
    projectNarrative: {
      raft1: {
        title: "AIワークフロービルダー",
        stackLine: "TypeScript、LangChain、PostgreSQL、Docker",
        hoverExplanation:
          "Flowiseは、ドラッグ＆ドロップのコンポーネントでAIエージェント、チャットボット、LLMワークフローを構築できるオープンソースのビジュアルプラットフォームです。統合、API、アナリティクス、セルフホスト型のデプロイにより、開発者が自動化システムを素早く作成・テスト・展開できるよう支援します。",
      },
      raft2: {
        title: "過去の人物とチャット",
        stackLine: "ChatGPT、NLP、iOS、React Native、Android",
        hoverExplanation:
          "HelloHistoryは、歴史上の人物と生き生きとした対話ができるAI搭載のモバイルアプリです。史上最も影響力のある人物たちから、人生・歴史・世界について個人的な視点を得られます。",
      },
      raft3: {
        title: "AIオペレーティングシステム",
        stackLine:
          "TypeScript、Node.js、Gemini、Docker、RBAC、Redis",
      },
      raft4: {
        title: "OKR管理プラットフォーム",
        stackLine:
          "React、Node.js、PostgreSQL、Amplitude、OpenAI、SaaS、HubSpot",
        hoverExplanation:
          "Tabilityは、チームの方向性・説明責任・成果への集中を支える目標管理およびOKRプラットフォームです。目標設定、週次の進捗追跡、レポートの自動化を簡素化し、Jira、Asana、ClickUpなど日常の業務ツールとゴールをつなぎます。",
      },
      raft5: {
        title: "コミュニティイベントネットワーク",
        stackLine:
          "Next.js、TypeScript、SCSS、Node.js、Python、Knex.js",
        hoverExplanation:
          "Lumaは、ユーザーがイベントを作成し、予約済みのイベントを探せるプラットフォームです。チケットの購入・売買ができる仕組みも備えています。",
      },
    },
  },
  en: {
    site: {
      title: "Hiroshi Story",
      description:
        "Hiroshi Kaji — senior software engineer portfolio told through day and night landscapes.",
    },
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
    experienceNarrative: {
      underRightTopTemple:
        "2025.1 ~ Present: US : Built and optimized scalable full-stack microservices and APIs while strengthening security, performance, resilience, and CI/CD.",
      middleLeftDownTemple:
        "2021.11 ~ 2024.12: Tokyo, Japan : Built a multilingual AI-driven SDS processing and chemical data platform delivering 95% document classification accuracy, 99.9% uptime.",
      leftMiddleRightDownTemple:
        "2016.6 ~ 2021.10: US : Designed and deployed enterprise AI platforms and retail intelligence engine and delivering scalable, secure, data-driven automation.",
      leftTopTemple:
        "2012.8 ~ 2016.5: Singapore : Built a strong foundation in software engineering, algorithms, data structures, modern technology development and B.S. at the NUS",
    },
    projectNarrative: {
      raft1: {
        title: "AI Workflow Builder",
        stackLine: "TypeScript, LangChain, PostgreSQL, Docker",
        hoverExplanation:
          "Flowise is an open-source visual platform for building AI agents, chatbots, and LLM workflows using drag-and-drop components. It helps developers quickly create, test, and deploy automation systems with integrations, APIs, analytics, and self-hosted deployment options.",
      },
      raft2: {
        title: "Chat with the past",
        stackLine: "ChatGPT, NLP, iOS, React Native, Android",
        hoverExplanation:
          "HelloHistory is An AI powered Mobile App that lets you have life-like conversations with historical figures. Get a personal perspective on life, history, and the world from some of the most influential figures of all time.",
      },
      raft3: {
        title: "AI Operating System",
        stackLine:
          "TypeScript, Node.js, Gemini, Docker, RBAC, Redis",
      },
      raft4: {
        title: "OKR Management Platform",
        stackLine:
          "React, Node.js, PostgreSQL, Amplitude, OpenAI, SaaS, HubSpot",
        hoverExplanation:
          "Tability is a goal-tracking and OKR management platform that helps teams stay aligned, accountable, and focused on results. It simplifies setting objectives, tracking weekly progress, automating reports, and connecting goals with everyday work tools like Jira, Asana, and ClickUp.",
      },
      raft5: {
        title: "Community Events Network",
        stackLine:
          "Next.js, TypeScript, SCSS, Node.js, Python, Knex.js",
        hoverExplanation:
          "Luma is a platform that allows users to create and explore booked events. It provides a ticket purchasing system where users can buy and sell event tickets.",
      },
    },
  },
} as const;

export type PortfolioMessages = (typeof portfolioMessages)[PortfolioLocale];
