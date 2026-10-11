---
name: saaci-copy
description: Revisa texto voltado ao usuário final em Linguagem Simples, adaptado ao domínio e ao público do SAACI, e verifica vícios de escrita de IA. Use quando o usuário pedir para revisar copy, texto de tela, mensagem de erro ou qualquer texto de interface do SAACI.
---

# saaci-copy

Revisa texto voltado ao usuário final do SAACI em dois eixos: Linguagem Simples (o texto é
claro para o público real, incluindo quem tem pouca familiaridade com tecnologia, RNF23) e
ausência de vícios de escrita de IA (o texto soa escrito para alguém, não gerado). Estrutura
adaptada da skill pessoal `j-linguagem-simples`.

**Toda a análise e comunicação com o usuário é em português do Brasil.**

## Passo 1: coleta de contexto

1. Identifique o arquivo ou trecho a revisar. Se o usuário não indicar, pergunte qual.
2. Leia o arquivo inteiro antes de extrair qualquer texto, para entender o contexto ao redor.
3. Leia `documentacao/design-system/escrita-de-interface.html`, a regra de produto para texto
   de interface (regras práticas e exemplos por situação), e `.claude/references/glossario.md`
   para o vocabulário de domínio. Se algo em `references/` divergir desse documento, vale o
   documento; aponte a divergência ao usuário em vez de escolher sozinho.
4. Se o texto envolve uma regra de negócio (categoria, limite, conversão de horas), confira o
   RF/RNF correspondente em `documentacao/produto/requisitos.html` antes de reescrever. Copy
   não pode simplificar a ponto de mudar o que a regra realmente diz.

## Passo 2: o que revisar

Considere como candidato **apenas** texto que o usuário final lê ou recebe como retorno do
sistema: título, parágrafo, rótulo de botão, placeholder, mensagem de erro, validação, toast,
alerta, texto de acessibilidade (label/hint de leitor de tela).

**Nunca revise:** comentário de código, nome de variável, chave de tradução, log técnico,
string sem exposição ao usuário.

## Passo 3: critérios

Dois eixos:

- **Clareza para o público real:** as regras práticas da seção 2 de
  `escrita-de-interface.html`. Os exemplos da seção 3 calibram o tom em situações já mapeadas
  (cadastro, registro de horas, comprovante, conta, estado vazio).
  [`references/linguagem-simples.md`](references/linguagem-simples.md) traz o procedimento
  para aplicar essas regras.
- **Vício de escrita de IA:** [`references/vicios-de-ia.md`](references/vicios-de-ia.md)
  (travessão em série, contraste formulaico, adjetivo vazio, hedge de IA).

Um texto entra no relatório se violar pelo menos uma regra de qualquer um dos dois eixos.

**Regra de ouro:** nunca altere fato, número, prazo, valor, nome próprio ou regra de negócio.
A simplificação é de forma, não de conteúdo.

## Passo 4: apresentação do relatório

Para cada texto com problema:

```
## [arquivo:linha]

**Atual:**
> "texto original"

**Problema:** [critério violado, em uma frase, citando a regra de escrita-de-interface.html ou o item de vicios-de-ia.md]

**Sugestão:**
> "texto reescrito"
```

Se nenhum texto do arquivo violar os critérios, informe: "Nenhum texto precisa de ajuste, já
está em linguagem simples e sem vício de IA."

Ao final, sempre pergunte antes de aplicar qualquer mudança: "Quer que eu aplique essas
sugestões no arquivo?"

## Passo 5: aplicação (só após aprovação explícita)

1. Aplique apenas as sugestões aprovadas. Aprovação parcial edita só os itens confirmados.
2. Edite somente o arquivo-alvo. Não toque em lógica, estilo ou estrutura, só o conteúdo
   textual.
3. Nunca crie arquivo novo. Se o usuário quiser registrar um caso novo aprovado como
   exemplo, a linha entra na seção 3 de `escrita-de-interface.html`, com a fonte (RF, RNF,
   princípio ou estado).
4. Ao terminar, liste um resumo compacto: `[arquivo:linha] "texto antigo" → "texto novo"`.

Se o usuário recusar ou pedir ajuste de escopo, respeite a decisão e não edite o arquivo.
