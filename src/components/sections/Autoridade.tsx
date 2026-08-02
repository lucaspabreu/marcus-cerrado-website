import Image from "next/image";
import { Check } from "lucide-react";
import { Section } from "../ui/Section";

const conquistas = [
  "5 aprovações em carreiras policiais: PRF, PCGO, PMGO, PMDF e CBMGO",
  "Aprovado na PRF aos 19 anos, antes de terminar a faculdade",
  "Hoje é Servidor Público Federal e professor na Cerrado Concursos",
  "Ensina o que aplicou na prática — não teoria de curso genérico",
];

interface AutoridadeProps {
  sigla?: string;
}

export function Autoridade({ sigla }: AutoridadeProps) {
  return (
    <Section id="quem-e-marcus" containerSize="wide">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
        <div className="lg:col-span-7">
          <span className="eyebrow">Quem é o Marcus</span>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-[2.75rem] font-normal leading-[1.1] tracking-tight text-[var(--ink)]">
            Passou aos 19. <span className="text-[var(--accent)]">Hoje ensina como.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--neutral)]">
            {sigla
              ? `O criador do material que você está prestes a levar pra ${sigla}.`
              : "O criador do material que você está prestes a levar pra prova."}
          </p>

          <ul className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {conquistas.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm sm:text-[15px] leading-snug text-[var(--ink-soft)]"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                  strokeWidth={2.5}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-xl border-l-2 border-[var(--accent)] pl-5">
            <p className="font-display text-lg sm:text-xl leading-[1.35] text-[var(--ink)]">
              &ldquo;A diferença entre passar e quase passar quase nunca é o conteúdo. É a leitura do que a banca quer.&rdquo;
            </p>
            <p className="mt-4 eyebrow">— Marcus Nery</p>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <div className="overflow-hidden rounded-xl ring-1 ring-[var(--line-strong)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/marcus.jpg"
                alt="Marcus Nery, criador do Método CERRADO"
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 divide-x divide-[var(--bg)]/10 bg-[var(--ink)] px-5 py-4">
              <div>
                <p className="font-display text-2xl text-[var(--bg)] tabular-nums">05</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider leading-snug text-[var(--bg)]/60">
                  Aprovações
                  <br />
                  em segurança pública
                </p>
              </div>
              <div className="pl-5">
                <p className="font-display text-2xl text-[var(--bg)] tabular-nums">19</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider leading-snug text-[var(--bg)]/60">
                  Anos
                  <br />
                  aprovado na PRF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
