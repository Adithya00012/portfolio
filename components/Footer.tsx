import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 dark:border-white/5">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-xs text-base/60 md:flex-row dark:text-ink-muted">
        <p className="font-mono">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-5 font-mono">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-mint">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-mint">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent-mint">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
