"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-light/80 backdrop-blur-md dark:border-white/5 dark:bg-base/80">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#home" className="font-display text-sm font-bold tracking-tight">
          adithya<span className="text-accent-mint">.</span>dev
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-wide text-base/60 transition-colors hover:text-accent-mint dark:text-ink-muted"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5 md:hidden dark:border-white/5"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 font-mono text-sm uppercase tracking-wide text-base/70 dark:text-ink-muted"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
