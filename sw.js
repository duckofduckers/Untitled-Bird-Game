var CACHE_NAME='bird-game-v1';
var URLS_TO_CACHE=['./','/index.html'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(cache){return cache.addAll(URLS_TO_CACHE);}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(names){return Promise.all(names.filter(function(n){return n!==CACHE_NAME;}).map(function(n){return caches.delete(n);}));}));self.clients.claim();});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request).then(function(res){var clone=res.clone();caches.open(CACHE_NAME).then(function(cache){cache.put(e.request,clone);});return res;}).catch(function(){return caches.match(e.request);}));});
