import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-black/10 p-6 transition-colors hover:border-accent-mint/50 dark:border-white/10">
      <h3 className="font-display text-lg font-semibold leading-snug">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-base/70 dark:text-ink-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-5">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs font-medium text-accent-mint hover:underline"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs font-medium text-base/70 hover:text-accent-mint dark:text-ink-muted"
          >
            <Github size={13} /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}
