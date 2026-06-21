import Link from "next/link";
import { Play } from "lucide-react";
import { Section } from "../ui/Section";

// When you have a real YouTube/Vimeo video, fill these.
// `youtubeId` enables the embed on click; `posterUrl` becomes the thumbnail.
const VIDEO = {
  titulo: "O Caminho do Cerrado",
  duracao: "25 min",
  descricao: "Por que focar em concursos policiais a partir de hoje pode mudar a sua rota.",
  youtubeId: "ssQPHA1qIBM",
  // posterUrl: "/aula-poster.jpg", // ← optional: real thumbnail
  href: "https://youtu.be/ssQPHA1qIBM",
};

export function AulaGratuita() {
  return (
    <Section
      id="aula"
      eyebrow="Primeira vez aqui?"
      title={
        <>
          Antes dos materiais, uma <span className="text-[var(--accent)]">aula aberta.</span>
        </>
      }
      containerSize="wide"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Text side */}
        <div className="lg:col-span-5">
          <p className="text-base sm:text-lg text-[var(--ink-soft)] leading-[1.65]">
            Se você chegou agora e <span className="text-[var(--accent)] font-medium">não sabe por onde começar</span>{" "}
            no mundo dos concursos policiais, Marcus gravou uma aula gratuita pra você. Em{" "}
            <span className="font-medium text-[var(--ink)]">25 minutos</span>, ele mostra{" "}
            <span className="font-medium text-[var(--ink)]">por que vale a pena focar em concursos policiais a partir de hoje</span> — mesmo que você ainda não saiba qual carreira escolher.
          </p>

          <p className="mt-5 text-sm text-[var(--accent)] font-medium">
            Toque no vídeo ao lado pra assistir agora.
          </p>

          <ul className="mt-8 space-y-2 text-xs text-[var(--neutral)]">
            <li className="flex items-baseline gap-2">
              <span className="text-[var(--accent)]">·</span>
              <span>Sem cadastro e sem custo</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-[var(--accent)]">·</span>
              <span>Direto ao ponto, sem rodeio</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-[var(--accent)]">·</span>
              <span>Pra quem ainda nem sabe qual carreira escolher</span>
            </li>
          </ul>
        </div>

        {/* Video side */}
        <div className="lg:col-span-7">
          <Link
            href={VIDEO.href}
            target={VIDEO.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group block relative aspect-video rounded-xl overflow-hidden ring-1 ring-white/15 hover:ring-[var(--accent)] transition-all"
            aria-label={`Assistir aula gratuita: ${VIDEO.titulo}`}
          >
            {/* Background — gradient placeholder; swap for real poster when available */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #2a1610 0%, #1a0e0a 40%, #0e0606 100%)",
              }}
            />

            {/* Decorative grain texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            {/* Decorative serif "C" mark */}
            <div
              aria-hidden="true"
              className="absolute -top-12 -right-8 font-display text-[18rem] leading-none text-[var(--accent)]/[0.15] select-none pointer-events-none"
            >
              C
            </div>

            {/* Bottom title bar */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--accent-soft)] mb-2">
                Aula gratuita · {VIDEO.duracao}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--bg)] leading-tight tracking-tight">
                {VIDEO.titulo}
              </h3>
              <p className="mt-2 text-sm text-[var(--bg)]/75 leading-snug max-w-md">
                {VIDEO.descricao}
              </p>
            </div>

            {/* Centered play button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative">
                {/* Pulse halo */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"
                />
                <span className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--bg)] text-[var(--ink)] shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--bg)]">
                  <Play className="h-6 w-6 sm:h-7 sm:w-7 translate-x-0.5" strokeWidth={2} fill="currentColor" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}
