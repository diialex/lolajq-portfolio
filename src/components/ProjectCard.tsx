'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { asset } from '@/lib/asset';
import type { Project } from '@/data/projects';

type Props = { project: Project; index: number };

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 1,
        delay: index * 0.1,
        ease: [0.65, 0, 0.35, 1],
      }}
      className="group relative"
    >
      <Link href={`/proyectos/${project.slug}`} className="block">
        <div className={`relative overflow-hidden bg-paper ${project.coverAspect ?? 'aspect-[3/4]'}`}>
          <Image
            src={asset(project.cover)}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-700" />

          <div className="absolute top-5 left-5 flex gap-3 text-[10px] tracking-[0.25em] uppercase text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span>{project.category}</span>
            <span className="text-cream/60">{project.year}</span>
          </div>
        </div>

        <div className="mt-6 flex items-baseline justify-between gap-6">
          <h3 className="font-display text-2xl md:text-3xl font-light text-ink">
            {project.title}
          </h3>
          <span className="text-xs tracking-[0.2em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
            Ver proyecto →
          </span>
        </div>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">
          {project.description}
        </p>
      </Link>
    </motion.article>
  );
}