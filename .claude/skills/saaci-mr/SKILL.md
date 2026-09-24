---
name: saaci-mr
description: Gera a descrição de Pull Request no template deste repositório (.github/PULL_REQUEST_TEMPLATE.md), a partir do diff da branch atual contra a branch alvo. Use sempre que o usuário pedir uma descrição, relatório ou texto de PR/MR para este repositório.
---

# saaci-mr

Gera o texto de Pull Request pronto para colar no GitHub, seguindo **sempre** o template já
existente em [`.github/PULL_REQUEST_TEMPLATE.md`](../../../.github/PULL_REQUEST_TEMPLATE.md),
nunca um formato genérico de MR.

## Regras

- **Nunca executa `git push`, `git commit`, `gh pr create` nem qualquer comando que publique
  algo.** Só gera o texto. Abrir o PR de verdade é sempre decisão do usuário.
- Branch alvo vem de `$ARGUMENTS`. Se vazio, usa `main`.
- Roda `git diff <branch-alvo>...HEAD --stat` e o diff completo dos arquivos mudados pra
  entender o que muda de verdade, não presume pelo nome dos arquivos.
- Se a branch atual estiver atrás de `origin/<branch-alvo>` (divergência), avisa antes de
  gerar o texto — a descrição do PR não deve golpear em cima de um diff desatualizado.
- **"Issue relacionada":** só preenche `Fecha #123` se o usuário informar o número. Sem
  número, deixa `Fecha #` em aberto — nunca inventa.
- **"O que mudou":** bullets curtos, um por mudança real (não por arquivo). Linguagem comum,
  sem jargão técnico desnecessário — quem não é dev também precisa entender.
- **"Por quê":** 1 a 3 frases. O motivo de negócio ou produto por trás da mudança, não a
  reafirmação técnica do "o que mudou".
- **Checklist final:** marca `[x]` só no que foi de fato verificado nesta sessão (documento de
  `documentacao/` atualizado quando a mudança altera decisão de produto/design; mensagens de
  commit em Conventional Commits). Se não deu pra confirmar, deixa `[ ]` e diz o motivo.
- Sem vício de escrita de IA (travessão em série, "não apenas... mas também", adjetivo vazio,
  hedge de IA). Ver `.claude/skills/saaci-copy/references/vicios-de-ia.md`.
- Saída sempre dentro de um bloco de código ` ```markdown `, pronto pra copiar.

## Template a seguir (não inventar outro)

```markdown
## Issue relacionada

Fecha #

## O que mudou

## Por quê

## Arquivos de fonte de verdade atualizados

Se esta mudança altera uma decisão de produto/design, confirme que o documento correspondente
em `documentacao/produto/`, `documentacao/marca/`, `documentacao/design-system/` ou
`documentacao/roadmap/` foi atualizado — não deixe a decisão só neste PR.

- [ ] Documento correspondente atualizado (ou não se aplica)
- [ ] Mensagens de commit seguem Conventional Commits
```
