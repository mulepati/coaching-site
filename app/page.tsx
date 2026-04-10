import Image from "next/image";
import Link from "next/link";
import { PrinciplesAccordion } from "@/components/PrinciplesAccordion";
import { homeContent } from "@/data/site";

export default function HomePage() {
  return (
    <div className="space-y-7">
      <section className="border-b border-ink/15 pb-8">
        <div className="space-y-5">
          <p className="eyebrow">About</p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            {homeContent.title}
          </h1>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start md:gap-10">
            <div className="max-w-2xl text-lg leading-8 text-ink/76">
              <div className="space-y-4">
                <p>{homeContent.intro}</p>
                {homeContent.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-2">
                <Link
                  href={homeContent.lineageLink.href}
                  className="inline-flex text-base font-semibold text-primary hover:text-primary/80"
                >
                  {homeContent.lineageLink.label} →
                </Link>
              </div>
            </div>

            <div className="w-full max-w-[18rem] md:justify-self-end md:self-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/12 bg-paper/38 p-3 shadow-soft">
                <div className="absolute left-0 top-5 h-16 w-16 rounded-full bg-primary/14 blur-xl" />
                <div className="absolute bottom-4 right-2 h-20 w-20 rounded-full bg-secondary/16 blur-xl" />
                <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-ink/10">
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

      <section className="rounded-[2rem] border border-ink/12 bg-paper/38 px-5 py-6 md:px-6">
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
            className="explore-link rounded-[1.75rem] border border-ink/12 bg-paper/42 px-5 py-5 hover:bg-paper/55"
          >
            <p className="eyebrow">Explore</p>
            <h3 className="mt-3 text-2xl font-semibold">{link.title}</h3>
            <p className="mt-3 text-base leading-7 text-ink/72">
              {link.description}
            </p>
            <p className="mt-5 text-sm font-semibold text-primary">
              Visit page →
            </p>
          </Link>
        ))}
      </section>

      <Link
        href={homeContent.writingCallout.href}
        className="explore-link group relative block overflow-hidden rounded-[2rem] border border-ink/12 bg-paper/38 px-5 py-8 hover:bg-paper/55 md:px-6"
      >
        <div className="absolute left-8 top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute bottom-4 right-10 h-16 w-16 rounded-full bg-secondary/14 blur-2xl" />
        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Explore</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              {homeContent.writingCallout.title}
            </h2>
            <p className="text-base leading-8 text-ink/74">
              {homeContent.writingCallout.description}
            </p>
          </div>
          <p className="inline-flex text-sm font-semibold text-primary group-hover:text-primary/80">
            {homeContent.writingCallout.label} →
          </p>
        </div>
      </Link>
    </div>
  );
}
