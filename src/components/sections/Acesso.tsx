import { linhasAcesso, reguaMeses } from "@/data/acesso";
import { Section } from "../ui/Section";

// Seção "Acesso", logo abaixo do investimento: responde "por quanto tempo eu
// uso isso" antes do checkout. Uma régua da compra até `reguaMeses`; o trecho
// incluso fica preenchido, o resto apagado com o rótulo de `depois`.
export function Acesso() {
  return (
    <Section
      id="acesso"
      containerSize="wide"
      eyebrow="Acesso"
      title="Quanto tempo dura o seu acesso"
    >
      <div className="space-y-12 sm:space-y-16">
        {linhasAcesso.map((linha) => {
          const pct = Math.min(100, (linha.meses / reguaMeses) * 100);
          const completo = linha.meses >= reguaMeses;

          return (
            <div
              key={linha.id}
              className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10"
            >
              <div className="lg:col-span-3">
                <p className="font-display text-xl leading-tight tracking-tight text-[var(--ink)] sm:text-2xl">
                  {linha.titulo}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-snug text-[var(--neutral)]">
                  {linha.descricao}
                </p>
              </div>

              <div className="lg:col-span-9">
                <div className="relative pt-6">
                  {/* Trilho completo (apagado) com o trecho incluso por cima */}
                  <div className="relative h-20 rounded-2xl bg-[var(--bg-elevated)] ring-1 ring-[var(--line-strong)] sm:h-24">
                    {!completo && (
                      <div
                        className="absolute inset-y-0 right-0 flex items-center justify-center"
                        style={{ left: `${pct}%` }}
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--neutral-soft)] sm:text-xs">
                          {linha.depois}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute inset-y-0 left-0 flex items-center rounded-2xl bg-[#2B1A11] px-5 shadow-lg shadow-black/15 sm:px-8"
                      style={{ width: `${pct}%` }}
                    >
                      <span className="font-display text-2xl leading-none tracking-tight text-white sm:text-4xl">
                        {linha.meses} meses
                      </span>
                    </div>
                  </div>

                  {/* Marcador vertical no fim do trecho incluso */}
                  {!completo && (
                    <div
                      aria-hidden="true"
                      className="absolute top-0 bottom-0 w-px bg-[var(--line-strong)]"
                      style={{ left: `${pct}%` }}
                    />
                  )}

                  {/* Eixo: compra → fim do acesso → fim da régua */}
                  <div className="relative mt-5 h-5 text-xs sm:mt-6 sm:text-sm">
                    <span className="absolute left-0 text-[var(--neutral-soft)]">
                      compra
                    </span>
                    {!completo && (
                      <span
                        className="absolute -translate-x-1/2 whitespace-nowrap bg-[var(--bg)] px-2 font-semibold text-[var(--neutral)]"
                        style={{ left: `${pct}%` }}
                      >
                        {linha.meses} meses
                      </span>
                    )}
                    <span className="absolute right-0 font-medium text-[var(--neutral)]">
                      {reguaMeses} meses
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
