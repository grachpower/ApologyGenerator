const CACHE_NAME = 'cache-v3';
const urlsToCache = [
    '/',
    '/main.bundle.js',
    'index.html',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
