# Estudo para o exame de pedopsiquiatria

Site estático em `docs/` (publicado na GitHub Page). Abre `docs/index.html` no browser; o progresso fica no `localStorage`.

Ver `CONTEXT.md` para o vocabulário e `CHANGELOG.md` para as versões.

Para publicar uma versão nova: corre `node scripts/build-bank.js`, muda `VERSION` em `docs/app.js` e `CACHE` em `docs/sw.js` (para os dispositivos instalados receberem o aviso de versão nova) e atualiza o `CHANGELOG.md`.

## Fluxo de dados

1. `data/*.js`: cópia dos dados da app de consulta (ver `data/VERSAO.md`).
2. `node scripts/extract-source.js`: extrai os itens com fonte para `source/*.json`.
3. `questions/*.json`: perguntas geradas a partir de `source/`. Uma pergunta com `"flagged": true` é retirada do banco.
4. `node scripts/build-bank.js`: valida e junta tudo em `docs/bank.js`, que o site lê.

## Corrigir perguntas sinalizadas

No site, "Exportar sinalizadas" dá um JSON com o id e a nota de cada uma. Corrige a pergunta em `questions/` mantendo o id (se a resposta certa mudar, o histórico dessa pergunta deve ser reposto) e volta a correr `build-bank.js`.

## Lacunas

- Os critérios dos domínios e das hipóteses diagnósticas já foram revistos contra o DSM-5-TR e a CID-11.
- Todo o conteúdo de origem é rascunho não validado.
