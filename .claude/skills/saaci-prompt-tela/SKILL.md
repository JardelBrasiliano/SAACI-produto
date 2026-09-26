---
name: saaci-prompt-tela
description: Gera o prompt pronto para colar no Claude Design, para UMA tela ou fluxo por vez, puxando o que já está fechado em documentacao/fluxos/, documentacao/design-system/ e documentacao/produto/. Use com o command /saaci-prompt-tela <tela>.
---

# saaci-prompt-tela

Gera `documentacao/prompts/NN-nome-da-tela.md`: um prompt pronto para colar no Claude Design,
para uma única tela ou fluxo por vez.

## Antes de gerar

1. A tela precisa existir em algum `documentacao/fluxos/<modulo>.html`. Se não existir, pare e
   sugira rodar `saaci-fluxo` primeiro. Não inventar uma tela que não foi alinhada em texto
   antes.
2. Leia `documentacao/design-system/tokens-visuais.html` (cor, tipografia, espaçamento — verde
   e vermelho institucionais têm fonte oficial fixa; azul, âmbar, roxo, tipografia e espaçamento
   são proposta própria, já validada mas sujeita a evoluir com uso real do produto) e
   `documentacao/design-system/principios-ui.html`.
3. Se `documentacao/prompts/DESIGN.md` ainda não existir, crie-o nesta primeira execução: é o
   prompt-base reutilizado por toda tela, com nome do produto, tom de voz
   (`documentacao/marca/identidade-marca.html`), tokens visuais e princípios de UI. Cada prompt de
   tela referencia o `DESIGN.md`, não repete o conteúdo dele.

## Regras fixas do prompt gerado

- **Mobile-first, sempre.** O prompt parte da versão mobile. A variante desktop é só reflow de
  layout: dado visível, permissão, texto e regra de negócio nunca mudam entre as duas (ver
  Princípio 2 em `documentacao/design-system/principios-ui.html`). Nunca gerar prompt que trate
  desktop como layout independente.
- **Tweaks: 2 a 3 variantes, eixo perguntado antes.** Antes de gerar as variantes, pergunte ao
  usuário qual eixo variar, densidade, peso tipográfico, ênfase de cor, ou outro. Nunca
  escolher o eixo sozinho.
- **4 estados obrigatórios, sempre.** Todo prompt cobre vazio, erro de conexão, texto longo e
  campo obrigatório, puxando a descrição de cada um de
  `documentacao/design-system/estados-e-casos-de-borda.html`, mais qualquer caso de borda
  específico do módulo já registrado ali ou no `documentacao/fluxos/` correspondente.

## Onde grava

`documentacao/prompts/NN-nome-da-tela.md`, com `NN` sequencial de duas casas (01, 02, ...) na
ordem em que os prompts forem gerados. Formato do prompt: referência ao `DESIGN.md`, descrição
da tela (herdada do `documentacao/fluxos/`), os 4 estados obrigatórios, o eixo de tweak
escolhido e o número de variantes.
