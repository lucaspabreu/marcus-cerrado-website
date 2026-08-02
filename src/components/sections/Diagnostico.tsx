import { X } from "lucide-react";
import { Section } from "../ui/Section";

const erros = [
  "Abre o edital sem saber o que a banca realmente cobra",
  "Assiste aula atrás de aula sem prioridade nenhuma",
  "Resolve questão sem saber se está evoluindo",
];

interface DiagnosticoProps {
  sigla?: string;
}

export function Diagnostico({ sigla }: DiagnosticoProps) {
  return (
    <Section id="diagnostico" containerSize="wide">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
        <div className="lg:col-span-7">
          <span className="eyebrow">Diagnóstico</span>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-[2.75rem] font-normal leading-[1.1] tracking-tight text-[var(--ink)]">
            Quem reprova não é quem sabe menos.{" "}
            <span className="text-[var(--accent)]">É quem estuda sem direção.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl text-[var(--neutral)]">
            É o que acontece com a maioria dos candidatos {sigla ? `à ${sigla}` : "a concursos policiais"}: muita hora de estudo, pouca conversão em aprovação.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-xl font-medium text-[var(--ink-soft)]">
            O problema quase nunca é capacidade. É falta de método.
          </p>

          <div className="mt-8 max-w-xl border-l-2 border-[var(--accent)] pl-5">
            <p className="text-sm sm:text-base leading-relaxed text-[var(--neutral)]">
              Sem leitura de edital, sem prioridade por matéria e sem revisão ativa, estudar vira hábito — não estratégia.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-7 sm:p-8">
            <span className="eyebrow">O que normalmente acontece</span>

            <ul className="mt-5 space-y-4">
              {erros.map((erro) => (
                <li
                  key={erro}
                  className="flex items-start gap-3 text-sm leading-snug text-[var(--ink-soft)]"
                >
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neutral-soft)]"
                    strokeWidth={2.5}
                  />
                  <span>{erro}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-[var(--line)] pt-6">
              <p className="text-sm italic leading-relaxed text-[var(--ink-soft)]">
                &ldquo;O Método CERRADO existe porque respeita o cérebro, o tempo e a rotina real de quem estuda pra concurso.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
