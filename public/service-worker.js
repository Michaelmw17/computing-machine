// Tombstone service worker.
//
// The previous build registered a Workbox SW that precached index.html and
// the hashed asset bundles. After the Vite migration we no longer want a
// SW at all, but returning visitors still have the old one installed and
// it will keep serving stale content until something replaces or removes
// it.
//
// This file is that replacement. The browser's update check fetches it,
// installs it (skipWaiting puts it straight into activating), then on
// activate it wipes every Cache Storage entry the old SW created,
// unregisters itself, and forces all open tabs to reload — so the next
// request goes to CloudFront and picks up the new /assets/* bundles.
//
// Keep this file deployed for at least a few months so any long-tail
// returning visitor evicts cleanly. It can be deleted once analytics
// shows no SW-controlled traffic.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((c) => c.navigate(c.url));
    })()
  );
});
