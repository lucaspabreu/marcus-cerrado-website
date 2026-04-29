import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { BarraAprovacoes } from "@/components/sections/BarraAprovacoes";
import { Sobre } from "@/components/sections/Sobre";
import { AulaGratuita } from "@/components/sections/AulaGratuita";
import { Trilhas } from "@/components/sections/Trilhas";
import { Metodo } from "@/components/sections/Metodo";
import { Concursos } from "@/components/sections/Concursos";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <BarraAprovacoes />
        <Sobre />
        <AulaGratuita />
        <Trilhas />
        <Metodo />
        <Concursos />
        <Depoimentos />
        <CTAFinal />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
