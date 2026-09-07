import { Container } from "@/components/ui/Container";
import { faixaAtual } from "@/data/precos";
import { ofertaAtiva } from "@/data/vendas";

// Faixa fina no topo da página do concurso, marcando o prazo da faixa de preço
// vigente. Some sozinha quando a faixa não tem prazo (preço padrão) ou quando
// `ofertaAtiva` vira false em @/data/vendas.
export function FaixaOferta() {
  if (!ofertaAtiva || faixaAtual.prazo === null) return null;

  return (
    <div className="bg-[#A23420]">
      <Container size="wide">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center">
          <span className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--bg)]/80">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--bg)]/90"
            />
            Oferta por tempo limitado
          </span>

          <span
            aria-hidden="true"
            className="hidden h-4 w-px bg-[var(--bg)]/25 sm:inline-block"
          />

          <span className="text-sm text-[var(--bg)]/85 sm:text-[15px]">
            Projeto por R$ {faixaAtual.preco} até{" "}
            <strong className="font-semibold text-[var(--bg)]">
              {faixaAtual.prazo}
            </strong>
          </span>
        </p>
      </Container>
    </div>
  );
}
