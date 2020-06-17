const STATIC_FILES = [
  '/favicon.ico',
  '/index.html',
]
const CACHE_URLS = [
  '/fonts/',
  '/images/',
  '/medias/',
  '/scripts/',
  '/styles/',
]
const STATIC_CACHE_NAME = 'static-v1'
const RUNTIME_CACHE_NAME = 'runtime-v1'

function handleInstall (event) {
  // Cache static files
  event.waitUntil(
    self.caches.open(STATIC_CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(STATIC_FILES)
      })
      .then(self.skipWaiting())
      .catch()
  )
}

function handleActivate (event) {
  // Remove old caches
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (key) {
          if (![STATIC_CACHE_NAME, RUNTIME_CACHE_NAME].includes(key)) {
            return caches.delete(key);
          }
        }))
      })
  )
  return self.clients.claim()
}

function handleFetch (event) {
  // Responses and update cache
  for (let i = 0; i < CACHE_URLS.length; i++) {
    if (event.request.url.indexOf(CACHE_URLS[i]) !== -1) {
      // Respond to requests with an existing cache
      event.respondWith(
        caches.open(RUNTIME_CACHE_NAME)
          .then(function (cache) {
            return cache.match(event.request)
          })
          .then(function (matching) {
            return matching || fetch((event.request))
          })
      )
      event.waitUntil(
        caches.open(RUNTIME_CACHE_NAME)
          .then(function (cache) {
            return fetch(event.request)
              .then(function (response) {
                return cache.put(event.request, response)
              })
          })
      )
      break
    }
  }
}

self.addEventListener('install', handleInstall)
self.addEventListener('activate', handleActivate)
self.addEventListener('fetch', handleFetch)
