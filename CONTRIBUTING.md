# Como contribuir

Este projeto tem um grupo de mantenedores que revisam e fazem merge de todo Pull Request. O
fluxo abaixo vale para qualquer contribuição, inclusive as dos próprios mantenedores: nenhuma
escrita direta na `main`.

## Fluxo

1. **Abra uma issue primeiro.** Use os templates em
   [`.github/ISSUE_TEMPLATE/`](.github/ISSUE_TEMPLATE/): um para funcionalidade, outro para
   problema/bug. Isso vale mesmo para mudança pequena, é o registro do porquê, não só do quê.
2. **Crie uma branch a partir da issue**, com prefixo no padrão
   [Conventional Commits](https://www.conventionalcommits.org/pt-br/): `feat/`, `fix/`,
   `docs/`, `refactor/`, `chore/`.
3. **Faça commits em Conventional Commits, em português.** Exemplo:
   `docs: atualiza escopo do MVP com regra de recuperação de senha`. Um hook local (Husky +
   commitlint) recusa mensagem fora do padrão, ver seção abaixo.
4. **Abra um Pull Request** usando o template em
   [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md), referenciando a
   issue.
5. Um mantenedor revisa e faz o merge. Contribuição de fora do time segue o mesmo fluxo, via
   fork.

## Ferramental local

Este repositório usa [Husky](https://typicode.github.io/husky/) para dois hooks:

- `pre-commit`: roda o Prettier (via lint-staged) nos arquivos em stage.
- `commit-msg`: valida a mensagem de commit com commitlint, aceitando assunto em português.

Instalação (uma vez, por máquina):

```bash
npm install
```

Isso não instala nenhuma dependência de produto, só o tooling de formatação e validação de
commit. Não há stack de aplicação definida neste repositório ainda.

## Escopo deste repositório

Aqui vive produto, design e processo, não código de aplicação. Se sua contribuição é sobre
implementação técnica, ela provavelmente pertence ao repositório de desenvolvimento (a ser
criado). Se tiver dúvida sobre onde algo se encaixa, abra a issue aqui mesmo, os mantenedores
direcionam.

## Documentação viva

Cada arquivo dentro de `documentacao/` é a fonte de verdade do próprio tema. Se sua
contribuição muda uma decisão registrada, atualize o arquivo. Não deixe a decisão só na
conversa da issue ou do PR. Documento em elaboração é `.md` e só vira `.html` (com
`shared/base.css`) quando a decisão estiver validada.
