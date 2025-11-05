import FAQ from "./FAQ.jsx";
import Contact from "./Contact.jsx"

export default function Site() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-tight">Samek</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#who" className="hover:opacity-70">Who I Am</a>
            <a href="#approach" className="hover:opacity-70">My Approach</a>
            <a href="#background" className="hover:opacity-70">Background</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="https://cal.com/samek" className="inline-flex items-center rounded-xl border border-neutral-900 px-3 py-1.5 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">Book intro</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-16 md:py-24 xl:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight">Coaching</h1>
            <p className="mt-4 text-lg text-neutral-600">For people who want to live with more clarity, ease, and self-trust. </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://cal.com/samek" className="inline-flex items-center rounded-2xl bg-neutral-900 px-5 py-3 text-white font-medium hover:opacity-90">Book a free intro session</a>
              <a href="#approach" className="inline-flex items-center rounded-2xl border border-neutral-300 px-5 py-3 font-medium hover:bg-neutral-50">How it works</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
              <span>Also: </span>
              <a className="underline hover:no-underline" href="https://harryandsamek.com" target="_blank" rel="noreferrer">Attunement Residency,</a>
              <a className="underline hover:no-underline" href="https://www.youtube.com/@TheAttunementPodcast" target="_blank" rel="noreferrer">Attunement Podcast</a>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section id="who" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-14 md:py-20 xl:py-24 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Who I Am</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">I’m Samek. I’m a coach who helps you get in touch with your body with loving presence so you can move from clarity. I meet you where you’re at and support you in seeing the wisdom inside your emotions, so self-trust becomes natural and decision-making becomes simple.</p>
            <p className="mt-4 text-neutral-700 leading-relaxed">This work is about empowerment. You already have what you need, coaching helps you see it and act from it.</p>
          </div>
          <div className="md:col-span-2">
            <div className="style=background:face1.jpg aspect-[4/3] w-full rounded-2xl bg-neutral-100 border border-neutral-200" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section id="approach" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-14 md:py-20 xl:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">My approach</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">I blend executive-level frameworks from Art of Accomplishment with somatic tools, meditation, and parts work. Helping you see your authentic wants, reclaim agency, and act from clarity.<br/><br/>Embodying your entire Intelligence, from your rational reasoning capabilities of your head, the wisdom in each of your emotions from your body, and your natural instincts. In learning to move using your whole self. Over time, people notice they make decisions more holistically, enjoy life more, and feel a steady sense of self-trust.</p>
          <ul className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-neutral-700">
            <li className="rounded-xl border border-neutral-200 p-4 bg-neutral-50">Session length: 60 minutes on Zoom</li>
            <li className="rounded-xl border border-neutral-200 p-4 bg-neutral-50">Bring what’s most alive</li>
            <li className="rounded-xl border border-neutral-200 p-4 bg-neutral-50">Take‑home experiments and journaling prompts
            </li>
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
                <li>Facilitator of retreats & group containers</li>
                <li>Co-host of the <span className="font-medium">Attunement Podcast</span></li>
                <li>Co-founder of the <span className="font-medium">Attunement Residency</span></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 overflow-y-auto max-h-80 xl:max-h-96">
              <p className="text-neutral-700">Testimonials from clients:</p>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">"Samek was brilliant! we talked through some issues I have been having and he was able to guide me through the experience of letting go of some big things. He asked questions I wouldn't have asked myself that lead to some great insights and most importantly I felt safe to be vulnerable in the way I needed to be in order to move what I needed to move.” — <a href="https://x.com/JDonaldson_art" target="_blank" rel="noreferrer" className="underline hover:no-underline">Justin Donaldson</a></blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">"Coaching with Samek is by far the highest value thing I have done for my emotional unfolding so far. Every call accelerates me months of what I could do on my own at least. He has my highest recommendation!” — <a href="https://uli.rocks/" target="_blank" rel="noreferrer" className="underline hover:no-underline">Ulisse Mini</a></blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">"My conversations with Samek have been life altering. I bring decisions that I've been wrestling with for weeks that seem to get made within 15 minutes. His grounded nature and courage to ask the scary questions bring clarity, joy and calmness.” — <a href="https://www.drkurrensandhu.com/" target="_blank" rel="noreferrer" className="underline hover:no-underline">Kurren Sandhu</a></blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">"Samek showed an incredible ability to pick up nuances in our coaching calls. He doesn't force or fix. He listens with presence and allow the right thing to say to arise. Both calls felt natural, unforced, and exactly what was needed in that moment, even if I didn't realize it.” — <a href="https://www.linkedin.com/in/akaash-prasad" target="_blank" rel="noreferrer" className="underline hover:no-underline">Akaash Prasad</a></blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">“Within like 3 minutes of meeting Samek we were already feeling our way through sadness, fear, grief, without much need for long explanations or backstories. Samek’s warmth and openness is rare, surprising, and welcome. I trusted Samek right from the start, and he rolled smoothly with everything I managed to come up with.” — Morgan</blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">“50 minutes of HIIT for emotions! You helped me tap into feelings that I’ve only touched on before. Incredibly grateful.” — Matthew</blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">“Samek held an open and warm space for us to talk. He answered my questions gently with clarity… gave me confidence to go and work on it.” — James</blockquote>
              <blockquote className="mt-4 border-l-4 border-neutral-300 pl-4 text-neutral-700 italic">“My experience was very moving… playful yet deeply empathetic energy. Problems felt hard, yes, but not complicated.” — Harshit</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Contact / CTA */}
      <Contact />
    </div>
  );
}