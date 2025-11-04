import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [error, setError] = useState(null);
      
    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setStatus("loading");
        try {
          // Replace with your Formspree/Getform/own API endpoint
          const res = await fetch("https://formspree.io/f/mdkprrvv", {
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
    
    return (<section id="contact" className="border-t border-neutral-200 bg-neutral-900 text-white overflow-x-hidden">
<div className="mx-auto max-w-7xl px-6 sm:px-4 md:px-6 py-14 md:py-20 xl:py-24">
  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Book a free intro session</h2>
  <p className="mt-3 text-neutral-300 max-w-2xl">Prefer email? Use the form below — it comes straight to my inbox.</p>

  <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-2xl w-full">
    <div className="grid gap-2">
      <label htmlFor="name" className="text-sm text-neutral-300">Name<span className="ml-1 text-neutral-500">(required)</span></label>
      <input
        id="name"
        name="name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
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
        className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
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
        className="w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
        placeholder="What would you like support with?"
      />
    </div>

    <div className="flex flex-wrap items-center gap-3">
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-neutral-900 font-medium hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      <a href="https://cal.com/samek" className="inline-flex items-center rounded-2xl border border-neutral-700 px-5 py-3 font-medium hover:bg-neutral-800">Schedule on Calendly</a>
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
</section>);
}