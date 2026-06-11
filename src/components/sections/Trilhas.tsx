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
      eyebrow="Materiais de estudo"
      title={
        <>
          Escolha seus <span className="text-[var(--accent-soft)]">Materiais.</span>
        </>
      }
      intro={
        <>
          <span className="text-[var(--accent-soft)]">Clique</span> em uma carreira para ver os materiais disponíveis.
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
