import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../ui/Section";
import { GaleriaResultados } from "../GaleriaResultados";
import { resultados } from "@/data/resultados";

export function Depoimentos() {
  const destaques = resultados.slice(0, 6);

  return (
    <Section
      id="depoimentos"
      eyebrow="Quem passou"
      title="Resultados."
      intro="Aprovações e depoimentos de alunos em concursos policiais. Carreiras diferentes, bancas diferentes, mesma matriz por trás."
      containerSize="wide"
    >
      <GaleriaResultados imagens={destaques} />

      <div className="mt-10 flex justify-center">
        <Link
          href="/resultados"
          className="group inline-flex items-center gap-2.5 rounded-lg border border-[var(--ink)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
        >
          <span>Ver mais resultados</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </Link>
      </div>
    </Section>
  );
}
