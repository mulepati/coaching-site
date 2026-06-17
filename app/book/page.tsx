"use client";

import { useState } from "react";

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "";

export default function BookPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_URL) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <section className="panel px-6 py-16 text-center md:px-8">
        <div className="mx-auto max-w-xl space-y-4">
          <p className="eyebrow">Received</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Application received.
          </h1>
          <p className="text-base leading-8 text-ink/72 dark:text-dark-text/72">
            Your answers are on their way to me. I&apos;ll be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="space-y-5">
      <section className="panel px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Apply</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            This is the{" "}
            <span className="italic text-primary dark:text-dark-accent">first step.</span>
          </h1>
          <p className="text-base leading-8 text-ink/72 dark:text-dark-text/72">
            Take 5–10 minutes to answer honestly. The more real you are here,
            the clearer it will be whether this is the right fit.
          </p>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact */}
        <div className="panel px-6 py-8 md:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your Name" htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="First & Last"
                required
                className={inputCls}
              />
            </Field>
            <Field label="Email Address" htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                required
                className={inputCls}
              />
            </Field>
          </div>
        </div>

        {/* Q1 */}
        <QuestionBlock number="01">
          <Field
            label="What is the ONE THING that if changed would make your life twice as enjoyable?"
            htmlFor="q1"
          >
            <textarea
              id="q1"
              name="q1_biggest_want"
              placeholder="My biggest want right now is..."
              required
              className={textareaCls}
            />
          </Field>
        </QuestionBlock>

        {/* Q2 */}
        <QuestionBlock number="02">
          <Field
            label="What are all the actions you are currently taking towards that goal?"
            hint="Even small steps count — list everything."
            htmlFor="q2"
          >
            <textarea
              id="q2"
              name="q2_current_actions"
              placeholder="Right now I am..."
              className={textareaCls}
            />
          </Field>
        </QuestionBlock>

        {/* Q3 */}
        <QuestionBlock number="03">
          <Field
            label="What do you believe is holding you back? What do you believe is stopping you from getting the life you want?"
            htmlFor="q3"
          >
            <textarea
              id="q3"
              name="q3_holding_back"
              placeholder="I believe what's stopping me is..."
              required
              className={textareaCls}
            />
          </Field>
        </QuestionBlock>

        {/* Q4: Scale */}
        <QuestionBlock number="04">
          <fieldset>
            <legend className="mb-3 text-base font-normal leading-snug text-ink dark:text-dark-text">
              On a scale of 1–10, how ready and willing are you to make the
              necessary changes to get the life you want?
              <span className="mt-1 block text-sm text-ink/50 dark:text-dark-text/50">
                There&apos;s no wrong answer — only an honest one.
              </span>
            </legend>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <label key={n} className="flex-1 cursor-pointer text-center">
                  <input
                    type="radio"
                    name="q4_readiness"
                    value={String(n)}
                    className="peer sr-only"
                  />
                  <span className="block rounded-lg border border-ink/15 bg-paper/60 py-2.5 text-sm font-semibold text-ink/50 transition-all peer-checked:border-primary peer-checked:bg-primary peer-checked:text-paper hover:border-primary/50 hover:text-primary dark:border-white/15 dark:bg-dark-surface dark:text-dark-text/50 dark:peer-checked:border-dark-accent dark:peer-checked:bg-dark-accent dark:peer-checked:text-dark-bg dark:hover:border-dark-accent/50 dark:hover:text-dark-accent">
                    {n}
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[11px] uppercase tracking-wide text-ink/40 dark:text-dark-text/40">
              <span>Not ready at all</span>
              <span>Absolutely all in</span>
            </div>
          </fieldset>
        </QuestionBlock>

        {/* Q5 */}
        <QuestionBlock number="05">
          <Field
            label="What would you like from me when it comes to coaching?"
            hint="How do you want to be supported? What does great coaching look like to you?"
            htmlFor="q5"
          >
            <textarea
              id="q5"
              name="q5_coaching_style"
              placeholder="I'd love for you to..."
              className={textareaCls}
            />
          </Field>
        </QuestionBlock>

        {/* Q6: Referral */}
        <QuestionBlock number="06">
          <Field label="How did you hear about me?" htmlFor="q6">
            <select id="q6" name="q6_referral_source" className={inputCls}>
              <option value="" disabled>
                Select one...
              </option>
              <option value="instagram">Instagram</option>
              <option value="tiktok">TikTok</option>
              <option value="youtube">YouTube</option>
              <option value="facebook">Facebook</option>
              <option value="referral">Referred by a friend or client</option>
              <option value="google">Google search</option>
              <option value="podcast">Podcast</option>
              <option value="other">Other</option>
            </select>
          </Field>
        </QuestionBlock>

        {/* Q7 */}
        <QuestionBlock number="07">
          <Field
            label="Anything else you want me to know?"
            hint="Anything on your heart."
            htmlFor="q7"
          >
            <textarea
              id="q7"
              name="q7_anything_else"
              placeholder="One more thing..."
              className={textareaCls}
            />
          </Field>
        </QuestionBlock>

        <div className="panel px-6 py-8 text-center md:px-8">
          <p className="mb-5 text-sm leading-7 text-ink/54 dark:text-dark-text/54">
            Your answers go directly to me before our call.
            <br />
            Everything you share is completely confidential.
          </p>
          {status === "error" && (
            <p className="mb-4 text-sm text-primary dark:text-dark-accent">
              Something went wrong — please try again or email me directly.
            </p>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-paper shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/92 disabled:opacity-60 dark:bg-dark-accent dark:text-dark-bg dark:shadow-none dark:hover:bg-dark-accent/90"
          >
            {status === "submitting" ? "Sending…" : "Submit My Answers →"}
          </button>
        </div>
      </form>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-paper/60 px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/12 dark:border-white/15 dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-dark-text/30 dark:focus:border-dark-accent/50 dark:focus:ring-dark-accent/12";

const textareaCls =
  "w-full resize-y rounded-xl border border-ink/15 bg-paper/60 px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/12 min-h-[110px] leading-relaxed dark:border-white/15 dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-dark-text/30 dark:focus:border-dark-accent/50 dark:focus:ring-dark-accent/12";

function QuestionBlock({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="panel px-6 py-8 md:px-8">
      <p className="eyebrow mb-3">Question {number}</p>
      {children}
    </div>
  );
}

function Field({
  label,
  hint,
  htmlFor,
  children,
}: {
  label: string;
  hint?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-base leading-snug text-ink dark:text-dark-text">
        {label}
        {hint && (
          <span className="mt-1 block text-sm text-ink/50 dark:text-dark-text/50">{hint}</span>
        )}
      </label>
      {children}
    </div>
  );
}
