export type StatusConcurso =
  | "banca-definida"
  | "autorizado"
  | "comissao-formada"
  | "credito-liberado"
  | "banca-contratacao"
  | "previsto"
  | "anunciado"
  | "solicitado";

export interface Concurso {
  id: string;
  nome: string;
  estado: string;
  siglaEstado: string;
  status: StatusConcurso;
  detalhe: string;
  vagas: string;
  salario: string;
  /** Concurso federal — não aparece no mapa de estados */
  federal?: boolean;
}

export type StatusOferta = "ativo" | "em-breve";

export interface OfertaConcurso {
  id: string;
  sigla: string;
  nome: string;
  banca?: string;
  status: StatusOferta;
  statusLabel: string;
  produtos: Produto[];
  /** Banner do card na home. */
  imagem?: string;
  /** Fundo do hero na página do concurso. Sem ele, usa `imagem`. */
  imagemHero?: string;
  brasao?: string;
  /** Vídeo de apresentação no hero da página do concurso. */
  video?: { youtubeId: string; titulo: string };
}

export interface Produto {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  acesso?: string;
  acessoDetalhe?: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  destaque?: boolean;
  /** Entra na lista do Projeto, mas não é vendido avulso */
  somenteNoProjeto?: boolean;
  selo?: string;
  badge?: string;
  preco?: number;
  precoDe?: number;
}

export interface Depoimento {
  id: string;
  nome: string;
  concurso: string;
  texto: string;
}

export interface FAQItem {
  id: string;
  pergunta: string;
  resposta: string;
}

export interface PilarMetodo {
  letra: string;
  titulo: string;
  descricao: string;
}

