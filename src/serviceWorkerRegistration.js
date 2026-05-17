// The old Workbox service worker has been removed. This helper exists only to
// unregister any SW still installed on a returning visitor's browser so they
// stop being served stale cached assets. Once a client has run this, vanilla
// HTTP caching (see public/customHttp.yml) takes over.

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
