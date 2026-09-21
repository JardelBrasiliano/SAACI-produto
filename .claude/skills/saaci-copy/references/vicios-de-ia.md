# Vícios de escrita de IA: checklist

Referência geral, não específica de copy de produto. Usada pela skill `saaci-copy` ao revisar
texto de interface, e citada em `.claude/CLAUDE.md` como regra de toda comunicação escrita
neste repositório. Objetivo: texto que soa escrito por alguém que conhece o assunto, não texto
gerado que passou por um corretor de estilo.

Um trecho entra no relatório se violar pelo menos um destes critérios.

## 1. Travessão em série

O tique mais reconhecível. Frase depois de frase quebrada com "—" no lugar de ponto, vírgula
ou conectivo.

- **Errado:** "O sistema calcula automaticamente — sem intervenção do aluno — e avisa quando o
  limite é atingido."
- **Certo:** "O sistema calcula automaticamente, sem intervenção do aluno, e avisa quando o
  limite é atingido."

Travessão continua válido em dois casos: separador de título ("Produto — Página") e atribuição
de citação direta ("— fulano, em entrevista"). Fora isso, é sinal de alerta.

## 2. Contraste formulaico repetido

"Não é X, é Y." "Não apenas X, mas também Y." Usado uma vez, é recurso retórico legítimo.
Usado em série, no mesmo texto, é padrão de geração, não de escrita humana.

- **Errado:** "Não é um formulário burocrático, é uma conversa. Não é um sistema frio, é um
  parceiro. Não é complicado, é simples."
- **Certo:** escolher UM contraste que realmente importa e deixar o resto em afirmação direta.

## 3. Adjetivo vazio

Palavra que soa importante mas não carrega informação verificável: "robusto", "poderoso",
"simples", "intuitivo", "eficiente", "inovador", quando usada sem um fato que a sustente.

- **Errado:** "Uma solução robusta e poderosa para gestão de horas."
- **Certo:** "Calcula a hora automaticamente e avisa quando falta pouco para bater a meta."
  (o fato substitui o adjetivo)

## 4. Hedge de IA

Frases de transição que um gerador usa para soar cauteloso ou abrangente, sem acrescentar
conteúdo: "é importante notar que", "vale ressaltar que", "cabe destacar", "de modo geral".

- **Errado:** "É importante notar que o RF32 exige mostrar a regra antes do envio."
- **Certo:** "O RF32 exige mostrar a regra antes do envio."

## 5. Excesso de negrito e de lista

Negrito em toda frase-chave e lista para tudo, inclusive onde duas frases resolveriam,
sobrecarrega a leitura e não ajuda a hierarquia. Reserve negrito para o que precisa ser achado
rápido numa varredura visual, não para toda afirmação importante.

## 6. Estrutura simétrica demais

Todo parágrafo com o mesmo comprimento, toda seção com a mesma quantidade de itens, todo
exemplo seguindo template idêntico. Texto humano varia o ritmo. Se cada seção deste documento
tem exatamente 3 bullets de 2 linhas, desconfie.

## Quando não se aplica

- Citação direta de terceiro (entrevista, resposta de questionário): nunca reescrever o que a
  pessoa disse, mesmo que viole os critérios acima. A fidelidade à fonte vem antes do estilo.
- Termo técnico ou nome próprio: manter como está.
- Dado, número, prazo, valor: a simplificação é de forma, nunca de conteúdo (mesma regra de
  ouro da skill `linguagem-simples.md`).
