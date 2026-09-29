import { asset } from '@/lib/asset';
import type { CaseStudy } from '@/data/projects';

type Props = {
  cases: CaseStudy[];
  title: string;
  intro?: string;
};

export default function CaseStudyList({ cases, title, intro }: Props) {
  if (!cases.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 mb-24">
      {intro && (
        <p className="mb-20 max-w-2xl text-base leading-relaxed text-stone">
          {intro}
        </p>
      )}

      <div className="space-y-32">
        {cases.map((cs, i) => (
          <CaseRow key={cs.slug} cs={cs} index={i} title={title} />
        ))}
      </div>
    </section>
  );
}

function CaseRow({ cs, index, title }: { cs: CaseStudy; index: number; title: string }) {
  return (
    <article className="border-t border-ink/10 pt-10">
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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <PhaseColumn
          label="Inspiración"
          images={cs.inspiration}
          altBase={`${title} — ${cs.name} inspiración`}
          colSpan="md:col-span-4"
          columns={2}
          blend={false}
          uniform
        />
        <PhaseColumn
          label="Bocetos"
          images={cs.sketch}
          altBase={`${title} — ${cs.name} bocetos`}
          colSpan="md:col-span-3"
          columns={1}
          blend
        />
        <PhaseColumn
          label="Resultado"
          images={cs.result}
          altBase={`${title} — ${cs.name} resultado`}
          colSpan="md:col-span-5"
          columns={2}
          blend={false}
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
  columns,
  blend,
}: {
  label: string;
  images?: string[];
  altBase: string;
  colSpan: string;
  columns: 1 | 2 | 3;
  blend: boolean;
}) {
  if (!images || images.length === 0) return null;

  // Si hay menos imágenes que columnas, reduce el número para que
  // las imágenes no se queden enanas (1 sola imagen = 1 columna full)
  const effectiveColumns = Math.min(columns, images.length);
  const colClass =
    effectiveColumns === 1 ? 'columns-1'
    : effectiveColumns === 2 ? 'columns-2'
    : 'columns-3';

  return (
    <div className={colSpan}>
      <p className="text-[10px] tracking-[0.3em] uppercase text-stone mb-4">
        {label}
      </p>
      <div className={`${colClass} gap-3 [column-fill:_balance]`}>
        {images.map((src, i) => (
          <figure key={src} className="mb-3 break-inside-avoid">
            <img
              src={asset(src)}
              alt={`${altBase} — ${i + 1}`}
              loading="lazy"
              className={`w-full h-auto ${blend ? 'mix-blend-multiply' : ''}`}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}