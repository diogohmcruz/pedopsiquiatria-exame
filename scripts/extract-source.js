// Extrai dos ficheiros de dados copiados os itens elegíveis (com fonte citada) para source/*.json.
// Uso: node scripts/extract-source.js
const fs = require('fs'), path = require('path');
global.window = {};
const root = path.join(__dirname, '..');
for (const f of ['hypotheses-data.js', 'treatments-data.js', 'pharma-data.js', 'content-domains.js']) require(path.join(root, 'data', f));

const out = (name, rows) => fs.writeFileSync(path.join(root, 'source', name + '.json'), JSON.stringify(rows, null, 1));

out('hipoteses', window.HYPOTHESES.filter(h => h.source).map(h => ({
  id: h.id, name: h.name, icd11: h.icd11, criterios: h.confirm, diferencial: h.differential,
  comorbilidades: h.comorbid, sinais_centrais: h.core.map(c => c.why), source: h.source })));

out('tratamentos', window.TREATMENTS.filter(t => t.source).map(t => ({
  id: t.id, hipoteses: t.hypotheses, name: t.name, categoria: t.category, ramos: t.branches, idades: t.ages,
  linha: t.line, resumo: t.summary, quando: t.when, formato: t.format, sessoes: t.sessions && t.sessions.text,
  modulos: (t.modules || []).map(m => m.title + ': ' + m.description), source: t.source })));

const ph = window.PHARMA.filter(p => p.source);
out('farmacologia', ph.map(p => ({
  id: p.id, condicao: p.condition, tipo: p.kind, linha: p.line, ramos: p.branches, farmaco: p.drug,
  texto: p.text, dose: p.dose, regulatorio_pt: p.regulatory_pt, tem_dose: !!p.dose, source: p.source })));

// critérios, diferenciais, comorbilidades e sinais de alerta de cada domínio (sem as perguntas de entrevista)
const KINDS = ['criterio', 'diferencial', 'comorbilidade', 'sinal-de-alerta'];
const dom = [];
for (const [domain, items] of Object.entries(window.CONTENT_DOMAINS)) {
  if (!/^d-/.test(domain)) continue;
  for (const it of items) if (KINDS.includes(it.kind) && it.source) dom.push({ id: it.id, dominio: domain, tipo: it.kind, titulo: it.title, ramos: it.branches, texto: it.text, source: it.source });
}
out('dominios', dom);
console.log('dominios', dom.length, dom.reduce((m, d) => (m[d.dominio] = (m[d.dominio] || 0) + 1, m), {}));
console.log('hipoteses', window.HYPOTHESES.length, 'tratamentos', window.TREATMENTS.length, 'farmacologia', ph.length, '(com dose:', ph.filter(p => p.dose).length + ')');
