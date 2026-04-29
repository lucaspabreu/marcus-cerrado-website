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

            // Drop pin geometry: tip at (cx, cy), head circle above
            const pinScale = isHighlighted ? 1.15 : 1;
            const headRadius = 13 * pinScale;
            const headCx = estado.cx;
            const headCy = estado.cy - headRadius - 2; // pin head sits above tip
            const labelLength = estado.sigla.length * 8.5 + 14;

            return (
              <g
                key={`pin-${estado.sigla}`}
                onMouseEnter={() => onHover(concurso.id)}
                onMouseLeave={() => onHover(null)}
                className="cursor-pointer transition-transform duration-300"
                style={{
                  transformOrigin: `${estado.cx}px ${estado.cy}px`,
                  transform: isHighlighted ? "scale(1.1)" : "scale(1)",
                }}
              >
                {/* Pulse halo at the tip */}
                <circle
                  cx={estado.cx}
                  cy={estado.cy}
                  r={isHighlighted ? 24 : 18}
                  fill={fill}
                  opacity={isHighlighted ? 0.3 : 0.18}
                  className="transition-all duration-300"
                />

                {/* Drop pin shape — teardrop with circular head */}
                <path
                  d={`
                    M ${estado.cx} ${estado.cy}
                    L ${headCx - headRadius * 0.7} ${headCy + headRadius * 0.5}
                    A ${headRadius} ${headRadius} 0 1 1 ${headCx + headRadius * 0.7} ${headCy + headRadius * 0.5}
                    Z
                  `}
                  fill={fill}
                  stroke="var(--ink)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                  className="transition-all duration-300"
                />

                {/* Inner circle on the pin head */}
                <circle
                  cx={headCx}
                  cy={headCy}
                  r={headRadius * 0.42}
                  fill="var(--ink)"
                />

                {/* Always-visible state code label */}
                <g className="pointer-events-none">
                  <rect
                    x={estado.cx + headRadius + 3}
                    y={headCy - 9}
                    width={labelLength}
                    height="18"
                    rx="3"
                    fill="var(--ink)"
                    opacity={isHighlighted ? 1 : 0.92}
                  />
                  <text
                    x={estado.cx + headRadius + 10}
                    y={headCy + 4.5}
                    fontSize="13"
                    fontWeight="700"
                    fill="var(--bg)"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {estado.sigla}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
