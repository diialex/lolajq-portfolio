import { series, type Series } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Works() {
  return (
    <section id="trabajos" className="relative bg-cream py-32">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-stone mb-4">
              Obra · 2022 — 2025
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-ink leading-[1.05]">
              Trabajos
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone">
            Cuatro series que recorren el estudio del cuerpo, la intervención
            material, la investigación profunda y la formación técnica.
          </p>
        </header>

        <div className="space-y-48">
          {series.map((serie, si) => (
            <SerieBlock key={serie.id} serie={serie} seriesIndex={si} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SerieBlock({
  serie,
  seriesIndex,
}: {
  serie: Series;
  seriesIndex: number;
}) {
  return (
    <article>
      <header className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24 border-t border-ink/10 pt-8">
        <div className="md:col-span-3">
          <p className="font-display text-6xl md:text-7xl text-gold leading-none">
            {serie.number}
          </p>
        </div>
        <div className="md:col-span-5">
          <h3 className="font-display text-3xl md:text-4xl font-light text-ink">
            {serie.title}
          </h3>
          <p className="mt-2 text-xs tracking-[0.25em] uppercase text-stone">
            {serie.subtitle}
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="text-sm leading-relaxed text-stone">
            {serie.description}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24">
        {serie.projects.map((project, i) => (
          <div
            key={project.slug}
            className={getLayout(i, serie.projects.length, seriesIndex)}
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </article>
  );
}

function getLayout(index: number, total: number, seriesIndex: number): string {
  // Una sola pieza → centrada
  if (total === 1) return 'md:col-span-8 md:col-start-3';

  // Dos piezas → alternamos según la serie (par/impar)
  if (total === 2) {
    const reverse = seriesIndex % 2 === 1; // serie 02 (impar) → invertida
    if (index === 0) {
      // Izquierda
      return reverse
        ? 'md:col-span-5 md:col-start-1'         // pequeña izq (serie impar)
        : 'md:col-span-7 md:col-start-1';        // grande izq (serie par)
    }
    // Derecha
    return reverse
      ? 'md:col-span-7 md:col-start-6 md:-mt-16' // grande der arriba (serie impar)
      : 'md:col-span-5 md:col-start-8 md:mt-32'; // pequeña der abajo (serie par)
  }

  // Más de 2 (fallback, por si añades series con 3+ proyectos)
  const patterns = [
    'md:col-span-7 md:col-start-1',
    'md:col-span-5 md:col-start-8 md:mt-32',
    'md:col-span-5 md:col-start-1',
    'md:col-span-7 md:col-start-6 md:-mt-16',
  ];
  return patterns[index % patterns.length];
}