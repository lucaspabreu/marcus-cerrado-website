"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#metodo", label: "Método" },
  { href: "#trilhas", label: "Trilhas" },
  { href: "#concursos", label: "Concursos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/85 border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            aria-label="Marcus Nery — página inicial"
          >
            Marcus Nery
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
              href="#trilhas"
              className="hidden sm:inline-flex items-center rounded-lg bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent)] transition-colors"
            >
              Ver trilhas
            </Link>
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-[var(--ink)]"
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            open ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-3 pt-2" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[var(--neutral)] hover:text-[var(--ink)] py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
