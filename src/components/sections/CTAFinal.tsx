import { Container } from "../ui/Container";

export function CTAFinal() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-[var(--line)] relative overflow-hidden">
      {/* Decorative serif */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-8 font-display text-[20rem] leading-none text-[var(--accent)]/[0.08] select-none pointer-events-none hidden md:block"
      >
        .
      </div>

      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="mb-5">
              <span className="eyebrow text-[var(--neutral)]">Aula gratuita</span>
            </div>

            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.015em] text-[var(--ink)]">
              Comece com uma{" "}
              <span className="text-[var(--accent)]">aula gratuita.</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[var(--ink-soft)] leading-relaxed">
              O Marcus abre o Método CERRADO com uma aula completa: como estudar pra concurso policial, o que priorizar e por onde começar. Sem custo, direto ao ponto.
            </p>
          </div>

          {/* Video container — embed do YouTube */}
          <div className="lg:col-span-7 aspect-video w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--ink)] relative">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/ssQPHA1qIBM"
              title="Aula gratuita — Método CERRADO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
