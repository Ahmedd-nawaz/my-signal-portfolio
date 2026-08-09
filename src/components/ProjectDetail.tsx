import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MinusCircle } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="bg-dark-bg">
      {/* Header with moody background */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient from-dark-bg/60 via-dark-bg/80 to-dark-bg" />
        </div>

        <div className="container-app relative flex flex-col gap-md py-3xl">
          <Link
            href="/#work"
            className="w-fit font-mono text-small text-dark-text-muted hover:text-dark-text transition-colors"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-h1-mobile lg:text-h1 font-bold text-dark-text">
            {project.title}
          </h1>
          <p className="text-body text-dark-text-muted">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Top row: screenshot + status + role */}
      <section className="container-app pt-2xl grid lg:grid-cols-3 gap-lg items-start">
        <div className="lg:col-span-2 relative aspect-4/3 rounded-lg border border-dark-border bg-dark-surface overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-lg">
          {/* Status card */}
          <div className="rounded-lg border border-dark-border bg-dark-surface p-lg flex flex-col gap-md">
            <span className="font-mono text-mono-label uppercase tracking-wide text-dark-text-muted">
              Status
            </span>
            {project.phases.map((phase) => (
              <div key={phase.label} className="flex items-start gap-sm">
                {phase.status === "Live" ? (
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-success shrink-0" />
                ) : (
                  <MinusCircle className="w-4 h-4 mt-0.5 text-amber shrink-0" />
                )}
                <div className="flex flex-col">
                  <span className="text-body text-dark-text">
                    {phase.label} {phase.status}
                  </span>
                  <span className="text-small text-dark-text-muted">
                    {phase.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Role card */}
          <div className="rounded-lg border border-dark-border bg-dark-surface p-lg flex flex-col gap-xs">
            <span className="font-mono text-mono-label uppercase tracking-wide text-dark-text-muted">
              My Role
            </span>
            <span className="text-body font-semibold text-dark-text">
              {project.role.type}
            </span>
            <span className="text-small text-dark-text-muted">
              {project.role.description}
            </span>
          </div>
        </div>
      </section>

      {/* The Problem — plain background, left accent border */}
      <section className="container-app py-2xl">
        <div className="border-l-2 border-amber pl-lg flex flex-col gap-sm">
          <span className="font-mono text-mono-label uppercase tracking-wide text-amber">
            {project.problemEyebrow}
          </span>
          <h2 className="text-h3-mobile whitespace-pre-line lg:text-h3 font-semibold text-dark-text">
            {project.problemHeadline}
          </h2>
          <p className="text-body whitespace-pre-line text-dark-text-muted">{project.problemBody}</p>
        </div>
      </section>

      {/* Tech stack bar */}
      <section className="container-app pb-3xl">
        <div className="rounded-lg border border-dark-border bg-dark-surface p-lg flex flex-wrap items-center gap-md">
          <span className="font-mono text-mono-label uppercase tracking-wide text-dark-text-muted">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-sm">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-dark-border bg-dark-bg px-md py-xs text-small text-dark-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}