import { Section } from "../ui/Section";
import { pilaresMetodo } from "@/data/metodo";

export function Metodo() {
  return (
    <Section
      id="metodo"
      number="03"
      eyebrow="Método CERRADO"
      title={
        <>
          Cinco pilares.
          <br />
          Uma rota só.
        </>
      }
      intro="O Método CERRADO é a estrutura por trás de cada trilha. Não é teoria de estudo — é o que sobrou depois de testar, errar e ajustar com mais de mil alunos em concursos policiais reais."
      containerSize="wide"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {pilaresMetodo.map((pilar, idx) => (
          <article
            key={`${pilar.letra}-${idx}`}
            className="group relative"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl leading-none text-[var(--accent)] tracking-tight">
                {pilar.letra}
              </span>
              <span className="font-display text-xs text-[var(--neutral)] tabular-nums">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-normal text-[var(--ink)] leading-[1.25]">
              {pilar.titulo}
            </h3>
            <p className="mt-2.5 text-sm text-[var(--neutral)] leading-relaxed">
              {pilar.descricao}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
