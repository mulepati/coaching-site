"use client";

import { useState } from "react";

type Principle = {
  icon: string;
  title: string;
  body: string;
};

type PrinciplesAccordionProps = {
  principles: Principle[];
};

function PrincipleIcon({ icon }: { icon: string }) {
  const strokeProps = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const fillProps = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  };

  switch (icon) {
    case "love":
      return (
        <svg {...strokeProps}>
          <path d="M12 21C11.1 19.9 8.6 17.7 6.4 15.4C4.3 13.2 3.2 11.3 3.2 9C3.2 6.4 5.2 4.5 7.8 4.5C9.9 4.5 11.2 5.6 12 7.1C12.8 5.6 14.1 4.5 16.2 4.5C18.8 4.5 20.8 6.4 20.8 9C20.8 11.3 19.7 13.2 17.6 15.4C15.4 17.7 12.9 19.9 12 21Z" />
        </svg>
      );
    case "wonder":
      return (
        <svg {...strokeProps}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2.5v3" />
          <path d="M12 18.5v3" />
          <path d="m5.3 5.3 2.1 2.1" />
          <path d="m16.6 16.6 2.1 2.1" />
          <path d="M2.5 12h3" />
          <path d="M18.5 12h3" />
          <path d="m5.3 18.7 2.1-2.1" />
          <path d="m16.6 7.4 2.1-2.1" />
        </svg>
      );
    case "play":
      return (
        <svg {...fillProps}>
          <path d="M8 6.8c0-.8.9-1.3 1.6-.8l8 5.2c.7.4.7 1.4 0 1.8l-8 5.2c-.7.5-1.6 0-1.6-.8Z" />
        </svg>
      );
    case "reality":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12.5658 26.1826C10.8553 27.3544 10 29.2936 10 32.0003C10 36.0604 14.9753 43.0003 19.4618 43.0003C23.9483 43.0003 26.5502 43.0003 30.9415 43.0003C35.3328 43.0003 38 39.1497 38 36.0604C38 31.7101 38 27.3597 38 23.0094C38 21.3526 36.6569 20.0094 35 20.0094H34.9909C33.3391 20.0094 32 21.3485 32 23.0003" />
          <path d="M13.9812 28.4453V8.006C13.9812 6.35049 15.3233 5.00844 16.9788 5.00844C16.9815 5.00844 16.9843 5.00844 16.9871 5.00845C18.6485 5.01305 19.9929 6.36119 19.9929 8.02263V23.5921" />
          <path d="M19.9929 23.0085V19.0156C19.9929 17.3502 21.343 16.0001 23.0084 16.0001C24.6738 16.0001 26.0239 17.3502 26.0239 19.0156V23.0085" />
          <path d="M26 22.7159V20.0036C26 18.3467 27.3431 17.0036 29 17.0036C30.6569 17.0036 32 18.3467 32 20.0036V23.0036" />
        </svg>
      );
    case "wholeness":
      return (
        <svg {...strokeProps}>
          <circle cx="12" cy="12" r="2.6" />
          <path d="M12 4.2a7.8 7.8 0 1 1 0 15.6a7.8 7.8 0 1 1 0-15.6Z" />
          <path d="M12 1.9v2.1" />
          <path d="M12 20v2.1" />
          <path d="M1.9 12H4" />
          <path d="M20 12h2.1" />
        </svg>
      );
    default:
      return (
        <svg {...strokeProps}>
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
}

export function PrinciplesAccordion({
  principles,
}: PrinciplesAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  function toggleItem(index: number) {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return (
    <div className="mt-6 grid gap-3">
      {principles.map((principle, index) => {
        const isOpen = openItems.includes(index);

        return (
          <div
            key={principle.title}
            className="rounded-[1.5rem] border border-ink/10 bg-paper/50 px-4 py-4"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggleItem(index)}
              className="principle-trigger flex w-full select-none items-center gap-4 text-left"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/8 text-primary">
                <PrincipleIcon icon={principle.icon} />
              </span>
              <span
                className={`text-lg font-semibold transition-colors duration-200 ${
                  isOpen ? "text-primary" : "text-ink"
                }`}
              >
                {principle.title}
              </span>
            </button>
            <div
              className={`principle-panel ${isOpen ? "is-open" : ""}`}
              aria-hidden={!isOpen}
            >
              <div className="overflow-hidden">
                <p className="ml-14 pt-4 text-base leading-8 text-ink/74">
                  {principle.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
