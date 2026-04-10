import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAdjacentWritingEntries,
  getWritingEntry,
  getWritingEntries,
} from "@/lib/writing";

type WritingEntryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getWritingEntries().map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: WritingEntryPageProps) {
  const { slug } = await params;
  const entry = getWritingEntry(slug);

  if (!entry) {
    return {
      title: "Writing",
    };
  }

  return {
    title: `${entry.title} | Writing`,
    description: entry.excerpt,
  };
}

export default async function WritingEntryPage({
  params,
}: WritingEntryPageProps) {
  const { slug } = await params;
  const entry = getWritingEntry(slug);

  if (!entry) {
    notFound();
  }

  const { previous, next } = getAdjacentWritingEntries(entry.slug);

  return (
    <article className="space-y-6">
      <section className="panel px-6 py-10 md:px-8 md:py-12">
        <Link
          href="/writing"
          className="inline-flex text-sm font-semibold text-primary hover:text-primary/80"
        >
          ← Back to writing
        </Link>
        <div className="mt-8 max-w-3xl space-y-4">
          <p className="eyebrow">
            {entry.type} · {entry.context} · {entry.dateLabel}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {entry.title}
          </h1>
          <p className="text-lg leading-8 text-ink/72">{entry.excerpt}</p>
        </div>
      </section>

      <section className="panel px-6 py-8 md:px-8">
        <div className="max-w-3xl space-y-4 text-lg leading-8 text-ink/76">
          {entry.lines.map((line, index) =>
            line ? (
              <p key={`${entry.slug}-${index}`}>{line}</p>
            ) : (
              <div key={`${entry.slug}-${index}`} className="h-2" />
            ),
          )}
        </div>
      </section>

      <nav
        aria-label="Writing navigation"
        className="grid gap-4 md:grid-cols-2"
      >
        {previous ? (
          <Link
            href={`/writing/${previous.slug}`}
            className="explore-link rounded-[1.75rem] border border-ink/12 bg-paper/42 px-5 py-5 hover:bg-paper/55"
          >
            <p className="eyebrow">Previous</p>
            <p className="mt-2 text-xl font-semibold">{previous.title}</p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/writing/${next.slug}`}
            className="explore-link rounded-[1.75rem] border border-ink/12 bg-paper/42 px-5 py-5 text-left hover:bg-paper/55 md:text-right"
          >
            <p className="eyebrow">Next</p>
            <p className="mt-2 text-xl font-semibold">{next.title}</p>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
