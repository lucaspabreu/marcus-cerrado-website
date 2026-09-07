export interface RecursoPlataforma {
  id: string;
  titulo: string;
  descricao: string;
  /** Screenshot do app. Arquivos ficam em public/plataforma/. */
  imagem: string;
  alt: string;
}

// Vitrine da plataforma na página do concurso. Pra trocar a ordem, mexa aqui.
export const recursosPlataforma: RecursoPlataforma[] = [
  {
    id: "cronograma",
    titulo: "Cronograma",
    descricao: "Seu plano de estudo montado a partir do edital.",
    imagem: "/plataforma/cron.jpg",
    alt: "Cronograma interativo do app, com os blocos de estudo da semana",
  },
  {
    id: "resumos",
    titulo: "Resumos",
    descricao: "Todo o conteúdo do edital, direto no app.",
    imagem: "/plataforma/resum.jpg",
    alt: "Resumo de Direito Administrativo aberto no app, com busca e anotações",
  },
  {
    id: "flashcards",
    titulo: "Flashcards",
    descricao: "Revisão espaçada para o conteúdo não escapar.",
    imagem: "/plataforma/flash.jpg",
    alt: "Flashcard do app com a resposta revelada e os botões de revisão",
  },
  {
    id: "guia",
    titulo: "Guia de Estudos",
    descricao: "A ordem em que estudar e o peso de cada matéria.",
    imagem: "/plataforma/guia.jpg",
    alt: "Guia de estudos do app, com o peso de cada bloco na prova",
  },
];
