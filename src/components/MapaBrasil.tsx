"use client";

import { cn } from "@/lib/utils";
import type { Concurso, StatusConcurso } from "@/types";
import { estadosPaths, MAP_VIEWBOX } from "@/data/brasil-paths";

const statusFill: Record<StatusConcurso, string> = {
  "edital-publicado": "var(--accent)",
  "definicao-banca": "var(--accent)",
  "previsao-edital": "var(--accent-soft)",
  "comissao-formada": "#3a3a3a",
  "edital-em-estudo": "#1f1f1f",
};

interface MapaBrasilProps {
  concursos: Concurso[];
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}

export function MapaBrasil({ concursos, hoveredId, onHover }: MapaBrasilProps) {
  // Map sigla → concurso for quick lookup
  const concursoBySigla = new Map<string, Concurso>();
  for (const c of concursos) {
    concursoBySigla.set(c.siglaEstado, c);
  }

  const hoveredConcurso = hoveredId
    ? concursos.find((c) => c.id === hoveredId)
    : null;
  const hoveredSigla = hoveredConcurso?.siglaEstado;

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label="Mapa do Brasil com pinos indicando estados com concursos policiais previstos"
      >
        {/* States — solid off-white silhouette */}
        <g>
          {estadosPaths.map((estado) => {
            const concurso = concursoBySigla.get(estado.sigla);
            const hasConcurso = !!concurso;
            const isHighlighted = hoveredSigla === estado.sigla;

            return (
              <path
                key={estado.sigla}
                d={estado.d}
                fill={
                  isHighlighted
                    ? "var(--accent)"
                    : hasConcurso
                    ? "var(--bg)"
                    : "var(--line-strong)"
                }
                stroke="var(--ink)"
                strokeWidth={isHighlighted ? 1.2 : 0.7}
                strokeLinejoin="round"
                onMouseEnter={() => concurso && onHover(concurso.id)}
                onMouseLeave={() => onHover(null)}
                className={cn(
                  "transition-all duration-200",
                  hasConcurso && "cursor-pointer"
                )}
                aria-label={
                  hasConcurso
                    ? `${estado.nome} — ${concurso?.nome}`
                    : estado.nome
                }
              />
            );
          })}
        </g>

        {/* Pins for states with concursos — render last to stay on top */}
        <g>
          {estadosPaths.map((estado) => {
            const concurso = concursoBySigla.get(estado.sigla);
            if (!concurso) return null;
            const isHighlighted = hoveredSigla === estado.sigla;
            const fill = statusFill[concurso.status];

            return (
              <g
                key={`pin-${estado.sigla}`}
                onMouseEnter={() => onHover(concurso.id)}
                onMouseLeave={() => onHover(null)}
                className="cursor-pointer"
              >
                {/* Pulse ring */}
                <circle
                  cx={estado.cx}
                  cy={estado.cy}
                  r={isHighlighted ? 12 : 7}
                  fill={fill}
                  opacity={isHighlighted ? 0.35 : 0.25}
                  className="transition-all duration-300"
                />
                {/* Solid dot */}
                <circle
                  cx={estado.cx}
                  cy={estado.cy}
                  r={isHighlighted ? 5 : 3.5}
                  fill={fill}
                  stroke="var(--ink)"
                  strokeWidth="1"
                  className="transition-all duration-300"
                />
                {/* State code label on hover */}
                {isHighlighted && (
                  <g className="pointer-events-none">
                    <rect
                      x={estado.cx + 8}
                      y={estado.cy - 18}
                      width={estado.sigla.length * 6.5 + 8}
                      height="14"
                      rx="2"
                      fill="var(--ink)"
                    />
                    <text
                      x={estado.cx + 12}
                      y={estado.cy - 8}
                      fontSize="9"
                      fontWeight="600"
                      fill="var(--bg)"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {estado.sigla}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
