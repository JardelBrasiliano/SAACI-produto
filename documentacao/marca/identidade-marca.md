# SAACI — Identidade da Marca

> [SAACI](../../index.html) › [Documentação](../README.md) › Marca
> **Rascunho: este arquivo ainda contém decisão não validada (seção 2). Vira `.html` quando
> a seção 2 for confirmada por você via `/saaci-revisar`.**
> Última atualização: 21/09/2026

Nome, tom de voz e promessa.

**Fonte de verdade para:** como o produto se chama e como ele fala. Vocabulário de domínio (o
que é "categoria", "fator de conversão" etc.) está em `.claude/references/glossario.md`.
Aplicação prática do tom de voz em texto de interface está em
`../design-system/escrita-de-interface.html`.

## 1. Nome (fechado)

**SAACI**, Sistema de Apoio Acadêmico Colaborativo do IFCE. Decisão do usuário durante o
bootstrap, entre três variantes que apareciam divergentes no `drive/` ("Sistema de Apoio ao
Aluno Colaborativo", da folha de rosto do Relatório Técnico; "AlunoIF", nome usado no
questionário enviado aos alunos). "Acadêmico" foi escolhido por cobrir o escopo ampliado do
produto (horas, e futuramente estágio e grade curricular), não só o registro de horas.

## 2. Tom de voz (proposta, não validada)

> Nenhum arquivo do `drive/` definiu tom de voz. O que segue é uma proposta minha, derivada do
> que já está fechado (persona única, princípio de orientação embutida, ver
> `../produto/visao-produto.html`). **Não é decisão tomada.** Rode
> `/saaci-revisar documentacao/marca/identidade-marca.md` quando quiser validar ou corrigir
> esta seção antes de ela virar referência para copy de tela.

### Proposta

**Direto e sem jargão de sistema. Fala como quem explica a regra, não como quem opera uma
ferramenta.** A persona do SAACI não é o aluno de TI: é o aluno que não sabe se um certificado
vale ou não. O tom precisa soar como uma pessoa explicando a regra em voz alta, nunca como um
formulário institucional.

| Em vez de | O SAACI diz |
|---|---|
| "Requisição indeferida por não conformidade" | "Essa atividade não entra em Pesquisa, mas cabe em Extensão" |
| "Aguardando processamento assíncrono" | "Calculando sua hora, cerca de 1 minuto" |
| "Erro: campo obrigatório não preenchido" | "Falta anexar o comprovante desta atividade" |

**Alternativa descartada:** tom institucional, no padrão dos sistemas acadêmicos existentes
(SIGAA, SUAP). Foi exatamente o que a pesquisa de mercado (ver `../produto/visao-produto.html`)
apontou como ponto fraco desses concorrentes: "interface densa", "ênfase administrativa em
detrimento da UX do aluno". Repetir esse tom anularia o diferencial declarado do produto.

## 3. Promessa

O SAACI não promete substituir a coordenação nem garantir que uma atividade será aceita. Ele
promete que o aluno **nunca mais vai descobrir a regra tarde demais**. Ver tese em
`../produto/visao-produto.html`, seção 3.
