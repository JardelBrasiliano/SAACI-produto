---
description: Revisão crítica profunda de um documento de produto/design antes de considerá-lo fechado
argument-hint: <arquivo>
---

Faça uma revisão crítica profunda do arquivo indicado em `$ARGUMENTS`, antes de considerá-lo
fechado como fonte de verdade.

Regras:

- Siga a estrutura de `.claude/references/formato-relatorio.md`.
- Cite outro arquivo do repositório quando a crítica for sobre contradição entre eles. Não
  revisar em isolamento se o problema é de consistência.
- Documento fonte de verdade não repete conteúdo que já existe em outro documento fonte de
  verdade, mesmo que os dois concordem. Se a mesma informação (tabela, definição, regra,
  exemplo) aparecer copiada em dois arquivos, isso é achado (Importante): o risco é os dois
  divergirem no futuro sem ninguém perceber. A correção proposta é sempre a mesma, manter a
  informação em um único arquivo fonte e o outro passa a referenciar por link, nunca duas
  cópias mantidas em paralelo.
- Termine com um **gate de aprovação explícito**: liste as correções propostas e espere
  confirmação do usuário antes de aplicar qualquer uma delas. Nenhuma edição automática.
- Se o arquivo revisado é um rascunho `.md` (marcado como tal no topo) e a revisão conclui que
  ele está pronto, a correção final proposta inclui a promoção para `.html`, arquivo inteiro,
  com `shared/base.css`, breadcrumb e data de atualização, seguindo o padrão dos demais
  documentos fechados. A promoção também depende da aprovação do usuário, como qualquer outra
  correção.
- Documento fechado não narra o próprio processo de decisão: nada de "alternativa descartada"
  como debate interno, "ainda a validar", "escolha minha", nota sobre versão anterior do
  arquivo ou sobre o próprio processo de revisão. O texto final afirma o fato já definido, sem
  mostrar o bastidor de como se chegou até ele — o documento pode ir para banca, professor ou
  qualquer leitor externo. Isso é achado de redação (Sugestão por padrão, Importante se o
  documento tem propósito de apresentação a público externo); a correção segue o checklist de
  `.claude/skills/saaci-copy/references/vicios-de-ia.md`.
- Ao aplicar as correções aprovadas, se alguma tiver mais de um caminho válido (ex.: como
  reescrever um trecho, o que cortar, se promover para `.html` agora ou só depois de outra
  validação), não decidir sozinho nem perguntar em texto livre: usar `AskUserQuestion`, no
  máximo 4 perguntas por rodada, sempre com a opção recomendada em primeiro lugar e marcada
  "(Recomendada)", antes de aplicar essa correção específica.
