(function () {
  'use strict';
  const VERSION = '1.1.0';
  const QUIZ_SIZE = 10;
  const KEY = 'exame.v1';
  const BANK = window.BANK || [];
  const byId = Object.fromEntries(BANK.map(q => [q.id, q]));
  const LABEL = { hipoteses: 'Hipóteses', tratamento: 'Tratamento', farmacologia: 'Farmacologia', dominios: 'Critérios' };

  // estado persistente: seen (nº de vezes vista), last (ok|ko), wrong (histórico de erradas), flags (sinalizações)
  // history: um registo por quiz terminado { at, score, total }
  const fresh = () => ({ seen: {}, last: {}, wrong: {}, flags: {}, history: [], histMode: 'acc', keys: {} });
  let S = load();
  function load() {
    try { return Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY)) || {}); }
    catch (e) { return fresh(); }
  }
  function save() { localStorage.setItem(KEY, JSON.stringify(S)); }

  // Se a resposta certa de uma pergunta mudar (correção do banco), o histórico dessa pergunta é reposto
  // e a sinalização cai, para não contar como certa ou errada uma pergunta que já não é a mesma.
  const sig = q => { let x = 5381; for (const c of q.options[q.correct]) x = ((x << 5) + x + c.charCodeAt(0)) | 0; return String(x); };
  function reconcile() {
    let n = 0;
    for (const q of BANK) {
      const k = sig(q), old = S.keys[q.id];
      if (old !== undefined && old !== k) { delete S.seen[q.id]; delete S.last[q.id]; delete S.wrong[q.id]; delete S.flags[q.id]; n++; }
      S.keys[q.id] = k;
    }
    save();
    return n;
  }

  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === 'class') el.className = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) el.setAttribute(k, v);
    }
    for (const kid of kids.flat()) if (kid != null && kid !== false) el.append(kid.nodeType ? kid : document.createTextNode(kid));
    return el;
  }
  function toast(msg, ms) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(() => { t.hidden = true; }, ms || 2600);
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function download(name, data) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    const a = h('a', { href: url, download: name });
    document.body.append(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  }

  // seleção: não vistas, depois erradas da última vez, depois o resto; sinalizadas não saem
  function pick(n) {
    const tier = q => !S.seen[q.id] ? 0 : S.last[q.id] === 'ko' ? 1 : 2;
    return shuffle(BANK.filter(q => !S.flags[q.id])).sort((a, b) => tier(a) - tier(b)).slice(0, n);
  }

  function put(el, ...kids) { el.replaceChildren(...kids.flat().filter(k => k != null && k !== false)); }

  // ---------- gráfico de linha (SVG) ----------
  const NS = 'http://www.w3.org/2000/svg';
  function sv(tag, attrs, ...kids) {
    const el = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs || {})) el.setAttribute(k, v);
    for (const kid of kids) if (kid != null) el.append(kid.nodeType ? kid : document.createTextNode(kid));
    return el;
  }
  // linhas suaves como no resumo da manhã: traço de 2px, pontos cheios, sem eixos nem grelha.
  // series: [{ color, extend, pts: [{ x: 0..1, y: 0..100, muted?, tip }] }]
  const INK = '#2E2C27', FAINT = '#B4B3A8', CLAY = '#C6613F', SAGE = '#5E7F5A';
  // curva com tangente horizontal em cada ponto (sem laços, sempre da esquerda para a direita), como o resumo da manhã
  function smooth(P) {
    let d = 'M ' + P[0][0].toFixed(1) + ' ' + P[0][1].toFixed(1);
    for (let i = 0; i < P.length - 1; i++) {
      const [x1, y1] = P[i], [x2, y2] = P[i + 1], m = (x1 + x2) / 2;
      d += ' C ' + [m, y1, m, y2, x2, y2].map(n => n.toFixed(1)).join(' ');
    }
    return d;
  }
  function chart(series, o) {
    const W = 640, H = o.height || 110, PX = 14, PT = 12, PB = 12;
    const X = x => PX + x * (W - 2 * PX), Y = y => PT + (1 - y / 100) * (H - PT - PB);
    const svg = sv('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'chart', role: 'img', 'aria-label': o.label });
    for (const se of series) {
      if (!se.pts.length) continue;
      const P = se.pts.map(p => [X(p.x), Y(p.y)]);
      // pad: a curva começa no primeiro ponto e segue na horizontal até hoje
      const Q = o.pad && P[P.length - 1][0] < X(1) ? [...P, [X(1), P[P.length - 1][1]]] : P;
      if (Q.length > 1) svg.append(sv('path', { d: smooth(Q), fill: 'none', stroke: se.color, 'stroke-width': o.sw || 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }));
      se.pts.forEach((p, k) => {
        const dot = sv('circle', { cx: P[k][0], cy: P[k][1], r: p.r || o.r || 5, fill: p.muted ? FAINT : se.color });
        if (!o.tips) return svg.append(dot);
        svg.append(sv('g', { class: 'pt' }, dot, sv('circle', { cx: P[k][0], cy: P[k][1], r: 12, fill: 'transparent' }, sv('title', {}, p.tip || ''))));
      });
    }
    return svg;
  }
  const pct = (n, t) => Math.round((n / t) * 100);
  const fmtDate = iso => new Date(iso).toLocaleDateString('pt-PT', { day: 'numeric', month: 'short' });
  const THEME_COLOR = { hipoteses: INK, tratamento: CLAY, farmacologia: SAGE, dominios: '#8A6D1E' };
  const GRADES = [[90, 'Excelente'], [70, 'Satisfaz bastante'], [50, 'Satisfaz'], [30, 'Fraco'], [0, 'Muito fraco']];
  const grade = p => GRADES.find(([min]) => p >= min)[1];

  // evolução dos quizzes por tema, do primeiro quiz até hoje; o detalhe vê-se ao passar o rato por um ponto
  function historyChart() {
    const hs = S.history.filter(q => q.themes);
    const perQuiz = S.histMode === 'quiz';
    const head = hs.length
      ? h('button', { class: 'section-heading toggle', title: 'Clica para alternar entre acumulado e por quiz', onclick: () => { S.histMode = perQuiz ? 'acc' : 'quiz'; save(); home(); } },
        'Evolução por tema', h('span', {}, ' · ' + (perQuiz ? 'por quiz' : 'acumulado')))
      : h('div', { class: 'section-heading' }, 'Evolução por tema');
    if (!hs.length) return h('div', {}, head, h('p', { class: 'sub' }, 'A linha aparece depois de terminares o primeiro quiz (a última pergunta respondida). Os quizzes anteriores a esta funcionalidade não ficaram registados.'));
    // x por ordem dos quizzes (vários no mesmo dia ficam espaçados); o resto da linha segue na horizontal até hoje
    const xOf = q => hs.length === 1 ? 0 : hs.indexOf(q) / (hs.length - 1) * 0.92;
    // linha de cada tema: % de certas acumulada (oscila menos) ou a de cada quiz, do primeiro quiz até hoje
    const info = {};
    const series = Object.keys(LABEL).map(cat => {
      let ok = 0, n = 0;
      const pts = hs.filter(q => q.themes[cat]).map(q => {
        ok += q.themes[cat].score; n += q.themes[cat].total;
        return { x: xOf(q), y: perQuiz ? pct(q.themes[cat].score, q.themes[cat].total) : pct(ok, n), r: 2.5 + Math.min(q.themes[cat].total, 5) * 0.4 };
      });
      info[cat] = { ok, n };
      return { color: THEME_COLOR[cat], pts };
    }).filter(se => se.pts.length);
    const legend = h('div', { class: 'legend' }, Object.keys(LABEL).map(cat => h('div', {},
      h('div', { class: 'lg-name' }, h('i', { style: 'background:' + THEME_COLOR[cat] }), LABEL[cat]),
      h('div', { class: 'lg-sub' }, info[cat].n ? pct(info[cat].ok, info[cat].n) + '% de certas em ' + info[cat].n + ' perguntas' : 'sem perguntas ainda'))));
    return h('div', {}, head, chart(series, { height: 120, pad: true, label: 'Percentagem ' + (perQuiz ? 'de respostas certas por tema em cada quiz' : 'acumulada de respostas certas por tema') + ', de ' + fmtDate(hs[0].at) + ' até hoje' }), legend,
      h('div', { class: 'sub', style: 'margin-top:12px' }, 'Desde ' + fmtDate(hs[0].at) + ': ' + hs.length + (hs.length === 1 ? ' quiz' : ' quizzes') + '. A linha mostra a percentagem de certas ' + (perQuiz ? 'de cada quiz.' : 'acumulada.')));
  }

  // evolução dentro do quiz: um ponto por pergunta, já presentes (pálidos, a meio); ao responder, o ponto sobe
  // ou desce até à percentagem de certas acumulada
  function makeLive(n) {
    const W = 640, H = 90, PX = 14, PT = 14, PB = 14, MID = 50;
    const X = i => PX + (n === 1 ? 1 : i / (n - 1)) * (W - 2 * PX), Y = y => PT + (1 - y / 100) * (H - PT - PB);
    const svg = sv('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'chart', role: 'img', 'aria-label': 'Percentagem de certas ao longo do quiz' });
    const path = sv('path', { fill: 'none', stroke: INK, 'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    svg.append(path);
    const ys = Array(n).fill(null), dots = [], titles = [];
    for (let i = 0; i < n; i++) {
      const title = sv('title', {}, 'Pergunta ' + (i + 1));
      const c = sv('circle', { cx: X(i), cy: Y(MID), r: 3, fill: FAINT, 'fill-opacity': .5 }, title);
      svg.append(c); dots.push(c); titles.push(title);
    }
    const draw = () => {
      const P = []; ys.forEach((y, i) => { if (y !== null) { P.push([X(i), Y(y)]); dots[i].setAttribute('cy', Y(y)); } });
      path.setAttribute('d', P.length > 1 ? smooth(P) : '');
    };
    function reveal(i, target, ok, tip) {
      dots[i].setAttribute('r', 5.5); dots[i].setAttribute('fill', ok ? INK : FAINT); dots[i].setAttribute('fill-opacity', 1);
      titles[i].textContent = tip;
      const t0 = performance.now(), D = 500;
      const step = now => {
        const k = Math.min((now - t0) / D, 1), e = 1 - Math.pow(1 - k, 3);
        ys[i] = MID + (target - MID) * e; draw();
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    return { el: h('div', { class: 'live' }, svg), reveal };
  }

  let run = null; // { items: [{q, order, picked}], i }
  const screen = document.getElementById('screen');
  const hero = document.getElementById('hero');

  function setHero(title, sub, pct, mode) {
    document.body.dataset.screen = mode || 'home';
    put(hero, 
      h('div', { class: 'headline' }, title),
      sub ? h('div', { class: 'sub' }, sub) : null,
      pct != null ? h('div', { class: 'progress-bar' }, h('span', { style: 'width:' + pct + '%' })) : null);
  }

  // ---------- início ----------
  function home() {
    run = null;
    const available = BANK.filter(q => !S.flags[q.id]).length;
    const seen = BANK.filter(q => S.seen[q.id]).length;
    const wrongN = Object.keys(S.wrong).filter(id => byId[id]).length;
    const flagN = Object.keys(S.flags).length;
    setHero('Estudar para o exame', 'Quiz misto de ' + QUIZ_SIZE + ' perguntas, sem cronómetro. Banco de ' + (window.BANK_DATE || 'data desconhecida') + '.');
    put(screen, 
      h('div', { class: 'stats' },
        stat(available, 'perguntas no banco'), stat(seen, 'já vistas'), stat(wrongN, 'no histórico de erradas'), stat(flagN, 'sinalizadas')),
      historyChart(),
      h('div', { class: 'bar dock' },
        h('button', { class: 'primary', disabled: available === 0, onclick: start }, 'Começar quiz')),
      h('div', { class: 'bar bar-tight' },
        h('span', { class: 'spacer' }),
        h('button', { class: 'ghost', onclick: exportWrong }, 'Exportar erradas'),
        h('button', { class: 'ghost', onclick: exportFlags }, 'Exportar sinalizadas')),
      h('div', { class: 'bar' },
        h('button', { class: 'ghost', onclick: exportProgress }, 'Guardar progresso (ficheiro)'),
        h('button', { class: 'ghost', onclick: () => importInput.click() }, 'Carregar progresso'),
        h('span', { class: 'spacer' }),
        h('button', { class: 'ghost', onclick: reset }, 'Apagar progresso')),
      available === 0 ? h('p', { class: 'empty' }, 'O banco de perguntas está vazio. Corre scripts/build-bank.js.') : null,
      h('p', { class: 'sub', style: 'margin-top:28px' },
        'Material de estudo gerado a partir de conteúdo ainda em rascunho. Em cada pergunta vês a fonte; se algo parecer errado, sinaliza. Os critérios dos domínios e das hipóteses diagnósticas foram revistos contra o DSM-5-TR e a CID-11; quando as duas classificações diferem, a pergunta diz qual segue.'),
      h('p', { class: 'sub', style: 'margin-top:10px' },
        'Não substitui o julgamento clínico nem serve para prescrever: as doses são as das fontes citadas e podem estar desatualizadas. O progresso fica só neste browser; guarda-o num ficheiro para não o perder.'),
      h('p', { class: 'sub', style: 'margin-top:10px;color:var(--faint)' }, 'v' + VERSION));
  }
  function stat(n, label) { return h('div', { class: 'stat' }, h('b', {}, String(n)), h('span', {}, label)); }

  function reset() {
    if (!confirm('Apagar todo o progresso, o histórico de erradas e as sinalizações deste browser?')) return;
    S = fresh(); save(); home(); toast('Progresso apagado');
  }

  // ---------- quiz ----------
  function start() {
    const qs = pick(QUIZ_SIZE);
    if (!qs.length) return;
    run = { i: 0, live: makeLive(qs.length), items: qs.map(q => ({ q, order: shuffle([0, 1, 2, 3]), picked: null })) };
    question();
  }

  function question() {
    const it = run.items[run.i], q = it.q;
    const answered = it.picked !== null;
    setHero(LABEL[q.category], 'Pergunta ' + (run.i + 1) + ' de ' + run.items.length, pct(run.i + (answered ? 1 : 0), run.items.length), 'question');
    const opts = it.order.map((orig, pos) => {
      const isRight = orig === q.correct;
      const cls = !answered ? '' : isRight ? ' right' : pos === it.picked ? ' wrong' : ' faded';
      return h('button', { class: 'opt' + cls, disabled: answered, onclick: () => answer(pos) },
        h('span', { class: 'letter' }, 'ABCD'[pos]), h('span', {}, q.options[orig]));
    });
    const parts = [
      run.live.el,
      h('div', { class: 'qhead' }, h('span', { class: 'tag' }, q.type === 'caso' ? 'Caso clínico' : 'Memória'), h('div', { class: 'qtext' }, q.text)),
      h('div', { class: 'opts' }, opts)];
    if (answered) {
      const ok = it.order[it.picked] === q.correct, last = run.i === run.items.length - 1;
      parts.push(h('div', { class: 'feedback' },
        h('div', { class: 'verdict ' + (ok ? 'ok' : 'ko') }, ok ? 'Certo' : 'Errado — a certa é a ' + 'ABCD'[it.order.indexOf(q.correct)]),
        h('div', {}, q.explanation),
        h('div', { class: 'source' }, 'Fonte: ' + q.source),
        flagControl(q)),
        h('div', { class: 'bar dock' }, h('span', { class: 'spacer' }),
          h('button', { class: 'primary', onclick: () => { if (last) review(); else { run.i++; question(); } } }, last ? 'Ver revisão final' : 'Seguinte')));
    } else {
      parts.push(h('div', { class: 'bar dock dock-wait' }, h('span', { class: 'spacer' }), h('button', { class: 'primary', disabled: true }, 'Escolhe uma resposta')));
    }
    put(screen, ...parts);
  }

  function answer(pos) {
    const it = run.items[run.i], q = it.q;
    it.picked = pos;
    const ok = it.order[pos] === q.correct;
    S.seen[q.id] = (S.seen[q.id] || 0) + 1;
    S.last[q.id] = ok ? 'ok' : 'ko';
    if (!ok) {
      const w = S.wrong[q.id] || { count: 0 };
      S.wrong[q.id] = { count: w.count + 1, lastAt: new Date().toISOString(), lastAnswer: q.options[it.order[pos]] };
    }
    const done = run.items.filter(x => x.picked !== null), right = done.filter(x => x.order[x.picked] === x.q.correct).length;
    run.live.reveal(run.i, pct(right, done.length), ok, 'Pergunta ' + (run.i + 1) + ': ' + (ok ? 'certa' : 'errada') + ' · ' + right + ' de ' + done.length + ' certas');
    if (run.i === run.items.length - 1) {
      const score = run.items.filter(x => x.order[x.picked] === x.q.correct).length;
      const themes = {};
      for (const x of run.items) {
        const t = themes[x.q.category] || (themes[x.q.category] = { score: 0, total: 0 });
        t.total++; if (x.order[x.picked] === x.q.correct) t.score++;
      }
      S.history.push({ at: new Date().toISOString(), score, total: run.items.length, themes });
    }
    save(); question();
  }

  // ---------- sinalização "isto parece errado" ----------
  function flagControl(q) {
    const wrap = h('div', { class: 'flagbox' });
    const draw = () => {
      if (S.flags[q.id]) {
        put(wrap, h('div', { class: 'flagged-note' }, 'Sinalizada como errada' + (S.flags[q.id].note ? ': ' + S.flags[q.id].note : '') + '. Deixa de sair nos quizzes.'),
          h('button', { class: 'ghost', onclick: () => { delete S.flags[q.id]; save(); draw(); } }, 'Remover sinalização'));
        return;
      }
      put(wrap, h('button', { class: 'ghost', onclick: () => {
        const note = h('textarea', { placeholder: 'O que parece errado? (opcional)' });
        put(wrap, note, h('div', { class: 'bar' },
          h('button', { class: 'primary', onclick: () => { S.flags[q.id] = { note: note.value.trim(), at: new Date().toISOString() }; save(); draw(); toast('Sinalizada'); } }, 'Sinalizar'),
          h('button', { class: 'ghost', onclick: draw }, 'Cancelar')));
        note.focus();
      } }, 'Isto parece errado'));
    };
    draw();
    return wrap;
  }

  // ---------- revisão final: erradas abertas, depois certas colapsadas ----------
  function review() {
    const ok = run.items.filter(it => it.order[it.picked] === it.q.correct), ko = run.items.filter(it => !ok.includes(it));
    setHero(grade(pct(ok.length, run.items.length)), ok.length + ' de ' + run.items.length + ' certas', null, 'review');
    const card = (it, right) => {
      const q = it.q;
      const body = [
        h('div', { class: 'qtext' }, q.text),
        right ? null : h('div', { class: 'ans wrong' }, 'A tua resposta: ' + q.options[it.order[it.picked]]),
        h('div', { class: 'ans right' }, 'Resposta certa: ' + q.options[q.correct]),
        h('div', { style: 'margin-top:8px' }, q.explanation),
        h('div', { class: 'source' }, 'Fonte: ' + q.source),
        flagControl(q)];
      const sum = h('summary', {}, h('span', { class: 'tag' }, LABEL[q.category]), q.text.length > 110 ? q.text.slice(0, 110) + '…' : q.text);
      const d = h('details', { class: 'review-item ' + (right ? 'ok' : 'ko') }, sum, body);
      if (!right) d.open = true;
      return d;
    };
    put(screen, run.live.el,
      ko.length ? h('div', { class: 'section-heading' }, 'Erradas (' + ko.length + ')') : h('p', { class: 'empty' }, 'Sem erradas neste quiz.'),
      ko.map(it => card(it, false)),
      ok.length ? h('div', { class: 'section-heading' }, 'Certas (' + ok.length + ')') : null,
      ok.map(it => card(it, true)),
      h('div', { class: 'bar dock' }, h('span', { class: 'spacer' }),
        h('button', { onclick: home }, 'Início'), h('button', { class: 'primary', onclick: start }, 'Novo quiz')));
  }

  // ---------- exportações ----------
  const importInput = h('input', { type: 'file', accept: 'application/json', hidden: true });
  importInput.addEventListener('change', async () => {
    const f = importInput.files[0]; importInput.value = '';
    if (!f) return;
    try {
      const d = JSON.parse(await f.text()).data;
      if (!d || typeof d.seen !== 'object' || typeof d.wrong !== 'object' || !Array.isArray(d.history)) throw new Error('formato');
      if (!confirm('Substituir o progresso deste browser pelo do ficheiro?')) return;
      S = Object.assign(fresh(), d); S.keys = S.keys || {};
      const n = reconcile(); home();
      toast('Progresso carregado' + (n ? '; ' + n + ' perguntas corrigidas tiveram o histórico reposto' : ''), 5000);
    } catch (e) { toast('Ficheiro inválido: não é um progresso guardado por esta página', 5000); }
  });
  document.body.append(importInput);
  function exportProgress() {
    download('progresso-exame-' + new Date().toISOString().slice(0, 10) + '.json', { app: 'exame-pedopsiquiatria', versao: VERSION, guardado_em: new Date().toISOString(), data: S });
  }
  function exportWrong() {
    const rows = Object.entries(S.wrong).filter(([id]) => byId[id]).map(([id, w]) => {
      const q = byId[id];
      return { id, categoria: q.category, enunciado: q.text, opcoes: q.options, a_tua_ultima_resposta: w.lastAnswer, resposta_certa: q.options[q.correct],
        explicacao: q.explanation, fonte: q.source, vezes_errada: w.count, ultima_vez: w.lastAt, ultimo_resultado: S.last[id] === 'ok' ? 'certa' : 'errada' };
    });
    if (!rows.length) return toast('Ainda não há erradas');
    download('erradas-' + new Date().toISOString().slice(0, 10) + '.json', rows);
  }
  function exportFlags() {
    const rows = Object.entries(S.flags).map(([id, f]) => {
      const q = byId[id] || {};
      return { id, nota: f.note, sinalizada_em: f.at, enunciado: q.text, opcoes: q.options, resposta_certa: q.options && q.options[q.correct], explicacao: q.explanation, fonte: q.source };
    });
    if (!rows.length) return toast('Ainda não há sinalizadas');
    download('sinalizadas-' + new Date().toISOString().slice(0, 10) + '.json', rows);
  }

  const reset_n = reconcile();
  home();
  if (reset_n) toast(reset_n + ' perguntas foram corrigidas e o seu histórico foi reposto', 6000);
  window.addEventListener('app-update', () => toast('Há uma versão nova. Recarrega a página para a usar.', 8000));
})();
