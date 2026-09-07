import Image from "next/image";
import { recursosPlataforma } from "@/data/plataforma";

// Abre a seção de produtos e mostra o que é a parte "PLATAFORMA" do combo,
// antes de a pessoa chegar no card com o preço.
export function PlataformaCerrado({ titulo }: { titulo: string }) {
  return (
    <section aria-labelledby="plataforma-cerrado">
      <div className="max-w-2xl">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Combo + plataforma
        </span>
        <h2
          id="plataforma-cerrado"
          className="mt-3 font-display text-3xl font-normal leading-[1.1] tracking-tight text-[#4A2C18] sm:text-4xl md:text-[2.75rem]"
        >
          {titulo}.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[var(--neutral)] sm:text-lg">
          Onde o Método vira rotina. Você abre e já sabe o que estudar hoje.
        </p>
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {recursosPlataforma.map((recurso) => (
          <div key={recurso.id}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--line-strong)] bg-[#0E0E0E] shadow-[0_8px_24px_-14px_rgba(0,0,0,0.35)]">
              <Image
                src={recurso.imagem}
                alt={recurso.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top"
              />
            </div>
            <h4 className="mt-4 font-display text-lg tracking-tight text-[#4A2C18]">
              {recurso.titulo}
            </h4>
            <p className="mt-1.5 text-sm leading-snug text-[var(--neutral)]">
              {recurso.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
