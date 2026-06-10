import { Section } from "../ui/Section";
import { ConcursoCard } from "../ui/ConcursoCard";
import { ofertaConcursos } from "@/data/produtos";

export function Trilhas() {
  return (
    <Section
      id="trilhas"
      number="02"
      eyebrow="Trilha de preparação"
      title={
        <>
          Escolha sua <span className="text-[var(--accent-soft)]">carreira.</span>
        </>
      }
      intro="Clique em uma carreira pra ver os produtos disponíveis. Outras entram conforme os editais avançam."
      containerSize="wide"
      tone="dark"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-fr">
        {ofertaConcursos.map((concurso) => {
          const featured = concurso.id === "prf";
          return (
            <div
              key={concurso.id}
              className={featured ? "col-span-2 sm:col-span-2 lg:col-span-2 sm:row-span-2" : ""}
            >
              <ConcursoCard concurso={concurso} featured={featured} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
