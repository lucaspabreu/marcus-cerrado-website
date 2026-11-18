import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock,
  FileText,
  Layers,
  LayoutDashboard,
  Map as MapIcon,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import type { Produto } from "@/types";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/lib/whatsapp";
import { vendasPausadas, vendasRetorno } from "@/data/vendas";
import { checkoutDaFaixa, faixaAtual } from "@/data/precos";
import { CoverBanner } from "@/components/sections/ProdutosGrid";
import { EscadaPreco } from "@/components/sections/EscadaPreco";
import { Container } from "../ui/Container";

// Nome curto + ícone por material, pelo prefixo do id ("guia-prf" → "guia")
const materiais: Record<string, { rotulo: string; icone: LucideIcon }> = {
  guia: { rotulo: "Guia de Estudos", icone: MapIcon },
  cronograma: { rotulo: "Cronograma", icone: CalendarDays },
  resumo: { rotulo: "Resumo Completo", icone: FileText },
  flashcards: { rotulo: "Flashcards e Questões", icone: Layers },
};
const ordem = ["guia", "cronograma", "resumo", "flashcards"];

interface OfertaVisualProps {
  produto: Produto;
  inclusos: Produto[];
  concurso: { sigla: string; nome: string; brasao?: string };
}

// Substitui card do Projeto + "Acesso" + faixa de ex-aluno: o que vem vira
// blocos com ícone, a duração vira selo e o ex-aluno vira uma linha.
export function OfertaVisual({ produto, inclusos, concurso }: OfertaVisualProps) {
  const itens = inclusos
    .map((p) => ({ chave: p.id.split("-")[0], titulo: p.titulo }))
    .sort((a, b) => ordem.indexOf(a.chave) - ordem.indexOf(b.chave));

  const exAlunoHref = whatsappHref(
    `Olá! Já sou aluno(a) da Cerrado e quero saber da condição especial de ex-aluno para a ${concurso.sigla}.`
  );

  return (
    <section id="investimento" className="scroll-mt-24 border-t border-[var(--line)] py-16 sm:py-20 md:py-24">
      <Container size="wide">
        <article className="overflow-hidden rounded-2xl bg-[var(--bg-elevated)] ring-2 ring-[var(--accent)] shadow-xl shadow-black/20">
          <div className="grid lg:grid-cols-[0.9fr_1fr]">
            <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
              <CoverBanner produto={produto} variant="hero" concurso={concurso} />
            </div>

            <div className="flex flex-col p-6 sm:p-10">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--neutral)]">
                O que vem no Projeto
              </span>

              <ul className="mt-4 grid grid-cols-2 gap-3">
                {itens.map(({ chave, titulo }) => {
                  const m = materiais[chave];
                  const Icone = m?.icone ?? FileText;
                  return (
                    <li
                      key={chave}
                      className="flex flex-col gap-3 rounded-xl bg-[var(--bg)] p-4 ring-1 ring-[var(--line)]"
                    >
                      <Icone className="h-6 w-6 text-[var(--accent-soft)]" strokeWidth={1.75} />
                      <span className="font-display text-base leading-tight tracking-tight text-[var(--ink)] sm:text-lg">
                        {m?.rotulo ?? titulo}
                      </span>
                    </li>
                  );
                })}
                <li className="col-span-2 flex items-center gap-3 rounded-xl bg-[var(--accent)]/12 p-4 ring-1 ring-[var(--accent)]/35">
                  <LayoutDashboard className="h-6 w-6 shrink-0 text-[var(--accent-soft)]" strokeWidth={1.75} />
                  <span className="font-display text-base tracking-tight text-[var(--ink)] sm:text-lg">
                    Tudo integrado na Plataforma Cerrado
                  </span>
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {produto.acesso && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bg)] px-3 py-1.5 text-sm text-[var(--ink-soft)] ring-1 ring-[var(--line-strong)]">
                    <Clock className="h-3.5 w-3.5 text-[var(--accent-soft)]" strokeWidth={2} />
                    {produto.acesso} de acesso
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bg)] px-3 py-1.5 text-sm text-[var(--ink-soft)] ring-1 ring-[var(--line-strong)]">
                  <RefreshCw className="h-3.5 w-3.5 text-[var(--accent-soft)]" strokeWidth={2} />
                  Atualizações inclusas
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-display text-4xl leading-[1.05] tracking-tight text-[var(--accent)] lg:text-5xl">
                    {faixaAtual.parcelas}x{" "}
                    <span className={cn("whitespace-nowrap", vendasPausadas && "blur-[0.18em] select-none")}>
                      {vendasPausadas ? "R$ 00,00" : `R$ ${faixaAtual.parcela}`}
                    </span>
                  </p>
                  <p className="mt-2 flex flex-wrap items-baseline gap-x-2.5 text-base text-[var(--ink-soft)]">
                    <span>
                      ou{" "}
                      <span className={cn(vendasPausadas && "blur-[0.18em] select-none")}>
                        {vendasPausadas ? "R$ 000" : `R$ ${faixaAtual.preco}`}
                      </span>{" "}
                      à vista
                    </span>
                    {!vendasPausadas && faixaAtual.precoDe !== undefined && (
                      <span className="text-[var(--neutral)] line-through">R$ {faixaAtual.precoDe}</span>
                    )}
                  </p>
                </div>

                {vendasPausadas ? (
                  <span className="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-[var(--line-strong)] bg-[var(--bg)] px-7 py-3.5 text-sm font-medium text-[var(--neutral)] sm:text-base">
                    Vendas encerradas até {vendasRetorno}
                  </span>
                ) : (
                  <Link
                    href={checkoutDaFaixa(faixaAtual, produto.id, produto.ctaHref)}
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-7 py-3.5 text-base font-medium text-[var(--paper)] shadow-lg shadow-[var(--accent)]/20 transition-colors hover:bg-[var(--accent-deep)]"
                    aria-label={`${produto.ctaLabel} — ${produto.titulo}`}
                  >
                    <span>{produto.ctaLabel}</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-4">
          <EscadaPreco />
        </div>

        <a
          href={exAlunoHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 flex items-center justify-between gap-4 rounded-xl border border-[var(--line)] px-5 py-4 transition-colors hover:border-[var(--accent)]/60 sm:px-6"
        >
          <span className="text-sm text-[var(--ink-soft)] sm:text-base">
            <span className="font-medium text-[var(--ink)]">Já é aluno da Cerrado?</span>{" "}
            <span className="text-[var(--neutral)]">Tem condição especial no WhatsApp.</span>
          </span>
          <ArrowRight
            className="h-4 w-4 shrink-0 text-[var(--accent-soft)] transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </a>
      </Container>
    </section>
  );
}
