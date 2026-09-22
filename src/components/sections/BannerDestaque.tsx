import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { vendasPausadas, vendasRetorno } from "@/data/vendas";
import { faixaAtual } from "@/data/precos";

export function BannerDestaque() {
  return (
    <section aria-label="Concurso em destaque">
      <Link
        href="/concursos/prf"
        className="group block bg-[#A23420] hover:bg-[#852916] transition-colors"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3.5">
            {/* Tag */}
            <span className="flex items-center gap-2 shrink-0">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--paper)]/90 animate-pulse"
              />
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--paper)]/80 whitespace-nowrap">
                Em destaque
              </span>
            </span>

            <span aria-hidden="true" className="hidden sm:inline-block w-px h-4 bg-[var(--paper)]/25" />

            {/* Título + detalhe */}
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 min-w-0">
              <span className="font-display text-base sm:text-lg text-[var(--paper)] tracking-tight">
                Projeto PRF
              </span>
              <span className="text-xs sm:text-sm text-[var(--paper)]/75">
                Combo + Plataforma Cerrado ·{" "}
                {vendasPausadas ? (
                  <>vendas encerradas até {vendasRetorno}</>
                ) : faixaAtual.precoDe !== undefined ? (
                  <>
                    de R$&nbsp;{faixaAtual.precoDe} por R$&nbsp;{faixaAtual.preco}
                  </>
                ) : (
                  <>R$&nbsp;{faixaAtual.preco}</>
                )}
              </span>
            </p>

            {/* CTA */}
            <span className="ml-auto inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--paper)] whitespace-nowrap">
              Ver o Projeto
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
