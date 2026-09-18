import { ArrowRight, Check, X } from "lucide-react";
import { objecoes, paraQuemE, paraQuemNaoE } from "@/data/paraQuem";
import { Section } from "../ui/Section";

// Seção "Pra quem é", entre o diagnóstico e os produtos: qualifica o visitante
// antes do preço. Perfis à esquerda (é / não é), objeções respondidas pelo
// Marcus à direita. O conteúdo fica em data/paraQuem.ts.
export function ParaQuem({ sigla }: { sigla: string }) {
  const comSigla = (texto: string) => texto.replaceAll("{sigla}", sigla);

  return (
    <Section
      id="para-quem"
      tone="dark"
      containerSize="wide"
      eyebrow="Antes de decidir"
      title={
        <>
          Pra quem é o Projeto{" "}
          <span className="whitespace-nowrap text-[var(--accent-soft)]">
            {sigla}?
          </span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <ul className="space-y-5">
            {paraQuemE.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <Check
                  className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-soft)]"
                  strokeWidth={2.5}
                />
                <span className="text-base leading-snug text-[var(--bg)]/85 sm:text-lg">
                  {comSigla(item)}
                </span>
              </li>
            ))}
          </ul>

          <div aria-hidden="true" className="mt-10 h-px bg-[var(--bg)]/15" />

          <div className="pt-8">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--bg)]/55">
              E pra quem não é
            </span>
            <ul className="mt-5 space-y-3.5">
              {paraQuemNaoE.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--bg)]/40"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm leading-snug text-[var(--bg)]/60">
                    {comSigla(item)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#investimento"
            className="group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-medium tracking-tight text-[var(--bg)] transition-colors duration-200 hover:bg-[var(--accent-deep)] sm:w-auto"
          >
            <span>É pra mim, quero ver o Projeto</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </a>
        </div>

        <div className="space-y-5 lg:col-span-7">
          {objecoes.map((objecao) => (
            <article
              key={objecao.id}
              className="rounded-2xl bg-[var(--bg)]/[0.06] p-6 ring-1 ring-[var(--bg)]/10 sm:p-8"
            >
              <p className="font-display text-xl leading-snug tracking-tight text-[var(--bg)] sm:text-2xl">
                “{comSigla(objecao.pergunta)}”
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--bg)]/65 sm:text-base">
                {objecao.resposta}
              </p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                Marcus Nery
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
