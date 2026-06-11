import { Section } from "../ui/Section";
import { ConcursoCard } from "../ui/ConcursoCard";
import { ofertaConcursos } from "@/data/produtos";

const featuredIds = ["prf", "pm-go"];

const ordered = [
  ...ofertaConcursos.filter((c) => featuredIds.includes(c.id)),
  ...ofertaConcursos.filter((c) => !featuredIds.includes(c.id)),
];

export function Trilhas() {
  return (
    <Section
      id="trilhas"
      eyebrow="Trilha de preparação"
      title={
        <>
          Escolha seu <span className="text-[var(--accent-soft)]">Preparatório.</span>
        </>
      }
      intro={
        <>
          <span className="text-[var(--accent-soft)]">Clique</span> em uma carreira para ver os cursos disponíveis.
        </>
      }
      containerSize="wide"
      tone="dark"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-fr">
        {ordered.map((concurso) => {
          const featured = featuredIds.includes(concurso.id);
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
