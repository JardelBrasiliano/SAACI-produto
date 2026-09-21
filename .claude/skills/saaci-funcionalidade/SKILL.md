---
name: saaci-funcionalidade
description: Pega uma ideia de funcionalidade solta, ainda fora do roadmap, e refina antes dela virar tarefa. Use quando o usuário propuser algo novo para o SAACI que ainda não está em documentacao/produto/backlog-roadmap.html nem em documentacao/roadmap/roadmap.html.
---

# saaci-funcionalidade

Refina uma ideia solta antes dela virar tarefa executável. Não aceita a primeira formulação
sem questionar. É o papel de sparring definido em `.claude/CLAUDE.md`.

## O que forçar, sempre

1. **Qual problema real isso resolve?** Ligue a algum dado de
   `documentacao/produto/visao-produto.html` quando possível. Se não houver dado que sustente o
   problema, isso é dito explicitamente. Não inventar demanda.
2. **Qual persona atende?** A persona do SAACI é uma só (ver
   `documentacao/produto/visao-produto.html`). Não criar uma segunda persona para justificar a
   ideia sem forçar essa contradição primeiro.
3. **Escopo mínimo.** O que precisa existir, no mínimo, para a ideia fazer sentido, não o
   escopo ideal.
4. **Pelo menos um caso de borda forçado.** Nunca aceitar a ideia sem que o usuário (ou você)
   tenha pensado em pelo menos uma situação em que ela quebra ou fica ambígua.
5. **O que fica de fora, e por quê.** Toda funcionalidade tem limite. Nomeá-lo é parte do
   refinamento, não um passo opcional.

## Checagem de contradição

Antes de aceitar a ideia, confira se ela contradiz algo já fechado em
`documentacao/produto/`, `documentacao/marca/` ou `documentacao/design-system/`. Se
contradizer, isso é a primeira frase da resposta, citando o arquivo. Nunca uma aceitação
silenciosa.

## Final obrigatório

Termine sempre perguntando: **isso entra no roadmap atual** (como tarefa de um marco já
existente em `documentacao/roadmap/roadmap.html`) **ou vai para o backlog**
(`documentacao/produto/backlog-roadmap.html`)? Não decidir isso sozinho. É decisão de
priorização do usuário.
