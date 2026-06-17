type SectionBlockProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  paragraphs?: string[];
  items?: string[];
  children?: React.ReactNode;
};

export function SectionBlock({
  eyebrow,
  title,
  description,
  paragraphs,
  items,
  children,
}: SectionBlockProps) {
  return (
    <section className="panel px-6 py-8 md:px-8">
      <div className="max-w-3xl space-y-5">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="text-lg leading-8 text-ink/76 dark:text-dark-text/76">{description}</p>
        ) : null}
        {paragraphs?.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-ink/74 dark:text-dark-text/74">
            {paragraph}
          </p>
        ))}
        {items ? (
          <ul className="grid gap-3 text-base text-ink/76 dark:text-dark-text/76 md:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-ink/10 bg-paper/45 px-4 py-3 dark:border-white/10 dark:bg-dark-surface"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {children}
      </div>
    </section>
  );
}
