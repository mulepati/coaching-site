import { useState } from "react";

export default function Site() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setStatus("loading");
    try {
      // Replace with your Formspree/Getform/own API endpoint
      const res = await fetch("https://formspree.io/f/XXXXXXXX", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError("Something went wrong. Please email me instead.");
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please email me instead.");
    }
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-neutral-900" />
            <span className="font-semibold tracking-tight">Samek</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#who" className="hover:opacity-70">Who I Am</a>
            <a href="#topics" className="hover:opacity-70">What I Coach</a>
            <a href="#approach" className="hover:opacity-70">My Approach</a>
            <a href="#background" className="hover:opacity-70">Background</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-xl border border-neutral-900 px-3 py-1.5 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">Book intro</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-16 md:py-24 xl:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight">Somatic Coaching for Clarity, Agency, and Ease.</h1>
            <p className="mt-4 text-lg text-neutral-600">For men (24–40) who feel stuck, overwhelmed, or like life is “good” but not fulfilling.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-2xl bg-neutral-900 px-5 py-3 text-white font-medium hover:opacity-90">Book a free intro session</a>
              <a href="#approach" className="inline-flex items-center rounded-2xl border border-neutral-300 px-5 py-3 font-medium hover:bg-neutral-50">How it works</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
              <span>Also: </span>
              <a className="underline hover:no-underline" href="https://harryandsamek.com" target="_blank" rel="noreferrer">Attunement Residency</a>
              <span>•</span>
              <a className="underline hover:no-underline" href="#" target="_blank" rel="noreferrer">Attunement Podcast</a>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section id="who" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-14 md:py-20 xl:py-24 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Who I Am</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">I’m Samek. I help people untangle the emotional knots around money, dating, work, and creative life — so you can move from stuckness into clarity and aligned action. My style is grounded, direct, and playful. We keep it human and practical.</p>
            <p className="mt-4 text-neutral-700 leading-relaxed">This work is about empowerment. You already have what you need — coaching helps you see it and act from it.</p>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[4/3] w-full rounded-2xl bg-neutral-100 border border-neutral-200" aria-hidden="true" />
            <p className="mt-3 text-sm text-neutral-500">(Add a friendly headshot here.)</p>
          </div>
        </div>
      </section>

      {/* What You Could Be Coached On */}
      <section id="topics" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-14 md:py-20 xl:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What you can be coached on</h2>
          <p className="mt-3 text-neutral-600">Clear, practical support across life domains — without the “fix me” story.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              { title: 'Money', desc: 'Shift from fear/projection into simplicity and flow.' },
              { title: 'Relationships', desc: 'Dating, intimacy, and naming true wants.' },
              { title: 'Career & Creativity', desc: 'From procrastination to aligned movement.' },
              { title: 'Grief & Stuckness', desc: 'Find movement without bypassing what’s real.' },
              { title: 'Everyday Alignment', desc: 'Presence, clarity, and ease in daily life.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section id="approach" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-14 md:py-20 xl:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">My approach</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">Grounded, somatic, forward-moving. I blend executive-level frameworks from Art of Accomplishment with somatic tools, meditation, and parts work. Modality-agnostic, practical, and focused on empowerment — helping you see your authentic wants, reclaim agency, and act from clarity.</p>
          <ul className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-neutral-700">
            <li className="rounded-xl border border-neutral-200 p-4 bg-neutral-50">Session length: 60 minutes on Zoom</li>
            <li className="rounded-xl border border-neutral-200 p-4 bg-neutral-50">Bring what’s most alive; we coach there</li>
            <li className="rounded-xl border border-neutral-200 p-4 bg-neutral-50">Homework is simple, embodied experiments</li>
          </ul>
        </div>
      </section>

      {/* Background + Testimonials (Scrollable) */}
      <section id="background" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-14 md:py-20 xl:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">My background</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 overflow-y-auto max-h-80 xl:max-h-96">
              <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                <li>Training with <span className="font-medium">Art of Accomplishment</span> (Executive Coaching)</li>
                <li>Years of meditation and consciousness practice</li>
                <li>Facilitator of retreats & group coaching containers</li>
                <li>Co-host of the <span className="font-medium">Attunement Podcast</span></li>
                <li>Co-founder of the <span className="font-medium">Attunement Residency</span></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 overflow-y-auto max-h-80 xl:max-h-96">
              <p className="text-neutral-700">Testimonials from clients:</p>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">“Samek held an open and warm space for us to talk. He answered my questions gently with clarity… gave me confidence to go and work on it.” — James</blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">“Within like 3 minutes we were already feeling our way through sadness, fear, grief, without much need for long explanations. Samek’s warmth and openness is rare, surprising, and welcome.” — Morgan</blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">“50 minutes of HIIT for emotions! You helped me tap into feelings that I’ve only touched on before. Incredibly grateful.” — Matthew</blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">“Samek was brilliant! He guided me through letting go of some big things… I felt safe to be vulnerable.” — Justin</blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">“My experience was very moving… playful yet deeply empathetic energy. Problems felt hard, yes, but not complicated.” — Harshit</blockquote>
            </div>
          </div>
          <div className="mt-6 text-sm text-neutral-500">References: Sophia Somatics, Flourishment, Sofia Jeanne, D. Thorson — simplicity-first design inspiration.</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-14 md:py-20 xl:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-6 space-y-3">
            {[
              { q: 'Is this therapy?', a: 'No. Coaching is forward-moving. We work from the present toward clarity, joy, and aligned action.' },
              { q: 'Who do you work with?', a: 'I primarily coach men ages 24–40 who feel stuck in some part of life — though the tools apply broadly.' },
              { q: 'What does a session look like?', a: '60 minutes on Zoom. We work with somatic, emotional, and practical tools on what feels most alive for you.' },
              { q: 'How do I start?', a: 'Book a free intro session. We’ll meet, feel for fit, and map your first steps.' },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-neutral-200 p-4 open:bg-neutral-50">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{item.q}</span>
                  <span className="ml-4 text-neutral-400 group-open:rotate-180 transition">▾</span>
                </summary>
                <p className="mt-2 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="border-t border-neutral-200 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-14 md:py-20 xl:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Book a free intro session</h2>
          <p className="mt-3 text-neutral-300 max-w-2xl">Prefer email? Use the form below — it comes straight to my inbox.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-2xl">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-neutral-300">Name<span className="ml-1 text-neutral-500">(required)</span></label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-6 xl:px-8 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-neutral-300">Email<span className="ml-1 text-neutral-500">(required)</span></label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-6 xl:px-8 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-neutral-300">Message<span className="ml-1 text-neutral-500">(required)</span></label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-6 xl:px-8 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="What would you like support with?"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-neutral-900 font-medium hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
              <a href="#" className="inline-flex items-center rounded-2xl border border-neutral-700 px-5 py-3 font-medium hover:bg-neutral-800">Schedule on Calendly</a>
              <a href="mailto:hello@samek.life" className="inline-flex items-center rounded-2xl border border-neutral-700 px-5 py-3 font-medium hover:bg-neutral-800">Email hello@samek.life</a>
            </div>

            {status === "success" && (
              <p className="text-sm text-emerald-300">Thanks — your message was sent. I’ll get back to you soon.</p>
            )}
             {status === "error" && (
              <p className="text-sm text-red-300">{error}</p>
            )}

            <p className="text-xs text-neutral-500">By submitting, you consent to me replying to your message. No spam. No list add.</p>
          </form>

          <p className="mt-8 text-xs text-neutral-400">© {new Date().getFullYear()} Samek — All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}

