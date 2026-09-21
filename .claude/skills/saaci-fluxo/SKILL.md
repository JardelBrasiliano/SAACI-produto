---
name: saaci-fluxo
description: Cria ou atualiza um arquivo de documentacao/fluxos/ para um módulo do produto (telas, permissões e casos de borda). Dispara quando o usuário descreve um fluxo novo ou pede para desenhar/documentar uma tela do SAACI.
---

# saaci-fluxo

Cria ou atualiza `documentacao/fluxos/<modulo>.html`: a sequência de telas, permissões e
casos de borda de um módulo do produto. Este documento é o que `saaci-prompt-tela` consulta
depois para gerar o prompt de uma tela específica.

## Processo

1. **Leia o contexto antes de propor.** `documentacao/produto/requisitos.html` para o que o
   módulo precisa cumprir, `documentacao/design-system/estados-e-casos-de-borda.html` para os
   4 estados obrigatórios e os casos de borda de domínio já registrados,
   `documentacao/design-system/principios-ui.html` para os princípios que toda tela respeita.
2. **Alinhe em texto simples antes de gerar HTML.** Descreva a sequência de telas, o que cada
   uma mostra, que permissão ela exige (hoje, só "aluno autenticado"; não inventar papel que
   não existe, ver `documentacao/produto/backlog-roadmap.html` seção 5) e os casos de borda
   específicos deste módulo. Só depois de o usuário concordar com essa descrição em texto, gere
   o HTML.
3. **Force caso de borda específico do módulo**, além dos 4 estados obrigatórios genéricos.
   Se `documentacao/design-system/estados-e-casos-de-borda.html` já tiver um caso relevante
   para este módulo, cite-o. Se surgir um novo, adicione-o lá também, não só no arquivo do
   fluxo.
4. **Verifique contradição** com `documentacao/fluxos/` de outro módulo já existente antes de
   finalizar. Duas telas que tratam do mesmo dado de forma diferente é achado de
   `/saaci-consistencia`, mas antecipar isso aqui evita retrabalho.

## Formato do arquivo gerado

Um fluxo descreve algo já fechado (telas e permissões alinhadas com o usuário), então nasce
`.html` direto, sem passar pelo estágio de rascunho `.md`. Usa `shared/base.css`
(`../../shared/base.css` a partir de `documentacao/fluxos/`), breadcrumb de navegação e data de
atualização, no mesmo padrão dos demais documentos fechados de `documentacao/produto/` e
`documentacao/design-system/`. Conteúdo: visão geral do fluxo, lista de telas em sequência,
permissão de cada uma, e uma seção de casos de borda específicos do módulo. Os 4 estados
obrigatórios não precisam ser reexplicados aqui, só referenciados.
