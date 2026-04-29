import type { Concurso, StatusConcurso } from "@/types";

export const statusLabel: Record<StatusConcurso, string> = {
  "comissao-formada": "Comissão formada",
  "definicao-banca": "Definição da banca",
  "previsao-edital": "Previsão de edital",
  "edital-em-estudo": "Edital em estudo",
  "edital-publicado": "Edital publicado",
};

export const statusOrdem: StatusConcurso[] = [
  "edital-publicado",
  "definicao-banca",
  "previsao-edital",
  "comissao-formada",
  "edital-em-estudo",
];

export const concursos: Concurso[] = [
  {
    id: "pce-rj",
    nome: "PCE-RJ",
    estado: "Rio de Janeiro",
    siglaEstado: "RJ",
    status: "definicao-banca",
    detalhe: "Polícia Civil do Rio de Janeiro",
  },
  {
    id: "pc-df",
    nome: "PC-DF",
    estado: "Distrito Federal",
    siglaEstado: "DF",
    status: "definicao-banca",
    detalhe: "Polícia Civil do Distrito Federal",
  },
  {
    id: "pc-ma",
    nome: "PC-MA",
    estado: "Maranhão",
    siglaEstado: "MA",
    status: "previsao-edital",
    detalhe: "Previsão de edital para o 1º semestre de 2026",
  },
  {
    id: "pc-to",
    nome: "PC-TO",
    estado: "Tocantins",
    siglaEstado: "TO",
    status: "comissao-formada",
    detalhe: "Polícia Civil do Tocantins",
  },
  {
    id: "pcien-pa",
    nome: "Polícia Científica-PA",
    estado: "Pará",
    siglaEstado: "PA",
    status: "comissao-formada",
    detalhe: "Polícia Científica do Pará",
  },
  {
    id: "pc-ac",
    nome: "PC-AC",
    estado: "Acre",
    siglaEstado: "AC",
    status: "edital-em-estudo",
    detalhe: "Polícia Civil do Acre",
  },
  {
    id: "pc-mt",
    nome: "PC-MT",
    estado: "Mato Grosso",
    siglaEstado: "MT",
    status: "edital-em-estudo",
    detalhe: "Polícia Civil do Mato Grosso",
  },
  {
    id: "pcien-es",
    nome: "Polícia Científica-ES",
    estado: "Espírito Santo",
    siglaEstado: "ES",
    status: "edital-em-estudo",
    detalhe: "Polícia Científica do Espírito Santo",
  },
];
