'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/asset';

type Props = {
  images: string[];
  alt: string;
  active: boolean;
  interval?: number;
};

export default function CoverSequence({
  images,
  alt,
  active,
  interval = 1400,
}: Props) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Ciclado mientras active=true
  useEffect(() => {
    if (!active || images.length < 2) {
      if (timer.current) clearInterval(timer.current);
      return;
    }

    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [active, images.length, interval]);

  // Vuelve a la primera imagen al salir del hover
  useEffect(() => {
    if (!active) setIndex(0);
  }, [active]);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={asset(src)}
            alt={`${alt} — ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={i === 0}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
    </div>
  );
}