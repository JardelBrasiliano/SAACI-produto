# SAACI — Contexto condensado

> **Isto não é fonte de verdade.** É um atalho para colar em uma conversa nova ou no Claude
> Design. Cada afirmação aqui tem um documento de origem. Em caso de dúvida ou divergência, o
> documento vence, não este resumo. Ver `.claude/CLAUDE.md` para o roteador completo.

## O produto

**SAACI, Sistema de Apoio Acadêmico Colaborativo do IFCE.** Projeto de produto público e
código aberto, com o lançamento do MVP como primeira meta (Marco 1). O produto continua
depois disso, como repositório OSS.

## O problema

O aluno do IFCE precisa cumprir horas de atividades complementares para se formar, mas não
sabe a regra: o que conta, quanto vale, qual o limite por categoria. Validado com 39 alunos:
27/39 não sabem o que conta, e 39/39 usariam uma plataforma que resolvesse isso. Detalhe
completo em `documentacao/produto/visao-produto.html`.

## Persona

Uma só: o aluno que não sabe a regra, inclusive o veterano prestes a se formar (12 de 21
veteranos também não sabem). Não existe segmentação por semestre.

## Tese

Não substitui o sistema acadêmico institucional. É a camada que **orienta antes do envio**:
mostra a regra de conversão, calcula automático e avisa quando um limite é atingido, antes de
a coordenação recusar por erro de forma.

## MVP (ver `documentacao/produto/escopo-mvp.html` e `documentacao/produto/requisitos.html`)

Cadastro, login institucional, recuperação de senha, perfil (curso e semestre), registro de
horas **com upload de comprovante**, cálculo automático (curso-piloto: Engenharia de
Computação, depois Teatro) e painel de progresso por categoria. Só o aluno é usuário. Sem
perfil de coordenação no MVP.

## Fora do MVP (ver `documentacao/produto/backlog-roadmap.html`)

Estágio, cardápio do RU colaborativo, grade curricular com IA, validação pela coordenação.
Sugestões de eventos é marco pós-MVP com prioridade alta (29/39 pediram, sem RF ainda).

## Princípio central de design

A orientação é embutida no ato de registrar a atividade, nunca um tutorial ou modo separado.
Mobile-first, com desktop como reflow. Ver `documentacao/design-system/principios-ui.html`.

## Onde cavar mais fundo

Roteador completo em `.claude/CLAUDE.md`. Racional de negócio e roadmap em
`documentacao/roadmap/README.md` e `documentacao/roadmap/roadmap.html`.
