import Image from "next/image";
import { aprovacoes } from "@/data/aprovacoes";
import { Container } from "../ui/Container";

// Substitui o "Quem é o Marcus": foto grande, as cinco aprovações como
// selos e dois números. Sem lista de conquistas e sem citação.
export function MarcusVisual() {
  return (
    <section className="border-t border-[var(--line)] py-16 sm:py-20 md:py-24">
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-[var(--line-strong)]">
              <Image
                src="/marcus3.webp"
                alt="Marcus Nery, criador do Método CERRADO, em frente a parede de troncos de madeira"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-4 p-6 text-[var(--paper)]">
                <div>
                  <p className="font-display text-5xl leading-none tabular-nums">19</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-[var(--paper)]/70">
                    anos, aprovado na PRF
                  </p>
                </div>
                <div>
                  <p className="font-display text-5xl leading-none tabular-nums">100K</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-[var(--paper)]/70">
                    na comunidade
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">Quem é o Marcus</span>
            <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
              Passou aos 19. <span className="text-[var(--accent)]">Hoje ensina como.</span>
            </h2>

            <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--neutral)]">
              {String(aprovacoes.length).padStart(2, "0")} aprovações em segurança pública
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {aprovacoes.map((a, i) => (
                <li
                  key={a.sigla}
                  className={
                    "rounded-xl p-4 ring-1 sm:p-5 " +
                    (i === 0
                      ? "bg-[var(--accent)] text-[var(--paper)] ring-[var(--accent)]"
                      : "bg-[var(--bg-elevated)] ring-[var(--line)]")
                  }
                >
                  <p className="font-display text-2xl tracking-tight sm:text-3xl">{a.sigla}</p>
                  <p
                    className={
                      "mt-1 text-xs leading-snug " +
                      (i === 0 ? "text-[var(--paper)]/80" : "text-[var(--neutral)]")
                    }
                  >
                    {a.nome}
                  </p>
                </li>
              ))}
              <li className="rounded-xl border border-dashed border-[var(--line-strong)] p-4 sm:p-5">
                <p className="font-display text-2xl tracking-tight text-[var(--accent-soft)] sm:text-3xl">Hoje</p>
                <p className="mt-1 text-xs leading-snug text-[var(--neutral)]">
                  Servidor Público Federal e professor
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
