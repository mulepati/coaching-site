export default function FAQ() {
    const faqItems = [
      {
        q: "What’s the difference between coaching and therapy?",
        a: `Coaching is a path of self-actualization and discovery.\n\nIt starts from the present moment, what’s happening right now in your life, and helps you build a life you enjoy and trust.\n\nTherapy often focuses on diagnosing and healing past wounds, while coaching focuses on developing new capacities in the here and now. While healing often occurs through coaching, it’s not the main intention of the work.\n\nIf you are working through trauma, depression, or mental-health symptoms, I encourage you to also work with a licensed therapist, ideally one trained in somatic or body-based approaches.`,
      },
      {
        q: "What can I be coached on?",
        a: `You can bring any area of your life where you want more clarity, movement, or alignment. Coaching is clear and practical, supporting both emotional growth and everyday decisions across domains.
      
      Money — shifting from fear or projection into simplicity and flow.
      
      Relationships — dating, intimacy, and naming your true wants.
      
      Career & Creativity — moving from procrastination to aligned action.
      
      Stuckness — finding movement without bypassing what’s real.
      
      Everyday Alignment — presence, clarity, and ease in daily life.`,
      },
      {
        q: "How it works",
        a: `Each session is 60 minutes over Zoom.\nYou bring what feels most alive or challenging in your life, and we work directly with it.\n\nThe process is simple:\n\n• We explore what’s present in your body and emotions.\n\n• I help you slow down enough to feel and understand what your system is communicating.\n\n• You begin to access the natural clarity and intelligence already within you.\n\nYou’ll leave each session with take-home experiments and journaling prompts to help you integrate insights into daily life.\n\nThis work is about embodiment, using your whole self, not just your intellect, to make decisions, and developing emotional fluidity, the ability to move through emotions with ease and reach clarity faster. Over time, people notice they make decisions more holistically, enjoy life more, and feel a steady sense of self-trust.\n\nBackground & Training\nOngoing training with Art of Accomplishment, including Masterclass, Great Decisions Course, and Groundbreakers with Joe Hudson and Tara Howley.`,
      },
      {
        q: "Pricing",
        a: `One-off session: $200\n\nBi-weekly coaching (2 sessions/month): $300\n\nWeekly coaching (4 sessions/month): $600\n\nI ask for a four-month energetic commitment for ongoing work. Part of the growth comes from having consistency that develops through the container and a long term coaching relationship.`,
      }
    ];
  
    return (
      <section id="faq" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 xl:px-8 py-14 md:py-20 xl:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-neutral-200 p-4 open:bg-neutral-50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{item.q}</span>
                  <span className="ml-4 text-neutral-400 group-open:rotate-180 transition">▾</span>
                </summary>
                <p className="mt-2 text-neutral-700 whitespace-pre-line">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }
  