import type { Produto } from "@/types";

export const produtos: Produto[] = [
  {
    id: "pre-edital",
    titulo: "Pré-Edital Cerrado",
    subtitulo: "Construa a base certa antes do edital sair",
    descricao:
      "Trilha estruturada para quem está começando ou ainda não tem edital aberto. Foco na base de Português, Direito Constitucional, Administrativo e RLM, com rotina e técnica de estudo.",
    acesso: "12 meses",
    acessoDetalhe: "a partir da matrícula",
    bullets: [
      "Trilha estruturada por fases",
      "Plano de estudos personalizável",
      "Mentoria em grupo quinzenal",
      "Comunidade de alunos ativa",
    ],
    ctaLabel: "Conhecer trilha",
    ctaHref: "#",
  },
  {
    id: "pos-edital",
    titulo: "Pós-Edital Cerrado",
    subtitulo: "Foco total no edital aberto",
    descricao:
      "Para quem já tem edital na mão e precisa converter tempo em vaga. Cronograma reverso a partir da data da prova, foco em banca e simulados cronometrados.",
    acesso: "12 meses",
    acessoDetalhe: "após a publicação do edital",
    bullets: [
      "Cronograma reverso até a prova",
      "Análise da banca e do estilo",
      "Simulados semanais com correção",
      "Reta final e véspera de prova",
    ],
    ctaLabel: "Conhecer trilha",
    ctaHref: "#",
  },
  {
    id: "combo-cerrado",
    titulo: "Combo Cerrado",
    subtitulo: "Pré + Pós em uma única jornada",
    descricao:
      "A trilha completa: você atravessa o Pré-Edital com base sólida e ativa o Pós-Edital quando o edital escolhido sair. Cobertura integral do Método CERRADO, do início até a prova.",
    acesso: "Pré 12 meses + Pós 12 meses",
    acessoDetalhe: "você escolhe qual Pós-Edital ativar",
    bullets: [
      "Pré-Edital + Pós-Edital integrados",
      "Videoaulas completas do Método CERRADO",
      "Aplicativo exclusivo com ferramentas potencializadoras de estudo",
      "Acompanhamento até a prova",
    ],
    ctaLabel: "Quero o Combo",
    ctaHref: "#",
    destaque: true,
    selo: "Mais escolhido",
  },
  {
    id: "mentoria",
    titulo: "Mentoria Individual",
    subtitulo: "Acompanhamento próximo, vaga limitada",
    descricao:
      "Atendimento individual com Marcus para casos específicos: troca de carreira, recurso após reprovação, prova final. Vagas reduzidas e processo seletivo.",
    bullets: [
      "Sessões individuais com Marcus",
      "Plano sob medida pro seu caso",
      "Diagnóstico de desempenho",
      "Suporte direto via canal privado",
    ],
    ctaLabel: "Entrar na lista de espera",
    ctaHref: "#",
    badge: "Vagas Fechadas",
  },
];
