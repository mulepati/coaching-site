import Link from "next/link";
import type { CollaborationLink } from "@/data/collaboration";

type CollaborationSectionProps = {
  title: string;
  description: string;
  visualVariant: "podcasts" | "facilitation" | "retreats" | "handpan";
  imageSrc?: string;
  imageAlt?: string;
  links: CollaborationLink[];
  overviewTitle?: string;
  overviewItems?: string[];
  reverse?: boolean;
};

function FacilitationVisual() {
  return (
    <div className="relative flex h-full min-h-[18rem] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-gradient-to-br from-paper/68 via-paper/44 to-secondary/14 p-5 dark:border-white/10 dark:from-dark-surface dark:via-dark-surface/70 dark:to-secondary/8">
      <div className="absolute right-5 top-5 h-14 w-14 rounded-full bg-secondary/14 blur-2xl" />
      <div className="relative grid w-full gap-3 md:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.25rem] border border-ink/10 bg-paper/72 p-4 dark:border-white/10 dark:bg-dark-bg/70">
          <p className="eyebrow">Container Design</p>
          <div className="mt-4 space-y-3">
            <div className="h-2 w-4/5 rounded-full bg-ink/12 dark:bg-white/12" />
            <div className="h-2 w-2/3 rounded-full bg-ink/10 dark:bg-white/10" />
            <div className="h-2 w-3/5 rounded-full bg-ink/10 dark:bg-white/10" />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[1.25rem] border border-primary/12 bg-primary/8 p-4 dark:border-dark-accent/12 dark:bg-dark-accent/8">
            <p className="text-sm font-semibold text-ink dark:text-dark-text">Presence</p>
          </div>
          <div className="rounded-[1.25rem] border border-secondary/18 bg-secondary/10 p-4">
            <p className="text-sm font-semibold text-ink dark:text-dark-text">Clarity</p>
          </div>
          <div className="rounded-[1.25rem] border border-ink/10 bg-paper/60 p-4 dark:border-white/10 dark:bg-dark-surface">
            <p className="text-sm font-semibold text-ink dark:text-dark-text">Participation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageVisual({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="relative flex h-full min-h-[18rem] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-gradient-to-br from-paper/62 via-paper/42 to-primary/10 p-5 dark:border-white/10 dark:from-dark-surface dark:via-dark-surface/70 dark:to-dark-accent/8">
      <div className="absolute left-8 top-6 h-16 w-16 rounded-full bg-primary/14 blur-2xl dark:bg-dark-accent/10" />
      <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-secondary/16 blur-3xl" />
      <div className="relative flex h-full w-full items-center justify-center rounded-[1.25rem] border border-ink/10 bg-paper/46 p-4 dark:border-white/10 dark:bg-dark-surface">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full min-h-[15rem] w-full rounded-[1rem] object-cover"
        />
      </div>
    </div>
  );
}

function CollaborationVisual({
  visualVariant,
  imageSrc,
  imageAlt,
}: {
  visualVariant: CollaborationSectionProps["visualVariant"];
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (imageSrc && imageAlt) {
    return <ImageVisual imageSrc={imageSrc} imageAlt={imageAlt} />;
  }

  switch (visualVariant) {
    case "facilitation":
      return <FacilitationVisual />;
    case "podcasts":
    case "retreats":
    case "handpan":
      return <FacilitationVisual />;
  }
}

export function CollaborationSection({
  title,
  description,
  visualVariant,
  imageSrc,
  imageAlt,
  links,
  overviewTitle,
  overviewItems,
  reverse = false,
}: CollaborationSectionProps) {
  return (
    <section className="panel overflow-hidden px-6 py-6 md:px-8 md:py-8">
      <div
        className={`grid gap-6 md:grid-cols-2 md:items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative">
          <CollaborationVisual
            visualVariant={visualVariant}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
          />
        </div>
        <div className="space-y-5">
          <div className="space-y-4">
            <p className="eyebrow">Collaboration</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="max-w-xl text-base leading-8 text-ink/74 dark:text-dark-text/74">
              {description}
            </p>
          </div>

          {overviewTitle && overviewItems && overviewItems.length > 0 ? (
            <div className="rounded-[1.5rem] border border-ink/10 bg-paper/44 p-5 dark:border-white/10 dark:bg-dark-bg/60">
              <p className="eyebrow">{overviewTitle}</p>
              <div className="mt-4 space-y-3">
                {overviewItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 dark:bg-dark-accent/70" />
                    <p className="text-sm leading-7 text-ink/72 dark:text-dark-text/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {links.length > 0 ? (
            <div className="space-y-3">
              <p className="eyebrow">Selected Links</p>
              <div className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="explore-link inline-flex items-center rounded-full border border-ink/15 bg-paper/56 px-4 py-2.5 text-sm font-semibold text-ink hover:border-primary/28 hover:bg-paper/76 hover:text-primary dark:border-white/15 dark:bg-dark-surface dark:text-dark-text dark:hover:border-dark-accent/28 dark:hover:bg-dark-border dark:hover:text-dark-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
