"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { profile, formspreeEndpoint } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="section-shell py-24">
      <Reveal>
        <p className="eyebrow mb-3">05 — Contact</p>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s build something</h2>
        <p className="mt-4 max-w-lg text-base/70 dark:text-ink-muted">
          Open to internships, freelance work, and collaborating on interesting AI/full-stack projects. My inbox is
          always open.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto]">
        <Reveal delay={0.05}>
          <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-base/60 dark:text-ink-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded border border-black/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-accent-mint dark:border-white/15"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-base/60 dark:text-ink-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded border border-black/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-accent-mint dark:border-white/15"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-base/60 dark:text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="rounded border border-black/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-accent-mint dark:border-white/15"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 self-start rounded bg-base px-6 py-3 font-mono text-sm font-medium text-light transition-transform hover:-translate-y-0.5 disabled:opacity-60 dark:bg-accent-mint dark:text-base"
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message sent!"}
              {status === "error" && "Something went wrong"}
              {status === "idle" && "Send message"}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex gap-4 md:flex-col">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-base/70 hover:text-accent-mint dark:text-ink-muted"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-base/70 hover:text-accent-mint dark:text-ink-muted"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 font-mono text-sm text-base/70 hover:text-accent-mint dark:text-ink-muted"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
