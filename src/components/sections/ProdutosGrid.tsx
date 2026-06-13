import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Produto } from "@/types";
import { cn } from "@/lib/utils";

// Destaca em negrito os 3 produtos citados na descrição do Combo
function renderDescricao(produto: Produto) {
  if (produto.id !== "combo-prf") return produto.descricao;
  return produto.descricao
    .split(/(Guia de Estudos|Resumo|Flashcards)/)
    .map((parte, i) =>
      /^(Guia de Estudos|Resumo|Flashcards)$/.test(parte) ? (
        <strong key={i} className="font-semibold text-[var(--ink-soft)]">
          {parte}
        </strong>
      ) : (
        parte
      )
    );
}

// Tom base (escurecido) por trás da composição de capa
const bannerBackground: Record<string, string> = {
  "guia-carreiras-policiais":
    "linear-gradient(150deg, #2a2a2a 0%, #161616 55%, #0b0b0b 100%)",
  "guia-prf":
    "linear-gradient(150deg, #2a2a2a 0%, #161616 55%, #0b0b0b 100%)",
  "resumo-prf":
    "linear-gradient(150deg, #3a1f14 0%, #1d0f09 55%, #0d0604 100%)",
  "flashcards-prf":
    "linear-gradient(150deg, #45230f 0%, #241208 55%, #100705 100%)",
  "combo-prf":
    "linear-gradient(150deg, #9a4622 0%, #4f2010 55%, #1c0c06 100%)",
};

// Kicker (linha superior) e tag (etiqueta azul inferior) por produto
const coverKicker: Record<string, string> = {
  "guia-prf": "PRÉ-EDITAL",
  "resumo-prf": "PRÉ-EDITAL",
  "flashcards-prf": "PRÉ-EDITAL",
  "combo-prf": "PRÉ-EDITAL",
};

const coverTag: Record<string, string> = {
  "guia-prf": "COMPLETO",
  "resumo-prf": "COMPLETO",
  "flashcards-prf": "COMPLETO",
  "combo-prf": "3 EM 1",
};

interface ProdutosGridProps {
  produtos: Produto[];
}

export function ProdutosGrid({ produtos }: ProdutosGridProps) {
  const destaque = produtos.find((p) => p.destaque);
  const avulsos = produtos.filter((p) => !p.destaque);

  // Sem produto em destaque: grade simples (fallback defensivo)
  if (!destaque) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-10 sm:space-y-14">
      <ComboHero produto={destaque} />

      {avulsos.length > 0 && (
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[var(--neutral)] whitespace-nowrap">
              Ou compre separado
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="hidden text-xs text-[var(--neutral)] sm:block whitespace-nowrap">
              Cada material também é vendido avulso
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {avulsos.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Composição de "capa" estilo arte do produto: fundo escuro gritty,
// marca-d'água repetida, brasão da PRF, kicker, título dourado e tag azul.
function CoverBanner({
  produto,
  variant,
}: {
  produto: Produto;
  variant: "hero" | "card";
}) {
  const hero = variant === "hero";
  const tint = bannerBackground[produto.id] ?? bannerBackground["guia-prf"];
  const kicker = coverKicker[produto.id] ?? "PRF";
  const tag = coverTag[produto.id] ?? "COMPLETO";

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: tint }}>
      {/* Marca-d'água "POLÍCIA RODOVIÁRIA FEDERAL" repetida */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden select-none pointer-events-none"
      >
        <div
          className={cn(
            "absolute -left-[12%] -top-[12%] w-[140%] rotate-[-6deg] flex flex-wrap content-start gap-x-5 leading-[0.92] text-[#e7c794]",
            hero ? "opacity-[0.09]" : "opacity-[0.08]"
          )}
        >
          {Array.from({ length: hero ? 64 : 36 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "font-cover uppercase whitespace-nowrap",
                hero ? "text-4xl" : "text-2xl"
              )}
            >
              POLÍCIA RODOVIÁRIA FEDERAL
            </span>
          ))}
        </div>
      </div>

      {/* Brasão da PRF emergindo pela direita */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute top-1/2 aspect-square -translate-y-1/2 [mask-image:radial-gradient(circle,#000_38%,transparent_70%)] [-webkit-mask-image:radial-gradient(circle,#000_38%,transparent_70%)]",
          hero ? "right-[-10%] h-[118%] opacity-[0.24]" : "right-[-16%] h-[160%] opacity-40"
        )}
        style={{
          backgroundImage: "url(/brasao-prf.jpg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: hero ? "saturate(0.95) blur(1.4px)" : "saturate(1.2)",
        }}
      />

      {/* Grão / textura */}
      <div
        aria-hidden="true"
        className="cover-grain pointer-events-none absolute inset-0 opacity-[0.13]"
      />

      {/* Vinheta + base escura pra leitura */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 88% at 50% 36%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
      />

      {/* Logo Cerrado (clareado) no topo — só na capa-herói */}
      {hero && (
        <div
          aria-hidden="true"
          className="absolute top-5 left-1/2 z-20 h-7 w-36 -translate-x-1/2 opacity-90 [filter:brightness(0)_invert(1)]"
          style={{
            backgroundImage: "url(/cerrado-logo-marrom.webp)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Selo (Mais escolhido) */}
      {produto.selo && (
        <span className="absolute top-3 right-3 z-20 inline-flex items-center rounded-full bg-[var(--bg)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-deep)] shadow-lg shadow-black/30">
          {produto.selo}
        </span>
      )}

      {/* Kicker + título + tag, centralizados */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center">
        <span
          className={cn(
            "font-sans uppercase font-medium text-white/65",
            hero
              ? "text-[11px] tracking-[0.45em] pl-[0.45em]"
              : "text-[9px] tracking-[0.4em] pl-[0.4em]"
          )}
        >
          {kicker}
        </span>

        <h3
          className={cn(
            "mt-2 font-cover uppercase leading-[0.86] tracking-[0.01em] bg-gradient-to-b from-[#FFE08A] via-[#F0A52E] to-[#BF6914] bg-clip-text text-transparent [filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.55))]",
            hero ? "text-6xl sm:text-7xl" : "text-[1.7rem] sm:text-3xl"
          )}
        >
          {produto.titulo}
        </h3>

        <span className="mt-4 inline-flex items-center rounded-[3px] bg-[#1e51b0] px-3 py-[5px] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-md shadow-black/40">
          {tag}
        </span>
      </div>
    </div>
  );
}

// Card-herói do combo: largo, horizontal, domina a seção
function ComboHero({ produto }: { produto: Produto }) {
  const economia =
    typeof produto.preco === "number" && typeof produto.precoDe === "number"
      ? produto.precoDe - produto.preco
      : null;

  return (
    <article className="group/combo relative overflow-hidden rounded-xl bg-[var(--bg-elevated)] ring-2 ring-[var(--accent)] shadow-xl shadow-black/10">
      <div className="grid lg:grid-cols-[0.85fr_1fr]">
        {/* Painel-capa */}
        <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
          <CoverBanner produto={produto} variant="hero" />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col p-8 sm:p-10">
          <p className="text-sm leading-relaxed text-[var(--neutral)] sm:text-base">
            {renderDescricao(produto)}
          </p>

          <ul className="mt-6 grid gap-x-6 gap-y-3 text-sm text-[var(--ink-soft)] sm:grid-cols-2">
            {produto.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                  strokeWidth={2.5}
                />
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {economia !== null && (
                <span className="mb-2 inline-flex items-center rounded-full bg-[var(--accent)]/12 px-2.5 py-1 text-[11px] font-semibold text-[var(--accent-deep)]">
                  Economize R$ {economia}
                </span>
              )}
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-4xl leading-none tracking-tight text-[var(--accent)] sm:text-5xl">
                  R$ {produto.preco}
                </span>
                {typeof produto.precoDe === "number" && (
                  <span className="text-base text-[var(--neutral)] line-through">
                    R$ {produto.precoDe}
                  </span>
                )}
              </div>
            </div>

            <Link
              href={produto.ctaHref}
              className="group/btn inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-[var(--bg)] shadow-lg shadow-[var(--accent)]/20 transition-colors hover:bg-[var(--accent-deep)] sm:text-base"
              aria-label={`${produto.ctaLabel} — ${produto.titulo}`}
            >
              <span>{produto.ctaLabel}</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

// Card avulso: compacto e secundário ao combo
function ProdutoCard({ produto }: { produto: Produto }) {
  const fechado = !!produto.badge;

  return (
    <article
      className={cn(
        "group/card relative flex flex-col overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--line-strong)]",
        fechado &&
          "opacity-60 saturate-[0.4] hover:opacity-90 hover:saturate-100"
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <CoverBanner produto={produto} variant="card" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <p className="text-[13px] font-medium leading-snug text-[var(--accent)]">
            {produto.subtitulo}
          </p>

          <ul className="mt-4 space-y-2 text-xs text-[var(--ink-soft)]">
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

        <div className="mt-5 border-t border-[var(--line)] pt-4">
          {produto.badge && (
            <p className="mb-3 text-[10px] uppercase tracking-wider font-medium text-[var(--neutral)]">
              {produto.badge}
            </p>
          )}
          {typeof produto.preco === "number" && (
            <div className="mb-3.5 flex items-baseline gap-2">
              <span className="font-display text-xl leading-none tracking-tight text-[var(--ink)]">
                R$ {produto.preco}
              </span>
              {typeof produto.precoDe === "number" && (
                <span className="text-sm text-[var(--neutral)] line-through">
                  R$ {produto.precoDe}
                </span>
              )}
            </div>
          )}
          <Link
            href={produto.ctaHref}
            className={cn(
              "group/btn inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
              fechado
                ? "border border-[var(--line-strong)] bg-[var(--bg)] text-[var(--ink)] hover:border-[var(--ink)]"
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
}
