import type { OfertaConcurso, Produto } from "@/types";

const produtosCarreirasPoliciais: Produto[] = [
  {
    id: "guia-carreiras-policiais",
    titulo: "Guia de Estudos Carreiras Policiais",
    subtitulo: "Roteiro base pra qualquer carreira policial",
    descricao:
      "Guia introdutório pra quem ainda não definiu carreira ou quer construir base sólida antes de focar num concurso específico. Foco nas matérias comuns à maioria das carreiras policiais.",
    acesso: "6 meses",
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

// `somenteNoProjeto` em todos os materiais: hoje só o Projeto é vendido.
// Pra reabrir a venda avulsa de um material, tire a flag dele — o bloco
// "Ou compre separado" reaparece sozinho.
const produtosPRF: Produto[] = [
  {
    id: "cronograma-prf",
    titulo: "Cronograma Interativo de Estudos PRF",
    subtitulo: "A rotina de estudo, semana a semana",
    descricao:
      "Cronograma pronto pra PRF: quais matérias estudar em cada semana, quanto tempo dedicar a cada uma e quando revisar. Pra parar de decidir todo dia o que estudar e só executar.",
    acesso: "6 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Semana a semana, do início até a prova",
      "Carga por matéria conforme o peso no edital",
      "Ciclos de revisão já marcados",
      "Ajustável pra quem trabalha ou estuda em tempo integral",
    ],
    ctaLabel: "Quero o cronograma",
    ctaHref: "#",
    somenteNoProjeto: true,
    preco: 97,
  },
  {
    id: "guia-prf",
    titulo: "Guia de Estudos PRF",
    subtitulo: "O que estudar e em que ordem",
    descricao:
      "Roteiro completo para quem vai encarar a PRF: o que priorizar, como sequenciar as matérias e o passo a passo do estudo eficiente até a prova.",
    acesso: "6 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Sequência de estudo por fase: base, aprofundamento e reta final",
      "Porcentagem de cobrança e prioridade por assunto do edital",
      "Filtros de questões no Qconcursos e TecConcursos",
      "Mapa de revisão até a véspera",
    ],
    ctaLabel: "Quero o guia",
    ctaHref: "https://pay.hotmart.com/I106397959R?off=zfv4qvwf&sck=sitecerrado",
    somenteNoProjeto: true,
    preco: 97,
  },
  {
    id: "flashcards-prf",
    titulo: "Flashcards e Questões PRF",
    subtitulo: "Ativa memória e calibra timing",
    descricao:
      "Banco de flashcards e questões organizadas por matéria, com repetição espaçada e foco no padrão da banca. Pra fixar conteúdo e treinar prova de verdade.",
    acesso: "6 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Flashcards com repetição espaçada",
      "Questões organizadas por matéria",
      "Padrão e estilo da banca da PRF",
      "Histórico de desempenho por tema",
    ],
    ctaLabel: "Quero os flashcards",
    ctaHref: "https://pay.hotmart.com/L106397820L?off=ba3j2nt6&sck=sitecerrado",
    somenteNoProjeto: true,
    preco: 117,
  },
  {
    id: "resumo-prf",
    titulo: "Resumo Completo PRF",
    subtitulo: "Matéria condensada pra revisão e véspera",
    descricao:
      "Resumo direto e completo de todas as matérias da PRF, no formato que poupa tempo e potencializa revisão. Pensado pra quem precisa fechar lacunas sem perder o ritmo.",
    acesso: "6 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Cobertura integral do edital PRF",
      "Linguagem objetiva, sem enrolação",
      "Atualizado conforme mudanças da banca",
      "Pensado para revisão acelerada",
    ],
    ctaLabel: "Quero o resumo",
    ctaHref: "https://pay.hotmart.com/P106397581D?off=vs539ug2&sck=sitecerrado",
    somenteNoProjeto: true,
    preco: 197,
  },
  {
    id: "projeto-prf",
    titulo: "Projeto PRF",
    subtitulo: "Todos os materiais com condição especial",
    descricao:
      "Guia de Estudos, Cronograma, Resumo e Flashcards integrados na Plataforma Cerrado. Ela mostra o que estudar, quanto ainda falta e refaz o plano nos dias em que você rende menos — um passo a passo até a prova.",
    acesso: "6 meses",
    acessoDetalhe: "acesso integral aos 4 produtos",
    bullets: [
      "Guia + Cronograma + Resumo + Flashcards integrados",
      "Atualizações inclusas durante o acesso",
    ],
    ctaLabel: "Quero o Projeto",
    // Preço e checkout do Projeto vêm da escada em @/data/precos.ts. Este href
    // é só o fallback caso a faixa vigente não tenha link pra este produto —
    // mantenha na oferta vigente. Este arquivo entra no bundle do cliente (via
    // WhatsAppFloat), então link de oferta vencida aqui fica achável no JS.
    ctaHref: "https://pay.hotmart.com/M106978976I?off=ze8b1ffr&sck=sitecerrado",
    destaque: true,
    selo: "Mais escolhido",
  },
];

const produtosPMGO: Produto[] = [
  {
    id: "cronograma-pmgo",
    titulo: "Cronograma Interativo de Estudos PM-GO",
    subtitulo: "A rotina de estudo, semana a semana",
    descricao:
      "Cronograma pronto pra PM-GO: quais matérias estudar em cada semana, quanto tempo dedicar a cada uma e quando revisar. Pra parar de decidir todo dia o que estudar e só executar.",
    acesso: "6 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Semana a semana, do início até a prova",
      "Carga por matéria conforme o peso no edital",
      "Ciclos de revisão já marcados",
      "Ajustável pra quem trabalha ou estuda em tempo integral",
    ],
    ctaLabel: "Quero o cronograma",
    ctaHref: "#",
    somenteNoProjeto: true,
    preco: 97,
  },
  {
    id: "resumo-pmgo",
    titulo: "Resumo Completo PM-GO",
    subtitulo: "Matéria condensada pra revisão e véspera",
    descricao:
      "Resumo direto e completo de todas as matérias da PM-GO, no formato que poupa tempo e potencializa revisão. Pensado pra quem precisa fechar lacunas sem perder o ritmo.",
    acesso: "6 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Cobertura integral do edital PM-GO",
      "Linguagem objetiva, sem enrolação",
      "Atualizado conforme mudanças da banca",
      "Pensado para revisão acelerada",
    ],
    ctaLabel: "Quero o resumo",
    ctaHref: "https://pay.hotmart.com/P106397581D?off=85zdba0x",
    somenteNoProjeto: true,
    preco: 197,
  },
  {
    id: "guia-pmgo",
    titulo: "Guia de Estudos PM-GO",
    subtitulo: "O que estudar e em que ordem",
    descricao:
      "Roteiro completo para quem vai encarar a PM-GO: o que priorizar, como sequenciar as matérias e o passo a passo do estudo eficiente até a prova.",
    acesso: "6 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Sequência de estudo por fase: base, aprofundamento e reta final",
      "Porcentagem de cobrança e prioridade por assunto do edital",
      "Filtros de questões no Qconcursos e TecConcursos",
      "Mapa de revisão até a véspera",
    ],
    ctaLabel: "Em breve",
    ctaHref: "#",
    somenteNoProjeto: true,
    badge: "Em breve",
    preco: 97,
  },
  {
    id: "flashcards-pmgo",
    titulo: "Flashcards e Questões PM-GO",
    subtitulo: "Ativa memória e calibra timing",
    descricao:
      "Banco de flashcards e questões organizadas por matéria, com repetição espaçada e foco no padrão da banca. Pra fixar conteúdo e treinar prova de verdade.",
    acesso: "6 meses",
    acessoDetalhe: "a partir da compra",
    bullets: [
      "Flashcards com repetição espaçada",
      "Questões organizadas por matéria",
      "Padrão e estilo da banca da PM-GO",
      "Histórico de desempenho por tema",
    ],
    ctaLabel: "Em breve",
    ctaHref: "#",
    somenteNoProjeto: true,
    badge: "Em breve",
    preco: 117,
  },
  {
    id: "projeto-pmgo",
    titulo: "Projeto PM-GO",
    subtitulo: "Todos os materiais com condição especial",
    descricao:
      "Resumo, Cronograma, Guia de Estudos e Flashcards integrados na Plataforma Cerrado. Ela mostra o que estudar, quanto ainda falta e refaz o plano nos dias em que você rende menos — um passo a passo até a prova.",
    acesso: "6 meses",
    acessoDetalhe: "acesso integral aos 4 produtos",
    bullets: [
      "Resumo + Cronograma liberados na hora da compra",
      "Guia e Flashcards liberados assim que forem lançados",
      "Atualizações inclusas durante o acesso",
    ],
    ctaLabel: "Quero o Projeto",
    // Preço e checkout do Projeto vêm da escada em @/data/precos.ts. Este href
    // é só o fallback caso a faixa vigente não tenha link pra este produto —
    // mantenha na oferta vigente. Este arquivo entra no bundle do cliente (via
    // WhatsAppFloat), então link de oferta vencida aqui fica achável no JS.
    ctaHref: "https://pay.hotmart.com/M107409724K?off=rzrcwgmr&sck=sitecerrado",
    destaque: true,
    selo: "Mais escolhido",
  },
];

// Vídeo do hero das páginas de concurso (youtube.com/watch?v=t_HLOq0KYk8)
const videoPlataforma = {
  youtubeId: "t_HLOq0KYk8",
  titulo: "Plataforma de Estudos para Concursos Policiais",
};

export const ofertaConcursos: OfertaConcurso[] = [
  {
    id: "prf",
    sigla: "PRF",
    nome: "Polícia Rodoviária Federal",
    banca: "Cebraspe (último edital)",
    status: "ativo",
    statusLabel: "Disponível",
    imagem: "/banner-cerrado-site.webp",
    imagemHero: "/banner-cerrado-site-prf.jpg",
    brasao: "/brasao-prf.jpg",
    produtos: produtosPRF,
    video: videoPlataforma,
  },
  {
    id: "pm-go",
    sigla: "PM-GO",
    nome: "Polícia Militar de Goiás",
    status: "ativo",
    statusLabel: "Disponível",
    imagem: "/banner-cerrado-PMGO.webp",
    imagemHero: "/banner-cerrado-site-pmgo.jpg",
    brasao: "/brasao-pmgo.webp",
    produtos: produtosPMGO,
    video: videoPlataforma,
  },
];

// Mantém retrocompatibilidade caso algo importe `produtos` direto
export const produtos: Produto[] = produtosPRF;
