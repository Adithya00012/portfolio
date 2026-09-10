"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

export default function Hero() {
  return (
    <section id="home" className="section-shell relative flex min-h-[88vh] flex-col justify-center py-24">
      {/* Faint grid backdrop — quiet ambient texture, not a template gradient blob */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-grid opacity-[0.6] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <motion.p custom={0} variants={fadeUp} initial="hidden" animate="show" className="eyebrow mb-4">
        $ whoami
      </motion.p>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
      >
        {profile.name}
      </motion.h1>

      <motion.h2
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-3 font-display text-xl font-semibold text-base/70 md:text-2xl dark:text-ink-muted"
      >
        {profile.title}
      </motion.h2>

      <motion.p
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-5 max-w-xl text-base/80 dark:text-ink-muted"
      >
        {profile.tagline}
      </motion.p>

      <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="mt-9 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded bg-base px-6 py-3 font-mono text-sm font-medium text-light transition-transform hover:-translate-y-0.5 dark:bg-accent-mint dark:text-base"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded border border-black/15 px-6 py-3 font-mono text-sm font-medium transition-colors hover:border-accent-mint hover:text-accent-mint dark:border-white/15"
        >
          Contact
        </a>
      </motion.div>

      {/* Signature element: a small terminal window echoing the eyebrow, 
          grounding the "AI full-stack dev" identity in something concrete */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-14 max-w-md rounded-lg border border-black/10 bg-base font-mono text-xs text-ink shadow-xl dark:border-white/10"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="space-y-1.5 p-4">
          <p className="text-ink-muted">
            <span className="text-accent-mint">➜</span> ~/portfolio git:(main)
          </p>
          <p>
            npm run <span className="text-accent-amber">build-something-useful</span>
            <span className="ml-0.5 inline-block h-3 w-1.5 animate-blink bg-accent-mint align-middle" />
          </p>
        </div>
      </motion.div>
    </section>
  );
}
