// Junta questions/*.json num único bank.js, validando o formato.
// Uso: node scripts/build-bank.js
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const dir = path.join(root, 'questions');
const CATS = ['hipoteses', 'tratamento', 'farmacologia', 'dominios'];

const bank = [], errors = [], ids = new Set();
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()) {
  let rows;
  try { rows = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); }
  catch (e) { errors.push(f + ': JSON inválido (' + e.message + ')'); continue; }
  for (const q of rows) {
    const where = f + ' ' + q.id;
    if (!q.id || ids.has(q.id)) errors.push(where + ': id em falta ou repetido');
    ids.add(q.id);
    if (!CATS.includes(q.category)) errors.push(where + ': categoria inválida');
    if (!['memoria', 'caso'].includes(q.type)) errors.push(where + ': tipo inválido');
    if (!q.text || !q.explanation || !q.source || !q.itemId) errors.push(where + ': campo em falta');
    if (!Array.isArray(q.options) || q.options.length !== 4 || new Set(q.options).size !== 4) errors.push(where + ': precisa de 4 opções distintas');
    if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct > 3) errors.push(where + ': correct inválido');
    if (q.flagged) continue; // pergunta retirada pela verificação
    bank.push(q);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }

const stamp = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(root, 'docs', 'bank.js'),
  '// Gerado por scripts/build-bank.js a partir de questions/*.json. Não editar à mão.\n' +
  'window.BANK_DATE = ' + JSON.stringify(stamp) + ';\nwindow.BANK = ' + JSON.stringify(bank, null, 1) + ';\n');
const by = {}; bank.forEach(q => by[q.category] = (by[q.category] || 0) + 1);
const pos = [0, 0, 0, 0]; bank.forEach(q => pos[q.correct]++);
console.log(bank.length + ' perguntas', by, 'posição da certa', pos);
