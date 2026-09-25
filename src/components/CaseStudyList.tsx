import Image from 'next/image';
import { asset } from '@/lib/asset';
import type { CaseStudy } from '@/data/projects';

type Props = {
  cases: CaseStudy[];
  title: string;
};

export default function CaseStudyList({ cases, title }: Props) {
  if (!cases.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 mb-24">
      <div className="space-y-32">
        {cases.map((cs, i) => (
          <CaseRow key={cs.slug} cs={cs} index={i} title={title} />
        ))}
      </div>
    </section>
  );
}

function CaseRow({
  cs,
  index,
  title,
}: {
  cs: CaseStudy;
  index: number;
  title: string;
}) {
  return (
    <article className="border-t border-ink/10 pt-10">
      {/* Cabecera del caso */}
      <header className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 md:col-span-2">
          <p className="font-display text-5xl md:text-6xl text-gold leading-none">
            {String(index + 1).padStart(2, '0')}
          </p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <h3 className="font-display text-3xl md:text-4xl font-light text-ink">
            {cs.name}
          </h3>
          <p className="mt-2 text-xs tracking-[0.25em] uppercase text-stone">
            {cs.category}
          </p>
          {cs.notes && (
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
              {cs.notes}
            </p>
          )}
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          {cs.model3d && (
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-3 py-1.5">
              3D disponible
            </span>
          )}
        </div>
      </header>

      {/* Tres fases: Inspiración · Bocetos · Resultado */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <PhaseColumn
          label="Inspiración"
          images={cs.inspiration}
          altBase={`${title} — ${cs.name} inspiración`}
          colSpan="md:col-span-4"
          imageAspect="aspect-square"
          columns={3}
        />
        <PhaseColumn
          label="Bocetos"
          images={cs.sketch}
          altBase={`${title} — ${cs.name} bocetos`}
          colSpan="md:col-span-3"
          imageAspect="aspect-[3/4]"
          columns={1}
        />
        <PhaseColumn
          label="Resultado"
          images={cs.result}
          altBase={`${title} — ${cs.name} resultado`}
          colSpan="md:col-span-5"
          imageAspect="aspect-[3/4]"
          columns={2}
        />
      </div>
    </article>
  );
}

function PhaseColumn({
  label,
  images,
  altBase,
  colSpan,
  imageAspect,
  columns,
}: {
  label: string;
  images?: string[];
  altBase: string;
  colSpan: string;
  imageAspect: string;
  columns: 1 | 2 | 3;
}) {
  if (!images || images.length === 0) return null;

  const gridCols =
    columns === 1 ? 'grid-cols-1' : columns === 2 ? 'grid-cols-2' : 'grid-cols-3';

  return (
    <div className={colSpan}>
      <p className="text-[10px] tracking-[0.3em] uppercase text-stone mb-4">
        {label}
      </p>
      <div className={`grid ${gridCols} gap-2`}>
        {images.map((src, i) => (
          <div key={src} className={`relative ${imageAspect} bg-paper overflow-hidden`}>
            <Image
              src={asset(src)}
              alt={`${altBase} — ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}