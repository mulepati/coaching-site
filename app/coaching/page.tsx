import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { FAQSection } from "@/components/FAQSection";
import { SectionBlock } from "@/components/SectionBlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import { coachingPage } from "@/data/coaching";
import { testimonials } from "@/data/testimonials";

const featuredTestimonials = testimonials
  .filter((item) => item.featured)
  .slice(0, 4);

export default function CoachingPage() {
  return (
    <div className="space-y-5">
      <section className="panel px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-3xl space-y-5">
          <p className="eyebrow">{coachingPage.hero.eyebrow}</p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
            {coachingPage.hero.title}
          </h1>
          <div className="space-y-3 text-lg leading-8 text-ink/76">
            <p>{coachingPage.hero.description}</p>
            <p>{coachingPage.hero.supportingLine}</p>
          </div>
          <div>
            <CTAButton
              href={coachingPage.hero.cta.href}
              label={coachingPage.hero.cta.label}
            />
          </div>
        </div>
      </section>

      <section className="panel px-6 py-8 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="eyebrow">Testimonials</p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              What people say after working together
            </h2>
          </div>
          <Link href="/wall-of-love" className="text-sm font-semibold text-primary">
            See more on the Wall of Love →
          </Link>
        </div>
        {featuredTestimonials.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.quote}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-[1.75rem] border border-dashed border-ink/15 bg-paper/36 px-5 py-8 text-base leading-7 text-ink/62">
            Add testimonials in <code>data/testimonials.ts</code> and featured
            ones will appear here automatically.
          </div>
        )}
      </section>

      <SectionBlock
        eyebrow={coachingPage.description.eyebrow}
        title={coachingPage.description.title}
        paragraphs={coachingPage.description.paragraphs}
      />

      <FAQSection items={coachingPage.faq} />

      <section className="rounded-[2rem] border border-primary/18 bg-primary/8 px-6 py-10 text-center md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {coachingPage.finalCta.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-ink/74">
          Start with a free 60-minute coaching session.
        </p>
        <div className="mt-6">
          <CTAButton
            href={coachingPage.finalCta.href}
            label={coachingPage.finalCta.label}
          />
        </div>
      </section>
    </div>
  );
}
