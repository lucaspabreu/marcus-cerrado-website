import { escadaPreco, faixaAtual } from "@/data/precos";
import { vendasPausadas } from "@/data/vendas";
import { cn } from "@/lib/utils";

// Escada de preço embaixo do card do Projeto: ancora no valor padrão e termina
// no de hoje. As faixas que ainda não chegaram ficam apagadas; as que já
// passaram, riscadas. Some sozinha quando o preço vigente já é o padrão — sem
// aumento pela frente, a escada não teria o que anunciar.
export function EscadaPreco() {
  if (vendasPausadas || faixaAtual.prazo === null) return null;

  return (
    <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5 sm:p-7">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          O preço sobe
        </span>
        <p className="text-sm text-[var(--neutral)]">
          Quem entra até {faixaAtual.prazo} paga o valor de {faixaAtual.rotulo}.
          Depois, sobe — e não volta.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-4">
        {escadaPreco.map((faixa) => {
          const vigente = faixa.id === faixaAtual.id;
          const encerrada = faixa.ordem < faixaAtual.ordem;

          return (
            <div
              key={faixa.id}
              className={cn(
                "rounded-lg px-2 py-4 text-center sm:px-4 sm:py-5",
                vigente
                  ? "bg-[#2B1A11] shadow-lg shadow-black/15"
                  : "opacity-45"
              )}
            >
              <p
                className={cn(
                  "text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] sm:text-[10px] sm:tracking-[0.14em]",
                  vigente ? "text-[var(--accent-soft)]" : "text-[var(--neutral)]"
                )}
              >
                {faixa.periodo}
              </p>
              <p
                className={cn(
                  "mt-1.5 text-[11px] sm:text-sm",
                  vigente ? "text-white/65" : "text-[var(--neutral)]"
                )}
              >
                {faixa.rotulo}
              </p>
              <p
                className={cn(
                  "mt-3 font-display text-xl leading-[1.05] tracking-tight sm:text-2xl lg:text-3xl",
                  vigente ? "text-white" : "text-[var(--ink-soft)]",
                  encerrada && "line-through decoration-1"
                )}
              >
                {faixa.parcelas}x{" "}
                <span className="whitespace-nowrap">R$ {faixa.parcela}</span>
              </p>
              <p
                className={cn(
                  "mt-2 text-[10px] leading-tight sm:text-xs",
                  vigente ? "text-white/55" : "text-[var(--neutral)]",
                  encerrada && "line-through decoration-1"
                )}
              >
                ou R$ {faixa.preco}
                <span className="hidden sm:inline"> à vista</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
