"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { MapaBrasil } from "../MapaBrasil";
import { concursos, statusLabel, statusOrdem } from "@/data/concursos";
import type { StatusConcurso } from "@/types";
import { cn } from "@/lib/utils";

const statusDot: Record<StatusConcurso, string> = {
  "edital-publicado": "bg-[var(--accent)]",
  "definicao-banca": "bg-[var(--accent)]",
  "previsao-edital": "bg-[var(--accent-soft)]",
  "comissao-formada": "bg-[#9b9b9b]",
  "edital-em-estudo": "bg-[#6b6b6b]",
};

export function Concursos() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const grouped = statusOrdem
    .map((status) => ({
      status,
      items: concursos.filter((c) => c.status === status),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <Section
      id="concursos"
      number="06"
      title={
        <>
          Próximos <span className="text-[var(--accent-soft)]">Concursos.</span>
        </>
      }
      intro="Mapa dos concursos policiais previstos no Brasil. Acompanhamento contínuo de comissão, banca, previsão de edital e publicação."
      containerSize="default"
      tone="dark"
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* MAP — narrower column */}
        <div className="lg:col-span-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--accent-soft)]">
              Editais previstos
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--bg)]/40">
              {String(concursos.length).padStart(2, "0")} estados
            </span>
          </div>

          <div className="max-w-[320px] mx-auto lg:mx-0">
            <MapaBrasil
              concursos={concursos}
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          </div>

          {/* Legend */}
          <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-x-3 gap-y-2">
            {statusOrdem
              .filter((s) => grouped.some((g) => g.status === s))
              .map((status) => (
                <div key={status} className="flex items-center gap-2">
                  <span
                    className={cn("h-1.5 w-1.5 rounded-full shrink-0", statusDot[status])}
                  />
                  <span className="text-[10px] text-[var(--bg)]/65 leading-snug">
                    {statusLabel[status]}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* LIST */}
        <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
          {grouped.map(({ status, items }) => (
            <div key={status}>
              <div className="flex items-center gap-3 mb-2.5">
                <span className={cn("h-1.5 w-1.5 rounded-full", statusDot[status])} />
                <h3 className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--bg)]/55">
                  {statusLabel[status]}
                </h3>
                <span className="ml-auto font-mono text-[10px] text-[var(--bg)]/35 tabular-nums">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="space-y-0.5">
                {items.map((concurso) => {
                  const isHovered = hoveredId === concurso.id;
                  return (
                    <li
                      key={concurso.id}
                      onMouseEnter={() => setHoveredId(concurso.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={cn(
                        "group flex items-baseline gap-3 sm:gap-4 py-2 px-2 -mx-2 rounded-md cursor-pointer transition-all duration-150",
                        isHovered && "bg-white/5"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[11px] tabular-nums shrink-0 w-7 transition-colors",
                          isHovered
                            ? "text-[var(--accent)]"
                            : "text-[var(--bg)]/35"
                        )}
                      >
                        {concurso.siglaEstado}
                      </span>
                      <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                        <span
                          className={cn(
                            "text-sm font-medium leading-snug whitespace-nowrap shrink-0 transition-colors",
                            isHovered ? "text-[var(--accent-soft)]" : "text-[var(--bg)]"
                          )}
                        >
                          {concurso.nome}
                        </span>
                        <span
                          className={cn(
                            "text-xs leading-snug truncate transition-colors",
                            isHovered ? "text-[var(--bg)]/70" : "text-[var(--bg)]/45"
                          )}
                        >
                          {concurso.detalhe}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-xs text-[var(--bg)]/45 leading-relaxed">
        Atualizado mensalmente com base em editais e previsões oficiais.
      </p>
    </Section>
  );
}
