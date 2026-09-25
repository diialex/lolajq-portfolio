'use client';

import { asset } from '@/lib/asset';
import type { GalleryItem } from '@/data/projects';

type Props = {
  items: GalleryItem[];
  title: string;
};

export default function SketchGrid({ items, title }: Props) {
  if (!items.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 mb-24">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-8 [column-fill:_balance]">
        {items.map((item, i) => (
          <figure key={item.src} className="mb-10 break-inside-avoid">
            {/* <img> nativo: respeta la proporción real y evita width/height fijos */}
            <img
              src={asset(item.src)}
              alt={item.caption ?? `${title} — ${i + 1}`}
              loading="lazy"
              className="w-full h-auto mix-blend-multiply"
            />
            {item.caption && (
              <figcaption className="mt-3 text-[10px] tracking-[0.2em] uppercase text-stone">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}