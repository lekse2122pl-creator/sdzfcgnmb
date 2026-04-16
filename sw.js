self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Simple network-first or fetch-only strategy
  // Real caching logic can be added here if needed, but doing nothing allows normal network requests.
});
