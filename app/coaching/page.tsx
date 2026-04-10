import { CTAButton } from "@/components/CTAButton";
import { CoachingTestimonialsSection } from "@/components/CoachingTestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { SectionBlock } from "@/components/SectionBlock";
import { coachingPage } from "@/data/coaching";
import { testimonialMedia, testimonials } from "@/data/testimonials";

const featuredTestimonials = testimonials
  .filter((item) => item.featured)
  .slice(0, 4);

const coachingMedia = testimonialMedia.filter(
  (item) => item.context === "1:1 Coaching",
);

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

      <SectionBlock
        eyebrow={coachingPage.description.eyebrow}
        title={coachingPage.description.title}
        paragraphs={coachingPage.description.paragraphs}
      />

      {coachingMedia.length > 0 || featuredTestimonials.length > 0 ? (
        <CoachingTestimonialsSection
          mediaItems={coachingMedia}
          writtenItems={featuredTestimonials}
        />
      ) : (
        <section className="panel px-6 py-8 md:px-8">
          <div className="space-y-2">
            <p className="eyebrow">Testimonials</p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Hear it directly
            </h2>
          </div>
          <div className="mt-6 rounded-[1.75rem] border border-dashed border-ink/15 bg-paper/36 px-5 py-8 text-base leading-7 text-ink/62">
            Add testimonial media or featured written testimonials in{" "}
            <code>data/testimonials.ts</code>.
          </div>
        </section>
      )}

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
