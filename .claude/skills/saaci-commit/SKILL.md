---
name: saaci-commit
description: Sugere mensagem de commit em Conventional Commits, em português. Use sempre que o usuário pedir uma mensagem de commit para mudanças feitas neste repositório.
---

# saaci-commit

Sugere mensagem de commit em [Conventional Commits](https://www.conventionalcommits.org/pt-br/),
em português, compatível com a configuração de `commitlint.config.js` (aceita assunto em
português; a regra de case do inglês está desligada).

## Regras

- **Nunca executa `git commit` nem `git push`.** Só sugere o texto. A decisão de commitar é
  sempre do usuário.
- Tipo (`feat`, `fix`, `docs`, `refactor`, `chore`, `style`) escolhido pelo conteúdo real da
  mudança. A maioria das mudanças neste repositório é `docs` (produto, design, roadmap são
  documentação, não código).
- Assunto no imperativo, em português, sem ponto final: `docs: adiciona regra de conversão ao
requisito RF32`.
- Corpo (quando a mudança não é óbvia pelo assunto) explica o quê e o porquê, nunca só o quê.

## Exemplo de saída

```
docs: promove upload de comprovante a requisito de MVP

RF31 fecha lacuna entre o levantamento original (que nunca previu upload)
e o pedido mais comum do questionário (33/39 respostas).
```
