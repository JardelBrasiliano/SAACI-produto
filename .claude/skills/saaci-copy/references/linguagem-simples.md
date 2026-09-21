# Linguagem Simples: critérios

Adaptado da skill pessoal `j-linguagem-simples` (padrão gov.br / linguagem cidadã) para o
domínio do SAACI. Um texto entra no relatório da skill `saaci-copy` se violar pelo menos um
destes critérios.

## Critérios

- **Voz ativa** em vez de passiva. "Você precisa anexar o comprovante" em vez de "O
  comprovante deve ser anexado".
- **Frases curtas**, uma ideia por frase. Evite orações longas com múltiplas subordinadas.
- **Verbos em vez de nominalizações.** "Confirmar" em vez de "a confirmação de". "Registrar"
  em vez de "o registro de".
- **Vocabulário do dia a dia** em vez de jargão técnico, jurídico ou administrativo, salvo
  quando o termo técnico é o vocabulário de domínio correto (ver
  `.claude/references/glossario.md`, que distingue termo de sistema de termo de negócio).
- **Endereçamento direto ao aluno** ("você"), no tom definido em
  `documentacao/marca/identidade-marca.md`.
- **Sem duplas negativas.** "Não é possível enviar sem comprovante" em vez de "não é impossível
  que a atividade não seja aceita sem comprovante".
- **Siglas explicadas** na primeira ocorrência, ou substituídas por termo comum. RF, RNF, PPC
  nunca aparecem em tela; ver glossário para o termo que a tela usa no lugar.
- **Sem travessão no texto reescrito.** Ver `vicios-de-ia.md`, critério 1.

## Regra de ouro

Nunca altere fatos, números, prazos, valores, nomes próprios ou regras de negócio. A
simplificação é de **forma**, não de **conteúdo**. Se a sugestão ficar visivelmente mais longa
que o original, sinalize isso explicitamente: pode não caber no espaço de UI disponível.

## Diferença entre este arquivo e `vicios-de-ia.md`

Linguagem Simples é sobre **quem consegue ler** o texto (aluno com pouca familiaridade com
tecnologia, ver RNF23). Vícios de IA é sobre **como o texto soa** (gerado ou escrito). Um texto
pode estar em linguagem simples perfeita e ainda soar como IA (frases curtas demais, em série,
sem nenhuma variação de ritmo). A skill `saaci-copy` verifica os dois.
