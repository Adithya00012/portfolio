import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-black/5 bg-light-surface py-24 dark:border-white/5 dark:bg-base-surface/40"
    >
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">04 — Experience</p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Timeline</h2>
        </Reveal>

        <div className="mt-10 space-y-8 border-l border-black/10 pl-8 dark:border-white/10">
          {experience.map((item, i) => (
            <Reveal key={item.role + item.org} delay={i * 0.08} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-mint" />
              <p className="font-mono text-xs text-accent-mint">{item.duration}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-base/70 dark:text-ink-muted">{item.org}</p>
              {item.credentialId && (
                <p className="mt-0.5 font-mono text-[10px] text-base/40 dark:text-ink-dim">
                  Credential ID: {item.credentialId}
                </p>
              )}
              <ul className="mt-3 space-y-1.5">
                {item.points.map((pt, j) => (
                  <li key={j} className="flex gap-2 text-sm text-base/80 dark:text-ink-muted">
                    <span className="text-accent-mint">›</span> {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
