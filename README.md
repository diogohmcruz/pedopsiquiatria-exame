# Estudo para o exame de pedopsiquiatria

Site estático em `docs/` (publicado na GitHub Page). Abre `docs/index.html` no browser; o progresso fica no `localStorage`.

Ver `CONTEXT.md` para o vocabulário.

## Fluxo de dados

1. `data/*.js`: cópia dos dados da app de consulta (ver `data/VERSAO.md`).
2. `node scripts/extract-source.js`: extrai os itens com fonte para `source/*.json`.
3. `questions/*.json`: perguntas geradas a partir de `source/`. Uma pergunta com `"flagged": true` é retirada do banco.
4. `node scripts/build-bank.js`: valida e junta tudo em `docs/bank.js`, que o site lê.

## Corrigir perguntas sinalizadas

No site, "Exportar sinalizadas" dá um JSON com o id e a nota de cada uma. Corrige a pergunta em `questions/` mantendo o id (se a resposta certa mudar, o histórico dessa pergunta deve ser reposto) e volta a correr `build-bank.js`.

## Lacunas

- DSM-5-TR por analisar: os critérios seguem a CID-11 e as guidelines citadas.
- Todo o conteúdo de origem é rascunho não validado.
