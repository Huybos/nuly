
const CACHE_NAME = 'nuly-calc-v5-2';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./service-worker.js','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); });
self.addEventListener('fetch', e => { const u=new URL(e.request.url); if(u.origin===location.origin){ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); } });
