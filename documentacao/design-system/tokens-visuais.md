# SAACI — Tokens Visuais

> [SAACI](../../index.html) › [Documentação](../README.md) › Design System
> **Rascunho: vira `.html` quando você validar via `/saaci-revisar`.**
> Última atualização: 21/09/2026

Cor, tipografia e espaçamento.

**Fonte de verdade para:** paleta e escala visual do produto. Princípio de uso (quando usar
cada cor) está em `principios-ui.html`. Aplicado em `shared/base.css`, a folha de estilo
compartilhada por todo documento fechado deste repositório.

## 1. Cor

### 1.1 Verde e vermelho institucionais: fonte oficial, não proposta

Ao contrário da versão anterior deste documento (que usava uma paleta totalmente inventada),
verde e vermelho abaixo vêm do **Manual de Uso da Marca dos Institutos Federais** (Portaria
SETEC nº 31/2015, MEC. [redefederal.mec.gov.br/images/pdf/manual.pdf](https://redefederal.mec.gov.br/images/pdf/manual.pdf)),
que padroniza a identidade visual de toda a Rede Federal, incluindo o IFCE.

| Cor | RGB | Hex | CMYK | Pantone |
|---|---|---|---|---|
| Verde institucional | R50 G160 B65 | `#2f9e41` | C75 M0 Y100 K15 | 362 C |
| Vermelho (secundária) | R200 G25 B30 | `#cd191e` | C0 M100 Y100 K15 | 187 C |
| Preto | R0 G0 B0 | `#000000` | C0 M0 Y0 K100 | Process Black C |

> **Nota de transparência:** o próprio manual declara RGB(50,160,65) e hex `#2f9e41` lado a
> lado, mas RGB(50,160,65) converte matematicamente para `#32a041`, não `#2f9e41`. É uma
> pequena inconsistência do documento-fonte oficial, comum em manuais reais, provavelmente por
> conversão Pantone→RGB e Pantone→Hex feitas com ferramentas diferentes. Uso `#2f9e41` por ser
> o valor hexadecimal declarado diretamente, mas o registro da divergência fica aqui.

**Verde como texto precisa de variante mais escura.** `#2f9e41` como cor de texto sobre fundo
claro fica em 3,0 a 3,4:1 de contraste, abaixo do mínimo WCAG AA (4,5:1) para texto normal, e
raspando o mínimo (3:1) mesmo nos poucos casos de texto grande em negrito. Por isso
`shared/base.css` define `--accent-text: #217530` (mesmo matiz, mais escuro) para todo uso de
texto, mantendo `--accent: #2f9e41` fiel ao manual para preenchimento e borda. Verificado com
cálculo de luminância relativa (fórmula WCAG), não visualmente.

### 1.2 Azul, âmbar e roxo: proposta própria, não oficial

O manual da Rede Federal define identidade de marca, não uma paleta semântica de UI (estado de
MVP, alerta, novidade). Estas três continuam sendo escolha minha, ainda a validar:

| Token | Uso proposto | Hex |
|---|---|---|
| `--info` | MVP, ação primária, prioridade alta | `#1f5c8a` |
| `--warn` | Opcional, pendente, atenção | `#8a5a00` |
| `--purple` | Requisito/decisão novo no bootstrap | `#7a2d8a` |

**Alternativa descartada:** restringir toda a paleta só ao verde/vermelho/preto oficiais, sem
cores semânticas próprias. Resolveria a dúvida de "isso é oficial ou não", mas um badge de
"Opcional" em vermelho (cor reservada a erro/conflito no nosso próprio sistema) confundiria
severidade com status. É problema pior do que ter cores não oficiais bem documentadas.

## 2. Tipografia

Proposta: fonte de sistema (`-apple-system, "Segoe UI", Roboto, sans-serif`), sem fonte
customizada carregada por rede. Prioriza RNF14 (carregamento em até 3s) e RNF17
(compatibilidade entre navegadores) sobre identidade tipográfica exclusiva.

| Uso | Tamanho | Peso |
|---|---|---|
| Título de tela | 1.5–1.9rem | 700 |
| Corpo | 1rem | 400 |
| Texto de apoio / legenda | 0.85rem | 400 |
| Número em destaque (ex.: horas cumpridas) | 1.6–2rem | 700 |

## 3. Espaçamento

Proposta: escala de 4px (4, 8, 12, 16, 24, 32, 48), suficiente para telas de formulário e
painel sem exigir grid complexo. Densidade é eixo de tweak em `saaci-prompt-tela`, não fixa
aqui.

## 4. Raio e elevação

Proposta: raio de 8px em cartões e campos, 4px em badges/tags. Sombra leve só em elementos
sobrepostos (modal, dropdown). Painel de progresso e formulário usam borda, não sombra, para
manter leitura limpa em mobile.

---

Arquivo inteiro marcado como rascunho até validação explícita, inclusive a seção 1.1, que
mesmo tendo fonte oficial para a cor em si, ainda depende da sua confirmação sobre a aplicação
dela neste sistema de tokens. Corte é por arquivo inteiro (decisão do usuário no bootstrap),
não por seção. Não referenciar nada daqui como fato em prompt de tela antes de
`/saaci-revisar documentacao/design-system/tokens-visuais.md` promover o arquivo a `.html`.
