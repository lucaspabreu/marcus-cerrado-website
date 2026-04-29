import { Section } from "../ui/Section";

export function Sobre() {
  return (
    <Section
      id="sobre"
      number="02"
      eyebrow="Quem é o Marcus"
      title={
        <>
          Aprovado aos 19. <span className="text-[var(--accent)]">Concurseiro</span> antes disso.
        </>
      }
      containerSize="wide"
    >
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[var(--ink-soft)] leading-[1.65]">
          <p>
            Marcus Nery passou na PRF aos 19 anos. Em seguida, aprovações em PCGO, PMGO, PMDF e CBMGO — bancas diferentes, mesma matriz por trás.
          </p>
          <p>
            Hoje comanda o Cerrado Concursos. Não é guru e não promete vaga. Ensina o que aprendeu na prática: leitura técnica de edital, estratégia por banca e rotina sustentável.
          </p>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9 lg:pt-1">
          <div className="border-l-2 border-[var(--accent)] pl-5">
            <p className="font-display text-lg sm:text-xl leading-[1.35] text-[var(--ink)]">
              &ldquo;A diferença entre passar e quase passar quase nunca é o conteúdo. É a leitura do que a banca quer.&rdquo;
            </p>
            <p className="mt-4 eyebrow">— Marcus Nery</p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <dt className="eyebrow">Aprovações</dt>
              <dd className="mt-1.5 font-display text-3xl text-[var(--ink)] tabular-nums">
                05
              </dd>
              <p className="mt-1 text-xs text-[var(--neutral)] leading-snug">
                Em segurança pública
              </p>
            </div>
            <div>
              <dt className="eyebrow">Comunidade</dt>
              <dd className="mt-1.5 font-display text-3xl text-[var(--ink)] tabular-nums">
                42K
              </dd>
              <p className="mt-1 text-xs text-[var(--neutral)] leading-snug">
                Concurseiros policiais
              </p>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
