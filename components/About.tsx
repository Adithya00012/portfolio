import Reveal from "./Reveal";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-shell py-24">
      <Reveal>
        <p className="eyebrow mb-3">01 — About</p>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Background &amp; focus
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.05}>
          <div className="space-y-4">
            {about.bio.map((p, i) => (
              <p key={i} className="text-base/80 leading-relaxed dark:text-ink-muted">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {about.interests.map((interest) => (
              <span key={interest} className="chip">
                {interest}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-black/10 p-6 dark:border-white/10">
            <p className="eyebrow mb-4">Education</p>
            <h3 className="font-display text-lg font-semibold">{about.education.degree}</h3>
            <p className="mt-1 text-sm text-base/70 dark:text-ink-muted">{about.education.institution}</p>
            <p className="mt-1 font-mono text-xs text-accent-mint">{about.education.duration}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
