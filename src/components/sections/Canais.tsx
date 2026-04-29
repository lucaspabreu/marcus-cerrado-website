import Link from "next/link";
import { ArrowUpRight, Instagram, Youtube } from "lucide-react";
import { Section } from "../ui/Section";
import { canais } from "@/data/canais";

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Instagram: Instagram,
  YouTube: Youtube,
  TikTok: TikTokIcon,
};

function TikTokIcon({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function Canais() {
  return (
    <Section
      id="canais"
      number="06"
      eyebrow="Canais de conteúdo"
      title={
        <>
          Estudo aberto.
          <br />
          <span className="text-[var(--accent)]">Todo dia.</span>
        </>
      }
      intro="O que dá pra mostrar fora da trilha — análises de banca, leitura de edital, recortes do que importa pra quem quer entrar numa carreira policial."
      containerSize="wide"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)] rounded-lg overflow-hidden">
        {canais.map((canal) => {
          const Icon = ICONS[canal.plataforma];
          return (
            <Link
              key={canal.id}
              href={canal.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${canal.plataforma} ${canal.handle}`}
              className="group bg-[var(--bg)] p-6 hover:bg-[var(--bg-elevated)] transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                {Icon && (
                  <Icon
                    className="h-5 w-5 text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors"
                    strokeWidth={1.5}
                  />
                )}
                <ArrowUpRight
                  className="h-4 w-4 text-[var(--neutral)] group-hover:text-[var(--accent)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </div>

              <p className="eyebrow">{canal.plataforma}</p>
              <h3 className="mt-1.5 font-display text-xl text-[var(--ink)] leading-tight">
                {canal.handle}
              </h3>
              <p className="mt-3 text-xs text-[var(--neutral)] leading-relaxed">
                {canal.descricao}
              </p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
