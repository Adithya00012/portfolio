"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: only render the real icon after mount
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded border border-black/10 p-2 text-base/70 transition-colors hover:border-accent-mint/50 hover:text-accent-mint dark:border-white/10 dark:text-ink-muted"
    >
      {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
