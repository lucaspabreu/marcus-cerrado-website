import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { BarraAprovacoes } from "@/components/sections/BarraAprovacoes";
import { Sobre } from "@/components/sections/Sobre";
import { Metodo } from "@/components/sections/Metodo";
import { Trilhas } from "@/components/sections/Trilhas";
import { Concursos } from "@/components/sections/Concursos";
import { Canais } from "@/components/sections/Canais";
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
        <Metodo />
        <Trilhas />
        <Concursos />
        <Canais />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
