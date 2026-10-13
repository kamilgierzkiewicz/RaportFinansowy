/* Raport Finansowy — service worker: network-first, offline z cache */
const CACHE = 'raportfinansowy-1.0.1';
const ASSETS = ['./RaportFinansowy.html', './manifest.json', './RaportFinansowy-192.png', './RaportFinansowy-512.png', './RaportFinansowy-apple-touch.png', './RaportFinansowy-apple-touch-dark.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return; // GitHub/Anthropic API bez cache
  e.respondWith(
    fetch(r).then(res => { const c = res.clone(); caches.open(CACHE).then(ca => ca.put(r, c)); return res; })
      .catch(() => caches.match(r).then(m => m || caches.match('./RaportFinansowy.html')))
  );
});
