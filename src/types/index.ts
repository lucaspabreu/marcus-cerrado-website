export type StatusConcurso =
  | "comissao-formada"
  | "definicao-banca"
  | "previsao-edital"
  | "edital-em-estudo"
  | "edital-publicado";

export interface Concurso {
  id: string;
  nome: string;
  estado: string;
  siglaEstado: string;
  status: StatusConcurso;
  detalhe: string;
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
  selo?: string;
  badge?: string;
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

