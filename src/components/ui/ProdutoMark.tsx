interface MarkProps {
  className?: string;
  // Color variants — `solid` is the main accent, `dim` is reduced for backgrounds
  tone?: "solid" | "dim";
}

const baseSvgProps = {
  viewBox: "0 0 80 48",
  xmlns: "http://www.w3.org/2000/svg" as const,
  fill: "none" as const,
  "aria-hidden": true,
};

// Pré-Edital — ascending steps, "build the foundation"
export function PreEditalMark({ className, tone = "solid" }: MarkProps) {
  const stroke = tone === "solid" ? "currentColor" : "currentColor";
  return (
    <svg {...baseSvgProps} className={className}>
      <g stroke={stroke} strokeWidth="2" strokeLinecap="square">
        <line x1="4" y1="44" x2="76" y2="44" />
        <line x1="10" y1="34" x2="64" y2="34" opacity="0.85" />
        <line x1="16" y1="24" x2="52" y2="24" opacity="0.7" />
        <line x1="22" y1="14" x2="40" y2="14" opacity="0.55" />
        <line x1="28" y1="4" x2="32" y2="4" opacity="0.4" />
      </g>
    </svg>
  );
}

// Pós-Edital — converging lines into a single dot, "focus on the goal"
export function PosEditalMark({ className }: MarkProps) {
  return (
    <svg {...baseSvgProps} className={className}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="2" y1="6" x2="62" y2="24" opacity="0.4" />
        <line x1="2" y1="16" x2="62" y2="24" opacity="0.6" />
        <line x1="2" y1="24" x2="62" y2="24" />
        <line x1="2" y1="32" x2="62" y2="24" opacity="0.6" />
        <line x1="2" y1="42" x2="62" y2="24" opacity="0.4" />
      </g>
      <circle cx="64" cy="24" r="4" fill="currentColor" />
    </svg>
  );
}

// Combo — two intertwined trajectories, "Pré + Pós integrated"
export function ComboMark({ className }: MarkProps) {
  return (
    <svg {...baseSvgProps} className={className}>
      <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 4 8 C 24 8, 40 40, 76 40" />
        <path d="M 4 40 C 24 40, 40 8, 76 8" opacity="0.55" />
      </g>
      <circle cx="4" cy="8" r="2.5" fill="currentColor" />
      <circle cx="76" cy="40" r="2.5" fill="currentColor" />
      <circle cx="4" cy="40" r="2" fill="currentColor" opacity="0.55" />
      <circle cx="76" cy="8" r="2" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

// Mentoria — single dot with concentric rings, "individual attention"
export function MentoriaMark({ className }: MarkProps) {
  return (
    <svg {...baseSvgProps} className={className}>
      <g stroke="currentColor" fill="none">
        <circle cx="40" cy="24" r="20" strokeWidth="0.8" opacity="0.25" />
        <circle cx="40" cy="24" r="13" strokeWidth="1" opacity="0.5" />
        <circle cx="40" cy="24" r="7" strokeWidth="1.2" opacity="0.85" />
      </g>
      <circle cx="40" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}

export const PRODUTO_MARKS: Record<
  string,
  React.ComponentType<MarkProps>
> = {
  "pre-edital": PreEditalMark,
  "pos-edital": PosEditalMark,
  "combo-cerrado": ComboMark,
  mentoria: MentoriaMark,
};
