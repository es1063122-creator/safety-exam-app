self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("safety-exam-cache-v2").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "exams-industrial.js",
        "exams-construction.js",
        "manifest.json"
      ]);
    })
  );
});

// 활성화 시 이전 캐시 제거 (캐시 꼬임 방지)
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== "safety-exam-cache-v2") {
            return caches.delete(key);
          }
        })
      );
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
