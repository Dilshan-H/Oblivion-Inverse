// This is based on the First Progressive Web App Tutorial by Google
// https://codelabs.developers.google.com/codelabs/your-first-pwapp/
const cacheName = "oblivion-inverse-cache-v1";
const filesToCache = [
  "/",
  "/static/app.js",
  "/static/styles.css",
  "/static/offline.html",
  "/static/favicon.ico",
  "/static/maskable_icon_192.png",
  "/static/maskable_icon_512.png",
  "/static/OI-pixel.gif",
];

// When the 'install' event is fired we will cache
// the html, javascript, css, images and any other files important
// to the operation of the application shell
self.addEventListener("install", (e) => {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[ServiceWorker] Caching app shell");
      await cache.addAll(filesToCache);
    })()
  );
});

// We then listen for the service worker to be activated/started. Once it is
// ensures that your service worker updates its cache whenever any of the app shell files change.
// In order for this to work, you'd need to increment the cacheName variable at the top of this service worker file.
self.addEventListener("activate", (e) => {
  console.log("[ServiceWorker] Activate");
  e.waitUntil(
    (async () => {
      const cacheKeys = await caches.keys();
      cacheKeys.map(async (key) => {
        if (key !== cacheName) {
          console.log("[ServiceWorker] Removing old cache", key);
          await caches.delete(key);
        }
      });
    })()
  );
  return self.clients.claim();
});

// Serve the app shell from the cache
// If the file is not in the cache then try to get it via the network.
// otherwise give an error and display an offline page
// This is a just basic example, a better solution is to use the
// Service Worker Precache module https://github.com/GoogleChromeLabs/sw-precache
self.addEventListener("fetch", (e) => {
  console.log("[ServiceWorker] Fetch", e.request.url);
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }

      try {
        const response = await fetch(e.request);

        // We could cache this new resource if we wanted to.
        // const cache = await caches.open(cacheName);
        // console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        // cache.put(e.request, response.clone());
        return response;
      } catch (error) {
        console.log("Fetch failed; returning offline page instead.", error);
        // In reality you'd have many different
        // fallbacks, depending on URL & headers.
        // Eg, a fallback silhouette image for avatars.
        let url = e.request.url;
        let extension = url.split(".").pop();
        console.log("URL: ", url);

        if (extension === "jpg" || extension === "png") {
          const FALLBACK_IMAGE = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" stroke-linejoin="round">
            <path stroke="#DDD" stroke-width="25" d="M99,18 15,162H183z"/>
            <path stroke-width="17" fill="#FFF" d="M99,18 15,162H183z" stroke="#eee"/>
            <path d="M91,70a9,9 0 0,1 18,0l-5,50a4,4 0 0,1-8,0z" fill="#aaa"/>
            <circle cy="138" r="9" cx="100" fill="#aaa"/>
            </svg>`;
          return Promise.resolve(
            new Response(FALLBACK_IMAGE, {
              headers: {
                "Content-Type": "image/svg+xml",
              },
            })
          );
        }
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match("offline.html");
        return cachedResponse;
      }
    })()
  );
});
