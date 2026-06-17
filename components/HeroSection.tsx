import { CTAButton } from "@/components/CTAButton";

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  supportingLine?: string;
  cta?: {
    label: string;
    href: string;
  };
  visualLabel?: string;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  supportingLine,
  cta,
  visualLabel,
}: HeroSectionProps) {
  return (
    <section className="panel overflow-hidden px-6 py-10 md:px-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-5">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h1>
          <div className="max-w-2xl space-y-3 text-lg leading-8 text-ink/76 dark:text-dark-text/76">
            <p>{description}</p>
            {supportingLine ? <p>{supportingLine}</p> : null}
          </div>
          {cta ? <CTAButton href={cta.href} label={cta.label} /> : null}
        </div>
        <div className="relative min-h-64 rounded-[2rem] border border-ink/10 bg-paper/30 p-5 dark:border-white/10 dark:bg-dark-surface">
          <div className="absolute inset-5 rounded-[1.5rem] border border-dashed border-primary/20 dark:border-dark-accent/20" />
          <div className="absolute inset-x-10 top-8 h-16 rounded-full bg-primary/14 blur-2xl dark:bg-dark-accent/10" />
          <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full bg-secondary/18 blur-2xl" />
          <div className="relative flex h-full min-h-52 flex-col justify-between rounded-[1.5rem] bg-paper/52 p-6 dark:bg-dark-bg/50">
            <span className="eyebrow">Visual</span>
            <div>
              <p className="text-xl font-semibold text-ink dark:text-dark-text">
                {visualLabel ?? "GIF placeholder"}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ink/62 dark:text-dark-text/62">
                Designed as a warm placeholder now, with room for real photos,
                motion, or pixel art later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
