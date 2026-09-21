# SAACI — Sistema de Apoio Acadêmico Colaborativo do IFCE

Projeto de produto público e código aberto. Este repositório é a fundação de **produto,
design e processo**. O código de aplicação vive em repositório separado, criado quando o
desenvolvimento começar.

## O problema

Para se formar, o aluno do IFCE precisa cumprir uma carga horária mínima de atividades
complementares. O problema não é falta de lugar para guardar certificado. É que **ninguém
entende a regra**, quais atividades contam, quanto cada uma vale, qual o limite por categoria.

Validado com 39 alunos do IFCE:

- **27/39** não sabem quais atividades contam
- **25/39** nunca tentaram validar nenhuma atividade
- **39/39** usariam uma plataforma que resolvesse isso

Leitura completa dos dados e da tese do produto em [`documentacao/produto/visao-produto.html`](documentacao/produto/visao-produto.html), ou veja a [página inicial publicada](index.html).

## O que o SAACI é

A camada centrada no aluno que **orienta antes do envio**: mostra a regra, calcula
automaticamente e avisa quando um limite é atingido, em vez de ser só um repositório de
solicitações que a coordenação decifra depois. Não substitui o sistema acadêmico institucional.

## Como este repositório está organizado

| Pasta | Conteúdo |
|---|---|
| [`documentacao/produto/`](documentacao/produto/) | Visão de produto, escopo do MVP, requisitos, backlog |
| [`documentacao/marca/`](documentacao/marca/) | Nome, tom de voz, promessa |
| [`documentacao/design-system/`](documentacao/design-system/) | Tokens visuais, princípios de UI, escrita de interface, estados obrigatórios |
| [`documentacao/fluxos/`](documentacao/fluxos/) | Telas e permissões por módulo do produto |
| [`documentacao/prompts/`](documentacao/prompts/) | Prompts gerados para o Claude Design, um por tela |
| [`documentacao/roadmap/`](documentacao/roadmap/) | Racional de negócio e checklist executável, por marco |
| [`shared/`](shared/) | CSS compartilhado por todo documento fechado. Ferramental, não conteúdo |
| [`.claude/`](.claude/) | Papel, skills e commands que automatizam este processo |

Cada arquivo dentro de `documentacao/` é a fonte de verdade do próprio tema. Documento em
elaboração é `.md` e só vira `.html` quando validado. Veja [`documentacao/README.md`](documentacao/README.md)
para o índice completo e [`.claude/CLAUDE.md`](.claude/CLAUDE.md) para o roteador por tarefa.

Este repositório também publica um site simples via GitHub Pages a partir de
[`index.html`](index.html). A fonte de verdade continua sendo sempre o documento em
`documentacao/`, nunca essa página de entrada.

## Contribuindo

Leia [`CONTRIBUTING.md`](CONTRIBUTING.md) antes de abrir uma issue ou PR, inclusive se você
já é mantenedor do projeto. Código de conduta em [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Licença

[MIT](LICENSE).
