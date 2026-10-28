const C = "jarvis-v1";
const FILES = ["./", "./index.html", "./manifest.json", "./icon-192.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(clients.claim()); });
self.addEventListener("fetch", e => {
  if(e.request.url.includes("googleapis.com")) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
