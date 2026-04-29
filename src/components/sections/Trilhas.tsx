import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Section } from "../ui/Section";
import { PRODUTO_MARKS } from "../ui/ProdutoMark";
import { produtos } from "@/data/produtos";
import { cn } from "@/lib/utils";

const badgeLabel: Record<string, string> = {
  "pre-edital": "Pré-Edital",
  "pos-edital": "Pós-Edital",
  "combo-cerrado": "Combo",
  mentoria: "Mentoria",
};

// Banner backgrounds — gradients tuned to each product's character.
// When real photos exist at /public/produtos/[id].jpg, they'll layer on top.
const bannerBackground: Record<string, string> = {
  "pre-edital":
    "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 60%, #0e0e0e 100%)",
  "pos-edital":
    "linear-gradient(135deg, #4a2516 0%, #2a1610 60%, #14080a 100%)",
  "combo-cerrado":
    "linear-gradient(135deg, #b5532a 0%, #6e2f17 60%, #2a1108 100%)",
  mentoria:
    "linear-gradient(135deg, #1f1f1f 0%, #141414 60%, #0a0a0a 100%)",
};

// Set to true once you save a real photo at public/produtos/[id].jpg
const productHasImage: Record<string, boolean> = {
  "pre-edital": false,
  "pos-edital": false,
  "combo-cerrado": false,
  mentoria: false,
};

export function Trilhas() {
  return (
    <Section
      id="trilhas"
      number="04"
      eyebrow="Trilhas de preparação"
      title={
        <>
          Quatro trilhas. <span className="text-[var(--accent)]">Uma jornada</span> por vez.
        </>
      }
      intro="Cada trilha tem um momento certo na vida do concurseiro. Você não precisa de tudo ao mesmo tempo. Precisa do que faz sentido pra onde você está agora."
      containerSize="wide"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {produtos.map((produto) => {
          const destaque = produto.destaque;
          const fechado = !!produto.badge;
          const Mark = PRODUTO_MARKS[produto.id];
          const hasImage = productHasImage[produto.id];
          const imageSrc = `/produtos/${produto.id}.jpg`;

          return (
            <article
              key={produto.id}
              className={cn(
                "group/card relative flex flex-col rounded-lg overflow-hidden transition-all duration-300 min-h-[480px]",
                destaque
                  ? "ring-2 ring-[var(--accent)]"
                  : "border border-[var(--line)]",
                "bg-[var(--bg-elevated)]",
                fechado && "opacity-60 saturate-[0.4] hover:opacity-90 hover:saturate-100"
              )}
            >
              {/* Selo "Mais escolhido" */}
              {produto.selo && (
                <div className="absolute top-3 right-3 z-30">
                  <span className="inline-flex items-center rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--bg)] shadow-lg shadow-black/20">
                    {produto.selo}
                  </span>
                </div>
              )}

              {/* BANNER — image with title overlay */}
              <div
                className="relative h-44 overflow-hidden"
                style={
                  hasImage
                    ? {
                        backgroundImage: `url(${imageSrc})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : { background: bannerBackground[produto.id] }
                }
              >

                {/* Decorative giant mark — uses currentColor */}
                {Mark && (
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 group-hover/card:scale-110",
                      destaque ? "text-[var(--bg)]/15" : "text-[var(--accent)]/12"
                    )}
                  >
                    <Mark className="w-[80%] h-auto" />
                  </div>
                )}

                {/* Bottom darkening overlay for text legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                />

                {/* Top label badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-md px-2 py-1 text-[10px] uppercase tracking-[0.18em] font-medium backdrop-blur-sm",
                      destaque
                        ? "bg-[var(--bg)]/15 text-[var(--bg)] ring-1 ring-[var(--bg)]/30"
                        : "bg-[var(--bg)]/10 text-[var(--bg)] ring-1 ring-[var(--bg)]/25"
                    )}
                  >
                    {badgeLabel[produto.id]}
                  </span>
                </div>

                {/* Centered title */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
                  <h3 className="font-display text-3xl sm:text-[2rem] leading-[1.05] tracking-tight text-[var(--bg)] text-center">
                    {produto.titulo}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-6 bg-[var(--bg-elevated)]">
                <div className="flex-1">
                  <p className="text-sm leading-snug font-medium text-[var(--accent)]">
                    {produto.subtitulo}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--neutral)]">
                    {produto.descricao}
                  </p>

                  <ul className="mt-5 space-y-2 text-xs text-[var(--ink-soft)]">
                    {produto.bullets.slice(0, 3).map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]"
                          strokeWidth={2.5}
                        />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--line)]">
                  {produto.badge && (
                    <p className="mb-3 text-[10px] uppercase tracking-wider font-medium text-[var(--neutral)]">
                      {produto.badge}
                    </p>
                  )}
                  <Link
                    href={produto.ctaHref}
                    className={cn(
                      "group/btn inline-flex items-center justify-center gap-2 w-full rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
                      destaque
                        ? "bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-deep)]"
                        : fechado
                        ? "bg-[var(--bg)] border border-[var(--line-strong)] text-[var(--ink)] hover:border-[var(--ink)]"
                        : "bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)]"
                    )}
                    aria-label={`${produto.ctaLabel} — ${produto.titulo}`}
                  >
                    <span>{produto.ctaLabel}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

    </Section>
  );
}
