import {
  ArrowRight,
  Briefcase,
  Crosshair,
  Sprout,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { paraQuemE, paraQuemNaoE, type Perfil } from "@/data/paraQuem";
import { Container } from "../ui/Container";

// Seção "Pra quem é", entre o diagnóstico e a plataforma: qualifica o
// visitante antes do preço. Perfis viram blocos com ícone; os "não é", etiquetas
// riscadas. O conteúdo fica em data/paraQuem.ts.
const icones: Record<Perfil["id"], LucideIcon> = {
  "do-zero": Sprout,
  "sem-evolucao": TrendingUp,
  rotina: Briefcase,
  "na-trave": Target,
  foco: Crosshair,
};

export function ParaQuem({ sigla }: { sigla: string }) {
  return (
    <section
      id="para-quem"
      className="bg-[var(--band)] py-16 text-[var(--band-fg)] sm:py-20 md:py-24"
    >
      <Container size="wide">
        <h2 className="font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          Pra quem é o Projeto{" "}
          <span className="whitespace-nowrap text-[var(--accent-soft)]">{sigla}?</span>
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {paraQuemE.map((perfil, i) => {
            const Icone = icones[perfil.id];
            return (
              <li
                key={perfil.id}
                className={
                  "flex flex-col justify-between gap-8 rounded-2xl bg-[var(--band-fg)]/[0.05] p-5 ring-1 ring-[var(--band-fg)]/10 sm:p-6 " +
                  // Número ímpar de blocos: o último ocupa a linha toda no celular
                  (i === paraQuemE.length - 1 && paraQuemE.length % 2 === 1
                    ? "col-span-2 md:col-span-1"
                    : "")
                }
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/15">
                  <Icone className="h-6 w-6 text-[var(--accent-soft)]" strokeWidth={1.75} />
                </span>
                <span className="font-display text-lg leading-snug tracking-tight sm:text-xl">
                  {perfil.rotulo.replaceAll("{sigla}", sigla)}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col gap-8 sm:mt-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="mr-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--band-fg)]/50">
              Não é pra quem quer
            </span>
            {paraQuemNaoE.map((item) => (
              <span
                key={item}
                className="rounded-full px-3.5 py-1.5 text-sm text-[var(--band-fg)]/50 line-through ring-1 ring-[var(--band-fg)]/15"
              >
                {item.replaceAll("{sigla}", sigla)}
              </span>
            ))}
          </div>

          <a
            href="#investimento"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-medium tracking-tight transition-colors hover:bg-[var(--accent-deep)] sm:w-auto"
          >
            <span>É pra mim</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
