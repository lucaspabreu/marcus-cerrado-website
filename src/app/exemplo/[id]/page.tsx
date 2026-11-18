import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FaixaOferta } from "@/components/sections/FaixaOferta";
import { VideoYouTube } from "@/components/VideoYouTube";
import { GaleriaResultados } from "@/components/GaleriaResultados";
import { Container } from "@/components/ui/Container";
import { AntesDepois } from "@/components/exemplo/AntesDepois";
import { PerfisGrid } from "@/components/exemplo/PerfisGrid";
import { VitrinePlataforma } from "@/components/exemplo/VitrinePlataforma";
import { OfertaVisual } from "@/components/exemplo/OfertaVisual";
import { MarcusVisual } from "@/components/exemplo/MarcusVisual";
import { ofertaConcursos } from "@/data/produtos";
import { resultados } from "@/data/resultados";

// EXEMPLO: versão "menos texto, mais visual" da página de concurso, pra
// comparar com /concursos/[id]. Não indexa. Se aprovada, substitui as seções
// de lá e esta rota sai.

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Exemplo visual",
  robots: { index: false, follow: false },
};

const ativos = ofertaConcursos.filter(
  (c) => c.status === "ativo" && c.produtos.some((p) => p.destaque)
);

export function generateStaticParams() {
  return ativos.map((c) => ({ id: c.id }));
}

export default async function ExemploPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const concurso = ativos.find((c) => c.id === id);
  if (!concurso) notFound();

  const projeto = concurso.produtos.find((p) => p.destaque)!;
  const inclusos = concurso.produtos.filter((p) => !p.destaque);
  const fundoHero = concurso.imagemHero ?? concurso.imagem;

  return (
    <>
      <FaixaOferta produto={projeto.titulo} />
      <Header />
      <main className="flex-1">
        {/* HERO: igual ao atual, sem a linha de banca */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={fundoHero ? { backgroundImage: `url(${fundoHero})` } : undefined}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85"
          />
          <Container size="wide">
            <div className="relative py-14 sm:py-16 lg:py-20">
              <Link
                href="/#materiais"
                className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--paper)]/70 transition-colors hover:text-[var(--paper)]"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
                <span>Voltar pra carreiras</span>
              </Link>

              <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
                <div className="lg:col-span-6">
                  <span className="inline-flex items-center rounded-full bg-[var(--accent)] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[var(--paper)]">
                    {concurso.statusLabel}
                  </span>
                  <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-[var(--paper)] sm:text-5xl lg:text-[3.5rem]">
                    A Melhor Ferramenta para você{" "}
                    <span className="text-[var(--accent-soft)]">
                      passar no concurso da {concurso.sigla}
                    </span>
                  </h1>
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
                </div>
                {concurso.video && (
                  <div className="lg:col-span-6">
                    <VideoYouTube id={concurso.video.youtubeId} titulo={concurso.video.titulo} />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        <AntesDepois sigla={concurso.sigla} />
        <PerfisGrid sigla={concurso.sigla} />
        <VitrinePlataforma />
        <OfertaVisual
          produto={projeto}
          inclusos={inclusos}
          concurso={{ sigla: concurso.sigla, nome: concurso.nome, brasao: concurso.brasao }}
        />
        <MarcusVisual />

        {/* RESULTADOS: só os prints, sem texto de abertura */}
        <section className="border-t border-[var(--line)] py-16 sm:py-20 md:py-24">
          <Container size="wide">
            <div className="mb-10 flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl leading-[1.1] tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
                Resultados.
              </h2>
              <Link
                href="/resultados"
                className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--accent-soft)] hover:text-[var(--ink)]"
              >
                Ver todos
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
            <GaleriaResultados imagens={resultados.slice(0, 6)} />
          </Container>
        </section>

        {/* AULA GRATUITA: título + vídeo, sem parágrafo */}
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
      </main>
      <Footer />

      {/* Atalho pra comparar com a página atual (só no exemplo) */}
      <Link
        href={`/concursos/${concurso.id}`}
        className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--paper)] px-4 py-2.5 text-xs font-semibold text-[var(--coal)] shadow-lg shadow-black/30 sm:bottom-6 sm:left-6"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        Exemplo · ver página atual
      </Link>
    </>
  );
}
