'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/#trabajos',    label: 'Trabajos' },
  { href: '/#atelier',     label: 'Proceso' },
  { href: '/#sobre-mi',    label: 'Sobre mí' },
  { href: '/#contact',    label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-cream/80 backdrop-blur-md border-b border-ink/5'
          : 'py-8 bg-transparent'
      }`}
    >
      <ul className="flex justify-center gap-10 text-xs tracking-[0.25em] uppercase font-light">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-ink/70 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}