// Service worker: guarda o site no dispositivo para funcionar offline.
// Estratégia: devolve logo o que está em cache e atualiza em segundo plano (a versão nova aparece na visita seguinte).
const CACHE = 'exame-v1.1.0'; // mudar a cada versão: o service worker novo avisa a página
const SHELL = ['./', 'index.html', 'styles.css', 'app.js', 'bank.js', 'manifest.webmanifest',
  'fonts/fraunces-latin-600-normal.woff2', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(req, { ignoreSearch: true });
    const fresh = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => cached);
    return cached || fresh;
  }));
});
