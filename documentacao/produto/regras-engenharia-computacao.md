# SAACI — Regras de Cálculo: Engenharia de Computação

> [SAACI](../../index.html) › [Documentação](../README.md) › Produto
> **Rascunho: transcrição das regras do formulário, ainda não validada por você via
> `/saaci-revisar`. Vira `.html` quando for validada.**
> Última atualização: 23/09/2026

Regras de conversão e limite das atividades complementares do curso-piloto. Base do RF14, do
RF15 e do RF32 em `requisitos.html`.

## 1. Fonte

- **Formulário para Solicitação de Atividades Complementares**, Coordenação do Curso de
  Engenharia de Computação, IFCE campus Fortaleza, matriz curricular 6759. Traz a conversão e o
  limite de cada item. Não tem data nem versão. Arquivo mantido fora deste repositório.
- **PPC do Bacharelado em Engenharia de Computação**, julho de 2017, seção 1.1.7. Só fixa o
  total (120 HA, 6 créditos) e lista 14 tipos de atividade, sem conversão nem limite.

O formulário é a fonte das regras. O PPC é a fonte do total.

**Unidade das horas:** hora-aula (HA), como no PPC. O formulário escreve "horas" e é tratado
como a mesma unidade (decisão do usuário).

## 2. Regras gerais

- O aluno cumpre **120 HA** de atividades complementares, comprovadas por certificados e
  declarações.
- Só contam atividades feitas **depois do ingresso** no curso (o RF11 registra o semestre de
  início).
- Cada item tem um limite máximo (coluna "Máx."). O que passar do limite do item não é
  aproveitado.
- O que passar do total de 120 HA não é aproveitado.
- Em cada certificado ou declaração, o aluno identifica o **número do item** da tabela a que
  ele se refere.

## 3. Tabela de itens

Tipos de regra: **razão** (horas do certificado que viram horas computadas), **fixo** (valor
por unidade: período letivo, disciplina, certificação, evento, projeto, palestra ou dia de
evento), **página** (horas por página) e **fator** (base multiplicada pelo fator da tabela de
publicações, com ajuste por autoria).

| Item | Atividade | Regra | Tipo | Máx. (HA) |
|---|---|---|---|---|
| 1 | Programa de iniciação científica ou tecnológica | 40h a cada período letivo | fixo | 80 |
| 2 | Programa de iniciação à docência | 40h a cada período letivo | fixo | 80 |
| 3 | Programa de monitoria | 40h para cada disciplina como monitor | fixo | 80 |
| 4 | Projeto de pesquisa ou extensão | 30h por projeto por período letivo. Não pode ser o mesmo projeto em que o aluno fez iniciação científica ou tecnológica (item 1) | fixo | 60 |
| 5 | Atividades artístico-culturais e/ou esportivas | 1h para cada 2h de atividade | razão | 60 |
| 6 | Curso de línguas | 1h para cada 4h de curso | razão | 60 |
| 7 | Curso na área de engenharia de computação | 1h para cada 4h de curso | razão | 60 |
| 8 | Curso fora da área de engenharia de computação | 1h para cada 6h de curso | razão | 40 |
| 9 | Ministrar curso na área de engenharia da computação | 2h para cada 1h de curso | razão | 60 |
| 10 | Certificação técnica | 30h para cada certificação | fixo | 60 |
| 11 | Organização de eventos técnicos e/ou científicos na área do curso | 20h por evento | fixo | 40 |
| 12 | Participação em eventos técnicos e/ou científicos na área do curso | 4h por dia de evento | fixo | 40 |
| 13 | Participação como ouvinte em palestras relacionadas com a área do curso (as palestras não devem ser parte de eventos) | 2h por palestra | fixo | 30 |
| 14 | Participação como palestrante em palestras relacionadas com a área do curso | 8h por palestra | fixo | 30 |
| 15 | Projeto social extracurricular (fora da disciplina de Projeto Social) | 15h por projeto | fixo | 30 |
| 16 | Produção técnica com relatório (*) | 3h para cada 10 páginas | página | 30 |
| 17 | Apresentação de pôster em evento nacional (*) | 4h × fator da Tabela I | fator | 30 |
| 18 | Apresentação de pôster em evento internacional (*) | 5h × fator da Tabela I | fator | 40 |
| 19 | Publicação de resumo em evento nacional (*) | 5h × fator da Tabela I | fator | 40 |
| 20 | Publicação de resumo em evento internacional (*) | 6h × fator da Tabela I | fator | 40 |
| 21 | Publicação de artigo em evento nacional (*) | 6h × fator da Tabela I | fator | 80 |
| 22 | Publicação de artigo em evento internacional (*) | 7h × fator da Tabela I | fator | 80 |
| 23 | Publicação de artigo em periódico técnico e/ou científico nacional (*) | 7h × fator da Tabela I | fator | 80 |
| 24 | Publicação de artigo em periódico técnico e/ou científico internacional (*) | 8h × fator da Tabela I | fator | 80 |

(*) Carga horária completa se 1º autor, metade se 2º autor e 1/3 para os demais autores.

**Tabela I: fator por classificação Qualis na área de Ciência da Computação**

| Qualis | Fator | Qualis | Fator |
|---|---|---|---|
| Sem Qualis | 1 | B2 | 6 |
| C | 2 | B1 | 7 |
| B5 | 3 | A2 | 8 |
| B4 | 4 | A1 | 9 |
| B3 | 5 | | |

## 4. O que isso exige do produto

Estes pontos saem direto da tabela e valem para o RF14, o RF15 e a tela de registro.

- O registro pede dados diferentes conforme o item: quantidade de períodos letivos, de
  disciplinas, de dias, de páginas, posição de autoria e classificação Qualis. Uma tela só com
  "horas do certificado" não cobre a tabela.
- Há quatro tipos de regra (razão, fixo, página, fator). A parametrização do RNF21 precisa
  representar os quatro.
- Duas regras cruzam itens: o item 4 não pode ser o mesmo projeto do item 1, e o total de 120 HA
  vale sobre a soma de todos os itens.
- Só a soma dos máximos já passa muito de 120 HA. O aviso de limite (tese do produto) precisa
  distinguir o limite do item do limite do total.

## 5. Divergências entre formulário e PPC

- 10 itens do formulário não estão na lista do PPC: 7, 8, 9, 14, 15, 17, 18, 19, 20 e 22.
- O PPC cita "publicação de artigo em evento de iniciação científica", que não existe no
  formulário.
- O PPC não separa artigo em periódico nacional e internacional. O formulário separa (itens 23
  e 24).

O formulário parece o mais recente por ser mais detalhado, mas não tem data. Enquanto isso não
for confirmado, ele é a fonte das regras.

## 6. Pontos que a fonte não define

- **Arredondamento.** Curso de 10h no item 7 dá 2,5h. O formulário não diz se arredonda.
- **Alcance do limite.** Este rascunho lê "CH máxima" como o teto da soma de todos os
  certificados daquele item (por exemplo, dois programas de iniciação científica somam no
  máximo 80h). O formulário não diz isso de forma explícita.
- **Versão do formulário.** Sem data, não dá para saber se vale para todos os alunos da matriz
  6759 nem para outras matrizes do curso.
