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
    ctaHref: "https://pay.hotmart.com/I106397959R?off=zfv4qvwf&sck=sitecerrado",
    preco: 97,
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
    ctaHref: "https://pay.hotmart.com/L106397820L?off=ba3j2nt6&sck=sitecerrado",
    preco: 117,
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
    ctaHref: "https://pay.hotmart.com/P106397581D?off=vs539ug2&sck=sitecerrado",
    preco: 197,
  },
  {
    id: "combo-prf",
    titulo: "Combo PRF",
    subtitulo: "Os 3 produtos com condição especial",
    descricao:
      "Guia de Estudos, Resumo e Flashcards integrados em um único pacote, com desconto sobre a soma dos três. O caminho recomendado pra quem quer cobertura completa do começo até a prova.",
    acesso: "12 meses",
    acessoDetalhe: "acesso integral aos 3 produtos",
    bullets: [
      "Economia de R$ 114 vs. comprar os 3 separados",
      "Guia + Resumo + Flashcards integrados",
      "Atualizações inclusas durante o acesso",
    ],
    ctaLabel: "Quero o Combo",
    ctaHref: "#",
    destaque: true,
    selo: "Mais escolhido",
    preco: 297,
    precoDe: 411,
  },
];

const produtosPMGO: Produto[] = [
  {
    id: "resumo-pmgo",
    titulo: "Resumo Completo PM-GO",
    subtitulo: "Matéria condensada pra revisão e véspera",
    descricao:
      "Resumo direto e completo de todas as matérias da PM-GO, no formato que poupa tempo e potencializa revisão. Pensado pra quem precisa fechar lacunas sem perder o ritmo.",
    acesso: "12 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Cobertura integral do edital PM-GO",
      "Linguagem objetiva, sem enrolação",
      "Atualizado conforme mudanças da banca",
      "Pensado para revisão acelerada",
    ],
    ctaLabel: "Quero o resumo",
    ctaHref: "https://pay.hotmart.com/P106397581D?off=85zdba0x",
    preco: 197,
  },
  {
    id: "guia-pmgo",
    titulo: "Guia de Estudos PM-GO",
    subtitulo: "O que estudar e em que ordem",
    descricao:
      "Roteiro completo para quem vai encarar a PM-GO: o que priorizar, como sequenciar as matérias e o passo a passo do estudo eficiente até a prova.",
    acesso: "12 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Cronograma estruturado por fases",
      "Priorização por peso da banca",
      "Rotina ajustável a quem trabalha",
      "Mapa de revisão até a véspera",
    ],
    ctaLabel: "Em breve",
    ctaHref: "#",
    badge: "Em breve",
    preco: 97,
  },
  {
    id: "flashcards-pmgo",
    titulo: "Flashcards e Questões PM-GO",
    subtitulo: "Ativa memória e calibra timing",
    descricao:
      "Banco de flashcards e questões organizadas por matéria, com repetição espaçada e foco no padrão da banca. Pra fixar conteúdo e treinar prova de verdade.",
    acesso: "12 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Flashcards com repetição espaçada",
      "Questões organizadas por matéria",
      "Padrão e estilo da banca da PM-GO",
      "Histórico de desempenho por tema",
    ],
    ctaLabel: "Em breve",
    ctaHref: "#",
    badge: "Em breve",
    preco: 117,
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
    id: "pm-go",
    sigla: "PM-GO",
    nome: "Polícia Militar de Goiás",
    status: "ativo",
    statusLabel: "Disponível",
    imagem: "/banner-cerrado-PMGO.webp",
    brasao: "/brasao-pmgo.webp",
    produtos: produtosPMGO,
  },
];

// Mantém retrocompatibilidade caso algo importe `produtos` direto
export const produtos: Produto[] = produtosPRF;
