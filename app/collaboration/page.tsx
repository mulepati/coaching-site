import { CTAButton } from "@/components/CTAButton";
import { CollaborationSection } from "@/components/CollaborationSection";
import { collaborationPage } from "@/data/collaboration";

export default function CollaborationPage() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-ink/12 bg-paper/44 px-6 py-10 dark:border-white/10 dark:bg-dark-surface md:px-8 md:py-12">
        <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-primary/14 blur-3xl dark:bg-dark-accent/10" />
        <div className="absolute bottom-6 right-8 h-28 w-28 rounded-full bg-secondary/18 blur-3xl" />
        <div className="relative max-w-3xl space-y-4">
          <p className="eyebrow">Collaboration</p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
            Exploratory work with a little more texture.
          </h1>
          <div className="space-y-3 text-lg leading-8 text-ink/74 dark:text-dark-text/74">
            <p>{collaborationPage.intro}</p>
            <p>{collaborationPage.outro}</p>
          </div>
        </div>
      </section>

      {collaborationPage.sections.map((section, index) => (
        <CollaborationSection
          key={section.title}
          title={section.title}
          description={section.description}
          visualVariant={section.visualVariant}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          links={section.links}
          overviewTitle={section.overviewTitle}
          overviewItems={section.overviewItems}
          reverse={index % 2 === 1}
        />
      ))}

      <section className="panel px-6 py-10 text-center md:px-8">
        <p className="eyebrow">Reach Out</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Let&apos;s Chat
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-ink/74 dark:text-dark-text/74">
          If you have a project, invitation, or half-formed idea, that&apos;s
          enough to start.
        </p>
        <div className="mt-6">
          <CTAButton
            href={collaborationPage.cta.href}
            label={collaborationPage.cta.label}
          />
        </div>
      </section>
    </div>
  );
}
