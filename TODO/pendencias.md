# Pendências: só o usuário resolve

Itens que dependem de ação fora do Claude Code: decisão pessoal, acesso a terceiro, ou dado
que não existe em nenhum arquivo do repositório.

## Bloqueantes para o Marco 1 (MVP)

- [x] **Obter o PPC (Projeto Pedagógico de Curso) de Engenharia de Computação.** Obtido, junto
  com o formulário de solicitação de atividades complementares (matriz 6759). Regras em
  `documentacao/produto/regras-engenharia-computacao.html`.
- [ ] **O mesmo para Engenharia de Telecomunicações**, segundo curso escolhido para provar a
  parametrização (RF15). Substitui Licenciatura em Teatro. O orientador faz parte da
  coordenação do curso e é o caminho para obter o formulário de solicitação.
- [ ] **Criar o repositório de desenvolvimento** (separado deste, `SAACI-produto`) quando o
  planejamento técnico começar. Decisão registrada em `documentacao/roadmap/README.md`.

## Decisões de produto ainda em aberto

- [ ] **O que acontece com horas já registradas quando o aluno troca de curso?** Levantado em
  `documentacao/design-system/estados-e-casos-de-borda.html`, sem resposta ainda. Não presumir
  ao desenhar o fluxo de perfil.
- [ ] **Tamanho máximo do arquivo de comprovante (RF31).** Formatos (PDF, JPG, PNG) e critério
  do limite já fechados no RNF25. Falta o valor exato, definido no repositório de
  desenvolvimento.
- [ ] **Agente de IA no registro de atividade.** Ideia: o agente lê o comprovante no momento do
  registro e avisa o aluno (ex.: projeto do item 4 que é o mesmo da iniciação científica do
  item 1). Não está em nenhum documento de produto. Rodar `/saaci-funcionalidade` para decidir
  o que ele lê, se entra no MVP e o tratamento de LGPD (o certificado tem dados pessoais). O
  cálculo continua pelas regras parametrizadas (RF14, RNF21). Hoje o aviso do item 4 está
  registrado sem citar o mecanismo.
- [ ] **Matrícula do aluno no perfil.** O formulário de solicitação pede Aluno e Matrícula, e a
  tela do RF37 deveria mostrar os dois prontos. O RF09 não coleta matrícula. Decidir se entra
  como campo do perfil (é dado pessoal novo, ver RNF05 sobre minimização).
- [ ] **Escopo de "Sugestões de eventos" (Marco 2).** Quem publica os eventos e curadoria não estão decididos. Rodar `/saaci-funcionalidade` quando for a vez deste marco.

## Validação pendente (documentos ainda em `.md`, rascunho)

- [ ] `documentacao/design-system/referencias-visuais.md`: vazio, aguardando você trazer
  referência real.

## Confirmar com a coordenação de Engenharia de Computação

Não bloqueiam `documentacao/produto/regras-engenharia-computacao.html`, que já adota os dois
primeiros pontos. Se a resposta divergir, atualizar o documento. O terceiro completa o passo a
passo do RF37.

- [ ] O máximo de cada item vale para a soma dos certificados daquele item.
- [ ] O número do item no nome do arquivo (RF36) basta, ou precisa estar escrito no próprio
  certificado.
- [ ] Qual tipo de processo o aluno escolhe no SEI para pedir o aproveitamento.

## Governança do repositório (fora do Claude)

- [ ] Criar a organização/conta no GitHub onde o repositório público vai morar, se ainda não
  existir.
- [ ] Convidar outros mantenedores com permissão de escrita, conforme necessário, quando o
  repositório for criado no GitHub.

## GitHub Pages (site publicado a partir de `index.html`)

- [ ] **Ativar o GitHub Pages nas configurações do repositório** (Settings → Pages → Source:
  branch `main`, pasta raiz `/`) depois que o repositório existir no GitHub. Isso não pode ser
  feito por aqui, é ação de configuração no próprio GitHub.
- [ ] **Limitação conhecida, não resolvida:** os documentos em `.md` (`referencias-visuais.md`,
  `roadmap/README.md`) aparecem como texto puro
  quando abertos direto pelo GitHub Pages. O Jekyll (motor padrão do Pages) só converte `.md`
  em página estilizada quando o arquivo tem front matter YAML, o que estes arquivos não têm de
  propósito, para não misturar preocupação de publicação com conteúdo. Isso é aceitável por
  ora: os documentos "fechados" (`.html`) são exatamente os que têm tratamento visual completo,
  e os rascunhos (`.md`) sendo texto puro no site publicado é consistente com "ainda não é
  decisão validada". Revisitar se isso incomodar na prática.

