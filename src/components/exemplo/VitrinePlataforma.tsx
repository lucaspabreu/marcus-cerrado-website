"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CalendarDays, FileText, Layers, Map as MapIcon, type LucideIcon } from "lucide-react";
import { recursosPlataforma } from "@/data/plataforma";
import { cn } from "@/lib/utils";
import { Container } from "../ui/Container";

const icones: Record<string, LucideIcon> = {
  cronograma: CalendarDays,
  resumos: FileText,
  flashcards: Layers,
  guia: MapIcon,
};

const INTERVALO_MS = 5000;

// Substitui a vitrine de quatro miniaturas: uma tela grande do app com abas.
// Gira sozinha até a pessoa clicar numa aba. `emBreve` marca as ferramentas
// ainda não liberadas na carreira (prefixo do id: "guia", "flashcards").
export function VitrinePlataforma({ emBreve = [] }: { emBreve?: string[] }) {
  const [ativa, setAtiva] = useState(0);
  const [automatico, setAutomatico] = useState(true);

  useEffect(() => {
    if (!automatico) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(
      () => setAtiva((i) => (i + 1) % recursosPlataforma.length),
      INTERVALO_MS
    );
    return () => clearInterval(t);
  }, [automatico]);

  const escolher = (i: number) => {
    setAutomatico(false);
    setAtiva(i);
  };

  return (
    <section className="border-t border-[var(--line)] py-16 sm:py-20 md:py-24">
      <Container size="wide">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Plataforma Cerrado
        </span>
        <h2 className="mt-3 font-display text-3xl leading-[1.1] tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
          Abre e já sabe o que estudar hoje.
        </h2>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-12 lg:gap-10">
          {/* Abas: pílulas roláveis no celular, lista vertical no desktop */}
          <div
            role="tablist"
            aria-label="Ferramentas da plataforma"
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:-mx-8 sm:px-8 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-3 lg:overflow-visible lg:px-0"
          >
            {recursosPlataforma.map((recurso, i) => {
              const Icone = icones[recurso.id] ?? FileText;
              const sel = i === ativa;
              const pendente = emBreve.some((k) => recurso.id.startsWith(k));
              return (
                <button
                  key={recurso.id}
                  role="tab"
                  type="button"
                  aria-selected={sel}
                  aria-controls="vitrine-tela"
                  onClick={() => escolher(i)}
                  className={cn(
                    "group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-left transition-colors lg:items-start lg:gap-4 lg:px-5 lg:py-5",
                    sel
                      ? "bg-[var(--bg-elevated)] ring-1 ring-[var(--accent)]/50"
                      : "ring-1 ring-[var(--line)] hover:bg-[var(--bg-elevated)]"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors lg:h-11 lg:w-11",
                      sel ? "bg-[var(--accent)] text-[var(--paper)]" : "bg-[var(--line)] text-[var(--neutral)]"
                    )}
                  >
                    <Icone className="h-[18px] w-[18px] lg:h-5 lg:w-5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block whitespace-nowrap font-display text-base tracking-tight lg:text-xl",
                        sel ? "text-[var(--ink)]" : "text-[var(--neutral)]"
                      )}
                    >
                      {recurso.titulo}
                      {pendente && (
                        <span className="ml-2 inline-block rounded-full bg-[var(--line)] px-2 py-0.5 align-middle font-sans text-[10px] font-medium uppercase tracking-wider text-[var(--neutral)]">
                          Em breve
                        </span>
                      )}
                    </span>
                    <span
                      className={cn(
                        "mt-1 hidden text-sm leading-snug text-[var(--neutral)]",
                        sel && "lg:block"
                      )}
                    >
                      {recurso.descricao}
                    </span>
                  </span>

                  {/* Barra de progresso do giro automático */}
                  {sel && automatico && (
                    <span
                      key={ativa}
                      aria-hidden="true"
                      className="vitrine-progresso absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[var(--accent)]"
                      style={{ animationDuration: `${INTERVALO_MS}ms` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tela: as quatro empilhadas, só a ativa visível — troca sem piscar */}
          <div id="vitrine-tela" role="tabpanel" className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl bg-[#0E0E0E] ring-1 ring-[var(--line-strong)] shadow-2xl shadow-black/50">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <div className="relative aspect-[1230/1052]">
                {recursosPlataforma.map((recurso, i) => (
                  <Image
                    key={recurso.id}
                    src={recurso.imagem}
                    alt={recurso.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className={cn(
                      "object-cover object-top transition-opacity duration-500",
                      i === ativa ? "opacity-100" : "opacity-0"
                    )}
                    aria-hidden={i !== ativa}
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-[var(--neutral)] lg:hidden">
              {recursosPlataforma[ativa].descricao}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
