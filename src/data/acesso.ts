// Duração do acesso, como aparece na seção "Acesso" da página do concurso
// (components/sections/Acesso.tsx). A régua vai da compra até `reguaMeses`;
// cada linha preenche `meses` e o resto fica com o rótulo `depois`.

export interface LinhaAcesso {
  id: string;
  titulo: string;
  /** O que entra nessa linha, em uma frase curta. */
  descricao: string;
  /** Meses de acesso inclusos na compra. */
  meses: number;
  /** Rótulo do trecho que ainda não está coberto (ex.: "Em breve"). */
  depois: string;
}

/** Comprimento total da régua, em meses. */
export const reguaMeses = 12;

export const linhasAcesso: LinhaAcesso[] = [
  {
    id: "materiais-plataforma",
    titulo: "Materiais e Plataforma",
    descricao: "Anki, Guia de Estudos, Resumo, Cronograma e Flashcards",
    meses: 6,
    depois: "Em breve",
  },
];
