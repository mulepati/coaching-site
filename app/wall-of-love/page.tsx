import Link from "next/link";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TestimonialMediaSection } from "@/components/TestimonialMediaSection";
import {
  testimonialCategories,
  testimonialMedia,
  testimonials,
} from "@/data/testimonials";
import { bookingUrl } from "@/data/site";

export default function WallOfLovePage() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-ink/12 bg-paper/44 px-6 py-10 md:px-8 md:py-12">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-secondary/16 blur-3xl" />
        <div className="relative max-w-4xl space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Wall of Love
          </h1>
        </div>
      </section>

      <TestimonialMediaSection items={testimonialMedia} />

      {testimonialCategories.map((category) => {
        const categoryTestimonials = testimonials.filter(
          (testimonial) => testimonial.category === category,
        );

        return (
          <section key={category} className="panel px-6 py-8 md:px-8">
            <div className="max-w-3xl space-y-3">
              <p className="eyebrow">{category}</p>
              <h2 className="text-3xl font-semibold tracking-tight">
                {category}
              </h2>
            </div>
            {categoryTestimonials.length > 0 ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {categoryTestimonials.map((testimonial) => {
                  const shouldSpan =
                    category !== "Retreat Facilitation" &&
                    testimonial.quote.length > 520;

                  return (
                    <TestimonialCard
                      key={`${testimonial.name}-${testimonial.quote}`}
                      testimonial={testimonial}
                      className={shouldSpan ? "md:col-span-2" : undefined}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="mt-6 rounded-[1.75rem] border border-dashed border-ink/15 bg-paper/36 px-5 py-8 text-base leading-7 text-ink/62">
                This section is ready for testimonials as soon as they&apos;re
                added to <code>data/testimonials.ts</code>.
              </div>
            )}
          </section>
        );
      })}

      <section className="relative overflow-hidden rounded-[2rem] border border-primary/16 bg-primary/8 px-6 py-9 text-center md:px-8">
        <div className="absolute left-10 top-6 h-16 w-16 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute bottom-4 right-12 h-16 w-16 rounded-full bg-secondary/14 blur-2xl" />
        <div className="relative mx-auto max-w-2xl space-y-4">
          <p className="eyebrow">Experience It Directly</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Want to feel the work for yourself?
          </h2>
          <p className="text-base leading-8 text-ink/74">
            The first coaching session is free. Bring something real, and we
            can work with it together.
          </p>
          <Link
            href={bookingUrl}
            className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-paper hover:-translate-y-0.5 hover:bg-primary/92"
          >
            Book a free session
          </Link>
        </div>
      </section>
    </div>
  );
}
