import Link from "next/link";
import { cn } from "@/lib/utils";
import type { OfertaConcurso } from "@/types";

interface ConcursoCardProps {
  concurso: OfertaConcurso;
  featured?: boolean;
}

const defaultBannerGradient =
  "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 60%, #0e0e0e 100%)";

export function ConcursoCard({ concurso, featured = false }: ConcursoCardProps) {
  const ativo = concurso.status === "ativo";

  const baseClasses = cn(
    "group/concurso relative flex flex-col rounded-lg border bg-[var(--bg-elevated)] overflow-hidden text-left transition-all duration-200 h-full",
    ativo
      ? featured
        ? "border-[var(--accent)] ring-1 ring-[var(--accent)]/40 hover:ring-2 hover:ring-[var(--accent)] shadow-[0_10px_30px_-12px_rgba(181,83,42,0.35)] cursor-pointer"
        : "border-[var(--line)] hover:border-[var(--ink)] hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] cursor-pointer"
      : "border-[var(--line)] opacity-60 saturate-[0.35] cursor-not-allowed"
  );

  const content = (
    <>
      {/* BANNER */}
      <div
        className="relative overflow-hidden aspect-[1284/508]"
        style={
          concurso.imagem
            ? {
                backgroundImage: `url(${concurso.imagem})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : { background: defaultBannerGradient }
        }
      >
        <div className="absolute top-3 right-3 z-10">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur-sm",
              ativo
                ? "bg-[var(--accent)] text-[var(--bg)] shadow-lg shadow-black/20"
                : "bg-[var(--bg)]/85 text-[var(--neutral)] ring-1 ring-[var(--bg)]/40"
            )}
          >
            {concurso.statusLabel}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className={cn("flex flex-col flex-1 gap-3", featured ? "p-6 sm:p-7" : "p-5")}>
        <div className="flex items-start gap-3">
          <div
            aria-hidden="true"
            className={cn(
              "shrink-0 flex items-center justify-center rounded-md overflow-hidden font-display uppercase tracking-wider transition-colors",
              featured
                ? "h-14 w-14 text-sm"
                : "h-12 w-12 text-[11px]",
              concurso.brasao
                ? "bg-transparent"
                : ativo
                  ? featured
                    ? "bg-[var(--accent)] text-[var(--bg)]"
                    : "bg-[var(--ink)] text-[var(--bg)] group-hover/concurso:bg-[var(--accent)]"
                  : "bg-[var(--line)] text-[var(--neutral)]"
            )}
          >
            {concurso.brasao ? (
              <img
                src={concurso.brasao}
                alt=""
                className="h-full w-full object-cover scale-110"
              />
            ) : concurso.sigla.length <= 5 ? (
              concurso.sigla
            ) : (
              concurso.sigla.slice(0, 3)
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className={cn(
                "font-display leading-tight text-[var(--ink)] truncate",
                featured ? "text-2xl sm:text-3xl" : "text-lg"
              )}
            >
              Concurso {concurso.sigla}
            </h3>
            <p
              className={cn(
                "mt-1 leading-snug text-[var(--neutral)]",
                featured ? "text-sm" : "text-xs"
              )}
            >
              {concurso.nome}
            </p>
          </div>
        </div>

        {concurso.banca && (
          <p className="text-[11px] uppercase tracking-wider text-[var(--neutral-soft)]">
            {concurso.banca}
          </p>
        )}

        {ativo && (
          <div className="mt-auto flex flex-col items-start gap-2 border-t border-[var(--line)] pt-3 lg:flex-row lg:items-center lg:justify-between">
            <span className="text-[11px] uppercase tracking-wider text-[var(--neutral)] whitespace-nowrap">
              {concurso.produtos.length}{" "}
              {concurso.produtos.length === 1 ? "produto" : "produtos"}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg font-medium text-[var(--bg)] whitespace-nowrap transition-colors",
                featured ? "px-5 py-2.5 text-sm" : "px-4 py-2 text-xs",
                ativo && featured
                  ? "bg-[var(--accent)] group-hover/concurso:bg-[var(--accent-deep)]"
                  : "bg-[var(--ink)] group-hover/concurso:bg-[var(--accent)]"
              )}
            >
              Quero começar
              <span aria-hidden="true" className="transition-transform duration-300 group-hover/concurso:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        )}
      </div>
    </>
  );

  if (!ativo) {
    return (
      <div className={baseClasses} aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/concursos/${concurso.id}`}
      aria-label={`Ver produtos de ${concurso.sigla} — ${concurso.nome}`}
      className={baseClasses}
    >
      {content}
    </Link>
  );
}
