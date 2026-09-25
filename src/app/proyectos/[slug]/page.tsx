import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allProjects, getProjectBySlug } from '@/data/projects';
import { asset } from '@/lib/asset';
import EditorialGrid from '@/components/EditorialGrid';
import FanGrid from '@/components/FanGrid';
import CaseStudyList from '@/components/CaseStudyList';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <article className="bg-cream pt-32 pb-24">
      {/* Volver */}
      <div className="mx-auto max-w-6xl px-6 mb-12">
        <Link
          href="/#trabajos"
          className="text-xs tracking-[0.25em] uppercase text-stone hover:text-gold transition-colors duration-300"
        >
          ← Volver a trabajos
        </Link>
      </div>

      {/* Cabecera */}
      <header className="mx-auto max-w-6xl px-6 mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-stone mb-6">
          {project.category} · {project.year}
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-light text-ink leading-[1.05] max-w-4xl">
          {project.title}
        </h1>
        {project.longDescription && (
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-stone">
            {project.longDescription}
          </p>
        )}
      </header>

      {/* Imagen principal */}
      <div className="mx-auto max-w-7xl px-6 mb-24">
        <div className="relative aspect-[4/5] md:aspect-[16/9] bg-paper overflow-hidden">
          <Image
            src={asset(project.cover)}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Galería: FanGrid (series de piezas) o EditorialGrid (proceso) */}
      {project.display === 'case-study' && project.caseStudies && (
        <CaseStudyList cases={project.caseStudies} title={project.title} />
      )}

      {project.gallery && project.gallery.length > 0 && project.display !== 'case-study' && (
        project.display === 'grid' ? (
          <FanGrid items={project.gallery} title={project.title} />
        ) : project.display === 'sketch' ? (
          <SketchGrid items={project.gallery} title={project.title} />
        ) : (
          <EditorialGrid items={project.gallery} title={project.title} />
        )
      )}

      {/* Siguiente proyecto */}
      <div className="mx-auto max-w-6xl px-6 border-t border-ink/10 pt-16">
        <p className="text-xs tracking-[0.3em] uppercase text-stone mb-6">
          Siguiente
        </p>
        <Link
          href={`/proyectos/${nextProject.slug}`}
          className="group inline-flex items-baseline gap-6"
        >
          <h3 className="font-display text-4xl md:text-5xl font-light text-ink group-hover:text-gold transition-colors duration-500">
            {nextProject.title}
          </h3>
          <span className="text-gold text-2xl group-hover:translate-x-2 transition-transform duration-500">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}