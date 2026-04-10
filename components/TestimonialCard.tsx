import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  spacious?: boolean;
  className?: string;
};

export function TestimonialCard({
  testimonial,
  spacious = false,
  className = "",
}: TestimonialCardProps) {
  return (
    <article
      className={`h-full rounded-[1.75rem] border border-ink/10 bg-paper/58 p-6 ${
        spacious ? "md:p-7" : ""
      } ${className}`}
    >
      <blockquote
        className={`space-y-4 leading-8 text-ink/82 ${
          spacious ? "text-lg" : "text-base"
        }`}
      >
        {testimonial.quote.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </blockquote>
      <div className="mt-5 border-t border-ink/10 pt-4">
        {testimonial.href ? (
          <a
            href={testimonial.href}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-ink hover:text-primary"
          >
            {testimonial.name}
          </a>
        ) : (
          <p className="font-semibold text-ink">{testimonial.name}</p>
        )}
        {testimonial.role ? (
          <p className="text-sm text-ink/62">{testimonial.role}</p>
        ) : null}
      </div>
    </article>
  );
}
