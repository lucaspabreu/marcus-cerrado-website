// Escada de preço do Projeto (PRF e PM-GO).
//
// O site é export estático (next.config.ts: output "export"), então o preço não
// vira sozinho na hora — o HTML congela no build. A troca é manual: mude
// `faixaAtualId` abaixo e faça o deploy. Preço, valor "de", prazo da tarja de
// urgência e link de checkout mudam juntos, nas duas carreiras.
//
//   06/09 até 23:59 → "lancamento" (R$ 447)
//   07/09 a 11/09   → "semana"     (R$ 497)
//   a partir de 12/09 → "padrao"   (R$ 597)

export type FaixaId = "lancamento" | "semana" | "padrao";

export interface FaixaPreco {
  id: FaixaId;
  /** Posição na linha do tempo — o que separa faixa encerrada de futura. */
  ordem: number;
  /** Nome curto da condição: "lançamento", "até sexta", "padrão". */
  rotulo: string;
  /** Janela da faixa, como aparece na escada de preço. */
  periodo: string;
  /** Parcelamento do checkout. Copiar do Hotmart — não é conta redonda. */
  parcela: string;
  /** Prazo como aparece na tarja de urgência. `null` = sem tarja. */
  prazo: string | null;
  preco: number;
  /** Valor "de" riscado. Ausente na faixa padrão (não há de onde descontar). */
  precoDe?: number;
  /** Checkout por id de produto. Sem entrada aqui, cai no ctaHref do produto. */
  checkout: Record<string, string>;
}

export const faixasPreco: Record<FaixaId, FaixaPreco> = {
  lancamento: {
    id: "lancamento",
    ordem: 0,
    rotulo: "lançamento",
    periodo: "Até hoje 06/09 — 23h59",
    parcela: "12x R$ 45,69",
    prazo: "hoje, às 23:59",
    preco: 447,
    precoDe: 597,
    checkout: {
      "projeto-prf": "https://pay.hotmart.com/M106978976I?off=m5s6kvrx&sck=sitecerrado",
      "projeto-pmgo": "https://pay.hotmart.com/M107409724K?off=ilnvw37v&sck=sitecerrado",
    },
  },
  semana: {
    id: "semana",
    ordem: 1,
    rotulo: "até sexta",
    periodo: "De 07 a 11/09",
    parcela: "12x R$ 50,80",
    prazo: "sexta, 11/09, às 23:59",
    preco: 497,
    precoDe: 597,
    checkout: {
      "projeto-prf": "https://pay.hotmart.com/M106978976I?off=ze8b1ffr&sck=sitecerrado",
      "projeto-pmgo": "https://pay.hotmart.com/M107409724K?off=rzrcwgmr&sck=sitecerrado",
    },
  },
  padrao: {
    id: "padrao",
    ordem: 2,
    rotulo: "padrão",
    periodo: "A partir de 12/09",
    parcela: "12x R$ 61,02",
    prazo: null,
    preco: 597,
    checkout: {
      // TODO(Lucas): links da oferta de R$ 597. Sem `?off=`, o Hotmart manda
      // pra oferta padrão do produto — confirme no painel que a padrão é a de
      // 597 antes de virar pra cá, ou troque pelos links da oferta certa.
      "projeto-prf": "https://pay.hotmart.com/M106978976I?sck=sitecerrado",
      "projeto-pmgo": "https://pay.hotmart.com/M107409724K?sck=sitecerrado",
    },
  },
};

// >>> Vire aqui quando o prazo passar. <<<
export const faixaAtualId: FaixaId = "lancamento";

export const faixaAtual = faixasPreco[faixaAtualId];

// Ordem da escada na tela: cronológica, do preço de hoje pro que vem depois
// (ver components/sections/EscadaPreco.tsx).
export const escadaPreco: FaixaPreco[] = [
  faixasPreco.lancamento,
  faixasPreco.semana,
  faixasPreco.padrao,
];

export function checkoutDaFaixa(
  faixa: FaixaPreco,
  produtoId: string,
  fallback: string
): string {
  return faixa.checkout[produtoId] ?? fallback;
}
