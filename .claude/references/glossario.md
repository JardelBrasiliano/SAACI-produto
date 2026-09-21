# Glossário: vocabulário do domínio SAACI

Termos que apareceram no material original do `drive/` (já descartado) e que a skill
`saaci-copy` usa para não confundir vocabulário de sistema com vocabulário do negócio. Termo
de sistema (ex.: "registro", "matriz") fica em `documentacao/produto/requisitos.html`. A tela
usa o termo de negócio equivalente, ver `documentacao/design-system/escrita-de-interface.html`.

| Termo | Significado no domínio | Não confundir com |
|---|---|---|
| **Atividade complementar** | Curso, palestra, monitoria, evento etc. que conta horas para o aluno se formar. | "Atividade" genérica de sistema (log, ação do usuário). |
| **Comprovante** | Certificado ou documento que prova que a atividade aconteceu. | "Anexo", termo de sistema. A tela diz "comprovante". |
| **Categoria** | Agrupamento de atividades para fins de limite (ex.: Ensino, Pesquisa, Extensão). | "Tag" ou "tipo". Categoria tem limite de horas associado, tag não. |
| **Fator de conversão** | Regra que transforma horas do certificado em horas computadas (ex.: 5h de palestra → 1h computada). Base do RF32. | "Desconto". Não é penalidade, é regra de equivalência. |
| **Limite por categoria** | Teto de horas que uma categoria aceita, mesmo que o aluno tenha mais comprovantes daquele tipo. | "Meta". Meta é o total do curso; limite é por categoria. |
| **Carga horária mínima** | Total de horas complementares exigido para o aluno se formar, definido por curso. | — |
| **Curso-piloto** | Curso usado para validar a primeira implementação das regras de cálculo (Engenharia de Computação, depois Licenciatura em Teatro). | — |
| **Matriz** (de aproveitamento) | Conjunto de regras de conversão e limites por curso. Termo técnico do RF15/RNF21. Nunca aparece na tela do aluno. | "Grade curricular", que é outra coisa (disciplinas por período), fora do MVP. |
| **PPC** | Projeto Pedagógico de Curso, documento institucional que define as regras oficiais de atividades complementares por curso. Fonte que falta obter (ver `TODO/pendencias.md`). | — |
| **Deferimento / indeferimento** | Decisão da coordenação aceitando ou recusando uma atividade. Hoje acontece fora do SAACI (MVP é só do aluno). | — |
| **Coordenação** | Papel institucional que hoje valida atividades fora do sistema. Não é usuário do SAACI no MVP, ver `documentacao/produto/backlog-roadmap.html`, seção 5. | — |
| **Integralização** | Ato de o aluno completar oficialmente a carga horária exigida no histórico escolar. Acontece fora do SAACI. | — |
| **Campus** | Unidade física do IFCE (ex.: Fortaleza, Boa Viagem). Perfil do aluno registra o curso, não necessariamente o campus separadamente, ver RF09. | — |

Termo novo do domínio que aparecer em uma tarefa ou fluxo entra aqui antes de a skill
`saaci-copy` revisar textos que o usem.
