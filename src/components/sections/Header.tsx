"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#trilhas", label: "Trilhas" },
  { href: "/#concursos", label: "Concursos" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/85 border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            aria-label="Cerrado Concursos — página inicial"
          >
            Cerrado Concursos
            <span className="text-[var(--accent)]">.</span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--neutral)] hover:text-[var(--ink)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#trilhas"
              className="hidden sm:inline-flex items-center rounded-lg bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent)] transition-colors"
            >
              Ver trilhas
            </Link>
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 -mr-2 text-[var(--ink)] relative z-[60]"
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-[var(--bg)]/95 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <nav
          id="mobile-nav"
          className="relative mx-auto max-w-7xl px-6 sm:px-8 pt-6 pb-10 flex flex-col gap-1"
          aria-label="Navegação mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-[var(--ink)] py-3 border-b border-[var(--line)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#trilhas"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--bg)]"
          >
            Ver trilhas
          </Link>
        </nav>
      </div>
    </header>
  );
}
