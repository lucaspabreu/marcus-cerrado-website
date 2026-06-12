import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Container } from "@/components/ui/Container";
import { GaleriaResultados } from "@/components/GaleriaResultados";
import { resultados } from "@/data/resultados";

export const metadata: Metadata = {
  title: "Resultados — Aprovações do Método CERRADO",
  description:
    "Aprovações e depoimentos reais de alunos do Método CERRADO em concursos policiais.",
};

export default function ResultadosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-20 md:py-24">
          <Container size="wide">
            <header className="mb-10 sm:mb-14 max-w-2xl">
              <Link
                href="/#depoimentos"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[var(--neutral)] hover:text-[var(--ink)] transition-colors mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
                <span>Voltar pra home</span>
              </Link>

              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[var(--neutral)]">
                  Quem passou
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-normal leading-[1.1] tracking-tight text-[var(--ink)]">
                Resultados.
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--neutral)] max-w-xl">
                Aprovações e depoimentos de alunos em concursos policiais.
                Carreiras diferentes, bancas diferentes, mesma matriz por trás.
                Toque em qualquer print pra ampliar.
              </p>
            </header>

            <GaleriaResultados imagens={resultados} />
          </Container>
        </section>

        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
