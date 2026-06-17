import {
  directTraining,
  frameworkGroups,
  lineagePage,
  teachersAndInfluences,
  traditions,
  type PersonEntry,
} from "@/data/lineage";

function hasRealLink(href: string) {
  return href !== "ADD_LINK";
}

function PersonLine({
  entry,
  showMetadata = false,
}: {
  entry: PersonEntry;
  showMetadata?: boolean;
}) {
  const isLinked = hasRealLink(entry.href);
  const resolvedStatus =
    entry.statusLabel !== undefined
      ? entry.statusLabel
      : entry.durationLabel
        ? entry.ongoing
          ? "ongoing"
          : "completed"
        : null;
  const metadata = entry.durationLabel
    ? resolvedStatus
      ? `${entry.durationLabel} · ${resolvedStatus}`
      : entry.durationLabel
    : null;

  const content = (
    <div className="space-y-1">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-xl font-semibold tracking-tight text-ink dark:text-dark-text">
          {entry.name}
        </h3>
        <p className="text-sm text-ink/58 dark:text-dark-text/58">{entry.role ?? entry.note}</p>
        {showMetadata && metadata ? (
          <p className="text-sm text-ink/48 dark:text-dark-text/48">{metadata}</p>
        ) : null}
      </div>
      {!showMetadata && metadata ? (
        <p className="text-sm text-ink/48 dark:text-dark-text/48">{metadata}</p>
      ) : null}
      {!isLinked ? (
        <p className="text-xs uppercase tracking-[0.18em] text-ink/40 dark:text-dark-text/40">
          ADD_LINK
        </p>
      ) : null}
    </div>
  );

  const classes =
    "block border-b border-ink/10 py-4 last:border-b-0 transition-colors duration-200 dark:border-white/10";

  if (isLinked) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noreferrer"
        className={`${classes} hover:text-primary dark:hover:text-dark-accent`}
      >
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}

export default function LineagePage() {
  return (
    <div className="space-y-6">
      <section className="panel px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-4xl space-y-5">
          <p className="eyebrow">Lineage</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {lineagePage.title}
          </h1>
          <div className="max-w-3xl space-y-4 text-lg leading-8 text-ink/76 dark:text-dark-text/76">
            <p>{lineagePage.intro}</p>
            <p>{lineagePage.supportingLine}</p>
          </div>
        </div>
      </section>

      <section className="panel px-6 py-8 md:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            People I&apos;ve Trained With
          </h2>
          <div>
            {directTraining.map((entry) => (
              <PersonLine key={`${entry.name}-${entry.role}`} entry={entry} showMetadata />
            ))}
          </div>
        </div>
      </section>

      <section className="panel px-6 py-8 md:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Teachers &amp; Influences
          </h2>
          <div>
            {teachersAndInfluences.map((entry) => (
              <PersonLine key={`${entry.name}-${entry.note}`} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="panel px-6 py-8 md:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Traditions</h2>
          <div className="space-y-4">
            {traditions.map((tradition) => (
              <article
                key={tradition.name}
                className="border-b border-ink/10 pb-4 last:border-b-0 last:pb-0 dark:border-white/10"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {tradition.name}
                </h3>
                {tradition.note ? (
                  <p className="mt-2 text-sm leading-7 text-ink/72 dark:text-dark-text/72">
                    {tradition.note}
                  </p>
                ) : null}
                {tradition.related.length > 0 ? (
                  <p className="mt-4 text-sm text-ink/58 dark:text-dark-text/58">
                    Related: {tradition.related.join(", ")}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel px-6 py-8 md:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Practices &amp; Frameworks
          </h2>
          <div className="space-y-6">
            {frameworkGroups.map((group) => (
              <article
                key={group.name}
                className="border-b border-ink/10 pb-6 last:border-b-0 last:pb-0 dark:border-white/10"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {group.name}
                </h3>
                <ul className="mt-4 grid gap-2 text-sm leading-7 text-ink/74 dark:text-dark-text/74 md:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2rem] border border-primary/16 bg-primary/8 px-6 py-8 dark:border-dark-accent/16 dark:bg-dark-accent/8 md:px-8">
        <div className="absolute left-8 top-6 h-16 w-16 rounded-full bg-primary/10 blur-2xl dark:bg-dark-accent/8" />
        <div className="absolute bottom-4 right-10 h-14 w-14 rounded-full bg-secondary/12 blur-2xl" />
        <div className="relative max-w-3xl space-y-4">
          <div className="flex items-center gap-3 text-primary/70 dark:text-dark-accent/70">
            <span className="h-px w-12 bg-primary/30 dark:bg-dark-accent/30" />
            <span className="eyebrow">Acknowledgment</span>
          </div>
          <p className="text-xl leading-8 text-ink/76 dark:text-dark-text/76 md:text-2xl">
            {lineagePage.closingNote}
          </p>
        </div>
      </section>
    </div>
  );
}
