'use client';

import { useEffect, useState } from 'react';
import { asset } from '@/lib/asset';

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function LightboxImage({ src, alt, className }: Props) {
  const [open, setOpen] = useState(false);

  // Bloquear scroll + cerrar con Escape
  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <img
        src={asset(src)}
        alt={alt}
        loading="lazy"
        onClick={() => setOpen(true)}
        className={`cursor-zoom-in transition-all duration-500 hover:opacity-90 hover:scale-[1.03] ${className ?? ''}`}
      />

      {open && (
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 cursor-zoom-out animate-in fade-in duration-300"
        >
          <img
            src={asset(src)}
            alt={alt}
            className="max-w-full max-h-full object-contain shadow-2xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute top-6 right-6 text-cream text-[10px] tracking-[0.3em] uppercase hover:text-gold transition-colors duration-300"
            aria-label="Cerrar"
          >
            Cerrar ✕
          </button>
        </div>
      )}
    </>
  );
}