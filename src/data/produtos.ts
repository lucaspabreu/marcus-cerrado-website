import type { OfertaConcurso, Produto } from "@/types";

const produtosCarreirasPoliciais: Produto[] = [
  {
    id: "guia-carreiras-policiais",
    titulo: "Guia de Estudos Carreiras Policiais",
    subtitulo: "Roteiro base pra qualquer carreira policial",
    descricao:
      "Guia introdutório pra quem ainda não definiu carreira ou quer construir base sólida antes de focar num concurso específico. Foco nas matérias comuns à maioria das carreiras policiais.",
    acesso: "12 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Matérias-base comuns às carreiras policiais",
      "Cronograma de estudos pra quem começa do zero",
      "Rotina ajustável a quem trabalha",
      "Orientação pra escolher o concurso certo",
    ],
    ctaLabel: "Quero o guia",
    ctaHref: "#",
    preco: 97,
  },
];

const produtosPRF: Produto[] = [
  {
    id: "guia-prf",
    titulo: "Guia de Estudos PRF",
    subtitulo: "O que estudar e em que ordem",
    descricao:
      "Roteiro completo para quem vai encarar a PRF: o que priorizar, como sequenciar as matérias e o passo a passo do estudo eficiente até a prova.",
    acesso: "12 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Cronograma estruturado por fases",
      "Priorização por peso da banca",
      "Rotina ajustável a quem trabalha",
      "Mapa de revisão até a véspera",
    ],
    ctaLabel: "Quero o guia",
    ctaHref: "#",
    preco: 97,
  },
  {
    id: "resumo-prf",
    titulo: "Resumo Completo PRF",
    subtitulo: "Matéria condensada pra revisão e véspera",
    descricao:
      "Resumo direto e completo de todas as matérias da PRF, no formato que poupa tempo e potencializa revisão. Pensado pra quem precisa fechar lacunas sem perder o ritmo.",
    acesso: "12 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Cobertura integral do edital PRF",
      "Linguagem objetiva, sem enrolação",
      "Atualizado conforme mudanças da banca",
      "Pensado para revisão acelerada",
    ],
    ctaLabel: "Quero o resumo",
    ctaHref: "#",
    preco: 197,
  },
  {
    id: "flashcards-prf",
    titulo: "Flashcards e Questões PRF",
    subtitulo: "Ativa memória e calibra timing",
    descricao:
      "Banco de flashcards e questões organizadas por matéria, com repetição espaçada e foco no padrão da banca. Pra fixar conteúdo e treinar prova de verdade.",
    acesso: "12 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Flashcards com repetição espaçada",
      "Questões organizadas por matéria",
      "Padrão e estilo da banca da PRF",
      "Histórico de desempenho por tema",
    ],
    ctaLabel: "Quero os flashcards",
    ctaHref: "#",
    preco: 117,
  },
  {
    id: "combo-prf",
    titulo: "Combo PRF",
    subtitulo: "Os 3 produtos com condição especial",
    descricao:
      "Guia, Resumo e Flashcards integrados num único pacote, com desconto sobre a soma dos três. O caminho recomendado pra quem quer cobertura completa do começo até a prova.",
    acesso: "12 meses",
    acessoDetalhe: "acesso integral aos 3 produtos",
    bullets: [
      "Economia de R$ 114 vs. comprar os 3 separados",
      "Guia + Resumo + Flashcards integrados",
      "Atualizações inclusas durante o acesso",
      "Cobertura do começo até a véspera",
    ],
    ctaLabel: "Quero o Combo",
    ctaHref: "#",
    destaque: true,
    selo: "Mais escolhido",
    preco: 297,
    precoDe: 411,
  },
];

export const ofertaConcursos: OfertaConcurso[] = [
  {
    id: "prf",
    sigla: "PRF",
    nome: "Polícia Rodoviária Federal",
    banca: "Cebraspe (último edital)",
    status: "ativo",
    statusLabel: "Disponível",
    imagem: "/banner-cerrado-site.webp",
    brasao: "/brasao-prf.jpg",
    produtos: produtosPRF,
  },
  {
    id: "carreiras-policiais",
    sigla: "CPG",
    nome: "Carreiras Policiais Gerais",
    status: "em-breve",
    statusLabel: "Em breve",
    produtos: [],
  },
  {
    id: "pm-go",
    sigla: "PM-GO",
    nome: "Polícia Militar de Goiás",
    status: "em-breve",
    statusLabel: "Em breve",
    imagem: "/banner-cerrado-PMGO.webp",
    brasao: "/brasao-pmgo.webp",
    produtos: [],
  },
  {
    id: "pf",
    sigla: "PF",
    nome: "Polícia Federal",
    status: "em-breve",
    statusLabel: "Em breve",
    produtos: [],
  },
  {
    id: "pc-go",
    sigla: "PCGO",
    nome: "Polícia Civil de Goiás",
    status: "em-breve",
    statusLabel: "Em breve",
    produtos: [],
  },
  {
    id: "pc-mt",
    sigla: "PCMT",
    nome: "Polícia Civil de Mato Grosso",
    status: "em-breve",
    statusLabel: "Em breve",
    produtos: [],
  },
  {
    id: "pp-mt",
    sigla: "PPMT",
    nome: "Polícia Penal de Mato Grosso",
    status: "em-breve",
    statusLabel: "Em breve",
    produtos: [],
  },
];

// Mantém retrocompatibilidade caso algo importe `produtos` direto
export const produtos: Produto[] = produtosPRF;
