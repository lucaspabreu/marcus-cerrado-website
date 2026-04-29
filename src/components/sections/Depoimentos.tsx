import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../ui/Section";
import { depoimentos } from "@/data/depoimentos";

export function Depoimentos() {
  return (
    <Section
      id="depoimentos"
      number="07"
      eyebrow="Resultados"
      title={
        <>
          Aprovações
          <br />
          <span className="text-[var(--accent)]">reais.</span>
        </>
      }
      intro="Depoimentos de alunos aprovados em concursos policiais. Carreiras diferentes, bancas diferentes, mesma matriz por trás."
      containerSize="wide"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)] rounded-lg overflow-hidden">
        {depoimentos.map((dep) => (
          <article
            key={dep.id}
            className="bg-[var(--bg)] p-6 flex flex-col"
          >
            <span
              aria-hidden="true"
              className="font-display text-4xl text-[var(--accent)]/30 leading-none mb-1"
            >
              &ldquo;
            </span>
            <blockquote className="font-display text-base text-[var(--ink)] leading-[1.4] flex-1">
              {dep.texto}
            </blockquote>
            <footer className="mt-5 pt-4 border-t border-[var(--line)]">
              <cite className="not-italic">
                <span className="block font-medium text-sm text-[var(--ink)]">
                  {dep.nome}
                </span>
                <span className="block text-xs text-[var(--accent)] mt-0.5">
                  {dep.concurso}
                </span>
              </cite>
            </footer>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="#"
          className="group inline-flex items-center gap-2.5 rounded-lg border border-[var(--ink)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
        >
          <span>Mais resultados</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </Link>
      </div>
    </Section>
  );
}
