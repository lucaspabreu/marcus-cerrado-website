import type { Metadata } from "next";
import {
  ArrowUpRight,
  LayoutDashboard,
  MonitorPlay,
  TriangleAlert,
} from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { VideoYouTube } from "@/components/VideoYouTube";

export const metadata: Metadata = {
  title: "Como acessar seu material",
  description:
    "Assista ao vídeo de boas-vindas e acesse as videoaulas na Hotmart e a Plataforma Cerrado.",
  // Página pós-compra: não tem por que aparecer no Google
  robots: { index: false, follow: false },
};

// Vídeo de boas-vindas (o `v=` da URL do YouTube)
const VIDEO_ID = "GPUHQys4Y1E";
const VIDEO_TITULO = "Como acessar seu material";

// Os dois destinos do aluno depois do vídeo. Pra trocar link, mexa aqui.
const acessos = [
  {
    id: "hotmart",
    eyebrow: "Videoaulas",
    titulo: "Vídeos na Hotmart",
    descricao: "Vídeo sobre o método de estudos e como extrair o máximo da plataforma.",
    href: "https://hotmart.com/pt-br/club/cerradoconcursos",
    hrefLabel: "hotmart.com/pt-br/club/cerradoconcursos",
    Icon: MonitorPlay,
  },
  {
    id: "plataforma",
    eyebrow: "Plataforma",
    titulo: "Plataforma Cerrado",
    descricao: "Cronograma, resumos, flashcards e guia de estudos.",
    href: "https://app.cerradoconcursos.com.br/",
    hrefLabel: "app.cerradoconcursos.com.br",
    Icon: LayoutDashboard,
  },
];

// Página escura (mesmo tom da seção "Trilhas" da home): fundo ink, texto bg,
// cards claros por cima — o aviso terracota e os dois links saltam.
export default function ComoAcessarPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[var(--ink)] text-[var(--bg)]">
        <section className="py-12 sm:py-16 md:py-20">
          <Container>
            <header className="max-w-2xl">
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[var(--bg)]/55">
                  Seu acesso
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-normal leading-[1.1] tracking-tight text-[var(--bg)]">
                Como acessar seu material.
              </h1>
            </header>

            {/* AVISO — passo 1. Grande de propósito: o aluno precisa ver o
                vídeo antes de clicar em qualquer link. Um pouco mais estreito
                que o vídeo, centralizado, pra ler como um chamado. */}
            <div
              role="alert"
              className="mx-auto mt-6 sm:mt-10 max-w-[60rem] rounded-xl sm:rounded-2xl bg-[var(--accent)] text-white p-4 sm:p-8 md:p-10 shadow-xl shadow-black/30"
            >
              <div className="flex items-start gap-3 sm:gap-6">
                <TriangleAlert
                  className="h-6 w-6 sm:h-11 sm:w-11 shrink-0 mt-0.5 sm:mt-1"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold text-white/80">
                    Passo 1 · Antes de tudo
                  </p>
                  <p className="mt-1.5 sm:mt-3 font-display text-xl sm:text-3xl lg:text-4xl leading-[1.1] sm:leading-[1.05] tracking-tight">
                    Assista ao vídeo antes de fazer qualquer coisa.
                  </p>
                  <p className="mt-2 sm:mt-4 max-w-xl text-sm sm:text-lg leading-snug sm:leading-relaxed text-white/85">
                    Ele mostra o passo a passo do seu acesso. Só depois de
                    assistir use os links abaixo.
                  </p>
                </div>
              </div>
            </div>

            {/* VÍDEO — com um brilho terracota difuso atrás, pra destacar
                do fundo escuro */}
            <div className="relative mt-8 sm:mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 sm:-inset-8 rounded-[2rem] bg-[var(--accent)] opacity-55 blur-3xl"
              />
              <VideoYouTube id={VIDEO_ID} titulo={VIDEO_TITULO} className="ring-[var(--accent)]/40 shadow-[var(--accent)]/30" />
            </div>

            {/* LINKS — passo 2 */}
            <div className="mt-14 sm:mt-20">
              <header className="mb-8 sm:mb-10 max-w-2xl">
                <div className="mb-4">
                  <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[var(--bg)]/55">
                    Passo 2 · Depois de assistir
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-normal leading-[1.1] tracking-tight text-[var(--bg)]">
                  Seus dois acessos.
                </h2>
              </header>

              <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
                {acessos.map(({ id, eyebrow, titulo, descricao, href, hrefLabel, Icon }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] p-6 sm:p-8 transition-all duration-200 hover:border-[var(--accent)] hover:ring-2 hover:ring-[var(--accent)] hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--bg)] transition-colors duration-200 group-hover:bg-[var(--accent)]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 text-[var(--neutral-soft)] transition-all duration-200 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="mt-6 text-[11px] uppercase tracking-[0.18em] font-medium text-[var(--accent)]">
                      {eyebrow}
                    </span>
                    <span className="mt-2 font-display text-2xl sm:text-[1.75rem] leading-tight tracking-tight text-[var(--ink)]">
                      {titulo}
                    </span>
                    <span className="mt-2 text-sm sm:text-base leading-relaxed text-[var(--neutral)]">
                      {descricao}
                    </span>

                    <span className="mt-6 pt-5 border-t border-[var(--line)] font-mono text-xs text-[var(--neutral)] break-all">
                      {hrefLabel}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
