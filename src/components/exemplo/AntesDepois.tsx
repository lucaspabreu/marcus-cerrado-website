import { ArrowRight, Check, X } from "lucide-react";
import { Container } from "../ui/Container";

// Substitui o "Diagnóstico": em vez de parágrafos, três pares lado a lado,
// do erro comum ao que o Projeto resolve.
const pares = [
  { sem: "Abre o edital sem saber o que cai", com: "Guia com o peso de cada matéria" },
  { sem: "Aula atrás de aula, sem prioridade", com: "Cronograma diz o que estudar hoje" },
  { sem: "Faz questão sem saber se evolui", com: "Revisão espaçada que fixa" },
];

export function AntesDepois({ sigla }: { sigla: string }) {
  return (
    <section className="border-t border-[var(--line)] py-16 sm:py-20 md:py-24">
      <Container size="wide">
        <h2 className="max-w-3xl font-display text-3xl leading-[1.1] tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
          Quem reprova não é quem sabe menos.{" "}
          <span className="text-[var(--accent)]">É quem estuda sem direção.</span>
        </h2>

        <div className="mt-12 sm:mt-14">
          {/* Cabeçalho das colunas (só em telas largas) */}
          <div className="mb-4 hidden grid-cols-[1fr_auto_1fr] items-center gap-5 md:grid">
            <span className="eyebrow">Sem método</span>
            <span className="w-10" />
            <span className="eyebrow !text-[var(--accent-soft)]">Com o Projeto {sigla}</span>
          </div>

          <ul className="space-y-4 md:space-y-3">
            {pares.map((par) => (
              <li
                key={par.sem}
                className="grid gap-2 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-5"
              >
                <div className="flex items-center gap-4 rounded-xl border border-[var(--line)] px-5 py-4 sm:px-6 sm:py-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--line)]">
                    <X className="h-4 w-4 text-[var(--neutral-soft)]" strokeWidth={2.5} />
                  </span>
                  <span className="text-base text-[var(--neutral)] line-through decoration-[var(--neutral-soft)]/60 sm:text-lg">
                    {par.sem}
                  </span>
                </div>

                <div className="hidden items-center justify-center md:flex">
                  <ArrowRight className="h-5 w-10 text-[var(--accent)]" strokeWidth={1.75} />
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-[var(--bg-elevated)] px-5 py-4 ring-1 ring-[var(--accent)]/45 sm:px-6 sm:py-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]">
                    <Check className="h-4 w-4 text-[var(--paper)]" strokeWidth={3} />
                  </span>
                  <span className="font-display text-lg tracking-tight text-[var(--ink)] sm:text-xl">
                    {par.com}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
