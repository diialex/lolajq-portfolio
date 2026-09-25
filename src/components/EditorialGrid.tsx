import Image from 'next/image';
import { asset } from '@/lib/asset';
import type { GalleryItem } from '@/data/projects';

type Props = {
  items: GalleryItem[];
  title: string;
};

// Orden fijo de las secciones (si existen)
const GROUP_ORDER = ['Inspiración', 'Bocetos', 'Proceso', 'Resultado'];

const positions = [
  { wrapper: 'md:col-span-7 md:col-start-1',           aspect: 'aspect-[3/4]' },
  { wrapper: 'md:col-span-5 md:col-start-8 md:mt-32',  aspect: 'aspect-[3/4]' },
  { wrapper: 'md:col-span-5 md:col-start-1',           aspect: 'aspect-[3/4]' },
  { wrapper: 'md:col-span-7 md:col-start-6 md:-mt-16', aspect: 'aspect-[4/5]' },
  { wrapper: 'md:col-span-6 md:col-start-4',           aspect: 'aspect-[3/4]' },
  { wrapper: 'md:col-span-4 md:col-start-9 md:mt-24',  aspect: 'aspect-[3/4]' },
];

export default function EditorialGrid({ items, title }: Props) {
  if (!items.length) return null;

  // Agrupar por campo `group`, respetando GROUP_ORDER
  const groups = groupItems(items);
  const hasGroups = groups.length > 1 || groups[0]?.name !== '';

  return (
    <section className="mx-auto max-w-6xl px-6 mb-24">
      {groups.map((group, gi) => (
        <div key={group.name || gi} className={gi > 0 ? 'mt-32' : ''}>
          {/* Subtítulo del grupo */}
          {hasGroups && group.name && (
            <header className="mb-16 border-t border-ink/10 pt-8">
              <p className="text-xs tracking-[0.3em] uppercase text-stone mb-2">
                {String(gi + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-ink">
                {group.name}
              </h2>
            </header>
          )}

          {/* Grid zigzag */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24">
            {group.items.map((img, i) => {
              const pos = positions[i % positions.length];
              return (
                <figure key={img.src} className={pos.wrapper}>
                  <div className={`relative overflow-hidden bg-paper ${pos.aspect}`}>
                    <Image
                      src={asset(img.src)}
                      alt={img.caption ?? `${title} — ${img.group ?? ''} ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="mt-4 text-xs tracking-[0.2em] uppercase text-stone">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

// Agrupa los items por `group` respetando GROUP_ORDER.
// Los que no tienen grupo van a un grupo "sin nombre".
function groupItems(items: GalleryItem[]): { name: string; items: GalleryItem[] }[] {
  const buckets = new Map<string, GalleryItem[]>();

  for (const item of items) {
    const key = item.group ?? '';
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key)!.push(item);
  }

  // Ordena: primero los que están en GROUP_ORDER, luego el resto
  const known = GROUP_ORDER.filter((g) => buckets.has(g));
  const unknown = [...buckets.keys()].filter((g) => g && !GROUP_ORDER.includes(g));
  const hasNoGroup = buckets.has('');

  const ordered: { name: string; items: GalleryItem[] }[] = [];
  for (const name of known) ordered.push({ name, items: buckets.get(name)! });
  for (const name of unknown) ordered.push({ name, items: buckets.get(name)! });
  if (hasNoGroup) ordered.push({ name: '', items: buckets.get('')! });

  return ordered;
}