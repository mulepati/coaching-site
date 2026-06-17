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
      className={`h-full rounded-[1.75rem] border border-ink/10 bg-paper/58 p-6 dark:border-white/10 dark:bg-dark-surface ${
        spacious ? "md:p-7" : ""
      } ${className}`}
    >
      <blockquote
        className={`space-y-4 leading-8 text-ink/82 dark:text-dark-text/82 ${
          spacious ? "text-lg" : "text-base"
        }`}
      >
        {testimonial.quote.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </blockquote>
      <div className="mt-5 border-t border-ink/10 pt-4 dark:border-white/10">
        {testimonial.href ? (
          <a
            href={testimonial.href}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-ink hover:text-primary dark:text-dark-text dark:hover:text-dark-accent"
          >
            {testimonial.name}
          </a>
        ) : (
          <p className="font-semibold text-ink dark:text-dark-text">{testimonial.name}</p>
        )}
        {testimonial.role ? (
          <p className="text-sm text-ink/62 dark:text-dark-text/62">{testimonial.role}</p>
        ) : null}
      </div>
    </article>
  );
}
