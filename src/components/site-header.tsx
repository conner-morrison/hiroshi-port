const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#technology", label: "Technology" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-10 flex justify-center px-3 pt-20 pb-3 sm:px-4 sm:pt-[5.25rem] sm:pb-4">
      <nav
        aria-label="On this page"
        className="flex max-w-4xl flex-wrap items-center justify-center gap-x-1 gap-y-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 shadow-lg backdrop-blur-md sm:gap-x-2 sm:px-4 sm:pr-20"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="rounded-full px-2.5 py-1.5 text-xs font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 sm:px-3 sm:text-sm"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
