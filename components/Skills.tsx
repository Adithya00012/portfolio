import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-black/5 bg-light-surface py-24 dark:border-white/5 dark:bg-base-surface/40">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">02 — Skills</p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Toolbox</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="h-full rounded-lg border border-black/10 p-5 dark:border-white/10">
                <h3 className="font-display text-sm font-semibold text-accent-mint">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
