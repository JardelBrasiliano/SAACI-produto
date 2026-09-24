# SAACI — Racional do Roadmap

> [SAACI](../../index.html) › [Documentação](../README.md) › Roadmap
> Última atualização: 24/09/2026

Fonte de verdade para **por que** cada marco existe, sua métrica e o que destrava o próximo.
A lista de tarefas executáveis vive em [`roadmap.html`](./roadmap.html). As duas coisas não
se repetem entre si.

## Estrutura do roadmap

Roadmap por **meta**, não por data. Cada marco declara um objetivo de negócio e o número que
destrava o marco seguinte, sem data fixa solta em nenhum marco.

### Planejamento inicial, para contexto

O plano original de desenvolvimento do produto (fase de levantamento de requisitos, módulo
core do MVP, módulos complementares, painel de acompanhamento) segue, em essência, a sequência
de fases descrita em `../produto/escopo-mvp.html` e `../produto/requisitos.html`. Detalhe de
calendário e de quem executa cada fase não é registrado aqui. O roadmap deste repositório é
por meta, não por data ou por pessoa.

> "Validação pela coordenação", presente no planejamento original de uma das fases, é o item
> que conflita com o escopo fechado do MVP (só aluno). Conflito já registrado em
> `../produto/backlog-roadmap.html`, seção 5.

## Horizonte

O lançamento do MVP é o **Marco 1**, não o fim do produto. Decisão registrada durante o
bootstrap: o SAACI continua depois disso, com o código publicado em repositório próprio no
GitHub, público, seguindo padrões OSS. Como consequência, os marcos posteriores ao Marco 1 já
entram no roadmap desde já, mesmo sem data, com critério de destrave declarado.

## Modelo de negócio

Nenhuma fonte consultada durante o bootstrap menciona cobrança, monetização ou modelo de
assinatura. Registro isso como **decisão em aberto**, não como fato assumido: hoje o SAACI é
gratuito para o aluno, sem modelo de receita definido. Se isso mudar, a mudança entra aqui
antes de qualquer marco que dependa dela.

## Governança do repositório

Projeto público, com um grupo de mantenedores que aprovam e fazem merge de PR. Contribuição,
inclusive dos próprios mantenedores, segue o fluxo issue → branch → PR descrito em
`CONTRIBUTING.md`, com mensagens em Conventional Commits validadas por hook local (Husky +
commitlint). Detalhe completo em `../../CONTRIBUTING.md`.

## Marcos

### Marco 0: Fundação (este bootstrap)

**Objetivo:** ter documentação viva, roadmap e ferramental de processo prontos para começar a
planejar tarefas de verdade.
**Critério de destrave:** as 11 atividades da trilha de revisão em `roadmap.html` concluídas —
cada documento de produto, marca e design system criado no bootstrap revisado pelo usuário,
com rascunhos (`.md`) promovidos a fechados (`.html`). Nenhum desses documentos passou por
revisão humana até este ponto; a trilha existe para isso. Ver `roadmap.html`, Marco 0, para a
lista de atividades, dependências e o comando de cada uma.

### Marco 1: MVP

**Objetivo:** MVP funcionando (cadastro, login institucional, recuperação de senha, perfil,
registro de horas com comprovante, cálculo automático parametrizado por curso, painel de
progresso; ver `../produto/escopo-mvp.html`) pronto para uso real.
**Critério de destrave:** a definir quando o Marco 0 estiver fechado e o repositório de
desenvolvimento existir. Não é decisão de produto, é decisão técnica que ainda não tem onde
morar.

### Marco 2: sugestões de eventos e atividades (pós-MVP, prioridade alta)

**Objetivo:** responder à 3ª funcionalidade mais pedida no questionário original (29/39),
sem RF hoje. Ver `../produto/backlog-roadmap.html`, seção 1.
**Critério de destrave:** a refinar com a skill `saaci-funcionalidade` antes de virar tarefa.

### Marcos futuros (candidatos, não comprometidos)

Estágio, cardápio do RU colaborativo, grade curricular com feedback por IA, perfil de
coordenação/validação institucional, expansão do curso-piloto das regras de cálculo (9 cursos
da pesquisa → campus Fortaleza → todos os campi do IFCE), intenção de adoção institucional
pelo IFCE. Todos documentados com racional em `../produto/backlog-roadmap.html`. Nenhum tem
critério de destrave definido; não presumir prioridade entre eles até serem discutidos.

## Métricas

Nenhuma meta numérica de produto (adoção, retenção, NPS) foi definida ainda. O único dado
quantitativo que existe hoje é a validação de demanda do questionário original (39/39
usariam, 38/39 mais motivados; ver `../produto/visao-produto.html`). Métrica de sucesso do
MVP em si ainda não foi fechada; entra quando o Marco 0 for concluído.
