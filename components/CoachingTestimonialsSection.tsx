"use client";

import Link from "next/link";
import { useState } from "react";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TestimonialMediaSection } from "@/components/TestimonialMediaSection";
import type { Testimonial, TestimonialMedia } from "@/data/testimonials";

type CoachingTestimonialsSectionProps = {
  mediaItems: TestimonialMedia[];
  writtenItems: Testimonial[];
};

export function CoachingTestimonialsSection({
  mediaItems,
  writtenItems,
}: CoachingTestimonialsSectionProps) {
  const [showWritten, setShowWritten] = useState(false);

  return (
    <section className="space-y-4">
      <TestimonialMediaSection items={mediaItems} />

      <div className="panel px-6 py-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="eyebrow">Written Testimonials</p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              What people say after working together
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowWritten((value) => !value)}
              className="explore-link inline-flex items-center rounded-full border border-ink/15 bg-paper/56 px-4 py-2.5 text-sm font-semibold text-ink hover:border-primary/28 hover:bg-paper/76 hover:text-primary"
            >
              {showWritten ? "Hide" : "More"}
            </button>
            <Link href="/wall-of-love" className="text-sm font-semibold text-primary">
              Visit Wall of Love →
            </Link>
          </div>
        </div>

        {showWritten ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {writtenItems.map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.quote}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
