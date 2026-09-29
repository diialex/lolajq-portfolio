import dynamic from 'next/dynamic';

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
      <section className="relative min-h-[100svh] overflow-hidden flex flex-col items-center justify-center pt-24 pb-16">
        <HeroCanvas />
        <div className="z-10 text-center pointer-events-none px-4">
          <h1 className="...">Lola JQ</h1>
          <p className="...">Confección · Artesanía · Diseño</p>
        </div>
      </section>

      <Manifesto />
      <Works />
      <Contact />
    </>
  );
}