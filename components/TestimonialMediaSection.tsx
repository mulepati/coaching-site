"use client";

import { useState } from "react";
import type { TestimonialMedia } from "@/data/testimonials";

type TestimonialMediaSectionProps = {
  items: TestimonialMedia[];
};

function MediaIcon({ type }: { type: TestimonialMedia["type"] }) {
  if (type === "video") {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 5.8c0-.8.9-1.2 1.5-.8l8.2 5.4c.6.4.6 1.4 0 1.8l-8.2 5.4c-.6.4-1.5 0-1.5-.8Z" />
      </svg>
    );
  }

  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 10v4" />
      <path d="M8 7v10" />
      <path d="M12 5v14" />
      <path d="M16 8v8" />
      <path d="M20 11v2" />
    </svg>
  );
}

export function TestimonialMediaSection({
  items,
}: TestimonialMediaSectionProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <section className="panel px-6 py-8 md:px-8">
      <div className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Featured Media</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Hear it directly
          </h2>
        </div>

        {activeItem ? (
          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-ink/10 bg-paper/42 p-5">
              <div className="space-y-4">
                <div>
                  <p className="eyebrow">{activeItem.context}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {activeItem.title ?? activeItem.name}
                  </h3>
                </div>
                {activeItem.type === "video" ? (
                  <video
                    controls
                    poster={activeItem.poster}
                    src={activeItem.src}
                    className="aspect-video w-full rounded-[1.25rem] border border-ink/10 bg-ink/10"
                  />
                ) : (
                  <audio controls src={activeItem.src} className="w-full" />
                )}
                {activeItem.quote ? (
                  <p className="text-base leading-8 text-ink/76">
                    "{activeItem.quote}"
                  </p>
                ) : null}
                {activeItem.type === "audio" && activeItem.transcript ? (
                  <p className="text-sm leading-7 text-ink/68">
                    {activeItem.transcript}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-3 content-start">
              {items.map((item) => {
                const isActive = item.id === activeItem.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`flex items-center gap-3 rounded-[1.25rem] border px-4 py-3 text-left transition-colors duration-200 ${
                      isActive
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-ink/10 bg-paper/42 text-ink hover:bg-paper/55"
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current/20">
                      <MediaIcon type={item.type} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-xs text-ink/58">
                        {item.context}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-ink/15 bg-paper/36 px-5 py-8 text-base leading-7 text-ink/62">
            Audio and video reflections will live here once the media files are
            added.
          </div>
        )}
      </div>
    </section>
  );
}
