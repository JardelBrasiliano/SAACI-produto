# Formato de relatório: `/saaci-consistencia` e `/saaci-revisar`

Estrutura comum para os dois commands de auditoria deste repositório. Relatório é sempre
somente leitura. Nenhum dos dois corrige nada sozinho.

## Estrutura

```markdown
# Relatório: <nome do command>, <data>

## Escopo

O que foi varrido ou qual arquivo foi revisado.

## Crítico

Item que bloqueia: contradição direta entre fontes de verdade, requisito órfão, decisão
revertida sem registro. Cada item traz:

- **Onde:** arquivo(s) e trecho
- **O quê:** a inconsistência ou falha, em uma frase
- **Por quê importa:** consequência de deixar como está

## Importante

Item que não bloqueia mas degrada a confiabilidade do documento como fonte de verdade.
Ambiguidade, informação desatualizada, lacuna não registrada como pendência.

## Sugestão

Melhoria de clareza, estrutura ou redação. Não é erro, é oportunidade.

## Veredicto final

Uma frase: documento pronto para ser fonte de verdade, ou não, e o que falta para ficar.
```

## Regras

- Seção sem item não aparece no relatório. Não escrever "nenhum item encontrado"
  repetidamente, só omitir a seção.
- Severidade é sobre **impacto de ficar errado**, não sobre volume de texto a mudar.
- Toda contradição entre arquivos cita os dois lados. Nunca assume qual está certo.
- `/saaci-consistencia` varre `documentacao/produto/`, `documentacao/marca/`,
  `documentacao/design-system/`, `documentacao/fluxos/` e `documentacao/roadmap/`.
  `/saaci-revisar` foca em um arquivo só, mas cita outro arquivo quando a
  contradição é entre eles.
