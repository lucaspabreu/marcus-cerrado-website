interface MarkProps {
  className?: string;
  tone?: "solid" | "dim";
}

const baseSvgProps = {
  viewBox: "0 0 80 48",
  xmlns: "http://www.w3.org/2000/svg" as const,
  fill: "none" as const,
  "aria-hidden": true,
};

// Guia — sumário/roteiro: linhas de texto com marcadores à esquerda
export function GuiaMark({ className }: MarkProps) {
  return (
    <svg {...baseSvgProps} className={className}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        <line x1="14" y1="8" x2="62" y2="8" />
        <circle cx="8" cy="18" r="1.5" fill="currentColor" opacity="0.85" />
        <line x1="14" y1="18" x2="56" y2="18" opacity="0.85" />
        <circle cx="8" cy="28" r="1.5" fill="currentColor" opacity="0.7" />
        <line x1="14" y1="28" x2="50" y2="28" opacity="0.7" />
        <circle cx="8" cy="38" r="1.5" fill="currentColor" opacity="0.55" />
        <line x1="14" y1="38" x2="44" y2="38" opacity="0.55" />
      </g>
    </svg>
  );
}

// Resumo — blocos condensados empilhados, denso e organizado
export function ResumoMark({ className }: MarkProps) {
  return (
    <svg {...baseSvgProps} className={className}>
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <rect x="4" y="4" width="72" height="10" opacity="0.85" />
        <rect x="4" y="18" width="58" height="10" opacity="0.7" />
        <rect x="4" y="32" width="68" height="10" opacity="0.55" />
      </g>
      <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="square">
        <line x1="8" y1="9" x2="40" y2="9" opacity="0.5" />
        <line x1="8" y1="23" x2="34" y2="23" opacity="0.4" />
        <line x1="8" y1="37" x2="38" y2="37" opacity="0.35" />
      </g>
    </svg>
  );
}

// Flashcards — cartões sobrepostos com leve rotação
export function FlashcardsMark({ className }: MarkProps) {
  return (
    <svg {...baseSvgProps} className={className}>
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <rect
          x="14"
          y="10"
          width="36"
          height="28"
          rx="2"
          opacity="0.4"
          transform="rotate(-8 32 24)"
        />
        <rect
          x="22"
          y="10"
          width="36"
          height="28"
          rx="2"
          opacity="0.65"
          transform="rotate(-2 40 24)"
        />
        <rect x="30" y="10" width="36" height="28" rx="2" />
      </g>
      <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="square">
        <line x1="34" y1="18" x2="58" y2="18" opacity="0.7" />
        <line x1="34" y1="24" x2="52" y2="24" opacity="0.5" />
        <line x1="34" y1="30" x2="56" y2="30" opacity="0.4" />
      </g>
    </svg>
  );
}

// Combo PRF — três trajetórias convergindo num ponto único
export function ComboPrfMark({ className }: MarkProps) {
  return (
    <svg {...baseSvgProps} className={className}>
      <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 4 8 C 24 12, 40 24, 64 24" />
        <path d="M 4 24 L 64 24" opacity="0.7" />
        <path d="M 4 40 C 24 36, 40 24, 64 24" opacity="0.55" />
      </g>
      <circle cx="4" cy="8" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="4" cy="24" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="4" cy="40" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="66" cy="24" r="4" fill="currentColor" />
    </svg>
  );
}

export const PRODUTO_MARKS: Record<
  string,
  React.ComponentType<MarkProps>
> = {
  "guia-carreiras-policiais": GuiaMark,
  "guia-prf": GuiaMark,
  "resumo-prf": ResumoMark,
  "flashcards-prf": FlashcardsMark,
  "combo-prf": ComboPrfMark,
};
