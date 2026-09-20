'use client';

import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { 
  ssr: false,
});

export default function Home() {
  return (
    // Quitamos el bg-stone-50 de aquí
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      
      {/* Capa de fondo 3D (z-0) */}
      <HeroCanvas />

      {/* Capa de texto (z-10 para que esté por encima) */}
      <div className="z-10 text-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-stone-900 uppercase ml-4">
          Lola JQ
        </h1>
        <p className="mt-6 text-sm md:text-base font-light tracking-[0.3em] text-stone-500 uppercase">
          Confección · Artesanía · Diseño
        </p>
      </div>
    </main>
  );
}