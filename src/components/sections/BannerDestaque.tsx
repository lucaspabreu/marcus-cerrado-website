import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BannerDestaque() {
  return (
    <section aria-label="Concurso em destaque">
      <Link
        href="/concursos/prf"
        className="group block bg-[var(--accent)] hover:bg-[var(--accent-deep)] transition-colors"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3.5">
            {/* Tag */}
            <span className="flex items-center gap-2 shrink-0">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--bg)]/90 animate-pulse"
              />
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--bg)]/80 whitespace-nowrap">
                Em destaque
              </span>
            </span>

            <span aria-hidden="true" className="hidden sm:inline-block w-px h-4 bg-[var(--bg)]/25" />

            {/* Título + detalhe */}
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 min-w-0">
              <span className="font-display text-base sm:text-lg text-[var(--bg)] tracking-tight">
                Combo PRF
              </span>
              <span className="text-xs sm:text-sm text-[var(--bg)]/75">
                Guia + Resumo + Flashcards · de R$&nbsp;411 por R$&nbsp;297
              </span>
            </p>

            {/* CTA */}
            <span className="ml-auto inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--bg)] whitespace-nowrap">
              Ver o Combo
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
