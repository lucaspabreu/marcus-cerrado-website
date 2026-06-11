"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "../ui/Section";
import { MapaBrasil } from "../MapaBrasil";
import { concursos, statusLabel, statusOrdem } from "@/data/concursos";
import type { Concurso, StatusConcurso } from "@/types";
import { cn } from "@/lib/utils";

const statusDot: Record<StatusConcurso, string> = {
  "banca-definida": "bg-[var(--accent)]",
  autorizado: "bg-[var(--accent)]",
  "comissao-formada": "bg-[var(--accent-soft)]",
  "credito-liberado": "bg-[var(--accent-soft)]",
  "banca-contratacao": "bg-[#6b6b6b]",
  previsto: "bg-[#6b6b6b]",
  anunciado: "bg-[#9b9b9b]",
  solicitado: "bg-[#9b9b9b]",
};

// Estados presentes nos dados, na ordem em que aparecem, com a contagem de
// concursos e o nome completo — base dos chips de filtro.
const contagemPorEstado = concursos.reduce<Record<string, number>>((acc, c) => {
  acc[c.siglaEstado] = (acc[c.siglaEstado] ?? 0) + 1;
  return acc;
}, {});
const nomePorEstado = concursos.reduce<Record<string, string>>((acc, c) => {
  acc[c.siglaEstado] = c.estado;
  return acc;
}, {});
const siglasFiltro = Object.keys(contagemPorEstado);

type OpcaoFiltro = { value: string; label: string; count: number };

// Dropdown próprio (não usa <select> nativo) — assim o open→escolher é 100%
// clicável e testável, sem depender do popup nativo do SO.
function EstadoDropdown({
  value,
  onChange,
  options,
}: {
  value: string | null;
  onChange: (v: string | null) => void;
  options: OpcaoFiltro[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = options.find((o) => o.value === (value ?? "")) ?? options[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        id="filtro-estado"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--bg)] py-2 pl-3.5 pr-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/25"
      >
        <span className="min-w-[8.5rem] text-left">{current.label}</span>
        <span className="font-mono text-[10px] tabular-nums text-[var(--neutral-soft)]">
          {current.count}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-[var(--neutral)] transition-transform duration-200",
            open && "rotate-180"
          )}
          strokeWidth={1.75}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Estados"
          className="absolute left-0 top-[calc(100%+6px)] z-30 max-h-72 w-64 overflow-auto rounded-lg border border-[var(--line)] bg-[var(--bg)] py-1 shadow-lg shadow-black/5"
        >
          {options.map((o) => {
            const active = o.value === (value ?? "");
            return (
              <li key={o.value || "todos"} role="option" aria-selected={active}>
                <button
                  type="button"
                  data-value={o.value}
                  onClick={() => {
                    onChange(o.value || null);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-sm transition-colors",
                    active
                      ? "bg-[var(--bg-elevated)] font-medium text-[var(--accent)]"
                      : "text-[var(--ink)] hover:bg-[var(--bg-elevated)]"
                  )}
                >
                  <span>{o.label}</span>
                  <span className="font-mono text-[10px] tabular-nums text-[var(--neutral-soft)]">
                    {o.count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Concursos() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedSigla, setSelectedSigla] = useState<string | null>(null);

  const estados = new Set(
    concursos.filter((c) => !c.federal).map((c) => c.siglaEstado)
  ).size;

  const visiveis = selectedSigla
    ? concursos.filter((c) => c.siglaEstado === selectedSigla)
    : concursos;

  // Um filtro federal (ex.: PRF) não tem estado no mapa — nesse caso o mapa
  // segue nacional e só a lista filtra. Para um estado, o mapa mostra só ele.
  const selectedState =
    selectedSigla &&
    concursos.some((c) => c.siglaEstado === selectedSigla && !c.federal)
      ? selectedSigla
      : null;

  // Status presentes no que o mapa exibe — controla a legenda.
  const statusNoMapa = statusOrdem.filter((s) =>
    concursos.some(
      (c) =>
        !c.federal &&
        c.status === s &&
        (!selectedState || c.siglaEstado === selectedState)
    )
  );

  // Concursos agrupados por status, na ordem do pipeline.
  const grupos = statusOrdem
    .map((status) => ({
      status,
      items: visiveis.filter((c) => c.status === status),
    }))
    .filter((g) => g.items.length > 0);

  const renderRow = (concurso: Concurso) => {
    const isHovered = hoveredId === concurso.id;
    return (
      <li
        key={concurso.id}
        onMouseEnter={() => setHoveredId(concurso.id)}
        onMouseLeave={() => setHoveredId(null)}
        className={cn(
          "group flex items-start gap-3 sm:gap-4 py-2.5 px-2 -mx-2 rounded-md cursor-pointer transition-all duration-150",
          isHovered && "bg-[var(--bg-elevated)]"
        )}
      >
        {/* Sigla do estado / BR */}
        <span
          className={cn(
            "font-mono text-[11px] tabular-nums shrink-0 w-7 pt-0.5 transition-colors",
            isHovered ? "text-[var(--accent)]" : "text-[var(--neutral-soft)]"
          )}
        >
          {concurso.siglaEstado}
        </span>

        {/* Conteúdo: nome + salário / detalhe + vagas */}
        <div className="flex-1 min-w-0">
          {/* Linha 1: nome + salário */}
          <div className="flex items-baseline justify-between gap-3">
            <span
              className={cn(
                "min-w-0 text-sm font-medium leading-snug sm:truncate transition-colors",
                isHovered ? "text-[var(--accent)]" : "text-[var(--ink)]"
              )}
            >
              {concurso.nome}
            </span>
            <span
              className={cn(
                "shrink-0 text-sm font-medium tabular-nums leading-snug whitespace-nowrap transition-colors",
                isHovered ? "text-[var(--accent)]" : "text-[var(--ink)]"
              )}
            >
              {concurso.salario}
            </span>
          </div>
          {/* Linha 2: detalhe + vagas — empilha no mobile, lado a lado no desktop */}
          <div className="mt-0.5 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
            <span
              className={cn(
                "text-xs leading-snug sm:min-w-0 sm:truncate transition-colors",
                isHovered ? "text-[var(--ink-soft)]" : "text-[var(--neutral)]"
              )}
            >
              {concurso.detalhe}
            </span>
            <span className="shrink-0 text-[10px] uppercase tracking-wider text-[var(--neutral-soft)] whitespace-nowrap">
              {concurso.vagas === "A definir"
                ? "vagas a definir"
                : `${concurso.vagas} vagas`}
            </span>
          </div>
        </div>
      </li>
    );
  };

  return (
    <Section
      id="concursos"
      title={
        <>
          Próximos <span className="text-[var(--accent)]">Concursos.</span>
        </>
      }
      intro="Mapa dos concursos policiais previstos no Brasil. Acompanhamento contínuo de comissão, banca, previsão de edital e publicação — com vagas e salários do último edital."
      containerSize="default"
    >
      {/* Filtro por estado — dropdown próprio, sincronizado com o mapa */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--neutral-soft)]">
          Filtrar por estado
        </span>
        <EstadoDropdown
          value={selectedSigla}
          onChange={setSelectedSigla}
          options={[
            { value: "", label: "Todos os estados", count: concursos.length },
            ...siglasFiltro.map((sigla) => ({
              value: sigla,
              label: `${nomePorEstado[sigla]} (${sigla})`,
              count: contagemPorEstado[sigla],
            })),
          ]}
        />
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* MAP — narrower column */}
        <div className="min-w-0 lg:col-span-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--accent)]">
              Editais previstos
            </span>
            <span
              className={cn(
                "font-mono text-[10px] uppercase tracking-wider",
                selectedState ? "text-[var(--accent)]" : "text-[var(--neutral)]"
              )}
            >
              {selectedState
                ? selectedState
                : `${String(estados).padStart(2, "0")} estados`}
            </span>
          </div>

          <div className="max-w-[320px] mx-auto lg:mx-0">
            <MapaBrasil
              concursos={concursos}
              hoveredId={hoveredId}
              onHover={setHoveredId}
              selectedSigla={selectedSigla}
              onSelectSigla={setSelectedSigla}
            />
          </div>

          {/* Legend */}
          <div className="mt-6 pt-5 border-t border-[var(--line)] grid grid-cols-2 gap-x-3 gap-y-2">
            {statusNoMapa.map((status) => (
              <div key={status} className="flex items-center gap-2">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full shrink-0",
                    statusDot[status]
                  )}
                />
                <span className="text-[10px] text-[var(--neutral)] leading-snug">
                  {statusLabel[status]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LIST — agrupada por status */}
        <div className="min-w-0 lg:col-span-7 space-y-7 lg:border-l lg:border-[var(--line)] lg:pl-12">
          {grupos.map(({ status, items }) => (
            <div key={status}>
              <div className="flex items-center gap-3 mb-2.5">
                <span
                  className={cn("h-1.5 w-1.5 rounded-full", statusDot[status])}
                />
                <h3 className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--neutral)]">
                  {statusLabel[status]}
                </h3>
                <span className="ml-auto font-mono text-[10px] text-[var(--neutral-soft)] tabular-nums">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="divide-y divide-[var(--line)]">
                {items.map(renderRow)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-xs text-[var(--neutral)] leading-relaxed">
        Atualizado com base em editais e previsões oficiais. Vagas e salários
        sujeitos a alteração no edital final.
      </p>
    </Section>
  );
}
