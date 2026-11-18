import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Diagnostico } from "@/components/sections/Diagnostico";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { FaixaOferta } from "@/components/sections/FaixaOferta";
import { PlataformaCerrado } from "@/components/sections/PlataformaCerrado";
import { Autoridade } from "@/components/sections/Autoridade";
import { ProdutosGrid } from "@/components/sections/ProdutosGrid";
import { GaleriaResultados } from "@/components/GaleriaResultados";
import { VideoYouTube } from "@/components/VideoYouTube";
import { Container } from "@/components/ui/Container";
import { ofertaConcursos } from "@/data/produtos";
import { resultados } from "@/data/resultados";
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
  // Vídeo só entra no hero de concurso ativo: é apresentação do que está à venda
  const video = ativo ? concurso.video : undefined;
  const fundoHero = concurso.imagemHero ?? concurso.imagem;
  const projeto = concurso.produtos.find((p) => p.destaque);
  const materiais = concurso.produtos.filter((p) => !p.destaque && !p.pacote);
  // Materiais ainda não lançados na carreira (badge "Em breve"), pelo prefixo
  // do id ("guia-pmgo" → "guia"). As seções não prometem o que está aqui.
  const emBreve = materiais.filter((p) => p.badge).map((p) => p.id.split("-")[0]);

  return (
    <>
      {ativo && <FaixaOferta produto={projeto?.titulo} />}
      <Header />
      <main className="flex-1">
        {/* HERO do concurso */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={
              fundoHero
                ? {
                    backgroundImage: `url(${fundoHero})`,
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
            <div className="relative py-14 sm:py-16 lg:py-20">
              <Link
                href="/#materiais"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[var(--paper)]/70 hover:text-[var(--paper)] transition-colors mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
                <span>Voltar pra carreiras</span>
              </Link>

              <div
                className={cn(
                  "grid gap-10 lg:items-center lg:gap-14",
                  video && "lg:grid-cols-12"
                )}
              >
                <div className={video ? "lg:col-span-6" : "max-w-3xl"}>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
                      ativo
                        ? "bg-[var(--accent)] text-[var(--paper)]"
                        : "bg-[var(--paper)]/15 text-[var(--paper)] ring-1 ring-[var(--paper)]/25"
                    )}
                  >
                    {concurso.statusLabel}
                  </span>

                  <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-[var(--paper)]">
                    {ativo ? (
                      <>
                        A Melhor Ferramenta para você{" "}
                        <span className="text-[var(--accent-soft)]">
                          passar no concurso da {concurso.sigla}
                        </span>
                      </>
                    ) : (
                      concurso.nome
                    )}
                  </h1>

                  <p className="mt-5 text-base sm:text-lg text-[var(--paper)]/70 leading-relaxed max-w-2xl">
                    {ativo ? (
                      <span className="text-[var(--paper)]">{concurso.nome}</span>
                    ) : (
                      <>
                        Sigla: <span className="text-[var(--paper)]">{concurso.sigla}</span>
                        {concurso.banca && (
                          <>
                            {" · "}Banca:{" "}
                            <span className="text-[var(--paper)]">{concurso.banca}</span>
                          </>
                        )}
                      </>
                    )}
                  </p>

                  {/* Leva direto ao card do Projeto com o preço (âncora em ProdutosGrid) */}
                  {ativo && (
                    <a
                      href="#investimento"
                      className="group/cta mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-[var(--paper)] shadow-lg shadow-black/25 transition-colors hover:bg-[var(--accent-soft)] sm:text-base"
                    >
                      <span>Quero adquirir</span>
                      <ArrowDown
                        className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-y-0.5"
                        strokeWidth={2}
                      />
                    </a>
                  )}
                </div>

                {video && (
                  <div className="lg:col-span-6">
                    <VideoYouTube id={video.youtubeId} titulo={video.titulo} />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {ativo && <Diagnostico sigla={concurso.sigla} emBreve={emBreve} />}

        {/* Qualifica o visitante e mostra a plataforma antes do preço; os dois
            falam do Projeto, então só com ele à venda */}
        {ativo && projeto && (
          <>
            <ParaQuem sigla={concurso.sigla} />
            <PlataformaCerrado emBreve={emBreve} />
          </>
        )}

        {/* PRODUTOS */}
        <section className="border-t border-[var(--line)] py-16 sm:py-20 md:py-24">
          <Container size="wide">
            {(!ativo || !projeto) && (
              <div className="mb-10 sm:mb-14 max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-normal leading-[1.1] tracking-tight text-[var(--ink)]">
                  {ativo
                    ? `Materiais pra ${concurso.sigla}.`
                    : `Em breve para ${concurso.sigla}.`}
                </h2>
                {!ativo && (
                  <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--neutral)]">
                    Estamos preparando os materiais. Por enquanto, dá uma olhada nas carreiras que já estão prontas.
                  </p>
                )}
              </div>
            )}

            {concurso.produtos.length > 0 ? (
              <ProdutosGrid produtos={concurso.produtos} concurso={concurso} />
            ) : (
              <div className="rounded-lg border border-dashed border-[var(--line-strong)] bg-[var(--bg-elevated)] p-10 text-center">
                <p className="font-display text-2xl text-[var(--ink)]">
                  Em breve
                </p>
                <p className="mt-3 text-sm text-[var(--neutral)] max-w-md mx-auto">
                  Os materiais pra {concurso.sigla} estão em preparação. Volte em breve ou veja as carreiras já disponíveis.
                </p>
                <Link
                  href="/#materiais"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--paper)] transition-colors"
                >
                  Ver carreiras disponíveis
                </Link>
              </div>
            )}
          </Container>
        </section>

        {ativo && (
          <>
            <Autoridade sigla={concurso.sigla} />

            {/* RESULTADOS: só os prints, sem texto de abertura */}
            <section id="depoimentos" className="border-t border-[var(--line)] py-16 sm:py-20 md:py-24">
              <Container size="wide">
                <div className="mb-10 flex items-end justify-between gap-6">
                  <h2 className="font-display text-3xl leading-[1.1] tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
                    Resultados.
                  </h2>
                  <Link
                    href="/resultados"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--accent-soft)] hover:text-[var(--ink)]"
                  >
                    Ver todos
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                  </Link>
                </div>
                <GaleriaResultados imagens={resultados.slice(0, 6)} />
              </Container>
            </section>

            {/* AULA GRATUITA: título + vídeo */}
            <section className="border-t border-[var(--line)] py-16 sm:py-20 md:py-24">
              <Container>
                <h2 className="text-center font-display text-3xl leading-[1.1] tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
                  Comece com uma <span className="text-[var(--accent)]">aula gratuita.</span>
                </h2>
                <div className="mx-auto mt-10 max-w-4xl">
                  <VideoYouTube id="ssQPHA1qIBM" titulo="Aula gratuita — Método CERRADO" />
                </div>
              </Container>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
