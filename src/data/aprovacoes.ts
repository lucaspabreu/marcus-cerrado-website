export interface Aprovacao {
  sigla: string;
  nome: string;
}

export const aprovacoes: Aprovacao[] = [
  { sigla: "PRF", nome: "Polícia Rodoviária Federal" },
  { sigla: "PCGO", nome: "Polícia Civil de Goiás" },
  { sigla: "PMGO", nome: "Polícia Militar de Goiás" },
  { sigla: "PMDF", nome: "Polícia Militar do Distrito Federal" },
  { sigla: "CBMGO", nome: "Corpo de Bombeiros de Goiás" },
];
