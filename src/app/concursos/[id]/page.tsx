import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { ProdutosGrid } from "@/components/sections/ProdutosGrid";
import { Container } from "@/components/ui/Container";
import { ofertaConcursos } from "@/data/produtos";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return ofertaConcursos.map((concurso) => ({ id: concurso.id }));
}

const defaultBannerGradient =
  "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 60%, #0e0e0e 100%)";

export default async function ConcursoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const concurso = ofertaConcursos.find((c) => c.id === id);

  if (!concurso) {
    notFound();
  }

  const ativo = concurso.status === "ativo";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO do concurso */}
        <section className="relative overflow-hidden border-b border-[var(--line)]">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={
              concurso.imagem
                ? {
                    backgroundImage: `url(${concurso.imagem})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : { background: defaultBannerGradient }
            }
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85"
          />

          <Container size="wide">
            <div className="relative py-20 sm:py-24 lg:py-28">
              <Link
                href="/#trilhas"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[var(--bg)]/70 hover:text-[var(--bg)] transition-colors mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
                <span>Voltar pra carreiras</span>
              </Link>

              <div className="flex items-center gap-3 mb-5">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
                    ativo
                      ? "bg-[var(--accent)] text-[var(--bg)]"
                      : "bg-[var(--bg)]/15 text-[var(--bg)] ring-1 ring-[var(--bg)]/25"
                  )}
                >
                  {concurso.statusLabel}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[var(--bg)]/55">
                  Carreira policial
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-[var(--bg)] max-w-3xl">
                {concurso.nome}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[var(--bg)]/70 leading-relaxed max-w-2xl">
                Sigla: <span className="text-[var(--bg)]">{concurso.sigla}</span>
                {concurso.banca && (
                  <>
                    {" · "}Banca: <span className="text-[var(--bg)]">{concurso.banca}</span>
                  </>
                )}
              </p>
            </div>
          </Container>
        </section>

        {/* PRODUTOS */}
        <section className="py-16 sm:py-20 md:py-24">
          <Container size="wide">
            <div className="mb-10 sm:mb-14 max-w-2xl">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-xs text-[var(--accent)] tabular-nums">
                  01
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[var(--neutral)]">
                  Produtos disponíveis
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-normal leading-[1.1] tracking-tight text-[var(--ink)]">
                {ativo
                  ? `Materiais pra ${concurso.sigla}.`
                  : `Em breve para ${concurso.sigla}.`}
              </h2>
              {ativo ? (
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--neutral)]">
                  {concurso.produtos.length === 1
                    ? "Um produto disponível pra esta carreira."
                    : `${concurso.produtos.length} produtos disponíveis pra esta carreira. Escolha o que faz mais sentido pra onde você está agora.`}
                </p>
              ) : (
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--neutral)]">
                  Estamos preparando os materiais. Por enquanto, dá uma olhada nas carreiras que já estão prontas.
                </p>
              )}
            </div>

            {concurso.produtos.length > 0 ? (
              <ProdutosGrid produtos={concurso.produtos} />
            ) : (
              <div className="rounded-lg border border-dashed border-[var(--line-strong)] bg-[var(--bg-elevated)] p-10 text-center">
                <p className="font-display text-2xl text-[var(--ink)]">
                  Em breve
                </p>
                <p className="mt-3 text-sm text-[var(--neutral)] max-w-md mx-auto">
                  Os materiais pra {concurso.sigla} estão em preparação. Volte em breve ou veja as carreiras já disponíveis.
                </p>
                <Link
                  href="/#trilhas"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent)] transition-colors"
                >
                  Ver carreiras disponíveis
                </Link>
              </div>
            )}
          </Container>
        </section>

        {ativo && <CTAFinal />}
      </main>
      <Footer />
    </>
  );
}
