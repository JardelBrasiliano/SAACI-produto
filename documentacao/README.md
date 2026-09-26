# SAACI — Documentação

> [SAACI](../index.html) › Documentação

Índice de navegação da documentação viva de produto, marca e design do SAACI. Cada pasta
abaixo tem um `_indice.json` com resumo por documento, para leitura rápida por agente antes de
abrir o arquivo completo.

## [`produto/`](produto/visao-produto.html)
Problema, escopo do MVP, requisitos rastreáveis (RF/RNF) e backlog.
- [Visão de Produto](produto/visao-produto.html)
- [Escopo do MVP](produto/escopo-mvp.html)
- [Requisitos](produto/requisitos.html)
- [Backlog](produto/backlog-roadmap.html)
- [Regras de Cálculo: Engenharia de Computação](produto/regras-engenharia-computacao.md) *(rascunho, não validado)*

## [`marca/`](marca/identidade-marca.md)
Nome, tom de voz, promessa.
- [Identidade da Marca](marca/identidade-marca.md) *(rascunho, tom de voz não validado)*

## [`design-system/`](design-system/principios-ui.html)
Princípios de UI, escrita de interface, estados obrigatórios, tokens visuais.
- [Princípios de UI](design-system/principios-ui.html)
- [Escrita de Interface](design-system/escrita-de-interface.html)
- [Estados e Casos de Borda](design-system/estados-e-casos-de-borda.html)
- [Tokens Visuais](design-system/tokens-visuais.md) *(rascunho)*
- [Referências Visuais](design-system/referencias-visuais.md) *(rascunho, vazio)*

## [`fluxos/`](fluxos/)
Telas e permissões por módulo do produto. Nasce vazio: um `.html` por módulo, criado pela
skill `saaci-fluxo`.

## [`prompts/`](prompts/)
Prompts prontos para o Claude Design, um por tela. Nasce vazio, criado pela skill
`saaci-prompt-tela`. `DESIGN.md` (prompt-base) nasce junto com o primeiro prompt.

## [`roadmap/`](roadmap/README.md)
Racional de negócio e checklist executável, por marco.
- [Racional do Roadmap](roadmap/README.md)
- [Roadmap (checklist interativo)](roadmap/roadmap.html)

---

Roteador completo de qual documento ler para qual tipo de tarefa está em
[`../.claude/CLAUDE.md`](../.claude/CLAUDE.md).
