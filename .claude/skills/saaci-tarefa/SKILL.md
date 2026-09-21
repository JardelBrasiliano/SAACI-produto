---
name: saaci-tarefa
description: Pega uma tarefa do roadmap ativo (documentacao/roadmap/roadmap.html) e transforma em plano executável. Use quando o usuário pedir para planejar, detalhar ou começar uma tarefa específica do roadmap do SAACI. Nunca para planejar um marco inteiro de uma vez.
---

# saaci-tarefa

Transforma **uma** tarefa do roadmap em plano executável. Não fala de stack, arquitetura ou
código. Este repositório é só produto, design e processo.

## Regras

1. **Uma tarefa por vez.** Se o pedido for um marco inteiro ("planeja o Marco 1"), recuse e
   peça para o usuário apontar a tarefa específica dentro do marco. Listar as tarefas do
   marco em `documentacao/roadmap/roadmap.html` ajuda a escolher.
2. **Confira pré-requisito antes de planejar.** Releia `documentacao/roadmap/README.md` para o
   objetivo e critério de destrave do marco ao qual a tarefa pertence. Se a tarefa depende de
   algo listado em `TODO/pendencias.md` que ainda não foi resolvido, isso é a primeira coisa
   que você diz. Não planeje em cima de uma pendência aberta sem avisar.
3. **Leia só o contexto relevante.** Não releia o repositório inteiro. Use o roteador em
   `.claude/CLAUDE.md` para saber qual documento de `documentacao/produto/`,
   `documentacao/design-system/` ou `documentacao/fluxos/` importa para esta tarefa
   específica.
4. **Analise e sugira antes de perguntar.** Chegue com uma proposta de plano já formada.
   Pergunte só o que de fato muda o plano: no máximo 4 perguntas, no máximo 2 rodadas, sempre
   com a opção recomendada em primeiro lugar e marcada "(Recomendada)".
5. **Separe o que dá para fazer aqui do que só o usuário faz fora.** Qualquer passo que exija
   criar conta, obter documento de terceiro, decidir com outra pessoa (ex.: itens já listados
   em `TODO/pendencias.md`) entra numa seção separada do plano, nunca misturado com os passos
   executáveis.

## Saída esperada

Um plano com objetivo da tarefa (herdado do marco), passos concretos, documentos que serão
criados ou atualizados, e a seção separada do que fica por conta do usuário. Ao final da
execução, sugerir a marcação da tarefa correspondente em `documentacao/roadmap/roadmap.html` e
uma mensagem de commit via skill `saaci-commit`.
