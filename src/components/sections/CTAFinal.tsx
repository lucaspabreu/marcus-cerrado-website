import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          <div className="lg:col-span-8">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-display text-xs text-[var(--accent)] tabular-nums">
                08
              </span>
              <span className="eyebrow text-[var(--neutral)]">A jornada completa</span>
            </div>

            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.015em] text-[var(--ink)]">
              Vai de{" "}
              <span className="text-[var(--accent)]">Combo PRF.</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[var(--ink-soft)] leading-relaxed max-w-2xl">
              Guia, Resumo e Flashcards num pacote só, com condição especial. A forma mais completa de cobrir todas as frentes do estudo até o dia da prova.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
            <Link
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-[var(--ink)] px-6 py-3.5 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent)] transition-colors w-fit"
            >
              <span>Quero o Combo PRF</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </Link>

            <p className="text-xs text-[var(--neutral)] leading-relaxed lg:text-right max-w-xs">
              Sete dias de garantia. Acompanhamento até a prova.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
