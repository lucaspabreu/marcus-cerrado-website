# CLAUDE.md — Coprodução Marcus Concursos

## O projeto
Coprodução do Marcus Nery (@marcusconcursos), focado em concursos policiais no Brasil.

## Sobre o Marcus
- Marcus Nery, "Concurseiro do Cerrado"
- Aprovado na PRF aos 19 anos + PCGO, PMGO, PMDF, CBMGO
- Criador do Método CERRADO
- ~42K no Instagram, ativo no YouTube e TikTok

## Produtos
- Pré-Edital Cerrado
- Pós-Edital Cerrado
- Combo Cerrado (produto âncora)
- Mentoria — vagas fechadas, captar lista de espera

## Identidade visual
- Sério, leve, moderno. Sem estética guru, sem militar exagerado
- Off-white, preto, acento terroso (terracota/ocre)
- Serifa pra título, sans-serif pra corpo
- Português brasileiro

## Como me responder
- Direto, sincero, sem concordar por concordar
- Apontar erros, riscos e contradições na hora
- Exemplos concretos, nada genérico
- Sem suavizar feedback

## Stack do projeto
- Next.js 15 (App Router) + TypeScript + Tailwind v4
- shadcn/ui para Accordion
- Fontes via next/font: Fraunces (display) e Inter (corpo)
- Mapa do Brasil: SVG inline customizado em components/MapaBrasil.tsx

## Arquivos editáveis (conteúdo)
- src/data/concursos.ts — lista de concursos previstos por estado
- src/data/produtos.ts — trilhas/produtos
- src/data/depoimentos.ts — depoimentos de alunos
- src/data/faq.ts — perguntas frequentes
- src/data/metodo.ts — pilares do Método CERRADO
- src/data/aprovacoes.ts — barra de aprovações
