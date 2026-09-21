export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center text-xs tracking-[0.2em] uppercase text-stone">
      <p>© {new Date().getFullYear()} Lola JQ · Todos los diseños son propiedad intelectual de Lola JQ</p>
      <p className="mt-3 text-[10px] text-stone/60">
        Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa.
      </p>
    </footer>
  );
}