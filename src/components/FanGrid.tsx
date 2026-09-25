'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/asset';
import type { GalleryItem } from '@/data/projects';

type Props = {
  items: GalleryItem[];
  title: string;
};

export default function FanGrid({ items, title }: Props) {
  if (!items.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
        {items.map((item, i) => (
          <FanTile key={item.src} item={item} index={i} title={title} />
        ))}
      </div>
    </section>
  );
}

function FanTile({
  item,
  index,
  title,
}: {
  item: GalleryItem;
  index: number;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [videoOk, setVideoOk] = useState(true);
  const [imgIndex, setImgIndex] = useState(0);

  // Todas las imágenes del abanico (portada + adicionales)
  const allImages = [item.src, ...(item.images ?? [])];
  const hasVideo = Boolean(item.video) && videoOk;
  const hasCycle = !hasVideo && allImages.length > 1;

  // --- VÍDEO: play/pause al hover ---
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !item.video) return;

    if (hovered) {
      v.play().catch(() => {
        // Si falla, marca el video como no disponible → cae a imagen
        setVideoOk(false);
      });
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [hovered, item.video]);

  // --- IMÁGENES: ciclado al hover ---
  useEffect(() => {
    if (!hovered || !hasCycle) {
      if (!hovered) setImgIndex(0);
      return;
    }

    const id = setInterval(() => {
      setImgIndex((i) => (i + 1) % allImages.length);
    }, 1200);

    return () => clearInterval(id);
  }, [hovered, hasCycle, allImages.length]);

  return (
    <figure
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-paper aspect-[3/4]">
        {/* Capa de imágenes */}
        {allImages.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === imgIndex && !(hasVideo && hovered) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={asset(src)}
              alt={item.caption ?? `${title} — ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority={i === 0}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Capa de vídeo (encima, solo si existe y hover activo) */}
        {item.video && videoOk && (
          <video
            ref={videoRef}
            src={asset(item.video.src)}
            poster={
              item.video.poster
                ? asset(item.video.poster)
                : asset(item.src)
            }
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoOk(false)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Indicadores */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
          {hasVideo && (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-cream/90 animate-pulse" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/90">
                Vídeo
              </span>
            </>
          )}
          {!hasVideo && hasCycle && (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-cream/80" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/90">
                {allImages.length} vistas
              </span>
            </>
          )}
        </div>
      </div>

      {item.caption && (
        <figcaption className="mt-4 text-xs tracking-[0.2em] uppercase text-stone">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}