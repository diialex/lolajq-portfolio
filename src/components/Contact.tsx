'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeaogdge';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative bg-paper py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-stone mb-4">
            Contacto
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-[1.1]">
            Hablemos.
          </h2>
          <p className="mt-6 max-w-md mx-auto text-sm leading-relaxed text-stone">
            Para encargos, colaboraciones o cualquier consulta sobre mi trabajo.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block text-xs tracking-[0.25em] uppercase text-stone mb-3"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-transparent border-b border-ink/20 focus:border-gold outline-none py-3 text-ink transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs tracking-[0.25em] uppercase text-stone mb-3"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-transparent border-b border-ink/20 focus:border-gold outline-none py-3 text-ink transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs tracking-[0.25em] uppercase text-stone mb-3"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border-b border-ink/20 focus:border-gold outline-none py-3 text-ink resize-none transition-colors duration-300"
            />
          </div>

          <div className="pt-4 flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="text-xs tracking-[0.3em] uppercase text-ink hover:text-gold transition-colors duration-300 disabled:opacity-50"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje →'}
            </button>

            {status === 'sent' && (
              <p className="text-xs tracking-wider text-gold">
                Gracias. Te responderé lo antes posible.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs tracking-wider text-red-700">
                Algo falló. Inténtalo de nuevo o escríbeme por email.
              </p>
            )}
          </div>
        </form>

        {/* Enlaces directos */}
        <div className="mt-20 pt-12 border-t border-ink/10 flex flex-wrap justify-center gap-10 text-xs tracking-[0.25em] uppercase text-stone">
          <a
            href="jaraquemadalola@gmail.com"
            className="hover:text-gold transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://instagram.com/lola_sevillarte"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/lola-jaraquemada-valdés-2130091b6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}