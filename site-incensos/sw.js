self.addEventListener('install', (e) => {
  // Ativa o app imediatamente
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Mantém o app funcionando online
  e.respondWith(fetch(e.request));
});
