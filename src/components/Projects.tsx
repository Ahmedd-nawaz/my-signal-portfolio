"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { DURATION_FAST, EASE_STANDARD } from "@/lib/motion";

const MotionLink = motion.create(Link);

export default function Projects() {
  return (
    <section id="work" className="bg-dark-surface py-4xl px-md">
      <div className="container-app flex flex-col gap-2xl">
        <div className="flex flex-col gap-sm">
          <h2 className="text-h2-mobile lg:text-h2 font-semibold text-dark-text">
            Selected Work
          </h2>
          <span className="block w-16 h-1 bg-amber rounded-full" />
        </div>

        <StaggerGroup className="grid lg:grid-cols-2 gap-lg">
          {projects.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <MotionLink
                href={`/projects/${project.slug}`}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(255, 90, 31, 0.4)",
                  boxShadow: "var(--shadow-md)",
                }}
                transition={{ duration: DURATION_FAST, ease: EASE_STANDARD }}
                className="flex flex-col gap-md rounded-lg border border-dark-border bg-dark-bg p-lg h-full"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-h4-mobile lg:text-h4 font-semibold text-dark-text">
                    {project.title}
                  </h3>
                  <span className="font-mono text-small uppercase tracking-wide text-warning">
                    {project.status}
                  </span>
                </div>

                <p className="text-body text-dark-text-muted">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-sm">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-dark-border bg-dark-surface px-md py-xs text-small text-dark-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-auto aspect-video rounded-md border border-dark-border bg-dark-surface overflow-hidden p-sm">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </MotionLink>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}