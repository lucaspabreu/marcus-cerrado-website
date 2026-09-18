// Conteúdo da seção "Pra quem é" da página do concurso
// (components/sections/ParaQuem.tsx). Onde aparecer {sigla}, a seção troca
// pela sigla da carreira da página (PRF, PM-GO...).

export interface Objecao {
  id: string;
  /** A dúvida, na voz do aluno. */
  pergunta: string;
  /** A resposta do Marcus. Concreta, sem promessa que não dá pra cumprir. */
  resposta: string;
}

export const paraQuemE: string[] = [
  "Quem está começando do zero e não sabe nem por onde abrir o edital.",
  "Quem já estuda há meses, mas não sabe dizer se está evoluindo.",
  "Quem trabalha ou faz faculdade e precisa de um plano que caiba na rotina.",
  "Quem já bateu na trave por poucas questões e precisa de revisão que fixa.",
  "Quem quer a {sigla}, e não um material genérico de carreiras policiais.",
];

export const paraQuemNaoE: string[] = [
  "Quem procura videoaula de todas as matérias. Aqui é direção, material enxuto e revisão.",
  "Quem quer atalho sem fazer revisão.",
  "Quem estuda pra outra área, como fiscal ou tribunais.",
];

export const objecoes: Objecao[] = [
  {
    id: "do-zero",
    pergunta: "Marcus, nunca estudei pra concurso. Consigo começar pela {sigla}?",
    resposta:
      "Consegue. Eu passei na PRF aos 19, começando do zero. O Guia te mostra o que estudar e em que ordem, e o Cronograma transforma isso em rotina desde o primeiro dia.",
  },
  {
    id: "rotina",
    pergunta: "Trabalho o dia todo. Dá tempo de estudar pra {sigla}?",
    resposta:
      "Dá, se o plano for honesto com a sua rotina. A Plataforma mostra o que estudar e quanto falta, e refaz o plano nos dias em que você rende menos. Você não precisa recomeçar toda segunda-feira.",
  },
];
