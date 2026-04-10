import Link from "next/link";
import { getWritingEntries, writingPage } from "@/lib/writing";

export default function WritingPage() {
  const writingEntries = getWritingEntries();

  return (
    <div className="space-y-6">
      <section className="panel px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-3xl space-y-5">
          <p className="eyebrow">Writing</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {writingPage.title}
          </h1>
          <p className="text-lg leading-8 text-ink/76">{writingPage.intro}</p>
        </div>
      </section>

      <section className="panel px-6 py-8 md:px-8">
        <div>
          {writingEntries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/writing/${entry.slug}`}
              className="block border-b border-ink/10 py-6 transition-colors duration-200 first:pt-0 last:border-b-0 last:pb-0 hover:text-primary"
            >
              <div className="space-y-2">
                <p className="eyebrow">
                  {entry.type} · {entry.context} · {entry.dateLabel}
                </p>
                <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight">
                      {entry.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-ink/72">
                      {entry.excerpt}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    Read piece →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
