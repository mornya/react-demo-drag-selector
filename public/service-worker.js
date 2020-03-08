self.addEventListener('install', function(event) {
  event.waitUntil(
    self.caches.open('v1').then(function(cache) {
      return cache.addAll([
        'favicon.ico',
        'index.html'
      ])
    })
  )
})
