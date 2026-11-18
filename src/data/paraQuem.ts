// Conteúdo da seção "Pra quem é" da página do concurso
// (components/sections/ParaQuem.tsx). Onde aparecer {sigla}, a seção troca
// pela sigla da carreira da página (PRF, PM-GO...). Rótulos curtos: cada
// perfil vira um bloco com ícone, e cada "não é" vira uma etiqueta riscada.

export interface Perfil {
  /** Escolhe o ícone em ParaQuem.tsx. */
  id: "do-zero" | "sem-evolucao" | "rotina" | "na-trave" | "foco";
  rotulo: string;
}

export const paraQuemE: Perfil[] = [
  { id: "do-zero", rotulo: "Começando do zero" },
  { id: "sem-evolucao", rotulo: "Estuda, mas não vê evolução" },
  { id: "rotina", rotulo: "Trabalha ou faz faculdade" },
  { id: "na-trave", rotulo: "Bateu na trave por pouco" },
  { id: "foco", rotulo: "Quer a {sigla}, não material genérico" },
];

export const paraQuemNaoE: string[] = [
  "Videoaula de todas as matérias",
  "Atalho sem revisão",
  "Fiscal ou tribunais",
];
