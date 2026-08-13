import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE_URL = "https://my-signal-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE_URL, lastModified: new Date() },
    ...projectPages,
  ];
}