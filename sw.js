const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/javaScript/app.js',
  '/javaScript/footer.js',
  '/javaScript/indexPage.js',
  '/javaScript/map.js',
  '/js/materialize.min.js',
  '/stylesheets/css',
  '/img/violetHand.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

// Install service worker
self.addEventListener('install', evt => {
  // console.log('service worker has been installed');
  evt.waitUntil(
    // "caches" is a global read-only variable, which is an instance of CacheStorage
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// Activate service worker 
self.addEventListener('activate', evt => {
  // console.log('service worker has been activated');
});

// Fetch event
self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});