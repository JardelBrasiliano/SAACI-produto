# Glossário: vocabulário do domínio SAACI

Termos que apareceram no material original do `drive/` (já descartado) e que a skill
`saaci-copy` usa para não confundir vocabulário de sistema com vocabulário do negócio. Termo
de sistema (ex.: "registro", "matriz") fica em `documentacao/produto/requisitos.html`. A tela
usa o termo de negócio equivalente, ver `documentacao/design-system/escrita-de-interface.html`.

| Termo | Significado no domínio | Não confundir com |
|---|---|---|
| **Atividade complementar** | Curso, palestra, monitoria, evento etc. que conta horas para o aluno se formar. | "Atividade" genérica de sistema (log, ação do usuário). |
| **Comprovante** | Certificado ou documento que prova que a atividade aconteceu. | "Anexo", termo de sistema. A tela diz "comprovante". |
| **Categoria** | Cada linha da tabela de atividades do curso, com regra de conversão e limite de horas próprios. Em Engenharia de Computação é o item numerado do formulário de solicitação (24 itens). O número do item aparece nos comprovantes. | "Tag" ou "tipo". Categoria tem limite de horas associado, tag não. Também não é um agrupamento maior (Ensino, Pesquisa, Extensão), que o curso-piloto não usa. |
| **Fator de conversão** | Regra que transforma horas do certificado em horas computadas (ex.: em Engenharia de Computação, curso de 8h na área do curso → 2h computadas). Base do RF32. | "Desconto". Não é penalidade, é regra de equivalência. |
| **Limite por categoria** | Teto de horas que uma categoria aceita, mesmo que o aluno tenha mais comprovantes daquele tipo. | "Meta". Meta é o total do curso; limite é por categoria. |
| **Carga horária mínima** | Total de horas complementares exigido para o aluno se formar, definido por curso. | — |
| **Curso-piloto** | Curso usado para validar a primeira implementação das regras de cálculo (Engenharia de Computação, depois Licenciatura em Teatro). | — |
| **Matriz** (de aproveitamento) | Conjunto de regras de conversão e limites por curso. Termo técnico do RF15/RNF21. Nunca aparece na tela do aluno. | "Grade curricular", que é outra coisa (disciplinas por período), fora do MVP. |
| **PPC** | Projeto Pedagógico de Curso, documento institucional do curso. Em Engenharia de Computação só fixa o total de horas complementares (120 HA) e lista os tipos de atividade. Falta obter o de Licenciatura em Teatro (ver `TODO/pendencias.md`). | "Formulário de solicitação", que é onde as regras de conversão e limite aparecem. |
| **Formulário de solicitação** | Documento da coordenação que o aluno preenche no protocolo de atividades complementares. Traz a conversão e o limite de cada item. Em Engenharia de Computação, matriz 6759. | "PPC". |
| **Hora-aula (HA)** | Unidade em que o PPC de Engenharia de Computação expressa as 120h de atividades complementares. As horas do formulário são tratadas como a mesma unidade. | Hora-relógio. |
| **Deferimento / indeferimento** | Decisão da coordenação aceitando ou recusando uma atividade. Hoje acontece fora do SAACI (MVP é só do aluno). | — |
| **Coordenação** | Papel institucional que hoje valida atividades fora do sistema. Não é usuário do SAACI no MVP, ver `documentacao/produto/backlog-roadmap.html`, seção 5. | — |
| **Integralização** | Ato de o aluno completar oficialmente a carga horária exigida no histórico escolar. Acontece fora do SAACI. | — |
| **Campus** | Unidade física do IFCE (ex.: Fortaleza, Boa Viagem). Perfil do aluno registra o curso, não necessariamente o campus separadamente, ver RF09. | — |

Termo novo do domínio que aparecer em uma tarefa ou fluxo entra aqui antes de a skill
`saaci-copy` revisar textos que o usem.
