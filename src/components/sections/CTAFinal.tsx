import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";

export function CTAFinal() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--ink)] text-[var(--bg)] relative overflow-hidden">
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
              <span className="font-display text-xs text-[var(--accent-soft)] tabular-nums">
                09
              </span>
              <span className="eyebrow text-[var(--bg)]/60">A jornada completa</span>
            </div>

            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.015em]">
              Comece pelo{" "}
              <span className="text-[var(--accent-soft)]">Combo Cerrado.</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[var(--bg)]/70 leading-relaxed max-w-2xl">
              A trilha completa, do começo até a prova. É a forma mais densa de aprender o método e a única que cobre todo o ciclo: pré-edital, banca, simulados e véspera.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
            <Link
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent-soft)] transition-colors w-fit"
            >
              <span>Quero o Combo Cerrado</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </Link>

            <p className="text-xs text-[var(--bg)]/50 leading-relaxed lg:text-right max-w-xs">
              Sete dias de garantia. Acompanhamento até a prova.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
