# Exemplos de copy do SAACI: antes e depois

Casos reais do domínio, cada um ligado ao RF/RNF ou princípio que o justifica. Usado pela
skill `saaci-copy` como referência de calibração, e por `saaci-prompt-tela` ao escrever texto
de exemplo num prompt. Nenhum destes textos está implementado, são modelo de tom, não UI final.

## Cadastro e login (RF01-RF08)

| Situação | Evitar | Preferir |
|---|---|---|
| E-mail fora do domínio institucional | "E-mail inválido: domínio não reconhecido pelo sistema" | "Use o seu e-mail do IFCE para se cadastrar" |
| Link de confirmação expirado (RNF03) | "Token expirado ou já utilizado" | "Esse link já venceu. Peça um novo na tela de login" |
| Recuperação de senha (RF08) | "Solicitação de redefinição enviada com sucesso" | "Enviamos um link para trocar sua senha. Confira seu e-mail" |

## Registro de horas (RF13-RF16, RF32)

| Situação | Evitar | Preferir |
|---|---|---|
| Regra de conversão (RF32, Princípio 1) | "Fator de conversão aplicável: 0,2" | "Essa palestra de 5h vale 1h na sua contagem" |
| Categoria no limite (RF14/RF16) | "Limite de categoria atingido" | "Pesquisa já está cheia (40 de 40h). Essa atividade não vai contar aqui, mas cabe em Extensão" |
| Sucesso ao registrar | "Registro efetuado com sucesso" | "Atividade registrada. Faltam 47h para você fechar" |

## Upload de comprovante (RF31)

| Situação | Evitar | Preferir |
|---|---|---|
| Campo obrigatório (Estado 4) | "Campo obrigatório não preenchido" | "Falta anexar o comprovante desta atividade" |
| Erro de conexão no meio do upload (Estado 2) | "Falha na transferência do arquivo" | "O envio caiu no meio. O que você já preencheu ficou salvo, só falta reenviar o arquivo" |
| Formato não aceito | "Formato de arquivo não suportado" | "Esse tipo de arquivo não funciona aqui. Envie em PDF, JPG ou PNG" |

## Conta e dados pessoais (RF33, RF34, LGPD)

| Situação | Evitar | Preferir |
|---|---|---|
| Confirmação de exclusão de conta | "Confirma a exclusão permanente da conta?" | "Isso apaga sua conta e os dados de vez. Quer baixar um resumo antes de continuar?" |
| Conta excluída | "Conta removida do sistema" | "Sua conta foi apagada. Obrigado por ter usado o SAACI" |

## Estado vazio (Estado 1, Princípio 1)

| Situação | Evitar | Preferir |
|---|---|---|
| Aluno sem nenhum registro | "Nenhum item encontrado" | "Você precisa de 200h para se formar. Registre a primeira atividade quando quiser" |

## Como usar esta referência

Nenhum destes exemplos é RF isolado, cada um cita de qual requisito ou princípio a regra de
negócio vem. Ao propor copy nova para uma situação que não está aqui, adicione a linha depois
de aprovada, mantendo o vínculo com a fonte (RF, RNF ou princípio).
