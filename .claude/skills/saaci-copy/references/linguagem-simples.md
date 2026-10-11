# Linguagem Simples: procedimento

As regras de clareza do texto de interface (você, voz ativa, frase curta, verbo em vez de
substantivo, vocabulário do aluno, sem sigla, sem dupla negativa, erro com próximo passo,
começar pelo que importa, sem travessão) estão na seção 2 de
`documentacao/design-system/escrita-de-interface.html`. Este arquivo não repete as regras, só
diz como a skill `saaci-copy` as aplica.

## Como aplicar

- Confira cada texto contra as regras da seção 2 e compare com o exemplo mais próximo da
  seção 3 do mesmo documento.
- Termo de domínio correto não é jargão. Na dúvida entre termo de sistema e termo de negócio,
  vale `.claude/references/glossario.md`.

## Regra de ouro

Nunca altere fatos, números, prazos, valores, nomes próprios ou regras de negócio. A
simplificação é de **forma**, não de **conteúdo**. Se a sugestão ficar visivelmente mais longa
que o original, sinalize isso explicitamente: pode não caber no espaço de UI disponível.

## Diferença entre este arquivo e `vicios-de-ia.md`

Linguagem Simples é sobre **quem consegue ler** o texto (aluno com pouca familiaridade com
tecnologia, ver RNF23). Vícios de IA é sobre **como o texto soa** (gerado ou escrito). Um texto
pode estar em linguagem simples perfeita e ainda soar como IA (frases curtas demais, em série,
sem nenhuma variação de ritmo). A skill `saaci-copy` verifica os dois.
