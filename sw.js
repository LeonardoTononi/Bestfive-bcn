const staticCacheName = 'site-static:beta.01';
const dynamicCacheName = 'site-dynamic:beta.02';
const assets = [
  '/',
  '/index.html',
  '/img/barcelona-city.png',
  '/img/violetHand.png',
  '/en/fallback.html',
  '/en/howto.html',
  '/en/about.html',
  '/en/review/iceCream.html',
  '/en/review/paella.html',
  '/en/review/streetFood.html',
  '/en/review/fancyTapas.html',
  '/en/review/localTapas.html',
  '/en/review/italian.html',
  '/en/review/terrace.html',
  '/en/review/museum.html',
  '/en/review/dayTrip.html',
  '/en/review/churro.html',
  '/en/review/church.html',
  '/en/review/beach.html',
  '/en/review/barHoppingSt.html',
  '/javaScript/app.js',
  '/javaScript/footer.js',
  '/javaScript/indexPage.js',
  '/javaScript/howto.js',
  '/javaScript/reviews.js',
  '/stylesheets/css/index.css',
  '/stylesheets/css/reviews.css',
  '/stylesheets/css/about.css',
  '/stylesheets/css/footer.css',
  '/stylesheets/css/howto.css',
  '/stylesheets/css/fallback.css',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

// Cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then(cacheRes => {
        return (
          cacheRes ||
          fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              cache.put(evt.request.url, fetchRes.clone());
              // check cached items size
              limitCacheSize(dynamicCacheName, 100);
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        if (evt.request.url.indexOf('.html') > -1) {
          return caches.match('/en/fallback.html');
        }
      })
  );
});
