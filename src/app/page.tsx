// src/app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Manifesto from '@/components/Manifesto';
import Works from '@/components/Works';
import Contact from '@/components/Contact';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-cream" />,
});

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden flex flex-col items-center justify-center pt-24 pb-16">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>

        <div className="z-10 text-center pointer-events-none">
          <h1 className="font-display text-6xl md:text-8xl font-light tracking-[0.2em] text-charcoal uppercase ml-4">
            Lola JQ
          </h1>
          <p className="mt-6 text-sm md:text-base font-light tracking-[0.3em] text-stone uppercase">
            Confección · Artesanía · Diseño
          </p>
        </div>
      </section>

      {/* RESTO DE SECCIONES */}
      <Manifesto />
      <Works />
      <Contact />
    </>
  );
}