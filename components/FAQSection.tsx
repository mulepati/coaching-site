type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items: FAQItem[];
};

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="panel px-6 py-8 md:px-8">
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="eyebrow">Q&amp;A</p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Questions people usually ask
          </h2>
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="rounded-[1.5rem] border border-ink/10 bg-paper/46 px-5 py-4"
            >
              <summary className="cursor-pointer list-none text-base font-semibold">
                {item.question}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/72">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
