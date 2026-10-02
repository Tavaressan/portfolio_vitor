import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail/project-detail";
import { getCaseStudy, selectedProjects } from "@/content/projects";

// Só os projetos com estudo de caso têm página; os demais levam ao repositório
export const dynamicParams = false;

export function generateStaticParams() {
  return selectedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getCaseStudy(slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
