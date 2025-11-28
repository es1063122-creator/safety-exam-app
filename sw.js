self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("safety-exam-cache").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "exams.js",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
