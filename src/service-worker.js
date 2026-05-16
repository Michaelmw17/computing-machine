/* eslint-disable no-restricted-globals, no-unused-vars */

/**
 * Service Worker "tombstone".
 *
 * Replaces the previous Workbox SW that aggressively cached the HTML, JS, CSS
 * and images of the site. That cache is the reason returning visitors might
 * otherwise see stale content after a deploy.
 *
 * On install/activate this SW:
 *   1. Skips waiting so it takes over immediately.
 *   2. Deletes every cache the old SW created (precache, fonts, images, etc.).
 *   3. Unregisters itself.
 *   4. Force-reloads any open tabs so they fetch the fresh bundle.
 *
 * After this runs once per affected client, the user is permanently SW-free
 * and goes back to vanilla HTTP caching governed by Cache-Control headers
 * (see public/customHttp.yml).
 *
 * CRA's Workbox build step still requires __WB_MANIFEST to be referenced
 * somewhere in this file — we read it then discard it.
 */

const _wbManifest = self.__WB_MANIFEST; // intentionally unused

self.addEventListener('install', () => {
  // Don't wait for the old SW to release control — activate ASAP.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
      } catch (e) {
        // Best-effort: ignore cache deletion failures.
      }

      try {
        await self.registration.unregister();
      } catch (e) {
        // ignore
      }

      // Force a reload of every open tab so they pick up fresh HTML/JS.
      try {
        const clients = await self.clients.matchAll({ type: 'window' });
        clients.forEach((client) => {
          if ('navigate' in client) {
            client.navigate(client.url);
          }
        });
      } catch (e) {
        // ignore
      }
    })()
  );
});
