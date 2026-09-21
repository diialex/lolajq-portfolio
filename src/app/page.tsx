'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-stone-50" />,
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
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
    </main>
  );
}