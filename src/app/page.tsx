import Manifesto from '@/components/Manifesto';
import Works from '@/components/Works';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-cream">
        <div className="text-center">
          <h1 className="font-display font-light text-charcoal uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[clamp(2.75rem,13vw,8rem)] leading-none">
            Lola JQ
          </h1>
          <p className="mt-6 md:mt-8 font-light text-stone uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[clamp(0.6rem,2.4vw,0.9rem)]">
            Confección · Artesanía · Diseño
          </p>
        </div>
      </section>

      <Manifesto />
      <Works />
      <Contact />
    </>
  );
}