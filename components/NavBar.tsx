import Link from "next/link";

const navItems = [
  { href: "/coaching", label: "Coaching" },
  { href: "/writing", label: "Writing" },
  { href: "/wall-of-love", label: "Wall of Love" },
];

export function NavBar() {
  return (
    <header className="mb-8">
      <div className="flex flex-col gap-4 border-b border-ink/15 pb-5 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.18em] text-ink"
        >
          Samek
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-2 text-sm text-ink/78">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full border border-transparent px-3 py-2 hover:border-ink/10 hover:bg-paper/35 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
