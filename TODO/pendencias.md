# Pendências: só o usuário resolve

Itens que dependem de ação fora do Claude Code: decisão pessoal, acesso a terceiro, ou dado
que não existe em nenhum arquivo do repositório.

## Bloqueantes para o Marco 1 (MVP)

- [x] **Obter o PPC (Projeto Pedagógico de Curso) de Engenharia de Computação.** Obtido, junto
  com o formulário de solicitação de atividades complementares (matriz 6759). A regra de cálculo
  do RF15 (`documentacao/produto/requisitos.html`) está no formulário, não no PPC, que só fixa
  as 120 horas totais.
- [ ] **O mesmo para Licenciatura em Teatro**, segundo curso escolhido para provar a
  parametrização (RF15).
- [ ] **Criar o repositório de desenvolvimento** (separado deste, `SAACI-produto`) quando o
  planejamento técnico começar. Decisão registrada em `documentacao/roadmap/README.md`.

## Decisões de produto ainda em aberto

- [ ] **O que acontece com horas já registradas quando o aluno troca de curso?** Levantado em
  `documentacao/design-system/estados-e-casos-de-borda.html`, sem resposta ainda. Não presumir
  ao desenhar o fluxo de perfil.
- [ ] **Formato e tamanho máximo do arquivo de comprovante (RF31).** Sem definição. Vira
  pendência técnica quando o repositório de desenvolvimento existir.
- [ ] **Escopo de "Sugestões de eventos" (Marco 2).** Quem publica os eventos, curadoria,
  relação com as categorias do RF14: nada disso está decidido. Rodar `/saaci-funcionalidade`
  quando for a vez deste marco.

## Validação pendente (documentos ainda em `.md`, rascunho)

- [ ] `documentacao/design-system/tokens-visuais.md`: verde/vermelho institucionais já têm
  fonte oficial (Manual da Marca dos Institutos Federais). O restante (azul, âmbar, roxo,
  tipografia, espaçamento) é proposta minha, não validada.
- [ ] `documentacao/design-system/referencias-visuais.md`: vazio, aguardando você trazer
  referência real.

## Governança do repositório (fora do Claude)

- [ ] Criar a organização/conta no GitHub onde o repositório público vai morar, se ainda não
  existir.
- [ ] Convidar outros mantenedores com permissão de escrita, conforme necessário, quando o
  repositório for criado no GitHub.

## GitHub Pages (site publicado a partir de `index.html`)

- [ ] **Ativar o GitHub Pages nas configurações do repositório** (Settings → Pages → Source:
  branch `main`, pasta raiz `/`) depois que o repositório existir no GitHub. Isso não pode ser
  feito por aqui, é ação de configuração no próprio GitHub.
- [ ] **Limitação conhecida, não resolvida:** os documentos em `.md` (`tokens-visuais.md`,
  `referencias-visuais.md`, `roadmap/README.md`) aparecem como texto puro
  quando abertos direto pelo GitHub Pages. O Jekyll (motor padrão do Pages) só converte `.md`
  em página estilizada quando o arquivo tem front matter YAML, o que estes arquivos não têm de
  propósito, para não misturar preocupação de publicação com conteúdo. Isso é aceitável por
  ora: os documentos "fechados" (`.html`) são exatamente os que têm tratamento visual completo,
  e os rascunhos (`.md`) sendo texto puro no site publicado é consistente com "ainda não é
  decisão validada". Revisitar se isso incomodar na prática.

