/**
 * Service Worker for yasakapagodakyoto.com
 *
 * - Network-first for HTML pages so content stays fresh.
 * - Cache-first for static assets (CSS, JS, images, fonts) with a 30-day max age.
 */
const CACHE_NAME = 'yasaka-pagoda-cache-v1';
const STATIC_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

const CACHEABLE_TYPES = [
  'image/',
  'font/',
  'text/css',
  'application/javascript',
  'text/javascript',
  'application/json',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

function isCacheableByContentType(response) {
  if (!response || response.status !== 200 || response.type === 'error') {
    return false;
  }
  const contentType = response.headers.get('content-type') || '';
  return CACHEABLE_TYPES.some((type) => contentType.includes(type));
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw err;
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    const dateHeader = cached.headers.get('sw-cached-at');
    if (dateHeader) {
      const age = Date.now() - Number(dateHeader);
      if (age < STATIC_MAX_AGE_MS) return cached;
    } else {
      return cached;
    }
  }

  const networkResponse = await fetch(request);
  if (isCacheableByContentType(networkResponse)) {
    const headers = new Headers(networkResponse.headers);
    headers.set('sw-cached-at', String(Date.now()));
    const responseToCache = new Response(networkResponse.body, {
      status: networkResponse.status,
      statusText: networkResponse.statusText,
      headers,
    });
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, responseToCache.clone());
    return responseToCache;
  }
  return networkResponse;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;

  // Always go network-first for HTML (navigation requests) so the site stays fresh.
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(networkFirst(request));
    return;
  }

  // Cache cross-origin fonts and same-origin static assets.
  if (
    url.origin !== self.location.origin &&
    !request.url.includes('fonts.googleapis.com') &&
    !request.url.includes('fonts.gstatic.com')
  ) {
    return;
  }

  event.respondWith(cacheFirst(request));
});
