"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { href: "/coaching", label: "Coaching" },
  { href: "/writing", label: "Writing" },
  { href: "/wall-of-love", label: "Wall of Love" },
];

function SunIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="mb-8">
      <div className="flex flex-col gap-4 border-b border-ink/15 pb-5 dark:border-white/10 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.18em] text-ink dark:text-dark-text"
        >
          Samek
        </Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap gap-2 text-sm text-ink/78 dark:text-dark-text/78">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full border border-transparent px-3 py-2 hover:border-ink/10 hover:bg-paper/35 hover:text-primary dark:hover:border-white/10 dark:hover:bg-dark-surface dark:hover:text-dark-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition hover:border-ink/30 hover:text-ink dark:border-white/10 dark:text-dark-text/70 dark:hover:border-white/20 dark:hover:text-dark-text"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
