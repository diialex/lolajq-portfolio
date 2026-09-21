'use client';

import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="relative py-40 px-6 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="font-display text-3xl md:text-5xl leading-[1.3] text-ink"
        >
          Ingeniería en cada puntada.
          <br />
          <span className="text-stone italic">Artesanía</span> en cada decisión.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
          className="mt-12 h-px w-24 mx-auto bg-gold origin-center"
        />
      </div>
    </section>
  );
}