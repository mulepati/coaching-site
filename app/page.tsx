import Image from "next/image";
import Link from "next/link";
import { PrinciplesAccordion } from "@/components/PrinciplesAccordion";
import { homeContent } from "@/data/site";

export default function HomePage() {
  return (
    <div className="space-y-7">
      <section className="border-b border-ink/15 pb-8 dark:border-white/10">
        <div className="space-y-5">
          <p className="eyebrow">About</p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            {homeContent.title}
          </h1>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start md:gap-10">
            <div className="max-w-2xl text-lg leading-8 text-ink/76 dark:text-dark-text/76">
              <div className="space-y-4">
                <p>{homeContent.intro}</p>
                {homeContent.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-2">
                <Link
                  href={homeContent.lineageLink.href}
                  className="inline-flex text-base font-semibold text-primary hover:text-primary/80 dark:text-dark-accent dark:hover:text-dark-accent/80"
                >
                  {homeContent.lineageLink.label} →
                </Link>
              </div>
            </div>

            <div className="w-full max-w-[18rem] md:justify-self-end md:self-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/12 bg-paper/38 p-3 shadow-soft dark:border-white/10 dark:bg-dark-surface dark:shadow-none">
                <div className="absolute left-0 top-5 h-16 w-16 rounded-full bg-primary/14 blur-xl dark:bg-dark-accent/10" />
                <div className="absolute bottom-4 right-2 h-20 w-20 rounded-full bg-secondary/16 blur-xl" />
                <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-ink/10 dark:border-white/10">
                  <Image
                    src="/samek-about.jpeg"
                    alt="Portrait of Samek"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 18rem, 16rem"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-ink/12 bg-paper/38 px-5 py-6 dark:border-white/10 dark:bg-dark-surface md:px-6">
        <div className="space-y-2">
          <p className="eyebrow">Principles</p>
          <h2 className="text-3xl font-semibold tracking-tight">My Principles</h2>
        </div>
        <PrinciplesAccordion principles={homeContent.principles} />
      </section>

      <section className="grid gap-4 pt-1 md:grid-cols-3">
        {homeContent.quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="explore-link rounded-[1.75rem] border border-ink/12 bg-paper/42 px-5 py-5 hover:bg-paper/55 dark:border-white/10 dark:bg-dark-surface dark:hover:bg-dark-border"
          >
            <p className="eyebrow">Explore</p>
            <h3 className="mt-3 text-2xl font-semibold">{link.title}</h3>
            <p className="mt-3 text-base leading-7 text-ink/72 dark:text-dark-text/72">
              {link.description}
            </p>
            <p className="mt-5 text-sm font-semibold text-primary dark:text-dark-accent">
              Visit page →
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
