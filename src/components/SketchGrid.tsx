import type { GalleryItem } from '@/data/projects';
import LightboxImage from '@/components/LightboxImage';

type Props = {
  items: GalleryItem[];
  title: string;
};

export default function SketchGrid({ items, title }: Props) {
  if (!items.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 mb-24">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 items-end">
        {items.map((item, i) => {
          // Ritmo: alto / bajo / medio / alto / bajo / medio...
          const heights = ['h-64 md:h-80', 'h-44 md:h-56', 'h-52 md:h-64'];
          const h = heights[i % heights.length];
          return (
            <figure key={item.src} className="flex flex-col">
              <div className={h}>
                <LightboxImage
                  src={item.src}
                  alt={item.caption ?? `${title} — ${i + 1}`}
                  className="h-full w-auto object-contain mix-blend-multiply"
                />
              </div>
              {item.caption && (
                <figcaption className="mt-2 text-[10px] tracking-[0.2em] uppercase text-stone">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </section>
  );
}