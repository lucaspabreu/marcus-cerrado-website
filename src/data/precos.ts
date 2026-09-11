// Escada de preço do Projeto (PRF e PM-GO).
//
// O site é export estático (next.config.ts: output "export"), então o preço não
// vira sozinho na hora — o HTML congela no build. A troca é manual: mude
// `faixaAtualId` abaixo e faça o deploy. Preço, valor "de", prazo da tarja de
// urgência e link de checkout mudam juntos, nas duas carreiras.
//
// O cronômetro da tarja (FaixaOferta) zera sozinho em `encerraEm` e a tarja
// some — mas o preço nas páginas continua o da faixa até o deploy.
//
//   06/09 até 23:59   → "lancamento" (R$ 447) — encerrada
//   07/09 a 11/09     → "semana"     (R$ 497) — encerrada
//   a partir de 12/09 → "padrao"     (R$ 597) — vigente

export type FaixaId = "lancamento" | "semana" | "padrao";

export interface FaixaPreco {
  id: FaixaId;
  /** Posição na linha do tempo — o que separa faixa encerrada de futura. */
  ordem: number;
  /** Nome curto da condição: "lançamento", "até sexta", "padrão". */
  rotulo: string;
  /** Janela da faixa, como aparece na escada de preço. */
  periodo: string;
  /** Nº de parcelas do checkout. */
  parcelas: number;
  /** Valor da parcela, só o número ("50,80"). Copiar do Hotmart — não é conta redonda. */
  parcela: string;
  /** Prazo como aparece na tarja de urgência. `null` = sem tarja. */
  prazo: string | null;
  /**
   * Instante exato do fim, ISO com fuso de Brasília (-03:00). Alimenta o
   * cronômetro da tarja — tem que bater com `prazo`. `null` = sem tarja.
   */
  encerraEm: string | null;
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
    periodo: "Até 06/09 — encerrada",
    parcelas: 12,
    parcela: "45,69",
    prazo: "hoje, às 23:59",
    encerraEm: "2026-09-06T23:59:00-03:00",
    preco: 447,
    precoDe: 597,
    // Faixa encerrada em 06/09. Os links da oferta de R$ 447 foram removidos de
    // propósito — enquanto existirem no repo, entram em algum build e alguém
    // compra pelo preço velho. A faixa fica só como âncora riscada na escada;
    // não vire `faixaAtualId` pra cá de novo.
    checkout: {},
  },
  semana: {
    id: "semana",
    ordem: 1,
    rotulo: "até sexta",
    periodo: "De 07 a 11/09 — encerrada",
    parcelas: 12,
    parcela: "50,80",
    prazo: "sexta, 11/09, às 23:59",
    encerraEm: "2026-09-11T23:59:00-03:00",
    preco: 497,
    precoDe: 597,
    // Faixa encerrada em 11/09. Os links da oferta de R$ 497 foram removidos de
    // propósito, pelo mesmo motivo da faixa de lançamento: link de oferta
    // vencida no repo acaba em algum build. Não vire `faixaAtualId` pra cá.
    checkout: {},
  },
  padrao: {
    id: "padrao",
    ordem: 2,
    rotulo: "padrão",
    periodo: "A partir de 12/09",
    parcelas: 12,
    parcela: "61,02",
    prazo: null,
    encerraEm: null,
    preco: 597,
    checkout: {
      // Oferta de R$ 597 (12x 61,02). Se trocar a oferta no painel, troque
      // aqui e no ctaHref dos Projetos em @/data/produtos.ts.
      "projeto-prf": "https://pay.hotmart.com/M106978976I?off=948v5dvl&sck=sitecerrado",
      "projeto-pmgo": "https://pay.hotmart.com/M107409724K?off=vt6buao3&sck=sitecerrado",
    },
  },
};

// >>> Vire aqui quando a faixa mudar. <<<
export const faixaAtualId: FaixaId = "padrao";

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
