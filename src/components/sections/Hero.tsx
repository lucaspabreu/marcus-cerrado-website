import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 grain">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-baseline gap-3 mb-5 animate-fade-in">
              <span className="font-display text-xs text-[var(--accent)] tabular-nums">
                01
              </span>
              <span className="eyebrow">Cerrado Concursos</span>
            </div>

            <h1 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-[-0.015em] text-[var(--ink)] animate-fade-up">
              O Preparatório
              <br />
              que você precisa
              <br />
              para se tornar um
              <br />
              <span className="text-[var(--accent)]">Policial Concursado.</span>
            </h1>

            <p
              className="mt-8 text-base sm:text-lg text-[var(--neutral)] leading-relaxed max-w-xl animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Entenda como você pode encurtar o caminho para uma vida estável e se tornar um Policial Concursado.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="#trilhas"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent)] transition-colors w-fit"
              >
                <span>Ver os produtos</span>
                <ArrowDown
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  strokeWidth={1.75}
                />
              </Link>
            </div>
          </div>

          <div
            className="lg:col-span-5 relative animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden bg-[var(--bg-elevated)] ring-1 ring-[var(--line-strong)]">
              <Image
                src="/marcus.jpg"
                alt="Marcus Nery, criador do Método CERRADO, em frente a parede de troncos de madeira"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            {/* Caption editorial */}
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <p className="text-xs text-[var(--neutral)] leading-snug">
                Marcus Nery
                <br />
                <span className="text-[var(--accent)]">Cerrado Concursos</span>
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--neutral-soft)]">
                Goiás, BR
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative C mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-8 font-display text-[14rem] sm:text-[20rem] leading-none text-[var(--accent)]/[0.04] select-none hidden lg:block"
      >
        C
      </div>
    </section>
  );
}
