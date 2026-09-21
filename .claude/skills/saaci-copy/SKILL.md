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
3. Se o texto envolve uma regra de negócio (categoria, limite, conversão de horas), confira o
   RF/RNF correspondente em `documentacao/produto/requisitos.html` antes de reescrever. Copy
   não pode simplificar a ponto de mudar o que a regra realmente diz.

## Passo 2: o que revisar

Considere como candidato **apenas** texto que o usuário final lê ou recebe como retorno do
sistema: título, parágrafo, rótulo de botão, placeholder, mensagem de erro, validação, toast,
alerta, texto de acessibilidade (label/hint de leitor de tela).

**Nunca revise:** comentário de código, nome de variável, chave de tradução, log técnico,
string sem exposição ao usuário.

## Passo 3: critérios

Dois conjuntos de critérios, ambos em `references/`:

- [`references/linguagem-simples.md`](references/linguagem-simples.md): clareza para o
  público real (voz ativa, frase curta, vocabulário do dia a dia, sem sigla, sem dupla
  negativa).
- [`references/vicios-de-ia.md`](references/vicios-de-ia.md): o texto soa gerado (travessão
  em série, contraste formulaico, adjetivo vazio, hedge de IA).

Um texto entra no relatório se violar pelo menos um critério de qualquer um dos dois arquivos.
Consulte [`references/exemplos-saaci.md`](references/exemplos-saaci.md) para calibrar o tom
esperado em situações já mapeadas do domínio (cadastro, registro de horas, upload, exclusão
de conta, estado vazio).

**Regra de ouro:** nunca altere fato, número, prazo, valor, nome próprio ou regra de negócio.
A simplificação é de forma, não de conteúdo.

## Passo 4: apresentação do relatório

Para cada texto com problema:

```
## [arquivo:linha]

**Atual:**
> "texto original"

**Problema:** [critério violado, em uma frase, citando linguagem-simples.md ou vicios-de-ia.md]

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
3. Nunca crie arquivo novo, exceto quando o próprio usuário pedir uma linha nova em
   `references/exemplos-saaci.md` para registrar um caso novo aprovado.
4. Ao terminar, liste um resumo compacto: `[arquivo:linha] "texto antigo" → "texto novo"`.

Se o usuário recusar ou pedir ajuste de escopo, respeite a decisão e não edite o arquivo.
