import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24">
      <Reveal>
        <p className="eyebrow mb-3">03 — Projects</p>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Selected work</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
